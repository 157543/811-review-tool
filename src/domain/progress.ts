import type { Attempt, Mistake, Question, Session } from './models';

export type DueState='due'|'tomorrow'|'later'|'mastered'|'unscheduled';
export interface ChapterProgress {
  chapter:number; total:number; practiced:number; weak:number; learning:number; mastered:number; masteryPercent:number;
}
export interface RecentPractice {
  sessionId:string; completedAt:string; total:number; correct:number; wrong:number; uncertain:number;
}
export interface LearningDashboard {
  dueToday:number; dueTomorrow:number; practiced:number; chapters:ChapterProgress[]; recent:RecentPractice|null;
}

const DAY=86_400_000;

export function getDueState(mistake:Mistake,now=new Date()):DueState {
  if(mistake.status==='MASTERED') return 'mastered';
  if(!mistake.next_due_at) return 'unscheduled';
  const due=Date.parse(mistake.next_due_at);
  if(due<=now.getTime()) return 'due';
  if(due<=now.getTime()+DAY) return 'tomorrow';
  return 'later';
}

export function buildLearningDashboard(questions:Question[],mistakes:Mistake[],attempts:Attempt[],sessions:Session[],now=new Date()):LearningDashboard {
  const attemptedIds=new Set(attempts.map(attempt=>attempt.question_id));
  const mistakeByQuestion=new Map(mistakes.map(mistake=>[mistake.question_id,mistake]));
  const chapters=[1,2,3,4,5].map(chapter=>{
    const chapterQuestions=questions.filter(question=>question.chapter===chapter);
    const chapterMistakes=chapterQuestions.map(question=>mistakeByQuestion.get(question.id)).filter((mistake):mistake is Mistake=>Boolean(mistake));
    const mastered=chapterMistakes.filter(mistake=>mistake.status==='MASTERED').length;
    return {
      chapter,total:chapterQuestions.length,practiced:chapterQuestions.filter(question=>attemptedIds.has(question.id)).length,
      weak:chapterMistakes.filter(mistake=>mistake.status==='WEAK').length,
      learning:chapterMistakes.filter(mistake=>mistake.status==='LEARNING').length,
      mastered,masteryPercent:chapterQuestions.length?Math.round(mastered/chapterQuestions.length*100):0,
    };
  });
  const completed=[...sessions].filter(session=>Boolean(session.completed_at)).sort((a,b)=>(b.completed_at??'').localeCompare(a.completed_at??''))[0];
  const recentAttempts=completed?attempts.filter(attempt=>attempt.session_id===completed.id&&attempt.grading):[];
  const recent=completed?{
    sessionId:completed.id,completedAt:completed.completed_at!,total:recentAttempts.length,
    correct:recentAttempts.filter(attempt=>attempt.grading?.is_correct).length,
    wrong:recentAttempts.filter(attempt=>attempt.grading&&!attempt.grading.is_correct).length,
    uncertain:recentAttempts.filter(attempt=>attempt.uncertain).length,
  }:null;
  return {
    dueToday:mistakes.filter(mistake=>getDueState(mistake,now)==='due').length,
    dueTomorrow:mistakes.filter(mistake=>getDueState(mistake,now)==='tomorrow').length,
    practiced:attemptedIds.size,chapters,recent,
  };
}
