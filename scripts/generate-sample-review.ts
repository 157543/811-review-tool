import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { loadQuestionFiles, root } from './lib.ts';

const questions=(await loadQuestionFiles()).map(entry=>entry.question).sort((a,b)=>a.id.localeCompare(b.id));
const chapterCounts=[1,2,3,4,5].map(chapter=>`${chapter}章 ${questions.filter(question=>question.chapter===chapter).length}题`).join(' / ');
const subtypes=['concept','formula','transform_pair','error_discrimination'] as const;
const subtypeCounts=subtypes.map(subtype=>`${subtype} ${questions.filter(question=>question.subtype===subtype).length}题`).join(' / ');

const blocks=questions.map((question,index)=>{
  const options=question.options.map(option=>`- ${option.id}. ${option.content}${option.id===question.correct_option?' **（正确）**':''}  \n  error_tag: ${option.error_tag??'null'}`).join('\n');
  const citations=question.source.citations.map(citation=>`- ${citation.source_id}：${citation.location_text}；PDF页 ${citation.pdf_page??'—'}；印刷页 ${citation.printed_page??'—'}；题号 ${citation.item??'—'}`).join('\n');
  return `## ${index+1}. ${question.id}\n\n`+
    `- 章节：第${question.chapter}章 / ${question.section}（蓝图 ${question.blueprint_section}）\n`+
    `- 题型：${question.subtype}\n`+
    `- 知识点：${question.knowledge_point}（${question.knowledge_point_id}）\n`+
    `- family：${question.family_id}\n`+
    `- 来源核验：${question.source.verification}\n`+
    `- Question审核：${question.review.status}\n\n`+
    `**题干**\n\n${question.stem}\n\n`+
    `**选项与机器错误标签**\n\n${options}\n\n`+
    `**短解析**\n\n${question.explanation}\n\n`+
    `**来源说明**\n\n${question.source.reference}\n\n${citations}\n\n`+
    `**人工审题记录**\n\n- 知识正确性：待审\n- 干扰项质量：待审\n- 来源匹配：待审\n- 移动端复习价值：待审`;
}).join('\n\n---\n\n');

const correctCounts=['A','B','C','D'].map(id=>questions.filter(question=>question.correct_option===id).length).join('/');
const markdown=`# 20道真实样题人工审题稿\n\n`+
  `> 当前文件只列出 draft 内容。不得据此写入 verified/ 或修改 release.json。\n\n`+
  `- 总数：${questions.length}\n- 章节：${chapterCounts}\n- 题型：${subtypeCounts}\n- 正确选项分布：A/B/C/D = ${correctCounts}\n\n`+
  `${blocks}\n`;
await writeFile(path.resolve(root,'20-sample-review.md'),markdown,'utf8');
console.log(`Generated 20-sample-review.md for ${questions.length} draft questions.`);
