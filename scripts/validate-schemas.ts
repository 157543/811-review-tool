import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { createAjv, readJson, root } from './lib.ts';

const files=(await readdir(path.resolve(root,'schemas'))).filter(f=>f.endsWith('.schema.json')).sort();
const ajv=createAjv();
const schemas=await Promise.all(files.map(file=>readJson<object>(`schemas/${file}`)));
for(const schema of schemas) ajv.addSchema(schema);
for(const schema of schemas) {
  const id=(schema as {$id?:string}).$id;
  if(!id || !ajv.getSchema(id)) throw new Error(`Schema failed to compile: ${id??'missing $id'}`);
}
console.log(`Ajv Draft 2020-12 compiled ${files.length} schemas: ${files.join(', ')}`);
