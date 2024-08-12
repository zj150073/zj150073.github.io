var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,r=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t;import{m as V,_ as n}from"./index-DK9WUj9J.js";import{H as s}from"./home-filled-B9SlqJCa.js";import{u as i}from"./hooks-D3PhPGWW.js";import{S as c}from"./index-Cal8pD8i.js";const d=e=>(Vue.pushScopeId("data-v-9f768cfa"),e=e(),Vue.popScopeId(),e),p={class:"card-header"},m=d((()=>Vue.createElementVNode("span",{style:{"font-size":"16px","font-weight":"800"}}," 分段控制器 ",-1))),b={class:"mb-2"},v={class:"text-primary"},N=d((()=>Vue.createElementVNode("p",{class:"mb-2"},"tooltip 提示",-1))),f=d((()=>Vue.createElementVNode("p",{class:"mb-2"},"change 事件",-1))),w=d((()=>Vue.createElementVNode("p",{class:"mb-2"},"禁用",-1))),h=d((()=>Vue.createElementVNode("p",{class:"mb-2"},"全局禁用",-1))),x=d((()=>Vue.createElementVNode("p",{class:"mb-2"},"block 属性(将宽度调整为父元素宽度)",-1))),z=d((()=>Vue.createElementVNode("p",{class:"mb-2"},"可设置图标",-1))),C=d((()=>Vue.createElementVNode("p",{class:"mb-2"},"只设置图标",-1))),g=d((()=>Vue.createElementVNode("p",{class:"mb-2"},"自定义渲染",-1))),j=Vue.defineComponent((_=((e,l)=>{for(var a in l||(l={}))o.call(l,a)&&r(e,a,l[a]);if(t)for(var a of t(l))u.call(l,a)&&r(e,a,l[a]);return e})({},{name:"Segmented"}),l(_,a({__name:"segmented",setup(e){const l=Vue.ref(4),a=Vue.ref("default"),t=Vue.ref(),o=[{label:"周一"},{label:"周二"},{label:"周三"},{label:"周四"},{label:"周五"}],u=[{label:"周一",tip:"周一启航，新的篇章"},{label:"周二",tip:"周二律动，携手共进"},{label:"周三",tip:"周三昂扬，激情不减"},{label:"周四",tip:"周四精进，事半功倍"},{label:"周五",tip:"周五喜悦，收尾归档"}],r=[{label:"周一"},{label:"周二"},{label:"周三",disabled:!0},{label:"周四"},{label:"周五",disabled:!0}],n=[{label:"周一"},{label:"周二"},{label:"周三"},{label:"周四"},{label:"周五喜悦，收尾归档，周末倒计时",tip:"周五喜悦，收尾归档，周末倒计时"}],d=[{label:"周一",icon:s},{label:"周二"},{label:"周三",icon:"ri:terminal-window-line"},{label:"周四"},{label:"周五",icon:"streamline-emojis:2"}],j=[{icon:s},{icon:"ri:terminal-window-line"},{icon:"streamline-emojis:cow-face"},{icon:"streamline-emojis:airplane"},{icon:"streamline-emojis:2"}],_=[{label:()=>Vue.createVNode("div",null,[Vue.h(i(s),{class:"m-auto mt-1 w-[18px] h-[18px]"}),Vue.createVNode("p",null,[Vue.createTextVNode("周一")])])},{label:()=>Vue.createVNode("div",null,[Vue.h(i("ri:terminal-window-line"),{class:"m-auto mt-1 w-[18px] h-[18px]"}),Vue.createVNode("p",null,[Vue.createTextVNode("周二")])])},{label:()=>Vue.createVNode("div",null,[Vue.h(i("streamline-emojis:cow-face"),{class:"m-auto mt-1 w-[18px] h-[18px]"}),Vue.createVNode("p",null,[Vue.createTextVNode("周三")])])}],E=[{label:"周一",value:1},{label:"周二",value:2},{label:"周三",value:3}];function y({index:e,option:l}){const{label:a,value:t}=l;V(`当前选中项索引为：${e}，名字为${a}，值为${t}`,{type:"success"})}return Vue.watch(a,(()=>t.value=a.value)),(e,V)=>{const s=Vue.resolveComponent("el-radio"),i=Vue.resolveComponent("el-radio-group"),O=Vue.resolveComponent("el-space"),T=Vue.resolveComponent("el-link"),k=Vue.resolveComponent("el-divider"),S=Vue.resolveComponent("el-scrollbar"),I=Vue.resolveComponent("el-card");return Vue.openBlock(),Vue.createBlock(I,{shadow:"never"},{header:Vue.withCtx((()=>[Vue.createElementVNode("div",p,[Vue.createVNode(O,{wrap:"",size:40},{default:Vue.withCtx((()=>[m,Vue.createVNode(i,{modelValue:a.value,"onUpdate:modelValue":V[0]||(V[0]=e=>a.value=e)},{default:Vue.withCtx((()=>[Vue.createVNode(s,{value:"large"},{default:Vue.withCtx((()=>[Vue.createTextVNode("大尺寸")])),_:1}),Vue.createVNode(s,{value:"default"},{default:Vue.withCtx((()=>[Vue.createTextVNode("默认尺寸")])),_:1}),Vue.createVNode(s,{value:"small"},{default:Vue.withCtx((()=>[Vue.createTextVNode("小尺寸")])),_:1})])),_:1},8,["modelValue"])])),_:1})]),Vue.createVNode(T,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/segmented.vue",target:"_blank"},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 代码位置 src/views/components/segmented.vue ")])),_:1})])),default:Vue.withCtx((()=>[Vue.createVNode(S,null,{default:Vue.withCtx((()=>[Vue.createElementVNode("p",b,[Vue.createTextVNode(" 基础用法（v-model）"),Vue.createElementVNode("span",v,Vue.toDisplayString(o[l.value].label),1)]),Vue.createVNode(Vue.unref(c),{modelValue:l.value,"onUpdate:modelValue":V[1]||(V[1]=e=>l.value=e),options:o,size:t.value},null,8,["modelValue","size"]),Vue.createVNode(k),N,Vue.createVNode(Vue.unref(c),{options:u,size:t.value},null,8,["size"]),Vue.createVNode(k),f,Vue.createVNode(Vue.unref(c),{options:E,size:t.value,onChange:y},null,8,["size"]),Vue.createVNode(k),w,Vue.createVNode(Vue.unref(c),{options:r,size:t.value},null,8,["size"]),Vue.createVNode(k),h,Vue.createVNode(Vue.unref(c),{options:o,size:t.value,disabled:""},null,8,["size"]),Vue.createVNode(k),x,Vue.createVNode(Vue.unref(c),{options:n,block:"",size:t.value},null,8,["size"]),Vue.createVNode(k),z,Vue.createVNode(Vue.unref(c),{options:d,size:t.value},null,8,["size"]),Vue.createVNode(k),C,Vue.createVNode(Vue.unref(c),{options:j,size:t.value},null,8,["size"]),Vue.createVNode(k),g,Vue.createVNode(Vue.unref(c),{options:_,size:t.value},null,8,["size"])])),_:1})])),_:1})}}}))));var _;const E=n(j,[["__scopeId","data-v-9f768cfa"]]);export{E as default};
