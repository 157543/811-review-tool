import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { deflateSync } from 'node:zlib';

const dist=path.resolve(process.cwd(),'dist');
const icons=path.join(dist,'icons');
await mkdir(icons,{recursive:true});

function crc32(input:Buffer) {
  let crc=0xffffffff;
  for(const byte of input) {
    crc^=byte;
    for(let bit=0;bit<8;bit++) crc=(crc>>>1)^((crc&1)?0xedb88320:0);
  }
  return (crc^0xffffffff)>>>0;
}

function chunk(type:string,data:Buffer) {
  const label=Buffer.from(type,'ascii');
  const output=Buffer.alloc(12+data.length);
  output.writeUInt32BE(data.length,0);label.copy(output,4);data.copy(output,8);
  output.writeUInt32BE(crc32(Buffer.concat([label,data])),8+data.length);
  return output;
}

function makeIcon(size:number) {
  const stride=size*4+1;const raw=Buffer.alloc(stride*size);
  const set=(x:number,y:number,r:number,g:number,b:number)=>{
    if(x<0||y<0||x>=size||y>=size)return;
    const offset=y*stride+1+x*4;raw[offset]=r;raw[offset+1]=g;raw[offset+2]=b;raw[offset+3]=255;
  };
  for(let y=0;y<size;y++) {
    raw[y*stride]=0;
    for(let x=0;x<size;x++) {
      const dx=x-size/2,dy=y-size/2;const inside=dx*dx+dy*dy<(size*.405)**2;
      set(x,y,...(inside?[217,81,54]:[24,33,29]) as [number,number,number]);
    }
  }
  const glyphs=['111101111101111','010110010010111','010110010010111'];
  const scale=Math.max(4,Math.floor(size/18));const glyphWidth=3*scale;const gap=scale;const total=glyphWidth*3+gap*2;
  const startX=Math.floor((size-total)/2);const startY=Math.floor((size-5*scale)/2);
  glyphs.forEach((glyph,index)=>{for(let row=0;row<5;row++)for(let col=0;col<3;col++)if(glyph[row*3+col]==='1')for(let yy=0;yy<scale;yy++)for(let xx=0;xx<scale;xx++)set(startX+index*(glyphWidth+gap)+col*scale+xx,startY+row*scale+yy,255,255,255);});
  const ihdr=Buffer.alloc(13);ihdr.writeUInt32BE(size,0);ihdr.writeUInt32BE(size,4);ihdr[8]=8;ihdr[9]=6;
  return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',ihdr),chunk('IDAT',deflateSync(raw)),chunk('IEND',Buffer.alloc(0))]);
}

await Promise.all([192,512].map(size=>writeFile(path.join(icons,`icon-${size}.png`),makeIcon(size))));
await writeFile(path.join(dist,'manifest.webmanifest'),JSON.stringify({
  id:'./',name:'华工811信号与系统复习器',short_name:'811复习',
  description:'305道信号与系统选择题，支持离线刷题、错题与会话恢复。',
  lang:'zh-CN',start_url:'./',scope:'./',display:'standalone',
  background_color:'#f4f0e8',theme_color:'#18211d',
  icons:[
    {src:'icons/icon-192.png',sizes:'192x192',type:'image/png',purpose:'any maskable'},
    {src:'icons/icon-512.png',sizes:'512x512',type:'image/png',purpose:'any maskable'},
  ],
},null,2)+'\n','utf8');

async function filesUnder(directory:string):Promise<string[]> {
  const files:string[]=[];
  for(const entry of await readdir(directory,{withFileTypes:true})) {
    const absolute=path.join(directory,entry.name);
    if(entry.isDirectory()) files.push(...await filesUnder(absolute));
    else if(entry.isFile()) files.push(absolute);
  }
  return files;
}

const files=(await filesUnder(dist)).filter(file=>path.basename(file)!=='sw.js').sort();
const fingerprints=await Promise.all(files.map(async file=>{
  const relative=path.relative(dist,file).replaceAll('\\','/');
  return `${relative}:${createHash('sha256').update(await readFile(file)).digest('hex')}`;
}));
const version=createHash('sha256').update(fingerprints.join('\n')).digest('hex').slice(0,16);
const precache=files.map(file=>`./${path.relative(dist,file).replaceAll('\\','/')}`);
const worker=`const CACHE_NAME=${JSON.stringify(`scut-811-${version}`)};
const PRECACHE=${JSON.stringify(precache,null,2)};
const INDEX_URL=new URL('./index.html',self.registration.scope).href;
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(PRECACHE))));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('scut-811-')&&key!==CACHE_NAME)await caches.delete(key);await self.clients.claim();})()));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
  if(request.mode==='navigate'){
    event.respondWith((async()=>{try{const response=await fetch(request);if(response.ok)return response;}catch{}return (await caches.match(INDEX_URL))||Response.error();})());
    return;
  }
  event.respondWith((async()=>{const cached=await caches.match(request,{ignoreSearch:true});if(cached)return cached;const response=await fetch(request);if(response.ok){const cache=await caches.open(CACHE_NAME);await cache.put(request,response.clone());}return response;})());
});
`;
await writeFile(path.join(dist,'sw.js'),worker,'utf8');
console.log(`Offline bundle generated: ${precache.length} files, cache ${version}.`);
