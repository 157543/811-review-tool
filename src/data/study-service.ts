import type { Attempt, BankChannel, GradingMode, OptionId, Question, QuestionSnapshot, Session, StudyFilters, StudyMode } from '../domain/models';
import { EMPTY_FILTERS } from '../domain/models';
import { db } from './database';
import { DEFAULT_POLICY, updateMistake } from '../domain/schedule';

const order:[OptionId,OptionId,OptionId,OptionId]=['A','B','C','D'];
const uid=(prefix:string)=>`${prefix}-${crypto.randomUUID()}`;
async function sha256(value:unknown) {
  const bytes=new TextEncoder().encode(JSON.stringify(value));
  return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))).map(x=>x.toString(16).padStart(2,'0')).join('');
}

export async function installBank(questions:Question[],channel:BankChannel='release',authorizedLearningRelease=false) {
  const accepted=channel==='reviewed-beta'
    ? (question:Question)=>question.review.status==='reviewed'
    : authorizedLearningRelease
      ? (question:Question)=>question.review.status==='reviewed'
      : (question:Question)=>question.review.status==='verified';
  if (questions.some(question=>!accepted(question))) {
    throw new Error(channel==='reviewed-beta'?'Reviewed/Beta题库只接受 reviewed 题目':authorizedLearningRelease?'获准发布的正式学习题库只接受 reviewed 题目':'正式题库只接受 verified 题目');
  }
  await db.transaction('rw',[db.questions,db.schedulePolicies,db.settings],async()=>{
    await db.questions.clear(); await db.questions.bulkPut(questions); await db.schedulePolicies.put(DEFAULT_POLICY);
    if(!await db.settings.get('primary')) await db.settings.put({id:'primary',current_chapter:5,grading_mode:'immediate',timezone:'Asia/Shanghai',sampling_rule_version:'phase1-default-v1',schedule_rule_version:'simple-spaced-v1',schedule_policy_id:DEFAULT_POLICY.id,review_intervals_days:[1,3,7],chapter_weights:{'1':0.8,'2':1.1,'3':1.2,'4':1.4,'5':1.5},recent_window_days:14,family_cooldown_count:15});
  });
}

export async function startSession(questions:Question[], mode:StudyMode, gradingMode:GradingMode, bankVersion:string, filters:StudyFilters=EMPTY_FILTERS):Promise<Session> {
  if (!questions.length) throw new Error('当前题库没有可用题目');
  const snapshots:QuestionSnapshot[]=[];
  for (const q of questions) {
    const hash=await sha256(q);
    snapshots.push({snapshot_id:`${q.id}.r${q.revision}.${hash.slice(0,12)}`,question_id:q.id,revision:q.revision,bank_version:bankVersion,content_hash:hash,content:q});
  }
  const session:Session={schema_version:'1.0.0',id:uid('session'),bank_version:bankVersion,mode,filters:structuredClone(filters),grading_mode:gradingMode,queue:snapshots.map(s=>({question_id:s.question_id,revision:s.revision,question_snapshot_id:s.snapshot_id,option_order:[...order],attempt_id:null})),current_index:0,review_index:0,pending_selection:null,pending_uncertain:false,pending_reason_attempt_ids:[],started_at:new Date().toISOString(),completed_at:null,review_completed_at:null};
  await db.transaction('rw',[db.questions,db.snapshots,db.sessions,db.schedulePolicies],async()=>{
    const supersededAt=new Date().toISOString();
    for(const previous of await db.sessions.filter(candidate=>candidate.completed_at===null||(candidate.grading_mode==='end_of_session'&&candidate.review_completed_at===null)).toArray()) {
      previous.completed_at??=supersededAt;previous.review_completed_at??=supersededAt;await db.sessions.put(previous);
    }
    await db.questions.bulkPut(questions);await db.snapshots.bulkPut(snapshots);await db.schedulePolicies.put(DEFAULT_POLICY);await db.sessions.put(session);
  });
  return session;
}

export async function submitAnswer(sessionId:string, selected:OptionId, uncertain:boolean):Promise<{attempt:Attempt;session:Session}> {
  return db.transaction('rw',[db.sessions,db.snapshots,db.attempts,db.mistakes],async()=>{
    const session=await db.sessions.get(sessionId); if(!session) throw new Error('会话不存在');
    const item=session.queue[session.current_index]; if(!item) throw new Error('本轮已完成'); if(item.attempt_id) throw new Error('该题已提交');
    const snapshot=await db.snapshots.get(item.question_snapshot_id); if(!snapshot) throw new Error('题目快照不存在');
    const now=new Date().toISOString(); const immediate=session.grading_mode==='immediate';
    const attempt:Attempt={schema_version:'1.0.0',id:uid('attempt'),session_id:session.id,position:session.current_index,question_id:item.question_id,question_revision:item.revision,question_snapshot_id:item.question_snapshot_id,bank_version:session.bank_version,selected_option_id:selected,option_order:item.option_order,uncertain,submitted_at:now,grading:immediate?{is_correct:selected===snapshot.content.correct_option,correct_option_id:snapshot.content.correct_option,graded_at:now}:null,schedule_policy_id:DEFAULT_POLICY.id};
    await db.attempts.add(attempt); item.attempt_id=attempt.id;
    if(immediate) { const mistake=updateMistake(await db.mistakes.get(item.question_id),attempt,snapshot.content); if(mistake) await db.mistakes.put(mistake); if(!attempt.grading!.is_correct || uncertain) session.pending_reason_attempt_ids.push(attempt.id); }
    if(session.grading_mode==='end_of_session') {
      session.current_index++;
      if(session.current_index===session.queue.length) { await gradeSessionInTransaction(session); session.completed_at=new Date().toISOString(); }
    }
    session.pending_selection=null; session.pending_uncertain=false; await db.sessions.put(session); return {attempt,session};
  });
}

export async function advanceImmediateSession(sessionId:string):Promise<Session> {
  return db.transaction('rw',db.sessions,async()=>{
    const session=await db.sessions.get(sessionId); if(!session) throw new Error('会话不存在');
    if(session.grading_mode!=='immediate') throw new Error('只有即时判题会话需要逐题推进');
    const item=session.queue[session.current_index]; if(!item?.attempt_id) throw new Error('当前题尚未提交');
    if(session.pending_reason_attempt_ids.includes(item.attempt_id)) throw new Error('请先登记当前题错因');
    session.current_index++;
    if(session.current_index>=session.queue.length) session.completed_at=new Date().toISOString();
    session.pending_selection=null;session.pending_uncertain=false;await db.sessions.put(session);return session;
  });
}

export async function advanceReview(sessionId:string):Promise<Session> {
  return db.transaction('rw',db.sessions,async()=>{
    const session=await db.sessions.get(sessionId); if(!session) throw new Error('会话不存在');
    const item=session.queue[session.review_index];
    if(item?.attempt_id&&session.pending_reason_attempt_ids.includes(item.attempt_id)) throw new Error('请先登记当前题错因');
    session.review_index=Math.min(session.queue.length,session.review_index+1);
    if(session.review_index>=session.queue.length) session.review_completed_at=new Date().toISOString();
    await db.sessions.put(session); return session;
  });
}

export async function getRecoverableSession():Promise<Session|null> {
  const sessions=await db.sessions.orderBy('started_at').reverse().toArray();
  return sessions.find(session=>session.completed_at===null||(session.grading_mode==='end_of_session'&&session.review_completed_at===null))??null;
}

export async function getSessionAttempts(sessionId:string) {
  return (await db.attempts.where('session_id').equals(sessionId).toArray()).sort((a,b)=>a.position-b.position);
}

async function gradeSessionInTransaction(session:Session) {
  const attempts=(await db.attempts.where('session_id').equals(session.id).toArray()).sort((a,b)=>a.position-b.position);
  const gradedAt=new Date().toISOString();
  for(const attempt of attempts) {
    if(attempt.grading) continue;
    const snapshot=await db.snapshots.get(attempt.question_snapshot_id); if(!snapshot) throw new Error('题目快照不存在');
    attempt.grading={is_correct:attempt.selected_option_id===snapshot.content.correct_option,correct_option_id:snapshot.content.correct_option,graded_at:gradedAt};
    await db.attempts.put(attempt); const mistake=updateMistake(await db.mistakes.get(attempt.question_id),attempt,snapshot.content); if(mistake) await db.mistakes.put(mistake);
    if(!attempt.grading.is_correct || attempt.uncertain) session.pending_reason_attempt_ids.push(attempt.id);
  }
}

export async function savePending(sessionId:string, selection:OptionId|null, uncertain:boolean) { await db.sessions.update(sessionId,{pending_selection:selection,pending_uncertain:uncertain}); }
