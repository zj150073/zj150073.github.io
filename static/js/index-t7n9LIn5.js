var St=Object.defineProperty,Tt=Object.defineProperties;var kt=Object.getOwnPropertyDescriptors;var De=Object.getOwnPropertySymbols;var Mt=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable;var Le=t=>{throw TypeError(t)};var _e=(t,e,s)=>e in t?St(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,ie=(t,e)=>{for(var s in e||(e={}))Mt.call(e,s)&&_e(t,s,e[s]);if(De)for(var s of De(e))It.call(e,s)&&_e(t,s,e[s]);return t},Ae=(t,e)=>Tt(t,kt(e));var M=(t,e,s)=>_e(t,typeof e!="symbol"?e+"":e,s),Ve=(t,e,s)=>e.has(t)||Le("Cannot "+s);var w=(t,e,s)=>(Ve(t,e,"read from private field"),s?s.call(t):e.get(t)),be=(t,e,s)=>e.has(t)?Le("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);var r=(t,e,s)=>(Ve(t,e,"access private method"),s);var x=(t,e,s)=>new Promise((i,l)=>{var u=o=>{try{h(s.next(o))}catch(v){l(v)}},d=o=>{try{h(s.throw(o))}catch(v){l(v)}},h=o=>o.done?i(o.value):Promise.resolve(o.value).then(u,d);h((s=s.apply(t,e)).next())});import{m as Pt,j as Rt,q as Nt,g as Dt,o as Lt,p as At,k as qe,l as Vt,u as He,d as qt,_ as Ht,c as Ft,f as Bt,r as zt}from"./dark-mN0ATrwh.js";import"./base-Djetyn8l.js";import{E as Ut,_ as Qt}from"./LoginQrCode.vuevuetypescriptsetuptruelang-C3UfOM-c.js";import{E as Zt,l as Ot,m as Fe,a as jt}from"./verifyCode-Ca0jRCeS.js";import{E as $t}from"./el-button-C7s5NPv-.js";import{E as Gt,_ as Wt}from"./LoginRegist.vuevuetypescriptsetuptruelang-8dH0vBCU.js";import{d as Me,x as L,G as Je,A as ee,o as E,c as B,b as m,ad as Xe,aO as Jt,am as Ye,e as C,a as Xt,y as Yt,ax as Kt,X as es,aP as ts,u as n,aw as le,h as g,g as R,C as Be,J as Q,i as ss,r as as,B as we,E as ze,w as ne,a1 as Ue,f as Z,aQ as is,aR as q,a2 as Qe,ar as Ze,au as ls,aS as ns,aI as rs,t as os}from"./index-CsOn3loA.js";import{E as us}from"./el-input-B_TAVX71.js";import{M as H}from"./motion-B7laQuqg.js";import{_ as ds}from"./LoginPhone.vuevuetypescriptsetuptruelang-CAjCsUfT.js";import{_ as hs}from"./LoginUpdate.vuevuetypescriptsetuptruelang-zVCCtg3E.js";import{_ as cs}from"./plugin-vueexport-helper-DlAUqK2U.js";import"./use-form-item-DsMzyxQr.js";import"./el-badge-Cx7F5Qlr.js";const fs=Me({name:"ReImageVerify",__name:"index",props:{code:{default:""}},emits:["update:code"],setup(t,{expose:e,emit:s}){const i=t,l=s,u=L(),d=L("");function h(p){d.value=p}function o(p,c){return Math.floor(Math.random()*(c-p)+p)}function v(p,c){const _=o(p,c),T=o(p,c),V=o(p,c);return`rgb(${_},${T},${V})`}function A(p,c,_){let T="";const V="0123456789",y=p.getContext("2d");if(!y)return T;y.fillStyle=v(180,230),y.fillRect(0,0,c,_);for(let I=0;I<4;I+=1){const te=V[o(0,V.length)];T+=te;const P=o(18,41),se=o(-30,30);y.font=`${P}px Simhei`,y.textBaseline="top",y.fillStyle=v(80,150),y.save(),y.translate(30*I+15,15),y.rotate(se*Math.PI/180),y.fillText(te,-10,-15),y.restore()}for(let I=0;I<5;I+=1)y.beginPath(),y.moveTo(o(0,c),o(0,_)),y.lineTo(o(0,c),o(0,_)),y.strokeStyle=v(180,230),y.closePath(),y.stroke();for(let I=0;I<41;I+=1)y.beginPath(),y.arc(o(0,c),o(0,_),1,0,2*Math.PI),y.closePath(),y.fillStyle=v(150,200),y.fill();return T}function k(){u.value&&(d.value=A(u.value,120,40))}return Je(()=>{k()}),ee(()=>i.code,p=>{h(p)}),ee(d,p=>{l("update:code",p)}),e({getImgCode:k}),(p,c)=>(E(),B("canvas",{ref_key:"domRef",ref:u,width:"120",height:"40",class:"cursor-pointer",onClick:k},null,512))}}),ps=fs,Ke=t=>Array.isArray(t),et=t=>Ke(t)?t:[t];let ms=function(t){let e=function(c){return et(c).forEach(_=>{var T;return p.set(Symbol((T=_.char)==null?void 0:T.innerText),l(ie({},_)))}),this},s=()=>o().filter(c=>c.typeable),i=function(c,_){let T=[...p.keys()];p.set(T[c],l(_))},l=c=>(c.shouldPauseCursor=function(){return!!(this.typeable||this.cursorable||this.deletable)},c),u=function(){p.forEach(c=>delete c.done)},d=function(){p=new Map,e(t)},h=()=>p,o=()=>Array.from(p.values()),v=c=>p.delete(c),A=(c=!1)=>c?o():o().filter(_=>!_.done),k=(c,_=!1)=>_?p.delete(c):p.get(c).done=!0,p=new Map;return e(t),{add:e,set:i,wipe:d,done:k,reset:u,destroy:v,getItems:A,getQueue:h,getTypeable:s}};const tt="data-typeit-id",z="ti-cursor",ys="END",vs={started:!1,completed:!1,frozen:!1,destroyed:!1},j={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(t=>({opacity:t})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},gs=`[${tt}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`,oe=t=>document.createElement(t),Ie=t=>document.createTextNode(t),st=(t,e="")=>{let s=oe("style");s.id=e,s.appendChild(Ie(t)),document.head.appendChild(s)},Oe=t=>(Ke(t)||(t=[t/2,t/2]),t),je=(t,e)=>Math.abs(Math.random()*(t+e-(t-e))+(t-e));let $e=t=>t/2;function _s(t){let{speed:e,deleteSpeed:s,lifeLike:i}=t;return s=s!==null?s:e/3,i?[je(e,$e(e)),je(s,$e(s))]:[e,s]}const at=t=>Array.from(t);let Pe=t=>([...t.childNodes].forEach(e=>{if(e.nodeValue){[...e.nodeValue].forEach(s=>{e.parentNode.insertBefore(Ie(s),e)}),e.remove();return}Pe(e)}),t);const it=t=>{let e=document.implementation.createHTMLDocument();return e.body.innerHTML=t,Pe(e.body)};function lt(t,e=!1,s=!1){let i=t.querySelector(`.${z}`),l=document.createTreeWalker(t,NodeFilter.SHOW_ALL,{acceptNode:h=>{var o,v;if(i&&s){if((o=h.classList)!=null&&o.contains(z))return NodeFilter.FILTER_ACCEPT;if(i.contains(h))return NodeFilter.FILTER_REJECT}return(v=h.classList)!=null&&v.contains(z)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),u,d=[];for(;u=l.nextNode();)u.originalParent||(u.originalParent=u.parentNode),d.push(u);return e?d.reverse():d}function bs(t){return lt(it(t))}function ws(t,e=!0){return e?bs(t):at(t).map(Ie)}const Cs=({index:t,newIndex:e,queueItems:s,cleanUp:i})=>{for(let l=t+1;l<e+1;l++)i(s[l][0])},nt=t=>Number.isInteger(t),Ge=({queueItems:t,selector:e,cursorPosition:s,to:i})=>{if(nt(e))return e*-1;let l=new RegExp(ys,"i").test(i),u=e?[...t].reverse().findIndex(({char:h})=>{let o=h.parentElement,v=o.matches(e);return l&&v?!0:v&&o.firstChild.isSameNode(h)}):-1;u<0&&(u=l?0:t.length-1);let d=l?0:1;return u-s+d},xs=t=>(t.forEach(clearTimeout),[]),re=(t,e)=>new Array(e).fill(t);let ce=t=>new Promise(e=>{requestAnimationFrame(()=>x(void 0,null,function*(){e(yield t())}))}),rt=t=>t==null?void 0:t.getAnimations().find(e=>e.id===t.dataset.tiAnimationId),ot=({cursor:t,frames:e,options:s})=>{let i=t.animate(e,s);return i.pause(),i.id=t.dataset.tiAnimationId,ce(()=>{ce(()=>{i.play()})}),i},Es=({cursor:t,options:e,cursorOptions:s})=>{if(!t||!s)return;let i=rt(t),l;i&&(e.delay=i.effect.getComputedTiming().delay,l=i.currentTime,i.cancel());let u=ot({cursor:t,frames:s.animation.frames,options:e});return l&&(u.currentTime=l),u},We=t=>{var e;return(e=t.func)==null?void 0:e.call(null)},Ss=u=>x(void 0,[u],function*({index:t,queueItems:e,wait:s,cursor:i,cursorOptions:l}){let d=e[t][1],h=[],o=t,v=d,A=()=>v&&!v.delay,k=d.shouldPauseCursor()&&l.autoPause;for(;A();)h.push(v),A()&&o++,v=e[o]?e[o][1]:null;if(h.length)return yield ce(()=>x(void 0,null,function*(){for(let _ of h)yield We(_)})),o-1;let p=rt(i),c;return p&&(c=Ae(ie({},p.effect.getComputedTiming()),{delay:k?l.autoPauseDelay:0})),yield s(()=>x(void 0,null,function*(){p&&k&&p.cancel(),yield ce(()=>{We(d)})}),d.delay),yield Es({cursor:i,options:c,cursorOptions:l}),t});const Ts=(t,e)=>{new IntersectionObserver((i,l)=>{i.forEach(u=>{u.isIntersecting&&(e(),l.unobserve(t))})},{threshold:1}).observe(t)},ks=()=>Math.random().toString().substring(2,9),fe=t=>"value"in t;let Ms=t=>fe(t)?at(t.value):lt(t,!0).filter(e=>!(e.childNodes.length>0)),O=t=>typeof t=="function"?t():t,Re=(t,e=document,s=!1)=>e[`querySelector${s?"All":""}`](t),Is=t=>/body/i.test(t==null?void 0:t.tagName),Ps=(t,e)=>{if(fe(t)){t.value=`${t.value}${e.textContent}`;return}e.innerHTML="";let s=Is(e.originalParent)?t:e.originalParent||t;s.insertBefore(e,Re("."+z,s)||null)};const Rs=t=>/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML),$=(t,e)=>Object.assign({},t,e);let Ns=t=>{var e,s,i;if(typeof t=="object"){let l={},{frames:u,options:d}=j.cursor.animation;return l.animation=t.animation||{},l.animation.frames=((e=t.animation)==null?void 0:e.frames)||u,l.animation.options=$(d,((s=t.animation)==null?void 0:s.options)||{}),l.autoPause=(i=t.autoPause)!=null?i:j.cursor.autoPause,l.autoPauseDelay=t.autoPauseDelay||j.cursor.autoPauseDelay,l}return t===!0?j.cursor:t};const Ds=(t,e)=>{if(!t)return;let s=t.parentNode;(s.childNodes.length>1||s.isSameNode(e)?t:s).remove()},Ls=(t,e,s)=>{let i=e[s-1],l=Re(`.${z}`,t);t=(i==null?void 0:i.parentNode)||t,t.insertBefore(l,i||null)};function As(t){return typeof t=="string"?Re(t):t}let Vs={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},qs=(t,e)=>{let i=`${`[${tt}='${t}']`} .${z}`,l=getComputedStyle(e),u=Object.entries(Vs).reduce((d,[h,o])=>`${d} ${h}: var(--ti-cursor-${h}, ${o||l[h]});`,"");st(`${i} { display: inline-block; width: 0; ${u} }`,t)};function Hs(t){return t.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/)}let Fs=(t,e,s)=>Math.min(Math.max(e+t,0),s.length),Bs=(t,e,s)=>new Promise(i=>{let l=()=>x(void 0,null,function*(){yield t(),i()});s.push(setTimeout(l,e||0))});var a,ut,G,Ce,dt,xe,Ee,Se,ue,N,ht,W,J,ct,pe,ft,pt,Te,de,X,he,F,Y,K,ke,D;class zs{constructor(e,s={}){be(this,a);M(this,"element");M(this,"timeouts");M(this,"cursorPosition");M(this,"predictedCursorPosition");M(this,"statuses",{started:!1,completed:!1,frozen:!1,destroyed:!1});M(this,"opts");M(this,"id");M(this,"queue");M(this,"cursor");M(this,"unfreeze",()=>{});M(this,"is",function(e){return this.statuses[e]});be(this,pe,e=>{var s;e.cursor=Ns((s=e.cursor)!=null?s:j.cursor),this.opts.strings=r(this,a,ft).call(this,et(this.opts.strings)),this.opts=$(this.opts,{html:!w(this,a,K)&&this.opts.html,nextStringDelay:Oe(this.opts.nextStringDelay),loopDelay:Oe(this.opts.loopDelay)})});this.opts=$(j,s),this.element=As(e),this.timeouts=[],this.cursorPosition=0,this.unfreeze=()=>{},this.predictedCursorPosition=null,this.statuses=$({},vs),this.id=ks(),this.queue=ms([{delay:this.opts.startDelay}]),w(this,pe).call(this,s),this.cursor=r(this,a,pt).call(this),this.element.dataset.typeitId=this.id,st(gs),this.opts.strings.length&&r(this,a,ct).call(this)}go(){return this.statuses.started?this:(r(this,a,Se).call(this),this.opts.waitUntilVisible?(Ts(this.element,r(this,a,G).bind(this)),this):(r(this,a,G).call(this),this))}destroy(e=!0){this.timeouts=xs(this.timeouts),O(e)&&this.cursor&&r(this,a,he).call(this,this.cursor),this.statuses.destroyed=!0}reset(e){!this.is("destroyed")&&this.destroy(),e?(this.queue.wipe(),e(this)):this.queue.reset(),this.cursorPosition=0;for(let s in this.statuses)this.statuses[s]=!1;return this.element[r(this,a,ue).call(this)?"value":"innerHTML"]="",this}type(e,s={}){e=O(e);let{instant:i}=s,l=r(this,a,W).call(this,s),d=ws(e,this.opts.html).map(o=>({func:()=>r(this,a,de).call(this,o),char:o,delay:i||Rs(o)?0:r(this,a,F).call(this),typeable:o.nodeType===Node.TEXT_NODE})),h=[l[0],{func:()=>x(this,null,function*(){return yield this.opts.beforeString(e,this)})},...d,{func:()=>x(this,null,function*(){return yield this.opts.afterString(e,this)})},l[1]];return r(this,a,N).call(this,h,s)}break(e={}){return r(this,a,N).call(this,{func:()=>r(this,a,de).call(this,oe("BR")),typeable:!0},e)}move(e,s={}){e=O(e);let i=r(this,a,W).call(this,s),{instant:l,to:u}=s,d=Ge({queueItems:this.queue.getTypeable(),selector:e===null?"":e,to:u,cursorPosition:w(this,a,Y)}),h=d<0?-1:1;return this.predictedCursorPosition=w(this,a,Y)+d,r(this,a,N).call(this,[i[0],...re({func:()=>r(this,a,Ce).call(this,h),delay:l?0:r(this,a,F).call(this),cursorable:!0},Math.abs(d)),i[1]],s)}exec(e,s={}){let i=r(this,a,W).call(this,s);return r(this,a,N).call(this,[i[0],{func:()=>e(this)},i[1]],s)}options(e,s={}){return e=O(e),r(this,a,J).call(this,e),r(this,a,N).call(this,{},s)}pause(e,s={}){return r(this,a,N).call(this,{delay:O(e)},s)}delete(e=null,s={}){e=O(e);let i=r(this,a,W).call(this,s),l=e,{instant:u,to:d}=s,h=this.queue.getTypeable(),o=l===null?h.length:nt(l)?l:Ge({queueItems:h,selector:l,cursorPosition:w(this,a,Y),to:d});return r(this,a,N).call(this,[i[0],...re({func:r(this,a,X).bind(this),delay:u?0:r(this,a,F).call(this,1),deletable:!0},o),i[1]],s)}freeze(){this.statuses.frozen=!0}flush(e=()=>{}){return r(this,a,Se).call(this),r(this,a,G).call(this,!1).then(e),this}getQueue(){return this.queue}getOptions(){return this.opts}updateOptions(e){return r(this,a,J).call(this,e)}getElement(){return this.element}empty(e={}){return r(this,a,N).call(this,{func:r(this,a,ut).bind(this)},e)}}a=new WeakSet,ut=function(){return x(this,null,function*(){if(r(this,a,ue).call(this)){this.element.value="";return}w(this,a,D).forEach(r(this,a,he).bind(this))})},G=function(e=!0){return x(this,null,function*(){this.statuses.started=!0;let s=i=>{this.queue.done(i,!e)};try{let i=[...this.queue.getQueue()];for(let u=0;u<i.length;u++){let[d,h]=i[u];if(!h.done){if(!h.deletable||h.deletable&&w(this,a,D).length){let o=yield r(this,a,xe).call(this,u,i);Cs({index:u,newIndex:o,queueItems:i,cleanUp:s}),u=o}s(d)}}if(!e)return this;if(this.statuses.completed=!0,yield this.opts.afterComplete(this),!this.opts.loop)throw"";let l=this.opts.loopDelay;r(this,a,Ee).call(this,()=>x(this,null,function*(){yield r(this,a,dt).call(this,l[0]),r(this,a,G).call(this)}),l[1])}catch(i){}return this})},Ce=function(e){return x(this,null,function*(){this.cursorPosition=Fs(e,this.cursorPosition,w(this,a,D)),Ls(this.element,w(this,a,D),this.cursorPosition)})},dt=function(e){return x(this,null,function*(){let s=w(this,a,Y);s&&(yield r(this,a,Ce).call(this,{value:s}));let i=w(this,a,D).map(l=>[Symbol(),{func:r(this,a,X).bind(this),delay:r(this,a,F).call(this,1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let l=0;l<i.length;l++)yield r(this,a,xe).call(this,l,i);this.queue.reset(),this.queue.set(0,{delay:e})})},xe=function(e,s){return Ss({index:e,queueItems:s,wait:r(this,a,Ee).bind(this),cursor:this.cursor,cursorOptions:this.opts.cursor})},Ee=function(e,s,i=!1){return x(this,null,function*(){this.statuses.frozen&&(yield new Promise(l=>{this.unfreeze=()=>{this.statuses.frozen=!1,l()}})),i||(yield this.opts.beforeStep(this)),yield Bs(e,s,this.timeouts),i||(yield this.opts.afterStep(this))})},Se=function(){return x(this,null,function*(){if(!r(this,a,ue).call(this)&&this.cursor&&this.element.appendChild(this.cursor),w(this,a,ke)){qs(this.id,this.element),this.cursor.dataset.tiAnimationId=this.id;let{animation:e}=this.opts.cursor,{frames:s,options:i}=e;ot({frames:s,cursor:this.cursor,options:ie({duration:this.opts.cursorSpeed},i)})}})},ue=function(){return fe(this.element)},N=function(e,s){return this.queue.add(e),r(this,a,ht).call(this,s),this},ht=function(e={}){let s=e.delay;s&&this.queue.add({delay:s})},W=function(e={}){return[{func:()=>r(this,a,J).call(this,e)},{func:()=>r(this,a,J).call(this,this.opts)}]},J=function(e){return x(this,null,function*(){this.opts=$(this.opts,e)})},ct=function(){let e=this.opts.strings.filter(s=>!!s);e.forEach((s,i)=>{if(this.type(s),i+1===e.length)return;let l=this.opts.breakLines?[{func:()=>r(this,a,de).call(this,oe("BR")),typeable:!0}]:re({func:r(this,a,X).bind(this),delay:r(this,a,F).call(this,1)},this.queue.getTypeable().length);r(this,a,Te).call(this,l)})},pe=new WeakMap,ft=function(e){let s=this.element.innerHTML;return s?(this.element.innerHTML="",this.opts.startDelete?(this.element.innerHTML=s,Pe(this.element),r(this,a,Te).call(this,re({func:r(this,a,X).bind(this),delay:r(this,a,F).call(this,1),deletable:!0},w(this,a,D).length)),e):Hs(s).concat(e)):e},pt=function(){if(w(this,a,K))return null;let e=oe("span");return e.className=z,w(this,a,ke)?(e.innerHTML=it(this.opts.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)},Te=function(e){let s=this.opts.nextStringDelay;this.queue.add([{delay:s[0]},...e,{delay:s[1]}])},de=function(e){Ps(this.element,e)},X=function(){w(this,a,D).length&&(w(this,a,K)?this.element.value=this.element.value.slice(0,-1):r(this,a,he).call(this,w(this,a,D)[this.cursorPosition]))},he=function(e){Ds(e,this.element)},F=function(e=0){return _s(this.opts)[e]},Y=function(){var e;return(e=this.predictedCursorPosition)!=null?e:this.cursorPosition},K=function(){return fe(this.element)},ke=function(){return!!this.opts.cursor&&!w(this,a,K)},D=function(){return Ms(this.element)};const Us=Me({name:"TypeIt",props:{options:{type:Object,default:()=>({})}},setup(t,{slots:e,expose:s}){function i(d){throw new TypeError(d)}function l(){return navigator.language}const u=L(null);return Je(()=>{const d=u.value.querySelector(".type-it");if(!d){const o=l()==="zh-CN"?"请确保有且只有一个具有class属性为 'type-it' 的元素":"Please make sure that there is only one element with a Class attribute with 'type-it'";i(o)}const h=new zs(d,t.options).go();s({typeIt:h})}),()=>{var d,h;return m("div",{ref:u},[(h=(d=e.default)==null?void 0:d.call(e))!=null?h:m("span",{class:"type-it"},null)])}}}),Qs=Us,Zs=[{title:"手机登录"},{title:"二维码登录"},{title:"注册"}],Os=[{title:"微信登录",icon:"wechat"},{title:"支付宝登录",icon:"alipay"},{title:"QQ登录",icon:"qq"},{title:"微博登录",icon:"weibo"}],js=()=>{const{$storage:t,$config:e}=Xe();return{initStorage:()=>{var i;t.locale||(t.locale={locale:(i=e==null?void 0:e.locale)!=null?i:"zh"}),t.layout||(t.layout={layout:e==null?void 0:e.layout,theme:e==null?void 0:e.theme,darkMode:e==null?void 0:e.darkMode,sidebarStatus:e==null?void 0:e.sidebarStatus,epThemeColor:e==null?void 0:e.epThemeColor,themeColor:e==null?void 0:e.theme,overallStyle:e==null?void 0:e.overallStyle}),t.configure||(t.configure={grey:e==null?void 0:e.grey,weak:e==null?void 0:e.weak,hideTabs:e==null?void 0:e.hideTabs,hideFooter:e.hideFooter,fixedFooter:e.fixedFooter,showLogo:e==null?void 0:e.showLogo,showModel:e==null?void 0:e.showModel,multiTagsCache:e==null?void 0:e.multiTagsCache,stretch:e==null?void 0:e.stretch,hiddenSideBar:e.hiddenSideBar,version:e.version,keepAlive:e.keepAlive,cachingAsyncRoutes:e.cachingAsyncRoutes,tooltipEffect:e.tooltipEffect,menuSearchHistory:e.menuSearchHistory,maxTagsLevel:e.maxTagsLevel,title:e.title,fixedHeader:e.fixedHeader}),Jt().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=[Ye()])}}},$s=""+new URL("../png/bg-oEDCYcDF.png",import.meta.url).href,Gs={xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",class:"icon",viewBox:"0 0 1024 1024"};function Ws(t,e){return E(),B("svg",Gs,e[0]||(e[0]=[C("path",{fill:"#1296db",d:"M513.29 962.25c-49.69 0-97.91-9.74-143.32-28.95-43.85-18.54-83.22-45.09-117.02-78.89s-60.34-73.17-78.89-117.02c-19.21-45.41-28.95-93.63-28.95-143.32 0-67.38 18.94-137.04 56.29-207.05 29.21-54.74 69.74-109.89 120.47-163.89 85.64-91.16 170.24-147.38 173.8-149.73a31.98 31.98 0 0 1 35.25 0c3.56 2.35 88.16 58.58 173.79 149.74 50.73 54.01 91.26 109.15 120.47 163.89 37.35 70.01 56.29 139.67 56.29 207.05 0 49.69-9.74 97.91-28.95 143.32-18.54 43.85-45.09 83.22-78.89 117.02s-73.17 60.34-117.02 78.89c-45.41 19.2-93.63 28.94-143.32 28.94m0-823.01c-28.52 20.79-87.47 66.54-145.68 128.69-72.3 77.2-158.49 196.45-158.49 326.15 0 167.72 136.45 304.17 304.17 304.17S817.46 761.8 817.46 594.08c0-129.7-86.19-248.95-158.49-326.15-58.2-62.15-117.15-107.89-145.68-128.69"},null,-1),C("path",{fill:"#1296db",d:"M514.73 827.23c.01-.32.02-.63.04-.95.52-13.83 10.03-25.64 23.39-29.21 19.51-5.22 49.48-18.12 81.3-49.94 31.92-31.92 44.93-62.1 50.22-81.75 3.62-13.43 15.54-22.93 29.44-23.37l.95-.03c21.09-.67 36.92 19.19 31.45 39.57-.81 3.03-1.74 6.2-2.79 9.49-11.51 35.93-33.65 70.98-64.01 101.35-30.39 30.39-65.39 52.46-101.23 63.84-3.38 1.07-6.8 2.01-10.2 2.83-20.17 4.84-39.35-11.11-38.56-31.83"},null,-1)]))}const Js={render:Ws},Xs={xmlns:"http://www.w3.org/2000/svg",width:"500",height:"380",viewBox:"0 0 897.318 556.975"};function Ys(t,e){return E(),B("svg",Xs,e[0]||(e[0]=[Xt('<path fill="#f2f2f2" d="m217.339 502.047.998-22.434a72.46 72.46 0 0 1 33.795-8.555c-16.231 13.27-14.203 38.85-25.207 56.696a43.58 43.58 0 0 1-31.96 20.14l-13.583 8.317a73.03 73.03 0 0 1 15.393-59.18 70.5 70.5 0 0 1 12.965-12.045c3.253 8.578 7.599 17.06 7.599 17.06"></path><path fill="#cacaca" d="M796.921 36.552H164.598a1.016 1.016 0 0 1 0-2.03h632.324a1.016 1.016 0 0 1 0 2.03"></path><ellipse cx="186.953" cy="11.169" fill="#3f3d56" rx="10.925" ry="11.169"></ellipse><ellipse cx="224.695" cy="11.169" fill="#3f3d56" rx="10.925" ry="11.169"></ellipse><ellipse cx="262.437" cy="11.169" fill="#3f3d56" rx="10.925" ry="11.169"></ellipse><path fill="#3f3d56" d="M774.304 2.768h-26.81a2.03 2.03 0 0 0 0 4.06h26.81a2.03 2.03 0 0 0 0-4.06m0 7.62h-26.81a2.03 2.03 0 0 0 0 4.06h26.81a2.03 2.03 0 0 0 0-4.06m0 7.61h-26.81a2.03 2.03 0 0 0 0 4.06h26.81a2.03 2.03 0 0 0 0-4.06m-117.591 98.143h-434.01a8.07 8.07 0 0 0-8.07 8.06v204.87a8.08 8.08 0 0 0 8.07 8.07h434.01a8.077 8.077 0 0 0 8.06-8.07v-204.87a8.07 8.07 0 0 0-8.06-8.06"></path><path fill="#589ff8" d="M542.073 214.842a8.07 8.07 0 0 0-8.06 8.06v57.87a8.077 8.077 0 0 0 8.06 8.07h122.7v-74Z"></path><path fill="#589ff8" d="M871.088 288.837h-329.01a8.076 8.076 0 0 1-8.067-8.066v-57.868a8.075 8.075 0 0 1 8.067-8.066h329.01a8.075 8.075 0 0 1 8.066 8.066v57.868a8.076 8.076 0 0 1-8.066 8.066" opacity=".5"></path><circle cx="586.571" cy="255.537" r="13.089" fill="#fff"></circle><path fill="#fff" d="M860.894 251.734H624.38a3.898 3.898 0 1 1 0-7.796h236.514a3.898 3.898 0 1 1 0 7.796m-89.831 15.401H624.38a3.898 3.898 0 1 1 0-7.795h146.683a3.898 3.898 0 0 1 0 7.795"></path><path fill="#ffb6b6" d="m151.406 545.537 11.328-.001 5.389-43.693h-16.719z"></path><path fill="#2f2e41" d="M148.517 541.838h3.188l12.449-5.062 6.671 5.061h.001a14.22 14.22 0 0 1 14.217 14.217v.462l-36.526.001Z"></path><path fill="#ffb6b6" d="m49.051 530.809 10.139 5.053 24.314-36.701-14.963-7.458z"></path><path fill="#2f2e41" d="m48.115 526.21 2.854 1.422 13.4 1.022 3.712 7.507h.001a14.22 14.22 0 0 1 6.382 19.066l-.206.413-32.69-16.292Zm108.31-179.114-72.026 1.88 1.253 35.073s-1.253 9.395 1.252 11.9 3.758 2.505 2.506 6.89-4.491 46.273-4.491 46.273-29.562 52.27-28.31 53.522 2.506 0 1.253 3.132-2.505 1.879-1.252 3.132a46 46 0 0 1 3.131 3.757h20.416s1.142-6.263 1.142-6.889 1.252-4.384 1.252-5.01 35.67-38.418 35.67-38.418l7.515-62.631 18.163 61.378s0 53.863 1.253 55.116 1.252.626.626 3.132-3.132 1.878-1.253 3.757 2.505-1.252 1.88 1.88l-.627 3.13 24.062.27s2.506-5.28 1.253-7.159-1.178-1.366.35-4.44 2.155-3.702 1.529-4.328-.626-3.958-.626-3.958-9.031-123.183-9.031-125.062a6.25 6.25 0 0 1 .52-2.818v-2.55l-2.4-9.038Z"></path><path fill="#589ff8" d="M869.68 238.348a27.638 27.638 0 1 1 27.638-27.638 27.64 27.64 0 0 1-27.638 27.638"></path><path fill="#fff" d="M880.586 207.984h-8.18v-8.18a2.726 2.726 0 0 0-5.452 0v8.18h-8.179a2.726 2.726 0 1 0 0 5.452h8.18v8.18a2.726 2.726 0 0 0 5.452 0v-8.18h8.179a2.726 2.726 0 1 0 0-5.452"></path><path fill="#589ff8" d="M447.883 289.212h-105.01a8.08 8.08 0 0 0-8.07 8.07v39.86h121.14v-39.86a8.077 8.077 0 0 0-8.06-8.07"></path><path fill="#589ff8" d="M447.88 401.212H342.87a8.076 8.076 0 0 1-8.067-8.067v-95.867a8.075 8.075 0 0 1 8.067-8.067h105.01a8.075 8.075 0 0 1 8.066 8.067v95.867a8.076 8.076 0 0 1-8.066 8.067" opacity=".5"></path><circle cx="373.808" cy="321.563" r="13.089" fill="#fff"></circle><path fill="#fff" d="M426.131 354.547h-61.514a3.898 3.898 0 1 1 0-7.795h61.514a3.898 3.898 0 1 1 0 7.795M394.3 369.95h-29.683a3.898 3.898 0 0 1 0-7.797H394.3a3.898 3.898 0 0 1 0 7.796"></path><path fill="#589ff8" d="M340.68 429.348a27.638 27.638 0 1 1 27.638-27.638 27.64 27.64 0 0 1-27.638 27.638"></path><path fill="#fff" d="M351.586 398.984h-8.18v-8.18a2.726 2.726 0 1 0-5.452 0v8.18h-8.179a2.726 2.726 0 1 0 0 5.452h8.18v8.18a2.726 2.726 0 1 0 5.452 0v-8.18h8.179a2.726 2.726 0 1 0 0-5.452"></path><path fill="#589ff8" d="M327.887 228.266h-105.01a8.076 8.076 0 0 1-8.067-8.066v-95.867a8.075 8.075 0 0 1 8.067-8.067h105.01a8.075 8.075 0 0 1 8.066 8.067V220.2a8.076 8.076 0 0 1-8.066 8.066"></path><circle cx="253.816" cy="156.618" r="13.089" fill="#589ff8"></circle><path fill="#589ff8" d="M306.139 185.602h-61.514a3.898 3.898 0 1 1 0-7.795h61.514a3.898 3.898 0 1 1 0 7.795m-31.831 15.402h-29.683a3.898 3.898 0 1 1 0-7.796h29.683a3.898 3.898 0 1 1 0 7.796"></path><path fill="#589ff8" d="M327.887 228.266h-105.01a8.076 8.076 0 0 1-8.067-8.066v-95.867a8.075 8.075 0 0 1 8.067-8.067h105.01a8.075 8.075 0 0 1 8.066 8.067V220.2a8.076 8.076 0 0 1-8.066 8.066" opacity=".5"></path><circle cx="253.816" cy="156.618" r="13.089" fill="#fff"></circle><path fill="#fff" d="M306.139 185.602h-61.514a3.898 3.898 0 1 1 0-7.795h61.514a3.898 3.898 0 1 1 0 7.795m-31.831 15.402h-29.683a3.898 3.898 0 1 1 0-7.796h29.683a3.898 3.898 0 1 1 0 7.796"></path><circle cx="225.043" cy="115.951" r="21" fill="#ff6584"></circle><path fill="#ccc" d="M282.67 555.785a1.186 1.186 0 0 1-1.19 1.19H1.19a1.19 1.19 0 0 1 0-2.38h280.29a1.187 1.187 0 0 1 1.19 1.19"></path><path fill="#ffb6b6" d="M220.555 171.576a9.77 9.77 0 0 1-5.759 12.435 9.6 9.6 0 0 1-1.635.451l-5.547 33.96-13.01-12.013 7.262-30.407a9.806 9.806 0 0 1 8.59-10.76 9.55 9.55 0 0 1 10.099 6.334"></path><path fill="#3f3d56" d="M124.54 248.524s10.098-13.341 46.74-12.976l20.797-7.556 4.753-43.57 16.636 3.96-2.377 53.87-35.648 20.596-46.739 9.506Z"></path><circle cx="119.175" cy="198.983" r="21.747" fill="#ffb6b6" data-name="ab6171fa-7d69-4734-b81c-8dff60f9761b"></circle><path fill="#3f3d56" d="M82.367 363.878a.4.4 0 0 1-.114-.016c-.401-.112-.719-.2.73-12.73l1.564-9.903-1.526-8.744-2.568-2.568 4.127-4.127 3.463-9.838-5.993-8.88-6.875-36.317a28.97 28.97 0 0 1 15.91-31.478l7.958-2.325 2.896-5.31a9.52 9.52 0 0 1 8.286-4.962l14.573-.11a9.52 9.52 0 0 1 7.617 3.716l5.084 6.609 21.082 7.161-3.495 75.322a5.233 5.233 0 0 1 .359 7.695c-.22.221-.393.401-.5.52-.356.505.31 4.275 1.134 7.475l1.056 4.902a3.013 3.013 0 0 0-.548 4.398l1.347 1.59a7.6 7.6 0 0 1-6.508 8.536c-19.267 2.622-68.958 9.384-69.059 9.384"></path><path fill="#2f2e41" d="M113.612 219.665q-.14-.307-.278-.615c.036 0 .07.006.106.007Zm-16.789-41.441a6.05 6.05 0 0 1 3.792-1.64c1.406.046 2.832 1.316 2.54 2.693a22.35 22.35 0 0 1 26.896-10.085c3.495 1.233 6.922 3.7 7.725 7.318a6.6 6.6 0 0 0 .83 2.702 3.08 3.08 0 0 0 3.283.832l.034-.01a1.028 1.028 0 0 1 1.242 1.45l-.989 1.844a7.9 7.9 0 0 0 3.776-.08 1.027 1.027 0 0 1 1.09 1.598 17.9 17.9 0 0 1-14.269 7.334c-3.951-.024-7.943-1.386-11.789-.477a10.24 10.24 0 0 0-6.887 14.375c-1.182-1.292-3.466-.986-4.674.28a6.4 6.4 0 0 0-1.4 4.906 22.8 22.8 0 0 0 2.337 7.638 22.836 22.836 0 0 1-13.537-40.678"></path><path fill="#ffb6b6" d="M90.84 395.068a9.77 9.77 0 0 1-2.303-13.509 9.6 9.6 0 0 1 1.092-1.298l-14.675-31.123 17.527 2.525 11.249 29.167a9.806 9.806 0 0 1-.98 13.733 9.55 9.55 0 0 1-11.91.505"></path><path fill="#3f3d56" d="m86.395 378.074-23.352-52.483-.234-41.452 7.361-22.39a23.925 23.925 0 0 1 30.828-15.04l.162.058.068.158c.272.635 6.446 15.907-11.867 47.323l-3.686 21.496 12.933 49.274Z"></path>',37)]))}const Ks={render:Ys},ea={width:24,height:24,body:'<path fill="currentColor" d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0v1Zm-2 0V9A5 5 0 0 0 7 9v1h10Zm-6 4v4h2v-4h-2Z"/>'},ta={width:24,height:24,body:'<path fill="currentColor" d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2Zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"/>'},sa={class:"select-none"},aa=["src"],ia={class:"flex-c absolute right-5 top-3"},la={class:"check-en"},na={class:"login-container"},ra={class:"img"},oa={class:"login-box"},ua={class:"login-form"},da={class:"outline-none"},ha={class:"w-full h-[20px] flex justify-between items-center"},ca={class:"flex"},fa={class:"w-full h-[20px] flex justify-between items-center"},pa={class:"w-full flex justify-evenly"},ma=["title"],ya=Me({name:"Login",__name:"index",setup(t){let e=S=>ls(S);const s=L(""),i=L(7),l=ss(),u=L(!1),d=L(!1),h=L(!1),o=L(),v=Yt(()=>q().currentPage),{initStorage:A}=js();A();const{dataTheme:k,overallStyle:p,dataThemeChange:c}=Pt();c(p.value);const{title:_,getDropdownItemStyle:T,getDropdownItemClass:V}=Rt();let{locale:y}=Xe();const{translationCh:I,translationEn:te}=Kt(),P=es({username:"admin",password:"admin123",verifyCode:""}),se=S=>x(this,null,function*(){S&&(yield S.validate(f=>{f&&(u.value=!0,q().loginByUsername({username:P.username,password:"admin123"}).then(me=>{if(me.success)return ns().then(()=>{h.value=!0,l.push(Ye(!0).path).then(()=>{Fe("登录成功",{type:"success"})}).finally(()=>h.value=!1)});Fe("登录失败",{type:"error"})}).finally(()=>u.value=!1))}))}),mt=rs(S=>se(S),1e3,!0);return ts(document,"keypress",({code:S})=>{["Enter","NumpadEnter"].includes(S)&&!h.value&&!u.value&&mt(o.value)}),ee(s,S=>{q().SET_VERIFYCODE(S)}),ee(d,S=>{q().SET_ISREMEMBERED(S)}),ee(i,S=>{q().SET_LOGINDAY(S)}),(S,f)=>{const me=Nt,ye=Ht,Ne=Ft,yt=Bt,vt=Dt,gt=Qs,ve=us,U=jt,_t=ps,bt=Gt,ge=$t,wt=Zt,Ct=Ut,xt=zt,Et=as("tippy");return E(),B("div",sa,[C("img",{src:n($s),class:"wave"},null,8,aa),C("div",ia,[m(me,{modelValue:n(k),"onUpdate:modelValue":f[0]||(f[0]=b=>le(k)?k.value=b:null),"inline-prompt":"","active-icon":n(Lt),"inactive-icon":n(At),onChange:n(c)},null,8,["modelValue","active-icon","inactive-icon","onChange"]),m(vt,{trigger:"click"},{dropdown:g(()=>[m(yt,{class:"translation"},{default:g(()=>[m(Ne,{style:we(n(T)(n(y),"zh")),class:ze(["dark:!text-white",n(V)(n(y),"zh")]),onClick:n(I)},{default:g(()=>[ne(m(ye,{class:"check-zh",icon:n(qe)},null,8,["icon"]),[[Ue,n(y)==="zh"]]),f[9]||(f[9]=Z(" 简体中文 "))]),_:1},8,["style","class","onClick"]),m(Ne,{style:we(n(T)(n(y),"en")),class:ze(["dark:!text-white",n(V)(n(y),"en")]),onClick:n(te)},{default:g(()=>[ne(C("span",la,[m(ye,{icon:n(qe)},null,8,["icon"])],512),[[Ue,n(y)==="en"]]),f[10]||(f[10]=Z(" English "))]),_:1},8,["style","class","onClick"])]),_:1})]),default:g(()=>[m(n(Vt),{class:"hover:text-primary hover:!bg-[transparent] w-[20px] h-[20px] ml-1.5 cursor-pointer outline-none duration-300"})]),_:1})]),C("div",na,[C("div",ra,[(E(),R(Be(n(e)(n(Ks)))))]),C("div",oa,[C("div",ua,[(E(),R(Be(n(e)(n(Js))),{class:"avatar"})),m(n(H),null,{default:g(()=>[C("h2",da,[m(gt,{options:{strings:[n(_)],cursor:!1,speed:100}},null,8,["options"])])]),_:1}),n(v)===0?(E(),R(wt,{key:0,ref_key:"ruleFormRef",ref:o,model:n(P),rules:n(Ot),size:"large"},{default:g(()=>[m(n(H),{delay:100},{default:g(()=>[m(U,{rules:[{required:!0,message:"请输入账号",trigger:"blur"}],prop:"username"},{default:g(()=>[m(ve,{modelValue:n(P).username,"onUpdate:modelValue":f[1]||(f[1]=b=>n(P).username=b),clearable:"",placeholder:"账号","prefix-icon":n(He)(n(ta))},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1}),m(n(H),{delay:150},{default:g(()=>[m(U,{prop:"password"},{default:g(()=>[m(ve,{modelValue:n(P).password,"onUpdate:modelValue":f[2]||(f[2]=b=>n(P).password=b),clearable:"","show-password":"",placeholder:"密码","prefix-icon":n(He)(n(ea))},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1}),m(n(H),{delay:200},{default:g(()=>[m(U,{prop:"verifyCode"},{default:g(()=>[m(ve,{modelValue:n(P).verifyCode,"onUpdate:modelValue":f[4]||(f[4]=b=>n(P).verifyCode=b),clearable:"",placeholder:"验证码"},{append:g(()=>[m(_t,{code:n(s),"onUpdate:code":f[3]||(f[3]=b=>le(s)?s.value=b:null)},null,8,["code"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),m(n(H),{delay:250},{default:g(()=>[m(U,null,{default:g(()=>[C("div",ha,[m(bt,{modelValue:n(d),"onUpdate:modelValue":f[6]||(f[6]=b=>le(d)?d.value=b:null),name:"checkbox"},{default:g(()=>[C("span",ca,[ne(C("select",{"onUpdate:modelValue":f[5]||(f[5]=b=>le(i)?i.value=b:null),name:"select",style:we({width:n(i)<10?"10px":"16px",outline:"none",background:"none",appearance:"none"})},f[11]||(f[11]=[C("option",{value:"1"},"1",-1),C("option",{value:"7"},"7",-1),C("option",{value:"30"},"30",-1)]),4),[[is,n(i)]]),f[12]||(f[12]=Z(" 天内免登录 ")),ne(m(ye,{icon:n(qt),class:"ml-1"},null,8,["icon"]),[[Et,{content:"勾选并登录后，规定天数内无需输入用户名和密码会自动登入系统",placement:"top"}]])])]),_:1},8,["modelValue"]),m(ge,{link:"",type:"primary",onClick:f[7]||(f[7]=b=>n(q)().SET_CURRENTPAGE(4))},{default:g(()=>f[13]||(f[13]=[Z(" 忘记密码? ")])),_:1})]),m(ge,{class:"w-full mt-4",size:"default",type:"primary",loading:n(u),disabled:n(h),onClick:f[8]||(f[8]=b=>se(n(o)))},{default:g(()=>f[14]||(f[14]=[Z(" 登录 ")])),_:1},8,["loading","disabled"])]),_:1})]),_:1}),m(n(H),{delay:300},{default:g(()=>[m(U,null,{default:g(()=>[C("div",fa,[(E(!0),B(Qe,null,Ze(n(Zs),(b,ae)=>(E(),R(ge,{key:ae,class:"w-full mt-4",size:"default",onClick:va=>n(q)().SET_CURRENTPAGE(ae+1)},{default:g(()=>[Z(os(b.title),1)]),_:2},1032,["onClick"]))),128))])]),_:1})]),_:1})]),_:1},8,["model","rules"])):Q("",!0),n(v)===0?(E(),R(n(H),{key:1,delay:350},{default:g(()=>[m(U,null,{default:g(()=>[m(Ct,null,{default:g(()=>f[15]||(f[15]=[C("p",{class:"text-gray-500 text-xs"},"第三方登录",-1)])),_:1}),C("div",pa,[(E(!0),B(Qe,null,Ze(n(Os),(b,ae)=>(E(),B("span",{key:ae,title:b.title},[m(xt,{icon:`ri:${b.icon}-fill`,width:"20",class:"cursor-pointer text-gray-500 hover:text-blue-400"},null,8,["icon"])],8,ma))),128))])]),_:1})]),_:1})):Q("",!0),n(v)===1?(E(),R(ds,{key:2})):Q("",!0),n(v)===2?(E(),R(Qt,{key:3})):Q("",!0),n(v)===3?(E(),R(Wt,{key:4})):Q("",!0),n(v)===4?(E(),R(hs,{key:5})):Q("",!0)])])])])}}}),Da=cs(ya,[["__scopeId","data-v-cc097a3b"]]);export{Da as default};