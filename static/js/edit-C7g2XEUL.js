var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,u=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r;import{list as l}from"./list-CHGjJL1k.js";import{_ as i}from"./index-DK9WUj9J.js";import"./index-eimcG_DR.js";import"./columns-3AW6LbHT.js";import"./data-Dd4sCrbk.js";import"./hooks-D3PhPGWW.js";import"./plus-CeXuBKcU.js";import"./delete-Ce0TSdK5.js";import"./index.vue_vue_type_script_setup_true_lang-DNpumJX7.js";import"./columns-CpCjksND.js";import"./index.vue_vue_type_script_setup_true_lang-K9NIW3DV.js";import"./columns-awLSyhIH.js";import"./edit-pen-Ci7W0xNM.js";import"./check-bSE3wTVj.js";const c={class:"card-header"},s={class:"font-medium"},p=Vue.defineComponent((V=((e,t)=>{for(var o in t||(t={}))n.call(t,o)&&u(e,o,t[o]);if(r)for(var o of r(t))a.call(t,o)&&u(e,o,t[o]);return e})({},{name:"PureTableEdit"}),t(V,o({__name:"edit",setup(e){const t=Vue.ref(0);function o({index:e}){t.value=e}return(e,r)=>{const n=Vue.resolveComponent("el-link"),a=Vue.resolveComponent("el-alert"),u=Vue.resolveComponent("el-tab-pane"),i=Vue.resolveComponent("el-tabs"),p=Vue.resolveComponent("el-card"),V=Vue.resolveDirective("tippy");return Vue.openBlock(),Vue.createBlock(p,{shadow:"never"},{header:Vue.withCtx((()=>[Vue.createElementVNode("div",c,[Vue.createElementVNode("span",s,[Vue.createTextVNode(" 可编辑用法全部采用 TSX 语法，充分发挥 "),Vue.createVNode(n,{href:"https://github.com/pure-admin/pure-admin-table",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:Vue.withCtx((()=>[Vue.createTextVNode(" @pureadmin/table ")])),_:1}),Vue.createTextVNode(" 的灵活性，维护整体表格只需操作 columns 配置即可 ")])]),Vue.createVNode(n,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/table/edit",target:"_blank"},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 代码位置 src/views/table/edit ")])),_:1})])),default:Vue.withCtx((()=>[Vue.createVNode(a,{title:"可编辑用法中所有表格都设置了 row-key ，它是唯一值的字段，比如id。作用：1. 用来优化 Table\n      的渲染，尤其当字段在深层结构中；2. 防止拖拽后表格组件内部混乱（拖拽必须设置）",type:"info",closable:!1}),Vue.createVNode(i,{onTabClick:o},{default:Vue.withCtx((()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(Vue.unref(l),((e,o)=>(Vue.openBlock(),Vue.createBlock(u,{key:e.key,lazy:!0},{label:Vue.withCtx((()=>[Vue.withDirectives((Vue.openBlock(),Vue.createElementBlock("span",null,[Vue.createTextVNode(Vue.toDisplayString(e.title),1)])),[[V,{maxWidth:"none",content:`（第 ${o+1} 个示例）${e.content}`}]])])),default:Vue.withCtx((()=>[t.value==o?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(e.component),{key:0})):Vue.createCommentVNode("",!0)])),_:2},1024)))),128))])),_:1})])),_:1})}}}))));var V;const m=i(p,[["__scopeId","data-v-5a17230c"]]);export{m as default};
