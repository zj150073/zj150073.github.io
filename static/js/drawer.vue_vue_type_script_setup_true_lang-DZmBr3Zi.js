var e=Object.defineProperty,l=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,u=(l,r,a)=>r in l?e(l,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[r]=a;import{b as n,_ as i}from"./_plugin-vue_export-helper-DGnNDdBR.js";/* empty css                   */import{u as s,f as d,g as p,a as c,P as m,b as V}from"./plus-form-BERDGb7o.js";const f={class:"plus-drawer-form__footer"};var v,b,h=Vue.defineComponent((v=((e,l)=>{for(var r in l||(l={}))o.call(l,r)&&u(e,r,l[r]);if(a)for(var r of a(l))t.call(l,r)&&u(e,r,l[r]);return e})({},{name:"PlusDrawerForm"}),b={__name:"index",props:{modelValue:{default:()=>({})},visible:{type:Boolean,default:!1},drawer:{default:()=>({})},size:{default:"540px"},form:{default:()=>({})},hasFooter:{type:Boolean,default:!0},cancelText:{default:""},confirmText:{default:""},confirmLoading:{type:Boolean,default:!1},hasErrorTip:{type:Boolean,default:!0}},emits:["update:modelValue","update:visible","confirm","change","cancel","confirmError"],setup(e,{expose:l,emit:r}){const a=e,o=r,{t:t}=s(),u=Vue.ref(null),i=Vue.computed((()=>{var e;return null==(e=u.value)?void 0:e.formInstance})),v=Vue.ref(),b=Vue.ref({}),h=Vue.ref(!1),w=Vue.useSlots(),y=d(w,V()),x=d(w,p()),g=d(w,c());Vue.watch((()=>a.visible),(e=>{h.value=e}),{immediate:!0}),Vue.watch((()=>a.modelValue),(e=>{b.value=e}),{immediate:!0});const P=(e,l)=>{o("update:modelValue",e),o("change",e,l)},T=()=>{return e=this,l=null,r=function*(){var e,l,r;try{(yield null==(e=i.value)?void 0:e.validate())&&o("confirm",b.value)}catch(u){if(a.hasErrorTip){ElementPlus.ElMessage.closeAll();const e=n(u)&&Object.values(u),a=e?null==(r=null==(l=e[0])?void 0:l[0])?void 0:r.message:void 0;ElementPlus.ElMessage.warning(a||t("plus.form.errorTip"))}o("confirmError",u)}},new Promise(((a,o)=>{var t=e=>{try{n(r.next(e))}catch(l){o(l)}},u=e=>{try{n(r.throw(e))}catch(l){o(l)}},n=e=>e.done?a(e.value):Promise.resolve(e.value).then(t,u);n((r=r.apply(e,l)).next())}));var e,l,r},C=()=>{h.value=!1,o("update:visible",h.value),o("cancel")};return l({drawerInstance:v,formInstance:i}),(e,l)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(ElementPlus.ElDrawer),Vue.mergeProps({ref_key:"drawerInstance",ref:v,modelValue:h.value,"onUpdate:modelValue":l[1]||(l[1]=e=>h.value=e),class:"plus-drawer-form",size:e.size||"540px",title:Vue.unref(t)("plus.drawerForm.title"),"close-on-click-modal":!1,"close-on-press-escape":!1},e.$attrs,{onClose:C}),Vue.createSlots({default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(m),Vue.mergeProps({ref_key:"formInstance",ref:u,modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=e=>b.value=e),"has-footer":!1},e.form,{onChange:P}),Vue.createSlots({_:2},[e.$slots["form-footer"]?{name:"footer",fn:Vue.withCtx((()=>[Vue.renderSlot(e.$slots,"form-footer")])),key:"0"}:void 0,e.$slots["form-group-header"]?{name:"group-header",fn:Vue.withCtx((()=>[Vue.renderSlot(e.$slots,"form-group-header")])),key:"1"}:void 0,Vue.renderList(Vue.unref(y),((l,r)=>({name:r,fn:Vue.withCtx((l=>[Vue.renderSlot(e.$slots,r,Vue.normalizeProps(Vue.guardReactiveProps(l)))]))}))),Vue.renderList(Vue.unref(x),((l,r)=>({name:r,fn:Vue.withCtx((l=>[Vue.renderSlot(e.$slots,r,Vue.normalizeProps(Vue.guardReactiveProps(l)))]))}))),Vue.renderList(Vue.unref(g),((l,r)=>({name:r,fn:Vue.withCtx((l=>[Vue.renderSlot(e.$slots,r,Vue.normalizeProps(Vue.guardReactiveProps(l)))]))}))),e.$slots["tooltip-icon"]?{name:"tooltip-icon",fn:Vue.withCtx((()=>[Vue.renderSlot(e.$slots,"tooltip-icon")])),key:"2"}:void 0]),1040,["modelValue"])])),_:2},[e.$slots["drawer-header"]?{name:"header",fn:Vue.withCtx((()=>[Vue.renderSlot(e.$slots,"drawer-header")])),key:"0"}:void 0,e.hasFooter?{name:"footer",fn:Vue.withCtx((()=>[Vue.createElementVNode("div",f,[Vue.renderSlot(e.$slots,"drawer-footer",Vue.normalizeProps(Vue.guardReactiveProps({handleConfirm:T,handleCancel:C})),(()=>[Vue.createVNode(Vue.unref(ElementPlus.ElButton),{onClick:C},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(e.cancelText||Vue.unref(t)("plus.drawerForm.cancelText")),1)])),_:1}),Vue.createVNode(Vue.unref(ElementPlus.ElButton),{type:"primary",loading:e.confirmLoading,onClick:T},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(e.confirmText||Vue.unref(t)("plus.drawerForm.confirmText")),1)])),_:1},8,["loading"])]))])])),key:"1"}:void 0]),1040,["modelValue","size","title"]))}},l(v,r(b))));const w=i(h,[["__file","index.vue"]]),y=Vue.defineComponent({__name:"drawer",setup(e){const l=[{label:"名称",width:120,prop:"name",valueType:"copy",tooltip:"名称最多显示6个字符"},{label:"状态",width:120,prop:"status",valueType:"select",options:[{label:"未解决",value:"0",color:"red"},{label:"已解决",value:"1",color:"blue"},{label:"解决中",value:"2",color:"yellow"},{label:"失败",value:"3",color:"red"}]},{label:"是否显示",width:100,prop:"switch",valueType:"switch"},{label:"时间",prop:"time",valueType:"date-picker"},{label:"数量",prop:"number",valueType:"input-number",fieldProps:{precision:2,step:2}},{label:"城市",prop:"city",valueType:"cascader",options:[{value:"0",label:"陕西",children:[{value:"0-0",label:"西安",children:[{value:"0-0-0",label:"新城区"},{value:"0-0-1",label:"高新区"},{value:"0-0-2",label:"灞桥区"}]}]},{value:"1",label:"山西",children:[{value:"1-0",label:"太原",children:[{value:"1-0-0",label:"小店区"},{value:"1-0-1",label:"古交市"},{value:"1-0-2",label:"万柏林区"}]}]}]},{label:"地区",prop:"place",tooltip:"请精确到门牌号",fieldProps:{placeholder:"请精确到门牌号"}},{label:"要求",prop:"demand",valueType:"checkbox",options:[{label:"四六级",value:"0"},{label:"计算机二级证书",value:"1"},{label:"普通话证书",value:"2"}]},{label:"梦想",prop:"gift",valueType:"radio",options:[{label:"诗",value:"0"},{label:"远方",value:"1"},{label:"美食",value:"2"}]},{label:"到期时间",prop:"endTime",valueType:"date-picker",fieldProps:{type:"datetimerange",startPlaceholder:"请选择开始时间",endPlaceholder:"请选择结束时间"}},{label:"说明",prop:"desc",valueType:"textarea",fieldProps:{maxlength:10,showWordLimit:!0,autosize:{minRows:2,maxRows:4}}}],r=Vue.ref(!1),a=Vue.ref({}),o=()=>{r.value=!0};return(e,t)=>{const u=Vue.resolveComponent("el-button");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(u,{onClick:o},{default:Vue.withCtx((()=>[Vue.createTextVNode("打开抽屉表单")])),_:1}),Vue.createVNode(Vue.unref(w),{visible:r.value,"onUpdate:visible":t[0]||(t[0]=e=>r.value=e),modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),form:{columns:l}},null,8,["visible","modelValue","form"])])}}});export{y as _};
