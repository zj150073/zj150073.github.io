import{d as e,a as t,e as a,f as l,k as s,i as o,w as r,h as d,t as n}from"./index-CgRj-jQH.js";const f=e({__name:"filters",setup(e){const f=t(),i=e=>{const{clearFilter:t}=f.value.getTableRef();t(e)},m=()=>{i(["date"])},u=[{label:"日期",prop:"date",sortable:!0,columnKey:"date",filters:[{text:"2016-05-01",value:"2016-05-01"},{text:"2016-05-02",value:"2016-05-02"},{text:"2016-05-03",value:"2016-05-03"},{text:"2016-05-04",value:"2016-05-04"}],filterMethod:(e,t,a)=>t[a.property]===e},{label:"姓名",prop:"name"},{label:"地址",prop:"address"},{label:"标签",prop:"tag",filters:[{text:"Home",value:"Home"},{text:"Office",value:"Office"}],filterMethod:(e,t)=>t.tag===e,filterPlacement:"bottom-end",slot:"tag"}],c=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"}];return(e,t)=>{const g=a("el-button"),p=a("el-tag"),v=a("pure-table");return l(),s("div",null,[o(g,{onClick:m},{default:r((()=>[d("reset date filter")])),_:1}),o(g,{onClick:i},{default:r((()=>[d("reset all filters")])),_:1}),o(v,{ref_key:"tableRef",ref:f,"row-key":"date",data:c,columns:u},{tag:r((({row:e})=>[o(p,{type:"Home"===e.tag?null:"success","disable-transitions":""},{default:r((()=>[d(n(e.tag),1)])),_:2},1032,["type"])])),_:1},512)])}}});export{f as _};
