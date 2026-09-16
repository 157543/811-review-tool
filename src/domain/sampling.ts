import type { Attempt, ErrorReason, Mistake, Question, ReasonAnnotation, Settings, StudyFilters, StudyMode } from './models';

export interface SamplingInput {
  questions: Question[];
  mistakes: Mistake[];
  attempts: Attempt[];
  reasonAnnotations: ReasonAnnotation[];
  settings: Settings;
  filters: StudyFilters;
  mode: StudyMode;
  count: number;
  now?: Date;
  random?: () => number;
}

export interface SamplingResult {
  questions: Question[];
  requestedCount: number;
  bucketCounts: Record<'due'|'recent'|'weak'|'current'|'old'|'fallback',number>;
  shortage: number;
}

function reasonQuestionIds(attempts:Attempt[], annotations:ReasonAnnotation[], reasons:ErrorReason[]) {
  if(!reasons.length) return null;
  const attemptIds=new Set(annotations.filter(annotation=>reasons.includes(annotation.reason)).map(annotation=>annotation.attempt_id));
  return new Set(attempts.filter(attempt=>attemptIds.has(attempt.id)).map(attempt=>attempt.question_id));
}

export function filterQuestions(questions:Question[], mistakes:Mistake[], attempts:Attempt[], annotations:ReasonAnnotation[], filters:StudyFilters) {
  const mistakeByQuestion=new Map(mistakes.map(mistake=>[mistake.question_id,mistake]));
  const reasonIds=reasonQuestionIds(attempts,annotations,filters.user_error_reasons);
  return questions.filter(question=>{
    const mistake=mistakeByQuestion.get(question.id);
    return (question.review.status==='reviewed'||question.review.status==='verified')
      && (!filters.chapters.length||filters.chapters.includes(question.chapter))
      && (!filters.sections.length||filters.sections.includes(question.section))
      && (!filters.knowledge_point_ids.length||filters.knowledge_point_ids.includes(question.knowledge_point_id))
      && (!filters.subtypes.length||filters.subtypes.includes(question.subtype))
      && (!filters.statuses.length||(mistake!==undefined&&filters.statuses.includes(mistake.status)))
      && (filters.min_mistake_count===null||(mistake?.mistake_count??0)>=filters.min_mistake_count)
      && (!filters.last_wrong_since||(mistake?.last_wrong_at!==null&&mistake?.last_wrong_at!==undefined&&mistake.last_wrong_at>=filters.last_wrong_since))
      && (!filters.last_wrong_before||(mistake?.last_wrong_at!==null&&mistake?.last_wrong_at!==undefined&&mistake.last_wrong_at<=filters.last_wrong_before))
      && (reasonIds===null||reasonIds.has(question.id));
  });
}

function weightedOrder(questions:Question[], settings:Settings, random:()=>number) {
  return questions.map(question=>({question,key:Math.pow(Math.max(random(),Number.EPSILON),1/(settings.chapter_weights[String(question.chapter) as keyof Settings['chapter_weights']]||1))}))
    .sort((a,b)=>b.key-a.key||a.question.id.localeCompare(b.question.id)).map(entry=>entry.question);
}

export function sampleQuestions(input:SamplingInput):SamplingResult {
  const {questions,mistakes,attempts,reasonAnnotations,settings,filters,mode,count}=input;
  const now=input.now??new Date(); const random=input.random??Math.random;
  const mistakeByQuestion=new Map(mistakes.map(mistake=>[mistake.question_id,mistake]));
  let eligible=filterQuestions(questions,mistakes,attempts,reasonAnnotations,filters);
  if(mode==='formula_pairs') eligible=eligible.filter(question=>question.subtype==='formula'||question.subtype==='transform_pair');
  if(mode==='error_focus') eligible=eligible.filter(question=>question.subtype==='error_discrimination');
  if(mode==='chapter'&&!filters.chapters.length) eligible=eligible.filter(question=>question.chapter===settings.current_chapter);
  if(mode==='mistakes') eligible=eligible.filter(question=>mistakeByQuestion.has(question.id));

  const questionById=new Map(questions.map(question=>[question.id,question]));
  const recentAttempts=[...attempts].filter(attempt=>attempt.grading!==null).sort((a,b)=>b.submitted_at.localeCompare(a.submitted_at));
  const cooldownFamilies=new Set(recentAttempts.slice(0,settings.family_cooldown_count).map(attempt=>questionById.get(attempt.question_id)?.family_id).filter((id):id is string=>Boolean(id)));
  const selected:Question[]=[]; const selectedFamilies=new Set<string>();
  const bucketCounts={due:0,recent:0,weak:0,current:0,old:0,fallback:0};
  const pick=(pool:Question[],amount:number,bucket:keyof typeof bucketCounts,relaxCooldown=false)=>{
    if(amount<=0) return;
    const ordered=weightedOrder(pool.filter(question=>!selectedFamilies.has(question.family_id)&&(relaxCooldown||mode==='mistakes'||!cooldownFamilies.has(question.family_id))),settings,random);
    let added=0;
    for(const question of ordered) {
      if(selectedFamilies.has(question.family_id)) continue;
      selected.push(question);selectedFamilies.add(question.family_id);bucketCounts[bucket]++;added++;
      if(added>=amount) break;
    }
  };

  if(mode==='today') {
    const due=eligible.filter(question=>{const mistake=mistakeByQuestion.get(question.id);return mistake?.status!=='MASTERED'&&Boolean(mistake?.next_due_at)&&Date.parse(mistake!.next_due_at!)<=now.getTime();});
    const recentCutoff=now.getTime()-settings.recent_window_days*86_400_000;
    const recent=eligible.filter(question=>{const mistake=mistakeByQuestion.get(question.id);return mistake!==undefined&&[mistake.last_wrong_at,mistake.last_uncertain_at].filter((value):value is string=>Boolean(value)).some(value=>Date.parse(value)>=recentCutoff);});
    const lastThirty=recentAttempts.slice(0,30); const knowledgeStats=new Map<string,{total:number;miss:number}>();
    for(const attempt of lastThirty) { const question=questionById.get(attempt.question_id); if(!question) continue; const stat=knowledgeStats.get(question.knowledge_point_id)??{total:0,miss:0};stat.total++;if(!attempt.grading?.is_correct||attempt.uncertain)stat.miss++;knowledgeStats.set(question.knowledge_point_id,stat); }
    const weakIds=new Set([...knowledgeStats].filter(([,stat])=>stat.total>=3&&stat.miss/stat.total>=.34).map(([id])=>id));
    const weak=eligible.filter(question=>weakIds.has(question.knowledge_point_id)||['WEAK','LEARNING'].includes(mistakeByQuestion.get(question.id)?.status??''));
    const current=eligible.filter(question=>question.chapter===settings.current_chapter);
    const old=eligible.filter(question=>question.chapter!==settings.current_chapter);
    pick(due,count,'due');
    pick(recent,Math.min(3,count-selected.length),'recent');
    pick(weak,Math.min(2,count-selected.length),'weak');
    pick(current,Math.min(3,count-selected.length),'current');
    pick(old,Math.min(2,count-selected.length),'old');
  } else pick(eligible,count,'fallback');

  pick(eligible,count-selected.length,'fallback');
  pick(eligible,count-selected.length,'fallback',true);
  return {questions:selected,requestedCount:count,bucketCounts,shortage:Math.max(0,count-selected.length)};
}
