import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { MachineErrorTag, Question } from '../src/domain/models.ts';
import { root } from './lib.ts';
import { chapter1ReviewedSources } from './content/chapter-1-reviewed-sources.ts';

const reviewedAt='2026-09-16T00:00:00+08:00';
const generatedPath=path.resolve(root,'data/questions/draft/chapter-1-generated.json');
const generated=JSON.parse(await readFile(generatedPath,'utf8')) as Question[];
const draftDir=path.resolve(root,'data/questions/draft');
const sampleName=(await readdir(draftDir)).find(name=>name.startsWith('import-')&&name.endsWith('.json'));
if(!sampleName) throw new Error('Cannot find preserved 20-sample draft file');
const samplePath=path.join(draftDir,sampleName);
const samples=JSON.parse(await readFile(samplePath,'utf8')) as Question[];
const all=[...generated,...samples.filter(q=>q.chapter===1)];
if(all.length!==30) throw new Error(`Expected 30 chapter-1 questions, found ${all.length}`);
const byId=new Map(all.map(q=>[q.id,q]));
const requireQuestion=(id:string)=>{const q=byId.get(id);if(!q)throw new Error(`Missing ${id}`);return q};
const setTag=(id:string,optionId:string,tag:MachineErrorTag)=>{const option=requireQuestion(id).options.find(item=>item.id===optionId);if(!option)throw new Error(`${id}/${optionId} missing`);option.error_tag=tag};

requireQuestion('scut811-p1-q0022').stem='非零周期连续时间信号，若一周期能量有限且非零，则该信号通常属于哪一类？';
for(const [id,source] of Object.entries(chapter1ReviewedSources)) requireQuestion(id).source=structuredClone(source);
setTag('scut811-p1-q0032','A','CONFUSE_ENVELOPE_PHASE');
setTag('scut811-p1-q0041','B','CONFUSE_MEMORY_CAUSALITY');
setTag('scut811-p1-q0044','C','CONFUSE_INVERTIBILITY_IDENTITY');
setTag('scut811-p1-q0038','D','WRONG_SAMPLING_VALUE');

setTag('scut811-p1-sample-001','B','FORGOT_MAGNITUDE_SQUARED');
setTag('scut811-p1-sample-001','C','CONFUSE_ENERGY_POWER');
setTag('scut811-p1-sample-001','D','CONFUSE_ENERGY_POWER');
const sample2=requireQuestion('scut811-p1-sample-002');
sample2.options.find(o=>o.id==='A')!.content='线性、时不变、非因果';
setTag(sample2.id,'A','TIME_INVARIANCE_ERROR');
setTag(sample2.id,'C','LINEARITY_ERROR');
setTag(sample2.id,'D','CAUSALITY_ERROR');
sample2.explanation='正确：取样自变量的映射不破坏叠加性，但平移输入不能只让输出平移，所以系统时变；例如 \\(t=-\\pi/2\\) 时，\\(\\sin t=-1>t\\)，输出使用了相对当前时刻的未来输入，因此非因果。错项分别误判时不变性、线性或因果性。易错点：系统线性看输入幅度的叠加，不看时间轴是否被非线性变换。';
setTag('scut811-p1-sample-003','D','FORGOT_INTEGRATION');

for(const question of all) question.review={status:'reviewed',reviewer:'project-owner',reviewed_at:reviewedAt,notes:'Phase 1第1章30题已完成人工审核：答案正确、配额保留；来源与指定machine error tags已复核。尚须独立verified审核后方可发布。'};

await writeFile(generatedPath,JSON.stringify(generated,null,2)+'\n','utf8');
await writeFile(samplePath,JSON.stringify(samples,null,2)+'\n','utf8');
console.log(`Applied chapter-1 human review to ${all.length} questions; other chapters were not changed.`);
