import{R as e}from"./index-iDTZZcY1.js";import{r as l,g1 as a,g7 as u,d as t,a as o,e as r,f as d,b as s,w as n,i as m,u as p,g as i,t as f,k as v,j as c,s as h}from"./index-CgRj-jQH.js";import{u as V}from"./hooks-CvrjamrL.js";const _=l({name:[{required:!0,message:"部门名称为必填项",trigger:"blur"}],phone:[{validator:(e,l,u)=>{""===l||a(l)?u():u(new Error("请输入正确的手机号码格式"))},trigger:"blur"}],email:[{validator:(e,l,a)=>{""===l||u(l)?a():a(new Error("请输入正确的邮箱格式"))},trigger:"blur"}]}),b={key:0},g=t({__name:"form",props:{formInline:{default:()=>({higherDeptOptions:[],parentId:0,name:"",principal:"",phone:"",email:"",sort:0,status:1,remark:""})}},setup(l,{expose:a}){const u=l,t=o(),{switchStyle:g}=V(),x=o(u.formInline);return a({getRef:function(){return t.value}}),(l,a)=>{const u=r("el-cascader"),o=r("el-form-item"),V=r("el-input"),w=r("el-input-number"),k=r("el-switch"),U=r("el-row"),y=r("el-form");return d(),s(y,{ref_key:"ruleFormRef",ref:t,model:x.value,rules:p(_),"label-width":"82px"},{default:n((()=>[m(U,{gutter:30},{default:n((()=>[m(p(e),null,{default:n((()=>[m(o,{label:"上级部门"},{default:n((()=>[m(u,{modelValue:x.value.parentId,"onUpdate:modelValue":a[0]||(a[0]=e=>x.value.parentId=e),class:"w-full",options:x.value.higherDeptOptions,props:{value:"id",label:"name",emitPath:!1,checkStrictly:!0},clearable:"",filterable:"",placeholder:"请选择上级部门"},{default:n((({node:e,data:l})=>[i("span",null,f(l.name),1),e.isLeaf?c("",!0):(d(),v("span",b," ("+f(l.children.length)+") ",1))])),_:1},8,["modelValue","options"])])),_:1})])),_:1}),m(p(e),{value:12,xs:24,sm:24},{default:n((()=>[m(o,{label:"部门名称",prop:"name"},{default:n((()=>[m(V,{modelValue:x.value.name,"onUpdate:modelValue":a[1]||(a[1]=e=>x.value.name=e),clearable:"",placeholder:"请输入部门名称"},null,8,["modelValue"])])),_:1})])),_:1}),m(p(e),{value:12,xs:24,sm:24},{default:n((()=>[m(o,{label:"部门负责人"},{default:n((()=>[m(V,{modelValue:x.value.principal,"onUpdate:modelValue":a[2]||(a[2]=e=>x.value.principal=e),clearable:"",placeholder:"请输入部门负责人"},null,8,["modelValue"])])),_:1})])),_:1}),m(p(e),{value:12,xs:24,sm:24},{default:n((()=>[m(o,{label:"手机号",prop:"phone"},{default:n((()=>[m(V,{modelValue:x.value.phone,"onUpdate:modelValue":a[3]||(a[3]=e=>x.value.phone=e),clearable:"",placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1})])),_:1}),m(p(e),{value:12,xs:24,sm:24},{default:n((()=>[m(o,{label:"邮箱",prop:"email"},{default:n((()=>[m(V,{modelValue:x.value.email,"onUpdate:modelValue":a[4]||(a[4]=e=>x.value.email=e),clearable:"",placeholder:"请输入邮箱"},null,8,["modelValue"])])),_:1})])),_:1}),m(p(e),{value:12,xs:24,sm:24},{default:n((()=>[m(o,{label:"排序"},{default:n((()=>[m(w,{modelValue:x.value.sort,"onUpdate:modelValue":a[5]||(a[5]=e=>x.value.sort=e),class:"!w-full",min:0,max:9999,"controls-position":"right"},null,8,["modelValue"])])),_:1})])),_:1}),m(p(e),{value:12,xs:24,sm:24},{default:n((()=>[m(o,{label:"部门状态"},{default:n((()=>[m(k,{modelValue:x.value.status,"onUpdate:modelValue":a[6]||(a[6]=e=>x.value.status=e),"inline-prompt":"","active-value":1,"inactive-value":0,"active-text":"启用","inactive-text":"停用",style:h(p(g))},null,8,["modelValue","style"])])),_:1})])),_:1}),m(p(e),null,{default:n((()=>[m(o,{label:"备注"},{default:n((()=>[m(V,{modelValue:x.value.remark,"onUpdate:modelValue":a[7]||(a[7]=e=>x.value.remark=e),placeholder:"请输入备注信息",type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])}}});export{g as _};
