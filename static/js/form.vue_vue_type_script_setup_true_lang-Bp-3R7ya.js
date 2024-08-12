import{r as e,d as l,a,e as u,f as o,b as t,w as n,i as d,u as m,g as s,t as r,ac as p,k as i,j as v,B as f,a2 as V,aH as b}from"./index-DTxOO0Gw.js";import{R as c}from"./index-Cu9IQJA7.js";import{R as h}from"./index-Dp7bzCXK.js";import{R as _}from"./index-CWTtlXm_.js";const g=e({title:[{required:!0,message:"菜单名称为必填项",trigger:"blur"}],name:[{required:!0,message:"路由名称为必填项",trigger:"blur"}],path:[{required:!0,message:"路由路径为必填项",trigger:"blur"}],auths:[{required:!0,message:"权限标识为必填项",trigger:"blur"}]}),x=[{label:"菜单",value:0},{label:"iframe",value:1},{label:"外链",value:2},{label:"按钮",value:3}],T=[{label:"显示",tip:"会在菜单中显示",value:!0},{label:"隐藏",tip:"不会在菜单中显示",value:!1}],y=[{label:"固定",tip:"当前菜单名称固定显示在标签页且不可关闭",value:!0},{label:"不固定",tip:"当前菜单名称不固定显示在标签页且可关闭",value:!1}],k=[{label:"缓存",tip:"会保存该页面的整体状态，刷新后会清空状态",value:!0},{label:"不缓存",tip:"不会保存该页面的整体状态",value:!1}],U=[{label:"允许",tip:"当前菜单名称或自定义信息允许添加到标签页",value:!1},{label:"禁止",tip:"当前菜单名称或自定义信息禁止添加到标签页",value:!0}],w=[{label:"显示",tip:"会显示父级菜单",value:!0},{label:"隐藏",tip:"不会显示父级菜单",value:!1}],I=[{label:"开启",tip:"有首次加载动画",value:!0},{label:"关闭",tip:"无首次加载动画",value:!1}],L={key:0},P=l({__name:"form",props:{formInline:{default:()=>({menuType:0,higherMenuOptions:[],parentId:0,title:"",name:"",path:"",component:"",rank:99,redirect:"",icon:"",extraIcon:"",enterTransition:"",leaveTransition:"",activePath:"",auths:"",frameSrc:"",frameLoading:!0,keepAlive:!1,hiddenTag:!1,fixedTag:!1,showLink:!0,showParent:!1})}},setup(e,{expose:l}){const P=e,C=a(),j=a(P.formInline);return l({getRef:function(){return C.value}}),(e,l)=>{const a=u("el-form-item"),P=u("el-cascader"),R=u("el-input"),q=u("el-input-number"),S=u("el-row"),A=u("el-form");return o(),t(A,{ref_key:"ruleFormRef",ref:C,model:j.value,rules:m(g),"label-width":"82px"},{default:n((()=>[d(S,{gutter:30},{default:n((()=>[d(m(c),null,{default:n((()=>[d(a,{label:"菜单类型"},{default:n((()=>[d(m(h),{modelValue:j.value.menuType,"onUpdate:modelValue":l[0]||(l[0]=e=>j.value.menuType=e),options:m(x)},null,8,["modelValue","options"])])),_:1})])),_:1}),d(m(c),null,{default:n((()=>[d(a,{label:"上级菜单"},{default:n((()=>[d(P,{modelValue:j.value.parentId,"onUpdate:modelValue":l[1]||(l[1]=e=>j.value.parentId=e),class:"w-full",options:j.value.higherMenuOptions,props:{value:"id",label:"title",emitPath:!1,checkStrictly:!0},clearable:"",filterable:"",placeholder:"请选择上级菜单"},{default:n((({node:e,data:l})=>[s("span",null,r(m(p)(l.title)),1),e.isLeaf?v("",!0):(o(),i("span",L," ("+r(l.children.length)+") ",1))])),_:1},8,["modelValue","options"])])),_:1})])),_:1}),d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"菜单名称",prop:"title"},{default:n((()=>[d(R,{modelValue:j.value.title,"onUpdate:modelValue":l[2]||(l[2]=e=>j.value.title=e),clearable:"",placeholder:"请输入菜单名称"},null,8,["modelValue"])])),_:1})])),_:1}),3!==j.value.menuType?(o(),t(m(c),{key:0,value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"路由名称",prop:"name"},{default:n((()=>[d(R,{modelValue:j.value.name,"onUpdate:modelValue":l[3]||(l[3]=e=>j.value.name=e),clearable:"",placeholder:"请输入路由名称"},null,8,["modelValue"])])),_:1})])),_:1})):v("",!0),3!==j.value.menuType?(o(),t(m(c),{key:1,value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"路由路径",prop:"path"},{default:n((()=>[d(R,{modelValue:j.value.path,"onUpdate:modelValue":l[4]||(l[4]=e=>j.value.path=e),clearable:"",placeholder:"请输入路由路径"},null,8,["modelValue"])])),_:1})])),_:1})):v("",!0),f(d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"组件路径"},{default:n((()=>[d(R,{modelValue:j.value.component,"onUpdate:modelValue":l[5]||(l[5]=e=>j.value.component=e),clearable:"",placeholder:"请输入组件路径"},null,8,["modelValue"])])),_:1})])),_:1},512),[[V,0===j.value.menuType]]),d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"菜单排序"},{default:n((()=>[d(q,{modelValue:j.value.rank,"onUpdate:modelValue":l[6]||(l[6]=e=>j.value.rank=e),class:"!w-full",min:1,max:9999,"controls-position":"right"},null,8,["modelValue"])])),_:1})])),_:1}),f(d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"路由重定向"},{default:n((()=>[d(R,{modelValue:j.value.redirect,"onUpdate:modelValue":l[7]||(l[7]=e=>j.value.redirect=e),clearable:"",placeholder:"请输入默认跳转地址"},null,8,["modelValue"])])),_:1})])),_:1},512),[[V,0===j.value.menuType]]),f(d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"菜单图标"},{default:n((()=>[d(m(b),{modelValue:j.value.icon,"onUpdate:modelValue":l[8]||(l[8]=e=>j.value.icon=e),class:"w-full"},null,8,["modelValue"])])),_:1})])),_:1},512),[[V,3!==j.value.menuType]]),f(d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"右侧图标"},{default:n((()=>[d(R,{modelValue:j.value.extraIcon,"onUpdate:modelValue":l[9]||(l[9]=e=>j.value.extraIcon=e),clearable:"",placeholder:"菜单名称右侧的额外图标"},null,8,["modelValue"])])),_:1})])),_:1},512),[[V,3!==j.value.menuType]]),f(d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"进场动画"},{default:n((()=>[d(m(_),{modelValue:j.value.enterTransition,"onUpdate:modelValue":l[10]||(l[10]=e=>j.value.enterTransition=e),placeholder:"请选择页面进场加载动画"},null,8,["modelValue"])])),_:1})])),_:1},512),[[V,j.value.menuType<2]]),f(d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"离场动画"},{default:n((()=>[d(m(_),{modelValue:j.value.leaveTransition,"onUpdate:modelValue":l[11]||(l[11]=e=>j.value.leaveTransition=e),placeholder:"请选择页面离场加载动画"},null,8,["modelValue"])])),_:1})])),_:1},512),[[V,j.value.menuType<2]]),f(d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"菜单激活"},{default:n((()=>[d(R,{modelValue:j.value.activePath,"onUpdate:modelValue":l[12]||(l[12]=e=>j.value.activePath=e),clearable:"",placeholder:"请输入需要激活的菜单"},null,8,["modelValue"])])),_:1})])),_:1},512),[[V,0===j.value.menuType]]),3===j.value.menuType?(o(),t(m(c),{key:2,value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"权限标识",prop:"auths"},{default:n((()=>[d(R,{modelValue:j.value.auths,"onUpdate:modelValue":l[13]||(l[13]=e=>j.value.auths=e),clearable:"",placeholder:"请输入权限标识"},null,8,["modelValue"])])),_:1})])),_:1})):v("",!0),f(d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"链接地址"},{default:n((()=>[d(R,{modelValue:j.value.frameSrc,"onUpdate:modelValue":l[14]||(l[14]=e=>j.value.frameSrc=e),clearable:"",placeholder:"请输入 iframe 链接地址"},null,8,["modelValue"])])),_:1})])),_:1},512),[[V,1===j.value.menuType]]),1===j.value.menuType?(o(),t(m(c),{key:3,value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"加载动画"},{default:n((()=>[d(m(h),{modelValue:j.value.frameLoading?0:1,options:m(I),onChange:l[15]||(l[15]=({option:{value:e}})=>{j.value.frameLoading=e})},null,8,["modelValue","options"])])),_:1})])),_:1})):v("",!0),f(d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"菜单"},{default:n((()=>[d(m(h),{modelValue:j.value.showLink?0:1,options:m(T),onChange:l[16]||(l[16]=({option:{value:e}})=>{j.value.showLink=e})},null,8,["modelValue","options"])])),_:1})])),_:1},512),[[V,3!==j.value.menuType]]),f(d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"父级菜单"},{default:n((()=>[d(m(h),{modelValue:j.value.showParent?0:1,options:m(w),onChange:l[17]||(l[17]=({option:{value:e}})=>{j.value.showParent=e})},null,8,["modelValue","options"])])),_:1})])),_:1},512),[[V,3!==j.value.menuType]]),f(d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"缓存页面"},{default:n((()=>[d(m(h),{modelValue:j.value.keepAlive?0:1,options:m(k),onChange:l[18]||(l[18]=({option:{value:e}})=>{j.value.keepAlive=e})},null,8,["modelValue","options"])])),_:1})])),_:1},512),[[V,j.value.menuType<2]]),f(d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"标签页"},{default:n((()=>[d(m(h),{modelValue:j.value.hiddenTag?1:0,options:m(U),onChange:l[19]||(l[19]=({option:{value:e}})=>{j.value.hiddenTag=e})},null,8,["modelValue","options"])])),_:1})])),_:1},512),[[V,j.value.menuType<2]]),f(d(m(c),{value:12,xs:24,sm:24},{default:n((()=>[d(a,{label:"固定标签页"},{default:n((()=>[d(m(h),{modelValue:j.value.fixedTag?0:1,options:m(y),onChange:l[20]||(l[20]=({option:{value:e}})=>{j.value.fixedTag=e})},null,8,["modelValue","options"])])),_:1})])),_:1},512),[[V,j.value.menuType<2]])])),_:1})])),_:1},8,["model","rules"])}}});export{P as _};
