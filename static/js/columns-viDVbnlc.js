var a=Object.defineProperty,e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;import{t as o}from"./data-DSQntQKH.js";import{a as l,r as i,m as p,aN as s,a8 as f}from"./index-CKXHolY4.js";function u(){const a=l([]),u=l(!0),c=i({pageSize:20,currentPage:1,pageSizes:[20,40,60],total:0,align:"right",background:!0,small:!1}),g=i({text:"正在加载第一页...",viewBox:"-10, -10, 50, 50",spinner:'\n        <path class="path" d="\n          M 30 15\n          L 28 17\n          M 25.61 25.61\n          A 15 15, 0, 0, 1, 15 30\n          A 15 15, 0, 1, 1, 27.99 7.5\n          L 15 15\n        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>\n      '});return p((()=>{s(600).then((()=>{const l=[];Array.from({length:6}).forEach((()=>{l.push(f(o,!0))})),l.flat(1/0).forEach(((o,l)=>{a.value.push(((a,o)=>{for(var l in o||(o={}))t.call(o,l)&&r(a,l,o[l]);if(e)for(var l of e(o))n.call(o,l)&&r(a,l,o[l]);return a})({id:l},o))})),c.total=a.value.length,u.value=!1}))})),{loading:u,columns:[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],dataList:a,pagination:c,loadingConfig:g,adaptiveConfig:{offsetBottom:110},onSizeChange:function(a){},onCurrentChange:function(a){g.text=`正在加载第${a}页...`,u.value=!0,s(600).then((()=>{u.value=!1}))}}}export{u as useColumns};
