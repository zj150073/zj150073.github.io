import{r as e,a as t,m as l,i as n,e as a,aV as s,aX as r,g8 as o,ah as i,ag as u,$ as m,N as p,L as c}from"./index-DTxOO0Gw.js";import{_ as d}from"./form.vue_vue_type_script_setup_true_lang-RFBFiuu-.js";import{e as f}from"./system-p96NZ2Jf.js";import{u as h}from"./hooks-BH98uRTt.js";import"./index-Cu9IQJA7.js";function v(){const v=e({name:"",status:null}),g=t(),y=t([]),b=t(!0),{tagStyle:_}=h(),w=[{label:"部门名称",prop:"name",width:180,align:"left"},{label:"排序",prop:"sort",minWidth:70},{label:"状态",prop:"status",minWidth:100,cellRenderer:({row:e,props:t})=>n(a("el-tag"),{size:t.size,style:_.value(e.status)},{default:()=>[1===e.status?"启用":"停用"]})},{label:"创建时间",minWidth:200,prop:"createTime",formatter:({createTime:e})=>s(e).format("YYYY-MM-DD HH:mm:ss")},{label:"备注",prop:"remark",minWidth:320},{label:"操作",fixed:"right",width:210,slot:"operation"}];function x(){return e=this,t=null,l=function*(){b.value=!0;const{data:e}=yield f();let t=e;r(v.name)||(t=t.filter((e=>e.name.includes(v.name)))),r(v.status)||(t=t.filter((e=>e.status===v.status))),y.value=o(t),setTimeout((()=>{b.value=!1}),500)},new Promise(((n,a)=>{var s=e=>{try{o(l.next(e))}catch(t){a(t)}},r=e=>{try{o(l.throw(e))}catch(t){a(t)}},o=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,r);o((l=l.apply(e,t)).next())}));var e,t,l}function j(e){if(!e||!e.length)return;const t=[];for(let l=0;l<e.length;l++)e[l].disabled=0===e[l].status,j(e[l].children),t.push(e[l]);return t}return l((()=>{x()})),{form:v,loading:b,columns:w,dataList:y,onSearch:x,resetForm:function(e){e&&(e.resetFields(),x())},openDialog:function(e="新增",t){var l,n,a,s,r,o,f,h;i({title:`${e}部门`,props:{formInline:{higherDeptOptions:j(u(y.value)),parentId:null!=(l=null==t?void 0:t.parentId)?l:0,name:null!=(n=null==t?void 0:t.name)?n:"",principal:null!=(a=null==t?void 0:t.principal)?a:"",phone:null!=(s=null==t?void 0:t.phone)?s:"",email:null!=(r=null==t?void 0:t.email)?r:"",sort:null!=(o=null==t?void 0:t.sort)?o:0,status:null!=(f=null==t?void 0:t.status)?f:1,remark:null!=(h=null==t?void 0:t.remark)?h:""}},width:"40%",draggable:!0,fullscreen:m(),fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>p(d,{ref:g}),beforeSure:(t,{options:l})=>{const n=g.value.getRef(),a=l.props.formInline;function s(){c(`您${e}了部门名称为${a.name}的这条数据`,{type:"success"}),t(),x()}n.validate((e=>{e&&s()}))}})},handleDelete:function(e){c(`您删除了部门名称为${e.name}的这条数据`,{type:"success"}),x()},handleSelectionChange:function(e){}}}export{v as useDept};
