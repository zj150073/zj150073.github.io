import{P as r}from"./print-BxWTDilF.js";import{b as a}from"./data-DSQntQKH.js";import{a as e,a8 as o}from"./index-CKXHolY4.js";function n(n){return{columns:[{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],dataList:e(o(a,!0)),print:()=>r(n.value.getTableDoms().tableWrapper).toPrint.toPrint,rowStyle:function({rowIndex:r}){return r%2==1?{background:"#ffa39e"}:{background:"#91d5ff"}},cellStyle:function({column:{property:r},rowIndex:a}){if("id"===r)return a<3?{background:"#87baf9"}:{background:"#87e8de"}},headerCellStyle:function({columnIndex:r}){return 0===r?{background:"#f3b2d0"}:{background:"#fafafa"}}}}export{n as useColumns};
