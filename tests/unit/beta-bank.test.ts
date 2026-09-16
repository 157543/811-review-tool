import { describe, expect, it } from 'vitest';
import beta from '../../data/questions/reviewed-beta.json';
import release from '../../data/questions/release.json';

describe('Reviewed/Beta bank artifact',()=>{
  it('contains all 305 reviewed questions from chapters 1–5',()=>{
    expect(beta.channel).toBe('reviewed-beta');
    expect(beta.questions).toHaveLength(305);
    expect(beta.questions.every(question=>question.review.status==='reviewed')).toBe(true);
    expect(beta.questions.filter(question=>question.chapter===1)).toHaveLength(30);
    expect(beta.questions.filter(question=>question.chapter===2)).toHaveLength(45);
    expect(beta.questions.filter(question=>question.chapter===3)).toHaveLength(65);
    expect(beta.questions.filter(question=>question.chapter===4)).toHaveLength(85);
    expect(beta.questions.filter(question=>question.chapter===5)).toHaveLength(80);
  });

  it('publishes the owner-authorized learning release without faking verification',()=>{
    expect(release.questions).toHaveLength(305);
    expect(release.publication.status).toBe('authorized');
    expect(release.publication.required_review_status).toBe('reviewed');
    expect(release.publication.source_verification_policy).toBe('preserve');
    expect(release.questions.every(question=>question.review.status==='reviewed')).toBe(true);
  });
});
