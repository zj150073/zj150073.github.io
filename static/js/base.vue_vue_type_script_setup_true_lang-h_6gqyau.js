import"./element-plus-DsFyl0Kk.js";import{a as e}from"./plus-pro-components-CYEVFP0q.js";import{d as l,r as a,o,f as t,D as p}from"./@vue-CFXrvzpc.js";const r=l({__name:"base",setup(l){const r=a({status:"1",name:"",rate:4,progress:100,switch:!0,time:(new Date).toString(),endTime:[]}),s={name:[{required:!0,message:"请输入名称"}]},i=[{label:"名称",width:120,prop:"name",valueType:"copy",tooltip:"我是名称"},{label:"状态",width:120,prop:"status",valueType:"select",options:[{label:"未解决",value:"0",color:"red"},{label:"已解决",value:"1",color:"blue"},{label:"解决中",value:"2",color:"yellow"},{label:"失败",value:"3",color:"red"}]},{label:"执行进度",width:200,prop:"progress"},{label:"评分",width:200,prop:"rate",valueType:"rate"},{label:"是否显示",width:100,prop:"switch",valueType:"switch"},{label:"时间",prop:"time",valueType:"date-picker"},{label:"数量",prop:"number",valueType:"input-number",fieldProps:{precision:2,step:2}},{label:"梦想",prop:"gift",valueType:"radio",options:[{label:"诗",value:"0"},{label:"远方",value:"1"},{label:"美食",value:"2"}]},{label:"到期时间",prop:"endTime",valueType:"date-picker",fieldProps:{type:"datetimerange",startPlaceholder:"请选择开始时间",endPlaceholder:"请选择结束时间"}},{label:"说明",prop:"desc",valueType:"textarea",fieldProps:{maxlength:10,showWordLimit:!0,autosize:{minRows:2,maxRows:4}}}],u=(e,l)=>{},n=e=>{},m=e=>{},d=()=>{};return(l,a)=>(o(),t(p(e),{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),class:"w-[450px] m-auto",columns:i,rules:s,"label-position":"right",onChange:u,onSubmit:n,onSubmitError:m,onReset:d},null,8,["modelValue"]))}});export{r as _};
