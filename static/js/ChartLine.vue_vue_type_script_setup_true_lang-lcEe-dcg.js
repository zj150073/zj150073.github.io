import{d as e,ar as t,p as a,a as o,as as r,f as s,k as l}from"./index-DTxOO0Gw.js";const i=e({__name:"ChartLine",props:{data:{type:Array,default:()=>[]},color:{type:String,default:"#41b6ff"}},setup(e){const i=e,{isDark:d}=t(),n=a((()=>d.value?"dark":"light")),p=o(),{setOptions:h}=r(p,{theme:n,renderer:"svg"});return h({container:".line-card",xAxis:{type:"category",show:!1,data:i.data},grid:{top:"15px",bottom:0,left:0,right:0},yAxis:{show:!1,type:"value"},series:[{data:i.data,type:"line",symbol:"none",smooth:!0,color:i.color,lineStyle:{shadowOffsetY:3,shadowBlur:7,shadowColor:i.color}}]}),(e,t)=>(s(),l("div",{ref_key:"chartRef",ref:p,style:{width:"100%",height:"60px"}},null,512))}});export{i as _};
