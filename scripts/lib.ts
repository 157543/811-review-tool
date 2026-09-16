import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import Ajv2020, { type ErrorObject } from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import type { Question } from '../src/domain/models.ts';

export const root=process.cwd();
export async function readJson<T>(file:string):Promise<T> { return JSON.parse(await readFile(path.resolve(root,file),'utf8')) as T; }
export function createAjv() { const ajv=new Ajv2020({allErrors:true,strict:true}); addFormats(ajv); return ajv; }
export function formatErrors(errors:ErrorObject[]|null|undefined) { return (errors??[]).map(e=>`${e.instancePath||'/'} ${e.message}`).join('; '); }
export async function loadQuestionFiles():Promise<Array<{file:string;question:Question}>> {
  const result:Array<{file:string;question:Question}>=[];
  for(const dir of ['data/questions/draft','data/questions/verified']) {
    for(const name of await readdir(path.resolve(root,dir))) if(name.endsWith('.json')) {
      const file=path.join(dir,name); const value=await readJson<Question|Question[]>(file);
      for(const question of Array.isArray(value)?value:[value]) result.push({file,question});
    }
  }
  return result;
}
export interface BlueprintRow { chapter:string; section:string; topic:string; total:string; concept:string; formula:string; transform_pair:string; error_discrimination:string }
export async function readBlueprint():Promise<BlueprintRow[]> {
  const text=(await readFile(path.resolve(root,'data/blueprint/811_phase1_305_blueprint.csv'),'utf8')).replace(/^\uFEFF/,'').trim();
  const [header,...lines]=text.split(/\r?\n/); const keys=header.split(',') as Array<keyof BlueprintRow>;
  return lines.filter(Boolean).map(line=>Object.fromEntries(line.split(',').map((v,i)=>[keys[i],v])) as unknown as BlueprintRow);
}
