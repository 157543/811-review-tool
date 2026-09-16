import { useEffect, useMemo, useRef, useState } from 'react';
import type { Attempt, BankChannel, ErrorReason, GradingMode, Mistake, OptionId, Question, Session, Settings, StudyFilters, StudyMode } from './domain/models';
import { EMPTY_FILTERS } from './domain/models';
import { db } from './data/database';
import { advanceImmediateSession, advanceReview, getRecoverableSession, installBank, savePending, startSession, submitAnswer } from './data/study-service';
import { annotateReason } from './data/reason-service';
import { createFullBackup, restoreFullBackup } from './data/backup';
import { createMistakeExport, downloadText, exportMistakesCsv, exportMistakesJson, exportMistakesMarkdown } from './data/export-service';
import { loadMistakeRows, type MistakeRow } from './data/mistake-service';
import { sampleQuestions } from './domain/sampling';
import release from '../data/questions/release.json';
import reviewedBeta from '../data/questions/reviewed-beta.json';
import reasons from '../data/registries/error-reasons.json';
import { MathText } from './components/MathText';
import { FilterPanel } from './components/FilterPanel';
import './styles.css';

type Screen='home'|'quiz'|'review'|'mistakes'|'done';
const releaseData=release as {bank_version:string;channel?:'release';publication?:{status:string;scope:string;required_review_status:string};questions:Question[]};
const betaData=reviewedBeta as {bank_version:string;channel:'reviewed-beta';questions:Question[]};
type UserBankChannel=Extract<BankChannel,'release'|'reviewed-beta'>;
const cards:Array<{mode:StudyMode;eyebrow:string;title:string;description:string}>= [
  {mode:'today',eyebrow:'DAILY',title:'今日 10 题',description:'3 近期错题 · 2 薄弱点 · 3 当前章 · 2 旧章节'},
  {mode:'formula_pairs',eyebrow:'FORMULA',title:'公式与变换对',description:'集中识别性质、系数和常见变换对'},
  {mode:'error_focus',eyebrow:'FOCUS',title:'易错专项',description:'针对符号、尺度、2π 与条件陷阱'},
  {mode:'chapter',eyebrow:'CHAPTER',title:'按章节复习',description:'选择一章或多章，保留其他筛选条件'},
  {mode:'mistakes',eyebrow:'REVIEW',title:'错题本',description:'筛选、统计、重做并导出错题'},
];
const optionLabels:OptionId[]=['A','B','C','D'];

function testQuestions():Question[] {
  if(import.meta.env.MODE!=='test') return [];
  try { return JSON.parse(localStorage.getItem('__811_TEST_QUESTIONS__')??'[]') as Question[]; } catch { return []; }
}

function needReason(attempt:Attempt|null) { return Boolean(attempt?.grading&&(!attempt.grading.is_correct||attempt.uncertain)); }

export default function App() {
  const initialized=useRef(false); const restoreInput=useRef<HTMLInputElement>(null);
  const pendingRef=useRef<{selection:OptionId|null;uncertain:boolean}>({selection:null,uncertain:false});
  const [questions,setQuestions]=useState<Question[]>([]); const [screen,setScreen]=useState<Screen>('home');
  const [bankChannel,setBankChannel]=useState<UserBankChannel>('release');
  const [count,setCount]=useState(10); const [gradingMode,setGradingMode]=useState<GradingMode>('immediate'); const [filters,setFilters]=useState<StudyFilters>(structuredClone(EMPTY_FILTERS));
  const [session,setSession]=useState<Session|null>(null); const [current,setCurrent]=useState<Question|null>(null); const [attempt,setAttempt]=useState<Attempt|null>(null);
  const [selected,setSelected]=useState<OptionId|null>(null); const [uncertain,setUncertain]=useState(false); const [mistakeRows,setMistakeRows]=useState<MistakeRow[]>([]);
  const [allMistakes,setAllMistakes]=useState<Mistake[]>([]); const [notice,setNotice]=useState(''); const [error,setError]=useState(''); const [busy,setBusy]=useState(false);
  const injectedQuestions=useMemo(testQuestions,[]);
  const activeChannel:BankChannel=injectedQuestions.length?'test-fixture':bankChannel;
  const authorizedLearningRelease=!injectedQuestions.length&&bankChannel==='release'&&releaseData.publication?.status==='authorized'&&releaseData.publication.scope==='phase1-learning-release'&&releaseData.publication.required_review_status==='reviewed';
  const bankVersion=injectedQuestions.length?'test-fixture':bankChannel==='reviewed-beta'?betaData.bank_version:releaseData.bank_version;

  useEffect(()=>{if(initialized.current)return;initialized.current=true;void initialize();},[]);
  useEffect(()=>{if(screen==='mistakes'&&questions.length) void refreshMistakes();},[screen,filters,questions]);

  async function initialize() {
    setBusy(true); try {
      const bank=injectedQuestions.length?injectedQuestions:bankChannel==='reviewed-beta'?betaData.questions:releaseData.questions; await installBank(bank,activeChannel,authorizedLearningRelease); setQuestions(bank);
      const settings=await db.settings.get('primary'); if(settings) setGradingMode(settings.grading_mode);
      setAllMistakes(await db.mistakes.toArray());
      const recovered=await getRecoverableSession(); if(recovered) { setNotice('已恢复上次未完成的会话，题目顺序和进度保持不变。'); await openSession(recovered); }
    } catch(cause){setError((cause as Error).message);} finally {setBusy(false);}
  }

  async function openSession(next:Session) {
    setSession(next);pendingRef.current={selection:null,uncertain:false};setSelected(null);setUncertain(false);setAttempt(null);
    if(next.completed_at&&next.grading_mode==='end_of_session'&&!next.review_completed_at) { setScreen('review');await loadReviewItem(next);return; }
    if(next.completed_at) {setScreen('done');setCurrent(null);return;}
    setScreen('quiz');await loadQuizItem(next);
  }

  async function loadQuizItem(next:Session) {
    const item=next.queue[next.current_index]; if(!item){setScreen('done');return;}
    const snapshot=await db.snapshots.get(item.question_snapshot_id); if(!snapshot) throw new Error('题目快照不存在');
    setCurrent(snapshot.content);
    if(item.attempt_id) { const saved=await db.attempts.get(item.attempt_id);const selection=saved?.selected_option_id??null;const pendingUncertain=saved?.uncertain??false;pendingRef.current={selection,uncertain:pendingUncertain};setAttempt(saved??null);setSelected(selection);setUncertain(pendingUncertain); }
    else {pendingRef.current={selection:next.pending_selection,uncertain:next.pending_uncertain};setAttempt(null);setSelected(next.pending_selection);setUncertain(next.pending_uncertain);}
  }

  async function loadReviewItem(next:Session) {
    const item=next.queue[next.review_index]; if(!item){setScreen('done');return;}
    const [snapshot,saved]=await Promise.all([db.snapshots.get(item.question_snapshot_id),item.attempt_id?db.attempts.get(item.attempt_id):undefined]);
    if(!snapshot||!saved?.grading) throw new Error('轮末结果缺少题目快照或判分记录');
    setCurrent(snapshot.content);setAttempt(saved);setSelected(saved.selected_option_id);setUncertain(saved.uncertain);
  }

  async function begin(mode:StudyMode,override?:Question[]) {
    setBusy(true);setError('');setNotice(''); try {
      const settings=await db.settings.get('primary'); if(!settings) throw new Error('学习设置尚未初始化');
      const [mistakes,attempts,annotations]=await Promise.all([db.mistakes.toArray(),db.attempts.toArray(),db.reasonAnnotations.toArray()]);
      const sampled=override?{questions:override,shortage:Math.max(0,count-override.length)}:sampleQuestions({questions,mistakes,attempts,reasonAnnotations:annotations,settings,filters,mode,count});
      if(!sampled.questions.length) throw new Error(mode==='mistakes'?'当前筛选下没有可重做的错题':'当前筛选下没有可用题目');
      if(sampled.shortage>0) setNotice(`候选不足，已安全缩短为 ${sampled.questions.length} 题；没有重复 family。`);
      const next=await startSession(sampled.questions,mode,gradingMode,bankVersion,filters);await openSession(next);
    } catch(cause){setError((cause as Error).message);} finally {setBusy(false);}
  }

  async function persistSelection(value:OptionId|null,nextUncertain=uncertain) {
    pendingRef.current={selection:value,uncertain:nextUncertain};setSelected(value); if(session) await savePending(session.id,value,nextUncertain);
  }
  async function persistUncertain(value:boolean) {const selection=pendingRef.current.selection;pendingRef.current={selection,uncertain:value};setUncertain(value);if(session)await savePending(session.id,selection,value);}

  async function answer() {
    if(!selected||!session||attempt)return;setBusy(true);setError('');try {
      const result=await submitAnswer(session.id,selected,uncertain);setSession(result.session);
      if(session.grading_mode==='immediate') setAttempt(result.attempt);
      else if(result.session.completed_at) {setScreen('review');await loadReviewItem(result.session);}
      else await loadQuizItem(result.session);
      setAllMistakes(await db.mistakes.toArray());
    } catch(cause){setError((cause as Error).message);}finally{setBusy(false);}
  }

  async function saveReason(reason:ErrorReason) {
    if(!attempt||!session)return;setBusy(true);try{await annotateReason(attempt.id,reason);const updated=await db.sessions.get(session.id);if(updated)setSession(updated);setAllMistakes(await db.mistakes.toArray());}catch(cause){setError((cause as Error).message);}finally{setBusy(false);}
  }

  async function nextImmediate() {
    if(!session||!attempt)return;if(needReason(attempt)&&session.pending_reason_attempt_ids.includes(attempt.id)){setError('请先点选本题错因。');return;}
    const next=await advanceImmediateSession(session.id);if(next.completed_at){setSession(next);setScreen('done');setCurrent(null);setAttempt(null);}else await openSession(next);
  }

  async function nextReview() {
    if(!session||!attempt)return;if(needReason(attempt)&&session.pending_reason_attempt_ids.includes(attempt.id)){setError('请先点选本题错因。');return;}
    const next=await advanceReview(session.id);setSession(next);if(next.review_completed_at){setScreen('done');setCurrent(null);setAttempt(null);}else await loadReviewItem(next);
  }

  async function refreshMistakes() {setMistakeRows(await loadMistakeRows(filters));setAllMistakes(await db.mistakes.toArray());}

  async function switchBank(channel:UserBankChannel) {
    setBusy(true);setError('');setNotice('');try {
      const bank=channel==='reviewed-beta'?betaData.questions:releaseData.questions;
      const authorized=channel==='release'&&releaseData.publication?.status==='authorized'&&releaseData.publication.scope==='phase1-learning-release'&&releaseData.publication.required_review_status==='reviewed';
      await installBank(bank,channel,authorized);setQuestions(bank);setBankChannel(channel);setMistakeRows([]);
      setNotice(channel==='reviewed-beta'?`已切换到 Reviewed/Beta 题库，共 ${bank.length} 题。`:`已切换到正式题库，共 ${bank.length} 题。`);
    } catch(cause){setError((cause as Error).message);}finally{setBusy(false);}
  }

  async function exportMistakes(kind:'md'|'csv'|'json') {
    setBusy(true);try{const bundle=await createMistakeExport(filters);const stamp=new Date().toISOString().slice(0,10);if(kind==='md')downloadText(`811-mistakes-${stamp}.md`,'text/markdown;charset=utf-8',exportMistakesMarkdown(bundle));if(kind==='csv')downloadText(`811-mistakes-${stamp}.csv`,'text/csv;charset=utf-8',exportMistakesCsv(bundle));if(kind==='json')downloadText(`811-mistakes-${stamp}.json`,'application/json;charset=utf-8',exportMistakesJson(bundle));setNotice(`已导出 ${bundle.items.length} 道错题。`);}catch(cause){setError((cause as Error).message);}finally{setBusy(false);}
  }

  async function exportBackup() {const backup=await createFullBackup();downloadText(`811-backup-${new Date().toISOString().slice(0,10)}.json`,'application/json;charset=utf-8',JSON.stringify(backup,null,2)+'\n');setNotice('完整 JSON 备份已生成。');}
  async function importBackup(file:File) {setBusy(true);try{const bundle=JSON.parse(await file.text());await restoreFullBackup(bundle);await installBank(questions,activeChannel,authorizedLearningRelease);setAllMistakes(await db.mistakes.toArray());setNotice('备份恢复完成。');const recovered=await getRecoverableSession();if(recovered)await openSession(recovered);else setScreen('home');}catch(cause){setError((cause as Error).message);}finally{setBusy(false);if(restoreInput.current)restoreInput.current.value='';}}

  const answeredCount=session?.queue.filter(item=>item.attempt_id).length??0;
  const pendingReason=Boolean(attempt&&session?.pending_reason_attempt_ids.includes(attempt.id));
  const orderedOptions=useMemo(()=>current&&session?(session.queue[screen==='review'?session.review_index:session.current_index]?.option_order??optionLabels).map(id=>current.options.find(option=>option.id===id)!).filter(Boolean):[],[current,session,screen]);

  if(screen==='home') return <main className="shell">
    <header className="masthead"><span className="brand-mark">811</span><div><p className="kicker">SIGNALS · SYSTEMS · REVIEW</p><h1>把公式认准，<br/>把陷阱看穿。</h1><p className="lede">从抽题、判题、错因到间隔重做，全部记录在本机。</p></div><aside><span>{injectedQuestions.length?'隔离测试题库':bankChannel==='reviewed-beta'?'Reviewed / Beta 题库':'正式题库'}</span><strong>{questions.length}<small> / 305</small></strong><p>{injectedQuestions.length?'仅供自动化测试':bankChannel==='reviewed-beta'?'已人工审题，可用于实际刷题':'项目方已授权的 Phase 1 学习题库'}</p></aside></header>
    <section className="controls" aria-label="练习设置">{!injectedQuestions.length&&<label><span>题库模式</span><select value={bankChannel} onChange={event=>void switchBank(event.target.value as UserBankChannel)}><option value="reviewed-beta">Reviewed / Beta</option><option value="release">正式 Release</option></select></label>}<div><span>本轮题量</span>{[5,10,20].map(value=><button aria-pressed={count===value} className={count===value?'active':''} key={value} onClick={()=>setCount(value)}>{value}</button>)}</div><label><span>判题方式</span><select value={gradingMode} onChange={event=>{const value=event.target.value as GradingMode;setGradingMode(value);void db.settings.update('primary',{grading_mode:value});}}><option value="immediate">答完立即判题</option><option value="end_of_session">本轮统一判题</option></select></label></section>
    <FilterPanel filters={filters} onChange={setFilters} questions={questions}/>
    {notice&&<p className="notice success" role="status">{notice}</p>}{error&&<p className="notice" role="alert">{error}</p>}
    <section className="card-grid">{cards.map((card,index)=><button disabled={busy} className="mode-card" key={card.mode} onClick={()=>card.mode==='mistakes'?setScreen('mistakes'):void begin(card.mode)}><span>{card.eyebrow}</span><b>0{index+1}</b><h2>{card.title}</h2><p>{card.description}</p><i>{card.mode==='mistakes'?`${allMistakes.length} 道记录`:'开始 →'}</i></button>)}</section>
    <section className="data-actions"><div><strong>本地数据</strong><span>用于迁移或完整恢复当前学习记录</span></div><button onClick={()=>void exportBackup()}>导出完整备份</button><button onClick={()=>restoreInput.current?.click()}>恢复 JSON 备份</button><input ref={restoreInput} className="visually-hidden" type="file" accept="application/json,.json" onChange={event=>{const file=event.target.files?.[0];if(file)void importBackup(file);}}/></section>
    <footer>Phase 1 · 默认即时判题 · {injectedQuestions.length?'隔离测试':bankChannel==='reviewed-beta'?`Reviewed/Beta ${questions.length} / 305`:`正式题库 ${questions.length} / 305`}</footer>
  </main>;

  if(screen==='mistakes') return <main className="shell mistakes-screen"><header className="section-head"><button onClick={()=>setScreen('home')}>← 返回首页</button><div><p className="kicker">MISTAKE BOOK</p><h1>错题本</h1><p>共 {mistakeRows.length} 道符合条件的记录</p></div></header><FilterPanel title="错题筛选" filters={filters} onChange={setFilters} questions={questions}/>{notice&&<p className="notice success" role="status">{notice}</p>}{error&&<p className="notice" role="alert">{error}</p>}<div className="export-bar"><button onClick={()=>void begin('mistakes',mistakeRows.slice(0,count).map(row=>row.question))} disabled={!mistakeRows.length}>重做筛选结果</button><button onClick={()=>void exportMistakes('md')}>Markdown</button><button onClick={()=>void exportMistakes('csv')}>CSV</button><button onClick={()=>void exportMistakes('json')}>JSON</button><button onClick={()=>void exportBackup()}>完整备份</button></div><section className="mistake-list">{mistakeRows.map(({question,mistake})=><article key={question.id}><div><span>第 {question.chapter} 章 · {question.knowledge_point}</span><b>{mistake.status}</b></div><h2><MathText text={question.stem}/></h2><dl><div><dt>答错</dt><dd>{mistake.mistake_count}</dd></div><div><dt>不确定</dt><dd>{mistake.uncertain_count}</dd></div><div><dt>连续有效正确</dt><dd>{mistake.spaced_correct_streak} / 3</dd></div></dl><button onClick={()=>void begin('mistakes',[question])}>重做此题</button></article>)}{!mistakeRows.length&&<p className="empty-state">当前筛选下没有错题。完成一次答错或“不确定”作答后会自动收纳。</p>}</section></main>;

  if(screen==='done') return <main className="shell done"><p className="kicker">SESSION COMPLETE</p><h1>本轮完成</h1><p>{session?.grading_mode==='end_of_session'?'整轮已统一判分并完成逐题复盘。':'每次作答均已即时判定并保存。'}</p><button className="primary" onClick={()=>{setScreen('home');setSession(null);setNotice('本轮记录已保存。');}}>返回首页</button></main>;

  if(!current||!session) return <main className="shell"><p>正在恢复会话…</p></main>;
  if(screen==='review'&&attempt?.grading) return <main className="quiz-shell review-shell"><header className="quiz-top"><button onClick={()=>setScreen('home')}>← 暂停复盘</button><div><span>轮末逐题结果</span><strong>{session.review_index+1} / {session.queue.length}</strong></div></header><div className="progress"><i style={{width:`${(session.review_index+1)/session.queue.length*100}%`}}/></div><article className="question-card"><div className="meta"><span>第 {current.chapter} 章</span><span>{current.knowledge_point}</span></div><h1><MathText text={current.stem}/></h1><ResultOptions question={current} order={session.queue[session.review_index].option_order} attempt={attempt}/><Feedback question={current} attempt={attempt} pendingReason={pendingReason} onReason={saveReason}/>{error&&<p className="notice" role="alert">{error}</p>}<div className="action-row"><button className="primary" disabled={pendingReason||busy} onClick={()=>void nextReview()}>{session.review_index+1===session.queue.length?'完成复盘':'下一条结果'}</button></div></article></main>;

  return <main className="quiz-shell"><header className="quiz-top"><button onClick={()=>setScreen('home')}>← 暂停</button><div><span>{!injectedQuestions.length&&bankChannel==='reviewed-beta'?'Beta · ':''}{cards.find(card=>card.mode===session.mode)?.title}</span><strong>{Math.min(session.current_index+1,session.queue.length)} / {session.queue.length}</strong></div></header><div className="progress"><i style={{width:`${Math.max(answeredCount,session.current_index)/session.queue.length*100}%`}}/></div>{notice&&<p className="notice success" role="status">{notice}</p>}<article className="question-card"><div className="meta"><span>第 {current.chapter} 章</span><span>{current.knowledge_point}</span></div><h1><MathText text={current.stem}/></h1><div className="options">{orderedOptions.map((option,index)=>{const chosen=selected===option.id;const reveal=attempt?.grading&&option.id===attempt.grading.correct_option_id;const wrong=attempt?.grading&&chosen&&!attempt.grading.is_correct;return <button aria-label={`选项 ${optionLabels[index]}`} key={option.id} disabled={Boolean(attempt)} className={[chosen?'selected':'',reveal?'correct':'',wrong?'wrong':''].join(' ')} onClick={()=>void persistSelection(option.id)}><b>{optionLabels[index]}</b><span><MathText text={option.content}/></span></button>;})}</div>{!attempt&&<label className="uncertain"><input type="checkbox" checked={uncertain} onChange={event=>void persistUncertain(event.target.checked)}/><span>我不确定</span><small>答对也会进入待巩固</small></label>}{attempt?.grading&&<Feedback question={current} attempt={attempt} pendingReason={pendingReason} onReason={saveReason}/>} {error&&<p className="notice" role="alert">{error}</p>}<div className="action-row">{!attempt?<button className="primary" disabled={!selected||busy} onClick={()=>void answer()}>提交答案</button>:<button className="primary" disabled={pendingReason||busy} onClick={()=>void nextImmediate()}>{session.current_index+1===session.queue.length?'完成本轮':'下一题'}</button>}</div></article></main>;
}

function ResultOptions({question,order,attempt}:{question:Question;order:OptionId[];attempt:Attempt}) {return <div className="options result-options">{order.map((id,index)=>{const option=question.options.find(candidate=>candidate.id===id)!;const chosen=attempt.selected_option_id===id;const correct=attempt.grading?.correct_option_id===id;return <div className={[chosen?'selected':'',correct?'correct':'',chosen&&!correct?'wrong':''].join(' ')} key={id}><b>{optionLabels[index]}</b><span><MathText text={option.content}/></span></div>;})}</div>;}

function Feedback({question,attempt,pendingReason,onReason}:{question:Question;attempt:Attempt;pendingReason:boolean;onReason:(reason:ErrorReason)=>Promise<void>}) {
  if(!attempt.grading)return null;const needs=needReason(attempt);const explanation=splitExplanation(question.explanation);
  return <section className={`feedback ${attempt.grading.is_correct?'ok':'bad'}`}><p className="verdict">{attempt.grading.is_correct?(attempt.uncertain?'答对，但你标记了不确定':'回答正确'):'再看一眼'}</p><p className="correct-answer"><strong>正确答案：</strong><MathText text={question.options.find(option=>option.id===attempt.grading?.correct_option_id)?.content??''}/></p><div className="explanation"><strong>短解析</strong><p><MathText text={explanation.short}/></p></div>{explanation.pitfall&&<div className="pitfall"><strong>易错点</strong><p><MathText text={explanation.pitfall}/></p></div>}{needs&&pendingReason&&<div className="reasons"><span>{attempt.grading.is_correct?'不确定的原因是？':'这次错在哪里？'}</span>{reasons.items.map(reason=><button key={reason.id} onClick={()=>void onReason(reason.id as ErrorReason)}>{reason.label}</button>)}</div>}{needs&&!pendingReason&&<small>错因已记录</small>}</section>;
}

function splitExplanation(value:string) {
  const match=/易错(?:点|提醒)[：:]/.exec(value);
  if(!match||match.index===undefined) return {short:value.trim(),pitfall:''};
  return {short:value.slice(0,match.index).trim(),pitfall:value.slice(match.index+match[0].length).trim()};
}
