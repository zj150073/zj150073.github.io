import"./_plugin-vue_export-helper-CYmJEdkS.js";import{P as i}from"./plus-form-BYHprvoF.js";import{d as m,a as d,f as c,b,u as v}from"./index-BdQqVUXy.js";const T=m({__name:"base",setup(h){const a=d({status:"1",name:"",rate:4,progress:100,switch:!0,time:new Date().toString(),endTime:[]}),o={name:[{required:!0,message:"请输入名称"}]},t=[{label:"名称",width:120,prop:"name",valueType:"copy",tooltip:"我是名称"},{label:"状态",width:120,prop:"status",valueType:"select",options:[{label:"未解决",value:"0",color:"red"},{label:"已解决",value:"1",color:"blue"},{label:"解决中",value:"2",color:"yellow"},{label:"失败",value:"3",color:"red"}]},{label:"执行进度",width:200,prop:"progress"},{label:"评分",width:200,prop:"rate",valueType:"rate"},{label:"是否显示",width:100,prop:"switch",valueType:"switch"},{label:"时间",prop:"time",valueType:"date-picker"},{label:"数量",prop:"number",valueType:"input-number",fieldProps:{precision:2,step:2}},{label:"梦想",prop:"gift",valueType:"radio",options:[{label:"诗",value:"0"},{label:"远方",value:"1"},{label:"美食",value:"2"}]},{label:"到期时间",prop:"endTime",valueType:"date-picker",fieldProps:{type:"datetimerange",startPlaceholder:"请选择开始时间",endPlaceholder:"请选择结束时间"}},{label:"说明",prop:"desc",valueType:"textarea",fieldProps:{maxlength:10,showWordLimit:!0,autosize:{minRows:2,maxRows:4}}}],r=(e,l)=>{},p=e=>{},s=e=>{},n=()=>{};return(e,l)=>(c(),b(v(i),{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=u=>a.value=u),class:"w-[450px] m-auto",columns:t,rules:o,"label-position":"right",onChange:r,onSubmit:p,onSubmitError:s,onReset:n},null,8,["modelValue"]))}});export{T as _};
