var Et=Object.defineProperty,Mt=Object.defineProperties;var Pt=Object.getOwnPropertyDescriptors;var Ae=Object.getOwnPropertySymbols;var It=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable;var Ve=t=>{throw TypeError(t)};var we=(t,e,s)=>e in t?Et(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,ne=(t,e)=>{for(var s in e||(e={}))It.call(e,s)&&we(t,s,e[s]);if(Ae)for(var s of Ae(e))Rt.call(e,s)&&we(t,s,e[s]);return t},qe=(t,e)=>Mt(t,Pt(e));var M=(t,e,s)=>we(t,typeof e!="symbol"?e+"":e,s),He=(t,e,s)=>e.has(t)||Ve("Cannot "+s);var C=(t,e,s)=>(He(t,e,"read from private field"),s?s.call(t):e.get(t)),Ce=(t,e,s)=>e.has(t)?Ve("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);var o=(t,e,s)=>(He(t,e,"access private method"),s);var x=(t,e,s)=>new Promise((i,l)=>{var u=r=>{try{d(s.next(r))}catch(m){l(m)}},h=r=>{try{d(s.throw(r))}catch(m){l(m)}},d=r=>r.done?i(r.value):Promise.resolve(r.value).then(u,h);d((s=s.apply(t,e)).next())});import{_ as Nt}from"./ReIconifyIconOnline-eI4aZG-K.js";import{d as Ie,l as q,H as Xe,n as se,o as k,c as z,b as f,B as Ke,ar as Dt,P as et,e as T,a as Lt,m as At,a3 as Vt,G as qt,as as Ht,u as n,p as oe,h as v,g as L,a1 as Fe,W as $,i as Ft,r as D,j as Bt,s as Se,U as Be,w as re,v as ze,f as Z,at as zt,A as G,au as H,F as Ue,q as Qe,a2 as Ut,av as Qt,aj as $t,_ as Zt,x as jt}from"./index-Bgkx_9zZ.js";import{M as F}from"./motion--VgX7ZZb.js";import{m as $e}from"./message-BRJNoflG.js";import{l as Ot}from"./verifyCode-bmvvb9lj.js";import{h as Gt,c as Wt,j as Yt,k as Jt,f as Ze,g as Xt,u as je,d as Kt}from"./dark-Bz_JZZVg.js";import{_ as es}from"./LoginPhone.vuevuetypescriptsetuptruelang-Cq3oOcTX.js";import{_ as ts}from"./LoginRegist.vuevuetypescriptsetuptruelang-CuuDJJgH.js";import{_ as ss}from"./LoginUpdate.vuevuetypescriptsetuptruelang-CvtXS3tY.js";import{_ as as}from"./LoginQrCode.vuevuetypescriptsetuptruelang-YzKstdjM.js";const is=Ie({name:"ReImageVerify",__name:"index",props:{code:{default:""}},emits:["update:code"],setup(t,{expose:e,emit:s}){const i=t,l=s,u=q(),h=q("");function d(b){h.value=b}function r(b,p){return Math.floor(Math.random()*(p-b)+b)}function m(b,p){const c=r(b,p),S=r(b,p),P=r(b,p);return`rgb(${c},${S},${P})`}function E(b,p,c){let S="";const P="0123456789",g=b.getContext("2d");if(!g)return S;g.fillStyle=m(180,230),g.fillRect(0,0,p,c);for(let I=0;I<4;I+=1){const ae=P[r(0,P.length)];S+=ae;const N=r(18,41),ie=r(-30,30);g.font=`${N}px Simhei`,g.textBaseline="top",g.fillStyle=m(80,150),g.save(),g.translate(30*I+15,15),g.rotate(ie*Math.PI/180),g.fillText(ae,-10,-15),g.restore()}for(let I=0;I<5;I+=1)g.beginPath(),g.moveTo(r(0,p),r(0,c)),g.lineTo(r(0,p),r(0,c)),g.strokeStyle=m(180,230),g.closePath(),g.stroke();for(let I=0;I<41;I+=1)g.beginPath(),g.arc(r(0,p),r(0,c),1,0,2*Math.PI),g.closePath(),g.fillStyle=m(150,200),g.fill();return S}function R(){u.value&&(h.value=E(u.value,120,40))}return Xe(()=>{R()}),se(()=>i.code,b=>{d(b)}),se(h,b=>{l("update:code",b)}),e({getImgCode:R}),(b,p)=>(k(),z("canvas",{ref_key:"domRef",ref:u,width:"120",height:"40",class:"cursor-pointer",onClick:R},null,512))}}),ls=is,tt=t=>Array.isArray(t),st=t=>tt(t)?t:[t];let ns=function(t){let e=function(c){return st(c).forEach(S=>{var P;return p.set(Symbol((P=S.char)==null?void 0:P.innerText),l(ne({},S)))}),this},s=()=>r().filter(c=>c.typeable),i=function(c,S){let P=[...p.keys()];p.set(P[c],l(S))},l=c=>(c.shouldPauseCursor=function(){return!!(this.typeable||this.cursorable||this.deletable)},c),u=function(){p.forEach(c=>delete c.done)},h=function(){p=new Map,e(t)},d=()=>p,r=()=>Array.from(p.values()),m=c=>p.delete(c),E=()=>{const c=[];for(let[,S]of d())S.done||c.push(S);return c},R=(c=!1)=>c?r():r().filter(S=>!S.done),b=(c,S=!1)=>S?p.delete(c):p.get(c).done=!0,p=new Map;return e(t),{add:e,set:i,wipe:h,done:b,reset:u,destroy:m,getItems:R,getQueue:d,getTypeable:s,getPendingQueueItems:E}};const at="data-typeit-id",U="ti-cursor",os="END",rs={started:!1,completed:!1,frozen:!1,destroyed:!1},O={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(t=>({opacity:t})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},us=`[${at}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`,he=t=>document.createElement(t),Re=t=>document.createTextNode(t),it=(t,e="")=>{let s=he("style");s.id=e,s.appendChild(Re(t)),document.head.appendChild(s)},Oe=t=>(tt(t)||(t=[t/2,t/2]),t),Ge=(t,e)=>Math.abs(Math.random()*(t+e-(t-e))+(t-e));let We=t=>t/2;function hs(t){let{speed:e,deleteSpeed:s,lifeLike:i}=t;return s=s!==null?s:e/3,i?[Ge(e,We(e)),Ge(s,We(s))]:[e,s]}const lt=t=>Array.from(t);let Ne=t=>([...t.childNodes].forEach(e=>{if(e.nodeValue){[...e.nodeValue].forEach(s=>{e.parentNode.insertBefore(Re(s),e)}),e.remove();return}Ne(e)}),t);const nt=t=>{let e=document.implementation.createHTMLDocument();return e.body.innerHTML=t,Ne(e.body)};function ot(t,e=!1,s=!1){let i=t.querySelector(`.${U}`),l=document.createTreeWalker(t,NodeFilter.SHOW_ALL,{acceptNode:d=>{var r,m;if(i&&s){if((r=d.classList)!=null&&r.contains(U))return NodeFilter.FILTER_ACCEPT;if(i.contains(d))return NodeFilter.FILTER_REJECT}return(m=d.classList)!=null&&m.contains(U)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),u,h=[];for(;u=l.nextNode();)u.originalParent||(u.originalParent=u.parentNode),h.push(u);return e?h.reverse():h}function ds(t){return ot(nt(t))}function cs(t,e=!0){return e?ds(t):lt(t).map(Re)}const fs=({index:t,newIndex:e,queueItems:s,cleanUp:i})=>{for(let l=t+1;l<e+1;l++)i(s[l][0])},rt=t=>Number.isInteger(t),Ye=({queueItems:t,selector:e,cursorPosition:s,to:i})=>{if(rt(e))return e*-1;let l=new RegExp(os,"i").test(i),u=e?[...t].reverse().findIndex(({char:d})=>{let r=d.parentElement,m=r.matches(e);return l&&m?!0:m&&r.firstChild.isSameNode(d)}):-1;u<0&&(u=l?0:t.length-1);let h=l?0:1;return u-s+h},ps=t=>(t.forEach(clearTimeout),[]),ue=(t,e)=>new Array(e).fill(t);let pe=t=>new Promise(e=>{requestAnimationFrame(()=>x(void 0,null,function*(){e(yield t())}))}),ut=t=>t==null?void 0:t.getAnimations().find(e=>e.id===t.dataset.tiAnimationId),ht=({cursor:t,frames:e,options:s})=>{let i=t.animate(e,s);return i.pause(),i.id=t.dataset.tiAnimationId,pe(()=>{pe(()=>{i.play()})}),i},ms=({cursor:t,options:e,cursorOptions:s})=>{if(!t||!s)return;let i=ut(t),l;i&&(e.delay=i.effect.getComputedTiming().delay,l=i.currentTime,i.cancel());let u=ht({cursor:t,frames:s.animation.frames,options:e});return l&&(u.currentTime=l),u},Je=t=>{var e;return(e=t.func)==null?void 0:e.call(null)},ys=u=>x(void 0,[u],function*({index:t,queueItems:e,wait:s,cursor:i,cursorOptions:l}){let h=e[t][1],d=[],r=t,m=h,E=()=>m&&!m.delay,R=h.shouldPauseCursor()&&l.autoPause;for(;E();)d.push(m),E()&&r++,m=e[r]?e[r][1]:null;if(d.length)return yield pe(()=>x(void 0,null,function*(){for(let c of d)yield Je(c)})),r-1;let b=ut(i),p;return b&&(p=qe(ne({},b.effect.getComputedTiming()),{delay:R?l.autoPauseDelay:0})),yield s(()=>x(void 0,null,function*(){b&&R&&b.cancel(),yield pe(()=>{Je(h)})}),h.delay),yield ms({cursor:i,options:p,cursorOptions:l}),t});const gs=(t,e)=>{new IntersectionObserver((i,l)=>{i.forEach(u=>{u.isIntersecting&&(e(),l.unobserve(t))})},{threshold:1}).observe(t)},vs=()=>Math.random().toString().substring(2,9),me=t=>"value"in t;let bs=t=>me(t)?lt(t.value):ot(t,!0).filter(e=>!(e.childNodes.length>0)),j=t=>typeof t=="function"?t():t,De=(t,e=document,s=!1)=>e[`querySelector${s?"All":""}`](t),_s=t=>/body/i.test(t==null?void 0:t.tagName),ws=(t,e)=>{if(me(t)){t.value=`${t.value}${e.textContent}`;return}e.innerHTML="";let s=_s(e.originalParent)?t:e.originalParent||t,i=De("."+U,s)||null;i&&i.parentElement!==s&&(s=i.parentElement),s.insertBefore(e,i)};const Cs=t=>/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML),W=(t,e)=>Object.assign({},t,e);let Ss=t=>{var e,s,i;if(typeof t=="object"){let l={},{frames:u,options:h}=O.cursor.animation;return l.animation=t.animation||{},l.animation.frames=((e=t.animation)==null?void 0:e.frames)||u,l.animation.options=W(h,((s=t.animation)==null?void 0:s.options)||{}),l.autoPause=(i=t.autoPause)!=null?i:O.cursor.autoPause,l.autoPauseDelay=t.autoPauseDelay||O.cursor.autoPauseDelay,l}return t===!0?O.cursor:t};const Ts=(t,e)=>{if(!t)return;let s=t.parentNode;(s.childNodes.length>1||s.isSameNode(e)?t:s).remove()},xs=(t,e,s)=>{let i=e[s-1],l=De(`.${U}`,t);t=(i==null?void 0:i.parentNode)||t,t.insertBefore(l,i||null)};function ks(t){return typeof t=="string"?De(t):t}let Es={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},Ms=(t,e)=>{let i=`${`[${at}='${t}']`} .${U}`,l=getComputedStyle(e),u=Object.entries(Es).reduce((h,[d,r])=>`${h} ${d}: var(--ti-cursor-${d}, ${r||l[d]});`,"");it(`${i} { display: inline-block; width: 0; ${u} }`,t)};function Ps(t){return t.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/)}let Is=(t,e,s)=>Math.min(Math.max(e+t,0),s.length),Rs=(t,e,s)=>new Promise(i=>{let l=()=>x(void 0,null,function*(){yield t(),i()});s.push(setTimeout(l,e||0))});var a,dt,Y,Te,ct,xe,ke,Ee,de,A,ft,J,X,pt,ye,mt,yt,Me,ce,K,fe,B,ee,te,Pe,V;class Ns{constructor(e,s={}){Ce(this,a);M(this,"element");M(this,"timeouts");M(this,"cursorPosition");M(this,"predictedCursorPosition");M(this,"statuses",{started:!1,completed:!1,frozen:!1,destroyed:!1,firing:!1});M(this,"opts");M(this,"id");M(this,"queue");M(this,"cursor");M(this,"flushCallback",null);M(this,"unfreeze",()=>{});M(this,"is",function(e){return this.statuses[e]});Ce(this,ye,e=>{var s;this.opts.cursor=Ss((s=e.cursor)!=null?s:O.cursor),this.opts.strings=o(this,a,mt).call(this,st(this.opts.strings)),this.opts=W(this.opts,{html:!C(this,a,te)&&this.opts.html,nextStringDelay:Oe(this.opts.nextStringDelay),loopDelay:Oe(this.opts.loopDelay)})});this.opts=W(O,s),this.element=ks(e),this.timeouts=[],this.cursorPosition=0,this.unfreeze=()=>{},this.predictedCursorPosition=null,this.statuses=W({},rs),this.id=vs(),this.queue=ns([{delay:this.opts.startDelay}]),C(this,ye).call(this,s),this.cursor=o(this,a,yt).call(this),this.element.dataset.typeitId=this.id,it(us),this.opts.strings.length&&o(this,a,pt).call(this)}go(){return this.statuses.started?this:(o(this,a,Ee).call(this),this.opts.waitUntilVisible?(gs(this.element,o(this,a,Y).bind(this)),this):(o(this,a,Y).call(this),this))}destroy(e=!0){this.timeouts=ps(this.timeouts),j(e)&&this.cursor&&o(this,a,fe).call(this,this.cursor),this.statuses.destroyed=!0}reset(e){!this.is("destroyed")&&this.destroy(),e?(this.queue.wipe(),e(this)):this.queue.reset(),this.cursorPosition=0;for(let s in this.statuses)this.statuses[s]=!1;return this.element[o(this,a,de).call(this)?"value":"innerHTML"]="",this}type(e,s={}){e=j(e);let{instant:i}=s,l=o(this,a,J).call(this,s),h=cs(e,this.opts.html).map(r=>({func:()=>o(this,a,ce).call(this,r),char:r,delay:i||Cs(r)?0:o(this,a,B).call(this),typeable:r.nodeType===Node.TEXT_NODE})),d=[l[0],{func:()=>x(this,null,function*(){return yield this.opts.beforeString(e,this)})},...h,{func:()=>x(this,null,function*(){return yield this.opts.afterString(e,this)})},l[1]];return o(this,a,A).call(this,d,s)}break(e={}){return o(this,a,A).call(this,{func:()=>o(this,a,ce).call(this,he("BR")),typeable:!0},e)}move(e,s={}){e=j(e);let i=o(this,a,J).call(this,s),{instant:l,to:u}=s,h=Ye({queueItems:this.queue.getTypeable(),selector:e===null?"":e,to:u,cursorPosition:C(this,a,ee)}),d=h<0?-1:1;return this.predictedCursorPosition=C(this,a,ee)+h,o(this,a,A).call(this,[i[0],...ue({func:()=>o(this,a,Te).call(this,d),delay:l?0:o(this,a,B).call(this),cursorable:!0},Math.abs(h)),i[1]],s)}exec(e,s={}){let i=o(this,a,J).call(this,s);return o(this,a,A).call(this,[i[0],{func:()=>e(this)},i[1]],s)}options(e,s={}){return e=j(e),o(this,a,X).call(this,e),o(this,a,A).call(this,{},s)}pause(e,s={}){return o(this,a,A).call(this,{delay:j(e)},s)}delete(e=null,s={}){e=j(e);let i=o(this,a,J).call(this,s),l=e,{instant:u,to:h}=s,d=this.queue.getTypeable(),r=l===null?d.length:rt(l)?l:Ye({queueItems:d,selector:l,cursorPosition:C(this,a,ee),to:h});return o(this,a,A).call(this,[i[0],...ue({func:o(this,a,K).bind(this),delay:u?0:o(this,a,B).call(this,1),deletable:!0},r),i[1]],s)}freeze(){this.statuses.frozen=!0}flush(e=null){return this.flushCallback=e||this.flushCallback,this.statuses.firing?this:(o(this,a,Ee).call(this),o(this,a,Y).call(this,!1).then(()=>{if(this.queue.getPendingQueueItems().length>0)return this.flush();this.flushCallback(),this.flushCallback=null}),this)}getQueue(){return this.queue}getOptions(){return this.opts}updateOptions(e){return o(this,a,X).call(this,e)}getElement(){return this.element}empty(e={}){return o(this,a,A).call(this,{func:o(this,a,dt).bind(this)},e)}}a=new WeakSet,dt=function(){return x(this,null,function*(){if(o(this,a,de).call(this)){this.element.value="";return}C(this,a,V).forEach(o(this,a,fe).bind(this))})},Y=function(e=!0){return x(this,null,function*(){this.statuses.started=!0,this.statuses.firing=!0;let s=i=>{this.queue.done(i,!e)};try{let i=[...this.queue.getQueue()];for(let u=0;u<i.length;u++){let[h,d]=i[u];if(!d.done){if(!d.deletable||d.deletable&&C(this,a,V).length){let r=yield o(this,a,xe).call(this,u,i);fs({index:u,newIndex:r,queueItems:i,cleanUp:s}),u=r}s(h)}}if(!e)return this.statuses.firing=!1,this;if(this.statuses.completed=!0,this.statuses.firing=!1,yield this.opts.afterComplete(this),!this.opts.loop)throw"";let l=this.opts.loopDelay;o(this,a,ke).call(this,()=>x(this,null,function*(){yield o(this,a,ct).call(this,l[0]),o(this,a,Y).call(this)}),l[1])}catch(i){}return this.statuses.firing=!1,this})},Te=function(e){return x(this,null,function*(){this.cursorPosition=Is(e,this.cursorPosition,C(this,a,V)),xs(this.element,C(this,a,V),this.cursorPosition)})},ct=function(e){return x(this,null,function*(){let s=C(this,a,ee);s&&(yield o(this,a,Te).call(this,{value:s}));let i=C(this,a,V).map(l=>[Symbol(),{func:o(this,a,K).bind(this),delay:o(this,a,B).call(this,1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let l=0;l<i.length;l++)yield o(this,a,xe).call(this,l,i);this.queue.reset(),this.queue.set(0,{delay:e})})},xe=function(e,s){return ys({index:e,queueItems:s,wait:o(this,a,ke).bind(this),cursor:this.cursor,cursorOptions:this.opts.cursor})},ke=function(e,s,i=!1){return x(this,null,function*(){this.statuses.frozen&&(yield new Promise(l=>{this.unfreeze=()=>{this.statuses.frozen=!1,l()}})),i||(yield this.opts.beforeStep(this)),yield Rs(e,s,this.timeouts),i||(yield this.opts.afterStep(this))})},Ee=function(){return x(this,null,function*(){if(!o(this,a,de).call(this)&&this.cursor&&this.element.appendChild(this.cursor),C(this,a,Pe)){Ms(this.id,this.element),this.cursor.dataset.tiAnimationId=this.id;let{animation:e}=this.opts.cursor,{frames:s,options:i}=e;ht({frames:s,cursor:this.cursor,options:ne({duration:this.opts.cursorSpeed},i)})}})},de=function(){return me(this.element)},A=function(e,s){return this.queue.add(e),o(this,a,ft).call(this,s),this},ft=function(e={}){let s=e.delay;s&&this.queue.add({delay:s})},J=function(e={}){return[{func:()=>o(this,a,X).call(this,e)},{func:()=>o(this,a,X).call(this,this.opts)}]},X=function(e){return x(this,null,function*(){this.opts=W(this.opts,e)})},pt=function(){let e=this.opts.strings.filter(s=>!!s);e.forEach((s,i)=>{if(this.type(s),i+1===e.length)return;let l=this.opts.breakLines?[{func:()=>o(this,a,ce).call(this,he("BR")),typeable:!0}]:ue({func:o(this,a,K).bind(this),delay:o(this,a,B).call(this,1)},this.queue.getTypeable().length);o(this,a,Me).call(this,l)})},ye=new WeakMap,mt=function(e){let s=this.element.innerHTML;return s?(this.element.innerHTML="",this.opts.startDelete?(this.element.innerHTML=s,Ne(this.element),o(this,a,Me).call(this,ue({func:o(this,a,K).bind(this),delay:o(this,a,B).call(this,1),deletable:!0},C(this,a,V).length)),e):Ps(s).concat(e)):e},yt=function(){if(C(this,a,te))return null;let e=he("span");return e.className=U,C(this,a,Pe)?(e.innerHTML=nt(this.opts.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)},Me=function(e){let s=this.opts.nextStringDelay;this.queue.add([{delay:s[0]},...e,{delay:s[1]}])},ce=function(e){ws(this.element,e)},K=function(){C(this,a,V).length&&(C(this,a,te)?this.element.value=this.element.value.slice(0,-1):o(this,a,fe).call(this,C(this,a,V)[this.cursorPosition]))},fe=function(e){Ts(e,this.element)},B=function(e=0){return hs(this.opts)[e]},ee=function(){var e;return(e=this.predictedCursorPosition)!=null?e:this.cursorPosition},te=function(){return me(this.element)},Pe=function(){return!!this.opts.cursor&&!C(this,a,te)},V=function(){return bs(this.element)};const Ds=Ie({name:"TypeIt",props:{options:{type:Object,default:()=>({})}},setup(t,{slots:e,expose:s}){function i(h){throw new TypeError(h)}function l(){return navigator.language}const u=q(null);return Xe(()=>{const h=u.value.querySelector(".type-it");if(!h){const r=l()==="zh-CN"?"请确保有且只有一个具有class属性为 'type-it' 的元素":"Please make sure that there is only one element with a Class attribute with 'type-it'";i(r)}const d=new Ns(h,t.options).go();s({typeIt:d})}),()=>{var h,d;return f("div",{ref:u},[(d=(h=e.default)==null?void 0:h.call(e))!=null?d:f("span",{class:"type-it"},null)])}}}),Ls=Ds,As=[{title:"手机登录"},{title:"二维码登录"},{title:"注册"}],Vs=[{title:"微信登录",icon:"wechat"},{title:"支付宝登录",icon:"alipay"},{title:"QQ登录",icon:"qq"},{title:"微博登录",icon:"weibo"}],qs=()=>{const{$storage:t,$config:e}=Ke();return{initStorage:()=>{var i;t.locale||(t.locale={locale:(i=e==null?void 0:e.locale)!=null?i:"zh"}),t.layout||(t.layout={layout:e==null?void 0:e.layout,theme:e==null?void 0:e.theme,darkMode:e==null?void 0:e.darkMode,sidebarStatus:e==null?void 0:e.sidebarStatus,epThemeColor:e==null?void 0:e.epThemeColor,overallStyle:e==null?void 0:e.overallStyle}),t.configure||(t.configure={grey:e==null?void 0:e.grey,weak:e==null?void 0:e.weak,hideTabs:e==null?void 0:e.hideTabs,hideFooter:e.hideFooter,fixedFooter:e.fixedFooter,showLogo:e==null?void 0:e.showLogo,showModel:e==null?void 0:e.showModel,multiTagsCache:e==null?void 0:e.multiTagsCache,stretch:e==null?void 0:e.stretch,hiddenSideBar:e.hiddenSideBar,version:e.version,keepAlive:e.keepAlive,cachingAsyncRoutes:e.cachingAsyncRoutes,tooltipEffect:e.tooltipEffect,maxTagsLevel:e.maxTagsLevel,title:e.title,fixedHeader:e.fixedHeader,showParent:e.showParent}),Dt().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=[et()])}}},Hs="/static/png/bg-oEDCYcDF.png",Fs={xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",class:"icon",viewBox:"0 0 1024 1024"};function Bs(t,e){return k(),z("svg",Fs,e[0]||(e[0]=[T("path",{fill:"#1296db",d:"M513.29 962.25c-49.69 0-97.91-9.74-143.32-28.95-43.85-18.54-83.22-45.09-117.02-78.89s-60.34-73.17-78.89-117.02c-19.21-45.41-28.95-93.63-28.95-143.32 0-67.38 18.94-137.04 56.29-207.05 29.21-54.74 69.74-109.89 120.47-163.89 85.64-91.16 170.24-147.38 173.8-149.73a31.98 31.98 0 0 1 35.25 0c3.56 2.35 88.16 58.58 173.79 149.74 50.73 54.01 91.26 109.15 120.47 163.89 37.35 70.01 56.29 139.67 56.29 207.05 0 49.69-9.74 97.91-28.95 143.32-18.54 43.85-45.09 83.22-78.89 117.02s-73.17 60.34-117.02 78.89c-45.41 19.2-93.63 28.94-143.32 28.94m0-823.01c-28.52 20.79-87.47 66.54-145.68 128.69-72.3 77.2-158.49 196.45-158.49 326.15 0 167.72 136.45 304.17 304.17 304.17S817.46 761.8 817.46 594.08c0-129.7-86.19-248.95-158.49-326.15-58.2-62.15-117.15-107.89-145.68-128.69"},null,-1),T("path",{fill:"#1296db",d:"M514.73 827.23c.01-.32.02-.63.04-.95.52-13.83 10.03-25.64 23.39-29.21 19.51-5.22 49.48-18.12 81.3-49.94 31.92-31.92 44.93-62.1 50.22-81.75 3.62-13.43 15.54-22.93 29.44-23.37l.95-.03c21.09-.67 36.92 19.19 31.45 39.57-.81 3.03-1.74 6.2-2.79 9.49-11.51 35.93-33.65 70.98-64.01 101.35-30.39 30.39-65.39 52.46-101.23 63.84-3.38 1.07-6.8 2.01-10.2 2.83-20.17 4.84-39.35-11.11-38.56-31.83"},null,-1)]))}const zs={render:Bs},Us={xmlns:"http://www.w3.org/2000/svg",width:"500",height:"380",viewBox:"0 0 897.318 556.975"};function Qs(t,e){return k(),z("svg",Us,e[0]||(e[0]=[Lt('<path fill="#f2f2f2" d="m217.339 502.047.998-22.434a72.46 72.46 0 0 1 33.795-8.555c-16.231 13.27-14.203 38.85-25.207 56.696a43.58 43.58 0 0 1-31.96 20.14l-13.583 8.317a73.03 73.03 0 0 1 15.393-59.18 70.5 70.5 0 0 1 12.965-12.045c3.253 8.578 7.599 17.06 7.599 17.06"></path><path fill="#cacaca" d="M796.921 36.552H164.598a1.016 1.016 0 0 1 0-2.03h632.324a1.016 1.016 0 0 1 0 2.03"></path><ellipse cx="186.953" cy="11.169" fill="#3f3d56" rx="10.925" ry="11.169"></ellipse><ellipse cx="224.695" cy="11.169" fill="#3f3d56" rx="10.925" ry="11.169"></ellipse><ellipse cx="262.437" cy="11.169" fill="#3f3d56" rx="10.925" ry="11.169"></ellipse><path fill="#3f3d56" d="M774.304 2.768h-26.81a2.03 2.03 0 0 0 0 4.06h26.81a2.03 2.03 0 0 0 0-4.06m0 7.62h-26.81a2.03 2.03 0 0 0 0 4.06h26.81a2.03 2.03 0 0 0 0-4.06m0 7.61h-26.81a2.03 2.03 0 0 0 0 4.06h26.81a2.03 2.03 0 0 0 0-4.06m-117.591 98.143h-434.01a8.07 8.07 0 0 0-8.07 8.06v204.87a8.08 8.08 0 0 0 8.07 8.07h434.01a8.077 8.077 0 0 0 8.06-8.07v-204.87a8.07 8.07 0 0 0-8.06-8.06"></path><path fill="#589ff8" d="M542.073 214.842a8.07 8.07 0 0 0-8.06 8.06v57.87a8.077 8.077 0 0 0 8.06 8.07h122.7v-74Z"></path><path fill="#589ff8" d="M871.088 288.837h-329.01a8.076 8.076 0 0 1-8.067-8.066v-57.868a8.075 8.075 0 0 1 8.067-8.066h329.01a8.075 8.075 0 0 1 8.066 8.066v57.868a8.076 8.076 0 0 1-8.066 8.066" opacity=".5"></path><circle cx="586.571" cy="255.537" r="13.089" fill="#fff"></circle><path fill="#fff" d="M860.894 251.734H624.38a3.898 3.898 0 1 1 0-7.796h236.514a3.898 3.898 0 1 1 0 7.796m-89.831 15.401H624.38a3.898 3.898 0 1 1 0-7.795h146.683a3.898 3.898 0 0 1 0 7.795"></path><path fill="#ffb6b6" d="m151.406 545.537 11.328-.001 5.389-43.693h-16.719z"></path><path fill="#2f2e41" d="M148.517 541.838h3.188l12.449-5.062 6.671 5.061h.001a14.22 14.22 0 0 1 14.217 14.217v.462l-36.526.001Z"></path><path fill="#ffb6b6" d="m49.051 530.809 10.139 5.053 24.314-36.701-14.963-7.458z"></path><path fill="#2f2e41" d="m48.115 526.21 2.854 1.422 13.4 1.022 3.712 7.507h.001a14.22 14.22 0 0 1 6.382 19.066l-.206.413-32.69-16.292Zm108.31-179.114-72.026 1.88 1.253 35.073s-1.253 9.395 1.252 11.9 3.758 2.505 2.506 6.89-4.491 46.273-4.491 46.273-29.562 52.27-28.31 53.522 2.506 0 1.253 3.132-2.505 1.879-1.252 3.132a46 46 0 0 1 3.131 3.757h20.416s1.142-6.263 1.142-6.889 1.252-4.384 1.252-5.01 35.67-38.418 35.67-38.418l7.515-62.631 18.163 61.378s0 53.863 1.253 55.116 1.252.626.626 3.132-3.132 1.878-1.253 3.757 2.505-1.252 1.88 1.88l-.627 3.13 24.062.27s2.506-5.28 1.253-7.159-1.178-1.366.35-4.44 2.155-3.702 1.529-4.328-.626-3.958-.626-3.958-9.031-123.183-9.031-125.062a6.25 6.25 0 0 1 .52-2.818v-2.55l-2.4-9.038Z"></path><path fill="#589ff8" d="M869.68 238.348a27.638 27.638 0 1 1 27.638-27.638 27.64 27.64 0 0 1-27.638 27.638"></path><path fill="#fff" d="M880.586 207.984h-8.18v-8.18a2.726 2.726 0 0 0-5.452 0v8.18h-8.179a2.726 2.726 0 1 0 0 5.452h8.18v8.18a2.726 2.726 0 0 0 5.452 0v-8.18h8.179a2.726 2.726 0 1 0 0-5.452"></path><path fill="#589ff8" d="M447.883 289.212h-105.01a8.08 8.08 0 0 0-8.07 8.07v39.86h121.14v-39.86a8.077 8.077 0 0 0-8.06-8.07"></path><path fill="#589ff8" d="M447.88 401.212H342.87a8.076 8.076 0 0 1-8.067-8.067v-95.867a8.075 8.075 0 0 1 8.067-8.067h105.01a8.075 8.075 0 0 1 8.066 8.067v95.867a8.076 8.076 0 0 1-8.066 8.067" opacity=".5"></path><circle cx="373.808" cy="321.563" r="13.089" fill="#fff"></circle><path fill="#fff" d="M426.131 354.547h-61.514a3.898 3.898 0 1 1 0-7.795h61.514a3.898 3.898 0 1 1 0 7.795M394.3 369.95h-29.683a3.898 3.898 0 0 1 0-7.797H394.3a3.898 3.898 0 0 1 0 7.796"></path><path fill="#589ff8" d="M340.68 429.348a27.638 27.638 0 1 1 27.638-27.638 27.64 27.64 0 0 1-27.638 27.638"></path><path fill="#fff" d="M351.586 398.984h-8.18v-8.18a2.726 2.726 0 1 0-5.452 0v8.18h-8.179a2.726 2.726 0 1 0 0 5.452h8.18v8.18a2.726 2.726 0 1 0 5.452 0v-8.18h8.179a2.726 2.726 0 1 0 0-5.452"></path><path fill="#589ff8" d="M327.887 228.266h-105.01a8.076 8.076 0 0 1-8.067-8.066v-95.867a8.075 8.075 0 0 1 8.067-8.067h105.01a8.075 8.075 0 0 1 8.066 8.067V220.2a8.076 8.076 0 0 1-8.066 8.066"></path><circle cx="253.816" cy="156.618" r="13.089" fill="#589ff8"></circle><path fill="#589ff8" d="M306.139 185.602h-61.514a3.898 3.898 0 1 1 0-7.795h61.514a3.898 3.898 0 1 1 0 7.795m-31.831 15.402h-29.683a3.898 3.898 0 1 1 0-7.796h29.683a3.898 3.898 0 1 1 0 7.796"></path><path fill="#589ff8" d="M327.887 228.266h-105.01a8.076 8.076 0 0 1-8.067-8.066v-95.867a8.075 8.075 0 0 1 8.067-8.067h105.01a8.075 8.075 0 0 1 8.066 8.067V220.2a8.076 8.076 0 0 1-8.066 8.066" opacity=".5"></path><circle cx="253.816" cy="156.618" r="13.089" fill="#fff"></circle><path fill="#fff" d="M306.139 185.602h-61.514a3.898 3.898 0 1 1 0-7.795h61.514a3.898 3.898 0 1 1 0 7.795m-31.831 15.402h-29.683a3.898 3.898 0 1 1 0-7.796h29.683a3.898 3.898 0 1 1 0 7.796"></path><circle cx="225.043" cy="115.951" r="21" fill="#ff6584"></circle><path fill="#ccc" d="M282.67 555.785a1.186 1.186 0 0 1-1.19 1.19H1.19a1.19 1.19 0 0 1 0-2.38h280.29a1.187 1.187 0 0 1 1.19 1.19"></path><path fill="#ffb6b6" d="M220.555 171.576a9.77 9.77 0 0 1-5.759 12.435 9.6 9.6 0 0 1-1.635.451l-5.547 33.96-13.01-12.013 7.262-30.407a9.806 9.806 0 0 1 8.59-10.76 9.55 9.55 0 0 1 10.099 6.334"></path><path fill="#3f3d56" d="M124.54 248.524s10.098-13.341 46.74-12.976l20.797-7.556 4.753-43.57 16.636 3.96-2.377 53.87-35.648 20.596-46.739 9.506Z"></path><circle cx="119.175" cy="198.983" r="21.747" fill="#ffb6b6" data-name="ab6171fa-7d69-4734-b81c-8dff60f9761b"></circle><path fill="#3f3d56" d="M82.367 363.878a.4.4 0 0 1-.114-.016c-.401-.112-.719-.2.73-12.73l1.564-9.903-1.526-8.744-2.568-2.568 4.127-4.127 3.463-9.838-5.993-8.88-6.875-36.317a28.97 28.97 0 0 1 15.91-31.478l7.958-2.325 2.896-5.31a9.52 9.52 0 0 1 8.286-4.962l14.573-.11a9.52 9.52 0 0 1 7.617 3.716l5.084 6.609 21.082 7.161-3.495 75.322a5.233 5.233 0 0 1 .359 7.695c-.22.221-.393.401-.5.52-.356.505.31 4.275 1.134 7.475l1.056 4.902a3.013 3.013 0 0 0-.548 4.398l1.347 1.59a7.6 7.6 0 0 1-6.508 8.536c-19.267 2.622-68.958 9.384-69.059 9.384"></path><path fill="#2f2e41" d="M113.612 219.665q-.14-.307-.278-.615c.036 0 .07.006.106.007Zm-16.789-41.441a6.05 6.05 0 0 1 3.792-1.64c1.406.046 2.832 1.316 2.54 2.693a22.35 22.35 0 0 1 26.896-10.085c3.495 1.233 6.922 3.7 7.725 7.318a6.6 6.6 0 0 0 .83 2.702 3.08 3.08 0 0 0 3.283.832l.034-.01a1.028 1.028 0 0 1 1.242 1.45l-.989 1.844a7.9 7.9 0 0 0 3.776-.08 1.027 1.027 0 0 1 1.09 1.598 17.9 17.9 0 0 1-14.269 7.334c-3.951-.024-7.943-1.386-11.789-.477a10.24 10.24 0 0 0-6.887 14.375c-1.182-1.292-3.466-.986-4.674.28a6.4 6.4 0 0 0-1.4 4.906 22.8 22.8 0 0 0 2.337 7.638 22.836 22.836 0 0 1-13.537-40.678"></path><path fill="#ffb6b6" d="M90.84 395.068a9.77 9.77 0 0 1-2.303-13.509 9.6 9.6 0 0 1 1.092-1.298l-14.675-31.123 17.527 2.525 11.249 29.167a9.806 9.806 0 0 1-.98 13.733 9.55 9.55 0 0 1-11.91.505"></path><path fill="#3f3d56" d="m86.395 378.074-23.352-52.483-.234-41.452 7.361-22.39a23.925 23.925 0 0 1 30.828-15.04l.162.058.068.158c.272.635 6.446 15.907-11.867 47.323l-3.686 21.496 12.933 49.274Z"></path>',37)]))}const $s={render:Qs},Zs={width:24,height:24,body:'<path fill="currentColor" d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0v1Zm-2 0V9A5 5 0 0 0 7 9v1h10Zm-6 4v4h2v-4h-2Z"/>'},js={width:24,height:24,body:'<path fill="currentColor" d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2Zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"/>'},Os={class:"select-none"},Gs=["src"],Ws={class:"flex-c absolute right-5 top-3"},Ys={class:"check-en"},Js={class:"login-container"},Xs={class:"img"},Ks={class:"login-box"},ea={class:"login-form"},ta={class:"outline-none"},sa={class:"w-full h-[20px] flex justify-between items-center"},aa={class:"flex"},ia={class:"w-full h-[20px] flex justify-between items-center"},la={class:"text-gray-500 text-xs"},na={class:"w-full flex justify-evenly"},oa=["title"],ra=Ie({name:"Login",__name:"index",setup(t){let e=_=>Ut(_);const s=q(""),i=q(7),l=Ft(),u=q(!1),h=q(!1),d=q(!1),r=q(),m=At(()=>H().currentPage);let{locale:E,overallStyle:R}=Ke();const{initStorage:b}=qs();b();const{dataTheme:p,dataThemeChange:c}=Gt();c(R.value);const{title:S,getDropdownItemStyle:P,getDropdownItemClass:g}=Wt(),{translationCh:I,translationEn:ae}=Vt(),N=qt({username:"admin",password:"admin123",verifyCode:""}),ie=_=>x(this,null,function*(){_&&(yield _.validate(y=>{y&&(u.value=!0,H().loginByUsername({username:N.username,password:"admin123"}).then(ge=>{if(ge.success)return Qt().then(()=>{d.value=!0,l.push(et(!0).path).then(()=>{$e("登录成功",{type:"success"})}).finally(()=>d.value=!1)});$e("登录失败",{type:"error"})}).finally(()=>u.value=!1))}))}),gt=$t(_=>ie(_),1e3,!0);return Ht(document,"keypress",({code:_})=>{["Enter","NumpadEnter"].includes(_)&&!d.value&&!u.value&&gt(r.value)}),se(s,_=>{H().SET_VERIFYCODE(_)}),se(h,_=>{H().SET_ISREMEMBERED(_)}),se(i,_=>{H().SET_LOGINDAY(_)}),(_,y)=>{const ge=D("el-switch"),ve=Zt,Le=D("el-dropdown-item"),vt=D("el-dropdown-menu"),bt=D("el-dropdown"),_t=Ls,be=D("el-input"),Q=D("el-form-item"),wt=ls,Ct=D("el-checkbox"),_e=D("el-button"),St=D("el-form"),Tt=D("el-divider"),xt=Nt,kt=Bt("tippy");return k(),z("div",Os,[T("img",{src:n(Hs),class:"wave"},null,8,Gs),T("div",Ws,[f(ge,{modelValue:n(p),"onUpdate:modelValue":y[0]||(y[0]=w=>oe(p)?p.value=w:null),"inline-prompt":"","active-icon":n(Yt),"inactive-icon":n(Jt),onChange:n(c)},null,8,["modelValue","active-icon","inactive-icon","onChange"]),f(bt,{trigger:"click"},{dropdown:v(()=>[f(vt,{class:"translation"},{default:v(()=>[f(Le,{style:Se(n(P)(n(E),"zh")),class:Be(["dark:!text-white",n(g)(n(E),"zh")]),onClick:n(I)},{default:v(()=>[re(f(ve,{class:"check-zh",icon:n(Ze)},null,8,["icon"]),[[ze,n(E)==="zh"]]),y[9]||(y[9]=Z(" 简体中文 "))]),_:1},8,["style","class","onClick"]),f(Le,{style:Se(n(P)(n(E),"en")),class:Be(["dark:!text-white",n(g)(n(E),"en")]),onClick:n(ae)},{default:v(()=>[re(T("span",Ys,[f(ve,{icon:n(Ze)},null,8,["icon"])],512),[[ze,n(E)==="en"]]),y[10]||(y[10]=Z(" English "))]),_:1},8,["style","class","onClick"])]),_:1})]),default:v(()=>[f(n(Xt),{class:"hover:text-primary hover:!bg-[transparent] w-[20px] h-[20px] ml-1.5 cursor-pointer outline-none duration-300"})]),_:1})]),T("div",Js,[T("div",Xs,[(k(),L(Fe(n(e)(n($s)))))]),T("div",Ks,[T("div",ea,[(k(),L(Fe(n(e)(n(zs))),{class:"avatar"})),f(n(F),null,{default:v(()=>[T("h2",ta,[f(_t,{options:{strings:_.$i18n(n(S)),cursor:!1,speed:100}},null,8,["options"])])]),_:1}),n(m)===0?(k(),L(St,{key:0,ref_key:"ruleFormRef",ref:r,model:n(N),rules:n(Ot),size:"large"},{default:v(()=>[f(n(F),{delay:100},{default:v(()=>[f(Q,{prop:"username"},{default:v(()=>[f(be,{modelValue:n(N).username,"onUpdate:modelValue":y[1]||(y[1]=w=>n(N).username=w),clearable:"",placeholder:_.$i18n("账号"),"prefix-icon":n(je)(n(js))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),f(n(F),{delay:150},{default:v(()=>[f(Q,{prop:"password"},{default:v(()=>[f(be,{modelValue:n(N).password,"onUpdate:modelValue":y[2]||(y[2]=w=>n(N).password=w),clearable:"","show-password":"",placeholder:_.$i18n("密码"),"prefix-icon":n(je)(n(Zs))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),f(n(F),{delay:200},{default:v(()=>[f(Q,{prop:"verifyCode"},{default:v(()=>[f(be,{modelValue:n(N).verifyCode,"onUpdate:modelValue":y[4]||(y[4]=w=>n(N).verifyCode=w),clearable:"",placeholder:_.$i18n("验证码")},{append:v(()=>[f(wt,{code:n(s),"onUpdate:code":y[3]||(y[3]=w=>oe(s)?s.value=w:null)},null,8,["code"])]),_:1},8,["modelValue","placeholder"])]),_:1})]),_:1}),f(n(F),{delay:250},{default:v(()=>[f(Q,null,{default:v(()=>[T("div",sa,[f(Ct,{modelValue:n(h),"onUpdate:modelValue":y[6]||(y[6]=w=>oe(h)?h.value=w:null),name:"checkbox"},{default:v(()=>[T("span",aa,[re(T("select",{"onUpdate:modelValue":y[5]||(y[5]=w=>oe(i)?i.value=w:null),name:"select",style:Se({width:n(i)<10?"10px":"16px",outline:"none",background:"none",appearance:"none"})},y[11]||(y[11]=[T("option",{value:"1"},"1",-1),T("option",{value:"7"},"7",-1),T("option",{value:"30"},"30",-1)]),4),[[zt,n(i)]]),Z(" "+G(_.$i18n("天内免登录"))+" ",1),re(f(ve,{icon:n(Kt),class:"ml-1"},null,8,["icon"]),[[kt,{content:"勾选并登录后，规定天数内无需输入用户名和密码会自动登入系统",placement:"top"}]])])]),_:1},8,["modelValue"]),f(_e,{link:"",type:"primary",onClick:y[7]||(y[7]=w=>n(H)().SET_CURRENTPAGE(4))},{default:v(()=>[Z(G(_.$i18n("忘记密码"))+"? ",1)]),_:1})]),f(_e,{class:"w-full mt-4",size:"default",type:"primary",loading:n(u),disabled:n(d),onClick:y[8]||(y[8]=w=>ie(n(r)))},{default:v(()=>[Z(G(_.$i18n("登录")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1}),f(n(F),{delay:300},{default:v(()=>[f(Q,null,{default:v(()=>[T("div",ia,[(k(!0),z(Ue,null,Qe(n(As),(w,le)=>(k(),L(_e,{key:le,class:"w-full mt-4",size:"default",onClick:ua=>n(H)().SET_CURRENTPAGE(le+1)},{default:v(()=>[Z(G(_.$i18n(w.title)),1)]),_:2},1032,["onClick"]))),128))])]),_:1})]),_:1})]),_:1},8,["model","rules"])):$("",!0),n(m)===0?(k(),L(n(F),{key:1,delay:350},{default:v(()=>[f(Q,null,{default:v(()=>[f(Tt,null,{default:v(()=>[T("p",la,G(_.$i18n("第三方登录")),1)]),_:1}),T("div",na,[(k(!0),z(Ue,null,Qe(n(Vs),(w,le)=>(k(),z("span",{key:le,title:w.title},[f(xt,{icon:`ri:${w.icon}-fill`,width:"20",class:"cursor-pointer text-gray-500 hover:text-blue-400"},null,8,["icon"])],8,oa))),128))])]),_:1})]),_:1})):$("",!0),n(m)===1?(k(),L(es,{key:2})):$("",!0),n(m)===2?(k(),L(as,{key:3})):$("",!0),n(m)===3?(k(),L(ts,{key:4})):$("",!0),n(m)===4?(k(),L(ss,{key:5})):$("",!0)])])])])}}}),wa=jt(ra,[["__scopeId","data-v-80b33fc4"]]);export{wa as default};
