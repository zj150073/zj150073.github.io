var g=Object.defineProperty;var u=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var d=(l,e,t)=>e in l?g(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,s=(l,e)=>{for(var t in e||(e={}))m.call(e,t)&&d(l,t,e[t]);if(u)for(var t of u(e))_.call(e,t)&&d(l,t,e[t]);return l};import{d as f,l as v,q as r,o as y,c as x,e as i,K as n,t as p,_ as H}from"./index-WCybxo84.js";const b={class:"title"},k=f({__name:"pedestal",props:{config:{type:Object,default:()=>({backgroundImage:"zantai",height:"141.734px",width:"143.984px"})}},setup(l){let e=v({height:"40%",width:"100%",nullHeight:"10%",numHeight:"22%",num:0,titile:"titile"});const t=l,h=r(()=>{let{height:o,width:c}=a.value;return{height:o,width:c}}),a=r(()=>s(s({},e.value),t.config));return(o,c)=>(y(),x("div",{class:"pedestal",style:n(h.value)},[i("div",{class:"null",style:n(`height: ${a.value.nullHeight}`)},null,4),i("div",b,p(a.value.titile),1),i("div",{class:"num",style:n(`height: ${a.value.numHeight}`)},p(a.value.num),5)],4))}}),z=H(k,[["__scopeId","data-v-637b4d83"]]);export{z as default};
