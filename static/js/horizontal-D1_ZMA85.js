import{s as e,a}from"./vue-virtual-scroller.esm-DpOaWXPo.js";import{d as s,a as t,p as i,e as l,f as n,k as d,g as o,h as r,i as c,w as u,u as m,s as v,t as p,_ as h}from"./index-DTxOO0Gw.js";const f={class:"dynamic-scroller-demo"},x={class:"flex-ac mb-4 shadow-2xl"},g={class:"text-center"},w=h(s({__name:"horizontal",setup(s){const h=t([]),w=t("");for(let e=0;e<800;e++)h.value.push({id:e});const _=i((()=>{if(!w.value)return h.value;const e=w.value;return h.value.filter((a=>a.id==e))}));return(s,t)=>{const i=l("el-input"),h=l("IconifyIconOnline");return n(),d("div",f,[o("div",x,[r(" 水平模式 horizontal "),c(i,{modelValue:w.value,"onUpdate:modelValue":t[0]||(t[0]=e=>w.value=e),class:"mr-2 !w-[1/1.5]",clearable:"",placeholder:"Filter...",style:{width:"300px"}},null,8,["modelValue"])]),c(m(a),{items:_.value,"min-item-size":54,direction:"horizontal",class:"scroller"},{default:u((({item:a,index:s,active:t})=>{var i;return[c(m(e),{item:a,active:t,"size-dependencies":[a.id],"data-index":s,"data-active":t,title:`Click to change message ${s}`,style:v({width:`${Math.max(130,Math.round((null==(i=a.id)?void 0:i.length)/20*20))}px`}),class:"message"},{default:u((()=>[o("div",null,[c(h,{icon:"openmoji:beaming-face-with-smiling-eyes",width:"40"}),o("p",g,p(a.id),1)])])),_:2},1032,["item","active","size-dependencies","data-index","data-active","title","style"])]})),_:1},8,["items"])])}}}),[["__scopeId","data-v-d46e8f01"]]);export{w as default};
