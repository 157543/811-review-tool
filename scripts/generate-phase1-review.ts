import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { Question, QuestionSubtype } from '../src/domain/models.ts';
import { loadQuestionFiles, readBlueprint, root } from './lib.ts';
import { detectNearDuplicates } from './near-duplicates.ts';

const questions=(await loadQuestionFiles()).map(item=>item.question).sort((a,b)=>a.id.localeCompare(b.id));
if(questions.length!==305) throw new Error(`Review report requires 305 questions, found ${questions.length}`);
const blueprint=await readBlueprint();
const subtypes:QuestionSubtype[]=['concept','formula','transform_pair','error_discrimination'];
const count=<T>(items:T[],key:(item:T)=>string)=>new Map([...items.reduce((map,item)=>map.set(key(item),(map.get(key(item))??0)+1),new Map<string,number>())].sort(([a],[b])=>a.localeCompare(b,'zh-CN',{numeric:true})));
const chapters=count(questions,q=>String(q.chapter));
const subtypeCounts=count(questions,q=>q.subtype);
const sourceTypes=count(questions,q=>q.source.type);
const knowledge=count(questions,q=>`${q.knowledge_point_id} ${q.knowledge_point}`);
const tags=count(questions.flatMap(q=>q.options.filter(o=>o.error_tag).map(o=>o.error_tag!)),tag=>tag);
const manual=questions.filter(q=>q.source.verification==='needs_manual_check');
const untagged=questions.flatMap(q=>q.options.filter(o=>o.id!==q.correct_option&&o.error_tag===null).map(o=>`${q.id}/${o.id}`));
const near=detectNearDuplicates(questions);
const mdTable=(headers:string[],rows:string[][])=>`| ${headers.join(' | ')} |\n| ${headers.map(()=> '---').join(' | ')} |\n${rows.map(row=>`| ${row.join(' | ')} |`).join('\n')}`;
const esc=(s:string)=>s.replaceAll('|','\\|').replaceAll('\n',' ');

const bucketRows:string[][]=[];
for(const row of blueprint) for(const subtype of subtypes) {
  const actual=questions.filter(q=>q.blueprint_section===row.section&&q.subtype===subtype).length;
  bucketRows.push([row.section,subtype,String(actual),row[subtype],actual===Number(row[subtype])?'通过':'不通过']);
}
const summary=[
  '# Phase 1 305题审阅汇总','',
  '> 本报告覆盖305道独立母题。当前305题均为 reviewed，并已通过题库级项目所有者授权进入 Phase 1 正式学习版；source.verification 保持原值，题目未伪装为 verified。','',
  '## 审核状态分布','',mdTable(['状态','题量'],[...count(questions,q=>q.review.status)].map(([k,v])=>[k,String(v)])),'',
  '## 章节分布','',mdTable(['章节','实际','目标'],[1,2,3,4,5].map(ch=>[String(ch),String(chapters.get(String(ch))??0),String([30,45,65,85,80][ch-1])])),'',
  '## subtype分布','',mdTable(['subtype','实际','目标'],subtypes.map(type=>[type,String(subtypeCounts.get(type)??0),String({concept:58,formula:65,transform_pair:62,error_discrimination:120}[type])])),'',
  '## Blueprint bucket逐格校验','',mdTable(['bucket','subtype','实际','目标','结果'],bucketRows),'',
  '## 来源类型分布','',mdTable(['source.type','题量'],[...sourceTypes].map(([k,v])=>[k,String(v)])),'',
  '## 知识点题量','',mdTable(['知识点','题量'],[...knowledge].map(([k,v])=>[k,String(v)])),'',
  '## Machine error tag使用次数','',mdTable(['tag','次数'],[...tags].map(([k,v])=>[k,String(v)])),'',
  `## needs_manual_check（${manual.length}题）`,'',manual.length?manual.map(q=>`- ${q.id}｜第${q.chapter}章｜${q.blueprint_section}｜${q.subtype}`).join('\n'):'- 无','',
  `## 无error_tag的错误选项（${untagged.length}项）`,'',untagged.length?untagged.map(item=>`- ${item}`).join('\n'):'- 无','',
  `## 可能近重复题（阈值0.74，共${near.length}对）`,'',near.length?mdTable(['题目A','题目B','相似度','同配额格'],near.map(item=>[item.left,item.right,item.score.toFixed(3),item.same_bucket?'是':'否'])):'未发现。','',
  '## 分章人工审阅入口','',[1,2,3,4,5].map(ch=>`- [第${ch}章](./chapter-${ch}-review.md)`).join('\n'),'']
  .flat().join('\n');

const output=path.resolve(root,'docs/review'); await mkdir(output,{recursive:true});
await writeFile(path.join(output,'phase1-305-review-summary.md'),summary+'\n','utf8');
for(const chapter of [1,2,3,4,5]) {
  const items=questions.filter(q=>q.chapter===chapter);
  const statusSummary=[...count(items,q=>q.review.status)].map(([status,total])=>`${status}=${total}`).join('，');
  const lines=[`# 第${chapter}章人工审题（${items.length}题）`,'',`> 当前状态：${statusSummary}。内容审核门槛：正确答案正确、题干无实质歧义、无明显错误知识、无严重重复或低价值题。来源和 machine error tag 的精细问题不阻塞 reviewed，但 verified 仍须最终核验。`,''];
  for(const q of items) {
    lines.push(`## ${q.id}｜${q.blueprint_section}｜${q.subtype}`,'',`**知识点：** ${q.knowledge_point_id} ${q.knowledge_point}`,'',`**题干：** ${q.stem}`,'');
    for(const option of q.options) lines.push(`- ${option.id}. ${option.content}${option.id===q.correct_option?' ✅':''}${option.error_tag?` · \`${option.error_tag}\``:''}`);
    lines.push('',`**解析：** ${q.explanation}`,'',`**来源：** ${esc(q.source.reference)}`,'',`**来源状态：** \`${q.source.verification}\`；**审题状态：** \`${q.review.status}\``,'','**Citations：**','');
    for(const citation of q.source.citations) lines.push(`- ${citation.source_id}｜${esc(citation.location_text)}｜PDF ${citation.pdf_page??'—'}｜印刷页 ${citation.printed_page??'—'}${citation.item?`｜题号 ${citation.item}`:''}`);
    lines.push('','---','');
  }
  await writeFile(path.join(output,`chapter-${chapter}-review.md`),lines.join('\n'),'utf8');
}
console.log(`Review reports generated: summary + 5 chapter files; manual=${manual.length}; untagged wrong options=${untagged.length}; near pairs=${near.length}.`);
