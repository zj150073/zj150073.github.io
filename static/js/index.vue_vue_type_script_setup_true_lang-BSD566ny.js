import{useColumns as a}from"./columns-B7SiJLbX.js";import{d as e,r as n,a1 as o,o as i,f as g,D as t}from"./@vue-CFXrvzpc.js";const r=e({__name:"index",setup(e){const r=n(),{loading:s,columns:l,dataList:d,pagination:p,loadingConfig:u,adaptiveConfig:c,onSizeChange:f,onCurrentChange:C}=a();return(a,e)=>{const n=o("pure-table");return i(),g(n,{ref_key:"tableRef",ref:r,border:"",adaptive:"",adaptiveConfig:t(c),"row-key":"id",alignWhole:"center",showOverflowTooltip:"",loading:t(s),"loading-config":t(u),data:t(d).slice((t(p).currentPage-1)*t(p).pageSize,t(p).currentPage*t(p).pageSize),columns:t(l),pagination:t(p),onPageSizeChange:t(f),onPageCurrentChange:t(C)},null,8,["adaptiveConfig","loading","loading-config","data","columns","pagination","onPageSizeChange","onPageCurrentChange"])}}});export{r as _};
