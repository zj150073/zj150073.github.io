import{R as e}from"./index-iDTZZcY1.js";import{r as l,g1 as a,g7 as u,d as t,a as r,e as s,f as o,b as d,w as n,i as m,u as p,j as i,k as v,F as f,l as c,g as b,t as V,s as _}from"./index-CgRj-jQH.js";import{u as h}from"./hooks-CvrjamrL.js";const g=l({nickname:[{required:!0,message:"用户昵称为必填项",trigger:"blur"}],username:[{required:!0,message:"用户名称为必填项",trigger:"blur"}],password:[{required:!0,message:"用户密码为必填项",trigger:"blur"}],phone:[{validator:(e,l,u)=>{""===l||a(l)?u():u(new Error("请输入正确的手机号码格式"))},trigger:"blur"}],email:[{validator:(e,l,a)=>{""===l||u(l)?a():a(new Error("请输入正确的邮箱格式"))},trigger:"blur"}]}),x={key:0},k=t({__name:"index",props:{formInline:{default:()=>({title:"新增",higherDeptOptions:[],parentId:0,nickname:"",username:"",password:"",phone:"",email:"",sex:"",status:1,remark:""})}},setup(l,{expose:a}){const u=l,t=[{value:0,label:"男"},{value:1,label:"女"}],k=r(),{switchStyle:w}=h(),y=r(u.formInline);return a({getRef:function(){return k.value}}),(l,a)=>{const u=s("el-input"),r=s("el-form-item"),h=s("el-option"),U=s("el-select"),I=s("el-cascader"),j=s("el-switch"),q=s("el-row"),R=s("el-form");return o(),d(R,{ref_key:"ruleFormRef",ref:k,model:y.value,rules:p(g),"label-width":"82px"},{default:n((()=>[m(q,{gutter:30},{default:n((()=>[m(p(e),{value:12,xs:24,sm:24},{default:n((()=>[m(r,{label:"用户昵称",prop:"nickname"},{default:n((()=>[m(u,{modelValue:y.value.nickname,"onUpdate:modelValue":a[0]||(a[0]=e=>y.value.nickname=e),clearable:"",placeholder:"请输入用户昵称"},null,8,["modelValue"])])),_:1})])),_:1}),m(p(e),{value:12,xs:24,sm:24},{default:n((()=>[m(r,{label:"用户名称",prop:"username"},{default:n((()=>[m(u,{modelValue:y.value.username,"onUpdate:modelValue":a[1]||(a[1]=e=>y.value.username=e),clearable:"",placeholder:"请输入用户名称"},null,8,["modelValue"])])),_:1})])),_:1}),"新增"===y.value.title?(o(),d(p(e),{key:0,value:12,xs:24,sm:24},{default:n((()=>[m(r,{label:"用户密码",prop:"password"},{default:n((()=>[m(u,{modelValue:y.value.password,"onUpdate:modelValue":a[2]||(a[2]=e=>y.value.password=e),clearable:"",placeholder:"请输入用户密码"},null,8,["modelValue"])])),_:1})])),_:1})):i("",!0),m(p(e),{value:12,xs:24,sm:24},{default:n((()=>[m(r,{label:"手机号",prop:"phone"},{default:n((()=>[m(u,{modelValue:y.value.phone,"onUpdate:modelValue":a[3]||(a[3]=e=>y.value.phone=e),clearable:"",placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1})])),_:1}),m(p(e),{value:12,xs:24,sm:24},{default:n((()=>[m(r,{label:"邮箱",prop:"email"},{default:n((()=>[m(u,{modelValue:y.value.email,"onUpdate:modelValue":a[4]||(a[4]=e=>y.value.email=e),clearable:"",placeholder:"请输入邮箱"},null,8,["modelValue"])])),_:1})])),_:1}),m(p(e),{value:12,xs:24,sm:24},{default:n((()=>[m(r,{label:"用户性别"},{default:n((()=>[m(U,{modelValue:y.value.sex,"onUpdate:modelValue":a[5]||(a[5]=e=>y.value.sex=e),placeholder:"请选择用户性别",class:"w-full",clearable:""},{default:n((()=>[(o(),v(f,null,c(t,((e,l)=>m(h,{key:l,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),m(p(e),{value:12,xs:24,sm:24},{default:n((()=>[m(r,{label:"归属部门"},{default:n((()=>[m(I,{modelValue:y.value.parentId,"onUpdate:modelValue":a[6]||(a[6]=e=>y.value.parentId=e),class:"w-full",options:y.value.higherDeptOptions,props:{value:"id",label:"name",emitPath:!1,checkStrictly:!0},clearable:"",filterable:"",placeholder:"请选择归属部门"},{default:n((({node:e,data:l})=>[b("span",null,V(l.name),1),e.isLeaf?i("",!0):(o(),v("span",x," ("+V(l.children.length)+") ",1))])),_:1},8,["modelValue","options"])])),_:1})])),_:1}),"新增"===y.value.title?(o(),d(p(e),{key:1,value:12,xs:24,sm:24},{default:n((()=>[m(r,{label:"用户状态"},{default:n((()=>[m(j,{modelValue:y.value.status,"onUpdate:modelValue":a[7]||(a[7]=e=>y.value.status=e),"inline-prompt":"","active-value":1,"inactive-value":0,"active-text":"启用","inactive-text":"停用",style:_(p(w))},null,8,["modelValue","style"])])),_:1})])),_:1})):i("",!0),m(p(e),null,{default:n((()=>[m(r,{label:"备注"},{default:n((()=>[m(u,{modelValue:y.value.remark,"onUpdate:modelValue":a[8]||(a[8]=e=>y.value.remark=e),placeholder:"请输入备注信息",type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])}}});export{k as _};
