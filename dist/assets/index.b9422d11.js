(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function I(){}function oe(e){return e()}function z(){return Object.create(null)}function P(e){e.forEach(oe)}function re(e){return typeof e=="function"}function ue(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function fe(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function B(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode.removeChild(e)}function F(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function U(e){return document.createTextNode(e)}function $(){return U(" ")}function W(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ae(e){return Array.from(e.childNodes)}function ie(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let X;function C(e){X=e}const L=[],H=[],M=[],J=[],de=Promise.resolve();let R=!1;function me(){R||(R=!0,de.then(se))}function q(e){M.push(e)}const G=new Set;let D=0;function se(){const e=X;do{for(;D<L.length;){const t=L[D];D++,C(t),he(t.$$)}for(C(null),L.length=0,D=0;H.length;)H.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];G.has(n)||(G.add(n),n())}M.length=0}while(L.length);for(;J.length;)J.pop()();R=!1,G.clear(),C(e)}function he(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const _e=new Set;function ge(e,t){e&&e.i&&(_e.delete(e),e.i(t))}function pe(e,t,n,o){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),o||q(()=>{const u=e.$$.on_mount.map(oe).filter(re);e.$$.on_destroy?e.$$.on_destroy.push(...u):P(u),e.$$.on_mount=[]}),l.forEach(q)}function be(e,t){const n=e.$$;n.fragment!==null&&(P(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){e.$$.dirty[0]===-1&&(L.push(e),me(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,o,i,l,u,a=[-1]){const d=X;C(e);const s=e.$$={fragment:null,ctx:[],props:l,update:I,not_equal:i,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:z(),dirty:a,skip_bound:!1,root:t.target||d.$$.root};u&&u(s.root);let f=!1;if(s.ctx=n?n(e,t.props||{},(_,w,...k)=>{const N=k.length?k[0]:w;return s.ctx&&i(s.ctx[_],s.ctx[_]=N)&&(!s.skip_bound&&s.bound[_]&&s.bound[_](N),f&&ye(e,_)),w}):[],s.update(),f=!0,P(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const _=ae(t.target);s.fragment&&s.fragment.l(_),_.forEach(T)}else s.fragment&&s.fragment.c();t.intro&&ge(e.$$.fragment),pe(e,t.target,t.anchor,t.customElement),se()}C(d)}class we{$destroy(){be(this,1),this.$destroy=I}$on(t,n){if(!re(n))return I;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(t){this.$$set&&!fe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q=[2,3,4,5,6,7,8],ke={0:{min:0,max:0},2:{min:3,max:17},3:{min:6,max:24},4:{min:10,max:30},5:{min:15,max:35},6:{min:21,max:39},7:{min:28,max:42},8:{min:36,max:44}},V={2:`3	12
  4	13
  5	14 23
  6	15 24
  7	16 25 34
  8	17 26 35
  9	18 27 36 45
  10	19 28 37 46
  11	29 38 47 56
  12	39 48 57
  13	49 58 67
  14	59 68
  15	69 78
  16	79
  17	89`,3:`6	123
  7	124
  8	125 134
  9	126 135 234
  10	127 136 145 235
  11	128 137 146 236 245
  12	129 138 147 156 237 246 345
  13	139 148 157 238 247 256 346
  14	149 158 167 239 248 257 347 356
  15	159 168 249 258 267 348 357 456
  16	169 178 259 268 349 358 367 457
  17	179 269 278 359 368 458 467
  18	189 279 369 378 459 468 567
  19	289 379 469 478 568
  20	389 479 569 578
  21	489 579 678
  22	589 679
  23	689
  24	789`,4:`10	1234
  11	1235
  12	1236 1245
  13	1237 1246 1345
  14	1238 1247 1256 1346 2345
  15	1239 1248 1257 1347 1356 2346
  16	1249 1258 1267 1348 1357 1456 2347 2356
  17	1259 1268 1349 1358 1367 1457 2348 2357 2456
  18	1269 1278 1359 1368 1458 1467 2349 2358 2367 2457 3456
  19	1279 1369 1378 1459 1468 1567 2359 2368 2458 2467 3457
  20	1289 1379 1469 1478 1568 2369 2378 2459 2468 2567 3458 3467
  21	1389 1479 1569 1578 2379 2469 2478 2568 3459 3468 3567
  22	1489 1579 1678 2389 2479 2569 2578 3469 3478 3568 4567
  23	1589 1679 2489 2579 2678 3479 3569 3578 4568
  24	1689 2589 2679 3489 3579 3678 4569 4578
  25	1789 2689 3589 3679 4579 4678
  26	2789 3689 4589 4679 5678
  27	3789 4689 5679
  28	4789 5689
  29	5789
  30	6789`,5:`15	12345
  16	12346
  17	12347 12356
  18	12348 12357 12456
  19	12349 12358 12367 12457 13456
  20	12359 12368 12458 12467 13457 23456
  21	12369 12378 12459 12468 12567 13458 13467 23457
  22	12379 12469 12478 12568 13459 13468 13567 23458 23467
  23	12389 12479 12569 12578 13469 13478 13568 14567 23459 23468 23567
  24	12489 12579 12678 13479 13569 13578 14568 23469 23478 23568 24567
  25	12589 12679 13489 13579 13678 14569 14578 23479 23569 23578 24568 34567
  26	12689 13589 13679 14579 14678 23489 23579 23678 24569 24578 34568
  27	12789 13689 14589 14679 15678 23589 23679 24579 24678 34569 34578
  28	13789 14689 15679 23689 24589 24679 25678 34579 34678
  29	14789 15689 23789 24689 25679 34589 34679 35678
  30	15789 24789 25689 34689 35679 45678
  31	16789 25789 34789 35689 45679
  32	26789 35789 45689
  33	36789 45789
  34	46789
  35	56789`,6:`21	123456
  22	123457
  23	123458 123467
  24	123459 123468 123567
  25	123469 123478 123568 124567
  26	123479 123569 123578 124568 134567
  27	123489 123579 123678 124569 124578 134568 234567
  28	123589 123679 124579 124678 134569 134578 234568
  29	123689 124589 124679 125678 134579 134678 234569 234578
  30	123789 124689 125679 134589 134679 135678 234579 234678
  31	124789 125689 134689 135679 145678 234589 234679 235678
  32	125789 134789 135689 145679 234689 235679 245678
  33	126789 135789 145689 234789 235689 245679 345678
  34	136789 145789 235789 245689 345679
  35	146789 236789 245789 345689
  36	156789 246789 345789
  37	256789 346789
  38	356789
  39	456789`,7:`28	1234567
  29	1234568
  30	1234569 1234578
  31	1234579 1234678
  32	1234589 1234679 1235678
  33	1234689 1235679 1245678
  34	1234789 1235689 1245679 1345678
  35	1235789 1245689 1345679 2345678
  36	1236789 1245789 1345689 2345679
  37	1246789 1345789 2345689
  38	1256789 1346789 2345789
  39	1356789 2346789
  40	1456789 2356789
  41	2456789
  42	3456789`,8:`36	12345678
  37	12345679
  38	12345689
  39	12345789
  40	12346789
  41	12356789
  42	12456789
  43	13456789
  44	23456789`},K={0:{0:[]}};for(let e of Object.keys(V)){const t=V[e].trim().split(`
`).map(n=>n.trim().split("	"));K[e]={};for(let n=0;n<t.length;n++){const[o,i]=t[n];K[e][o]=i.split(" ").map(l=>l.split("").join(", "))}}var ce={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o=[],i=0;i<arguments.length;i++){var l=arguments[i];if(!!l){var u=typeof l;if(u==="string"||u==="number")o.push(l);else if(Array.isArray(l)){if(l.length){var a=n.apply(null,l);a&&o.push(a)}}else if(u==="object"){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){o.push(l.toString());continue}for(var d in l)t.call(l,d)&&l[d]&&o.push(d)}}}return o.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(ce);const A=ce.exports;function Y(e,t,n){const o=e.slice();return o[12]=t[n],o}function Z(e,t,n){const o=e.slice();return o[15]=t[n],o}function ee(e,t,n){const o=e.slice();return o[18]=t[n],o}function te(e){let t,n=e[18]+"",o,i,l,u,a;function d(){return e[9](e[18])}return{c(){t=y("button"),o=U(n),i=$(),v(t,"class",l=A("bg-gray-200 p-3 font-bold rounded shadow-md min-w-4",e[0]===e[18]&&"bg-gray-300 border-solid border-blue-300 border-2"))},m(s,f){B(s,t,f),m(t,o),m(t,i),u||(a=W(t,"click",d),u=!0)},p(s,f){e=s,f&1&&l!==(l=A("bg-gray-200 p-3 font-bold rounded shadow-md min-w-4",e[0]===e[18]&&"bg-gray-300 border-solid border-blue-300 border-2"))&&v(t,"class",l)},d(s){s&&T(t),u=!1,a()}}}function ne(e){let t,n=e[15]+"",o,i,l,u,a;function d(){return e[10](e[15])}return{c(){t=y("button"),o=U(n),i=$(),v(t,"class",l=A("bg-gray-200 p-3 font-bold rounded shadow-md min-w-4",e[1]===e[15]&&"bg-gray-300 border-solid border-blue-300 border-2"))},m(s,f){B(s,t,f),m(t,o),m(t,i),u||(a=W(t,"click",d),u=!0)},p(s,f){e=s,f&16&&n!==(n=e[15]+"")&&ie(o,n),f&18&&l!==(l=A("bg-gray-200 p-3 font-bold rounded shadow-md min-w-4",e[1]===e[15]&&"bg-gray-300 border-solid border-blue-300 border-2"))&&v(t,"class",l)},d(s){s&&T(t),u=!1,a()}}}function le(e){let t,n=e[12]+"",o,i,l,u,a;function d(){return e[11](e[12])}return{c(){t=y("button"),o=U(n),i=$(),v(t,"class",l=A("bg-gray-200 p-3 font-bold rounded shadow-md min-w-4",e[2].includes(e[12])&&"line-through"))},m(s,f){B(s,t,f),m(t,o),m(t,i),u||(a=W(t,"click",d),u=!0)},p(s,f){e=s,f&8&&n!==(n=e[12]+"")&&ie(o,n),f&12&&l!==(l=A("bg-gray-200 p-3 font-bold rounded shadow-md min-w-4",e[2].includes(e[12])&&"line-through"))&&v(t,"class",l)},d(s){s&&T(t),u=!1,a()}}}function xe(e){let t,n,o,i,l,u,a,d,s,f,_,w,k,N,h,x=Q,g=[];for(let c=0;c<x.length;c+=1)g[c]=te(ee(e,x,c));let E=e[4],p=[];for(let c=0;c<E.length;c+=1)p[c]=ne(Z(e,E,c));let j=e[3],b=[];for(let c=0;c<j.length;c+=1)b[c]=le(Y(e,j,c));return{c(){t=y("main"),n=y("div"),o=y("div"),o.textContent="Number of Digits",i=$(),l=y("div");for(let c=0;c<g.length;c+=1)g[c].c();u=$(),a=y("div"),d=y("div"),d.textContent="Sum",s=$(),f=y("div");for(let c=0;c<p.length;c+=1)p[c].c();_=$(),w=y("div"),k=y("div"),k.textContent="Combinations",N=$(),h=y("div");for(let c=0;c<b.length;c+=1)b[c].c();v(l,"class","flex gap-2 items-center justify-center"),v(f,"class","flex gap-2 items-center justify-center flex-wrap"),v(h,"class","flex gap-2 items-center justify-center flex-wrap"),v(w,"class","flex flex-col mt-2"),v(a,"class","flex flex-col mt-2"),v(n,"class","flex flex-col"),v(t,"class","text-center p-4 mx-0 flex flex-col gap-2")},m(c,S){B(c,t,S),m(t,n),m(n,o),m(n,i),m(n,l);for(let r=0;r<g.length;r+=1)g[r].m(l,null);m(n,u),m(n,a),m(a,d),m(a,s),m(a,f);for(let r=0;r<p.length;r+=1)p[r].m(f,null);m(a,_),m(a,w),m(w,k),m(w,N),m(w,h);for(let r=0;r<b.length;r+=1)b[r].m(h,null)},p(c,[S]){if(S&65){x=Q;let r;for(r=0;r<x.length;r+=1){const O=ee(c,x,r);g[r]?g[r].p(O,S):(g[r]=te(O),g[r].c(),g[r].m(l,null))}for(;r<g.length;r+=1)g[r].d(1);g.length=x.length}if(S&146){E=c[4];let r;for(r=0;r<E.length;r+=1){const O=Z(c,E,r);p[r]?p[r].p(O,S):(p[r]=ne(O),p[r].c(),p[r].m(f,null))}for(;r<p.length;r+=1)p[r].d(1);p.length=E.length}if(S&44){j=c[3];let r;for(r=0;r<j.length;r+=1){const O=Y(c,j,r);b[r]?b[r].p(O,S):(b[r]=le(O),b[r].c(),b[r].m(h,null))}for(;r<b.length;r+=1)b[r].d(1);b.length=j.length}},i:I,o:I,d(c){c&&T(t),F(g,c),F(p,c),F(b,c)}}}function Se(e,t,n){let o,i,l,u=[];const a=h=>{u.includes(h)?n(2,u=u.filter(x=>x!==h)):n(2,u=[...u,h])};let d=0;const s=h=>{n(0,d=h),n(2,u=[])};let f=0;const _=h=>{n(1,f=h),n(2,u=[])},w=h=>s(h),k=h=>_(h),N=h=>a(h);return e.$$.update=()=>{e.$$.dirty&1&&n(8,o=ke[d]),e.$$.dirty&256&&n(4,i=Array.apply(null,{length:o.max+1}).map(Number.call,Number).slice(o.min)),e.$$.dirty&3&&n(3,l=d===0||f===0?[]:K[d][f])},[d,f,u,l,i,a,s,_,o,w,k,N]}class Oe extends we{constructor(t){super(),ve(this,t,Se,xe,ue,{})}}new Oe({target:document.body});
