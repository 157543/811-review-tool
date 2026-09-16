import { loadQuestionFiles, readJson } from './lib.ts';

interface ManifestSource {
  source_id:string;
  kind:string;
  page_count:number|null;
}
interface Manifest { sources:ManifestSource[] }

const manifest=await readJson<Manifest>('source_notes/manifest.local.json');
const sourceById=new Map(manifest.sources.map(source=>[source.source_id,source]));
const entries=await loadQuestionFiles();
const errors:string[]=[];
let citationCount=0;
const usedSources=new Set<string>();

for(const {file,question} of entries) {
  if(!question.source.citations.length) errors.push(`${file}:${question.id}: no citations`);
  const citedIds=new Set<string>();
  for(const [index,citation] of question.source.citations.entries()) {
    citationCount++;
    citedIds.add(citation.source_id);
    usedSources.add(citation.source_id);
    const registered=sourceById.get(citation.source_id);
    if(!registered) {
      errors.push(`${file}:${question.id}: citation ${index+1} uses unknown source_id ${citation.source_id}`);
      continue;
    }
    if(!citation.location_text.trim()) errors.push(`${file}:${question.id}: citation ${index+1} has empty location_text`);
    if(registered.kind==='pdf'&&citation.pdf_page===null) errors.push(`${file}:${question.id}: citation ${index+1} omits pdf_page for PDF source`);
    if(citation.pdf_page!==null&&registered.page_count!==null&&citation.pdf_page>registered.page_count) {
      errors.push(`${file}:${question.id}: citation ${index+1} pdf_page ${citation.pdf_page} exceeds ${registered.page_count}`);
    }
  }
  if(question.source.type==='KEY_EXERCISE') {
    if(!citedIds.has('SCUT811-KEY-EXERCISE-LIST-01')) errors.push(`${file}:${question.id}: KEY_EXERCISE lacks priority-list citation`);
    if(!citedIds.has('OPPENHEIM-2E-LIU-01')) errors.push(`${file}:${question.id}: KEY_EXERCISE lacks textbook locator citation`);
  }
}

if(errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Source citation validation passed: ${entries.length} questions, ${citationCount} citations, ${usedSources.size} registered sources used.`);
