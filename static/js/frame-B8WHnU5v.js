import{d as h,l as i,p as g,u as t,F as x,v as I,j as R,w as k,o as S,c as w,e as B,R as E,_ as L}from"./index-j1Hvf1Yt.js";const P={class:"frame","element-loading-text":"加载中..."},y=["src"],D=h({name:"LayFrame",__name:"frame",props:{frameInfo:{}},setup(v){var m,u,d;const s=v,f=i(!0),r=g(),n=i(""),l=i(null);(m=t(r.meta))!=null&&m.frameSrc&&(n.value=(u=t(r.meta))==null?void 0:u.frameSrc),((d=t(r.meta))==null?void 0:d.frameLoading)===!1&&c();function c(){f.value=!1}function p(){E(()=>{const e=t(l);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",()=>{c()}):e.onload=()=>{c()}})}return x(()=>r.fullPath,e=>{var a,o,_;r.name==="Redirect"&&e.includes((a=s.frameInfo)==null?void 0:a.fullPath)&&(n.value=e,f.value=!0),((o=s.frameInfo)==null?void 0:o.fullPath)===e&&(n.value=(_=s.frameInfo)==null?void 0:_.frameSrc)}),I(()=>{p()}),(e,a)=>{const o=R("loading");return k((S(),w("div",P,[B("iframe",{ref_key:"frameRef",ref:l,src:t(n),class:"frame-iframe"},null,8,y)])),[[o,t(f)]])}}}),j=L(D,[["__scopeId","data-v-880dcf75"]]);export{j as default};
