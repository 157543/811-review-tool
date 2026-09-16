import type { FullBackup, SourceDescriptor } from '../domain/models';
import { db } from './database';
import Ajv2020 from 'ajv/dist/2020';
import addFormats from 'ajv-formats';
import exportSchema from '../../schemas/export.schema.json';
import attemptSchema from '../../schemas/attempt.schema.json';
import mistakeSchema from '../../schemas/mistake.schema.json';
import questionSchema from '../../schemas/question.schema.json';
import sessionSchema from '../../schemas/session.schema.json';

const APP_VERSION='0.2.0';
export async function createFullBackup(sourceDescriptors:SourceDescriptor[]=[]):Promise<FullBackup> {
  const [question_snapshots,attempts,reason_annotations,schedule_policies,mistakes,sessions,settings]=await Promise.all([db.snapshots.toArray(),db.attempts.toArray(),db.reasonAnnotations.toArray(),db.schedulePolicies.toArray(),db.mistakes.toArray(),db.sessions.toArray(),db.settings.get('primary')]);
  const questionIds=[...new Set(question_snapshots.map(s=>s.question_id))];
  return {export_schema_version:'1.0.0',export_id:`backup-${crypto.randomUUID()}`,exported_at:new Date().toISOString(),app_version:APP_VERSION,timezone:settings?.timezone??'Asia/Shanghai',scope:{kind:'full_backup',question_ids:questionIds},bank_versions:[...new Set(question_snapshots.map(s=>s.bank_version))],question_snapshots,attempts,reason_annotations,schedule_policies,mistakes,sessions,settings:settings??null,source_descriptors:sourceDescriptors,asset_descriptors:[]};
}

export async function restoreFullBackup(bundle:FullBackup) {
  const ajv=new Ajv2020({allErrors:true,strict:true}); addFormats(ajv);
  for(const schema of [attemptSchema,mistakeSchema,questionSchema,sessionSchema]) ajv.addSchema(schema);
  const validate=ajv.compile(exportSchema);
  if(!validate(bundle)) throw new Error(`备份结构无效：${ajv.errorsText(validate.errors)}`);
  const snapshotIds=new Set(bundle.question_snapshots.map(s=>s.snapshot_id));
  if(bundle.attempts.some(a=>!snapshotIds.has(a.question_snapshot_id))) throw new Error('备份含无法解析的题目快照引用');
  await db.transaction('rw',[db.snapshots,db.attempts,db.reasonAnnotations,db.schedulePolicies,db.mistakes,db.sessions,db.settings],async()=>{
    await Promise.all([db.snapshots.clear(),db.attempts.clear(),db.reasonAnnotations.clear(),db.schedulePolicies.clear(),db.mistakes.clear(),db.sessions.clear(),db.settings.clear()]);
    await db.snapshots.bulkAdd(bundle.question_snapshots); await db.attempts.bulkAdd(bundle.attempts); await db.reasonAnnotations.bulkAdd(bundle.reason_annotations); await db.schedulePolicies.bulkAdd(bundle.schedule_policies); await db.mistakes.bulkAdd(bundle.mistakes); await db.sessions.bulkAdd(bundle.sessions); if(bundle.settings) await db.settings.add(bundle.settings);
  });
}
