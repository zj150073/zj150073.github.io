import{m as e}from"./index-DK9WUj9J.js";import{b as a}from"./data-7xVGzIsj.js";function r(r){const t=Vue.ref("");return{columns:[{label:"ID",prop:"id",width:80},{label:"日期",prop:"date",minWidth:120},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],pagination:Vue.reactive({pageSize:5,currentPage:1,layout:"prev, pager, next",total:a.length,background:!0,small:!0}),selectValue:t,tableDataEdit:a,rowStyle:function({row:{name:e}}){return{cursor:"pointer",background:e===t.value?"var(--el-fill-color-light)":""}},onRowClick:function(a){t.value=a.name,r.value.blur(),e(`当前选中行的数据为：${JSON.stringify(a)}`,{type:"success"})}}}export{r as useColumns};
