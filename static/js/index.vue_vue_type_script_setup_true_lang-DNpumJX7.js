import{useColumns as e}from"./columns-CpCjksND.js";const t={class:"flex"},o={class:"w-[400px]"},l={key:1},n=Vue.defineComponent({__name:"index",setup(n){const{editMap:r,columns:u,dataList:a,onEdit:c,onSave:V,onCancel:i}=e();return(e,n)=>{const s=Vue.resolveComponent("el-scrollbar"),d=Vue.resolveComponent("el-button"),m=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createElementBlock("div",t,[Vue.createVNode(s,null,{default:Vue.withCtx((()=>[Vue.createElementVNode("code",null,[Vue.createElementVNode("pre",o," "+Vue.toDisplayString(Vue.unref(a)),1)])])),_:1}),Vue.createVNode(m,{"row-key":"id","align-whole":"center","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},data:Vue.unref(a),columns:Vue.unref(u)},{operation:Vue.withCtx((({row:e,index:t})=>{var o;return[(null==(o=Vue.unref(r)[t])?void 0:o.editable)?(Vue.openBlock(),Vue.createElementBlock("div",l,[Vue.createVNode(d,{class:"reset-margin",link:"",type:"primary",onClick:e=>Vue.unref(V)(t)},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 保存 ")])),_:2},1032,["onClick"]),Vue.createVNode(d,{class:"reset-margin",link:"",onClick:e=>Vue.unref(i)(t)},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 取消 ")])),_:2},1032,["onClick"])])):(Vue.openBlock(),Vue.createBlock(d,{key:0,class:"reset-margin",link:"",type:"primary",onClick:o=>Vue.unref(c)(e,t)},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 修改 ")])),_:2},1032,["onClick"]))]})),_:1},8,["data","columns"])])}}});export{n as _};
