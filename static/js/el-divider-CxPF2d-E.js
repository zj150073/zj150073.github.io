var v=Object.defineProperty,m=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var a=(r,t,e)=>t in r?v(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,n=(r,t)=>{for(var e in t||(t={}))S.call(t,e)&&a(r,e,t[e]);if(i)for(var e of i(t))_.call(t,e)&&a(r,e,t[e]);return r},l=(r,t)=>m(r,y(t));import{k as b,n as h,d as u,p as P,t as g,o as d,c,B as p,u as o,A as k,G as z,y as C,C as E}from"./index-CY8b9gUt.js";import{_ as B}from"./use-form-item-DQojTAwn.js";const D=b({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:h(String),default:"solid"}}),N=u({name:"ElDivider"}),V=u(l(n({},N),{props:D,setup(r){const t=r,e=P("divider"),f=g(()=>e.cssVar({"border-style":t.borderStyle}));return(s,w)=>(d(),c("div",{class:p([o(e).b(),o(e).m(s.direction)]),style:C(o(f)),role:"separator"},[s.$slots.default&&s.direction!=="vertical"?(d(),c("div",{key:0,class:p([o(e).e("text"),o(e).is(s.contentPosition)])},[k(s.$slots,"default")],2)):z("v-if",!0)],6))}}));var $=B(V,[["__file","divider.vue"]]);const T=E($);export{T as E};
