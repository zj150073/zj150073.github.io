var m=(r,s,t)=>new Promise((o,l)=>{var u=a=>{try{i(t.next(a))}catch(n){l(n)}},d=a=>{try{i(t.throw(a))}catch(n){l(n)}},i=a=>a.done?o(a.value):Promise.resolve(a.value).then(u,d);i((t=t.apply(r,s)).next())});import{r as c,a as p,m as f,d0 as h,L as b,dl as v}from"./index-BdQqVUXy.js";import{d as W}from"./system-BvNQmI6m.js";function C(){const r=c({username:""}),s=p([]),t=p(!0),o=c({total:0,pageSize:10,currentPage:1,background:!0}),l=[{label:"序号",prop:"id",minWidth:60},{label:"用户名",prop:"username",minWidth:100},{label:"登录 IP",prop:"ip",minWidth:140},{label:"登录地点",prop:"address",minWidth:140},{label:"操作系统",prop:"system",minWidth:100},{label:"浏览器类型",prop:"browser",minWidth:100},{label:"登录时间",prop:"loginTime",minWidth:180,formatter:({loginTime:e})=>h(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",slot:"operation"}];function u(e){}function d(e){}function i(e){}function a(e){b(`${e.username}已被强制下线`,{type:"success"}),n()}function n(){return m(this,null,function*(){t.value=!0;const{data:e}=yield W(v(r));s.value=e.list,o.total=e.total,o.pageSize=e.pageSize,o.currentPage=e.currentPage,setTimeout(()=>{t.value=!1},500)})}const g=e=>{e&&(e.resetFields(),n())};return f(()=>{n()}),{form:r,loading:t,columns:l,dataList:s,pagination:o,onSearch:n,resetForm:g,handleOffline:a,handleSizeChange:u,handleCurrentChange:d,handleSelectionChange:i}}export{C as useRole};
