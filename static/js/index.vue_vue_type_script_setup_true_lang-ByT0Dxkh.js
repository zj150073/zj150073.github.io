import{useColumns as e}from"./columns-CPAYGXa5.js";import{d as a,e as l,f as t,k as n,i as u,w as o,u as d,aF as i,h as s,g as r}from"./index-CgRj-jQH.js";const g=r("p",{class:"text-sm"},"多选：",-1),m=r("p",{class:"text-sm"},"动态列：",-1),f=r("p",{class:"text-sm"},"表格大小：",-1),c=r("p",{class:"text-sm"},"分页大小：",-1),v=r("p",{class:"text-sm"},"分页的对齐方式：",-1),p=a({__name:"index",setup(a){const{loading:r,columns:p,dataList:h,select:_,hideVal:V,tableSize:z,pagination:C,loadingConfig:x,paginationAlign:S,paginationSmall:P,onChange:b,onSizeChange:U,onCurrentChange:w}=e();return(e,a)=>{const j=l("el-radio-button"),k=l("el-radio-group"),y=l("el-divider"),A=l("el-space"),W=l("pure-table");return t(),n("div",null,[u(A,{class:"float-right mb-4"},{default:o((()=>[g,u(k,{modelValue:d(_),"onUpdate:modelValue":a[0]||(a[0]=e=>i(_)?_.value=e:null),size:"small"},{default:o((()=>[u(j,{value:"yes"},{default:o((()=>[s("是")])),_:1}),u(j,{value:"no"},{default:o((()=>[s("否")])),_:1})])),_:1},8,["modelValue"]),u(y,{direction:"vertical"}),m,u(k,{modelValue:d(V),"onUpdate:modelValue":a[1]||(a[1]=e=>i(V)?V.value=e:null),size:"small"},{default:o((()=>[u(j,{value:"nohide"},{default:o((()=>[s("不隐藏")])),_:1}),u(j,{value:"hideDate"},{default:o((()=>[s("隐藏日期")])),_:1}),u(j,{value:"hideName"},{default:o((()=>[s("隐藏姓名")])),_:1}),u(j,{value:"hideAddress"},{default:o((()=>[s("隐藏地址")])),_:1})])),_:1},8,["modelValue"]),u(y,{direction:"vertical"}),f,u(k,{modelValue:d(z),"onUpdate:modelValue":a[2]||(a[2]=e=>i(z)?z.value=e:null),size:"small"},{default:o((()=>[u(j,{value:"large"},{default:o((()=>[s("large")])),_:1}),u(j,{value:"default"},{default:o((()=>[s("default")])),_:1}),u(j,{value:"small"},{default:o((()=>[s("small")])),_:1})])),_:1},8,["modelValue"]),u(y,{direction:"vertical"}),c,u(k,{modelValue:d(P),"onUpdate:modelValue":a[3]||(a[3]=e=>i(P)?P.value=e:null),size:"small",onChange:d(b)},{default:o((()=>[u(j,{value:!1},{default:o((()=>[s("no small")])),_:1}),u(j,{value:!0},{default:o((()=>[s("small")])),_:1})])),_:1},8,["modelValue","onChange"]),u(y,{direction:"vertical"}),v,u(k,{modelValue:d(S),"onUpdate:modelValue":a[4]||(a[4]=e=>i(S)?S.value=e:null),size:"small"},{default:o((()=>[u(j,{value:"right"},{default:o((()=>[s("right")])),_:1}),u(j,{value:"center"},{default:o((()=>[s("center")])),_:1}),u(j,{value:"left"},{default:o((()=>[s("left")])),_:1})])),_:1},8,["modelValue"])])),_:1}),u(W,{border:"","row-key":"id",alignWhole:"center",showOverflowTooltip:"",size:d(z),loading:d(r),"loading-config":d(x),height:"small"===d(z)?352:440,data:d(h).slice((d(C).currentPage-1)*d(C).pageSize,d(C).currentPage*d(C).pageSize),columns:d(p),pagination:d(C),onPageSizeChange:d(U),onPageCurrentChange:d(w)},null,8,["size","loading","loading-config","height","data","columns","pagination","onPageSizeChange","onPageCurrentChange"])])}}});export{p as _};
