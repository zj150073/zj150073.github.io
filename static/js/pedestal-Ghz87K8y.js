var g=Object.defineProperty;var u=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var d=(a,e,t)=>e in a?g(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,s=(a,e)=>{for(var t in e||(e={}))m.call(e,t)&&d(a,t,e[t]);if(u)for(var t of u(e))f.call(e,t)&&d(a,t,e[t]);return a};import{d as _,l as v,q as r,o as y,c as x,e as i,K as n,t as p,_ as H}from"./index-6jyvy8UW.js";const k={class:"title"},w=_({__name:"pedestal",props:{config:{type:Object,default:()=>({backgroundImage:"zantai",height:"141.734px",width:"143.984px"})}},setup(a){let e=v({height:"40%",width:"100%",nullHeight:"10%",numHeight:"22%",num:0,titile:"titile"});const t=a,h=r(()=>{let{height:o,width:c}=l.value;return{height:o,width:c}}),l=r(()=>s(s({},e.value),t.config));return(o,c)=>(y(),x("div",{class:"pedestal",style:n(h.value)},[i("div",{class:"null",style:n(`height: ${l.value.nullHeight}`)},null,4),i("div",k,p(l.value.titile),1),i("div",{class:"num",style:n(`height: ${l.value.numHeight}`)},p(l.value.num),5)],4))}}),z=H(w,[["__scopeId","data-v-8f80dc4a"]]);export{z as default};