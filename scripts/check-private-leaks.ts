import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const target=path.resolve(process.cwd(),process.argv[2]??'dist');
const forbidden=[
  /private_sources/i,
  /source_notes/i,
  /\.pdf(?:["'?#]|$)/i,
  /华南理工大学章节及课后习题划重点/i,
  /00-24年华工811真题/i,
  /TEST FIXTURE ONLY/i,
  /fixture-q-/i,
  /__811_TEST_QUESTIONS__/i,
];
const errors:string[]=[];
async function walk(dir:string):Promise<string[]> { const out:string[]=[]; for(const name of await readdir(dir)){const p=path.join(dir,name);(await stat(p)).isDirectory()?out.push(...await walk(p)):out.push(p)} return out }
for(const file of await walk(target)) {
  const rel=path.relative(target,file).replaceAll('\\','/'); if(forbidden.some(p=>p.test(rel))) errors.push(`forbidden filename: ${rel}`);
  const bytes=await readFile(file); if(bytes.subarray(0,5).toString()==='%PDF-') errors.push(`embedded PDF: ${rel}`);
  if(/\.(?:html|js|css|json|txt|map)$/i.test(file)) { const text=bytes.toString('utf8'); for(const p of forbidden) if(p.test(text)) errors.push(`forbidden content ${p}: ${rel}`); }
}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`Private leak check passed: ${target}`);
