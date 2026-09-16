import type { MachineErrorTag, QuestionSubtype } from '../../src/domain/models.ts';

export interface WrongOption {
  text:string;
  tag:MachineErrorTag|null;
}

export interface DraftSpec {
  blueprint_section:string;
  subtype:QuestionSubtype;
  stem:string;
  correct:string;
  wrong:[WrongOption,WrongOption,WrongOption];
  explanation:string;
  importance?:number;
  section?:string;
  syllabus?:'explicit'|'derived'|'boundary';
}

export type ChapterCatalog=(blueprintSection:string,subtype:QuestionSubtype,index:number)=>DraftSpec;

export const wrong=(text:string,tag:MachineErrorTag|null):WrongOption=>({text,tag});

export function choose<T>(items:readonly T[],index:number,label:string):T {
  if(index<0||index>=items.length) throw new Error(`${label}: requested index ${index}, only ${items.length} curated specs`);
  return items[index];
}
