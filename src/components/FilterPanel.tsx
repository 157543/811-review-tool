import type { ErrorReason, MasteryStatus, Question, QuestionSubtype, StudyFilters } from '../domain/models';
import reasons from '../../data/registries/error-reasons.json';

interface Props { filters:StudyFilters; onChange:(filters:StudyFilters)=>void; questions:Question[]; title?:string }
const subtypeLabels:Record<QuestionSubtype,string>={concept:'概念',formula:'公式',transform_pair:'变换对',error_discrimination:'易错辨析'};
const statusLabels:Record<MasteryStatus,string>={WEAK:'薄弱',LEARNING:'巩固中',MASTERED:'已掌握'};
const toggle=<T,>(values:T[],value:T)=>values.includes(value)?values.filter(item=>item!==value):[...values,value];

export function FilterPanel({filters,onChange,questions,title='筛选条件'}:Props) {
  const knowledge=[...new Map(questions.map(question=>[question.knowledge_point_id,{id:question.knowledge_point_id,label:question.knowledge_point}])).values()];
  const active=filters.chapters.length+filters.subtypes.length+filters.user_error_reasons.length+filters.statuses.length+filters.knowledge_point_ids.length;
  return <details className="filter-panel" open={active>0}>
    <summary>{title}<small>{active?`已选 ${active} 项`:'不限制'}</small></summary>
    <div className="filter-groups">
      <fieldset><legend>章节</legend><div className="chip-row">{[1,2,3,4,5].map(chapter=><button type="button" aria-pressed={filters.chapters.includes(chapter)} key={chapter} onClick={()=>onChange({...filters,chapters:toggle(filters.chapters,chapter)})}>第 {chapter} 章</button>)}</div></fieldset>
      <fieldset><legend>题型</legend><div className="chip-row">{(Object.keys(subtypeLabels) as QuestionSubtype[]).map(subtype=><button type="button" aria-pressed={filters.subtypes.includes(subtype)} key={subtype} onClick={()=>onChange({...filters,subtypes:toggle(filters.subtypes,subtype)})}>{subtypeLabels[subtype]}</button>)}</div></fieldset>
      <fieldset><legend>掌握状态</legend><div className="chip-row">{(Object.keys(statusLabels) as MasteryStatus[]).map(status=><button type="button" aria-pressed={filters.statuses.includes(status)} key={status} onClick={()=>onChange({...filters,statuses:toggle(filters.statuses,status)})}>{statusLabels[status]}</button>)}</div></fieldset>
      <fieldset><legend>错因</legend><div className="chip-row">{reasons.items.map(reason=><button type="button" aria-pressed={filters.user_error_reasons.includes(reason.id as ErrorReason)} key={reason.id} onClick={()=>onChange({...filters,user_error_reasons:toggle(filters.user_error_reasons,reason.id as ErrorReason)})}>{reason.label}</button>)}</div></fieldset>
      {knowledge.length>0&&<fieldset><legend>知识点</legend><select aria-label="知识点筛选" value={filters.knowledge_point_ids[0]??''} onChange={event=>onChange({...filters,knowledge_point_ids:event.target.value?[event.target.value]:[]})}><option value="">全部知识点</option>{knowledge.map(item=><option key={item.id} value={item.id}>{item.label}</option>)}</select></fieldset>}
    </div>
    {active>0&&<button type="button" className="clear-filter" onClick={()=>onChange({chapters:[],sections:[],knowledge_point_ids:[],subtypes:[],user_error_reasons:[],statuses:[],min_mistake_count:null,last_wrong_since:null,last_wrong_before:null})}>清空筛选</button>}
  </details>;
}
