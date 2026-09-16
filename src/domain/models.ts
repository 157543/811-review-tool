export type OptionId = 'A' | 'B' | 'C' | 'D';
export type QuestionSubtype = 'concept' | 'formula' | 'transform_pair' | 'error_discrimination';
export type ReviewStatus = 'draft' | 'reviewed' | 'verified';
export type SourceType = 'TEXTBOOK_DEFINITION' | 'TEXTBOOK_PROPERTY' | 'TEXTBOOK_TRANSFORM_PAIR' | 'TEXTBOOK_EXAMPLE' | 'KEY_EXERCISE' | 'TRUE_EXAM_ORIGINAL' | 'TRUE_EXAM_MODEL' | 'PERSONAL_MISTAKE' | 'CONTROLLED_VARIANT';
export type MachineErrorTag = 'MISS_SCALE_FACTOR' | 'SIGN_ERROR' | 'WRONG_FREQUENCY_SCALE' | 'MISSING_2PI' | 'WRONG_HARMONIC_INDEX' | 'CONFUSE_CT_DT' | 'WRONG_SHIFT_DIRECTION' | 'WRONG_MOD_N' | 'FORGOT_MAGNITUDE_SQUARED' | 'CONFUSE_ENERGY_POWER' | 'TIME_INVARIANCE_ERROR' | 'LINEARITY_ERROR' | 'CAUSALITY_ERROR' | 'MISSING_TIME_REVERSAL' | 'WRONG_CONVOLUTION_INDEX' | 'BOTH_SIGNALS_SHIFTED' | 'OUTPUT_NOT_DIFFERENTIATED' | 'INVALID_TIME_SCALING_FOR_LTI' | 'IGNORED_CONJUGATE_SYMMETRY' | 'MISS_FACTOR_2' | 'MISSING_ABSOLUTE_VALUE' | 'FORGOT_INTEGRATION' | 'WRONG_PERIOD' | 'WRONG_SUPPORT_INTERVAL' | 'CONFUSE_CONVOLUTION_MULTIPLICATION' | 'IGNORED_CONVERGENCE_CONDITION' | 'WRONG_PARSEVAL_FACTOR' | 'WRONG_FILTER_PASSBAND' | 'WRONG_DELAY_FACTOR' | 'WRONG_DC_COEFFICIENT' | 'WRONG_COEFFICIENT_NORMALIZATION' | 'WRONG_DIFFERENTIATION_FACTOR' | 'WRONG_DUALITY_FACTOR' | 'CONFUSE_IMPULSE_STEP' | 'CONFUSE_ENVELOPE_PHASE' | 'CONFUSE_MEMORY_CAUSALITY' | 'CONFUSE_INVERTIBILITY_IDENTITY' | 'WRONG_SAMPLING_VALUE';
export type BlueprintSection = '1.1'|'1.2'|'1.3'|'1.4'|'1.5-1.6'|'2.1'|'2.2'|'2.3'|'2.4'|'2.5'|'3.2'|'3.3'|'3.4'|'3.5'|'3.6'|'3.7'|'3.8'|'3.9-3.11'|'4.1'|'4.2'|'4.3'|'4.4'|'4.5'|'4.6'|'4.7'|'5.1'|'5.2'|'5.3'|'5.4'|'5.5'|'5.6'|'5.7'|'5.8';
export type StudyMode = 'today' | 'formula_pairs' | 'error_focus' | 'chapter' | 'mistakes';
export type GradingMode = 'immediate' | 'end_of_session';
export type BankChannel = 'release' | 'reviewed-beta' | 'test-fixture';
export type MasteryStatus = 'WEAK' | 'LEARNING' | 'MASTERED';
export type ErrorReason = 'CONCEPT' | 'FORMULA_PAIR' | 'CONDITION' | 'SIGN_COEFFICIENT' | 'METHOD_ENTRY' | 'STEP_ORDER' | 'CALCULATION' | 'READING_GRAPH' | 'GUESS';

export interface QuestionOption { id: OptionId; content: string; error_tag: MachineErrorTag | null }
export interface Citation { source_id: string; location_text: string; pdf_page: number | null; printed_page: string | null; section: string | null; item: string | null; year: number | null; original_exam_code: string | null }
export interface Question {
  schema_version: '1.0.0'; id: string; revision: number; family_id: string; variant_role: 'base' | 'variant';
  chapter: number; section: string; blueprint_section: BlueprintSection; knowledge_point_id: string; knowledge_point: string;
  type: 'mcq'; subtype: QuestionSubtype; importance_811: number; syllabus: 'explicit' | 'derived' | 'boundary'; can_skip: boolean;
  notation_profile: 'oppenheim-2e-ct-dt-v1'; stem: string; options: QuestionOption[]; correct_option: OptionId; explanation: string;
  figures?: Array<{id:string; asset_id:string; alt:string; placement:'stem'|'explanation'|OptionId}>;
  source: { type:SourceType; reference:string; parent_id:string|null; parent_knowledge_point:string|null; citations:Citation[]; verification:'unverified'|'verified'|'conflict'|'needs_manual_check' };
  review: { status:ReviewStatus; reviewer:string|null; reviewed_at:string|null; notes:string };
}

export interface QuestionSnapshot { snapshot_id:string; question_id:string; revision:number; bank_version:string; content_hash:string; content:Question }
export interface Attempt {
  schema_version:'1.0.0'; id:string; session_id:string; position:number; question_id:string; question_revision:number;
  question_snapshot_id:string; bank_version:string; selected_option_id:OptionId; option_order:[OptionId,OptionId,OptionId,OptionId];
  uncertain:boolean; submitted_at:string; grading:{is_correct:boolean;correct_option_id:OptionId;graded_at:string}|null; schedule_policy_id:string;
}
export interface ReasonAnnotation { id:string; attempt_id:string; reason:ErrorReason; recorded_at:string }
export type ErrorReasonDistribution = Record<ErrorReason, number>;
export interface Mistake {
  schema_version:'1.0.0'; question_id:string; family_id:string; status:MasteryStatus; first_collected_at:string;
  collection_reasons:Array<'WRONG'|'UNCERTAIN'>; attempt_count:number; mistake_count:number; uncertain_count:number;
  latest_attempt_id:string; last_wrong_attempt_id:string|null; last_uncertain_attempt_id:string|null;
  last_wrong_at:string|null; last_uncertain_at:string|null; last_attempt_at:string; error_reason_distribution:ErrorReasonDistribution;
  unclassified_wrong_count:number; spaced_correct_streak:number; last_qualifying_review_at:string|null; next_due_at:string|null;
  mastered_at:string|null; schedule_rule_version:'simple-spaced-v1'; updated_at:string;
}
export interface StudyFilters { chapters:number[]; sections:string[]; knowledge_point_ids:string[]; subtypes:QuestionSubtype[]; user_error_reasons:ErrorReason[]; statuses:MasteryStatus[]; min_mistake_count:number|null; last_wrong_since:string|null; last_wrong_before:string|null }
export interface SessionQueueItem { question_id:string; revision:number; question_snapshot_id:string; option_order:[OptionId,OptionId,OptionId,OptionId]; attempt_id:string|null }
export interface Session { schema_version:'1.0.0'; id:string; bank_version:string; mode:StudyMode; filters:StudyFilters; grading_mode:GradingMode; queue:SessionQueueItem[]; current_index:number; review_index:number; pending_selection:OptionId|null; pending_uncertain:boolean; pending_reason_attempt_ids:string[]; started_at:string; completed_at:string|null; review_completed_at:string|null }
export interface Settings { id:'primary'; current_chapter:number; grading_mode:GradingMode; timezone:string; sampling_rule_version:string; schedule_rule_version:string; schedule_policy_id:string; review_intervals_days:[number,number,number]; chapter_weights:Record<'1'|'2'|'3'|'4'|'5',number>; recent_window_days:number; family_cooldown_count:number }
export interface SchedulePolicy { id:string; algorithm_version:'simple-spaced-v1'; review_intervals_days:[1,3,7]; min_separation_ms:86400000; required_correct_streak:3; uncertain_resets_streak:true }
export interface SourceDescriptor { source_id:string; title:string; edition:string|null; file_sha256:string }
export interface AssetDescriptor { asset_id:string; mime_type:'image/svg+xml'|'image/png'; content_hash:string; width:number; height:number; source_ids:string[] }
export interface AnswerView { attempt_id:string; question_revision:number; option_id:OptionId; displayed_label:OptionId; content:string; submitted_at:string; uncertain:boolean; is_correct:boolean }
export interface ExportMistakeItem {
  question_id:string; question_revision:number; representative_attempt_id:string; user_answer_basis:'last_wrong'|'last_uncertain'; chapter:number; section:string; blueprint_section:BlueprintSection;
  knowledge_point_id:string; knowledge_point:string; type:'mcq'; subtype:QuestionSubtype; stem:string; options:QuestionOption[]; option_order:[OptionId,OptionId,OptionId,OptionId];
  user_answer:AnswerView; correct_answer:{option_id:OptionId;displayed_label:OptionId;content:string}; explanation:string; source:Question['source']; figures?:Question['figures'];
  mistake_count:number; uncertain_count:number; error_reason_distribution:ErrorReasonDistribution; unclassified_wrong_count:number; status:MasteryStatus; last_wrong_at:string|null; latest_attempt:AnswerView;
}
export interface MistakeExportBundle {
  mistake_export_schema_version:'1.0.0'; export_id:string; exported_at:string; app_version:string; timezone:string;
  scope:{kind:'mistakes_all'|'mistakes_filtered';filters:StudyFilters;question_ids:string[]}; items:ExportMistakeItem[];
  question_snapshots:QuestionSnapshot[]; attempts:Attempt[]; reason_annotations:ReasonAnnotation[]; schedule_policies:SchedulePolicy[]; mistakes:Mistake[];
}
export interface FullBackup {
  export_schema_version:'1.0.0'; export_id:string; exported_at:string; app_version:string; timezone:string;
  scope:{kind:'full_backup';question_ids:string[]}; bank_versions:string[]; question_snapshots:QuestionSnapshot[]; attempts:Attempt[];
  reason_annotations:ReasonAnnotation[]; schedule_policies:SchedulePolicy[]; mistakes:Mistake[]; sessions:Session[]; settings:Settings|null;
  source_descriptors:SourceDescriptor[]; asset_descriptors:AssetDescriptor[];
}
export const EMPTY_FILTERS: StudyFilters = { chapters:[], sections:[], knowledge_point_ids:[], subtypes:[], user_error_reasons:[], statuses:[], min_mistake_count:null, last_wrong_since:null, last_wrong_before:null };
export const EMPTY_REASON_DISTRIBUTION: ErrorReasonDistribution = { CONCEPT:0, FORMULA_PAIR:0, CONDITION:0, SIGN_COEFFICIENT:0, METHOD_ENTRY:0, STEP_ORDER:0, CALCULATION:0, READING_GRAPH:0, GUESS:0 };
