import{d as I,k as _,I as k,o as t,c as l,e as p,L as r,O as c,K as h,u,t as x,_ as S}from"./index-N0R77HQ5.js";const b={class:"rTable"},w={class:"list-title"},B=I({__name:"table",props:{config:{type:Object,default:()=>({text:"",height:"292.92px",width:"551.98px",columns:[{title:"车型",dataIndex:"sub_model"},{title:"vin号",dataIndex:"serial_number"},{title:"上线顺序",dataIndex:"zz_seq"}],dataSource:[]})}},setup(y){const n=y;let d=e=>{let a={};return e.width?a.width=e.width:a.flex=1,a},o=_(),f=_(0);function v(e){if(e.length<2)return e;const a=e[0];e.shift(),e.push(a)}let g=()=>{n.config.dataSource.length>4?(v(n.config.dataSource),f.value++):clearInterval(o.value)};return o.value=setInterval(g,3e3),k(()=>{clearInterval(o.value)}),(e,a)=>(t(),l("div",b,[p("div",w,[p("ul",null,[(t(!0),l(r,null,c(n.config.columns,s=>(t(),l("li",{key:s.title,style:h(u(d)(s))},x(s.title),5))),128))])]),(t(),l("div",{key:u(f),class:"scrollBody animation"},[(t(!0),l(r,null,c(n.config.dataSource,(s,m)=>(t(),l("ul",{key:m},[(t(!0),l(r,null,c(n.config.columns,i=>(t(),l("li",{key:i.title,style:h(u(d)(i))},x(s[i.dataIndex]),5))),128))]))),128))]))]))}}),L=S(B,[["__scopeId","data-v-e024536b"]]);export{L as default};
