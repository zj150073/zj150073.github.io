import{t as e}from"./data-C4dpkQ-R.js";import{d as a,r as t,a1 as l,o,c as s,s as n,D as r,a as c,B as i,E as p}from"./@vue-CFXrvzpc.js";const d={style:{"margin-top":"20px"}},u=a({__name:"multipleChoice",setup(a){const u=t(),f=t([]),m=e=>{const{toggleRowSelection:a,clearSelection:t}=u.value.getTableRef();e?e.forEach((e=>{a(e,void 0)})):t()},g=e=>{f.value=e},b=[{type:"selection",align:"left"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(a,t)=>{const f=l("pure-table"),v=l("el-button");return o(),s("div",null,[n(f,{ref_key:"tableRef",ref:u,data:r(e),columns:b,onSelectionChange:g},null,8,["data"]),c("div",d,[n(v,{onClick:t[0]||(t[0]=a=>m([r(e)[1],r(e)[2]]))},{default:i((()=>[p(" Toggle selection status of second and third rows ")])),_:1}),n(v,{onClick:t[1]||(t[1]=e=>m())},{default:i((()=>[p("Clear selection")])),_:1})])])}}});export{u as _};
