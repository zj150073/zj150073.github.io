var kt=Object.defineProperty,Et=Object.defineProperties;var Mt=Object.getOwnPropertyDescriptors;var Le=Object.getOwnPropertySymbols;var Pt=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable;var Ae=t=>{throw TypeError(t)};var _e=(t,e,s)=>e in t?kt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,le=(t,e)=>{for(var s in e||(e={}))Pt.call(e,s)&&_e(t,s,e[s]);if(Le)for(var s of Le(e))It.call(e,s)&&_e(t,s,e[s]);return t},Ve=(t,e)=>Et(t,Mt(e));var M=(t,e,s)=>_e(t,typeof e!="symbol"?e+"":e,s),qe=(t,e,s)=>e.has(t)||Ae("Cannot "+s);var w=(t,e,s)=>(qe(t,e,"read from private field"),s?s.call(t):e.get(t)),we=(t,e,s)=>e.has(t)?Ae("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);var r=(t,e,s)=>(qe(t,e,"access private method"),s);var S=(t,e,s)=>new Promise((i,l)=>{var u=o=>{try{d(s.next(o))}catch(y){l(y)}},h=o=>{try{d(s.throw(o))}catch(y){l(y)}},d=o=>o.done?i(o.value):Promise.resolve(o.value).then(u,h);d((s=s.apply(t,e)).next())});import{h as Rt,c as Nt,j as Dt,k as Lt,f as He,g as At,u as Fe,d as Vt,_ as qt}from"./dark-B5tHgQgw.js";import{d as Pe,l as q,x as Je,G as te,o as T,c as B,b as p,n as Ke,ap as Ht,D as Xe,e as x,a as Ft,q as zt,a1 as Bt,v as Ut,aq as Qt,u as n,$ as ne,h as v,g as L,a0 as ze,R as Z,i as Zt,r as D,j as $t,K as Ce,P as Be,w as re,J as Ue,f as $,ar as jt,as as H,L as Qe,O as Ze,t as Ot,Y as Gt,at as Wt,ah as Yt,W as Jt,_ as Kt}from"./index-6jyvy8UW.js";import{M as F}from"./motion-BWexfXcg.js";import{m as $e}from"./message-DkWgFzDy.js";import{l as Xt}from"./verifyCode-Dq_y55s_.js";import{_ as es}from"./LoginPhone.vuevuetypescriptsetuptruelang-DDgu8FmP.js";import{_ as ts}from"./LoginRegist.vuevuetypescriptsetuptruelang-DRAfxEY_.js";import{_ as ss}from"./LoginUpdate.vuevuetypescriptsetuptruelang-DqOQ-2G9.js";import{_ as as}from"./LoginQrCode.vuevuetypescriptsetuptruelang-DV4-Xp1K.js";const is=Pe({name:"ReImageVerify",__name:"index",props:{code:{default:""}},emits:["update:code"],setup(t,{expose:e,emit:s}){const i=t,l=s,u=q(),h=q("");function d(b){h.value=b}function o(b,m){return Math.floor(Math.random()*(m-b)+b)}function y(b,m){const f=o(b,m),C=o(b,m),P=o(b,m);return`rgb(${f},${C},${P})`}function E(b,m,f){let C="";const P="0123456789",g=b.getContext("2d");if(!g)return C;g.fillStyle=y(180,230),g.fillRect(0,0,m,f);for(let I=0;I<4;I+=1){const se=P[o(0,P.length)];C+=se;const N=o(18,41),ae=o(-30,30);g.font=`${N}px Simhei`,g.textBaseline="top",g.fillStyle=y(80,150),g.save(),g.translate(30*I+15,15),g.rotate(ae*Math.PI/180),g.fillText(se,-10,-15),g.restore()}for(let I=0;I<5;I+=1)g.beginPath(),g.moveTo(o(0,m),o(0,f)),g.lineTo(o(0,m),o(0,f)),g.strokeStyle=y(180,230),g.closePath(),g.stroke();for(let I=0;I<41;I+=1)g.beginPath(),g.arc(o(0,m),o(0,f),1,0,2*Math.PI),g.closePath(),g.fillStyle=y(150,200),g.fill();return C}function R(){u.value&&(h.value=E(u.value,120,40))}return Je(()=>{R()}),te(()=>i.code,b=>{d(b)}),te(h,b=>{l("update:code",b)}),e({getImgCode:R}),(b,m)=>(T(),B("canvas",{ref_key:"domRef",ref:u,width:"120",height:"40",class:"cursor-pointer",onClick:R},null,512))}}),ls=is,et=t=>Array.isArray(t),tt=t=>et(t)?t:[t];let ns=function(t){let e=function(f){return tt(f).forEach(C=>{var P;return m.set(Symbol((P=C.char)==null?void 0:P.innerText),l(le({},C)))}),this},s=()=>o().filter(f=>f.typeable),i=function(f,C){let P=[...m.keys()];m.set(P[f],l(C))},l=f=>(f.shouldPauseCursor=function(){return!!(this.typeable||this.cursorable||this.deletable)},f),u=function(){m.forEach(f=>delete f.done)},h=function(){m=new Map,e(t)},d=()=>m,o=()=>Array.from(m.values()),y=f=>m.delete(f),E=()=>{const f=[];for(let[,C]of d())C.done||f.push(C);return f},R=(f=!1)=>f?o():o().filter(C=>!C.done),b=(f,C=!1)=>C?m.delete(f):m.get(f).done=!0,m=new Map;return e(t),{add:e,set:i,wipe:h,done:b,reset:u,destroy:y,getItems:R,getQueue:d,getTypeable:s,getPendingQueueItems:E}};const st="data-typeit-id",U="ti-cursor",rs="END",os={started:!1,completed:!1,frozen:!1,destroyed:!1},O={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(t=>({opacity:t})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},us=`[${st}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`,ue=t=>document.createElement(t),Ie=t=>document.createTextNode(t),at=(t,e="")=>{let s=ue("style");s.id=e,s.appendChild(Ie(t)),document.head.appendChild(s)},je=t=>(et(t)||(t=[t/2,t/2]),t),Oe=(t,e)=>Math.abs(Math.random()*(t+e-(t-e))+(t-e));let Ge=t=>t/2;function hs(t){let{speed:e,deleteSpeed:s,lifeLike:i}=t;return s=s!==null?s:e/3,i?[Oe(e,Ge(e)),Oe(s,Ge(s))]:[e,s]}const it=t=>Array.from(t);let Re=t=>([...t.childNodes].forEach(e=>{if(e.nodeValue){[...e.nodeValue].forEach(s=>{e.parentNode.insertBefore(Ie(s),e)}),e.remove();return}Re(e)}),t);const lt=t=>{let e=document.implementation.createHTMLDocument();return e.body.innerHTML=t,Re(e.body)};function nt(t,e=!1,s=!1){let i=t.querySelector(`.${U}`),l=document.createTreeWalker(t,NodeFilter.SHOW_ALL,{acceptNode:d=>{var o,y;if(i&&s){if((o=d.classList)!=null&&o.contains(U))return NodeFilter.FILTER_ACCEPT;if(i.contains(d))return NodeFilter.FILTER_REJECT}return(y=d.classList)!=null&&y.contains(U)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),u,h=[];for(;u=l.nextNode();)u.originalParent||(u.originalParent=u.parentNode),h.push(u);return e?h.reverse():h}function ds(t){return nt(lt(t))}function cs(t,e=!0){return e?ds(t):it(t).map(Ie)}const fs=({index:t,newIndex:e,queueItems:s,cleanUp:i})=>{for(let l=t+1;l<e+1;l++)i(s[l][0])},rt=t=>Number.isInteger(t),We=({queueItems:t,selector:e,cursorPosition:s,to:i})=>{if(rt(e))return e*-1;let l=new RegExp(rs,"i").test(i),u=e?[...t].reverse().findIndex(({char:d})=>{let o=d.parentElement,y=o.matches(e);return l&&y?!0:y&&o.firstChild.isSameNode(d)}):-1;u<0&&(u=l?0:t.length-1);let h=l?0:1;return u-s+h},ps=t=>(t.forEach(clearTimeout),[]),oe=(t,e)=>new Array(e).fill(t);let fe=t=>new Promise(e=>{requestAnimationFrame(()=>S(void 0,null,function*(){e(yield t())}))}),ot=t=>t==null?void 0:t.getAnimations().find(e=>e.id===t.dataset.tiAnimationId),ut=({cursor:t,frames:e,options:s})=>{let i=t.animate(e,s);return i.pause(),i.id=t.dataset.tiAnimationId,fe(()=>{fe(()=>{i.play()})}),i},ms=({cursor:t,options:e,cursorOptions:s})=>{if(!t||!s)return;let i=ot(t),l;i&&(e.delay=i.effect.getComputedTiming().delay,l=i.currentTime,i.cancel());let u=ut({cursor:t,frames:s.animation.frames,options:e});return l&&(u.currentTime=l),u},Ye=t=>{var e;return(e=t.func)==null?void 0:e.call(null)},ys=u=>S(void 0,[u],function*({index:t,queueItems:e,wait:s,cursor:i,cursorOptions:l}){let h=e[t][1],d=[],o=t,y=h,E=()=>y&&!y.delay,R=h.shouldPauseCursor()&&l.autoPause;for(;E();)d.push(y),E()&&o++,y=e[o]?e[o][1]:null;if(d.length)return yield fe(()=>S(void 0,null,function*(){for(let f of d)yield Ye(f)})),o-1;let b=ot(i),m;return b&&(m=Ve(le({},b.effect.getComputedTiming()),{delay:R?l.autoPauseDelay:0})),yield s(()=>S(void 0,null,function*(){b&&R&&b.cancel(),yield fe(()=>{Ye(h)})}),h.delay),yield ms({cursor:i,options:m,cursorOptions:l}),t});const gs=(t,e)=>{new IntersectionObserver((i,l)=>{i.forEach(u=>{u.isIntersecting&&(e(),l.unobserve(t))})},{threshold:1}).observe(t)},vs=()=>Math.random().toString().substring(2,9),pe=t=>"value"in t;let bs=t=>pe(t)?it(t.value):nt(t,!0).filter(e=>!(e.childNodes.length>0)),j=t=>typeof t=="function"?t():t,Ne=(t,e=document,s=!1)=>e[`querySelector${s?"All":""}`](t),_s=t=>/body/i.test(t==null?void 0:t.tagName),ws=(t,e)=>{if(pe(t)){t.value=`${t.value}${e.textContent}`;return}e.innerHTML="";let s=_s(e.originalParent)?t:e.originalParent||t,i=Ne("."+U,s)||null;i&&i.parentElement!==s&&(s=i.parentElement),s.insertBefore(e,i)};const Cs=t=>/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML),G=(t,e)=>Object.assign({},t,e);let xs=t=>{var e,s,i;if(typeof t=="object"){let l={},{frames:u,options:h}=O.cursor.animation;return l.animation=t.animation||{},l.animation.frames=((e=t.animation)==null?void 0:e.frames)||u,l.animation.options=G(h,((s=t.animation)==null?void 0:s.options)||{}),l.autoPause=(i=t.autoPause)!=null?i:O.cursor.autoPause,l.autoPauseDelay=t.autoPauseDelay||O.cursor.autoPauseDelay,l}return t===!0?O.cursor:t};const Ss=(t,e)=>{if(!t)return;let s=t.parentNode;(s.childNodes.length>1||s.isSameNode(e)?t:s).remove()},Ts=(t,e,s)=>{let i=e[s-1],l=Ne(`.${U}`,t);t=(i==null?void 0:i.parentNode)||t,t.insertBefore(l,i||null)};function ks(t){return typeof t=="string"?Ne(t):t}let Es={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},Ms=(t,e)=>{let i=`${`[${st}='${t}']`} .${U}`,l=getComputedStyle(e),u=Object.entries(Es).reduce((h,[d,o])=>`${h} ${d}: var(--ti-cursor-${d}, ${o||l[d]});`,"");at(`${i} { display: inline-block; width: 0; ${u} }`,t)};function Ps(t){return t.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/)}let Is=(t,e,s)=>Math.min(Math.max(e+t,0),s.length),Rs=(t,e,s)=>new Promise(i=>{let l=()=>S(void 0,null,function*(){yield t(),i()});s.push(setTimeout(l,e||0))});var a,ht,W,xe,dt,Se,Te,ke,he,A,ct,Y,J,ft,me,pt,mt,Ee,de,K,ce,z,X,ee,Me,V;class Ns{constructor(e,s={}){we(this,a);M(this,"element");M(this,"timeouts");M(this,"cursorPosition");M(this,"predictedCursorPosition");M(this,"statuses",{started:!1,completed:!1,frozen:!1,destroyed:!1,firing:!1});M(this,"opts");M(this,"id");M(this,"queue");M(this,"cursor");M(this,"flushCallback",null);M(this,"unfreeze",()=>{});M(this,"is",function(e){return this.statuses[e]});we(this,me,e=>{var s;this.opts.cursor=xs((s=e.cursor)!=null?s:O.cursor),this.opts.strings=r(this,a,pt).call(this,tt(this.opts.strings)),this.opts=G(this.opts,{html:!w(this,a,ee)&&this.opts.html,nextStringDelay:je(this.opts.nextStringDelay),loopDelay:je(this.opts.loopDelay)})});this.opts=G(O,s),this.element=ks(e),this.timeouts=[],this.cursorPosition=0,this.unfreeze=()=>{},this.predictedCursorPosition=null,this.statuses=G({},os),this.id=vs(),this.queue=ns([{delay:this.opts.startDelay}]),w(this,me).call(this,s),this.cursor=r(this,a,mt).call(this),this.element.dataset.typeitId=this.id,at(us),this.opts.strings.length&&r(this,a,ft).call(this)}go(){return this.statuses.started?this:(r(this,a,ke).call(this),this.opts.waitUntilVisible?(gs(this.element,r(this,a,W).bind(this)),this):(r(this,a,W).call(this),this))}destroy(e=!0){this.timeouts=ps(this.timeouts),j(e)&&this.cursor&&r(this,a,ce).call(this,this.cursor),this.statuses.destroyed=!0}reset(e){!this.is("destroyed")&&this.destroy(),e?(this.queue.wipe(),e(this)):this.queue.reset(),this.cursorPosition=0;for(let s in this.statuses)this.statuses[s]=!1;return this.element[r(this,a,he).call(this)?"value":"innerHTML"]="",this}type(e,s={}){e=j(e);let{instant:i}=s,l=r(this,a,Y).call(this,s),h=cs(e,this.opts.html).map(o=>({func:()=>r(this,a,de).call(this,o),char:o,delay:i||Cs(o)?0:r(this,a,z).call(this),typeable:o.nodeType===Node.TEXT_NODE})),d=[l[0],{func:()=>S(this,null,function*(){return yield this.opts.beforeString(e,this)})},...h,{func:()=>S(this,null,function*(){return yield this.opts.afterString(e,this)})},l[1]];return r(this,a,A).call(this,d,s)}break(e={}){return r(this,a,A).call(this,{func:()=>r(this,a,de).call(this,ue("BR")),typeable:!0},e)}move(e,s={}){e=j(e);let i=r(this,a,Y).call(this,s),{instant:l,to:u}=s,h=We({queueItems:this.queue.getTypeable(),selector:e===null?"":e,to:u,cursorPosition:w(this,a,X)}),d=h<0?-1:1;return this.predictedCursorPosition=w(this,a,X)+h,r(this,a,A).call(this,[i[0],...oe({func:()=>r(this,a,xe).call(this,d),delay:l?0:r(this,a,z).call(this),cursorable:!0},Math.abs(h)),i[1]],s)}exec(e,s={}){let i=r(this,a,Y).call(this,s);return r(this,a,A).call(this,[i[0],{func:()=>e(this)},i[1]],s)}options(e,s={}){return e=j(e),r(this,a,J).call(this,e),r(this,a,A).call(this,{},s)}pause(e,s={}){return r(this,a,A).call(this,{delay:j(e)},s)}delete(e=null,s={}){e=j(e);let i=r(this,a,Y).call(this,s),l=e,{instant:u,to:h}=s,d=this.queue.getTypeable(),o=l===null?d.length:rt(l)?l:We({queueItems:d,selector:l,cursorPosition:w(this,a,X),to:h});return r(this,a,A).call(this,[i[0],...oe({func:r(this,a,K).bind(this),delay:u?0:r(this,a,z).call(this,1),deletable:!0},o),i[1]],s)}freeze(){this.statuses.frozen=!0}flush(e=null){return this.flushCallback=e||this.flushCallback,this.statuses.firing?this:(r(this,a,ke).call(this),r(this,a,W).call(this,!1).then(()=>{if(this.queue.getPendingQueueItems().length>0)return this.flush();this.flushCallback(),this.flushCallback=null}),this)}getQueue(){return this.queue}getOptions(){return this.opts}updateOptions(e){return r(this,a,J).call(this,e)}getElement(){return this.element}empty(e={}){return r(this,a,A).call(this,{func:r(this,a,ht).bind(this)},e)}}a=new WeakSet,ht=function(){return S(this,null,function*(){if(r(this,a,he).call(this)){this.element.value="";return}w(this,a,V).forEach(r(this,a,ce).bind(this))})},W=function(e=!0){return S(this,null,function*(){this.statuses.started=!0,this.statuses.firing=!0;let s=i=>{this.queue.done(i,!e)};try{let i=[...this.queue.getQueue()];for(let u=0;u<i.length;u++){let[h,d]=i[u];if(!d.done){if(!d.deletable||d.deletable&&w(this,a,V).length){let o=yield r(this,a,Se).call(this,u,i);fs({index:u,newIndex:o,queueItems:i,cleanUp:s}),u=o}s(h)}}if(!e)return this.statuses.firing=!1,this;if(this.statuses.completed=!0,this.statuses.firing=!1,yield this.opts.afterComplete(this),!this.opts.loop)throw"";let l=this.opts.loopDelay;r(this,a,Te).call(this,()=>S(this,null,function*(){yield r(this,a,dt).call(this,l[0]),r(this,a,W).call(this)}),l[1])}catch(i){}return this.statuses.firing=!1,this})},xe=function(e){return S(this,null,function*(){this.cursorPosition=Is(e,this.cursorPosition,w(this,a,V)),Ts(this.element,w(this,a,V),this.cursorPosition)})},dt=function(e){return S(this,null,function*(){let s=w(this,a,X);s&&(yield r(this,a,xe).call(this,{value:s}));let i=w(this,a,V).map(l=>[Symbol(),{func:r(this,a,K).bind(this),delay:r(this,a,z).call(this,1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let l=0;l<i.length;l++)yield r(this,a,Se).call(this,l,i);this.queue.reset(),this.queue.set(0,{delay:e})})},Se=function(e,s){return ys({index:e,queueItems:s,wait:r(this,a,Te).bind(this),cursor:this.cursor,cursorOptions:this.opts.cursor})},Te=function(e,s,i=!1){return S(this,null,function*(){this.statuses.frozen&&(yield new Promise(l=>{this.unfreeze=()=>{this.statuses.frozen=!1,l()}})),i||(yield this.opts.beforeStep(this)),yield Rs(e,s,this.timeouts),i||(yield this.opts.afterStep(this))})},ke=function(){return S(this,null,function*(){if(!r(this,a,he).call(this)&&this.cursor&&this.element.appendChild(this.cursor),w(this,a,Me)){Ms(this.id,this.element),this.cursor.dataset.tiAnimationId=this.id;let{animation:e}=this.opts.cursor,{frames:s,options:i}=e;ut({frames:s,cursor:this.cursor,options:le({duration:this.opts.cursorSpeed},i)})}})},he=function(){return pe(this.element)},A=function(e,s){return this.queue.add(e),r(this,a,ct).call(this,s),this},ct=function(e={}){let s=e.delay;s&&this.queue.add({delay:s})},Y=function(e={}){return[{func:()=>r(this,a,J).call(this,e)},{func:()=>r(this,a,J).call(this,this.opts)}]},J=function(e){return S(this,null,function*(){this.opts=G(this.opts,e)})},ft=function(){let e=this.opts.strings.filter(s=>!!s);e.forEach((s,i)=>{if(this.type(s),i+1===e.length)return;let l=this.opts.breakLines?[{func:()=>r(this,a,de).call(this,ue("BR")),typeable:!0}]:oe({func:r(this,a,K).bind(this),delay:r(this,a,z).call(this,1)},this.queue.getTypeable().length);r(this,a,Ee).call(this,l)})},me=new WeakMap,pt=function(e){let s=this.element.innerHTML;return s?(this.element.innerHTML="",this.opts.startDelete?(this.element.innerHTML=s,Re(this.element),r(this,a,Ee).call(this,oe({func:r(this,a,K).bind(this),delay:r(this,a,z).call(this,1),deletable:!0},w(this,a,V).length)),e):Ps(s).concat(e)):e},mt=function(){if(w(this,a,ee))return null;let e=ue("span");return e.className=U,w(this,a,Me)?(e.innerHTML=lt(this.opts.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)},Ee=function(e){let s=this.opts.nextStringDelay;this.queue.add([{delay:s[0]},...e,{delay:s[1]}])},de=function(e){ws(this.element,e)},K=function(){w(this,a,V).length&&(w(this,a,ee)?this.element.value=this.element.value.slice(0,-1):r(this,a,ce).call(this,w(this,a,V)[this.cursorPosition]))},ce=function(e){Ss(e,this.element)},z=function(e=0){return hs(this.opts)[e]},X=function(){var e;return(e=this.predictedCursorPosition)!=null?e:this.cursorPosition},ee=function(){return pe(this.element)},Me=function(){return!!this.opts.cursor&&!w(this,a,ee)},V=function(){return bs(this.element)};const Ds=Pe({name:"TypeIt",props:{options:{type:Object,default:()=>({})}},setup(t,{slots:e,expose:s}){function i(h){throw new TypeError(h)}function l(){return navigator.language}const u=q(null);return Je(()=>{const h=u.value.querySelector(".type-it");if(!h){const o=l()==="zh-CN"?"请确保有且只有一个具有class属性为 'type-it' 的元素":"Please make sure that there is only one element with a Class attribute with 'type-it'";i(o)}const d=new Ns(h,t.options).go();s({typeIt:d})}),()=>{var h,d;return p("div",{ref:u},[(d=(h=e.default)==null?void 0:h.call(e))!=null?d:p("span",{class:"type-it"},null)])}}}),Ls=Ds,As=[{title:"手机登录"},{title:"二维码登录"},{title:"注册"}],Vs=[{title:"微信登录",icon:"wechat"},{title:"支付宝登录",icon:"alipay"},{title:"QQ登录",icon:"qq"},{title:"微博登录",icon:"weibo"}],qs=()=>{const{$storage:t,$config:e}=Ke();return{initStorage:()=>{var i;t.locale||(t.locale={locale:(i=e==null?void 0:e.locale)!=null?i:"zh"}),t.layout||(t.layout={layout:e==null?void 0:e.layout,theme:e==null?void 0:e.theme,darkMode:e==null?void 0:e.darkMode,sidebarStatus:e==null?void 0:e.sidebarStatus,epThemeColor:e==null?void 0:e.epThemeColor,overallStyle:e==null?void 0:e.overallStyle}),t.configure||(t.configure={grey:e==null?void 0:e.grey,weak:e==null?void 0:e.weak,hideTabs:e==null?void 0:e.hideTabs,hideFooter:e.hideFooter,fixedFooter:e.fixedFooter,showLogo:e==null?void 0:e.showLogo,showModel:e==null?void 0:e.showModel,multiTagsCache:e==null?void 0:e.multiTagsCache,stretch:e==null?void 0:e.stretch,hiddenSideBar:e.hiddenSideBar,version:e.version,keepAlive:e.keepAlive,cachingAsyncRoutes:e.cachingAsyncRoutes,tooltipEffect:e.tooltipEffect,maxTagsLevel:e.maxTagsLevel,title:e.title,fixedHeader:e.fixedHeader,showParent:e.showParent}),Ht().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=[Xe()])}}},Hs="/static/png/bg-oEDCYcDF.png",Fs={xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",class:"icon",viewBox:"0 0 1024 1024"};function zs(t,e){return T(),B("svg",Fs,e[0]||(e[0]=[x("path",{fill:"#1296db",d:"M513.29 962.25c-49.69 0-97.91-9.74-143.32-28.95-43.85-18.54-83.22-45.09-117.02-78.89s-60.34-73.17-78.89-117.02c-19.21-45.41-28.95-93.63-28.95-143.32 0-67.38 18.94-137.04 56.29-207.05 29.21-54.74 69.74-109.89 120.47-163.89 85.64-91.16 170.24-147.38 173.8-149.73a31.98 31.98 0 0 1 35.25 0c3.56 2.35 88.16 58.58 173.79 149.74 50.73 54.01 91.26 109.15 120.47 163.89 37.35 70.01 56.29 139.67 56.29 207.05 0 49.69-9.74 97.91-28.95 143.32-18.54 43.85-45.09 83.22-78.89 117.02s-73.17 60.34-117.02 78.89c-45.41 19.2-93.63 28.94-143.32 28.94m0-823.01c-28.52 20.79-87.47 66.54-145.68 128.69-72.3 77.2-158.49 196.45-158.49 326.15 0 167.72 136.45 304.17 304.17 304.17S817.46 761.8 817.46 594.08c0-129.7-86.19-248.95-158.49-326.15-58.2-62.15-117.15-107.89-145.68-128.69"},null,-1),x("path",{fill:"#1296db",d:"M514.73 827.23c.01-.32.02-.63.04-.95.52-13.83 10.03-25.64 23.39-29.21 19.51-5.22 49.48-18.12 81.3-49.94 31.92-31.92 44.93-62.1 50.22-81.75 3.62-13.43 15.54-22.93 29.44-23.37l.95-.03c21.09-.67 36.92 19.19 31.45 39.57-.81 3.03-1.74 6.2-2.79 9.49-11.51 35.93-33.65 70.98-64.01 101.35-30.39 30.39-65.39 52.46-101.23 63.84-3.38 1.07-6.8 2.01-10.2 2.83-20.17 4.84-39.35-11.11-38.56-31.83"},null,-1)]))}const Bs={render:zs},Us={xmlns:"http://www.w3.org/2000/svg",width:"500",height:"380",viewBox:"0 0 897.318 556.975"};function Qs(t,e){return T(),B("svg",Us,e[0]||(e[0]=[Ft('<path fill="#f2f2f2" d="m217.339 502.047.998-22.434a72.46 72.46 0 0 1 33.795-8.555c-16.231 13.27-14.203 38.85-25.207 56.696a43.58 43.58 0 0 1-31.96 20.14l-13.583 8.317a73.03 73.03 0 0 1 15.393-59.18 70.5 70.5 0 0 1 12.965-12.045c3.253 8.578 7.599 17.06 7.599 17.06"></path><path fill="#cacaca" d="M796.921 36.552H164.598a1.016 1.016 0 0 1 0-2.03h632.324a1.016 1.016 0 0 1 0 2.03"></path><ellipse cx="186.953" cy="11.169" fill="#3f3d56" rx="10.925" ry="11.169"></ellipse><ellipse cx="224.695" cy="11.169" fill="#3f3d56" rx="10.925" ry="11.169"></ellipse><ellipse cx="262.437" cy="11.169" fill="#3f3d56" rx="10.925" ry="11.169"></ellipse><path fill="#3f3d56" d="M774.304 2.768h-26.81a2.03 2.03 0 0 0 0 4.06h26.81a2.03 2.03 0 0 0 0-4.06m0 7.62h-26.81a2.03 2.03 0 0 0 0 4.06h26.81a2.03 2.03 0 0 0 0-4.06m0 7.61h-26.81a2.03 2.03 0 0 0 0 4.06h26.81a2.03 2.03 0 0 0 0-4.06m-117.591 98.143h-434.01a8.07 8.07 0 0 0-8.07 8.06v204.87a8.08 8.08 0 0 0 8.07 8.07h434.01a8.077 8.077 0 0 0 8.06-8.07v-204.87a8.07 8.07 0 0 0-8.06-8.06"></path><path fill="#589ff8" d="M542.073 214.842a8.07 8.07 0 0 0-8.06 8.06v57.87a8.077 8.077 0 0 0 8.06 8.07h122.7v-74Z"></path><path fill="#589ff8" d="M871.088 288.837h-329.01a8.076 8.076 0 0 1-8.067-8.066v-57.868a8.075 8.075 0 0 1 8.067-8.066h329.01a8.075 8.075 0 0 1 8.066 8.066v57.868a8.076 8.076 0 0 1-8.066 8.066" opacity=".5"></path><circle cx="586.571" cy="255.537" r="13.089" fill="#fff"></circle><path fill="#fff" d="M860.894 251.734H624.38a3.898 3.898 0 1 1 0-7.796h236.514a3.898 3.898 0 1 1 0 7.796m-89.831 15.401H624.38a3.898 3.898 0 1 1 0-7.795h146.683a3.898 3.898 0 0 1 0 7.795"></path><path fill="#ffb6b6" d="m151.406 545.537 11.328-.001 5.389-43.693h-16.719z"></path><path fill="#2f2e41" d="M148.517 541.838h3.188l12.449-5.062 6.671 5.061h.001a14.22 14.22 0 0 1 14.217 14.217v.462l-36.526.001Z"></path><path fill="#ffb6b6" d="m49.051 530.809 10.139 5.053 24.314-36.701-14.963-7.458z"></path><path fill="#2f2e41" d="m48.115 526.21 2.854 1.422 13.4 1.022 3.712 7.507h.001a14.22 14.22 0 0 1 6.382 19.066l-.206.413-32.69-16.292Zm108.31-179.114-72.026 1.88 1.253 35.073s-1.253 9.395 1.252 11.9 3.758 2.505 2.506 6.89-4.491 46.273-4.491 46.273-29.562 52.27-28.31 53.522 2.506 0 1.253 3.132-2.505 1.879-1.252 3.132a46 46 0 0 1 3.131 3.757h20.416s1.142-6.263 1.142-6.889 1.252-4.384 1.252-5.01 35.67-38.418 35.67-38.418l7.515-62.631 18.163 61.378s0 53.863 1.253 55.116 1.252.626.626 3.132-3.132 1.878-1.253 3.757 2.505-1.252 1.88 1.88l-.627 3.13 24.062.27s2.506-5.28 1.253-7.159-1.178-1.366.35-4.44 2.155-3.702 1.529-4.328-.626-3.958-.626-3.958-9.031-123.183-9.031-125.062a6.25 6.25 0 0 1 .52-2.818v-2.55l-2.4-9.038Z"></path><path fill="#589ff8" d="M869.68 238.348a27.638 27.638 0 1 1 27.638-27.638 27.64 27.64 0 0 1-27.638 27.638"></path><path fill="#fff" d="M880.586 207.984h-8.18v-8.18a2.726 2.726 0 0 0-5.452 0v8.18h-8.179a2.726 2.726 0 1 0 0 5.452h8.18v8.18a2.726 2.726 0 0 0 5.452 0v-8.18h8.179a2.726 2.726 0 1 0 0-5.452"></path><path fill="#589ff8" d="M447.883 289.212h-105.01a8.08 8.08 0 0 0-8.07 8.07v39.86h121.14v-39.86a8.077 8.077 0 0 0-8.06-8.07"></path><path fill="#589ff8" d="M447.88 401.212H342.87a8.076 8.076 0 0 1-8.067-8.067v-95.867a8.075 8.075 0 0 1 8.067-8.067h105.01a8.075 8.075 0 0 1 8.066 8.067v95.867a8.076 8.076 0 0 1-8.066 8.067" opacity=".5"></path><circle cx="373.808" cy="321.563" r="13.089" fill="#fff"></circle><path fill="#fff" d="M426.131 354.547h-61.514a3.898 3.898 0 1 1 0-7.795h61.514a3.898 3.898 0 1 1 0 7.795M394.3 369.95h-29.683a3.898 3.898 0 0 1 0-7.797H394.3a3.898 3.898 0 0 1 0 7.796"></path><path fill="#589ff8" d="M340.68 429.348a27.638 27.638 0 1 1 27.638-27.638 27.64 27.64 0 0 1-27.638 27.638"></path><path fill="#fff" d="M351.586 398.984h-8.18v-8.18a2.726 2.726 0 1 0-5.452 0v8.18h-8.179a2.726 2.726 0 1 0 0 5.452h8.18v8.18a2.726 2.726 0 1 0 5.452 0v-8.18h8.179a2.726 2.726 0 1 0 0-5.452"></path><path fill="#589ff8" d="M327.887 228.266h-105.01a8.076 8.076 0 0 1-8.067-8.066v-95.867a8.075 8.075 0 0 1 8.067-8.067h105.01a8.075 8.075 0 0 1 8.066 8.067V220.2a8.076 8.076 0 0 1-8.066 8.066"></path><circle cx="253.816" cy="156.618" r="13.089" fill="#589ff8"></circle><path fill="#589ff8" d="M306.139 185.602h-61.514a3.898 3.898 0 1 1 0-7.795h61.514a3.898 3.898 0 1 1 0 7.795m-31.831 15.402h-29.683a3.898 3.898 0 1 1 0-7.796h29.683a3.898 3.898 0 1 1 0 7.796"></path><path fill="#589ff8" d="M327.887 228.266h-105.01a8.076 8.076 0 0 1-8.067-8.066v-95.867a8.075 8.075 0 0 1 8.067-8.067h105.01a8.075 8.075 0 0 1 8.066 8.067V220.2a8.076 8.076 0 0 1-8.066 8.066" opacity=".5"></path><circle cx="253.816" cy="156.618" r="13.089" fill="#fff"></circle><path fill="#fff" d="M306.139 185.602h-61.514a3.898 3.898 0 1 1 0-7.795h61.514a3.898 3.898 0 1 1 0 7.795m-31.831 15.402h-29.683a3.898 3.898 0 1 1 0-7.796h29.683a3.898 3.898 0 1 1 0 7.796"></path><circle cx="225.043" cy="115.951" r="21" fill="#ff6584"></circle><path fill="#ccc" d="M282.67 555.785a1.186 1.186 0 0 1-1.19 1.19H1.19a1.19 1.19 0 0 1 0-2.38h280.29a1.187 1.187 0 0 1 1.19 1.19"></path><path fill="#ffb6b6" d="M220.555 171.576a9.77 9.77 0 0 1-5.759 12.435 9.6 9.6 0 0 1-1.635.451l-5.547 33.96-13.01-12.013 7.262-30.407a9.806 9.806 0 0 1 8.59-10.76 9.55 9.55 0 0 1 10.099 6.334"></path><path fill="#3f3d56" d="M124.54 248.524s10.098-13.341 46.74-12.976l20.797-7.556 4.753-43.57 16.636 3.96-2.377 53.87-35.648 20.596-46.739 9.506Z"></path><circle cx="119.175" cy="198.983" r="21.747" fill="#ffb6b6" data-name="ab6171fa-7d69-4734-b81c-8dff60f9761b"></circle><path fill="#3f3d56" d="M82.367 363.878a.4.4 0 0 1-.114-.016c-.401-.112-.719-.2.73-12.73l1.564-9.903-1.526-8.744-2.568-2.568 4.127-4.127 3.463-9.838-5.993-8.88-6.875-36.317a28.97 28.97 0 0 1 15.91-31.478l7.958-2.325 2.896-5.31a9.52 9.52 0 0 1 8.286-4.962l14.573-.11a9.52 9.52 0 0 1 7.617 3.716l5.084 6.609 21.082 7.161-3.495 75.322a5.233 5.233 0 0 1 .359 7.695c-.22.221-.393.401-.5.52-.356.505.31 4.275 1.134 7.475l1.056 4.902a3.013 3.013 0 0 0-.548 4.398l1.347 1.59a7.6 7.6 0 0 1-6.508 8.536c-19.267 2.622-68.958 9.384-69.059 9.384"></path><path fill="#2f2e41" d="M113.612 219.665q-.14-.307-.278-.615c.036 0 .07.006.106.007Zm-16.789-41.441a6.05 6.05 0 0 1 3.792-1.64c1.406.046 2.832 1.316 2.54 2.693a22.35 22.35 0 0 1 26.896-10.085c3.495 1.233 6.922 3.7 7.725 7.318a6.6 6.6 0 0 0 .83 2.702 3.08 3.08 0 0 0 3.283.832l.034-.01a1.028 1.028 0 0 1 1.242 1.45l-.989 1.844a7.9 7.9 0 0 0 3.776-.08 1.027 1.027 0 0 1 1.09 1.598 17.9 17.9 0 0 1-14.269 7.334c-3.951-.024-7.943-1.386-11.789-.477a10.24 10.24 0 0 0-6.887 14.375c-1.182-1.292-3.466-.986-4.674.28a6.4 6.4 0 0 0-1.4 4.906 22.8 22.8 0 0 0 2.337 7.638 22.836 22.836 0 0 1-13.537-40.678"></path><path fill="#ffb6b6" d="M90.84 395.068a9.77 9.77 0 0 1-2.303-13.509 9.6 9.6 0 0 1 1.092-1.298l-14.675-31.123 17.527 2.525 11.249 29.167a9.806 9.806 0 0 1-.98 13.733 9.55 9.55 0 0 1-11.91.505"></path><path fill="#3f3d56" d="m86.395 378.074-23.352-52.483-.234-41.452 7.361-22.39a23.925 23.925 0 0 1 30.828-15.04l.162.058.068.158c.272.635 6.446 15.907-11.867 47.323l-3.686 21.496 12.933 49.274Z"></path>',37)]))}const Zs={render:Qs},$s={width:24,height:24,body:'<path fill="currentColor" d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0v1Zm-2 0V9A5 5 0 0 0 7 9v1h10Zm-6 4v4h2v-4h-2Z"/>'},js={width:24,height:24,body:'<path fill="currentColor" d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2Zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"/>'},Os={class:"select-none"},Gs=["src"],Ws={class:"flex-c absolute right-5 top-3"},Ys={class:"check-en"},Js={class:"login-container"},Ks={class:"img"},Xs={class:"login-box"},ea={class:"login-form"},ta={class:"outline-none"},sa={class:"w-full h-[20px] flex justify-between items-center"},aa={class:"flex"},ia={class:"w-full h-[20px] flex justify-between items-center"},la={class:"w-full flex justify-evenly"},na=["title"],ra=Pe({name:"Login",__name:"index",setup(t){let e=k=>Gt(k);const s=q(""),i=q(7),l=Zt(),u=q(!1),h=q(!1),d=q(!1),o=q(),y=zt(()=>H().currentPage);let{locale:E,overallStyle:R}=Ke();const{initStorage:b}=qs();b();const{dataTheme:m,dataThemeChange:f}=Rt();f(R.value);const{title:C,getDropdownItemStyle:P,getDropdownItemClass:g}=Nt(),{translationCh:I,translationEn:se}=Bt(),N=Ut({username:"admin",password:"admin123",verifyCode:""}),ae=k=>S(this,null,function*(){k&&(yield k.validate(c=>{c&&(u.value=!0,H().loginByUsername({username:N.username,password:"admin123"}).then(ye=>{if(ye.success)return Wt().then(()=>{d.value=!0,l.push(Xe(!0).path).then(()=>{$e("登录成功",{type:"success"})}).finally(()=>d.value=!1)});$e("登录失败",{type:"error"})}).finally(()=>u.value=!1))}))}),yt=Yt(k=>ae(k),1e3,!0);return Qt(document,"keypress",({code:k})=>{["Enter","NumpadEnter"].includes(k)&&!d.value&&!u.value&&yt(o.value)}),te(s,k=>{H().SET_VERIFYCODE(k)}),te(h,k=>{H().SET_ISREMEMBERED(k)}),te(i,k=>{H().SET_LOGINDAY(k)}),(k,c)=>{const ye=D("el-switch"),ge=Jt,De=D("el-dropdown-item"),gt=D("el-dropdown-menu"),vt=D("el-dropdown"),bt=Ls,ve=D("el-input"),Q=D("el-form-item"),_t=ls,wt=D("el-checkbox"),be=D("el-button"),Ct=D("el-form"),xt=D("el-divider"),St=qt,Tt=$t("tippy");return T(),B("div",Os,[x("img",{src:n(Hs),class:"wave"},null,8,Gs),x("div",Ws,[p(ye,{modelValue:n(m),"onUpdate:modelValue":c[0]||(c[0]=_=>ne(m)?m.value=_:null),"inline-prompt":"","active-icon":n(Dt),"inactive-icon":n(Lt),onChange:n(f)},null,8,["modelValue","active-icon","inactive-icon","onChange"]),p(vt,{trigger:"click"},{dropdown:v(()=>[p(gt,{class:"translation"},{default:v(()=>[p(De,{style:Ce(n(P)(n(E),"zh")),class:Be(["dark:!text-white",n(g)(n(E),"zh")]),onClick:n(I)},{default:v(()=>[re(p(ge,{class:"check-zh",icon:n(He)},null,8,["icon"]),[[Ue,n(E)==="zh"]]),c[9]||(c[9]=$(" 简体中文 "))]),_:1},8,["style","class","onClick"]),p(De,{style:Ce(n(P)(n(E),"en")),class:Be(["dark:!text-white",n(g)(n(E),"en")]),onClick:n(se)},{default:v(()=>[re(x("span",Ys,[p(ge,{icon:n(He)},null,8,["icon"])],512),[[Ue,n(E)==="en"]]),c[10]||(c[10]=$(" English "))]),_:1},8,["style","class","onClick"])]),_:1})]),default:v(()=>[p(n(At),{class:"hover:text-primary hover:!bg-[transparent] w-[20px] h-[20px] ml-1.5 cursor-pointer outline-none duration-300"})]),_:1})]),x("div",Js,[x("div",Ks,[(T(),L(ze(n(e)(n(Zs)))))]),x("div",Xs,[x("div",ea,[(T(),L(ze(n(e)(n(Bs))),{class:"avatar"})),p(n(F),null,{default:v(()=>[x("h2",ta,[p(bt,{options:{strings:[n(C)],cursor:!1,speed:100}},null,8,["options"])])]),_:1}),n(y)===0?(T(),L(Ct,{key:0,ref_key:"ruleFormRef",ref:o,model:n(N),rules:n(Xt),size:"large"},{default:v(()=>[p(n(F),{delay:100},{default:v(()=>[p(Q,{rules:[{required:!0,message:"请输入账号",trigger:"blur"}],prop:"username"},{default:v(()=>[p(ve,{modelValue:n(N).username,"onUpdate:modelValue":c[1]||(c[1]=_=>n(N).username=_),clearable:"",placeholder:"账号","prefix-icon":n(Fe)(n(js))},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1}),p(n(F),{delay:150},{default:v(()=>[p(Q,{prop:"password"},{default:v(()=>[p(ve,{modelValue:n(N).password,"onUpdate:modelValue":c[2]||(c[2]=_=>n(N).password=_),clearable:"","show-password":"",placeholder:"密码","prefix-icon":n(Fe)(n($s))},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1}),p(n(F),{delay:200},{default:v(()=>[p(Q,{prop:"verifyCode"},{default:v(()=>[p(ve,{modelValue:n(N).verifyCode,"onUpdate:modelValue":c[4]||(c[4]=_=>n(N).verifyCode=_),clearable:"",placeholder:"验证码"},{append:v(()=>[p(_t,{code:n(s),"onUpdate:code":c[3]||(c[3]=_=>ne(s)?s.value=_:null)},null,8,["code"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),p(n(F),{delay:250},{default:v(()=>[p(Q,null,{default:v(()=>[x("div",sa,[p(wt,{modelValue:n(h),"onUpdate:modelValue":c[6]||(c[6]=_=>ne(h)?h.value=_:null),name:"checkbox"},{default:v(()=>[x("span",aa,[re(x("select",{"onUpdate:modelValue":c[5]||(c[5]=_=>ne(i)?i.value=_:null),name:"select",style:Ce({width:n(i)<10?"10px":"16px",outline:"none",background:"none",appearance:"none"})},c[11]||(c[11]=[x("option",{value:"1"},"1",-1),x("option",{value:"7"},"7",-1),x("option",{value:"30"},"30",-1)]),4),[[jt,n(i)]]),c[12]||(c[12]=$(" 天内免登录 ")),re(p(ge,{icon:n(Vt),class:"ml-1"},null,8,["icon"]),[[Tt,{content:"勾选并登录后，规定天数内无需输入用户名和密码会自动登入系统",placement:"top"}]])])]),_:1},8,["modelValue"]),p(be,{link:"",type:"primary",onClick:c[7]||(c[7]=_=>n(H)().SET_CURRENTPAGE(4))},{default:v(()=>c[13]||(c[13]=[$(" 忘记密码? ")])),_:1})]),p(be,{class:"w-full mt-4",size:"default",type:"primary",loading:n(u),disabled:n(d),onClick:c[8]||(c[8]=_=>ae(n(o)))},{default:v(()=>c[14]||(c[14]=[$(" 登录 ")])),_:1},8,["loading","disabled"])]),_:1})]),_:1}),p(n(F),{delay:300},{default:v(()=>[p(Q,null,{default:v(()=>[x("div",ia,[(T(!0),B(Qe,null,Ze(n(As),(_,ie)=>(T(),L(be,{key:ie,class:"w-full mt-4",size:"default",onClick:oa=>n(H)().SET_CURRENTPAGE(ie+1)},{default:v(()=>[$(Ot(_.title),1)]),_:2},1032,["onClick"]))),128))])]),_:1})]),_:1})]),_:1},8,["model","rules"])):Z("",!0),n(y)===0?(T(),L(n(F),{key:1,delay:350},{default:v(()=>[p(Q,null,{default:v(()=>[p(xt,null,{default:v(()=>c[15]||(c[15]=[x("p",{class:"text-gray-500 text-xs"},"第三方登录",-1)])),_:1}),x("div",la,[(T(!0),B(Qe,null,Ze(n(Vs),(_,ie)=>(T(),B("span",{key:ie,title:_.title},[p(St,{icon:`ri:${_.icon}-fill`,width:"20",class:"cursor-pointer text-gray-500 hover:text-blue-400"},null,8,["icon"])],8,na))),128))])]),_:1})]),_:1})):Z("",!0),n(y)===1?(T(),L(es,{key:2})):Z("",!0),n(y)===2?(T(),L(as,{key:3})):Z("",!0),n(y)===3?(T(),L(ts,{key:4})):Z("",!0),n(y)===4?(T(),L(ss,{key:5})):Z("",!0)])])])])}}}),ba=Kt(ra,[["__scopeId","data-v-95d0def3"]]);export{ba as default};