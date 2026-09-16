import katex from 'katex';
import { loadQuestionFiles } from './lib.ts';

const patterns=[/\$\$([\s\S]+?)\$\$/g,/\\\[([\s\S]+?)\\\]/g,/(?<!\$)\$([^$\n]+?)\$(?!\$)/g,/\\\((.+?)\\\)/g];
const errors:string[]=[]; let count=0;
for(const {file,question} of await loadQuestionFiles()) for(const [field,text] of [['stem',question.stem],['explanation',question.explanation],...question.options.map(o=>[`option.${o.id}`,o.content])] as Array<[string,string]>) for(const pattern of patterns) {
  pattern.lastIndex=0; for(const match of text.matchAll(pattern)) { count++; try { katex.renderToString(match[1],{throwOnError:true,strict:'error',trust:false}); } catch(e) { errors.push(`${file}:${question.id}:${field}: ${(e as Error).message}`); } }
}
if(errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`KaTeX check passed: ${count} expressions across current formal bank (${(await loadQuestionFiles()).length} questions).`);
