import{a4 as e,D as t,az as n,H as r,n as o,d as a,S as s,b as c,x as l,A as i,r as u,w as f}from"./@vue-CFXrvzpc.js";
/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const p="undefined"!=typeof document;const h=Object.assign;function d(e,t){const n={};for(const r in t){const o=t[r];n[r]=g(o)?o.map(e):e(o)}return n}const m=()=>{},g=Array.isArray,v=/#/g,y=/&/g,b=/\//g,w=/=/g,E=/\?/g,R=/\+/g,k=/%5B/g,O=/%5D/g,x=/%5E/g,P=/%60/g,C=/%7B/g,j=/%7C/g,$=/%7D/g,S=/%20/g;function A(e){return encodeURI(""+e).replace(j,"|").replace(k,"[").replace(O,"]")}function q(e){return A(e).replace(R,"%2B").replace(S,"+").replace(v,"%23").replace(y,"%26").replace(P,"`").replace(C,"{").replace($,"}").replace(x,"^")}function L(e){return null==e?"":function(e){return A(e).replace(v,"%23").replace(E,"%3F")}(e).replace(b,"%2F")}function M(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const B=/\/$/,G=e=>e.replace(B,"");function _(e,t,n="/"){let r,o={},a="",s="";const c=t.indexOf("#");let l=t.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,c>-1?c:t.length),o=e(a)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];".."!==o&&"."!==o||r.push("");let a,s,c=n.length-1;for(a=0;a<r.length;a++)if(s=r[a],"."!==s){if(".."!==s)break;c>1&&c--}return n.slice(0,c).join("/")+"/"+r.slice(a).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+s,path:r,query:o,hash:M(s)}}function I(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function D(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function W(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!U(e[n],t[n]))return!1;return!0}function U(e,t){return g(e)?F(e,t):g(t)?F(t,e):e===t}function F(e,t){return g(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}const T={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var z,V,H,K;(V=z||(z={})).pop="pop",V.push="push",(K=H||(H={})).back="back",K.forward="forward",K.unknown="";const Q=/^[^#]+#/;function X(e,t){return e.replace(Q,"#")+t}const Y=()=>({left:window.scrollX,top:window.scrollY});function N(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function Z(e,t){return(history.state?history.state.position-t:-1)+e}const J=new Map;let ee=()=>location.protocol+"//"+location.host;function te(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),I(n,"")}return I(n,e)+r+o}function ne(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?Y():null}}function re(e){const t=function(e){const{history:t,location:n}=window,r={value:te(e,n)},o={value:t.state};function a(r,a,s){const c=e.indexOf("#"),l=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+r:ee()+e+r;try{t[s?"replaceState":"pushState"](a,"",l),o.value=a}catch(i){n[s?"replace":"assign"](l)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const s=h({},o.value,t.state,{forward:e,scroll:Y()});a(s.current,s,!0),a(e,h({},ne(r.value,e,null),{position:s.position+1},n),!1),r.value=e},replace:function(e,n){a(e,h({},t.state,ne(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}(e=function(e){if(!e)if(p){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),G(e)}(e)),n=function(e,t,n,r){let o=[],a=[],s=null;const c=({state:a})=>{const c=te(e,location),l=n.value,i=t.value;let u=0;if(a){if(n.value=c,t.value=a,s&&s===l)return void(s=null);u=i?a.position-i.position:0}else r(c);o.forEach((e=>{e(n.value,l,{delta:u,type:z.pop,direction:u?u>0?H.forward:H.back:H.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(h({},e.state,{scroll:Y()}),"")}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:function(){s=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace);const r=h({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:X.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function oe(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),re(e)}function ae(e){return"string"==typeof e||"symbol"==typeof e}const se=Symbol("");var ce,le;function ie(e,t){return h(new Error,{type:e,[se]:!0},t)}function ue(e,t){return e instanceof Error&&se in e&&(null==t||!!(e.type&t))}(le=ce||(ce={}))[le.aborted=4]="aborted",le[le.cancelled=8]="cancelled",le[le.duplicated=16]="duplicated";const fe="[^/]+?",pe={sensitive:!1,strict:!1,start:!0,end:!0},he=/[.+*?^${}()[\]/\\]/g;function de(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function me(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=de(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(ge(r))return 1;if(ge(o))return-1}return o.length-r.length}function ge(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ve={type:0,value:""},ye=/[a-zA-Z0-9_]/;function be(e,t,n){const r=function(e,t){const n=h({},pe,t),r=[];let o=n.start?"^":"";const a=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(he,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:i,regexp:u}=r;a.push({name:e,repeatable:n,optional:i});const f=u||fe;if(f!==fe){s+=10;try{new RegExp(`(${f})`)}catch(c){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+c.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(p=i&&l.length<2?`(?:/${p})`:"/"+p),i&&(p+="?"),o+=p,s+=20,i&&(s+=-8),n&&(s+=-20),".*"===f&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");return{re:s,score:r,keys:a,parse:function(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:s,optional:c}=e,l=a in t?t[a]:"";if(g(l)&&!s)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const i=g(l)?l.join("/"):l;if(!i){if(!c)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=i}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[ve]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${i}": ${e}`)}let n=0,r=n;const o=[];let a;function s(){a&&o.push(a),a=[]}let c,l=0,i="",u="";function f(){i&&(0===n?a.push({type:0,value:i}):1===n||2===n||3===n?(a.length>1&&("*"===c||"+"===c)&&t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:i,regexp:u,repeatable:"*"===c||"+"===c,optional:"*"===c||"?"===c})):t("Invalid state to consume buffer"),i="")}function p(){i+=c}for(;l<e.length;)if(c=e[l++],"\\"!==c||2===n)switch(n){case 0:"/"===c?(i&&f(),s()):":"===c?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===c?n=2:ye.test(c)?p():(f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&l--);break;case 2:")"===c?"\\"==u[u.length-1]?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${i}"`),f(),s(),o}(e.path),n),o=h(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function we(e,t){const n=[],r=new Map;function o(e,n,r){const c=!r,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Re(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);l.aliasOf=r&&r.record;const i=xe(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(h({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=be(t,n,i),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),c&&e.name&&!ke(f)&&a(e.name)),Pe(f)&&s(f),l.children){const e=l.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f}return p?()=>{a(p)}:m}function a(e){if(ae(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function s(e){const t=function(e,t){let n=0,r=t.length;for(;n!==r;){const o=n+r>>1;me(e,t[o])<0?r=o:n=o+1}const o=function(e){let t=e;for(;t=t.parent;)if(Pe(t)&&0===me(e,t))return t;return}(e);o&&(r=t.lastIndexOf(o,r-1));return r}(e,n);n.splice(t,0,e),e.record.name&&!ke(e)&&r.set(e.record.name,e)}return t=xe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,s,c={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw ie(1,{location:e});s=o.record.name,c=h(Ee(t.params,o.keys.filter((e=>!e.optional)).concat(o.parent?o.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Ee(e.params,o.keys.map((e=>e.name)))),a=o.stringify(c)}else if(null!=e.path)a=e.path,o=n.find((e=>e.re.test(a))),o&&(c=o.parse(a),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw ie(1,{location:e,currentLocation:t});s=o.record.name,c=h({},t.params,e.params),a=o.stringify(c)}const l=[];let i=o;for(;i;)l.unshift(i.record),i=i.parent;return{name:s,path:a,params:c,matched:l,meta:Oe(l)}},removeRoute:a,clearRoutes:function(){n.length=0,r.clear()},getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function Ee(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Re(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"==typeof n?n[r]:n;return t}function ke(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Oe(e){return e.reduce(((e,t)=>h(e,t.meta)),{})}function xe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Pe({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ce(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(R," "),o=e.indexOf("="),a=M(o<0?e:e.slice(0,o)),s=o<0?null:M(e.slice(o+1));if(a in t){let e=t[a];g(e)||(e=t[a]=[e]),e.push(s)}else t[a]=s}return t}function je(e){let t="";for(let n in e){const r=e[n];if(n=q(n).replace(w,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(g(r)?r.map((e=>e&&q(e))):[r&&q(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function $e(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=g(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Se=Symbol(""),Ae=Symbol(""),qe=Symbol(""),Le=Symbol(""),Me=Symbol("");function Be(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function Ge(e,t,n,r,o,a=e=>e()){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((c,l)=>{const i=e=>{var a;!1===e?l(ie(4,{from:n,to:t})):e instanceof Error?l(e):"string"==typeof(a=e)||a&&"object"==typeof a?l(ie(2,{from:t,to:e})):(s&&r.enterCallbacks[o]===s&&"function"==typeof e&&s.push(e),c())},u=a((()=>e.call(r&&r.instances[o],t,n,i)));let f=Promise.resolve(u);e.length<3&&(f=f.then(i)),f.catch((e=>l(e)))}))}function _e(e,t,n,r,o=e=>e()){const a=[];for(const c of e)for(const e in c.components){let l=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if("object"==typeof(s=l)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(l.__vccOpts||l)[t];s&&a.push(Ge(s,n,r,c,e,o))}else{let s=l();a.push((()=>s.then((a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${c.path}"`));const s=(l=a).__esModule||"Module"===l[Symbol.toStringTag]?a.default:a;var l;c.components[e]=s;const i=(s.__vccOpts||s)[t];return i&&Ge(i,n,r,c,e,o)()}))))}}var s;return a}function Ie(e){const n=r(qe),o=r(Le),a=c((()=>{const r=t(e.to);return n.resolve(r)})),s=c((()=>{const{matched:e}=a.value,{length:t}=e,n=e[t-1],r=o.matched;if(!n||!r.length)return-1;const s=r.findIndex(D.bind(null,n));if(s>-1)return s;const c=We(e[t-2]);return t>1&&We(n)===c&&r[r.length-1].path!==c?r.findIndex(D.bind(null,e[t-2])):s})),l=c((()=>s.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!g(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(o.params,a.value.params))),i=c((()=>s.value>-1&&s.value===o.matched.length-1&&W(o.params,a.value.params)));return{route:a,href:c((()=>a.value.href)),isActive:l,isExactActive:i,navigate:function(r={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(r)?n[t(e.replace)?"replace":"push"](t(e.to)).catch(m):Promise.resolve()}}}const De=a({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ie,setup(e,{slots:t}){const n=s(Ie(e)),{options:o}=r(qe),a=c((()=>({[Ue(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Ue(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:l("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},r)}}});function We(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ue=(e,t,n)=>null!=e?e:null!=t?t:n;function Fe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Te=a({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:o}){const a=r(Me),s=c((()=>e.route||a.value)),p=r(Ae,0),d=c((()=>{let e=t(p);const{matched:n}=s.value;let r;for(;(r=n[e])&&!r.components;)e++;return e})),m=c((()=>s.value.matched[d.value]));i(Ae,c((()=>d.value+1))),i(Se,m),i(Me,s);const g=u();return f((()=>[g.value,m.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&D(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const t=s.value,r=e.name,a=m.value,c=a&&a.components[r];if(!c)return Fe(o.default,{Component:c,route:t});const i=a.props[r],u=i?!0===i?t.params:"function"==typeof i?i(t):i:null,f=l(c,h({},u,n,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[r]=null)},ref:g}));return Fe(o.default,{Component:f,route:t})||f}}});function ze(r){const a=we(r.routes,r),s=r.parseQuery||Ce,c=r.stringifyQuery||je,l=r.history,i=Be(),u=Be(),f=Be(),v=e(T);let y=T;p&&r.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=d.bind(null,(e=>""+e)),w=d.bind(null,L),E=d.bind(null,M);function R(e,t){if(t=h({},t||v.value),"string"==typeof e){const n=_(s,e,t.path),r=a.resolve({path:n.path},t),o=l.createHref(n.fullPath);return h(n,r,{params:E(r.params),hash:M(n.hash),redirectedFrom:void 0,href:o})}let n;if(null!=e.path)n=h({},e,{path:_(s,e.path,t.path).path});else{const r=h({},e.params);for(const e in r)null==r[e]&&delete r[e];n=h({},e,{params:w(r)}),t.params=w(t.params)}const r=a.resolve(n,t),o=e.hash||"";r.params=b(E(r.params));const i=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(c,h({},e,{hash:(u=o,A(u).replace(C,"{").replace($,"}").replace(x,"^")),path:r.path}));var u;const f=l.createHref(i);return h({fullPath:i,hash:o,query:c===je?$e(e.query):e.query||{}},r,{redirectedFrom:void 0,href:f})}function k(e){return"string"==typeof e?_(s,e,v.value.path):h({},e)}function O(e,t){if(y!==e)return ie(8,{from:t,to:e})}function P(e){return S(e)}function j(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=k(r):{path:r},r.params={}),h({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function S(e,t){const n=y=R(e),r=v.value,o=e.state,a=e.force,s=!0===e.replace,l=j(n);if(l)return S(h(k(l),{state:"object"==typeof l?h({},o,l.state):o,force:a,replace:s}),t||n);const i=n;let u;return i.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&D(t.matched[r],n.matched[o])&&W(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(c,r,n)&&(u=ie(16,{to:i,from:r}),te(r,r,!0,!1)),(u?Promise.resolve(u):G(i,r)).catch((e=>ue(e)?ue(e,2)?e:ee(e):X(e,i,r))).then((e=>{if(e){if(ue(e,2))return S(h({replace:s},k(e.to),{state:"object"==typeof e.to?h({},o,e.to.state):o,force:a}),t||i)}else e=U(i,r,!0,s,o);return I(i,r,e),e}))}function q(e,t){const n=O(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e){const t=oe.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function G(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const a=t.matched[s];a&&(e.matched.find((e=>D(e,a)))?r.push(a):n.push(a));const c=e.matched[s];c&&(t.matched.find((e=>D(e,c)))||o.push(c))}return[n,r,o]}(e,t);n=_e(r.reverse(),"beforeRouteLeave",e,t);for(const c of r)c.leaveGuards.forEach((r=>{n.push(Ge(r,e,t))}));const s=q.bind(null,e,t);return n.push(s),ce(n).then((()=>{n=[];for(const r of i.list())n.push(Ge(r,e,t));return n.push(s),ce(n)})).then((()=>{n=_e(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Ge(r,e,t))}));return n.push(s),ce(n)})).then((()=>{n=[];for(const r of a)if(r.beforeEnter)if(g(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ge(o,e,t));else n.push(Ge(r.beforeEnter,e,t));return n.push(s),ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=_e(a,"beforeRouteEnter",e,t,B),n.push(s),ce(n)))).then((()=>{n=[];for(const r of u.list())n.push(Ge(r,e,t));return n.push(s),ce(n)})).catch((e=>ue(e,8)?e:Promise.reject(e)))}function I(e,t,n){f.list().forEach((r=>B((()=>r(e,t,n)))))}function U(e,t,n,r,o){const a=O(e,t);if(a)return a;const s=t===T,c=p?history.state:{};n&&(r||s?l.replace(e.fullPath,h({scroll:s&&c&&c.scroll},o)):l.push(e.fullPath,o)),v.value=e,te(e,t,n,s),ee()}let F;function V(){F||(F=l.listen(((e,t,n)=>{if(!se.listening)return;const r=R(e),o=j(r);if(o)return void S(h(o,{replace:!0}),r).catch(m);y=r;const a=v.value;var s,c;p&&(s=Z(a.fullPath,n.delta),c=Y(),J.set(s,c)),G(r,a).catch((e=>ue(e,12)?e:ue(e,2)?(S(e.to,r).then((e=>{ue(e,20)&&!n.delta&&n.type===z.pop&&l.go(-1,!1)})).catch(m),Promise.reject()):(n.delta&&l.go(-n.delta,!1),X(e,r,a)))).then((e=>{(e=e||U(r,a,!1))&&(n.delta&&!ue(e,8)?l.go(-n.delta,!1):n.type===z.pop&&ue(e,20)&&l.go(-1,!1)),I(r,a,e)})).catch(m)})))}let H,K=Be(),Q=Be();function X(e,t,n){ee(e);const r=Q.list();return r.length&&r.forEach((r=>r(e,t,n))),Promise.reject(e)}function ee(e){return H||(H=!e,V(),K.list().forEach((([t,n])=>e?n(e):t())),K.reset()),e}function te(e,t,n,a){const{scrollBehavior:s}=r;if(!p||!s)return Promise.resolve();const c=!n&&function(e){const t=J.get(e);return J.delete(e),t}(Z(e.fullPath,0))||(a||!n)&&history.state&&history.state.scroll||null;return o().then((()=>s(e,t,c))).then((e=>e&&N(e))).catch((n=>X(n,e,t)))}const ne=e=>l.go(e);let re;const oe=new Set,se={currentRoute:v,listening:!0,addRoute:function(e,t){let n,r;return ae(e)?(n=a.getRecordMatcher(e),r=t):r=e,a.addRoute(r,n)},removeRoute:function(e){const t=a.getRecordMatcher(e);t&&a.removeRoute(t)},clearRoutes:a.clearRoutes,hasRoute:function(e){return!!a.getRecordMatcher(e)},getRoutes:function(){return a.getRoutes().map((e=>e.record))},resolve:R,options:r,push:P,replace:function(e){return P(h(k(e),{replace:!0}))},go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:i.add,beforeResolve:u.add,afterEach:f.add,onError:Q.add,isReady:function(){return H&&v.value!==T?Promise.resolve():new Promise(((e,t)=>{K.add([e,t])}))},install(e){e.component("RouterLink",De),e.component("RouterView",Te),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>t(v)}),p&&!re&&v.value===T&&(re=!0,P(l.location).catch((e=>{})));const r={};for(const t in T)Object.defineProperty(r,t,{get:()=>v.value[t],enumerable:!0});e.provide(qe,this),e.provide(Le,n(r)),e.provide(Me,v);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(y=T,F&&F(),F=null,v.value=T,re=!1,H=!1),o()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>B(t)))),Promise.resolve())}return se}function Ve(){return r(qe)}function He(e){return r(Le)}export{re as a,ze as b,oe as c,Ve as d,He as u};
