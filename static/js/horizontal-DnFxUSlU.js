import{s as e,a as s}from"./vue-virtual-scroller-DRu9bq7A.js";import{d as i,r as t,b as o,a1 as r,o as a,c as m,a as p,E as l,s as n,B as j,D as d,q as u,p as c}from"./@vue-CFXrvzpc.js";import{_ as v}from"./index-CQT2hjpo.js";import"./vue-resize-D8ql9e2k.js";import"./vue-observe-visibility-B19Pk0vs.js";import"./vite-plugin-fake-server-CytHVkXj.js";import"./@faker-js-CRy60TLX.js";import"./version-rocket-chvOQqaV.js";import"./@pureadmin-f9nW_l6N.js";import"./vue-DWYrQbHy.js";import"./element-plus-DsFyl0Kk.js";import"./lodash-es-BgzC0s9P.js";import"./@element-plus-Bqpau_gV.js";import"./@popperjs-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-BWHVJBZs.js";import"./@amap-Bx2D3lnM.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-kghe82LF.js";import"./@iconify-icons-CxRB8ffa.js";import"./@vueuse-tP1Y4vdd.js";import"./defu-iUM7Auia.js";import"./framesync-CUhBu5sQ.js";import"./style-value-types-UCYNu-x1.js";import"./popmotion-DRTv1-mp.js";import"./hey-listen-DkH12NBk.js";import"./plus-pro-components-CYEVFP0q.js";import"./sortablejs-DhhifNSC.js";import"./axios-B1L2Kzed.js";import"./vue-i18n-DB-7wkrF.js";import"./@intlify-DfwD9yJy.js";import"./js-cookie-BXEMiIsG.js";import"./pinia-DzAV29mk.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-CGx-uoKe.js";import"./axs-request-CnYniYE7.js";import"./nprogress-L6f6pfEY.js";import"./echarts-D2b6xzX-.js";import"./zrender-CUz1GrA9.js";import"./tslib-ZseNXxlj.js";import"./vxe-table-CPtn8uUL.js";import"./xe-utils-CdBoVBzI.js";import"./dom-zindex-Ckn4mXSH.js";import"./responsive-storage-5vfjqqcs.js";import"./@iconify-BUzAfhQo.js";/* empty css                 */import"./vue-tippy-DPYCMIfw.js";const f={class:"dynamic-scroller-demo"},h={class:"flex-ac mb-4 shadow-2xl"},y={class:"text-center"},x=v(i({__name:"horizontal",setup(i){const v=t([]),x=t("");for(let e=0;e<800;e++)v.value.push({id:e});const g=o((()=>{if(!x.value)return v.value;const e=x.value;return v.value.filter((s=>s.id==e))}));return(i,t)=>{const o=r("el-input"),v=r("IconifyIconOnline");return a(),m("div",f,[p("div",h,[l(" 水平模式 horizontal "),n(o,{modelValue:x.value,"onUpdate:modelValue":t[0]||(t[0]=e=>x.value=e),class:"mr-2 !w-[1/1.5]",clearable:"",placeholder:"Filter...",style:{width:"300px"}},null,8,["modelValue"])]),n(d(s),{items:g.value,"min-item-size":54,direction:"horizontal",class:"scroller"},{default:j((({item:s,index:i,active:t})=>{var o;return[n(d(e),{item:s,active:t,"size-dependencies":[s.id],"data-index":i,"data-active":t,title:`Click to change message ${i}`,style:u({width:`${Math.max(130,Math.round((null==(o=s.id)?void 0:o.length)/20*20))}px`}),class:"message"},{default:j((()=>[p("div",null,[n(v,{icon:"openmoji:beaming-face-with-smiling-eyes",width:"40"}),p("p",y,c(s.id),1)])])),_:2},1032,["item","active","size-dependencies","data-index","data-active","title","style"])]})),_:1},8,["items"])])}}}),[["__scopeId","data-v-d46e8f01"]]);export{x as default};
