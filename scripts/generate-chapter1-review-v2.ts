import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { loadQuestionFiles, root } from './lib.ts';

const changedSourceIds=['scut811-p1-q0025','scut811-p1-q0026','scut811-p1-q0027','scut811-p1-q0028','scut811-p1-q0030','scut811-p1-q0032','scut811-p1-q0033','scut811-p1-q0034','scut811-p1-q0040','scut811-p1-q0041','scut811-p1-q0042','scut811-p1-q0043','scut811-p1-q0045','scut811-p1-q0047'];
const questions=(await loadQuestionFiles()).map(item=>item.question).filter(q=>q.chapter===1).sort((a,b)=>a.id.localeCompare(b.id));
if(questions.length!==30) throw new Error(`Expected 30 chapter-1 questions, found ${questions.length}`);
const manual=questions.filter(q=>q.source.verification==='needs_manual_check');
const reviewed=questions.filter(q=>q.review.status==='reviewed');
const esc=(value:string)=>value.replaceAll('|','\\|').replaceAll('\n',' ');
const lines=[
  '# 第1章人工审题 V2（30题）','',
  '> 本批30题已由项目所有者完成人工审核：不删题、不改配额，答案保持不变。状态更新为 `reviewed`，未进入 `verified` 或正式发布。','',
  '## 状态汇总','',
  `- 题目数：${questions.length}`,
  `- reviewed：${reviewed.length}`,
  `- verified：${questions.filter(q=>q.review.status==='verified').length}`,
  `- 来源 verified：${questions.filter(q=>q.source.verification==='verified').length}`,
  `- 来源 needs_manual_check：${manual.length}`,'',
  '## 本轮来源替换结果','',
  '| 题目 | 新 source.type | 新来源状态 | 定位 |','| --- | --- | --- | --- |',
  ...changedSourceIds.map(id=>{const q=questions.find(item=>item.id===id)!;return `| ${id} | ${q.source.type} | ${q.source.verification} | ${q.source.citations.map(c=>`${c.location_text}（PDF ${c.pdf_page}，印刷页 ${c.printed_page??'—'}）`).join('；')} |`;}),'',
  '## Machine error tag修订','',
  '- q0032/A → `CONFUSE_ENVELOPE_PHASE`',
  '- q0041/B → `CONFUSE_MEMORY_CAUSALITY`',
  '- q0044/C → `CONFUSE_INVERTIBILITY_IDENTITY`',
  '- q0038/D → `WRONG_SAMPLING_VALUE`',
  '- sample-001/B → `FORGOT_MAGNITUDE_SQUARED`；C、D → `CONFUSE_ENERGY_POWER`',
  '- sample-002/A → `TIME_INVARIANCE_ERROR`；C → `LINEARITY_ERROR`；D → `CAUSALITY_ERROR`',
  '- sample-003/D → `FORGOT_INTEGRATION`','',
  `## 仍为 needs_manual_check 的第1章题目（${manual.length}题）`,'',
  ...(manual.length?manual.map(q=>`- ${q.id}｜${q.blueprint_section}｜${q.source.reference}`):['- 无']),'',
  '## 逐题审阅',''
];
for(const q of questions) {
  lines.push(`### ${q.id}｜${q.blueprint_section}｜${q.subtype}`,'',`**题干：** ${q.stem}`,'');
  for(const option of q.options) lines.push(`- ${option.id}. ${option.content}${option.id===q.correct_option?' ✅':''}${option.error_tag?` · \`${option.error_tag}\``:''}`);
  lines.push('',`**解析：** ${q.explanation}`,'',`**来源：** ${esc(q.source.reference)}`,'',`**状态：** source=\`${q.source.verification}\`；review=\`${q.review.status}\``,'','**Citations：**','');
  for(const c of q.source.citations) lines.push(`- ${c.source_id}｜${esc(c.location_text)}｜PDF ${c.pdf_page??'—'}｜印刷页 ${c.printed_page??'—'}${c.item?`｜${c.item}`:''}`);
  lines.push('','---','');
}
const output=path.resolve(root,'docs/review/chapter-1-review-v2.md');await mkdir(path.dirname(output),{recursive:true});await writeFile(output,lines.join('\n')+'\n','utf8');
console.log(`Generated chapter-1-review-v2.md: reviewed=${reviewed.length}, source verified=${questions.length-manual.length}, needs_manual_check=${manual.length}.`);
