var e=(e,a,t)=>new Promise(((l,n)=>{var s=e=>{try{r(t.next(e))}catch(a){n(a)}},o=e=>{try{r(t.throw(e))}catch(a){n(a)}},r=e=>e.done?l(e.value):Promise.resolve(e.value).then(s,o);r((t=t.apply(e,a)).next())}));import{r as a,a as t,m as l,am as n,g8 as s,n as o,ac as r,i,e as u,aV as c,fh as d,L as v,bk as m,ah as p,$ as h,N as f}from"./index-07XH1eRd.js";import{_ as g}from"./form.vue_vue_type_script_setup_true_lang-CGT0WtNF.js";import{u as y}from"./hooks-DaK0hl85.js";import{h as b,i as w,j as x}from"./system-hdjNX1A0.js";function S(S){const k=a({name:"",code:"",status:""}),C=t(),$=t(),j=t([]),T=t([]),_=t([]),z=t(!1),M=t(!0),P=t(!1),D=t(),K=t({}),I=t(!1),L=t(!1),{switchStyle:R}=y(),V=a({total:0,pageSize:10,currentPage:1,background:!0}),Y=[{label:"角色编号",prop:"id"},{label:"角色名称",prop:"name"},{label:"角色标识",prop:"code"},{label:"状态",cellRenderer:e=>{var a;return i(u("el-switch"),{size:"small"===e.props.size?"small":"default",loading:null==(a=K.value[e.index])?void 0:a.loading,modelValue:e.row.status,"onUpdate:modelValue":a=>e.row.status=a,"active-value":1,"inactive-value":0,"active-text":"已启用","inactive-text":"已停用","inline-prompt":!0,style:R.value,onChange:()=>function({row:e,index:a}){d.confirm(`确认要<strong>${0===e.status?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${e.name}</strong>吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then((()=>{K.value[a]=Object.assign({},K.value[a],{loading:!0}),setTimeout((()=>{K.value[a]=Object.assign({},K.value[a],{loading:!1}),v(`已${0===e.status?"停用":"启用"}${e.name}`,{type:"success"})}),300)})).catch((()=>{0===e.status?e.status=1:e.status=0}))}(e)},null)},minWidth:90},{label:"备注",prop:"remark",minWidth:160},{label:"创建时间",prop:"createTime",minWidth:160,formatter:({createTime:e})=>c(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:210,slot:"operation"}];function E(){return e(this,null,(function*(){M.value=!0;const{data:e}=yield w(m(k));j.value=e.list,V.total=e.total,V.pageSize=e.pageSize,V.currentPage=e.currentPage,setTimeout((()=>{M.value=!1}),500)}))}return l((()=>e(this,null,(function*(){E();const{data:e}=yield b();T.value=n(e,"id"),_.value=s(e)})))),o(I,(e=>{e?S.value.setExpandedKeys(T.value):S.value.setExpandedKeys([])})),o(L,(e=>{e?S.value.setCheckedKeys(T.value):S.value.setCheckedKeys([])})),{form:k,isShow:z,curRow:C,loading:M,columns:Y,rowStyle:function({row:{id:e}}){var a;return{cursor:"pointer",background:e===(null==(a=C.value)?void 0:a.id)?"var(--el-fill-color-light)":""}},dataList:j,treeData:_,treeProps:{value:"id",label:"title",children:"children"},isLinkage:P,pagination:V,isExpandAll:I,isSelectAll:L,treeSearchValue:D,onSearch:E,resetForm:e=>{e&&(e.resetFields(),E())},openDialog:function(e="新增",a){var t,l,n;p({title:`${e}角色`,props:{formInline:{name:null!=(t=null==a?void 0:a.name)?t:"",code:null!=(l=null==a?void 0:a.code)?l:"",remark:null!=(n=null==a?void 0:a.remark)?n:""}},width:"40%",draggable:!0,fullscreen:h(),fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>f(g,{ref:$}),beforeSure:(a,{options:t})=>{const l=$.value.getRef(),n=t.props.formInline;function s(){v(`您${e}了角色名称为${n.name}的这条数据`,{type:"success"}),a(),E()}l.validate((e=>{e&&s()}))}})},handleMenu:function(a){return e(this,null,(function*(){const{id:e}=a;if(e){C.value=a,z.value=!0;const{data:t}=yield x({id:e});S.value.setCheckedKeys(t)}else C.value=null,z.value=!1}))},handleSave:function(){const{id:e,name:a}=C.value;v(`角色名称为${a}的菜单权限修改成功`,{type:"success"})},handleDelete:function(e){v(`您删除了角色名称为${e.name}的这条数据`,{type:"success"}),E()},filterMethod:(e,a)=>r(a.title).includes(e),transformI18n:r,onQueryChanged:e=>{S.value.filter(e)},handleSizeChange:function(e){},handleCurrentChange:function(e){},handleSelectionChange:function(e){}}}export{S as useRole};
