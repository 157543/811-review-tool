import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { Question } from '../src/domain/models.ts';
import { root } from './lib.ts';

const reviewedAt='2026-09-16T00:00:00+08:00';
const draftDir=path.resolve(root,'data/questions/draft');
const names=(await readdir(draftDir)).filter(name=>name.endsWith('.json'));
const files=new Map<string,Question[]>();
const chapter:Question[]=[];
for(const name of names) {
  const questions=JSON.parse(await readFile(path.join(draftDir,name),'utf8')) as Question[];
  files.set(name,questions);
  chapter.push(...questions.filter(question=>question.chapter===3));
}
if(chapter.length!==65) throw new Error(`Expected 65 chapter-3 questions, found ${chapter.length}`);
const byId=new Map(chapter.map(question=>[question.id,question]));
const get=(id:string)=>{const question=byId.get(id);if(!question)throw new Error(`Missing ${id}`);return question};

get('scut811-p1-q0130').stem='对周期为 \\(N\\) 的实余弦 \\(\\cos(2\\pi mn/N)\\)，且 \\(m\\not\\equiv -m\\pmod N\\)（即 \\(m\\neq0\\)，并且当 \\(N\\) 为偶数时 \\(m\\neq N/2\\)），非零DTFS系数是哪组？';

const q0137=get('scut811-p1-q0137');
q0137.stem='已知周期输入的CTFS系数 \\(a_2=3\\)，LTI系统在二次谐波处满足 \\(H(j2\\omega_0)=-j\\)，输出系数 \\(b_2\\) 是多少？';
q0137.options=[
  {id:'A',content:'\\(-3j\\)',error_tag:null},
  {id:'B',content:'\\(3j\\)',error_tag:'SIGN_ERROR'},
  {id:'C',content:'\\(-j\\)',error_tag:'MISS_SCALE_FACTOR'},
  {id:'D',content:'\\(-6j\\)',error_tag:'MISS_FACTOR_2'},
];
q0137.correct_option='A';
q0137.explanation='正确：\\(b_2=a_2H(j2\\omega_0)=3(-j)=-3j\\)。错项分别写反符号、漏乘输入系数或多乘2。易错点：第 \\(k\\) 次谐波应在 \\(k\\omega_0\\) 处取系统响应。';

get('scut811-p1-q0139').stem='若输入CTFS只有 \\(a_{\\pm1}=1/2\\)，系统满足 \\(H(\\pm j\\omega_0)=0\\)，输出是什么？';
get('scut811-p1-q0147').stem='系统 \\(y^{\\prime}(t)+ay(t)=x^{\\prime}(t)\\)（\\(a>0\\)）被称作低通。正确辨析是什么？';

for(const question of chapter) {
  if(question.review.status==='verified') throw new Error(`${question.id}: refusing to downgrade verified question`);
  question.review={
    status:'reviewed',
    reviewer:'project-owner',
    reviewed_at:reviewedAt,
    notes:'Phase 1第3章已完成快速人工内容审核：正确答案、实质性歧义、错误知识和严重重复均已检查；指定4处已修订。尚须整库最终核验后方可升级verified。',
  };
}

for(const [name,questions] of files) await writeFile(path.join(draftDir,name),JSON.stringify(questions,null,2)+'\n','utf8');
console.log('Applied chapter-3 content fixes to q0130/q0137/q0139/q0147 and marked all 65 chapter-3 questions reviewed.');
