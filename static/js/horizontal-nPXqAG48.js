import{s as e,a as t}from"./vue-virtual-scroller.esm-CrYNQOwQ.js";import{_ as a}from"./index-DK9WUj9J.js";const l={class:"dynamic-scroller-demo"},i={class:"flex-ac mb-4 shadow-2xl"},o={class:"text-center"},n=a(Vue.defineComponent({__name:"horizontal",setup(a){const n=Vue.ref([]),u=Vue.ref("");for(let e=0;e<800;e++)n.value.push({id:e});const r=Vue.computed((()=>{if(!u.value)return n.value;const e=u.value;return n.value.filter((t=>t.id==e))}));return(a,n)=>{const s=Vue.resolveComponent("el-input"),d=Vue.resolveComponent("IconifyIconOnline");return Vue.openBlock(),Vue.createElementBlock("div",l,[Vue.createElementVNode("div",i,[Vue.createTextVNode(" 水平模式 horizontal "),Vue.createVNode(s,{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=e=>u.value=e),class:"mr-2 !w-[1/1.5]",clearable:"",placeholder:"Filter...",style:{width:"300px"}},null,8,["modelValue"])]),Vue.createVNode(Vue.unref(e),{items:r.value,"min-item-size":54,direction:"horizontal",class:"scroller"},{default:Vue.withCtx((({item:e,index:a,active:l})=>{var i;return[Vue.createVNode(Vue.unref(t),{item:e,active:l,"size-dependencies":[e.id],"data-index":a,"data-active":l,title:`Click to change message ${a}`,style:Vue.normalizeStyle({width:`${Math.max(130,Math.round((null==(i=e.id)?void 0:i.length)/20*20))}px`}),class:"message"},{default:Vue.withCtx((()=>[Vue.createElementVNode("div",null,[Vue.createVNode(d,{icon:"openmoji:beaming-face-with-smiling-eyes",width:"40"}),Vue.createElementVNode("p",o,Vue.toDisplayString(e.id),1)])])),_:2},1032,["item","active","size-dependencies","data-index","data-active","title","style"])]})),_:1},8,["items"])])}}}),[["__scopeId","data-v-d46e8f01"]]);export{n as default};
