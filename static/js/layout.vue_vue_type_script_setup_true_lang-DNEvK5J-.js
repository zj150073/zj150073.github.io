import{t as e}from"./data-RmShT9iF.js";const a=Vue.defineComponent({__name:"layout",setup(a){const l=Vue.ref("fixed"),o=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(a,t)=>{const u=Vue.resolveComponent("el-radio-button"),r=Vue.resolveComponent("el-radio-group"),n=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(r,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e)},{default:Vue.withCtx((()=>[Vue.createVNode(u,{label:"fixed",value:"fixed"}),Vue.createVNode(u,{label:"auto",value:"auto"})])),_:1},8,["modelValue"]),Vue.createVNode(n,{data:Vue.unref(e),columns:o,"table-layout":l.value},null,8,["data","table-layout"])])}}});export{a as _};
