var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,a=(o,t,r)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r;import{R as n}from"./index-C3WTS9yW.js";import{T as d,E as p}from"./index.esm-BGm1Gl5J.js";const i={class:"wangeditor"},c="default",f=Vue.defineComponent((s=((e,o)=>{for(var t in o||(o={}))l.call(o,t)&&a(e,t,o[t]);if(r)for(var t of r(o))u.call(o,t)&&a(e,t,o[t]);return e})({},{name:"MultiEditor"}),o(s,t({__name:"EditorMulti",setup(e){const o=Vue.ref([]);[{value:"<p>测试一</p>"},{value:"<p>测试二</p>"},{value:"<p>测试三</p>"},{value:"<p>测试四</p>"}].forEach((e=>{o.value.push({value:e.value,editorRef:Vue.shallowRef()})}));const t={excludeKeys:"fullScreen"},r={placeholder:"请输入内容..."};return Vue.onBeforeUnmount((()=>o.value.map((e=>{null!=e.editorRef&&e.editorRef.destroy()})))),(e,l)=>{const u=Vue.resolveComponent("el-row");return Vue.openBlock(),Vue.createBlock(u,{gutter:30,justify:"space-around"},{default:Vue.withCtx((()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(o.value,((e,l)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(n),{key:l,value:11},{default:Vue.withCtx((()=>[Vue.createElementVNode("div",i,[Vue.createVNode(Vue.unref(d),{editor:e.editorRef,defaultConfig:t,mode:c,style:{"border-bottom":"1px solid #ccc"}},null,8,["editor"]),Vue.createVNode(Vue.unref(p),{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,defaultConfig:r,mode:c,style:{height:"300px","overflow-y":"hidden"},onOnCreated:e=>((e,t)=>{o.value[t].editorRef=e})(e,l)},null,8,["modelValue","onUpdate:modelValue","onOnCreated"])])])),_:2},1024)))),128))])),_:1})}}}))));var s;export{f as _};
