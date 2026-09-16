import type { ErrorReason } from '../domain/models';
import { db } from './database';

export async function annotateReason(attemptId:string, reason:ErrorReason) {
  await db.transaction('rw',[db.attempts,db.reasonAnnotations,db.mistakes,db.sessions],async()=>{
    const attempt=await db.attempts.get(attemptId); if(!attempt?.grading || (attempt.grading.is_correct&&!attempt.uncertain)) throw new Error('只有答错或不确定的已判分记录可登记错因');
    const mistake=await db.mistakes.get(attempt.question_id); if(!mistake) throw new Error('错题记录不存在');
    const existing=await db.reasonAnnotations.where('attempt_id').equals(attemptId).first();
    if(existing) { mistake.error_reason_distribution[existing.reason]--; await db.reasonAnnotations.delete(existing.id); }
    else if(!attempt.grading.is_correct) mistake.unclassified_wrong_count--;
    mistake.error_reason_distribution[reason]++; mistake.updated_at=new Date().toISOString();
    await db.reasonAnnotations.add({id:`reason-${crypto.randomUUID()}`,attempt_id:attemptId,reason,recorded_at:mistake.updated_at}); await db.mistakes.put(mistake);
    for(const session of await db.sessions.filter(candidate=>candidate.pending_reason_attempt_ids.includes(attemptId)).toArray()) {
      session.pending_reason_attempt_ids=session.pending_reason_attempt_ids.filter(id=>id!==attemptId); await db.sessions.put(session);
    }
  });
}
