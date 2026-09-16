import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { BlueprintSection, Citation, MachineErrorTag, OptionId, Question, QuestionSubtype } from '../src/domain/models.ts';
import { readBlueprint, readJson, root } from './lib.ts';
import { chapter1Catalog } from './content/chapter-1.ts';
import { chapter2Catalog } from './content/chapter-2.ts';
import { chapter3Catalog } from './content/chapter-3.ts';
import { chapter4Catalog } from './content/chapter-4.ts';
import { chapter5Catalog } from './content/chapter-5.ts';
import type { ChapterCatalog, DraftSpec } from './content/phase1-types.ts';

interface KnowledgeItem { id:string; chapter:number; blueprint_section:BlueprintSection; label:string }
interface ExerciseEntry {
  exercise_number:string;
  textbook_chapter:number;
  textbook_chapter_title:string;
  selection_evidence:{source_id:string;pdf_page:number;locator:string};
  textbook_evidence:{source_id:string;printed_pages:string[];pdf_pages:number[];locator:string};
  topic_summary:string;
  blueprint_support:Array<{section:string;role:'primary'|'secondary';extent:string}>;
  flags:string[];
}
interface ExerciseIndex { entries:ExerciseEntry[] }

const types:QuestionSubtype[]=['concept','formula','transform_pair','error_discrimination'];
const optionIds:OptionId[]=['A','B','C','D'];
const catalogs:Record<number,ChapterCatalog>={1:chapter1Catalog,2:chapter2Catalog,3:chapter3Catalog,4:chapter4Catalog,5:chapter5Catalog};
const fallbackSources:Record<string,{printed:string;pdf:number;location:string;type:Question['source']['type']}>={
  '3.4':{printed:'123',pdf:146,location:'第3.4节 傅里叶级数的收敛',type:'TEXTBOOK_DEFINITION'},
  '4.7':{printed:'210',pdf:233,location:'第4.7节 由线性常系数微分方程表征的系统',type:'TEXTBOOK_PROPERTY'},
  '5.7':{printed:'250',pdf:273,location:'第5.7节 对偶性',type:'TEXTBOOK_PROPERTY'},
  '5.8':{printed:'253',pdf:276,location:'第5.8节 由线性常系数差分方程表征的系统',type:'TEXTBOOK_PROPERTY'},
};

const blueprint=await readBlueprint();
const knowledge=await readJson<{items:KnowledgeItem[]}>('data/registries/knowledge-points.json');
const exerciseIndex=await readJson<ExerciseIndex>('source_notes/index/key-exercises-phase1.json');
const draftDir=path.resolve(root,'data/questions/draft');
const current:Question[]=[];
for(const name of await readdir(draftDir)) {
  if(!name.endsWith('.json')||/^chapter-[1-5]-generated\.json$/.test(name)) continue;
  const parsed=JSON.parse(await readFile(path.join(draftDir,name),'utf8')) as Question|Question[];
  current.push(...(Array.isArray(parsed)?parsed:[parsed]));
}
const existingIds=new Set(current.map(question=>question.id));
const existingFamilies=new Set(current.map(question=>question.family_id));
if(current.length!==20) throw new Error(`Expected 20 preserved drafts before generation, found ${current.length}`);

function sourceFor(section:string,index:number):Question['source'] {
  const eligible=exerciseIndex.entries.filter(entry=>
    !entry.flags.includes('limited_reuse_only')&&entry.blueprint_support.some(support=>support.section===section)
  );
  const primary=eligible.filter(entry=>entry.blueprint_support.some(support=>support.section===section&&support.role==='primary'));
  const candidates=primary.length?primary:eligible;
  if(candidates.length) {
    const entry=candidates[index%candidates.length];
    const citations:Citation[]=[
      {source_id:entry.selection_evidence.source_id,location_text:entry.selection_evidence.locator,pdf_page:entry.selection_evidence.pdf_page,printed_page:null,section:`第${entry.textbook_chapter}章`,item:entry.exercise_number,year:null,original_exam_code:null},
      {source_id:entry.textbook_evidence.source_id,location_text:entry.textbook_evidence.locator,pdf_page:entry.textbook_evidence.pdf_pages[0],printed_page:entry.textbook_evidence.printed_pages[0],section:`第${entry.textbook_chapter}章 ${entry.textbook_chapter_title}`,item:entry.exercise_number,year:null,original_exam_code:null},
    ];
    return {type:'KEY_EXERCISE',reference:`基于重点习题${entry.exercise_number}（${entry.topic_summary}）的受控短题改写；答案与干扰项待人工复核。`,parent_id:null,parent_knowledge_point:null,citations,verification:'needs_manual_check'};
  }
  const fallback=fallbackSources[section];
  if(!fallback) throw new Error(`No indexed source for blueprint section ${section}`);
  return {
    type:fallback.type,
    reference:`基于奥本海姆第二版${fallback.location}的受控短题改写；答案与干扰项待人工复核。`,
    parent_id:null,
    parent_knowledge_point:null,
    citations:[{source_id:'OPPENHEIM-2E-LIU-01',location_text:fallback.location,pdf_page:fallback.pdf,printed_page:fallback.printed,section:fallback.location,item:null,year:null,original_exam_code:null}],
    verification:'needs_manual_check'
  };
}

function buildQuestion(spec:DraftSpec,serial:number,cellIndex:number):Question {
  const id=`scut811-p1-q${String(serial).padStart(4,'0')}`;
  if(existingIds.has(id)||existingFamilies.has(id)) throw new Error(`Generated ID collision: ${id}`);
  const correctSlot=serial%4;
  const ordered=[...spec.wrong.map(item=>({content:item.text,error_tag:item.tag})),{content:spec.correct,error_tag:null as MachineErrorTag|null}];
  const rotated=[...ordered.slice(4-correctSlot),...ordered.slice(0,4-correctSlot)];
  const options=rotated.map((item,index)=>({id:optionIds[index],...item})) as Question['options'];
  const correct=options.find(option=>option.error_tag===null&&option.content===spec.correct);
  if(!correct) throw new Error(`${id}: correct option placement failed`);
  const kp=knowledge.items.find(item=>item.blueprint_section===spec.blueprint_section);
  if(!kp) throw new Error(`${id}: unknown knowledge point ${spec.blueprint_section}`);
  return {
    schema_version:'1.0.0',id,revision:1,family_id:id,variant_role:'base',
    chapter:kp.chapter,section:spec.section??spec.blueprint_section.split('-')[0],blueprint_section:spec.blueprint_section as BlueprintSection,
    knowledge_point_id:kp.id,knowledge_point:kp.label,type:'mcq',subtype:spec.subtype,
    importance_811:spec.importance??4,syllabus:spec.syllabus??'explicit',can_skip:false,notation_profile:'oppenheim-2e-ct-dt-v1',
    stem:spec.stem,options,correct_option:correct.id,explanation:spec.explanation,
    source:sourceFor(spec.blueprint_section,cellIndex),
    review:{status:'draft',reviewer:null,reviewed_at:null,notes:'Phase 1全量题库受控生成草稿；必须完成人工知识、干扰项、来源与移动端审核后才能晋级。'}
  };
}

const generatedByChapter=new Map<number,Question[]>([1,2,3,4,5].map(chapter=>[chapter,[]]));
let serial=21;
for(const row of blueprint) {
  const chapter=Number(row.chapter);
  for(const subtype of types) {
    const existing=current.filter(question=>question.blueprint_section===row.section&&question.subtype===subtype).length;
    const gap=Number(row[subtype])-existing;
    if(gap<0) throw new Error(`${row.section}|${subtype}: existing ${existing} exceeds target ${row[subtype]}`);
    for(let index=0;index<gap;index++) {
      const spec=catalogs[chapter](row.section,subtype,index);
      if(spec.blueprint_section!==row.section||spec.subtype!==subtype) throw new Error(`${row.section}|${subtype}: catalog returned mismatched spec`);
      generatedByChapter.get(chapter)!.push(buildQuestion(spec,serial++,index));
    }
  }
}

const generated=[...generatedByChapter.values()].flat();
if(generated.length!==285||serial!==306) throw new Error(`Expected 285 generated questions, got ${generated.length}`);
for(const [chapter,questions] of generatedByChapter) {
  await writeFile(path.join(draftDir,`chapter-${chapter}-generated.json`),JSON.stringify(questions,null,2)+'\n','utf8');
  console.log(`chapter-${chapter}: generated ${questions.length}`);
}
console.log('Generated 285 draft questions from exact blueprint cell gaps; preserved drafts=20; combined=305.');
