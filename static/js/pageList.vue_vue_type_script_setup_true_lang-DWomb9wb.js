import{V as e}from"./index-DHcFRHkA.js";import{d as a,a as t,p as s,r as l,e as r,A as n,f as i,b as o,w as u,B as c,i as f,u as m}from"./index-CKXHolY4.js";const g=a({__name:"pageList",setup(a){const g=t(),v=t(!0),d=t([]),p=s((()=>e=>{switch(e){case"medium":return 531;case"small":return 482;case"mini":return 433}})),h=l({total:0,currentPage:1,pageSize:10,pageSizes:[5,10,15,20]}),x=[{type:"seq",field:"seq",title:"序号",width:100},{field:"name",title:"名称",sortable:!0},{field:"role",title:"角色"},{field:"sex",title:"性别"}];function z(){return e=this,a=null,t=function*(){v.value=!0;const e=[];for(let a=0;a<10;a++)e.push({id:a,name:"Test"+a,role:"Developer",sex:"男"});h.total=20,d.value=e,setTimeout((()=>{v.value=!1}),500)},new Promise(((s,l)=>{var r=e=>{try{i(t.next(e))}catch(a){l(a)}},n=e=>{try{i(t.throw(e))}catch(a){l(a)}},i=e=>e.done?s(e.value):Promise.resolve(e.value).then(r,n);i((t=t.apply(e,a)).next())}));var e,a,t}const w=({currentPage:e,pageSize:a})=>{h.currentPage=e,h.pageSize=a,z()};return z(),(a,t)=>{const s=r("vxe-grid"),l=n("loading");return i(),o(m(e),{vxeTableRef:g.value,columns:x,title:"分页表格",onRefresh:z},{default:u((({size:e,dynamicColumns:a})=>[c(f(s,{ref_key:"vxeTableRef",ref:g,"show-overflow":"",height:p.value(e),size:e,"column-config":{resizable:!0},columns:a,pagerConfig:h,data:d.value,onPageChange:w},null,8,["height","size","columns","pagerConfig","data"]),[[l,v.value]])])),_:1},8,["vxeTableRef"])}}});export{g as _};
