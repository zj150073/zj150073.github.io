import{a as t}from"./data-Ci-NbqxW.js";import{d as a,e,f as i,b as l,w as o,i as s,h as p,u as r}from"./index-07XH1eRd.js";const d=a({__name:"fixColumn",props:{height:{default:null}},setup(a){const d=[{label:"日期",prop:"date",width:"260",fixed:!0},{label:"姓名",prop:"name",width:"260"},{label:"地区",prop:"state",width:"260"},{label:"城市",prop:"city",width:"260"},{label:"地址",prop:"address",width:"260"},{label:"邮编",prop:"post-code",width:"260"},{label:"操作",width:"120",fixed:"right",slot:"operation"}];return(a,n)=>{const h=e("el-button"),c=e("pure-table");return i(),l(c,{data:a.height?r(t).concat(r(t)).concat(r(t)):r(t),columns:d,height:a.height},{operation:o((({row:t})=>[s(h,{link:"",type:"primary",size:"small",onClick:t=>{}},{default:o((()=>[p(" Detail ")])),_:2},1032,["onClick"]),s(h,{link:"",type:"primary",size:"small"},{default:o((()=>[p("Edit")])),_:1})])),_:1},8,["data","height"])}}});export{d as _};
