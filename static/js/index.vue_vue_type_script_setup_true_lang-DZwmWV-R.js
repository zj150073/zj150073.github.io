import{useColumns as a}from"./columns-5MDcYhWX.js";import{d as l,a1 as e,o as r,c as s,s as o,B as n,a as t,p as i,D as c,f as d,E as u}from"./@vue-CFXrvzpc.js";const m={class:"flex"},p={class:"w-[400px]"},k={key:1},f=l({__name:"index",setup(l){const{editMap:f,columns:y,dataList:v,onEdit:_,onSave:C,onCancel:g}=a();return(a,l)=>{const x=e("el-scrollbar"),b=e("el-button"),w=e("pure-table");return r(),s("div",m,[o(x,null,{default:n((()=>[t("code",null,[t("pre",p," "+i(c(v)),1)])])),_:1}),o(w,{"row-key":"id","align-whole":"center","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},data:c(v),columns:c(y)},{operation:n((({row:a,index:l})=>{var e;return[(null==(e=c(f)[l])?void 0:e.editable)?(r(),s("div",k,[o(b,{class:"reset-margin",link:"",type:"primary",onClick:a=>c(C)(l)},{default:n((()=>[u(" 保存 ")])),_:2},1032,["onClick"]),o(b,{class:"reset-margin",link:"",onClick:a=>c(g)(l)},{default:n((()=>[u(" 取消 ")])),_:2},1032,["onClick"])])):(r(),d(b,{key:0,class:"reset-margin",link:"",type:"primary",onClick:e=>c(_)(a,l)},{default:n((()=>[u(" 修改 ")])),_:2},1032,["onClick"]))]})),_:1},8,["data","columns"])])}}});export{f as _};
