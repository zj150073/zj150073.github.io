import{o as e}from"./data-Dd4sCrbk.js";import{r as l,s as a,a1 as t,Q as o}from"./@vue-CFXrvzpc.js";function n(){const n=l([]);return{columns:[{label:"姓名",prop:"name",cellRenderer:({row:e})=>a(t("el-input"),{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l},null)},{label:"性别",prop:"sex",cellRenderer:({row:e})=>a(t("el-switch"),{modelValue:e.sex,"onUpdate:modelValue":l=>e.sex=l,"inline-prompt":!0,"active-value":0,"inactive-value":1,"active-text":"男","inactive-text":"女"},null)},{label:"爱好",prop:"hobby",cellRenderer:({row:l})=>{let n;return a(t("el-select"),{modelValue:l.hobby,"onUpdate:modelValue":e=>l.hobby=e,clearable:!0,placeholder:"请选择爱好"},"function"==typeof(r=n=e.map((e=>a(t("el-option"),{key:e.value,label:e.label,value:e.value},null))))||"[object Object]"===Object.prototype.toString.call(r)&&!o(r)?n:{default:()=>[n]});var r}},{label:"日期",prop:"date",cellRenderer:({row:e})=>a(t("el-date-picker"),{modelValue:e.date,"onUpdate:modelValue":l=>e.date=l,type:"date",format:"YYYY/MM/DD","value-format":"YYYY-MM-DD",placeholder:"请选择日期"},null),minWidth:110},{label:"操作",fixed:"right",width:90,slot:"operation"}],dataList:n,onAdd:function(){n.value.push({id:n.value.length+1,name:"",sex:0,hobby:"",date:""})},onDel:function(e){const l=n.value.indexOf(e);-1!==l&&n.value.splice(l,1)}}}export{n as useColumns};
