var t,e,i,s,n,r,l,o,a,u,h,c,d,f,p,m,y,b,g,v,P,T,w,C,S,E,q,N=Object.defineProperty,I=Object.defineProperties,x=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,M=t=>{throw TypeError(t)},A=(t,e,i)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,$=(t,e)=>{for(var i in e||(e={}))D.call(e,i)&&A(t,i,e[i]);if(L)for(var i of L(e))O.call(e,i)&&A(t,i,e[i]);return t},k=(t,e,i)=>A(t,"symbol"!=typeof e?e+"":e,i),z=(t,e,i)=>e.has(t)||M("Cannot "+i),H=(t,e,i)=>(z(t,e,"read from private field"),i?i.call(t):e.get(t)),V=(t,e,i)=>e.has(t)?M("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),j=(t,e,i)=>(z(t,e,"access private method"),i),F=(t,e,i)=>new Promise(((s,n)=>{var r=t=>{try{o(i.next(t))}catch(e){n(e)}},l=t=>{try{o(i.throw(t))}catch(e){n(e)}},o=t=>t.done?s(t.value):Promise.resolve(t.value).then(r,l);o((i=i.apply(t,e)).next())}));const R=t=>Array.isArray(t),B=t=>R(t)?t:[t];const _="data-typeit-id",W="ti-cursor",U={started:!1,completed:!1,frozen:!1,destroyed:!1},Q={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map((t=>({opacity:t}))),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},J=`[${_}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`,X=t=>document.createElement(t),G=t=>document.createTextNode(t),K=(t,e="")=>{let i=X("style");i.id=e,i.appendChild(G(t)),document.head.appendChild(i)},Y=t=>(R(t)||(t=[t/2,t/2]),t),Z=(t,e)=>Math.abs(Math.random()*(t+e-(t-e))+(t-e));let tt=t=>t/2;const et=t=>Array.from(t);let it=t=>([...t.childNodes].forEach((t=>{if(t.nodeValue)return[...t.nodeValue].forEach((e=>{t.parentNode.insertBefore(G(e),t)})),void t.remove();it(t)})),t);const st=t=>{let e=document.implementation.createHTMLDocument();return e.body.innerHTML=t,it(e.body)};function nt(t,e=!1,i=!1){let s,n=t.querySelector(`.${W}`),r=document.createTreeWalker(t,NodeFilter.SHOW_ALL,{acceptNode:t=>{var e,s;if(n&&i){if(null==(e=t.classList)?void 0:e.contains(W))return NodeFilter.FILTER_ACCEPT;if(n.contains(t))return NodeFilter.FILTER_REJECT}return(null==(s=t.classList)?void 0:s.contains(W))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),l=[];for(;s=r.nextNode();)s.originalParent||(s.originalParent=s.parentNode),l.push(s);return e?l.reverse():l}function rt(t,e=!0){return e?nt(st(t)):et(t).map(G)}const lt=({index:t,newIndex:e,queueItems:i,cleanUp:s})=>{for(let n=t+1;n<e+1;n++)s(i[n][0])},ot=t=>Number.isInteger(t),at=({queueItems:t,selector:e,cursorPosition:i,to:s})=>{if(ot(e))return-1*e;let n=new RegExp("END","i").test(s),r=e?[...t].reverse().findIndex((({char:t})=>{let i=t.parentElement,s=i.matches(e);return!(!n||!s)||s&&i.firstChild.isSameNode(t)})):-1;return r<0&&(r=n?0:t.length-1),r-i+(n?0:1)},ut=(t,e)=>new Array(e).fill(t);let ht=t=>new Promise((e=>{requestAnimationFrame((()=>F(void 0,null,(function*(){e(yield t())}))))})),ct=t=>null==t?void 0:t.getAnimations().find((e=>e.id===t.dataset.tiAnimationId)),dt=({cursor:t,frames:e,options:i})=>{let s=t.animate(e,i);return s.pause(),s.id=t.dataset.tiAnimationId,ht((()=>{ht((()=>{s.play()}))})),s},ft=t=>{var e;return null==(e=t.func)?void 0:e.call(null)},pt=t=>F(void 0,[t],(function*({index:t,queueItems:e,wait:i,cursor:s,cursorOptions:n}){let r=e[t][1],l=[],o=t,a=r,u=()=>a&&!a.delay,h=r.shouldPauseCursor()&&n.autoPause;for(;u();)l.push(a),u()&&o++,a=e[o]?e[o][1]:null;if(l.length)return yield ht((()=>F(void 0,null,(function*(){for(let t of l)yield ft(t)})))),o-1;let c,d=ct(s);var f,p;return d&&(f=$({},d.effect.getComputedTiming()),p={delay:h?n.autoPauseDelay:0},c=I(f,x(p))),yield i((()=>F(void 0,null,(function*(){d&&h&&d.cancel(),yield ht((()=>{ft(r)}))}))),r.delay),yield(({cursor:t,options:e,cursorOptions:i})=>{if(!t||!i)return;let s,n=ct(t);n&&(e.delay=n.effect.getComputedTiming().delay,s=n.currentTime,n.cancel());let r=dt({cursor:t,frames:i.animation.frames,options:e});return s&&(r.currentTime=s),r})({cursor:s,options:c,cursorOptions:n}),t}));const mt=t=>"value"in t;let yt=t=>"function"==typeof t?t():t,bt=(t,e=document,i=!1)=>e["querySelector"+(i?"All":"")](t);const gt=(t,e)=>Object.assign({},t,e);let vt={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"};let Pt=(q=class{constructor(e,i={}){var s;V(this,t),k(this,"element"),k(this,"timeouts"),k(this,"cursorPosition"),k(this,"predictedCursorPosition"),k(this,"statuses",{started:!1,completed:!1,frozen:!1,destroyed:!1}),k(this,"opts"),k(this,"id"),k(this,"queue"),k(this,"cursor"),k(this,"unfreeze",(()=>{})),k(this,"is",(function(t){return this.statuses[t]})),V(this,p,(e=>{var i;e.cursor=(t=>{var e,i,s;if("object"==typeof t){let n={},{frames:r,options:l}=Q.cursor.animation;return n.animation=t.animation||{},n.animation.frames=(null==(e=t.animation)?void 0:e.frames)||r,n.animation.options=gt(l,(null==(i=t.animation)?void 0:i.options)||{}),n.autoPause=null!=(s=t.autoPause)?s:Q.cursor.autoPause,n.autoPauseDelay=t.autoPauseDelay||Q.cursor.autoPauseDelay,n}return!0===t?Q.cursor:t})(null!=(i=e.cursor)?i:Q.cursor),this.opts.strings=j(this,t,m).call(this,B(this.opts.strings)),this.opts=gt(this.opts,{html:!H(this,t,C)&&this.opts.html,nextStringDelay:Y(this.opts.nextStringDelay),loopDelay:Y(this.opts.loopDelay)})})),this.opts=gt(Q,i),this.element="string"==typeof(s=e)?bt(s):s,this.timeouts=[],this.cursorPosition=0,this.unfreeze=()=>{},this.predictedCursorPosition=null,this.statuses=gt({},U),this.id=Math.random().toString().substring(2,9),this.queue=function(t){let e=function(t){return B(t).forEach((t=>{var e;return n.set(Symbol(null==(e=t.char)?void 0:e.innerText),i($({},t)))})),this},i=t=>(t.shouldPauseCursor=function(){return Boolean(this.typeable||this.cursorable||this.deletable)},t),s=()=>Array.from(n.values()),n=new Map;return e(t),{add:e,set:function(t,e){let s=[...n.keys()];n.set(s[t],i(e))},wipe:function(){n=new Map,e(t)},done:(t,e=!1)=>e?n.delete(t):n.get(t).done=!0,reset:function(){n.forEach((t=>delete t.done))},destroy:t=>n.delete(t),getItems:(t=!1)=>t?s():s().filter((t=>!t.done)),getQueue:()=>n,getTypeable:()=>s().filter((t=>t.typeable))}}([{delay:this.opts.startDelay}]),H(this,p).call(this,i),this.cursor=j(this,t,y).call(this),this.element.dataset.typeitId=this.id,K(J),this.opts.strings.length&&j(this,t,f).call(this)}go(){return this.statuses.started?this:(j(this,t,o).call(this),this.opts.waitUntilVisible?(e=this.element,s=j(this,t,i).bind(this),new IntersectionObserver(((t,i)=>{t.forEach((t=>{t.isIntersecting&&(s(),i.unobserve(e))}))}),{threshold:1}).observe(e),this):(j(this,t,i).call(this),this));var e,s}destroy(e=!0){this.timeouts=(this.timeouts.forEach(clearTimeout),[]),yt(e)&&this.cursor&&j(this,t,P).call(this,this.cursor),this.statuses.destroyed=!0}reset(e){!this.is("destroyed")&&this.destroy(),e?(this.queue.wipe(),e(this)):this.queue.reset(),this.cursorPosition=0;for(let t in this.statuses)this.statuses[t]=!1;return this.element[j(this,t,a).call(this)?"value":"innerHTML"]="",this}type(e,i={}){e=yt(e);let{instant:s}=i,n=j(this,t,c).call(this,i),r=rt(e,this.opts.html).map((e=>{return{func:()=>j(this,t,g).call(this,e),char:e,delay:s||(i=e,/<(.+)>(.*?)<\/(.+)>/.test(i.outerHTML))?0:j(this,t,T).call(this),typeable:e.nodeType===Node.TEXT_NODE};var i})),l=[n[0],{func:()=>F(this,null,(function*(){return yield this.opts.beforeString(e,this)}))},...r,{func:()=>F(this,null,(function*(){return yield this.opts.afterString(e,this)}))},n[1]];return j(this,t,u).call(this,l,i)}break(e={}){return j(this,t,u).call(this,{func:()=>j(this,t,g).call(this,X("BR")),typeable:!0},e)}move(e,i={}){e=yt(e);let n=j(this,t,c).call(this,i),{instant:r,to:l}=i,o=at({queueItems:this.queue.getTypeable(),selector:null===e?"":e,to:l,cursorPosition:H(this,t,w)}),a=o<0?-1:1;return this.predictedCursorPosition=H(this,t,w)+o,j(this,t,u).call(this,[n[0],...ut({func:()=>j(this,t,s).call(this,a),delay:r?0:j(this,t,T).call(this),cursorable:!0},Math.abs(o)),n[1]],i)}exec(e,i={}){let s=j(this,t,c).call(this,i);return j(this,t,u).call(this,[s[0],{func:()=>e(this)},s[1]],i)}options(e,i={}){return e=yt(e),j(this,t,d).call(this,e),j(this,t,u).call(this,{},i)}pause(e,i={}){return j(this,t,u).call(this,{delay:yt(e)},i)}delete(e=null,i={}){e=yt(e);let s=j(this,t,c).call(this,i),n=e,{instant:r,to:l}=i,o=this.queue.getTypeable(),a=(()=>null===n?o.length:ot(n)?n:at({queueItems:o,selector:n,cursorPosition:H(this,t,w),to:l}))();return j(this,t,u).call(this,[s[0],...ut({func:j(this,t,v).bind(this),delay:r?0:j(this,t,T).call(this,1),deletable:!0},a),s[1]],i)}freeze(){this.statuses.frozen=!0}flush(e=()=>{}){return j(this,t,o).call(this),j(this,t,i).call(this,!1).then(e),this}getQueue(){return this.queue}getOptions(){return this.opts}updateOptions(e){return j(this,t,d).call(this,e)}getElement(){return this.element}empty(i={}){return j(this,t,u).call(this,{func:j(this,t,e).bind(this)},i)}},t=new WeakSet,e=function(){return F(this,null,(function*(){j(this,t,a).call(this)?this.element.value="":H(this,t,E).forEach(j(this,t,P).bind(this))}))},i=function(e=!0){return F(this,null,(function*(){this.statuses.started=!0;let s=t=>{this.queue.done(t,!e)};try{let o=[...this.queue.getQueue()];for(let e=0;e<o.length;e++){let[i,n]=o[e];if(!n.done){if(!n.deletable||n.deletable&&H(this,t,E).length){let i=yield j(this,t,r).call(this,e,o);lt({index:e,newIndex:i,queueItems:o,cleanUp:s}),e=i}s(i)}}if(!e)return this;if(this.statuses.completed=!0,yield this.opts.afterComplete(this),!this.opts.loop)throw"";let a=this.opts.loopDelay;j(this,t,l).call(this,(()=>F(this,null,(function*(){yield j(this,t,n).call(this,a[0]),j(this,t,i).call(this)}))),a[1])}catch(o){}return this}))},s=function(e){return F(this,null,(function*(){var i,s,n;this.cursorPosition=(i=e,s=this.cursorPosition,n=H(this,t,E),Math.min(Math.max(s+i,0),n.length)),((t,e,i)=>{let s=e[i-1],n=bt(`.${W}`,t);(t=(null==s?void 0:s.parentNode)||t).insertBefore(n,s||null)})(this.element,H(this,t,E),this.cursorPosition)}))},n=function(e){return F(this,null,(function*(){let i=H(this,t,w);i&&(yield j(this,t,s).call(this,{value:i}));let n=H(this,t,E).map((e=>[Symbol(),{func:j(this,t,v).bind(this),delay:j(this,t,T).call(this,1),deletable:!0,shouldPauseCursor:()=>!0}]));for(let e=0;e<n.length;e++)yield j(this,t,r).call(this,e,n);this.queue.reset(),this.queue.set(0,{delay:e})}))},r=function(e,i){return pt({index:e,queueItems:i,wait:j(this,t,l).bind(this),cursor:this.cursor,cursorOptions:this.opts.cursor})},l=function(t,e,i=!1){return F(this,null,(function*(){this.statuses.frozen&&(yield new Promise((t=>{this.unfreeze=()=>{this.statuses.frozen=!1,t()}}))),i||(yield this.opts.beforeStep(this)),yield((t,e,i)=>new Promise((s=>{i.push(setTimeout((()=>F(void 0,null,(function*(){yield t(),s()}))),e||0))})))(t,e,this.timeouts),i||(yield this.opts.afterStep(this))}))},o=function(){return F(this,null,(function*(){if(!j(this,t,a).call(this)&&this.cursor&&this.element.appendChild(this.cursor),H(this,t,S)){((t,e)=>{let i=`[${_}='${t}'] .${W}`,s=getComputedStyle(e),n=Object.entries(vt).reduce(((t,[e,i])=>`${t} ${e}: var(--ti-cursor-${e}, ${i||s[e]});`),"");K(`${i} { display: inline-block; width: 0; ${n} }`,t)})(this.id,this.element),this.cursor.dataset.tiAnimationId=this.id;let{animation:t}=this.opts.cursor,{frames:e,options:i}=t;dt({frames:e,cursor:this.cursor,options:$({duration:this.opts.cursorSpeed},i)})}}))},a=function(){return mt(this.element)},u=function(e,i){return this.queue.add(e),j(this,t,h).call(this,i),this},h=function(t={}){let e=t.delay;e&&this.queue.add({delay:e})},c=function(e={}){return[{func:()=>j(this,t,d).call(this,e)},{func:()=>j(this,t,d).call(this,this.opts)}]},d=function(t){return F(this,null,(function*(){this.opts=gt(this.opts,t)}))},f=function(){let e=this.opts.strings.filter((t=>!!t));e.forEach(((i,s)=>{if(this.type(i),s+1===e.length)return;let n=this.opts.breakLines?[{func:()=>j(this,t,g).call(this,X("BR")),typeable:!0}]:ut({func:j(this,t,v).bind(this),delay:j(this,t,T).call(this,1)},this.queue.getTypeable().length);j(this,t,b).call(this,n)}))},p=new WeakMap,m=function(e){let i=this.element.innerHTML;return i?(this.element.innerHTML="",this.opts.startDelete?(this.element.innerHTML=i,it(this.element),j(this,t,b).call(this,ut({func:j(this,t,v).bind(this),delay:j(this,t,T).call(this,1),deletable:!0},H(this,t,E).length)),e):(s=i,s.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/)).concat(e)):e;var s},y=function(){if(H(this,t,C))return null;let e=X("span");return e.className=W,H(this,t,S)?(e.innerHTML=st(this.opts.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)},b=function(t){let e=this.opts.nextStringDelay;this.queue.add([{delay:e[0]},...t,{delay:e[1]}])},g=function(t){((t,e)=>{if(mt(t))return void(t.value=`${t.value}${e.textContent}`);e.innerHTML="";let i=(s=e.originalParent,/body/i.test(null==s?void 0:s.tagName)?t:e.originalParent||t);var s;i.insertBefore(e,bt("."+W,i)||null)})(this.element,t)},v=function(){H(this,t,E).length&&(H(this,t,C)?this.element.value=this.element.value.slice(0,-1):j(this,t,P).call(this,H(this,t,E)[this.cursorPosition]))},P=function(t){((t,e)=>{if(!t)return;let i=t.parentNode;(i.childNodes.length>1||i.isSameNode(e)?t:i).remove()})(t,this.element)},T=function(t=0){return function(t){let{speed:e,deleteSpeed:i,lifeLike:s}=t;return i=null!==i?i:e/3,s?[Z(e,tt(e)),Z(i,tt(i))]:[e,i]}(this.opts)[t]},w=function(){var t;return null!=(t=this.predictedCursorPosition)?t:this.cursorPosition},C=function(){return mt(this.element)},S=function(){return!!this.opts.cursor&&!H(this,t,C)},E=function(){return t=this.element,mt(t)?et(t.value):nt(t,!0).filter((t=>!(t.childNodes.length>0)));var t},q);const Tt=Vue.defineComponent({name:"TypeIt",props:{options:{type:Object,default:()=>({})}},setup(t,{slots:e,expose:i}){const s=Vue.ref(null);return Vue.onMounted((()=>{const e=s.value.querySelector(".type-it");if(!e){!function(t){throw new TypeError(t)}("zh-CN"===navigator.language?"请确保有且只有一个具有class属性为 'type-it' 的元素":"Please make sure that there is only one element with a Class attribute with 'type-it'")}const n=new Pt(e,t.options).go();i({typeIt:n})})),()=>{var t,i;return Vue.createVNode("div",{ref:s},[null!=(i=null==(t=e.default)?void 0:t.call(e))?i:Vue.createVNode("span",{class:"type-it"},null)])}}}),wt=Tt;export{Tt as T,wt as a};
