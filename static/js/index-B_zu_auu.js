var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;const a={class:"dark:text-white"},p=Vue.defineComponent((c=((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&l(e,r,t[r]);if(n)for(var r of n(t))u.call(t,r)&&l(e,r,t[r]);return e})({},{name:"Menu2"}),t(c,r({__name:"index",setup(e){const t=Vue.ref(""),{t:r}=VueI18n.useI18n();return(e,n)=>{const o=Vue.resolveComponent("el-input");return Vue.openBlock(),Vue.createElementBlock("div",a,[Vue.createElementVNode("p",null,Vue.toDisplayString(Vue.unref(r)("menus.pureMenu2")),1),Vue.createVNode(o,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,["modelValue"])])}}}))));var c;export{p as default};
