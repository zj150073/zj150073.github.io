import{u as s,w as o}from"./xlsx-9vXbHHz2.js";import{a as r}from"./data-er26mnGU.js";import{p as t}from"./@pureadmin-f9nW_l6N.js";import{m as p}from"./index-CQT2hjpo.js";import{r as i}from"./@vue-CFXrvzpc.js";import"./dayjs-BWHVJBZs.js";import"./@amap-Bx2D3lnM.js";import"./vue-DWYrQbHy.js";import"./element-plus-DsFyl0Kk.js";import"./lodash-es-BgzC0s9P.js";import"./@element-plus-Bqpau_gV.js";import"./@popperjs-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-kghe82LF.js";import"./vite-plugin-fake-server-CytHVkXj.js";import"./@faker-js-CRy60TLX.js";import"./version-rocket-chvOQqaV.js";import"./@iconify-icons-CxRB8ffa.js";import"./@vueuse-tP1Y4vdd.js";import"./defu-iUM7Auia.js";import"./framesync-CUhBu5sQ.js";import"./style-value-types-UCYNu-x1.js";import"./popmotion-DRTv1-mp.js";import"./hey-listen-DkH12NBk.js";import"./plus-pro-components-CYEVFP0q.js";import"./sortablejs-DhhifNSC.js";import"./axios-B1L2Kzed.js";import"./vue-i18n-DB-7wkrF.js";import"./@intlify-DfwD9yJy.js";import"./js-cookie-BXEMiIsG.js";import"./pinia-DzAV29mk.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-CGx-uoKe.js";import"./axs-request-CnYniYE7.js";import"./nprogress-L6f6pfEY.js";import"./echarts-D2b6xzX-.js";import"./zrender-CUz1GrA9.js";import"./tslib-ZseNXxlj.js";import"./vxe-table-CPtn8uUL.js";import"./xe-utils-CdBoVBzI.js";import"./dom-zindex-Ckn4mXSH.js";import"./responsive-storage-5vfjqqcs.js";import"./@iconify-BUzAfhQo.js";/* empty css                 */import"./vue-tippy-DPYCMIfw.js";function e(){const e=i(t(r,!0)),m=[{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}];return{columns:m,dataList:e,exportExcel:()=>{const r=e.value.map((s=>{const o=[];return m.forEach((r=>{o.push(s[r.prop])})),o})),t=[];m.forEach((s=>{t.push(s.label)})),r.unshift(t);const i=s.aoa_to_sheet(r),j=s.book_new();s.book_append_sheet(j,i,"数据报表"),o(j,"pure-admin-table.xlsx"),p("导出成功",{type:"success"})}}}export{e as useColumns};
