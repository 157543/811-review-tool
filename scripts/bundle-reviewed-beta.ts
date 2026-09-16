import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { loadQuestionFiles, root } from './lib.ts';

const entries=await loadQuestionFiles();
const questions=entries.map(entry=>entry.question).filter(question=>question.review.status==='reviewed').sort((a,b)=>a.id.localeCompare(b.id));
if(questions.some(question=>question.review.status!=='reviewed')) throw new Error('Beta bundle may contain reviewed questions only.');
const chapterCounts=questions.reduce<Record<string,number>>((counts,question)=>{
  counts[String(question.chapter)]=(counts[String(question.chapter)]??0)+1;
  return counts;
},{});
if(questions.length!==305||chapterCounts['1']!==30||chapterCounts['2']!==45||chapterCounts['3']!==65||chapterCounts['4']!==85||chapterCounts['5']!==80) {
  throw new Error(`Expected reviewed Beta bank 305 (30/45/65/85/80), got ${questions.length} (${JSON.stringify(chapterCounts)}).`);
}
const bundle={bank_schema_version:'1.0.0',bank_version:'phase1-reviewed-beta-305-v1',channel:'reviewed-beta',questions};
await writeFile(path.resolve(root,'data/questions/reviewed-beta.json'),JSON.stringify(bundle,null,2)+'\n','utf8');
console.log('Bundled all 305 reviewed questions into data/questions/reviewed-beta.json (30/45/65/85/80).');
