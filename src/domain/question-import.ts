import type { Question } from './models';

export function forceDraftOnImport(value: unknown):Question {
  const question=structuredClone(value) as Question;
  const existingNotes=question.review?.notes;
  question.review={
    status:'draft',
    reviewer:null,
    reviewed_at:null,
    notes:[existingNotes,'Imported by script as draft; verification promotion requires a separate review action.'].filter(Boolean).join(' ')
  };
  return question;
}
