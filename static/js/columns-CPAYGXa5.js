var e=Object.defineProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,l=(a,n,t)=>n in a?e(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t;import{t as r}from"./data-RMB1n7e5.js";import{a as o,r as i,P as s,m as p,aN as u,a8 as h}from"./index-CgRj-jQH.js";function d(){const e=o([]),d=o(!0),g=o("no"),c=o("nohide"),f=o("default"),v=o(!1),b=o("right"),m=[{type:"selection",align:"left",reserveSelection:!0,hide:()=>"no"===g.value},{label:"日期",prop:"date",hide:()=>"hideDate"===c.value},{label:"姓名",prop:"name",hide:()=>"hideName"===c.value},{label:"地址",prop:"address",hide:()=>"hideAddress"===c.value}],y=i({pageSize:10,currentPage:1,pageSizes:[10,15,20],total:0,align:"right",background:!0,small:!1}),S=i({text:"正在加载第一页...",viewBox:"-10, -10, 50, 50",spinner:'\n        <path class="path" d="\n          M 30 15\n          L 28 17\n          M 25.61 25.61\n          A 15 15, 0, 0, 1, 15 30\n          A 15 15, 0, 1, 1, 27.99 7.5\n          L 15 15\n        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>\n      '});return s((()=>{y.align=b.value})),p((()=>{u(600).then((()=>{const o=[];Array.from({length:6}).forEach((()=>{o.push(h(r,!0))})),o.flat(1/0).forEach(((r,o)=>{e.value.push(((e,r)=>{for(var o in r||(r={}))n.call(r,o)&&l(e,o,r[o]);if(a)for(var o of a(r))t.call(r,o)&&l(e,o,r[o]);return e})({id:o},r))})),y.total=e.value.length,d.value=!1}))})),{loading:d,columns:m,dataList:e,select:g,hideVal:c,tableSize:f,pagination:y,loadingConfig:S,paginationAlign:b,paginationSmall:v,onChange:function(e){y.small=e},onSizeChange:function(e){},onCurrentChange:function(e){S.text=`正在加载第${e}页...`,d.value=!0,u(600).then((()=>{d.value=!1}))}}}export{d as useColumns};
