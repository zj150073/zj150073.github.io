import{_ as e}from"./detail.vue_vue_type_script_setup_true_lang-Bqp7Gekh.js";import{aE as t,m as l,r as a,l as n}from"./index-DK9WUj9J.js";import{b as r,c as i}from"./system-CZHEA98f.js";import"./vue-json-pretty-47iPexnb.js";const o={width:24,height:24,body:'<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm-1-5h2v2h-2v-2Zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355Z"/>'};function s(s){const u=Vue.reactive({module:"",requestTime:""}),c=Vue.ref([]),p=Vue.ref(!0),d=Vue.ref(0),{copied:m,update:h}=t(),f=Vue.reactive({total:0,pageSize:10,currentPage:1,background:!0}),v=[{label:"勾选列",type:"selection",fixed:"left",reserveSelection:!0},{label:"ID",prop:"id",minWidth:90},{label:"所属模块",prop:"module",minWidth:100},{headerRenderer:()=>Vue.createVNode("span",{class:"flex-c"},[Vue.createTextVNode("请求接口"),Vue.withDirectives(Vue.createVNode(Vue.resolveComponent("iconifyIconOffline"),{icon:o,class:"ml-1 cursor-help"},null),[[Vue.resolveDirective("tippy"),{content:"双击下面请求接口进行拷贝"}]])]),prop:"url",minWidth:140},{label:"请求方法",prop:"method",minWidth:140},{label:"IP 地址",prop:"ip",minWidth:100},{label:"地点",prop:"address",minWidth:140},{label:"操作系统",prop:"system",minWidth:100},{label:"浏览器类型",prop:"browser",minWidth:100},{label:"请求耗时",prop:"takesTime",minWidth:100,cellRenderer:({row:e,props:t})=>Vue.createVNode(Vue.resolveComponent("el-tag"),{size:t.size,type:e.takesTime<1e3?"success":"warning",effect:"plain"},{default:()=>[e.takesTime,Vue.createTextVNode(" ms")]})},{label:"请求时间",prop:"requestTime",minWidth:180,formatter:({requestTime:e})=>dayjs(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",slot:"operation"}];function g(){return e=this,t=null,l=function*(){p.value=!0;const{data:e}=yield i(Vue.toRaw(u));c.value=e.list,f.total=e.total,f.pageSize=e.pageSize,f.currentPage=e.currentPage,setTimeout((()=>{p.value=!1}),500)},new Promise(((a,n)=>{var r=e=>{try{o(l.next(e))}catch(t){n(t)}},i=e=>{try{o(l.throw(e))}catch(t){n(t)}},o=e=>e.done?a(e.value):Promise.resolve(e.value).then(r,i);o((l=l.apply(e,t)).next())}));var e,t,l}return Vue.onMounted((()=>{g()})),{form:u,loading:p,columns:v,dataList:c,pagination:f,selectedNum:d,onSearch:g,onDetail:function(t){r({id:t.id}).then((t=>{n({title:"系统日志详情",fullscreen:!0,hideFooter:!0,contentRenderer:()=>e,props:{data:[t]}})}))},clearAll:function(){l("已删除所有日志数据",{type:"success"}),g()},resetForm:e=>{e&&(e.resetFields(),g())},onbatchDel:function(){const e=s.value.getTableRef().getSelectionRows();l(`已删除序号为 ${a(e,"id")} 的数据`,{type:"success"}),s.value.getTableRef().clearSelection(),g()},handleSizeChange:function(e){},onSelectionCancel:function(){d.value=0,s.value.getTableRef().clearSelection()},handleCellDblclick:function({url:e},{property:t}){"url"===t&&(h(e),m.value?l(`${e} 已拷贝`,{type:"success"}):l("拷贝失败",{type:"warning"}))},handleCurrentChange:function(e){},handleSelectionChange:function(e){d.value=e.length,s.value.setAdaptive()}}}export{s as useRole};
