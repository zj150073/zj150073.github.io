import{i as l,e as n,F as s,h as a,L as r}from"./index-BdQqVUXy.js";import{t as c}from"./data-B6x2yyR9.js";function u(){const i=[{label:"日期",prop:"date",cellRenderer:({row:e})=>l("div",{style:"display: flex; align-items: center"},[l(n("iconify-icon-online"),{icon:"ep:timer"},null),l("span",{style:"margin-left: 10px"},[e.date])])},{label:"姓名",prop:"name",cellRenderer:({row:e})=>l(n("el-popover"),{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:()=>l(s,null,[l("div",null,[a("name: "),e.name]),l("div",null,[a("address: "),e.address])]),reference:()=>l(n("el-tag"),null,{default:()=>[e.name]})})},{label:"地址",prop:"address"},{label:"操作",cellRenderer:({index:e,row:t})=>l(s,null,[l(n("el-button"),{size:"small",onClick:()=>o(e+1,t)},{default:()=>[a("Edit")]}),l(n("el-button"),{size:"small",type:"danger",onClick:()=>d(e+1,t)},{default:()=>[a("Delete")]})])}],o=(e,t)=>{r(`您修改了第 ${e} 行，数据为：${JSON.stringify(t)}`,{type:"success"})},d=(e,t)=>{r(`您删除了第 ${e} 行，数据为：${JSON.stringify(t)}`)};return{columns:i,tableData:c}}export{u as useColumns};
