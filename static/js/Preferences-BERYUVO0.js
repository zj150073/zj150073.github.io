var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,l,o)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o;import{f as c,m as u,_ as s}from"./index-DK9WUj9J.js";const i=(e=>(Vue.pushScopeId("data-v-429391e8"),e=e(),Vue.popScopeId(),e))((()=>Vue.createElementVNode("h3",{class:"my-8"},"偏好设置",-1))),V={class:"flex items-center"},p={class:"flex-1"},d={class:"wp-4"},m=Vue.defineComponent((f=((e,t)=>{for(var l in t||(t={}))r.call(t,l)&&a(e,l,t[l]);if(o)for(var l of o(t))n.call(t,l)&&a(e,l,t[l]);return e})({},{name:"Preferences"}),t(f,l({__name:"Preferences",setup(e){const t=Vue.ref([{title:"账户密码",illustrate:"其他用户的消息将以站内信的形式通知",checked:!0},{title:"系统消息",illustrate:"系统消息将以站内信的形式通知",checked:!0},{title:"待办任务",illustrate:"待办任务将以站内信的形式通知",checked:!0}]);return(e,l)=>{const o=Vue.resolveComponent("el-text"),r=Vue.resolveComponent("el-switch"),n=Vue.resolveComponent("el-divider");return Vue.openBlock(),Vue.createElementBlock("div",{class:Vue.normalizeClass(["min-w-[180px]",Vue.unref(c)()?"max-w-[100%]":"max-w-[70%]"])},[i,(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(t.value,((e,t)=>(Vue.openBlock(),Vue.createElementBlock("div",{key:t},[Vue.createElementVNode("div",V,[Vue.createElementVNode("div",p,[Vue.createElementVNode("p",null,Vue.toDisplayString(e.title),1),Vue.createElementVNode("p",d,[Vue.createVNode(o,{class:"mx-1",type:"info"},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(e.illustrate),1)])),_:2},1024)])]),Vue.createVNode(r,{modelValue:e.checked,"onUpdate:modelValue":t=>e.checked=t,"inline-prompt":"","active-text":"是","inactive-text":"否",onChange:t=>function(e,t){u(`${t.title}设置成功`,{type:"success"})}(0,e)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),Vue.createVNode(n)])))),128))],2)}}}))));var f;const v=s(m,[["__scopeId","data-v-429391e8"]]);export{v as default};
