import{m as e}from"./index-CQT2hjpo.js";import{b as t}from"./data-er26mnGU.js";import{C as o,j as r}from"./@pureadmin-f9nW_l6N.js";import{r as s,S as a,w as i,n as l}from"./@vue-CFXrvzpc.js";import"./vite-plugin-fake-server-CytHVkXj.js";import"./@faker-js-CRy60TLX.js";import"./version-rocket-chvOQqaV.js";import"./@iconify-icons-CxRB8ffa.js";import"./@vueuse-tP1Y4vdd.js";import"./defu-iUM7Auia.js";import"./framesync-CUhBu5sQ.js";import"./style-value-types-UCYNu-x1.js";import"./popmotion-DRTv1-mp.js";import"./hey-listen-DkH12NBk.js";import"./element-plus-DsFyl0Kk.js";import"./lodash-es-BgzC0s9P.js";import"./@element-plus-Bqpau_gV.js";import"./@popperjs-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-BWHVJBZs.js";import"./@amap-Bx2D3lnM.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-kghe82LF.js";import"./plus-pro-components-CYEVFP0q.js";import"./sortablejs-DhhifNSC.js";import"./axios-B1L2Kzed.js";import"./vue-i18n-DB-7wkrF.js";import"./@intlify-DfwD9yJy.js";import"./js-cookie-BXEMiIsG.js";import"./pinia-DzAV29mk.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-CGx-uoKe.js";import"./axs-request-CnYniYE7.js";import"./nprogress-L6f6pfEY.js";import"./echarts-D2b6xzX-.js";import"./zrender-CUz1GrA9.js";import"./tslib-ZseNXxlj.js";import"./vxe-table-CPtn8uUL.js";import"./xe-utils-CdBoVBzI.js";import"./dom-zindex-Ckn4mXSH.js";import"./responsive-storage-5vfjqqcs.js";import"./vue-DWYrQbHy.js";import"./@iconify-BUzAfhQo.js";/* empty css                 */import"./vue-tippy-DPYCMIfw.js";function p(p,m,n){const u=s(t),j=o(u.value),v=s([1,3,4]),c=a({sexValue:"",searchDate:""}),d=[{value:0,label:"男"},{value:1,label:"女"}],f=a({pageSize:5,currentPage:1,layout:"prev, pager, next",total:u.value.length,background:!0,small:!0}),h=()=>{const{clearSelection:e}=n.value.getTableRef();e()};return i(v,(()=>{return e=this,t=null,o=function*(){yield l();const{toggleRowSelection:e}=n.value.getTableRef();v.value.forEach((t=>{u.value.forEach((o=>{o.id===t&&e(o)}))}))},new Promise(((r,s)=>{var a=e=>{try{l(o.next(e))}catch(t){s(t)}},i=e=>{try{l(o.throw(e))}catch(t){s(t)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,i);l((o=o.apply(e,t)).next())}));var e,t,o}),{immediate:!0}),{searchForm:c,sexOptions:d,columns:[{type:"selection",reserveSelection:!0,align:"left"},{label:"ID",prop:"id",width:50},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"地址",prop:"address"},{label:"日期",prop:"date",minWidth:120}],pagination:f,selectValue:v,tableData:u,onSure:()=>{p.value.blur(),e(`当前选中的数据为：${JSON.stringify(v.value)}`,{type:"success"})},onClear:h,onReset:()=>{m.value.resetFields(),h(),u.value=j,f.total=u.value.length},onSearch:()=>{if(u.value=j,!r(c.sexValue)){let e=d.map((e=>e.value===Number(c.sexValue)&&e.label)).filter(Boolean)[0];u.value=u.value.filter((t=>t.sex===e))}r(c.searchDate)||(u.value=u.value.filter((e=>e.date===c.searchDate))),f.total=u.value.length},removeTag:({id:e})=>{var t;const{toggleRowSelection:o}=n.value.getTableRef();o(null==(t=u.value.filter((t=>t.id==e)))?void 0:t[0],!1)},handleSelectionChange:e=>{const t=[];e.forEach((e=>{t.push({label:e.name,id:e.id})})),v.value=t}}}export{p as useColumns};
