import{i as p,r as u}from"./index-Ji3eRBRu.js";import{d as f,h as s,i as d,j as m,aE as g,aF as v,c as y,o as w,v as b,K as x}from"./index-Cc7cgiWH.js";const S={color:["#409EFF","#36CE9E","#f56e6a","#626c91","#edb00d","#909399"],grid:{left:"4px",right:"4px",bottom:"10",top:"40",containLabel:!0},legend:{left:"45px",textStyle:{color:"#999"},inactiveColor:"rgba(128,128,128,0.4)"},categoryAxis:{axisLine:{show:!0,lineStyle:{color:"rgba(128,128,128,0.2)",width:1}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{color:"#999"},splitLine:{show:!1,lineStyle:{color:["#eee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(255,255,255,0.01)","rgba(0,0,0,0.01)"]}}},valueAxis:{axisLine:{show:!1,lineStyle:{color:"#999"}},splitLine:{show:!0,lineStyle:{color:"rgba(128,128,128,0.2)"}}}},n=f({name:"ReCode",__name:"index",props:{width:{},height:{},options:{}},emits:["callback"],setup(a,{emit:c}){const h=c;u("T",S);const r=a,o=s(null),l=s(!1),i=s(null);return d(()=>{if(l.value=!0,o.value){const e=p(o.value,"T");e.setOption(r.options),i.value=e,e.on("legendselectchanged",function(t){h("callback",t)}),m(()=>r.options,t=>{e.setOption(t),i.value=e},{deep:!0})}}),g(()=>{l.value||x(()=>{i.value.resize()})}),v(()=>{l.value=!1}),(e,t)=>(w(),y("div",{ref_key:"chartRef",ref:o,style:b({width:e.width?e.width:"100%",height:e.height?e.height:"100%"})},null,4))}});n.install=a=>{a.component(n.name,n)};export{n as _};
