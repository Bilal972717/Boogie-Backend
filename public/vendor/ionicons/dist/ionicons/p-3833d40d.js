/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
const s=/(-shadowcsshost)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))?([^,{]*)/gim,t=/(-shadowcsscontext)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))?([^,{]*)/gim,o=/(-shadowcssslotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))?([^,{]*)/gim,n=/-shadowcsshost-no-combinator([^\s]*)/,e=[/::shadow/g,/::content/g],c=/-shadowcsshost/gim,r=/:host/gim,h=/::slotted/gim,a=/:host-context/gim,d=/\/\*\s*[\s\S]*?\*\//g,l=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,i=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,g=/([{}])/g,u=(s,t)=>{const o=m(s);let n=0;return o.escapedString.replace(i,(...s)=>{const e=s[2];let c="",r=s[4],h="";r&&r.startsWith("{%BLOCK%")&&(c=o.blocks[n++],r=r.substring(8),h="{");const a=t({selector:e,content:c});return`${s[1]}${a.selector}${s[3]}${h}${a.content}${r}`})},m=s=>{const t=s.split(g),o=[],n=[];let e=0,c=[];for(let r=0;r<t.length;r++){const s=t[r];"}"===s&&e--,e>0?c.push(s):(c.length>0&&(n.push(c.join("")),o.push("%BLOCK%"),c=[]),o.push(s)),"{"===s&&e++}return c.length>0&&(n.push(c.join("")),o.push("%BLOCK%")),{escapedString:o.join(""),blocks:n}},w=(s,t,o)=>s.replace(t,(...s)=>{if(s[2]){const t=s[2].split(","),n=[];for(let e=0;e<t.length;e++){const c=t[e].trim();if(!c)break;n.push(o("-shadowcsshost-no-combinator",c,s[3]))}return n.join(",")}return"-shadowcsshost-no-combinator"+s[3]}),p=(s,t,o)=>s+t.replace("-shadowcsshost","")+o,$=(s,t,o)=>t.indexOf("-shadowcsshost")>-1?p(s,t,o):s+t+o+", "+t+" "+s+o,_=(s,t,o,e)=>u(s,s=>{let r=s.selector,h=s.content;return"@"!==s.selector[0]?r=((s,t,o,e)=>s.split(",").map(s=>e&&s.indexOf("."+e)>-1?s.trim():((s,t)=>!(s=>(s=s.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),RegExp("^("+s+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t).test(s))(s,t)?((s,t,o)=>{const e="."+(t=t.replace(/\[is=([^\]]*)\]/g,(s,...t)=>t[0])),r=s=>{let r=s.trim();if(!r)return"";if(s.indexOf("-shadowcsshost-no-combinator")>-1)r=((s,t,o)=>{if(c.lastIndex=0,c.test(s)){const t="."+o;return s.replace(n,(s,o)=>o.replace(/([^:]*)(:*)(.*)/,(s,o,n,e)=>o+t+n+e)).replace(c,t+" ")}return t+" "+s})(s,t,o);else{const t=s.replace(c,"");if(t.length>0){const s=t.match(/([^:]*)(:*)(.*)/);s&&(r=s[1]+e+s[2]+s[3])}}return r},h=(s=>{const t=[];let o,n=0;return o=(s=s.replace(/(\[[^\]]*\])/g,(s,o)=>{const e=`__ph-${n}__`;return t.push(o),n++,e})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(s,o,e)=>{const c=`__ph-${n}__`;return t.push(e),n++,o+c}),{content:o,placeholders:t}})(s);let a,d="",l=0;const i=/( |>|\+|~(?!=))\s*/g;let g=!((s=h.content).indexOf("-shadowcsshost-no-combinator")>-1);for(;null!==(a=i.exec(s));){const t=a[1],o=s.slice(l,a.index).trim();g=g||o.indexOf("-shadowcsshost-no-combinator")>-1,d+=`${g?r(o):o} ${t} `,l=i.lastIndex}const u=s.substring(l);return g=g||u.indexOf("-shadowcsshost-no-combinator")>-1,d+=g?r(u):u,((s,t)=>t.replace(/__ph-(\d+)__/g,(t,o)=>s[+o]))(h.placeholders,d)})(s,t,o).trim():s.trim()).join(", "))(s.selector,t,o,e):(s.selector.startsWith("@media")||s.selector.startsWith("@supports")||s.selector.startsWith("@page")||s.selector.startsWith("@document"))&&(h=_(s.content,t,o,e)),{selector:r.replace(/\s{2,}/g," ").trim(),content:h}}),f=(n,c,i)=>{const g=c+"-h",m=c+"-s",f=(s=>s.match(l)||[])(n);n=(s=>s.replace(d,""))(n);const b=[];if(i){const s=s=>{const t=`/*!@___${b.length}___*/`;return b.push({placeholder:t,comment:`/*!@${s.selector}*/`}),s.selector=t+s.selector,s};n=u(n,t=>"@"!==t.selector[0]?s(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=u(t.content,s),t):t)}const x=((n,c,d,l)=>{const i=((s,t)=>{const n="."+t+" > ",e=[];return s=s.replace(o,(...s)=>{if(s[2]){const t=s[2].trim(),o=n+t+s[3];let c="";for(let n=s[4]-1;n>=0;n--){const t=s[5][n];if("}"===t||","===t)break;c=t+c}const r=c+o,h=`${c.trimRight()}${o.trim()}`;return r.trim()!==h.trim()&&e.push({orgSelector:r,updatedSelector:`${h}, ${r}`}),o}return"-shadowcsshost-no-combinator"+s[3]}),{selectors:e,cssText:s}})(n=(s=>w(s,t,$))(n=(t=>w(t,s,p))(n=(s=>s.replace(a,"-shadowcsscontext").replace(r,"-shadowcsshost").replace(h,"-shadowcssslotted"))(n))),l);return n=(s=>e.reduce((s,t)=>s.replace(t," "),s))(n=i.cssText),c&&(n=_(n,c,d,l)),{cssText:(n=(n=n.replace(/-shadowcsshost-no-combinator/g,"."+d)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:i.selectors}})(n,c,g,m);return n=[x.cssText,...f].join("\n"),i&&b.forEach(({placeholder:s,comment:t})=>{n=n.replace(s,t)}),x.slottedSelectors.forEach(s=>{n=n.replace(s.orgSelector,s.updatedSelector)}),n};export{f as scopeCss}