import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { Question } from '../src/domain/models.ts';
import { root } from './lib.ts';

const reviewedAt='2026-09-16T00:00:00+08:00';
const draftDir=path.resolve(root,'data/questions/draft');
const names=(await readdir(draftDir)).filter(name=>name.endsWith('.json'));
const files=new Map<string,Question[]>();
const all:Question[]=[];
for(const name of names) {
  const questions=JSON.parse(await readFile(path.join(draftDir,name),'utf8')) as Question[];
  files.set(name,questions);all.push(...questions);
}
if(all.length!==305) throw new Error(`Expected 305 questions, found ${all.length}`);
const byId=new Map(all.map(question=>[question.id,question]));
const get=(id:string)=>{const question=byId.get(id);if(!question)throw new Error(`Missing ${id}`);return question};

const q0154=get('scut811-p1-q0154');
q0154.stem='若 \\(x(t)=e^{-at}u(t)\\)，\\(a>0\\)，其CTFT的零频值 \\(X(0)\\) 是多少？';
q0154.options=[
  {id:'A',content:'\\(a\\)',error_tag:'CONFUSE_CONVOLUTION_MULTIPLICATION'},
  {id:'B',content:'\\(1/a\\)',error_tag:null},
  {id:'C',content:'\\(-1/a\\)',error_tag:'SIGN_ERROR'},
  {id:'D',content:'\\(2/a\\)',error_tag:'MISS_FACTOR_2'},
];
q0154.correct_option='B';
q0154.explanation='正确：\\(X(0)=\\int_0^\\infty e^{-at}dt=1/a\\)。错项把参数取倒、写反符号或多计一侧。易错点：零频值等于信号的时域面积。';

const q0159=get('scut811-p1-q0159');
q0159.stem='\\(e^{at}u(-t)\\)，\\(a>0\\)，对应的频谱是哪一个？';
q0159.options=[
  {id:'A',content:'\\(1/(a+j\\omega)\\)',error_tag:'SIGN_ERROR'},
  {id:'B',content:'\\(-1/(a-j\\omega)\\)',error_tag:'SIGN_ERROR'},
  {id:'C',content:'\\(1/(a-j\\omega)\\)',error_tag:null},
  {id:'D',content:'\\(2a/(a^2+\\omega^2)\\)',error_tag:'MISSING_TIME_REVERSAL'},
];
q0159.correct_option='C';
q0159.explanation='正确：从负无穷积分到0得到 \\(1/(a-j\\omega)\\)。错项混作右边指数、无端加负号或误作双边指数。易错点：左边支撑对应分母中的 \\(-j\\omega\\)。';

const q0179=get('scut811-p1-q0179');
const q0179d=q0179.options.find(option=>option.id==='D');
if(!q0179d) throw new Error('q0179/D missing');
q0179d.content='\\(-j\\omega X(j\\omega)\\)';

const q0234=get('scut811-p1-q0234');
q0234.stem='对 \\(x[n]=(-a)^n u[n]\\)，\\(|a|<1\\)，其DTFT是什么？';
q0234.options=[
  {id:'A',content:'\\(1/(1-ae^{-j\\omega})\\)',error_tag:'SIGN_ERROR'},
  {id:'B',content:'\\(1/(1+ae^{-j\\omega})\\)',error_tag:null},
  {id:'C',content:'\\(1/(1+ae^{j\\omega})\\)',error_tag:'SIGN_ERROR'},
  {id:'D',content:'\\(1/(a+e^{-j\\omega})\\)',error_tag:'WRONG_COEFFICIENT_NORMALIZATION'},
];
q0234.correct_option='B';
q0234.explanation='正确：几何级数的公比为 \\(-ae^{-j\\omega}\\)，故和为 \\(1/(1+ae^{-j\\omega})\\)。错项漏负号、写反频率指数或交换常数位置。易错点：底数中的负号会把分母的减号变成加号。';

const q0237=get('scut811-p1-q0237');
q0237.stem='\\(a^{n-1}u[n-1]\\)，\\(|a|<1\\)，对应的DTFT是哪一个？';
q0237.options=[
  {id:'A',content:'\\(e^{-j\\omega}/(1-ae^{-j\\omega})\\)',error_tag:null},
  {id:'B',content:'\\(1/(1-ae^{-j\\omega})\\)',error_tag:'WRONG_DELAY_FACTOR'},
  {id:'C',content:'\\(e^{j\\omega}/(1-ae^{-j\\omega})\\)',error_tag:'WRONG_SHIFT_DIRECTION'},
  {id:'D',content:'\\(a/(1-ae^{-j\\omega})\\)',error_tag:'WRONG_COEFFICIENT_NORMALIZATION'},
];
q0237.correct_option='A';
q0237.explanation='正确：它是 \\(a^n u[n]\\) 右移1点，频谱乘 \\(e^{-j\\omega}\\)。错项漏延时因子、写反相位或误乘a。易错点：右移1点对应负指数相位。';

for(const question of all) {
  if(question.review.status==='verified') throw new Error(`${question.id}: release migration must not rewrite verified state`);
  if(question.review.status==='draft') question.review={
    status:'reviewed',reviewer:'project-owner',reviewed_at:reviewedAt,
    notes:`Phase 1第${question.chapter}章已完成人工内容审核并获准进入正式学习版；来源核验状态保持独立，不据此伪造verified。`,
  };
}
if(all.some(question=>question.review.status!=='reviewed')) throw new Error('All 305 questions must remain reviewed for this learning release.');

for(const [name,questions] of files) await writeFile(path.join(draftDir,name),JSON.stringify(questions,null,2)+'\n','utf8');
console.log('Applied final fixes to q0154/q0159/q0179/q0234/q0237 and marked all 305 questions reviewed.');
