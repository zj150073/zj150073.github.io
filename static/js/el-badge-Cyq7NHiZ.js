var _=Object.defineProperty,D=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var c=(a,t,e)=>t in a?_(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,m=(a,t)=>{for(var e in t||(t={}))B.call(t,e)&&c(a,e,t[e]);if(p)for(var e of p(t))C.call(t,e)&&c(a,e,t[e]);return a},f=(a,t)=>D(a,S(t));import{bo as A,m as N,q as g,d as h,v as T,y,p as b,o as $,c as k,D as P,b as x,h as U,w as z,e as V,E as v,u as r,B as O,t as R,a1 as Z,T as j,F as q}from"./index-OvWHmmPH.js";import{_ as F}from"./use-form-item-DKHcoos1.js";import{a as w}from"./base-Bg9h3Z_O.js";function W(){if(!arguments.length)return[];var a=arguments[0];return A(a)?a:[a]}const X={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},H=N({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String,badgeStyle:{type:g([String,Object,Array])},offset:{type:g(Array),default:[0,0]},badgeClass:{type:String}}),I=h({name:"ElBadge"}),L=h(f(m({},I),{props:H,setup(a,{expose:t}){const e=a,n=T("badge"),o=y(()=>e.isDot?"":b(e.value)&&b(e.max)?e.max<e.value?`${e.max}+`:e.value===0&&!e.showZero?"":`${e.value}`:`${e.value}`),E=y(()=>{var s,l,i,u,d;return[{backgroundColor:e.color,marginRight:w(-((l=(s=e.offset)==null?void 0:s[0])!=null?l:0)),marginTop:w((u=(i=e.offset)==null?void 0:i[1])!=null?u:0)},(d=e.badgeStyle)!=null?d:{}]});return t({content:o}),(s,l)=>($(),k("div",{class:v(r(n).b())},[P(s.$slots,"default"),x(j,{name:`${r(n).namespace.value}-zoom-in-center`,persisted:""},{default:U(()=>[z(V("sup",{class:v([r(n).e("content"),r(n).em("content",s.type),r(n).is("fixed",!!s.$slots.default),r(n).is("dot",s.isDot),s.badgeClass]),style:O(r(E)),textContent:R(r(o))},null,14,["textContent"]),[[Z,!s.hidden&&(r(o)||s.isDot)]])]),_:1},8,["name"])],2))}}));var G=F(L,[["__file","badge.vue"]]);const Y=q(G);export{X as E,Y as a,W as c};
