import katex from 'katex';
import type { ReactNode } from 'react';

const token=/\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\]|(?<!\$)\$([^$\n]+?)\$(?!\$)|\\\((.+?)\\\)/g;
export function MathText({text}:{text:string}) {
  const parts:ReactNode[]=[]; let end=0;
  for(const match of text.matchAll(token)) {
    const index=match.index??0; if(index>end) parts.push(text.slice(end,index));
    const expression=match[1]??match[2]??match[3]??match[4]; const display=Boolean(match[1]||match[2]);
    try { parts.push(<span key={index} className={display?'math-display':'math-inline'} dangerouslySetInnerHTML={{__html:katex.renderToString(expression,{displayMode:display,throwOnError:true,trust:false,strict:'error'})}}/>); }
    catch { parts.push(<span key={index} className="math-error" role="status">公式暂时无法显示</span>); }
    end=index+match[0].length;
  }
  parts.push(text.slice(end)); return <>{parts}</>;
}
