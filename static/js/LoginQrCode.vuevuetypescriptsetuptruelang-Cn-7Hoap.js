var E=Object.defineProperty,S=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var f=(o,t,e)=>t in o?E(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,_=(o,t)=>{for(var e in t||(t={}))C.call(t,e)&&f(o,e,t[e]);if(m)for(var e of m(t))g.call(t,e)&&f(o,e,t[e]);return o},v=(o,t)=>S(o,b(t));import"./base-Bg9h3Z_O.js";import{E as x}from"./el-button-Bd22glxn.js";import{M as i}from"./motion-C4aruAOf.js";import{m as N,q as P,d as u,v as k,y as B,o as d,c,E as y,u as s,D as R,J as V,B as z,F as D,a8 as T,b as a,h as n,e as $,aR as w,f as Q,a2 as h}from"./index-OvWHmmPH.js";import{_ as F}from"./use-form-item-DKHcoos1.js";const M=N({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:P(String),default:"solid"}}),U=u({name:"ElDivider"}),q=u(v(_({},U),{props:M,setup(o){const t=o,e=k("divider"),l=B(()=>e.cssVar({"border-style":t.borderStyle}));return(r,p)=>(d(),c("div",{class:y([s(e).b(),s(e).m(r.direction)]),style:z(s(l)),role:"separator"},[r.$slots.default&&r.direction!=="vertical"?(d(),c("div",{key:0,class:y([s(e).e("text"),s(e).is(r.contentPosition)])},[R(r.$slots,"default")],2)):V("v-if",!0)],6))}}));var A=F(q,[["__file","divider.vue"]]);const G=D(A),W=u({__name:"LoginQrCode",setup(o){return(t,e)=>{const l=T("ReQrcode"),r=G,p=x;return d(),c(h,null,[a(s(i),{class:"-mt-2 -mb-2"},{default:n(()=>[a(l,{text:"模拟测试"})]),_:1}),a(s(i),{delay:100},{default:n(()=>[a(r,null,{default:n(()=>e[1]||(e[1]=[$("p",{class:"text-gray-500 text-xs"},'扫码后点击"确认"，即可完成登录',-1)])),_:1})]),_:1}),a(s(i),{delay:150},{default:n(()=>[a(p,{class:"w-full mt-4",onClick:e[0]||(e[0]=H=>s(w)().SET_CURRENTPAGE(0))},{default:n(()=>e[2]||(e[2]=[Q(" 返回 ")])),_:1})]),_:1})],64)}}});export{G as E,W as _};
