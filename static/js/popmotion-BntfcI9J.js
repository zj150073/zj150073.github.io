import{_ as t}from"./tslib-Bn74UbZk.js";import{h as n,r as e,g as o,e as r,c as s}from"./style-value-types-UCYNu-x1.js";import{i as a}from"./hey-listen-DkH12NBk.js";import{s as i,c as u,g as c}from"./framesync-CUhBu5sQ.js";const l=(t,n,e)=>Math.min(Math.max(e,t),n),f=.001,p=.01,m=10,d=.05,h=1;function y({duration:t=800,bounce:n=.25,velocity:e=0,mass:o=1}){let r,s,a=1-n;a=l(d,h,a),t=l(p,m,t/1e3),a<1?(r=n=>{const o=n*a,r=o*t,s=o-e,i=g(n,a),u=Math.exp(-r);return f-s/i*u},s=n=>{const o=n*a*t,s=o*e+e,i=Math.pow(a,2)*Math.pow(n,2)*t,u=Math.exp(-o),c=g(Math.pow(n,2),a);return(-r(n)+f>0?-1:1)*((s-i)*u)/c}):(r=n=>Math.exp(-n*t)*((n-e)*t+1)-f,s=n=>Math.exp(-n*t)*(t*t*(e-n)));const i=function(t,n,e){let o=e;for(let r=1;r<v;r++)o-=t(o)/n(o);return o}(r,s,5/t);if(t*=1e3,isNaN(i))return{stiffness:100,damping:10,duration:t};{const n=Math.pow(i,2)*o;return{stiffness:n,damping:2*a*Math.sqrt(o*n),duration:t}}}const v=12;function g(t,n){return t*Math.sqrt(1-n*n)}const M=["duration","bounce"],b=["stiffness","damping","mass"];function j(t,n){return n.some((n=>void 0!==t[n]))}function x(n){var{from:e=0,to:o=1,restSpeed:r=2,restDelta:s}=n,a=t(n,["from","to","restSpeed","restDelta"]);const i={done:!1,value:e};let{stiffness:u,damping:c,mass:l,velocity:f,duration:p,isResolvedFromDuration:m}=function(t){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!j(t,b)&&j(t,M)){const e=y(t);n=Object.assign(Object.assign(Object.assign({},n),e),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}(a),d=A,h=A;function v(){const t=f?-f/1e3:0,n=o-e,r=c/(2*Math.sqrt(u*l)),a=Math.sqrt(u/l)/1e3;if(void 0===s&&(s=Math.min(Math.abs(o-e)/100,.4)),r<1){const e=g(a,r);d=s=>{const i=Math.exp(-r*a*s);return o-i*((t+r*a*n)/e*Math.sin(e*s)+n*Math.cos(e*s))},h=o=>{const s=Math.exp(-r*a*o);return r*a*s*(Math.sin(e*o)*(t+r*a*n)/e+n*Math.cos(e*o))-s*(Math.cos(e*o)*(t+r*a*n)-e*n*Math.sin(e*o))}}else if(1===r)d=e=>o-Math.exp(-a*e)*(n+(t+a*n)*e);else{const e=a*Math.sqrt(r*r-1);d=s=>{const i=Math.exp(-r*a*s),u=Math.min(e*s,300);return o-i*((t+r*a*n)*Math.sinh(u)+e*n*Math.cosh(u))/e}}}return v(),{next:t=>{const n=d(t);if(m)i.done=t>=p;else{const e=1e3*h(t),a=Math.abs(e)<=r,u=Math.abs(o-n)<=s;i.done=a&&u}return i.value=i.done?o:n,i},flipTarget:()=>{f=-f,[e,o]=[o,e],v()}}}x.needsInterpolation=(t,n)=>"string"==typeof t||"string"==typeof n;const A=t=>0,D=(t,n,e)=>{const o=n-t;return 0===o?1:(e-t)/o},O=(t,n,e)=>-e*t+e*n+t;function w(t,n,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(n-t)*e:e<.5?n:e<2/3?t+(n-t)*(2/3-e)*6:t}function S({hue:t,saturation:n,lightness:e,alpha:o}){t/=360,e/=100;let r=0,s=0,a=0;if(n/=100){const o=e<.5?e*(1+n):e+n-e*n,i=2*e-o;r=w(i,o,t+1/3),s=w(i,o,t),a=w(i,o,t-1/3)}else r=s=a=e;return{red:Math.round(255*r),green:Math.round(255*s),blue:Math.round(255*a),alpha:o}}const R=(t,n,e)=>{const o=t*t,r=n*n;return Math.sqrt(Math.max(0,e*(r-o)+o))},T=[o,e,n],q=t=>T.find((n=>n.test(t))),C=(t,o)=>{let r=q(t),s=q(o),a=r.parse(t),i=s.parse(o);r===n&&(a=S(a),r=e),s===n&&(i=S(i),s=e);const u=Object.assign({},a);return t=>{for(const n in u)"alpha"!==n&&(u[n]=R(a[n],i[n],t));return u.alpha=O(a.alpha,i.alpha,t),r.transform(u)}},U=(t,n)=>e=>n(t(e)),N=(...t)=>t.reduce(U);function B(t,n){return"number"==typeof t?e=>O(t,n,e):s.test(t)?C(t,n):H(t,n)}const F=(t,n)=>{const e=[...t],o=e.length,r=t.map(((t,e)=>B(t,n[e])));return t=>{for(let n=0;n<o;n++)e[n]=r[n](t);return e}},k=(t,n)=>{const e=Object.assign(Object.assign({},t),n),o={};for(const r in e)void 0!==t[r]&&void 0!==n[r]&&(o[r]=B(t[r],n[r]));return t=>{for(const n in o)e[n]=o[n](t);return e}};function G(t){const n=r.parse(t),e=n.length;let o=0,s=0,a=0;for(let r=0;r<e;r++)o||"number"==typeof n[r]?o++:void 0!==n[r].hue?a++:s++;return{parsed:n,numNumbers:o,numRGB:s,numHSL:a}}const H=(t,n)=>{const e=r.createTransformer(n),o=G(t),s=G(n);return o.numHSL===s.numHSL&&o.numRGB===s.numRGB&&o.numNumbers>=s.numNumbers?N(F(o.parsed,s.parsed),e):e=>`${e>0?n:t}`},L=(t,n)=>e=>O(t,n,e);function I(t,n,e){const o=[],r=e||("number"==typeof(a=t[0])?L:"string"==typeof a?s.test(a)?C:H:Array.isArray(a)?F:"object"==typeof a?k:void 0);var a;const i=t.length-1;for(let s=0;s<i;s++){let e=r(t[s],t[s+1]);if(n){const t=Array.isArray(n)?n[s]:n;e=N(t,e)}o.push(e)}return o}function P(t,n,{clamp:e=!0,ease:o,mixer:r}={}){const s=t.length;a(s===n.length),a(!o||!Array.isArray(o)||o.length===s-1),t[0]>t[s-1]&&(t=[].concat(t),n=[].concat(n),t.reverse(),n.reverse());const i=I(n,o,r),u=2===s?function([t,n],[e]){return o=>e(D(t,n,o))}(t,i):function(t,n){const e=t.length,o=e-1;return r=>{let s=0,a=!1;if(r<=t[0]?a=!0:r>=t[o]&&(s=o-1,a=!0),!a){let n=1;for(;n<e&&!(t[n]>r||n===o);n++);s=n-1}const i=D(t[s],t[s+1],r);return n[s](i)}}(t,i);return e?n=>u(l(t[0],t[s-1],n)):u}const $=t=>n=>1-t(1-n),_=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,z=t=>n=>n*n*((t+1)*n-t),E=4/11,J=8/11,K=t=>t,Q=(V=2,t=>Math.pow(t,V));var V;const W=$(Q),X=_(Q),Y=t=>1-Math.sin(Math.acos(t)),Z=$(Y),tt=_(Z),nt=z(1.525),et=$(nt),ot=_(nt),rt=(t=>{const n=z(t);return t=>(t*=2)<1?.5*n(t):.5*(2-Math.pow(2,-10*(t-1)))})(1.525),st=4356/361,at=35442/1805,it=16061/1805,ut=t=>{if(1===t||0===t)return t;const n=t*t;return t<E?7.5625*n:t<J?9.075*n-9.9*t+3.4:t<.9?st*n-at*t+it:10.8*t*t-20.52*t+10.72},ct=$(ut),lt=t=>t<.5?.5*(1-ut(1-2*t)):.5*ut(2*t-1)+.5;function ft(t,n){return t.map((()=>n||X)).splice(0,t.length-1)}function pt({from:t=0,to:n=1,ease:e,offset:o,duration:r=300}){const s={done:!1,value:t},a=Array.isArray(n)?n:[t,n],i=function(t,n){return t.map((t=>t*n))}(o&&o.length===a.length?o:function(t){const n=t.length;return t.map(((t,e)=>0!==e?e/(n-1):0))}(a),r);function u(){return P(i,a,{ease:Array.isArray(e)?e:ft(a,e)})}let c=u();return{next:t=>(s.value=c(t),s.done=t>=r,s),flipTarget:()=>{a.reverse(),c=u()}}}const mt={keyframes:pt,spring:x,decay:function({velocity:t=0,from:n=0,power:e=.8,timeConstant:o=350,restDelta:r=.5,modifyTarget:s}){const a={done:!1,value:n};let i=e*t;const u=n+i,c=void 0===s?u:s(u);return c!==u&&(i=c-n),{next:t=>{const n=-i*Math.exp(-t/o);return a.done=!(n>r||n<-r),a.value=a.done?c:c+n,a},flipTarget:()=>{}}}};function dt(t,n,e=0){return t-n-e}const ht=t=>{const n=({delta:n})=>t(n);return{start:()=>i.update(n,!0),stop:()=>u.update(n)}};function yt(n){var e,o,{from:r,autoplay:s=!0,driver:a=ht,elapsed:i=0,repeat:u=0,repeatType:c="loop",repeatDelay:l=0,onPlay:f,onStop:p,onComplete:m,onRepeat:d,onUpdate:h}=n,y=t(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let v,g,M,{to:b}=y,j=0,A=y.duration,D=!1,O=!0;const w=function(t){if(Array.isArray(t.to))return pt;if(mt[t.type])return mt[t.type];const n=new Set(Object.keys(t));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?pt:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?x:pt}(y);(null===(o=(e=w).needsInterpolation)||void 0===o?void 0:o.call(e,r,b))&&(M=P([0,100],[r,b],{clamp:!1}),r=0,b=100);const S=w(Object.assign(Object.assign({},y),{from:r,to:b}));function R(){j++,"reverse"===c?(O=j%2==0,i=function(t,n,e=0,o=!0){return o?dt(n+-t,n,e):n-(t-n)+e}(i,A,l,O)):(i=dt(i,A,l),"mirror"===c&&S.flipTarget()),D=!1,d&&d()}function T(t){if(O||(t=-t),i+=t,!D){const t=S.next(Math.max(0,i));g=t.value,M&&(g=M(g)),D=O?t.done:i<=0}null==h||h(g),D&&(0===j&&(null!=A||(A=i)),j<u?function(t,n,e,o){return o?t>=n+e:t<=-e}(i,A,l,O)&&R():(v.stop(),m&&m()))}return s&&(null==f||f(),v=a(T),v.start()),{stop:()=>{null==p||p(),v.stop()}}}function vt(t,n){return n?t*(1e3/n):0}function gt({from:t=0,velocity:n=0,min:e,max:o,power:r=.8,timeConstant:s=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:u=1,modifyTarget:l,driver:f,onUpdate:p,onComplete:m,onStop:d}){let h;function y(t){return void 0!==e&&t<e||void 0!==o&&t>o}function v(t){return void 0===e?o:void 0===o||Math.abs(e-t)<Math.abs(o-t)?e:o}function g(t){null==h||h.stop(),h=yt(Object.assign(Object.assign({},t),{driver:f,onUpdate:n=>{var e;null==p||p(n),null===(e=t.onUpdate)||void 0===e||e.call(t,n)},onComplete:m,onStop:d}))}function M(t){g(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:u},t))}if(y(t))M({from:t,velocity:n,to:v(t)});else{let o=r*n+t;void 0!==l&&(o=l(o));const a=v(o),i=a===e?-1:1;let f,p;const m=t=>{f=p,p=t,n=vt(t-f,c().delta),(1===i&&t>a||-1===i&&t<a)&&M({from:t,to:a,velocity:n})};g({type:"decay",from:t,velocity:n,timeConstant:s,power:r,restDelta:u,modifyTarget:l,onUpdate:y(o)?m:void 0})}return{stop:()=>null==h?void 0:h.stop()}}const Mt=(t,n)=>1-3*n+3*t,bt=(t,n)=>3*n-6*t,jt=t=>3*t,xt=(t,n,e)=>((Mt(n,e)*t+bt(n,e))*t+jt(n))*t,At=(t,n,e)=>3*Mt(n,e)*t*t+2*bt(n,e)*t+jt(n),Dt=1e-7,Ot=10;const wt=8;const St=.1;function Rt(t,n,e,o){if(t===n&&e===o)return K;const r=new Float32Array(11);for(let a=0;a<11;++a)r[a]=xt(a*St,t,e);function s(n){let o=0,s=1;for(;10!==s&&r[s]<=n;++s)o+=St;--s;const a=o+(n-r[s])/(r[s+1]-r[s])*St,i=At(a,t,e);return i>=.001?function(t,n,e,o){for(let r=0;r<wt;++r){const r=At(n,e,o);if(0===r)return n;n-=(xt(n,e,o)-t)/r}return n}(n,a,t,e):0===i?a:function(t,n,e,o,r){let s,a,i=0;do{a=n+(e-n)/2,s=xt(a,o,r)-t,s>0?e=a:n=a}while(Math.abs(s)>Dt&&++i<Ot);return a}(n,o,o+St,t,e)}return t=>0===t||1===t?t:xt(s(t),n,o)}export{yt as a,X as b,Rt as c,W as d,Q as e,Y as f,tt as g,Z as h,gt as i,nt as j,ot as k,K as l,et as m,rt as n,ct as o,lt as p,ut as q,vt as v};