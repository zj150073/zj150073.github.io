import{d as a,r as e,a1 as d,o as n,c as i,s as t,D as o}from"./@vue-CFXrvzpc.js";const r=a({__name:"tree",setup(a){let r=e({children:"children",hasChildren:"hasChildren",checkStrictly:!0});const l=(a,e,d)=>{setTimeout((()=>{d([{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}])}),1e3)},s=[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",children:[{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}]},{id:4,date:"2016-05-03",name:"wangxiaohu"}],u=[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",hasChildren:!0},{id:4,date:"2016-05-03",name:"wangxiaohu"}],h=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"}];return(a,e)=>{const m=d("pure-table");return n(),i("div",null,[t(m,{data:s,columns:h,"row-key":"id",border:"","default-expand-all":"",class:"mb-6"}),t(m,{data:u,columns:h,"row-key":"id",border:"",lazy:"",load:l,"tree-props":o(r)},null,8,["tree-props"])])}}});export{r as _};
