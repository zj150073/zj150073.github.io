import{d as e}from"./dayjs-BWHVJBZs.js";import{p as a}from"./@pureadmin-f9nW_l6N.js";const s=e(new Date).format("YYYY-MM-DD"),t=[{date:s,name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Jack",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Dick",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Harry",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Sam",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Lucy",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Mary",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Mike",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Mike1",address:"No. 189, Grove St, Los Angeles"},{date:s,name:"Mike2",address:"No. 189, Grove St, Los Angeles"}];a(t,!0).map((e=>Object.assign(e,{state:"California",city:"Los Angeles","post-code":"CA 90036"}))),a(t,!0).map(((e,a)=>Object.assign(e,{image:`https://pure-admin.github.io/pure-admin-table/imgs/${a+1}.jpg`}))),a(t,!0).map(((a,s)=>{delete a.date,Object.assign(a,{date:`${e(new Date).format("YYYY-MM")}-${s+1}`})}));const d=a(t,!0).map(((a,s)=>(delete a.address,delete a.date,Object.assign(a,{id:s+1,date:`${e(new Date).format("YYYY-MM")}-${s+1}`})))),o=a(t,!0).map(((a,s)=>(delete a.date,Object.assign(a,{id:s+1,date:`${e(new Date).format("YYYY-MM")}-${s+1}`,address:"China",sex:s%2==0?"男":"女"}))));export{d as a,o as b,t};
