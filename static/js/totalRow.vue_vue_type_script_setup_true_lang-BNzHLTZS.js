import{d as o,e as a,f as m,k as t,i as n,F as e}from"./index-07XH1eRd.js";const r=o({__name:"totalRow",setup(o){const r=o=>{const{columns:a,data:m}=o,t=[];return a.forEach(((o,a)=>{if(0===a)return void(t[a]="Total Cost");const n=m.map((a=>Number(a[o.property])));n.every((o=>Number.isNaN(o)))?t[a]="N/A":t[a]=`$ ${n.reduce(((o,a)=>{const m=Number(a);return Number.isNaN(m)?o:o+a}),0)}`})),t},u=[{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}],s=[{label:"ID",prop:"id"},{label:"Name",prop:"name"},{label:"Amount 1",prop:"amount1",sortable:!0},{label:"Amount 2",prop:"amount2",sortable:!0},{label:"Amount 3",prop:"amount3",sortable:!0}],l=[{label:"ID",prop:"id"},{label:"Name",prop:"name"},{label:"Cost 1 ($)",prop:"amount1"},{label:"Cost 2 ($)",prop:"amount2"},{label:"Cost 3 ($)",prop:"amount3"}];return(o,p)=>{const b=a("pure-table");return m(),t(e,null,[n(b,{data:u,columns:s,border:"","show-summary":"",class:"mb-6"}),n(b,{data:u,columns:l,border:"","summary-method":r,"show-summary":""})],64)}}});export{r as _};
