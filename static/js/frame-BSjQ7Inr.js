import"./base-B4sc1cqL.js";import{v as h}from"./el-loading-DzhT4tjB.js";import{d as g,E as m,am as x,u as t,x as I,n as k,w as E,o as L,c as R,e as S,a3 as w}from"./index-Bz4bpjPO.js";import{_ as B}from"./plugin-vueexport-helper-DlAUqK2U.js";const P={class:"frame","element-loading-text":"加载中..."},y=["src"],C=g({name:"LayFrame",__name:"frame",props:{frameInfo:{}},setup(v){var l,u,d;const f=v,s=m(!0),r=x(),o=m(""),i=m(null);(l=t(r.meta))!=null&&l.frameSrc&&(o.value=(u=t(r.meta))==null?void 0:u.frameSrc),((d=t(r.meta))==null?void 0:d.frameLoading)===!1&&c();function c(){s.value=!1}function p(){w(()=>{const e=t(i);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",()=>{c()}):e.onload=()=>{c()}})}return I(()=>r.fullPath,e=>{var a,n,_;r.name==="Redirect"&&e.includes((a=f.frameInfo)==null?void 0:a.fullPath)&&(o.value=e,s.value=!0),((n=f.frameInfo)==null?void 0:n.fullPath)===e&&(o.value=(_=f.frameInfo)==null?void 0:_.frameSrc)}),k(()=>{p()}),(e,a)=>{const n=h;return E((L(),R("div",P,[S("iframe",{ref_key:"frameRef",ref:i,src:t(o),class:"frame-iframe"},null,8,y)])),[[n,t(s)]])}}}),T=B(C,[["__scopeId","data-v-880dcf75"]]);export{T as default};
