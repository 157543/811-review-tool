import type { AnswerView, Attempt, ErrorReason, ExportMistakeItem, MistakeExportBundle, OptionId, Question, StudyFilters } from '../domain/models';
import { EMPTY_FILTERS } from '../domain/models';
import { filterQuestions } from '../domain/sampling';
import { db } from './database';

const APP_VERSION='0.2.0';
const DISPLAY_LABELS:OptionId[]=['A','B','C','D'];
const REASONS:ErrorReason[]=['CONCEPT','FORMULA_PAIR','CONDITION','SIGN_COEFFICIENT','METHOD_ENTRY','STEP_ORDER','CALCULATION','READING_GRAPH','GUESS'];

const displayLabel=(order:OptionId[],id:OptionId)=>DISPLAY_LABELS[Math.max(0,order.indexOf(id))];
function answerView(attempt:Attempt,question:Question):AnswerView {
  if(!attempt.grading) throw new Error('导出只接受已判分作答');
  return {attempt_id:attempt.id,question_revision:attempt.question_revision,option_id:attempt.selected_option_id,displayed_label:displayLabel(attempt.option_order,attempt.selected_option_id),content:question.options.find(option=>option.id===attempt.selected_option_id)?.content??'',submitted_at:attempt.submitted_at,uncertain:attempt.uncertain,is_correct:attempt.grading.is_correct};
}

export async function createMistakeExport(filters:StudyFilters=EMPTY_FILTERS):Promise<MistakeExportBundle> {
  const [questions,mistakes,attempts,annotations,policies,settings]=await Promise.all([db.questions.toArray(),db.mistakes.toArray(),db.attempts.toArray(),db.reasonAnnotations.toArray(),db.schedulePolicies.toArray(),db.settings.get('primary')]);
  const includedIds=new Set(filterQuestions(questions,mistakes,attempts,annotations,filters).filter(question=>mistakes.some(mistake=>mistake.question_id===question.id)).map(question=>question.id));
  const includedMistakes=mistakes.filter(mistake=>includedIds.has(mistake.question_id));
  const includedAttempts=attempts.filter(attempt=>includedIds.has(attempt.question_id)).sort((a,b)=>a.submitted_at.localeCompare(b.submitted_at)||a.id.localeCompare(b.id));
  const snapshotIds=new Set(includedAttempts.map(attempt=>attempt.question_snapshot_id));
  const snapshots=(await db.snapshots.bulkGet([...snapshotIds])).filter((snapshot):snapshot is NonNullable<typeof snapshot>=>Boolean(snapshot));
  const snapshotById=new Map(snapshots.map(snapshot=>[snapshot.snapshot_id,snapshot]));
  const items:ExportMistakeItem[]=[];
  for(const mistake of includedMistakes) {
    const history=includedAttempts.filter(attempt=>attempt.question_id===mistake.question_id&&attempt.grading!==null);
    const lastWrong=[...history].reverse().find(attempt=>attempt.grading?.is_correct===false);
    const lastUncertain=[...history].reverse().find(attempt=>attempt.uncertain);
    const representative=lastWrong??lastUncertain; const latest=history.at(-1);
    if(!representative||!latest) continue;
    const representativeQuestion=snapshotById.get(representative.question_snapshot_id)?.content;
    const latestQuestion=snapshotById.get(latest.question_snapshot_id)?.content;
    if(!representativeQuestion||!latestQuestion) throw new Error(`错题 ${mistake.question_id} 缺少题目快照`);
    const correctId=representative.grading!.correct_option_id;
    items.push({question_id:mistake.question_id,question_revision:representative.question_revision,representative_attempt_id:representative.id,user_answer_basis:lastWrong?'last_wrong':'last_uncertain',chapter:representativeQuestion.chapter,section:representativeQuestion.section,blueprint_section:representativeQuestion.blueprint_section,knowledge_point_id:representativeQuestion.knowledge_point_id,knowledge_point:representativeQuestion.knowledge_point,type:'mcq',subtype:representativeQuestion.subtype,stem:representativeQuestion.stem,options:representativeQuestion.options,option_order:representative.option_order,user_answer:answerView(representative,representativeQuestion),correct_answer:{option_id:correctId,displayed_label:displayLabel(representative.option_order,correctId),content:representativeQuestion.options.find(option=>option.id===correctId)?.content??''},explanation:representativeQuestion.explanation,source:representativeQuestion.source,figures:representativeQuestion.figures,mistake_count:mistake.mistake_count,uncertain_count:mistake.uncertain_count,error_reason_distribution:{...mistake.error_reason_distribution},unclassified_wrong_count:mistake.unclassified_wrong_count,status:mistake.status,last_wrong_at:mistake.last_wrong_at,latest_attempt:answerView(latest,latestQuestion)});
  }
  const includedAttemptIds=new Set(includedAttempts.map(attempt=>attempt.id));
  const policyIds=new Set(includedAttempts.map(attempt=>attempt.schedule_policy_id));
  const hasFilters=Object.entries(filters).some(([,value])=>Array.isArray(value)?value.length>0:value!==null);
  return {mistake_export_schema_version:'1.0.0',export_id:`mistakes-${crypto.randomUUID()}`,exported_at:new Date().toISOString(),app_version:APP_VERSION,timezone:settings?.timezone??'Asia/Shanghai',scope:{kind:hasFilters?'mistakes_filtered':'mistakes_all',filters:structuredClone(filters),question_ids:items.map(item=>item.question_id)},items,question_snapshots:snapshots,attempts:includedAttempts,reason_annotations:annotations.filter(annotation=>includedAttemptIds.has(annotation.attempt_id)),schedule_policies:policies.filter(policy=>policyIds.has(policy.id)),mistakes:includedMistakes};
}

export function exportMistakesMarkdown(bundle:MistakeExportBundle) {
  const blocks=bundle.items.map((item,index)=>{
    const options=item.options.map(option=>`- ${option.id}. ${option.content}`).join('\n');
    const reasons=REASONS.filter(reason=>item.error_reason_distribution[reason]>0).map(reason=>`${reason}: ${item.error_reason_distribution[reason]}`).join('；')||'未标注';
    return `## ${index+1}. 第 ${item.chapter} 章 · ${item.knowledge_point}\n\n${item.stem}\n\n${options}\n\n- 代表作答：${item.user_answer.displayed_label} · ${item.user_answer.content}${item.user_answer.uncertain?(item.user_answer.is_correct?'（答对但不确定）':'（不确定）'):''}\n- 正确答案：${item.correct_answer.displayed_label} · ${item.correct_answer.content}\n- 短解析：${item.explanation}\n- 错误 / 不确定：${item.mistake_count} / ${item.uncertain_count}\n- 错因：${reasons}\n- 状态：${item.status}\n- 最近错误：${item.last_wrong_at??'无'}\n- 来源：${item.source.reference}`;
  });
  return `# 811 错题导出\n\n导出时间：${bundle.exported_at}\n\n> 数学内容保留 LaTeX；普通 Markdown 阅读器可能不渲染公式。\n\n${blocks.join('\n\n---\n\n')}\n`;
}

const csvSafe=(value:unknown)=>{let text=typeof value==='string'?value:JSON.stringify(value);if(/^[\s=+\-@]/.test(text)) text=`'${text}`;return `"${text.replaceAll('"','""')}"`;};
export function exportMistakesCsv(bundle:MistakeExportBundle) {
  const headers=['question_id','question_revision','chapter','section','blueprint_section','knowledge_point_id','knowledge_point','type','subtype','stem','options_json','option_order_json','user_answer_basis','user_answer','user_displayed_label','user_answer_content','correct_answer','correct_displayed_label','correct_answer_content','explanation','mistake_count','uncertain_count',...REASONS.map(reason=>`reason_${reason}`),'unclassified_wrong_count','status','last_wrong_at','source.type','source.reference'];
  const rows=bundle.items.map(item=>[item.question_id,item.question_revision,item.chapter,item.section,item.blueprint_section,item.knowledge_point_id,item.knowledge_point,item.type,item.subtype,item.stem,item.options,item.option_order,item.user_answer_basis,item.user_answer.option_id,item.user_answer.displayed_label,item.user_answer.content,item.correct_answer.option_id,item.correct_answer.displayed_label,item.correct_answer.content,item.explanation,item.mistake_count,item.uncertain_count,...REASONS.map(reason=>item.error_reason_distribution[reason]),item.unclassified_wrong_count,item.status,item.last_wrong_at??'',item.source.type,item.source.reference]);
  return `\uFEFF${[headers,...rows].map(row=>row.map(csvSafe).join(',')).join('\r\n')}\r\n`;
}

export const exportMistakesJson=(bundle:MistakeExportBundle)=>JSON.stringify(bundle,null,2)+'\n';

export function downloadText(filename:string,mime:string,content:string) {
  const url=URL.createObjectURL(new Blob([content],{type:mime})); const anchor=document.createElement('a');anchor.href=url;anchor.download=filename;anchor.click();setTimeout(()=>URL.revokeObjectURL(url),0);
}
