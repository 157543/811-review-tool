import { readBlueprint, readJson } from './lib.ts';

const rows=await readBlueprint(); const errors:string[]=[];
const knowledgeRegistry=await readJson<{items:Array<{id:string;chapter:number;blueprint_section:string;label:string}>}>('data/registries/knowledge-points.json');
if(rows.length!==33) errors.push(`Expected 33 rows, got ${rows.length}`);
for(const row of rows) {
  const types=['concept','formula','transform_pair','error_discrimination'] as const;
  const sum=types.reduce((n,k)=>n+Number(row[k]),0);
  if(sum!==Number(row.total)) errors.push(`${row.section}: subtype sum ${sum} != total ${row.total}`);
  if(Number(row.chapter)!==Number(row.section[0])) errors.push(`${row.section}: chapter mismatch`);
}
const total=rows.reduce((n,r)=>n+Number(r.total),0);
const chapters=[1,2,3,4,5].map(ch=>rows.filter(r=>Number(r.chapter)===ch).reduce((n,r)=>n+Number(r.total),0));
const subtypeTotals=(['concept','formula','transform_pair','error_discrimination'] as const).map(k=>rows.reduce((n,r)=>n+Number(r[k]),0));
if(total!==305) errors.push(`Total ${total} != 305`);
if(chapters.join(',')!=='30,45,65,85,80') errors.push(`Chapter totals ${chapters.join('/')} invalid`);
if(subtypeTotals.join(',')!=='58,65,62,120') errors.push(`Subtype totals ${subtypeTotals.join('/')} invalid`);
const registryIds=new Set(knowledgeRegistry.items.map(item=>item.id));
if(registryIds.size!==knowledgeRegistry.items.length) errors.push('Knowledge-point registry contains duplicate IDs');
if(knowledgeRegistry.items.length!==rows.length) errors.push(`Knowledge-point registry has ${knowledgeRegistry.items.length} items, expected ${rows.length}`);
for(const row of rows) {
  const item=knowledgeRegistry.items.find(candidate=>candidate.blueprint_section===row.section);
  if(!item) errors.push(`${row.section}: missing knowledge-point registry item`);
  else {
    if(item.chapter!==Number(row.chapter)) errors.push(`${row.section}: registry chapter mismatch`);
    if(item.label!==row.topic) errors.push(`${row.section}: registry label differs from CSV topic`);
  }
}
if(errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Blueprint valid: ${rows.length} buckets, ${total} questions; chapters ${chapters.join('/')}; subtypes ${subtypeTotals.join('/')}.`);
