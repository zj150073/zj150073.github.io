var e=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(o,t,r)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,l=(e,o,t)=>new Promise(((r,i)=>{var l=e=>{try{n(t.next(e))}catch(o){i(o)}},a=e=>{try{n(t.throw(e))}catch(o){i(o)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(l,a);n((t=t.apply(e,o)).next())}));import{p as a}from"./propTypes-_vpyyAAi.js";import{C as n,O as s,M as c}from"./@pureadmin-f9nW_l6N.js";import{b as d}from"./qrcode-BEXVuUTK.js";import{j as f}from"./@iconify-icons-CxRB8ffa.js";import{d as u,r as g,b as m,w as p,s as b,i as v,P as y,D as h,a1 as w,F as j,n as x}from"./@vue-CFXrvzpc.js";const C=c(u({name:"ReQrcode",props:{tag:a.string.validate((e=>["canvas","img"].includes(e))).def("canvas"),text:{type:[String,Array],default:null},options:{type:Object,default:()=>({})},width:a.number.def(200),logo:{type:[String,Object],default:()=>""},disabled:a.bool.def(!1),disabledText:a.string.def("")},emits:["done","click","disabled-click"],setup(e,{emit:a}){const{toCanvas:c,toDataURL:u}=d,C=g(!0),O=g(null),P=m((()=>String(e.text))),S=m((()=>({width:e.width+"px",height:e.width+"px"}))),R=()=>l(this,null,(function*(){yield x();const l=n(e.options||{});if("canvas"===e.tag){l.errorCorrectionLevel=l.errorCorrectionLevel||L(h(P));const o=yield k(h(P),l);l.scale=0===e.width?void 0:e.width/o*4;const t=yield c(h(O),h(P),l);if(e.logo){const e=yield T(t);a("done",e),C.value=!1}else a("done",t.toDataURL()),C.value=!1}else{const n=yield u(P.value,((e,l)=>{for(var a in l||(l={}))t.call(l,a)&&i(e,a,l[a]);if(o)for(var a of o(l))r.call(l,a)&&i(e,a,l[a]);return e})({errorCorrectionLevel:"H",width:e.width},l));h(O).src=n,a("done",n),C.value=!1}}));p((()=>P.value),(e=>{e&&R()}),{deep:!0,immediate:!0});const T=o=>{const t=o.width,r=Object.assign({logoSize:.15,bgColor:"#ffffff",borderSize:.05,crossOrigin:"anonymous",borderRadius:8,logoRadius:0},s(e.logo)?{}:e.logo),{logoSize:i=.15,bgColor:l="#ffffff",borderSize:a=.05,crossOrigin:n="anonymous",borderRadius:c=8,logoRadius:d=0}=r,f=s(e.logo)?e.logo:e.logo.src,u=t*i,g=t*(1-i)/2,m=t*(i+a),p=t*(1-i-a)/2,b=o.getContext("2d");if(!b)return;z(b)(p,p,m,m,c),b.fillStyle=l,b.fill();const v=new Image;(n||d)&&v.setAttribute("crossOrigin",n),v.src=f;return new Promise((e=>{v.onload=()=>{var t;d?(e=>{const o=document.createElement("canvas");o.width=g+u,o.height=g+u;const t=o.getContext("2d");if(!t||!b)return;if(t.drawImage(e,g,g,u,u),z(b)(g,g,u,u,d),!b)return;const r=b.createPattern(o,"no-repeat");r&&(b.fillStyle=r,b.fill())})(v):(t=v,b.drawImage(t,g,g,u,u)),e(o.toDataURL())}}))},k=(e,o)=>l(this,null,(function*(){const t=document.createElement("canvas");return yield c(t,e,o),t.width})),L=e=>e.length>36?"M":e.length>16?"Q":"H",z=e=>(o,t,r,i,l)=>{const a=Math.min(r,i);return l>a/2&&(l=a/2),e.beginPath(),e.moveTo(o+l,t),e.arcTo(o+r,t,o+r,t+i,l),e.arcTo(o+r,t+i,o,t+i,l),e.arcTo(o,t+i,o,t,l),e.arcTo(o,t,o+r,t,l),e.closePath(),e},D=()=>{a("click")},I=()=>{a("disabled-click")};return()=>b(j,null,[v(b("div",{class:"qrcode relative inline-block",style:h(S)},["canvas"===e.tag?b("canvas",{ref:O,onClick:D},null):b("img",{ref:O,onClick:D},null),e.disabled&&b("div",{class:"qrcode--disabled absolute top-0 left-0 flex w-full h-full items-center justify-center",onClick:I},[b("div",{class:"absolute top-[50%] left-[50%] font-bold"},[b(w("iconify-icon-offline"),{class:"cursor-pointer",icon:f,width:"30",color:"var(--el-color-primary)"},null),b("div",null,[e.disabledText])])])]),[[y("loading"),h(C)]])])}}));export{C as R};
