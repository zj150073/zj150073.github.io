import{useColumns as e}from"./columns-DToAomUB.js";import{d as l,a,e as o,f as t,b as r,w as n,g as s,i as u,u as c,k as i,F as d,l as m,h as p,aF as f}from"./index-DTxOO0Gw.js";const g={class:"m-4"},h=l({__name:"index",setup(l){const h=a(),b=a(),x=a(),{searchForm:k,sexOptions:_,columns:y,pagination:v,selectValue:V,tableData:C,onSure:Y,onClear:D,onReset:S,onSearch:R,removeTag:w,handleSelectionChange:M}=e(x,h,b);return(e,l)=>{const a=o("el-option"),z=o("el-select"),F=o("el-form-item"),T=o("el-date-picker"),U=o("el-button"),j=o("el-form"),P=o("pure-table");return t(),r(z,{ref_key:"selectRef",ref:x,modelValue:c(V),"onUpdate:modelValue":l[2]||(l[2]=e=>f(V)?V.value=e:null),class:"!w-[200px]",placeholder:"请选择",clearable:"",multiple:"","collapse-tags":"","value-key":"id",onRemoveTag:c(w),onClear:c(D)},{empty:n((()=>[s("div",g,[u(j,{ref_key:"formRef",ref:h,inline:!0,model:c(k)},{default:n((()=>[u(F,{prop:"sexValue"},{default:n((()=>[u(z,{modelValue:c(k).sexValue,"onUpdate:modelValue":l[0]||(l[0]=e=>c(k).sexValue=e),class:"!w-[120px]",placeholder:"请选择性别",teleported:!1,clearable:""},{default:n((()=>[(t(!0),i(d,null,m(c(_),(e=>(t(),r(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),u(F,{prop:"searchDate"},{default:n((()=>[u(T,{modelValue:c(k).searchDate,"onUpdate:modelValue":l[1]||(l[1]=e=>c(k).searchDate=e),class:"!w-[150px]",type:"date",placeholder:"请选择日期",format:"YYYY/MM/DD","value-format":"YYYY-MM-D"},null,8,["modelValue"])])),_:1}),u(F,{class:"float-right !mr-0"},{default:n((()=>[u(U,{type:"primary",text:"",bg:"",onClick:c(R)},{default:n((()=>[p(" 查询 ")])),_:1},8,["onClick"]),u(U,{text:"",bg:"",onClick:c(S)},{default:n((()=>[p(" 重置 ")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),u(P,{ref_key:"tableRef",ref:b,"row-key":"id",alignWhole:"center","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},data:c(C).slice((c(v).currentPage-1)*c(v).pageSize,c(v).currentPage*c(v).pageSize),columns:c(y),pagination:c(v),onSelectionChange:c(M)},null,8,["data","columns","pagination","onSelectionChange"]),u(U,{class:"absolute bottom-[25px] left-[20px]",type:"primary",size:"small",text:"",bg:"",onClick:c(Y)},{default:n((()=>[p(" 确定 ")])),_:1},8,["onClick"])])])),_:1},8,["modelValue","onRemoveTag","onClear"])}}});export{h as _};
