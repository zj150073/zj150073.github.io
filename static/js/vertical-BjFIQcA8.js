import{s as v,a as h}from"./vue-virtual-scroller.esm-SB1ErhRL.js";import{d as x,a as r,p as g,e as d,f as w,k as I,g as o,h as V,i,w as m,u as p,t as y,_ as C}from"./index-BdQqVUXy.js";const b={class:"dynamic-scroller-demo"},k={class:"flex-ac mb-4 shadow-2xl"},z={class:"flex items-center"},B=x({__name:"vertical",setup(N){const l=r([]),s=r("");for(let e=0;e<800;e++)l.value.push({id:e});const u=g(()=>{if(!s.value)return l.value;const e=s.value;return l.value.filter(t=>t.id==e)});return(e,t)=>{const _=d("el-input"),f=d("IconifyIconOnline");return w(),I("div",b,[o("div",k,[V(" 垂直模式 vertical "),i(_,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=a=>s.value=a),class:"!w-[350px]",clearable:"",placeholder:"Filter..."},null,8,["modelValue"])]),i(p(h),{items:u.value,"min-item-size":54,class:"scroller"},{default:m(({item:a,index:n,active:c})=>[i(p(v),{item:a,active:c,"size-dependencies":[a.id],"data-index":n,"data-active":c,title:`Click to change message ${n}`,class:"message"},{default:m(()=>[o("div",z,[i(f,{icon:"openmoji:beaming-face-with-smiling-eyes",width:"40"}),o("span",null,y(a.id),1)])]),_:2},1032,["item","active","size-dependencies","data-index","data-active","title"])]),_:1},8,["items"])])}}}),$=C(B,[["__scopeId","data-v-a35496b2"]]);export{$ as default};
