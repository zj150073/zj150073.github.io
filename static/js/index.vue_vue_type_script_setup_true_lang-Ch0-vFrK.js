import{useColumns as e}from"./columns-CqqUH5jW.js";import{d as a,r as l,a1 as o,o as r,f as s,B as t,a as n,s as c,D as i,V as u}from"./@vue-CFXrvzpc.js";const d={class:"m-4"},m=a({__name:"index",setup(a){const m=l(),{columns:p,pagination:g,selectValue:y,tableDataEdit:w,rowStyle:f,onRowClick:k}=e(m);return(e,a)=>{const l=o("pure-table"),v=o("el-select");return r(),s(v,{ref_key:"selectRef",ref:m,modelValue:i(y),"onUpdate:modelValue":a[0]||(a[0]=e=>u(y)?y.value=e:null),class:"!w-[200px]",placeholder:"请选择","value-key":"id",clearable:""},{empty:t((()=>[n("div",d,[c(l,{"row-key":"id",alignWhole:"center","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},"row-style":i(f),data:i(w).slice((i(g).currentPage-1)*i(g).pageSize,i(g).currentPage*i(g).pageSize),columns:i(p),pagination:i(g),onRowClick:i(k)},null,8,["row-style","data","columns","pagination","onRowClick"])])])),_:1},8,["modelValue"])}}});export{m as _};
