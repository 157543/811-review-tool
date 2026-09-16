import { pathToFileURL } from 'node:url';
import type { Question } from '../src/domain/models.ts';
import { loadQuestionFiles } from './lib.ts';

export interface NearDuplicate { left:string; right:string; score:number; same_bucket:boolean }

function normalize(value:string):string {
  return value.toLowerCase()
    .replace(/\\left|\\right/g,'')
    .replace(/[\s，。；：？！、,.!?;:'"“”‘’（）()\[\]{}_^$|<>+=\-/*]/g,'');
}
function normalizeExact(value:string):string {
  return value.toLowerCase().replace(/\s+/g,'').replace(/[，。；：？！、,.!?;:“”‘’]/g,'');
}
function grams(value:string):Set<string> {
  const text=normalize(value); const result=new Set<string>();
  for(let i=0;i<text.length-2;i++) result.add(text.slice(i,i+3));
  return result;
}
function dice(a:Set<string>,b:Set<string>):number {
  if(!a.size&&!b.size) return 1;
  let common=0; for(const item of a) if(b.has(item)) common++;
  return 2*common/(a.size+b.size);
}
export function detectNearDuplicates(questions:Question[],threshold=0.74):NearDuplicate[] {
  const vectors=questions.map(q=>({q,grams:grams(`${q.stem}|${q.options.map(o=>o.content).join('|')}`)}));
  const result:NearDuplicate[]=[];
  for(let i=0;i<vectors.length;i++) for(let j=i+1;j<vectors.length;j++) {
    const left=vectors[i].q,right=vectors[j].q;
    const score=dice(vectors[i].grams,vectors[j].grams);
    if(score>=threshold) result.push({left:left.id,right:right.id,score:Number(score.toFixed(3)),same_bucket:left.blueprint_section===right.blueprint_section&&left.subtype===right.subtype});
  }
  return result.sort((a,b)=>b.score-a.score||a.left.localeCompare(b.left));
}

if(import.meta.url===pathToFileURL(process.argv[1]).href) {
  const questions=(await loadQuestionFiles()).map(item=>item.question);
  const exact=new Map<string,string>(); const duplicates:string[]=[];
  for(const q of questions) {
    const key=normalizeExact(`${q.stem}|${q.options.map(o=>o.content).sort().join('|')}`);
    const previous=exact.get(key); if(previous) duplicates.push(`${previous} = ${q.id}`); else exact.set(key,q.id);
  }
  if(duplicates.length) { console.error(`Exact duplicate questions:\n${duplicates.join('\n')}`); process.exit(1); }
  const candidates=detectNearDuplicates(questions);
  console.log(`Duplicate check passed: ${questions.length} unique normalized questions; ${candidates.length} near-duplicate candidates at threshold 0.74.`);
  for(const item of candidates.slice(0,30)) console.log(`${item.left} <> ${item.right}: ${item.score}${item.same_bucket?' same-bucket':''}`);
}
