var W=Object.defineProperty,D=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var p=(a,e,t)=>e in a?W(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,g=(a,e)=>{for(var t in e||(e={}))I.call(e,t)&&p(a,t,e[t]);if(f)for(var t of f(e))S.call(e,t)&&p(a,t,e[t]);return a},h=(a,e)=>D(a,E(e));import{q as k,bk as X,D as L,o as w,c as R,e as c,A as _,f as r,y as b,d as j,x as q,g as z,h as v,u as A,at as M}from"./index-CY8b9gUt.js";import{_ as N}from"./plugin-vueexport-helper-DlAUqK2U.js";const O=["id"],T=["id"],U=["id"],F={class:"right"},G={name:"leftRight"},H=Object.assign(G,{props:{modelValue:{type:String,default:()=>({width:100,sidebarBackground:"red"})}},emits:["update:modelValue"],setup(a,{emit:e}){const t=e,o=a,s=k(X()),V=(d,n)=>{const i=document.getElementById(d),u=document.getElementById(n),$=document.getElementById(`allocation${s.value}`);i.onmousedown=function(B){const x=B.clientX;i.backupsLeft=i.offsetLeft,u.backupsWidth=u.offsetWidth,document.onmousemove=function(y){const C=y.clientX;let l="";switch(d){case`sidebar${s.value}`:{l=u.backupsWidth+(C-x);const m=$.clientWidth-50;l+50>m&&(l=m-4),l<50&&(l=50),t("update:modelValue",h(g({},o.modelValue),{width:l}));break}}u.style.width=l+"px"},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null,i.releaseCapture&&i.releaseCapture()}}};return L(()=>{V(`sidebar${s.value}`,`left${s.value}`)}),(d,n)=>(w(),R("div",{class:"allocation",id:`allocation${s.value}`},[c("div",{class:"left",id:`left${s.value}`,style:b(`width: ${o.modelValue.width}px`)},[_(d.$slots,"left",{},()=>[n[0]||(n[0]=r(" 左内容 "))],!0)],12,T),c("div",{class:"sidebar",id:`sidebar${s.value}`,title:"收缩侧边栏",style:b(`background: ${o.modelValue.sidebarBackground}`)},null,12,U),c("div",F,[_(d.$slots,"right",{},()=>[n[1]||(n[1]=r(" 右内容 "))],!0)])],8,O))}}),J=N(H,[["__scopeId","data-v-eb19dfa7"]]),Y=j({__name:"index",setup(a){let e=k({width:200,sidebarBackground:"red"});return q(()=>e.value,(t,o)=>{},{deep:!0,immediate:!0}),(t,o)=>(w(),z(J,{modelValue:A(e),"onUpdate:modelValue":o[0]||(o[0]=s=>M(e)?e.value=s:e=s)},{left:v(()=>o[1]||(o[1]=[r(" a ")])),right:v(()=>o[2]||(o[2]=[r(" b")])),_:1},8,["modelValue"]))}});export{Y as default};
