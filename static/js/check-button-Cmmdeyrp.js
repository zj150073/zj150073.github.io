var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(a,l,s)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[l]=s,i=(e,a)=>{for(var l in a||(a={}))t.call(a,l)&&d(e,l,a[l]);if(s)for(var l of s(a))o.call(a,l)&&d(e,l,a[l]);return e},u=(e,s)=>a(e,l(s));import{m as r,_ as c}from"./index-CQT2hjpo.js";import{g as p}from"./@pureadmin-f9nW_l6N.js";import{d as m,r as n,w as v,f as b,B as f,a1 as j,o as h,a as k,s as _,E as g,c as y,g as w,j as V,p as z,F as x,D as O,aC as U,aD as C}from"./@vue-CFXrvzpc.js";import"./vite-plugin-fake-server-CytHVkXj.js";import"./@faker-js-CRy60TLX.js";import"./version-rocket-chvOQqaV.js";import"./@iconify-icons-CxRB8ffa.js";import"./@vueuse-tP1Y4vdd.js";import"./defu-iUM7Auia.js";import"./framesync-CUhBu5sQ.js";import"./style-value-types-UCYNu-x1.js";import"./popmotion-DRTv1-mp.js";import"./hey-listen-DkH12NBk.js";import"./element-plus-DsFyl0Kk.js";import"./lodash-es-BgzC0s9P.js";import"./@element-plus-Bqpau_gV.js";import"./@popperjs-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-BWHVJBZs.js";import"./@amap-Bx2D3lnM.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-kghe82LF.js";import"./plus-pro-components-CYEVFP0q.js";import"./sortablejs-DhhifNSC.js";import"./axios-B1L2Kzed.js";import"./vue-i18n-DB-7wkrF.js";import"./@intlify-DfwD9yJy.js";import"./js-cookie-BXEMiIsG.js";import"./pinia-DzAV29mk.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-CGx-uoKe.js";import"./axs-request-CnYniYE7.js";import"./nprogress-L6f6pfEY.js";import"./echarts-D2b6xzX-.js";import"./zrender-CUz1GrA9.js";import"./tslib-ZseNXxlj.js";import"./vxe-table-CPtn8uUL.js";import"./xe-utils-CdBoVBzI.js";import"./dom-zindex-Ckn4mXSH.js";import"./responsive-storage-5vfjqqcs.js";import"./vue-DWYrQbHy.js";import"./@iconify-BUzAfhQo.js";/* empty css                 */import"./vue-tippy-DPYCMIfw.js";const P=e=>(U("data-v-ba42e1d6"),e=e(),C(),e),I={class:"card-header"},q=P((()=>k("span",{style:{"font-size":"16px","font-weight":"800"}}," 可选按钮 ",-1))),D=P((()=>k("p",{class:"mb-2"},"单选（紧凑风格的按钮样式）",-1))),$=P((()=>k("p",{class:"mb-2"},"单选（带有边框）",-1))),B=P((()=>k("p",{class:"mb-2"},"单选（自定义内容）",-1))),E={class:"flex"},S={class:"flex"},F={class:"flex"},H=P((()=>k("p",{class:"mb-2"},"多选（紧凑风格的按钮样式）",-1))),J=P((()=>k("p",{class:"mb-2"},"多选（带有边框）",-1))),K=P((()=>k("p",{class:"mb-2"},"多选（来点不一样的体验）",-1))),L={class:"flex"},N={class:"flex"},Y={class:"flex"},A=P((()=>k("p",null,"可控制间距的按钮样式",-1))),G=P((()=>k("p",{class:"mb-2"},"单选",-1))),M={class:"mb-2 mt-4"},Q=P((()=>k("p",{class:"mb-2"},"单个可选按钮",-1))),R=c(m(u(i({},{name:"CheckButton"}),{__name:"check-button",setup(e){const a=n(20),l=n("default"),s=n(),t=n(!0),o=n("wait"),d=n("complete"),c=n("progress"),m=n(["apple","tomato"]),U=n(["cucumber","onion","blueberry"]),C=n(["tomato","watermelon","strawberry"]),P=n([{title:"等待中",checked:!1},{title:"进行中",checked:!0},{title:"已完成",checked:!1}]),R=n({});const T=n([{title:"苹果",checked:!0},{title:"西红柿",checked:!0},{title:"香蕉",checked:!1}]),W=n({});function X(){"disabled"!==l.value&&(t.value=!t.value)}return v(l,(e=>s.value="disabled"===e?"default":l.value)),(e,n)=>{const v=j("el-radio"),Z=j("el-radio-group"),ee=j("el-space"),ae=j("el-link"),le=j("el-radio-button"),se=j("el-divider"),te=j("IconifyIconOnline"),oe=j("el-checkbox-button"),de=j("el-checkbox-group"),ie=j("el-checkbox"),ue=j("el-slider"),re=j("el-check-tag"),ce=j("el-card");return h(),b(ce,{shadow:"never"},{header:f((()=>[k("div",I,[_(ee,{wrap:"",size:40},{default:f((()=>[q,_(Z,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=e=>l.value=e)},{default:f((()=>[_(v,{value:"large"},{default:f((()=>[g("大尺寸")])),_:1}),_(v,{value:"default"},{default:f((()=>[g("默认尺寸")])),_:1}),_(v,{value:"small"},{default:f((()=>[g("小尺寸")])),_:1}),_(v,{value:"disabled"},{default:f((()=>[g("禁用")])),_:1})])),_:1},8,["modelValue"])])),_:1})]),_(ae,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/check-button.vue",target:"_blank"},{default:f((()=>[g(" 代码位置 src/views/components/check-button.vue ")])),_:1})])),default:f((()=>[D,_(Z,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=e=>o.value=e),size:s.value,disabled:"disabled"===l.value},{default:f((()=>[_(le,{value:"wait"},{default:f((()=>[g("等待中")])),_:1}),_(le,{value:"progress"},{default:f((()=>[g("进行中")])),_:1}),_(le,{value:"complete"},{default:f((()=>[g("已完成")])),_:1})])),_:1},8,["modelValue","size","disabled"]),_(se),$,_(Z,{modelValue:d.value,"onUpdate:modelValue":n[2]||(n[2]=e=>d.value=e),size:s.value,disabled:"disabled"===l.value},{default:f((()=>[_(v,{value:"wait",border:""},{default:f((()=>[g("等待中")])),_:1}),_(v,{value:"progress",border:""},{default:f((()=>[g("进行中")])),_:1}),_(v,{value:"complete",border:""},{default:f((()=>[g("已完成")])),_:1})])),_:1},8,["modelValue","size","disabled"]),_(se),B,_(Z,{modelValue:c.value,"onUpdate:modelValue":n[3]||(n[3]=e=>c.value=e),size:s.value,disabled:"disabled"===l.value},{default:f((()=>[_(le,{value:"wait"},{default:f((()=>[k("span",E,[_(te,{icon:"ri:progress-8-fill",class:"mr-1"}),g(" 等待中 ")])])),_:1}),_(le,{value:"progress"},{default:f((()=>[k("span",S,[_(te,{icon:"ri:progress-6-line",class:"mr-1"}),g(" 进行中 ")])])),_:1}),_(le,{value:"complete"},{default:f((()=>[k("span",F,[_(te,{icon:"ri:progress-8-line",class:"mr-1"}),g(" 已完成 ")])])),_:1})])),_:1},8,["modelValue","size","disabled"]),_(se),H,_(de,{modelValue:m.value,"onUpdate:modelValue":n[4]||(n[4]=e=>m.value=e),size:s.value,disabled:"disabled"===l.value},{default:f((()=>[_(oe,{value:"apple"},{default:f((()=>[g("苹果")])),_:1}),_(oe,{value:"tomato"},{default:f((()=>[g("西红柿")])),_:1}),_(oe,{value:"banana"},{default:f((()=>[g("香蕉")])),_:1})])),_:1},8,["modelValue","size","disabled"]),_(se),J,_(de,{modelValue:U.value,"onUpdate:modelValue":n[5]||(n[5]=e=>U.value=e),size:s.value,disabled:"disabled"===l.value},{default:f((()=>[_(ie,{value:"cucumber",border:""},{default:f((()=>[g("黄瓜")])),_:1}),_(ie,{value:"onion",border:""},{default:f((()=>[g("洋葱")])),_:1}),_(ie,{value:"blueberry",border:""},{default:f((()=>[g("蓝莓")])),_:1})])),_:1},8,["modelValue","size","disabled"]),_(se),K,_(de,{modelValue:C.value,"onUpdate:modelValue":n[6]||(n[6]=e=>C.value=e),class:"pure-checkbox",size:s.value,disabled:"disabled"===l.value},{default:f((()=>[_(oe,{value:"tomato"},{default:f((()=>[k("span",L,[_(te,{icon:"streamline-emojis:tomato",class:"mr-1"}),g(" 番茄 ")])])),_:1}),_(oe,{value:"watermelon"},{default:f((()=>[k("span",N,[_(te,{icon:"streamline-emojis:watermelon-1",class:"mr-1"}),g(" 西瓜 ")])])),_:1}),_(oe,{value:"strawberry"},{default:f((()=>[k("span",Y,[_(te,{icon:"streamline-emojis:strawberry-1",class:"mr-1"}),g(" 草莓 ")])])),_:1})])),_:1},8,["modelValue","size","disabled"]),_(se),A,_(ue,{modelValue:a.value,"onUpdate:modelValue":n[7]||(n[7]=e=>a.value=e),class:"mb-2 !w-[300px]","show-tooltip":!1,disabled:"disabled"===l.value},null,8,["modelValue","disabled"]),G,_(ee,{wrap:"",size:a.value},{default:f((()=>[(h(!0),y(x,null,w(P.value,((e,a)=>(h(),b(re,{key:a,class:V(["select-none","disabled"===l.value&&"tag-disabled",e.checked&&"is-active"]),checked:e.checked,onChange:s=>function(e,a){if("disabled"===l.value)return;R.value[a]=Object.assign(u(i({},e),{checked:!e.checked})),P.value.map((e=>e.checked=!1)),P.value[a].checked=R.value[a].checked;const{title:s,checked:t}=R.value[a];r(t?`已选中${s}`:`取消选中${s}`,{type:"success"})}(e,a)},{default:f((()=>[g(z(e.title),1)])),_:2},1032,["class","checked","onChange"])))),128))])),_:1},8,["size"]),k("p",M," 多选 "+z(O(p)(T.value.filter((e=>e.checked)),"title")),1),_(ee,{wrap:"",size:a.value},{default:f((()=>[(h(!0),y(x,null,w(T.value,((e,a)=>(h(),b(re,{key:a,class:V(["select-none","disabled"===l.value&&"tag-disabled",e.checked&&"is-active"]),checked:e.checked,onChange:s=>function(e,a){"disabled"!==l.value&&(W.value[a]=Object.assign(u(i({},e),{checked:!e.checked})),T.value[a].checked=W.value[a].checked)}(e,a)},{default:f((()=>[g(z(e.title),1)])),_:2},1032,["class","checked","onChange"])))),128))])),_:1},8,["size"]),_(se),Q,_(re,{class:V(["select-none","disabled"===l.value&&"tag-disabled",t.value&&"is-active"]),checked:t.value,onChange:X},{default:f((()=>[g(" 一个人也要努力 😊 ")])),_:1},8,["class","checked"])])),_:1})}}})),[["__scopeId","data-v-ba42e1d6"]]);export{R as default};
