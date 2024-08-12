var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,u=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,c=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))r.call(t,a)&&u(e,a,t[a]);return e},i=(e,l)=>t(e,a(l));import{i as s,a as n,_ as d}from"./_plugin-vue_export-helper-DGnNDdBR.js";const V={class:"plus-check-card__avatar-wrapper"},p={class:"plus-check-card__right-content"},m={key:0,class:"plus-check-card__title"},v={class:"plus-check-card__title-left"},k={key:1,class:"plus-check-card__description"};const f=d(Vue.defineComponent(i(c({},{name:"PlusCheckCard"}),{__name:"index",props:{modelValue:{type:Boolean,default:!1},size:{default:"default"},avatar:{type:[String,Function],default:void 0},avatarProps:{default:()=>({})},title:{type:[String,Function],default:void 0},description:{type:[String,Function],default:void 0},disabled:{type:Boolean,default:!1},extra:{type:Function,default:void 0}},emits:["update:modelValue","change","extra"],setup(e,{emit:t}){const a={large:"plus-check-card--large",default:"plus-check-card--default",small:"plus-check-card--small"},l=e,o=t,r=Vue.reactive({checked:!1});Vue.watchEffect((()=>{r.checked=l.modelValue}));const u=()=>{l.disabled||(r.checked=!r.checked,o("update:modelValue",r.checked),o("change",r.checked))},c=()=>{l.disabled||o("extra")};return(e,t)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:Vue.normalizeClass(["plus-check-card",[l.size?a[l.size]:"plus-check-card--default",r.checked?"plus-check-card--checked":"",e.disabled?"plus-check-card--disabled":""]]),onClick:u},[Vue.createElementVNode("div",V,[Vue.unref(s)(e.avatar)?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(e.avatar),{key:0,avatar:e.avatar,title:e.title,description:e.description},null,8,["avatar","title","description"])):e.$slots.avatar?Vue.renderSlot(e.$slots,"avatar",{key:1,avatar:e.avatar,title:e.title,description:e.description}):Vue.unref(n)(e.avatar)?(Vue.openBlock(),Vue.createBlock(Vue.unref(ElementPlus.ElAvatar),Vue.mergeProps({key:2,src:e.avatar},e.avatarProps),null,16,["src"])):Vue.createCommentVNode("v-if",!0)]),Vue.createElementVNode("div",p,[e.title||e.$slots.title?(Vue.openBlock(),Vue.createElementBlock("div",m,[Vue.createElementVNode("div",v,[Vue.unref(s)(e.title)?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(e.title),{key:0,avatar:e.avatar,title:e.title,description:e.description},null,8,["avatar","title","description"])):e.$slots.title?Vue.renderSlot(e.$slots,"title",{key:1,title:e.title,avatar:e.avatar,description:e.description}):(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:2},[Vue.createTextVNode(Vue.toDisplayString(e.title),1)],64))]),Vue.createElementVNode("div",{class:"plus-check-card__title-right",onClick:Vue.withModifiers(c,["stop"])},[Vue.unref(s)(e.extra)?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(e.extra),{key:0,avatar:e.avatar,title:e.title,description:e.description},null,8,["avatar","title","description"])):e.$slots.extra?Vue.renderSlot(e.$slots,"extra",{key:1,title:e.title,avatar:e.avatar,description:e.description}):Vue.createCommentVNode("v-if",!0)])])):Vue.createCommentVNode("v-if",!0),e.description||e.$slots.description?(Vue.openBlock(),Vue.createElementBlock("div",k,[Vue.unref(s)(e.description)?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(e.description),{key:0,title:e.title,avatar:e.avatar,description:e.description},null,8,["title","avatar","description"])):e.$slots.description?Vue.renderSlot(e.$slots,"description",{key:1,title:e.title,description:e.description,avatar:e.avatar}):(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:2},[Vue.createTextVNode(Vue.toDisplayString(e.description),1)],64))])):Vue.createCommentVNode("v-if",!0)])],2))}})),[["__file","index.vue"]]),h={class:"plus-check-card-group"};const y=d(Vue.defineComponent(i(c({},{name:"PlusCheckCardGroup"}),{__name:"index",props:{modelValue:{default:()=>[]},options:{default:()=>[]},size:{default:void 0},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1}},emits:["update:modelValue","change","extra"],setup(e,{emit:t}){const a=e,l=t,o=Vue.reactive({checkList:[],checked:""});Vue.watchEffect((()=>{a.multiple?o.checkList=a.modelValue:o.checked=a.modelValue}));return(e,t)=>(Vue.openBlock(),Vue.createElementBlock("div",h,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.options,((t,r)=>{return Vue.openBlock(),Vue.createBlock(Vue.unref(f),Vue.mergeProps({key:t.value||r,size:e.size,disabled:e.disabled},t,{"model-value":(u=t.value,a.multiple?o.checkList.includes(u):o.checked===u),onChange:e=>((e,t)=>{if(a.multiple)e?o.checkList.push(t):o.checkList=o.checkList.filter((e=>e!==t)),l("update:modelValue",o.checkList),l("change",o.checkList);else{const a=e?t:"";l("update:modelValue",a),l("change",a)}})(e,t.value),onExtra:e=>(e=>{a.disabled||l("extra",e)})(t)}),Vue.createSlots({_:2},[e.$slots["avatar-"+t.value]||e.$slots.avatar?{name:"avatar",fn:Vue.withCtx((a=>[e.$slots["avatar-"+t.value]?Vue.renderSlot(e.$slots,"avatar-"+t.value,Vue.normalizeProps(Vue.mergeProps({key:0},a))):Vue.createCommentVNode("v-if",!0),e.$slots.avatar?Vue.renderSlot(e.$slots,"avatar",Vue.normalizeProps(Vue.mergeProps({key:1},a))):Vue.createCommentVNode("v-if",!0)])),key:"0"}:void 0,e.$slots["title-"+t.value]||e.$slots.title?{name:"title",fn:Vue.withCtx((a=>[e.$slots["title-"+t.value]?Vue.renderSlot(e.$slots,"title-"+t.value,Vue.normalizeProps(Vue.mergeProps({key:0},a))):Vue.createCommentVNode("v-if",!0),e.$slots.title?Vue.renderSlot(e.$slots,"title",Vue.normalizeProps(Vue.mergeProps({key:1},a))):Vue.createCommentVNode("v-if",!0)])),key:"1"}:void 0,e.$slots["description-"+t.value]||e.$slots.description?{name:"description",fn:Vue.withCtx((a=>[e.$slots["description-"+t.value]?Vue.renderSlot(e.$slots,"description-"+t.value,Vue.normalizeProps(Vue.mergeProps({key:0},a))):Vue.createCommentVNode("v-if",!0),e.$slots.description?Vue.renderSlot(e.$slots,"description",Vue.normalizeProps(Vue.mergeProps({key:1},a))):Vue.createCommentVNode("v-if",!0)])),key:"2"}:void 0,e.$slots["extra-"+t.value]||e.$slots.extra?{name:"extra",fn:Vue.withCtx((a=>[e.$slots["extra-"+t.value]?Vue.renderSlot(e.$slots,"extra-"+t.value,Vue.normalizeProps(Vue.mergeProps({key:0},a))):Vue.createCommentVNode("v-if",!0),e.$slots.extra?Vue.renderSlot(e.$slots,"extra",Vue.normalizeProps(Vue.mergeProps({key:1},a))):Vue.createCommentVNode("v-if",!0)])),key:"3"}:void 0]),1040,["size","disabled","model-value","onChange","onExtra"]);var u})),128))]))}})),[["__file","index.vue"]]),C={class:"card-header"},x=Vue.createElementVNode("p",{class:"mb-2 mt-4"},"单选",-1),g=Vue.createElementVNode("p",{class:"mb-2 mt-4"},"多选",-1),b=Vue.defineComponent(i(c({},{name:"CheckCard"}),{__name:"check-card",setup(e){const t=Vue.ref("default"),a=Vue.ref(),l=Vue.ref("0"),o=Vue.ref([]),r=[{title:"标题一",value:"0",description:"坚持梦想，成就不凡的自己",avatar:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{title:"标题二",value:"1",description:"每一次努力，都是成长的契机",avatar:"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"}];return Vue.watch(t,(e=>a.value="disabled"===e?"default":t.value)),(e,u)=>{const c=Vue.resolveComponent("el-link"),i=Vue.resolveComponent("el-radio"),s=Vue.resolveComponent("el-radio-group"),n=Vue.resolveComponent("el-space"),d=Vue.resolveComponent("el-card"),V=Vue.resolveDirective("tippy");return Vue.openBlock(),Vue.createBlock(d,{shadow:"never"},{header:Vue.withCtx((()=>[Vue.createElementVNode("div",C,[Vue.createVNode(n,{wrap:"",size:40},{default:Vue.withCtx((()=>[Vue.withDirectives((Vue.openBlock(),Vue.createBlock(c,{href:"https://plus-pro-components.com/components/check-card-group.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 多选卡片组 ")])),_:1})),[[V,{content:"点击查看详细文档"}]]),Vue.createVNode(s,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=e=>t.value=e)},{default:Vue.withCtx((()=>[Vue.createVNode(i,{value:"large"},{default:Vue.withCtx((()=>[Vue.createTextVNode("大尺寸")])),_:1}),Vue.createVNode(i,{value:"default"},{default:Vue.withCtx((()=>[Vue.createTextVNode("默认尺寸")])),_:1}),Vue.createVNode(i,{value:"small"},{default:Vue.withCtx((()=>[Vue.createTextVNode("小尺寸")])),_:1}),Vue.createVNode(i,{value:"disabled"},{default:Vue.withCtx((()=>[Vue.createTextVNode("禁用")])),_:1})])),_:1},8,["modelValue"])])),_:1})]),Vue.createVNode(c,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/check-card.vue",target:"_blank"},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 代码位置 src/views/components/check-card.vue ")])),_:1})])),default:Vue.withCtx((()=>[x,Vue.createVNode(Vue.unref(y),{modelValue:l.value,"onUpdate:modelValue":u[1]||(u[1]=e=>l.value=e),options:r,size:a.value,disabled:"disabled"===t.value},null,8,["modelValue","size","disabled"]),g,Vue.createVNode(Vue.unref(y),{modelValue:o.value,"onUpdate:modelValue":u[2]||(u[2]=e=>o.value=e),options:r,size:a.value,disabled:"disabled"===t.value,multiple:""},null,8,["modelValue","size","disabled"])])),_:1})}}}));export{b as default};
