import{t as e}from"./data-DidEPxsj.js";import{d as a,a as t,e as r,f as l,k as s,i as o,u as n,g as u,w as d,h as i}from"./index-CgRj-jQH.js";const p={style:{"margin-top":"20px"}},c=a({__name:"radio",setup(a){const c=t(),f=t(),m=e=>{const{setCurrentRow:a}=c.value.getTableRef();a(e)},b=e=>{f.value=e},g=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(a,t)=>{const f=r("pure-table"),C=r("el-button");return l(),s("div",null,[o(f,{ref_key:"tableRef",ref:c,data:n(e),columns:g,"highlight-current-row":"",onPageCurrentChange:b},null,8,["data"]),u("div",p,[o(C,{onClick:t[0]||(t[0]=a=>m(n(e)[1]))},{default:d((()=>[i("Select second row")])),_:1}),o(C,{onClick:t[1]||(t[1]=e=>m())},{default:d((()=>[i("Clear selection")])),_:1})])])}}});export{c as _};
