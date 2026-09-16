import type { Attempt, Mistake, Question, SchedulePolicy } from './models';
import { EMPTY_REASON_DISTRIBUTION } from './models';

export const DEFAULT_POLICY: SchedulePolicy = { id:'simple-spaced-v1-1-3-7', algorithm_version:'simple-spaced-v1', review_intervals_days:[1,3,7], min_separation_ms:86400000, required_correct_streak:3, uncertain_resets_streak:true };
const DAY = 86_400_000;
const plusDays = (iso:string, days:number) => new Date(Date.parse(iso) + days * DAY).toISOString();

export function updateMistake(previous:Mistake|undefined, attempt:Attempt, question:Question, policy:SchedulePolicy=DEFAULT_POLICY):Mistake|undefined {
  if (!attempt.grading) return previous;
  const now=attempt.grading.graded_at;
  const wrong=!attempt.grading.is_correct;
  const reset=wrong || attempt.uncertain;
  if (!previous && !reset) return undefined;
  const base:Mistake=previous ?? {
    schema_version:'1.0.0', question_id:question.id, family_id:question.family_id, status:'WEAK', first_collected_at:now,
    collection_reasons:[], attempt_count:0, mistake_count:0, uncertain_count:0, latest_attempt_id:attempt.id,
    last_wrong_attempt_id:null,last_uncertain_attempt_id:null,last_wrong_at:null,last_uncertain_at:null,last_attempt_at:now,
    error_reason_distribution:{...EMPTY_REASON_DISTRIBUTION},unclassified_wrong_count:0,spaced_correct_streak:0,
    last_qualifying_review_at:null,next_due_at:plusDays(now,policy.review_intervals_days[0]),mastered_at:null,schedule_rule_version:'simple-spaced-v1',updated_at:now
  };
  const result:Mistake={...base,collection_reasons:[...base.collection_reasons],error_reason_distribution:{...base.error_reason_distribution},attempt_count:base.attempt_count+1,latest_attempt_id:attempt.id,last_attempt_at:attempt.submitted_at,updated_at:now};
  if (wrong) { result.mistake_count++; result.last_wrong_attempt_id=attempt.id; result.last_wrong_at=attempt.submitted_at; if(!result.collection_reasons.includes('WRONG')) result.collection_reasons.push('WRONG'); result.unclassified_wrong_count++; }
  if (attempt.uncertain) { result.uncertain_count++; result.last_uncertain_attempt_id=attempt.id; result.last_uncertain_at=attempt.submitted_at; if(!result.collection_reasons.includes('UNCERTAIN')) result.collection_reasons.push('UNCERTAIN'); }
  if (reset) { result.status='WEAK'; result.spaced_correct_streak=0; result.last_qualifying_review_at=null; result.mastered_at=null; result.next_due_at=plusDays(now,policy.review_intervals_days[0]); return result; }
  const last=result.last_qualifying_review_at ? Date.parse(result.last_qualifying_review_at) : -Infinity;
  const due=result.next_due_at ? Date.parse(result.next_due_at) : -Infinity;
  const current=Date.parse(now);
  if (current < due || current-last < policy.min_separation_ms) return result;
  result.spaced_correct_streak=Math.min(policy.required_correct_streak,result.spaced_correct_streak+1);
  result.last_qualifying_review_at=now;
  if (result.spaced_correct_streak>=policy.required_correct_streak) { result.status='MASTERED'; result.mastered_at=now; result.next_due_at=null; }
  else { result.status='LEARNING'; result.mastered_at=null; result.next_due_at=plusDays(now,policy.review_intervals_days[result.spaced_correct_streak]); }
  return result;
}
