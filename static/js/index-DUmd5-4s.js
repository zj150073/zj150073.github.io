import{J as e,z as a}from"./@infectoone-CmPeCsoO.js";import{d as t,r as n,f as r,B as s,D as l,o as d,a as g,p as i,c as o,g as b,F as c}from"./@vue-CFXrvzpc.js";import"./dayjs-BWHVJBZs.js";import"./@amap-Bx2D3lnM.js";const u=t({__name:"index",setup(t){const u=n([[{week:"星期一",beginDate:"06:00",endDate:"22:00",ganttBarConfig:{id:"0",hasHandles:!0,label:"需求收集和分析  负责人：小张",style:{background:"#e96560"}}}],[{week:"星期二",beginDate:"09:00",endDate:"18:00",ganttBarConfig:{id:"1",hasHandles:!0,label:"系统设计  负责人：小强",style:{background:"#5ccfa3"}}}],[{week:"星期三",beginDate:"07:00",endDate:"20:00",ganttBarConfig:{id:"2",hasHandles:!0,label:"编码实现  负责人：老李",style:{background:"#77d6fa"}}}],[{week:"星期四",beginDate:"06:00",endDate:"21:00",ganttBarConfig:{id:"3",hasHandles:!0,label:"编码实现  负责人：小明",style:{color:"#fff",background:"#1b2a47"}}}],[{week:"星期五",beginDate:"05:00",endDate:"19:00",ganttBarConfig:{id:"4",hasHandles:!0,label:"内部测试  负责人：小雪",style:{background:"#5ccfa3"}}}],[{week:"星期六",beginDate:"10:00",endDate:"22:00",ganttBarConfig:{id:"5",hasHandles:!0,label:"系统优化和文档整理  负责人：小欣",style:{background:"#f8bc45"}}}],[{week:"星期天",beginDate:"04:00",endDate:"23:59",ganttBarConfig:{id:"6",immobile:!1,hasHandles:!1,label:"部署和上线  负责人：老王",style:{background:"#f3953d"}}}]]);const D=function(){const e=new Date,a=e.getDay(),t=new Date(e);t.setDate(e.getDate()-a+1);const n=new Date(t);n.setDate(t.getDate()+6);const r=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return{currentWeekStart:r(t),currentWeekEnd:r(n)}}();return(t,n)=>(d(),r(l(a),{"chart-start":"00:00","chart-end":"23:59",precision:"hour","date-format":"HH:mm","bar-start":"beginDate","bar-end":"endDate",grid:""},{"upper-timeunit":s((()=>[g("h1",null,i(`${l(D).currentWeekStart} / ${l(D).currentWeekEnd}`),1)])),default:s((()=>[(d(!0),o(c,null,b(u.value,((a,t)=>(d(),r(l(e),{key:t,bars:a,label:a[0].week,"highlight-on-hover":""},null,8,["bars","label"])))),128))])),_:1}))}});export{u as default};
