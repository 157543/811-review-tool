import { describe,expect,it } from 'vitest';
import { EMPTY_REASON_DISTRIBUTION } from '../../src/domain/models';
import type { Attempt,Mistake,Question,Session } from '../../src/domain/models';
import { buildLearningDashboard,getDueState } from '../../src/domain/progress';

const now=new Date('2026-09-16T00:00:00.000Z');
const questions=[1,2,3,4,5].map((chapter,index)=>({id:`question-${index}`,family_id:`family-${index}`,chapter})) as Question[];
function mistake(questionIndex:number,status:Mistake['status'],due:string|null):Mistake {
  const question=questions[questionIndex];
  return {schema_version:'1.0.0',question_id:question.id,family_id:question.family_id,status,first_collected_at:now.toISOString(),collection_reasons:['WRONG'],attempt_count:1,mistake_count:1,uncertain_count:0,latest_attempt_id:'a1',last_wrong_attempt_id:'a1',last_uncertain_attempt_id:null,last_wrong_at:now.toISOString(),last_uncertain_at:null,last_attempt_at:now.toISOString(),error_reason_distribution:{...EMPTY_REASON_DISTRIBUTION},unclassified_wrong_count:1,spaced_correct_streak:0,last_qualifying_review_at:null,next_due_at:due,mastered_at:status==='MASTERED'?now.toISOString():null,schedule_rule_version:'simple-spaced-v1',updated_at:now.toISOString()};
}
const attempt:Attempt={schema_version:'1.0.0',id:'a1',session_id:'s1',position:0,question_id:questions[0].id,question_revision:1,question_snapshot_id:'snap',bank_version:'test',selected_option_id:'A',option_order:['A','B','C','D'],uncertain:false,submitted_at:now.toISOString(),grading:{is_correct:true,correct_option_id:'A',graded_at:now.toISOString()},schedule_policy_id:'simple-spaced-v1-1-3-7'};
const session:Session={schema_version:'1.0.0',id:'s1',bank_version:'test',mode:'today',filters:{chapters:[],sections:[],knowledge_point_ids:[],subtypes:[],user_error_reasons:[],statuses:[],min_mistake_count:null,last_wrong_since:null,last_wrong_before:null},grading_mode:'immediate',queue:[],current_index:1,review_index:0,pending_selection:null,pending_uncertain:false,pending_reason_attempt_ids:[],started_at:now.toISOString(),completed_at:now.toISOString(),review_completed_at:null};

describe('learning dashboard',()=>{
  it('separates due, tomorrow and mastered records',()=>{
    expect(getDueState(mistake(0,'WEAK','2026-09-15T00:00:00.000Z'),now)).toBe('due');
    expect(getDueState(mistake(1,'LEARNING','2026-09-16T12:00:00.000Z'),now)).toBe('tomorrow');
    expect(getDueState(mistake(2,'MASTERED',null),now)).toBe('mastered');
  });
  it('summarizes chapter progress and the latest completed session',()=>{
    const result=buildLearningDashboard(questions,[mistake(0,'WEAK','2026-09-15T00:00:00.000Z')],[attempt],[session],now);
    expect(result.dueToday).toBe(1);expect(result.practiced).toBe(1);
    expect(result.chapters.find(item=>item.chapter===questions[0].chapter)?.practiced).toBe(1);
    expect(result.recent).toMatchObject({total:1,correct:1,wrong:0});
  });
});
