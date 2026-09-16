import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { createAjv, formatErrors, loadQuestionFiles, readBlueprint, readJson, root } from './lib.ts';
import type { Question } from '../src/domain/models.ts';

const mode=process.argv.includes('--mode') ? process.argv[process.argv.indexOf('--mode')+1] : 'development';
if(!['development','draft-complete','review-progress','release'].includes(mode)) throw new Error('mode must be development, draft-complete, review-progress, or release');
const schema=await readJson<object>('schemas/question.schema.json'); const validate=createAjv().compile(schema);
const knowledgeRegistry=await readJson<{items:Array<{id:string;chapter:number;blueprint_section:string}>}>('data/registries/knowledge-points.json');
const sourceRegistry=await readJson<{items:string[]}>('data/registries/source-types.json');
const tagRegistry=await readJson<{items:string[]}>('data/registries/machine-error-tags.json');
const notationRegistry=await readJson<{items:Array<{id:string}>}>('data/registries/notation-profiles.json');
const knowledgeById=new Map(knowledgeRegistry.items.map(item=>[item.id,item]));
const files=await loadQuestionFiles(); const errors:string[]=[]; const ids=new Set<string>(); const families=new Set<string>();
for(const {file,question:q} of files) {
  const displayId=q.id;
  if(!validate(q)) errors.push(`${file}:${displayId??'?'} schema: ${formatErrors(validate.errors)}`);
  if(ids.has(q.id)) errors.push(`${q.id}: duplicate id`); ids.add(q.id);
  if(q.variant_role!=='base'||q.family_id!==q.id) errors.push(`${q.id}: Phase 1 release requires an independent base question with family_id=id`);
  if(families.has(q.family_id)) errors.push(`${q.id}: duplicate family_id ${q.family_id}`); families.add(q.family_id);
  const right=q.options.find(o=>o.id===q.correct_option); if(!right) errors.push(`${q.id}: correct option missing`); else if(right.error_tag!==null) errors.push(`${q.id}: correct option error_tag must be null`);
  if(new Set(q.options.map(o=>o.content.trim())).size!==4) errors.push(`${q.id}: duplicate option content`);
  if(q.chapter!==Number(q.blueprint_section[0])) errors.push(`${q.id}: chapter/blueprint mismatch`);
  const registeredPoint=knowledgeById.get(q.knowledge_point_id);
  if(!registeredPoint) errors.push(`${q.id}: unknown knowledge_point_id ${q.knowledge_point_id}`);
  else if(registeredPoint.chapter!==q.chapter||registeredPoint.blueprint_section!==q.blueprint_section) errors.push(`${q.id}: knowledge-point registry mapping mismatch`);
  if(!sourceRegistry.items.includes(q.source.type)) errors.push(`${q.id}: unregistered source type ${q.source.type}`);
  if(!notationRegistry.items.some(item=>item.id===q.notation_profile)) errors.push(`${q.id}: unregistered notation profile ${q.notation_profile}`);
  for(const option of q.options) if(option.error_tag!==null&&!tagRegistry.items.includes(option.error_tag)) errors.push(`${q.id}: unregistered option error tag ${option.error_tag}`);
  if(file.includes('/verified') && q.review.status!=='verified') errors.push(`${q.id}: verified directory contains ${q.review.status}`);
  if(mode==='draft-complete' && q.review.status!=='draft') errors.push(`${q.id}: complete draft bank must remain draft`);
  if(mode==='review-progress' && q.review.status==='verified') errors.push(`${q.id}: review-progress bank must not contain verified questions`);
  if(mode==='release' && q.review.status!=='reviewed') errors.push(`${q.id}: authorized learning release requires reviewed content status`);
}
if(mode==='draft-complete'||mode==='review-progress'||mode==='release') {
  const blueprint=await readBlueprint(); const expected=new Map<string,number>();
  for(const r of blueprint) for(const type of ['concept','formula','transform_pair','error_discrimination'] as const) expected.set(`${r.section}|${type}`,Number(r[type]));
  const actual=new Map<string,number>(); for(const {question:q} of files) actual.set(`${q.blueprint_section}|${q.subtype}`,(actual.get(`${q.blueprint_section}|${q.subtype}`)??0)+1);
  if(files.length!==305) errors.push(`${mode} count ${files.length} != 305`);
  for(const [key,count] of expected) if((actual.get(key)??0)!==count) errors.push(`${key}: ${(actual.get(key)??0)} != ${count}`);
}
if(mode==='draft-complete'||mode==='review-progress') {
  const verifiedFiles=(await readdir(path.resolve(root,'data/questions/verified'))).filter(name=>name.endsWith('.json'));
  if(verifiedFiles.length) errors.push(`verified directory must contain no JSON files, found: ${verifiedFiles.join(', ')}`);
  const release=await readJson<{questions:unknown[]}>('data/questions/release.json');
  if(release.questions.length!==0) errors.push(`release.json must remain empty, found ${release.questions.length} questions`);
}
if(mode==='release') {
  const release=await readJson<{channel?:string;publication?:{status?:string;scope?:string;authorized_by?:string;question_count?:number;required_review_status?:string;source_verification_policy?:string};questions:Question[]}>('data/questions/release.json');
  if(release.channel!=='release'||release.publication?.status!=='authorized'||release.publication.scope!=='phase1-learning-release'||release.publication.authorized_by!=='project-owner'||release.publication.question_count!==305||release.publication.required_review_status!=='reviewed'||release.publication.source_verification_policy!=='preserve') errors.push('release.json is missing the explicit project-owner learning-release authorization');
  if(release.questions.length!==305) errors.push(`release.json count ${release.questions.length} != 305`);
  const sourceById=new Map(files.map(({question})=>[question.id,question]));
  for(const question of release.questions) {
    const questionId=question.id;
    if(!validate(question as unknown)) errors.push(`release.json:${questionId} schema: ${formatErrors(validate.errors)}`);
    const source=sourceById.get(question.id);
    if(!source) errors.push(`release.json:${question.id} is not present in the reviewed source bank`);
    else if(JSON.stringify(source)!==JSON.stringify(question)) errors.push(`release.json:${question.id} differs from the reviewed source question`);
  }
}
if(errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(mode==='development'&&files.length===0 ? 'Question bank valid in development mode: 0 formal questions (release gate intentionally not satisfied).' : `Question bank valid in ${mode} mode: ${files.length} questions.`);
