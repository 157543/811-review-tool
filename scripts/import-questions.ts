import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'csv-parse/sync';
import type { Question } from '../src/domain/models.ts';
import { forceDraftOnImport } from '../src/domain/question-import.ts';
import { createAjv, formatErrors, readJson, root } from './lib.ts';

const inputArg=process.argv[2];
if(!inputArg) throw new Error('Usage: pnpm import:questions <questions.json|questions.csv>');
const input=path.resolve(root,inputArg); const ext=path.extname(input).toLowerCase();
let raw:unknown[];
if(ext==='.json') { const parsed=JSON.parse(await readFile(input,'utf8')) as unknown; raw=Array.isArray(parsed)?parsed:(parsed as {questions?:unknown[]}).questions??[parsed]; }
else if(ext==='.csv') {
  const records=parse(await readFile(input,'utf8'),{columns:true,skip_empty_lines:true,bom:true}) as Record<string,string>[];
  raw=records.map(r=>({...r,revision:Number(r.revision),chapter:Number(r.chapter),importance_811:Number(r.importance_811),can_skip:r.can_skip==='true',options:JSON.parse(r.options),source:JSON.parse(r.source),review:JSON.parse(r.review),figures:r.figures?JSON.parse(r.figures):undefined}));
} else throw new Error('Only .json and .csv are supported');
const validate=createAjv().compile(await readJson<object>('schemas/question.schema.json'));
const imported:Question[]=[];
for(const [index,value] of raw.entries()) {
  const q=forceDraftOnImport(value);
  if(!validate(q)) throw new Error(`Row ${index+1}: ${formatErrors(validate.errors)}`);
  imported.push(q);
}
if(new Set(imported.map(q=>q.id)).size!==imported.length) throw new Error('Import contains duplicate IDs');
const output=path.resolve(root,'data/questions/draft',`import-${new Date().toISOString().replace(/[:.]/g,'-')}.json`);
await writeFile(output,JSON.stringify(imported,null,2)+'\n','utf8');
console.log(`Imported ${imported.length} questions as draft: ${path.relative(root,output)}`);
