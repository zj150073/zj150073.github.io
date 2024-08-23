var t=Object.defineProperty,e=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(e,n,o)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,c=(t,e)=>{for(var n in e||(e={}))i.call(e,n)&&s(t,n,e[n]);if(o)for(var n of o(e))r.call(e,n)&&s(t,n,e[n]);return t},a=(t,o)=>e(t,n(o));import{d as l,h as f}from"./@vue-uYjjPr_8.js";const u=Object.freeze({left:0,top:0,width:16,height:16}),d=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),p=Object.freeze(c(c({},u),d));Object.freeze(a(c({},p),{body:"",hidden:!1})),c({provider:"",aliases:{},not_found:{}},u);const h=Object.freeze({width:null,height:null}),g=Object.freeze(c(c({},h),d));const b=/[\s,]+/;function m(t,e){e.split(b).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function y(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i/=e,i%1==0?o(i):0)}}return e}const v=/(-?[0-9.]*[0-9]+[0-9.]*)/g,w=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function x(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(v);if(null===o||!o.length)return t;const i=[];let r=o.shift(),s=w.test(r);for(;;){if(s){const t=parseFloat(r);isNaN(t)?i.push(r):i.push(Math.ceil(t*e*n)/n)}else i.push(r);if(r=o.shift(),void 0===r)return i.join("");s=!s}}const j=/\sid="(\S+)"/g,k="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let O=0;const S=a(c({},g),{inline:!1}),F={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},E={display:"inline-block"},M={backgroundColor:"currentColor"},I={backgroundColor:"transparent"},C={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},L={webkitMask:M,mask:M,background:I};for(const ge in L){const t=L[ge];for(const e in C)t[ge+e]=C[e]}const T={};function z(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}["horizontal","vertical"].forEach((t=>{const e=t.slice(0,1)+"Flip";T[t+"-flip"]=e,T[t.slice(0,1)+"-flip"]=e,T[t+"Flip"]=e}));const _=(t,e)=>{const n=function(t,e){const n=c({},t);for(const o in e){const t=e[o],i=typeof t;o in h?(null===t||t&&("string"===i||"number"===i))&&(n[o]=t):i===typeof n[o]&&(n[o]="rotate"===o?t%4:t)}return n}(S,e),o=c({},F),i=e.mode||"svg",r={},s=e.style,l="object"!=typeof s||s instanceof Array?{}:s;for(let c in e){const t=e[c];if(void 0!==t)switch(c){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[c]=!0===t||"true"===t||1===t;break;case"flip":"string"==typeof t&&m(n,t);break;case"color":r.color=t;break;case"rotate":"string"==typeof t?n[c]=y(t):"number"==typeof t&&(n[c]=t);break;case"ariaHidden":case"aria-hidden":!0!==t&&"true"!==t&&delete o["aria-hidden"];break;default:{const e=T[c];e?!0!==t&&"true"!==t&&1!==t||(n[e]=!0):void 0===S[c]&&(o[c]=t)}}}const u=function(t,e){const n=c(c({},p),t),o=c(c({},g),e),i={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,o].forEach((t=>{const e=[],n=t.hFlip,o=t.vFlip;let s,c=t.rotate;switch(n?o?c+=2:(e.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),e.push("scale(-1 1)"),i.top=i.left=0):o&&(e.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),e.push("scale(1 -1)"),i.top=i.left=0),c<0&&(c-=4*Math.floor(c/4)),c%=4,c){case 1:s=i.height/2+i.top,e.unshift("rotate(90 "+s.toString()+" "+s.toString()+")");break;case 2:e.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:s=i.width/2+i.left,e.unshift("rotate(-90 "+s.toString()+" "+s.toString()+")")}c%2==1&&(i.left!==i.top&&(s=i.left,i.left=i.top,i.top=s),i.width!==i.height&&(s=i.width,i.width=i.height,i.height=s)),e.length&&(r=function(t,e,n){const o=function(t,e="defs"){let n="";const o=t.indexOf("<"+e);for(;o>=0;){const i=t.indexOf(">",o),r=t.indexOf("</"+e);if(-1===i||-1===r)break;const s=t.indexOf(">",r);if(-1===s)break;n+=t.slice(i+1,r).trim(),t=t.slice(0,o).trim()+t.slice(s+1)}return{defs:n,content:t}}(t);return i=o.defs,r=e+o.content+n,i?"<defs>"+i+"</defs>"+r:r;var i,r}(r,'<g transform="'+e.join(" ")+'">',"</g>"))}));const s=o.width,a=o.height,l=i.width,f=i.height;let u,d;null===s?(d=null===a?"1em":"auto"===a?f:a,u=x(d,l/f)):(u="auto"===s?l:s,d=null===a?x(u,f/l):"auto"===a?f:a);const h={},b=(t,e)=>{(t=>"unset"===t||"undefined"===t||"none"===t)(e)||(h[t]=e.toString())};b("width",u),b("height",d);const m=[i.left,i.top,l,f];return h.viewBox=m.join(" "),{attributes:h,viewBox:m,body:r}}(t,n),d=u.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),"svg"===i){o.style=c(c({},r),l),Object.assign(o,d);let t=0,n=e.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),o.innerHTML=function(t,e=k){const n=[];let o;for(;o=j.exec(t);)n.push(o[1]);if(!n.length)return t;const i="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof e?e(n):e+(O++).toString(),r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+r+')([")]|\\.[a-z])',"g"),"$1"+o+i+"$3")})),t=t.replace(new RegExp(i,"g"),"")}(u.body,n?()=>n+"ID"+t++:"iconifyVue"),f("svg",o)}const{body:b,width:v,height:w}=t,C="mask"===i||"bg"!==i&&-1!==b.indexOf("currentColor"),L=function(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in e)n+=" "+o+'="'+e[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}(b,a(c({},d),{width:v+"",height:w+""}));var _;return o.style=c(c(c(a(c({},r),{"--svg":(_=L,'url("'+function(t){return"data:image/svg+xml,"+function(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(t)}(_)+'")'),width:z(d.width),height:z(d.height)}),E),C?M:I),l),f("span",o)},$=Object.create(null);function A(t,e){$[t]=e}const N=l({inheritAttrs:!1,render(){const t=this.$attrs,e=t.icon,n="string"==typeof e?$[e]:"object"==typeof e?e:null;return null===n||"object"!=typeof n||"string"!=typeof n.body?this.$slots.default?this.$slots.default():null:_(c(c({},p),n),t)}}),P=/^[a-z0-9]+(-[a-z0-9]+)*$/,R=(t,e,n,o="")=>{const i=t.split(":");if("@"===t.slice(0,1)){if(i.length<2||i.length>3)return null;o=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const t=i.pop(),n=i.pop(),r={provider:i.length>0?i[0]:o,prefix:n,name:t};return e&&!D(r)?null:r}const r=i[0],s=r.split("-");if(s.length>1){const t={provider:o,prefix:s.shift(),name:s.join("-")};return e&&!D(t)?null:t}if(n&&""===o){const t={provider:o,prefix:"",name:r};return e&&!D(t,n)?null:t}return null},D=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(P)||!(e&&""===t.prefix||t.prefix.match(P))||!t.name.match(P)),U=Object.freeze({left:0,top:0,width:16,height:16}),q=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),B=Object.freeze(c(c({},U),q)),H=Object.freeze(a(c({},B),{body:"",hidden:!1}));function Q(t,e){const n=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}(t,e);for(const o in H)o in q?o in t&&!(o in n)&&(n[o]=q[o]):o in e?n[o]=e[o]:o in t&&(n[o]=t[o]);return n}function J(t,e,n){const o=t.icons,i=t.aliases||Object.create(null);let r={};function s(t){r=Q(o[t]||i[t],r)}return s(e),n.forEach(s),Q(t,r)}function V(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const o=function(t){const e=t.icons,n=t.aliases||Object.create(null),o=Object.create(null);return Object.keys(e).concat(Object.keys(n)).forEach((function t(i){if(e[i])return o[i]=[];if(!(i in o)){o[i]=null;const e=n[i]&&n[i].parent,r=e&&t(e);r&&(o[i]=[e].concat(r))}return o[i]})),o}(t);for(const i in o){const r=o[i];r&&(e(i,J(t,i,r)),n.push(i))}return n}const G=c({provider:"",aliases:{},not_found:{}},U);function K(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function W(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!K(t,G))return null;const n=e.icons;for(const i in n){const t=n[i];if(!i.match(P)||"string"!=typeof t.body||!K(t,H))return null}const o=e.aliases||Object.create(null);for(const i in o){const t=o[i],e=t.parent;if(!i.match(P)||"string"!=typeof e||!n[e]&&!o[e]||!K(t,H))return null}return e}const X=Object.create(null);function Y(t,e){const n=X[t]||(X[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function Z(t,e){return W(e)?V(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}let tt=!1;function et(t){return"boolean"==typeof t&&(tt=t),tt}function nt(t,e){const n=R(t,!0,tt);if(!n)return!1;return function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]=c({},n),!0}catch(o){}return!1}(Y(n.provider,n.prefix),n.name,e)}const ot=Object.freeze({width:null,height:null}),it=Object.freeze(c(c({},ot),q)),rt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,st=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ct(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(rt);if(null===o||!o.length)return t;const i=[];let r=o.shift(),s=st.test(r);for(;;){if(s){const t=parseFloat(r);isNaN(t)?i.push(r):i.push(Math.ceil(t*e*n)/n)}else i.push(r);if(r=o.shift(),void 0===r)return i.join("");s=!s}}const at=/\sid="(\S+)"/g,lt="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let ft=0;const ut=Object.create(null);function dt(t){return ut[t]||ut[""]}function pt(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const ht=Object.create(null),gt=["https://api.simplesvg.com","https://api.unisvg.com"],bt=[];for(;gt.length>0;)1===gt.length||Math.random()>.5?bt.push(gt.shift()):bt.push(gt.pop());function mt(t,e){const n=pt(e);return null!==n&&(ht[t]=n,!0)}function yt(t){return ht[t]}ht[""]=pt({resources:["https://api.iconify.design"].concat(bt)});let vt=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(e){}})();const wt={prepare:(t,e,n)=>{const o=[],i=function(t,e){const n=yt(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const i=e+".json?icons=";o=n.maxURL-t-n.path.length-i.length}else o=0;return o}(t,e),r="icons";let s={type:r,provider:t,prefix:e,icons:[]},c=0;return n.forEach(((n,a)=>{c+=n.length+1,c>=i&&a>0&&(o.push(s),s={type:r,provider:t,prefix:e,icons:[]},c=n.length),s.icons.push(n)})),o.push(s),o},send:(t,e,n)=>{if(!vt)return void n("abort",424);let o=function(t){if("string"==typeof t){const e=yt(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");o+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;o+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let i=503;vt(t+o).then((t=>{const e=t.status;if(200===e)return i=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{404===t?n("abort",t):n("next",i)}))})).catch((()=>{n("next",i)}))}};function xt(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}let jt=0;var kt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ot(t,e,n,o){const i=t.resources.length,r=t.random?Math.floor(Math.random()*i):t.index;let s;if(t.random){let e=t.resources.slice(0);for(s=[];e.length>1;){const t=Math.floor(Math.random()*e.length);s.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}s=s.concat(e)}else s=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let a,l="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function b(t,e){e&&(p=[]),"function"==typeof t&&p.push(t)}function m(){l="failed",p.forEach((t=>{t(void 0,a)}))}function y(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function v(){if("pending"!==l)return;h();const o=s.shift();if(void 0===o)return d.length?void(u=setTimeout((()=>{h(),"pending"===l&&(y(),m())}),t.timeout)):void m();const i={status:"pending",resource:o,callback:(e,n)=>{!function(e,n,o){const i="success"!==n;switch(d=d.filter((t=>t!==e)),l){case"pending":break;case"failed":if(i||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void m();if(i)return a=o,void(d.length||(s.length?v():m()));if(h(),y(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}l="completed",p.forEach((t=>{t(o)}))}(i,e,n)}};d.push(i),f++,u=setTimeout(v,t.rotate),n(o,e,i.callback)}return"function"==typeof o&&p.push(o),setTimeout(v),function(){return{startTime:c,payload:e,status:l,queriesSent:f,queriesPending:d.length,subscribe:b,abort:g}}}function St(t){const e=c(c({},kt),t);let n=[];function o(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,i,r){const s=Ot(e,t,i,((t,e)=>{o(),r&&r(t,e)}));return n.push(s),s},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:o}}function Ft(){}const Et=Object.create(null);function Mt(t,e,n){let o,i;if("string"==typeof t){const e=dt(t);if(!e)return n(void 0,424),Ft;i=e.send;const r=function(t){if(!Et[t]){const e=yt(t);if(!e)return;const n={config:e,redundancy:St(e)};Et[t]=n}return Et[t]}(t);r&&(o=r.redundancy)}else{const e=pt(t);if(e){o=St(e);const n=dt(t.resources?t.resources[0]:"");n&&(i=n.send)}}return o&&i?o.query(e,i,n)().abort:(n(void 0,424),Ft)}const It="iconify2",Ct="iconify",Lt=Ct+"-count",Tt=Ct+"-version",zt=36e5,_t=168,$t=50;function At(t,e){try{return t.getItem(e)}catch(n){}}function Nt(t,e,n){try{return t.setItem(e,n),!0}catch(o){}}function Pt(t,e){try{t.removeItem(e)}catch(n){}}function Rt(t,e){return Nt(t,Lt,e.toString())}function Dt(t){return parseInt(At(t,Lt))||0}const Ut={local:!0,session:!0},qt={local:new Set,session:new Set};let Bt=!1;let Ht="undefined"==typeof window?{}:window;function Qt(t){const e=t+"Storage";try{if(Ht&&Ht[e]&&"number"==typeof Ht[e].length)return Ht[e]}catch(n){}Ut[t]=!1}function Jt(t,e){const n=Qt(t);if(!n)return;const o=At(n,Tt);if(o!==It){if(o){const t=Dt(n);for(let e=0;e<t;e++)Pt(n,Ct+e.toString())}return Nt(n,Tt,It),void Rt(n,0)}const i=Math.floor(Date.now()/zt)-_t,r=t=>{const o=Ct+t.toString(),r=At(n,o);if("string"==typeof r){try{const n=JSON.parse(r);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>i&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch(s){}Pt(n,o)}};let s=Dt(n);for(let c=s-1;c>=0;c--)r(c)||(c===s-1?(s--,Rt(n,s)):qt[t].add(c))}function Vt(){if(!Bt){Bt=!0;for(const t in Ut)Jt(t,(t=>{const e=t.data,n=Y(t.provider,e.prefix);if(!Z(n,e).length)return!1;const o=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function Gt(t,e){function n(n){let o;if(!Ut[n]||!(o=Qt(n)))return;const i=qt[n];let r;if(i.size)i.delete(r=Array.from(i).shift());else if(r=Dt(o),r>=$t||!Rt(o,r+1))return;const s={cached:Math.floor(Date.now()/zt),provider:t.provider,data:e};return Nt(o,Ct+r.toString(),JSON.stringify(s))}Bt||Vt(),e.lastModified&&!function(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const o in Ut)Jt(o,(n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function Kt(){}function Wt(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,i=t.prefix;e.forEach((e=>{const r=e.icons,s=r.pending.length;r.pending=r.pending.filter((e=>{if(e.prefix!==i)return!0;const s=e.name;if(t.icons[s])r.loaded.push({provider:o,prefix:i,name:s});else{if(!t.missing.has(s))return n=!0,!0;r.missing.push({provider:o,prefix:i,name:s})}return!1})),r.pending.length!==s&&(n||xt([t],e.id),e.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),e.abort))}))})))}(t)})))}const Xt=(t,e)=>{const n=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const i=t.provider,r=t.prefix,s=t.name,c=n[i]||(n[i]=Object.create(null)),a=c[r]||(c[r]=Y(i,r));let l;l=s in a.icons?e.loaded:""===r||a.missing.has(s)?e.missing:e.pending;const f={provider:i,prefix:r,name:s};l.push(f)})),e}(function(t,e=!0,n=!1){const o=[];return t.forEach((t=>{const i="string"==typeof t?R(t,e,n):t;i&&o.push(i)})),o}(t,!0,et()));if(!n.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(n.loaded,n.missing,n.pending,Kt)})),()=>{t=!1}}const o=Object.create(null),i=[];let r,s;return n.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===s&&e===r)return;r=e,s=n,i.push(Y(e,n));const c=o[e]||(o[e]=Object.create(null));c[n]||(c[n]=[])})),n.pending.forEach((t=>{const{provider:e,prefix:n,name:i}=t,r=Y(e,n),s=r.pendingIcons||(r.pendingIcons=new Set);s.has(i)||(s.add(i),o[e][n].push(i))})),i.forEach((t=>{const{provider:e,prefix:n}=t;o[e][n].length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,o=t.iconsToLoad;let i;delete t.iconsToLoad,o&&(i=dt(e))&&i.prepare(e,n,o).forEach((n=>{Mt(e,n,(e=>{if("object"!=typeof e)n.icons.forEach((e=>{t.missing.add(e)}));else try{const n=Z(t,e);if(!n.length)return;const o=t.pendingIcons;o&&n.forEach((t=>{o.delete(t)})),Gt(t,e)}catch(o){}Wt(t)}))}))})))}(t,o[e][n])})),e?function(t,e,n){const o=jt++,i=xt.bind(null,n,o);if(!e.pending.length)return i;const r={id:o,icons:e,callback:t,abort:i};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(r)})),i}(e,n,i):Kt};const Yt=/[\s,]+/;function Zt(t,e){e.split(Yt).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function te(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i/=e,i%1==0?o(i):0)}}return e}const ee=a(c({},it),{inline:!1}),ne={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},oe={display:"inline-block"},ie={backgroundColor:"currentColor"},re={backgroundColor:"transparent"},se={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ce={webkitMask:ie,mask:ie,background:re};for(const ge in ce){const t=ce[ge];for(const e in se)t[ge+e]=se[e]}const ae={};function le(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}["horizontal","vertical"].forEach((t=>{const e=t.slice(0,1)+"Flip";ae[t+"-flip"]=e,ae[t.slice(0,1)+"-flip"]=e,ae[t+"Flip"]=e}));const fe=(t,e)=>{const n=function(t,e){const n=c({},t);for(const o in e){const t=e[o],i=typeof t;o in ot?(null===t||t&&("string"===i||"number"===i))&&(n[o]=t):i===typeof n[o]&&(n[o]="rotate"===o?t%4:t)}return n}(ee,e),o=c({},ne),i=e.mode||"svg",r={},s=e.style,l="object"!=typeof s||s instanceof Array?{}:s;for(let c in e){const t=e[c];if(void 0!==t)switch(c){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[c]=!0===t||"true"===t||1===t;break;case"flip":"string"==typeof t&&Zt(n,t);break;case"color":r.color=t;break;case"rotate":"string"==typeof t?n[c]=te(t):"number"==typeof t&&(n[c]=t);break;case"ariaHidden":case"aria-hidden":!0!==t&&"true"!==t&&delete o["aria-hidden"];break;default:{const e=ae[c];e?!0!==t&&"true"!==t&&1!==t||(n[e]=!0):void 0===ee[c]&&(o[c]=t)}}}const u=function(t,e){const n=c(c({},B),t),o=c(c({},it),e),i={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,o].forEach((t=>{const e=[],n=t.hFlip,o=t.vFlip;let s,c=t.rotate;switch(n?o?c+=2:(e.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),e.push("scale(-1 1)"),i.top=i.left=0):o&&(e.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),e.push("scale(1 -1)"),i.top=i.left=0),c<0&&(c-=4*Math.floor(c/4)),c%=4,c){case 1:s=i.height/2+i.top,e.unshift("rotate(90 "+s.toString()+" "+s.toString()+")");break;case 2:e.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:s=i.width/2+i.left,e.unshift("rotate(-90 "+s.toString()+" "+s.toString()+")")}c%2==1&&(i.left!==i.top&&(s=i.left,i.left=i.top,i.top=s),i.width!==i.height&&(s=i.width,i.width=i.height,i.height=s)),e.length&&(r=function(t,e,n){const o=function(t,e="defs"){let n="";const o=t.indexOf("<"+e);for(;o>=0;){const i=t.indexOf(">",o),r=t.indexOf("</"+e);if(-1===i||-1===r)break;const s=t.indexOf(">",r);if(-1===s)break;n+=t.slice(i+1,r).trim(),t=t.slice(0,o).trim()+t.slice(s+1)}return{defs:n,content:t}}(t);return i=o.defs,r=e+o.content+n,i?"<defs>"+i+"</defs>"+r:r;var i,r}(r,'<g transform="'+e.join(" ")+'">',"</g>"))}));const s=o.width,a=o.height,l=i.width,f=i.height;let u,d;null===s?(d=null===a?"1em":"auto"===a?f:a,u=ct(d,l/f)):(u="auto"===s?l:s,d=null===a?ct(u,f/l):"auto"===a?f:a);const p={},h=(t,e)=>{(t=>"unset"===t||"undefined"===t||"none"===t)(e)||(p[t]=e.toString())};h("width",u),h("height",d);const g=[i.left,i.top,l,f];return p.viewBox=g.join(" "),{attributes:p,viewBox:g,body:r}}(t,n),d=u.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),"svg"===i){o.style=c(c({},r),l),Object.assign(o,d);let t=0,n=e.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),o.innerHTML=function(t,e=lt){const n=[];let o;for(;o=at.exec(t);)n.push(o[1]);if(!n.length)return t;const i="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof e?e(n):e+(ft++).toString(),r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+r+')([")]|\\.[a-z])',"g"),"$1"+o+i+"$3")})),t=t.replace(new RegExp(i,"g"),"")}(u.body,n?()=>n+"ID"+t++:"iconifyVue"),f("svg",o)}const{body:p,width:h,height:g}=t,b="mask"===i||"bg"!==i&&-1!==p.indexOf("currentColor"),m=function(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in e)n+=" "+o+'="'+e[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}(p,a(c({},d),{width:h+"",height:g+""}));var y;return o.style=c(c(c(a(c({},r),{"--svg":(y=m,'url("'+function(t){return"data:image/svg+xml,"+function(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(t)}(y)+'")'),width:le(d.width),height:le(d.height)}),oe),b?ie:re),l),f("span",o)};var ue;if(et(!0),ue=wt,ut[""]=ue,"undefined"!=typeof document&&"undefined"!=typeof window){Vt();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload;"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{"object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||function(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),tt&&!e&&!t.prefix){let e=!1;return W(t)&&(t.prefix="",V(t,((t,n)=>{n&&nt(t,n)&&(e=!0)}))),e}const n=t.prefix;!!D({provider:e,prefix:n,name:"a"})&&Z(Y(e,n),t)}(t)}catch(e){}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(let t in e){try{const n=e[t];if("object"!=typeof n||!n||void 0===n.resources)continue;mt(t,n)}catch(he){}}}}const de=a(c({},B),{body:""}),pe=l({inheritAttrs:!1,data:()=>({_name:"",_loadingIcon:null,iconMounted:!1,counter:0}),mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if("object"==typeof t&&null!==t&&"string"==typeof t.body)return this._name="",this.abortLoading(),{data:t};let n;if("string"!=typeof t||null===(n=R(t,!1,!0)))return this.abortLoading(),null;const o=function(t){const e="string"==typeof t?R(t,!0,tt):t;if(e){const t=Y(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}(n);if(!o)return this._loadingIcon&&this._loadingIcon.name===t||(this.abortLoading(),this._name="",null!==o&&(this._loadingIcon={name:t,abort:Xt([n],(()=>{this.counter++}))})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const i=["iconify"];return""!==n.prefix&&i.push("iconify--"+n.prefix),""!==n.provider&&i.push("iconify--"+n.provider),{data:o,classes:i}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad):null;if(!e)return fe(de,t);let n=t;return e.classes&&(n=a(c({},t),{class:("string"==typeof t.class?t.class+" ":"")+e.classes.join(" ")})),fe(c(c({},B),e.data),n)}});export{N as I,A as a,pe as b};
