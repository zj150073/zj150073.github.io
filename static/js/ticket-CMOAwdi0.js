var m=Object.defineProperty;var u=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var o=(a,t,e)=>t in a?m(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,s=(a,t)=>{for(var e in t||(t={}))f.call(t,e)&&o(a,e,t[e]);if(u)for(var e of u(t))v.call(t,e)&&o(a,e,t[e]);return a};import{d as _,l as y,q as g,o as k,c as x,e as i,u as r,I as l,t as h,_ as H}from"./index-PMeGFsoh.js";const I="/static/png/zantai-CTci-ZIf.png",z="/static/png/yuan-Cl-kHjlE.png",b=["src"],C={class:"ding"},w=_({__name:"ticket",props:{config:{type:Object,default:()=>({backgroundImage:"zantai",height:"141.734px",width:"143.984px"})}},setup(a){let t=y({backgroundImage:"zantai",height:"141.734px",width:"143.984px",nullHeight:"20%",numHeight:"35%",num:0,titile:0,titleHeight:"45%"});const e=a,d=g(()=>{let{height:p,width:c}=n.value;return{height:"60%",width:c}}),n=g(()=>s(s({},t.value),e.config));return(p,c)=>(k(),x("div",{class:"ticket",style:l(d.value)},[i("img",{src:n.value.backgroundImage==="zantai"?r(I):n.value.backgroundImage==="yuan"?r(z):"",alt:""},null,8,b),i("div",C,[i("div",{class:"null",style:l(`height: ${n.value.nullHeight}`)},null,4),i("div",{class:"num",style:l(`height: ${n.value.numHeight}`)},h(n.value.num),5),i("div",{class:"title",style:l(`height: ${n.value.titleHeight}`)},h(n.value.titile),5)])],4))}}),j=H(w,[["__scopeId","data-v-ff1521dd"]]);export{j as default};
