import{d as g,U as x,a as l,ae as I,u as n,n as k,m as R,A as B,B as L,f as S,k as y,g as E,y as P,_ as w}from"./index-BdQqVUXy.js";const D=["element-loading-text"],A=["src"],C=g({name:"LayFrame",__name:"frame",props:{frameInfo:{}},setup(v){var m,u,d;const o=v,{t:p}=x(),f=l(!0),t=I(),r=l(""),i=l(null);(m=n(t.meta))!=null&&m.frameSrc&&(r.value=(u=n(t.meta))==null?void 0:u.frameSrc),((d=n(t.meta))==null?void 0:d.frameLoading)===!1&&c();function c(){f.value=!1}function h(){P(()=>{const e=n(i);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",()=>{c()}):e.onload=()=>{c()}})}return k(()=>t.fullPath,e=>{var a,s,_;t.name==="Redirect"&&e.includes((a=o.frameInfo)==null?void 0:a.fullPath)&&(r.value=e,f.value=!0),((s=o.frameInfo)==null?void 0:s.fullPath)===e&&(r.value=(_=o.frameInfo)==null?void 0:_.frameSrc)}),R(()=>{h()}),(e,a)=>{const s=B("loading");return L((S(),y("div",{class:"frame","element-loading-text":n(p)("status.pureLoad")},[E("iframe",{ref_key:"frameRef",ref:i,src:r.value,class:"frame-iframe"},null,8,A)],8,D)),[[s,f.value]])}}}),M=w(C,[["__scopeId","data-v-c4880d91"]]);export{M as default};
