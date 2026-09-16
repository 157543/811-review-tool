import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { loadQuestionFiles, root } from './lib.ts';

const entries=await loadQuestionFiles();
const questions=entries.map(entry=>entry.question).filter(question=>question.review.status==='reviewed').sort((a,b)=>a.id.localeCompare(b.id));
if(questions.length!==305) throw new Error(`Refusing to bundle ${questions.length} questions; release must contain exactly 305.`);
const publication={status:'authorized',scope:'phase1-learning-release',authorized_by:'project-owner',authorized_at:'2026-09-16T00:00:00+08:00',question_count:305,required_review_status:'reviewed',source_verification_policy:'preserve'};
await writeFile(path.resolve(root,'data/questions/release.json'),JSON.stringify({bank_schema_version:'1.0.0',bank_version:'phase1-learning-release-2026-09-16',channel:'release',publication,questions},null,2)+'\n','utf8');
console.log('Bundled 305 project-owner-authorized reviewed questions into data/questions/release.json without changing source verification.');
