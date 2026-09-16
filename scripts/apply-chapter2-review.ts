import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { Question } from '../src/domain/models.ts';
import { root } from './lib.ts';

const reviewedAt='2026-09-16T00:00:00+08:00';
const draftDir=path.resolve(root,'data/questions/draft');
const names=(await readdir(draftDir)).filter(name=>name.endsWith('.json'));
let reviewedCount=0;

for(const name of names) {
  const file=path.join(draftDir,name);
  const questions=JSON.parse(await readFile(file,'utf8')) as Question[];
  let changed=false;
  for(const question of questions) {
    if(question.chapter!==2) continue;
    if(question.review.status==='verified') throw new Error(`${question.id}: refusing to downgrade verified question`);
    question.review={
      status:'reviewed',
      reviewer:'project-owner',
      reviewed_at:reviewedAt,
      notes:'Phase 1第2章已完成人工内容审核：正确答案正确，题干无实质歧义，无明显错误知识、严重重复或低价值题。尚须整库最终核验后方可升级verified。',
    };
    reviewedCount++;
    changed=true;
  }
  if(changed) await writeFile(file,JSON.stringify(questions,null,2)+'\n','utf8');
}

if(reviewedCount!==45) throw new Error(`Expected 45 chapter-2 questions, updated ${reviewedCount}`);
console.log('Applied chapter-2 human review to 45 questions; other chapters were not changed.');
