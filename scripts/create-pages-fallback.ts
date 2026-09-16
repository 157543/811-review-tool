import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const output=path.resolve(process.cwd(),process.argv[2]??'dist/404.html');
const rawBase=process.env.VITE_BASE_PATH??'/';
const base=`/${rawBase.replace(/^\/+|\/+$/g,'')}/`.replace('//','/');
const target=JSON.stringify(base);
const html=`<!doctype html>\n<html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>正在返回华工811复习工具</title></head><body><script>location.replace(${target}+location.search+location.hash);<\/script></body></html>\n`;
await writeFile(output,html,'utf8');
console.log(`GitHub Pages SPA fallback written: ${output} -> ${base}`);