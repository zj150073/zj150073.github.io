import{u as e}from"./columns-Unoy0-47.js";import{u as n}from"./hooks-D3PhPGWW.js";import{_ as o}from"./index-DK9WUj9J.js";const t=o(Vue.defineComponent({__name:"index",setup(o){const{loading:t,columns:u,dataList:r,pagination:a,Empty:i,onCurrentChange:l}=e();return(e,o)=>{const s=Vue.resolveComponent("el-empty"),c=Vue.resolveComponent("el-button"),V=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createBlock(V,{"row-key":"id",alignWhole:"center",showOverflowTooltip:"",loading:Vue.unref(t),"loading-config":{background:"transparent"},data:Vue.unref(r).slice((Vue.unref(a).currentPage-1)*Vue.unref(a).pageSize,Vue.unref(a).currentPage*Vue.unref(a).pageSize),columns:Vue.unref(u),pagination:Vue.unref(a),onPageCurrentChange:Vue.unref(l)},{empty:Vue.withCtx((()=>[Vue.createVNode(s,{description:"暂无数据","image-size":60},{image:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(i))])),_:1})])),operation:Vue.withCtx((({row:e})=>[Vue.createVNode(c,{plain:"",circle:"",size:"small",title:`查看序号为${e.id}的详情`,icon:Vue.unref(n)("ri:search-line")},null,8,["title","icon"])])),_:1},8,["loading","data","columns","pagination","onPageCurrentChange"])}}}),[["__scopeId","data-v-db81b3a6"]]);export{t as default};
