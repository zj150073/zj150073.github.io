import{d as s,ar as o,p as n,a as c,as as i,f as p,k as l}from"./index-BdQqVUXy.js";const _=s({__name:"pieChart",setup(f){const{isDark:t}=o(),a=n(()=>t.value?"dark":"light"),e=c(),{setOptions:r}=i(e,{theme:a});return r({tooltip:{trigger:"item"},legend:{icon:"circle",right:!0},series:[{name:"饼图",type:"pie",top:"20%",radius:"80%",center:["40%","50%"],color:["#e6a23c","#f56c6c","#53a7ff"],data:[{value:400,name:"watchers"},{value:1600,name:"forks"},{value:7200,name:"star"}]}]}),(m,h)=>(p(),l("div",{ref_key:"pieChartRef",ref:e,style:{width:"100%",height:"35vh"}},null,512))}});export{_};
