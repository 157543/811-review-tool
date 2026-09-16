import { loadQuestionFiles, readBlueprint } from './lib.ts';

const questions=(await loadQuestionFiles()).map(entry=>entry.question);
const chapterCounts=new Map<number,number>();
const subtypeCounts=new Map<string,number>();
const cellCounts=new Map<string,number>();
for(const question of questions) {
  chapterCounts.set(question.chapter,(chapterCounts.get(question.chapter)??0)+1);
  subtypeCounts.set(question.subtype,(subtypeCounts.get(question.subtype)??0)+1);
  const key=`${question.blueprint_section}|${question.subtype}`;
  cellCounts.set(key,(cellCounts.get(key)??0)+1);
}

const blueprint=await readBlueprint();
const overages:string[]=[];
for(const row of blueprint) for(const subtype of ['concept','formula','transform_pair','error_discrimination'] as const) {
  const actual=cellCounts.get(`${row.section}|${subtype}`)??0;
  const allowed=Number(row[subtype]);
  if(actual>allowed) overages.push(`${row.section}|${subtype}: ${actual} > ${allowed}`);
}
if(overages.length) {
  console.error(`Sample quota exceeds blueprint cells:\n${overages.join('\n')}`);
  process.exit(1);
}
const chapters=[1,2,3,4,5].map(chapter=>`${chapter}:${chapterCounts.get(chapter)??0}`).join(', ');
const subtypes=['concept','formula','transform_pair','error_discrimination'].map(subtype=>`${subtype}:${subtypeCounts.get(subtype)??0}`).join(', ');
console.log(`Question quota sample: total=${questions.length}; chapters ${chapters}; subtypes ${subtypes}; no blueprint cell exceeded.`);
