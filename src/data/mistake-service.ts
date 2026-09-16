import type { Mistake, Question, StudyFilters } from '../domain/models';
import { filterQuestions } from '../domain/sampling';
import { db } from './database';

export interface MistakeRow { question:Question; mistake:Mistake }

export async function loadMistakeRows(filters:StudyFilters):Promise<MistakeRow[]> {
  const [questions,mistakes,attempts,annotations]=await Promise.all([db.questions.toArray(),db.mistakes.toArray(),db.attempts.toArray(),db.reasonAnnotations.toArray()]);
  const allowed=new Set(filterQuestions(questions,mistakes,attempts,annotations,filters).map(question=>question.id));
  const questionById=new Map(questions.map(question=>[question.id,question]));
  return mistakes.filter(mistake=>allowed.has(mistake.question_id)&&questionById.has(mistake.question_id)).map(mistake=>({mistake,question:questionById.get(mistake.question_id)!})).sort((a,b)=>(a.mistake.next_due_at??'').localeCompare(b.mistake.next_due_at??'')||b.mistake.updated_at.localeCompare(a.mistake.updated_at));
}
