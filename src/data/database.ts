import Dexie, { type EntityTable } from 'dexie';
import type { Attempt, Mistake, Question, QuestionSnapshot, ReasonAnnotation, SchedulePolicy, Session, Settings } from '../domain/models';

export class ReviewDatabase extends Dexie {
  questions!: EntityTable<Question, 'id'>;
  snapshots!: EntityTable<QuestionSnapshot, 'snapshot_id'>;
  attempts!: EntityTable<Attempt, 'id'>;
  mistakes!: EntityTable<Mistake, 'question_id'>;
  sessions!: EntityTable<Session, 'id'>;
  reasonAnnotations!: EntityTable<ReasonAnnotation, 'id'>;
  schedulePolicies!: EntityTable<SchedulePolicy, 'id'>;
  settings!: EntityTable<Settings, 'id'>;

  constructor(name = 'scut-811-review') {
    super(name);
    const stores={
      questions: '&id, chapter, blueprint_section, subtype, review.status',
      snapshots: '&snapshot_id, [question_id+revision], bank_version',
      attempts: '&id, session_id, question_id, submitted_at',
      mistakes: '&question_id, family_id, status, next_due_at, last_wrong_at',
      sessions: '&id, completed_at, started_at',
      reasonAnnotations: '&id, attempt_id, reason',
      schedulePolicies: '&id', settings: '&id',
    };
    this.version(1).stores(stores);
    this.version(2).stores(stores).upgrade(transaction=>transaction.table('sessions').toCollection().modify(session=>{
      session.review_index??=0; session.review_completed_at??=null;
    }));
  }
}

export const db = new ReviewDatabase();
