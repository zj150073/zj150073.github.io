import{S as e}from"./vue-json-pretty-47iPexnb.js";const a=Vue.defineComponent({__name:"detail",props:{data:{type:Array,default:()=>[]}},setup(a){const t=a,l=[{label:"IP 地址",prop:"ip"},{label:"地点",prop:"address"},{label:"操作系统",prop:"system"},{label:"浏览器类型",prop:"browser"},{label:"所属模块",prop:"module"},{label:"请求时间",prop:"requestTime"},{label:"请求方法",prop:"method"},{label:"请求耗时",prop:"takesTime"},{label:"请求接口",prop:"url",copy:!0},{label:"TraceId",prop:"traceId",copy:!0}],o=Vue.ref([{title:"响应头",name:"responseHeaders",data:t.data[0].responseHeaders},{title:"响应体",name:"responseBody",data:t.data[0].responseBody},{title:"请求头",name:"requestHeaders",data:t.data[0].requestHeaders},{title:"请求体",name:"requestBody",data:t.data[0].requestBody}]);return(t,r)=>{const d=Vue.resolveComponent("PureDescriptions"),u=Vue.resolveComponent("el-scrollbar"),n=Vue.resolveComponent("el-tab-pane"),p=Vue.resolveComponent("el-tabs");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(u,null,{default:Vue.withCtx((()=>[Vue.createVNode(d,{border:"",data:a.data,columns:l,column:5},null,8,["data"])])),_:1}),Vue.createVNode(p,{modelValue:"responseBody",type:"border-card",class:"mt-4"},{default:Vue.withCtx((()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(o.value,((a,t)=>(Vue.openBlock(),Vue.createBlock(n,{key:t,name:a.name,label:a.title},{default:Vue.withCtx((()=>[Vue.createVNode(u,{"max-height":"calc(100vh - 240px)"},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(e),{data:a.data,"onUpdate:data":e=>a.data=e},null,8,["data","onUpdate:data"])])),_:2},1024)])),_:2},1032,["name","label"])))),128))])),_:1})])}}});export{a as _};
