import{a as e}from"./data-RmShT9iF.js";const t=Vue.defineComponent({__name:"fixColumn",props:{height:{default:null}},setup(t){const o=[{label:"日期",prop:"date",width:"260",fixed:!0},{label:"姓名",prop:"name",width:"260"},{label:"地区",prop:"state",width:"260"},{label:"城市",prop:"city",width:"260"},{label:"地址",prop:"address",width:"260"},{label:"邮编",prop:"post-code",width:"260"},{label:"操作",width:"120",fixed:"right",slot:"operation"}];return(t,a)=>{const l=Vue.resolveComponent("el-button"),r=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createBlock(r,{data:t.height?Vue.unref(e).concat(Vue.unref(e)).concat(Vue.unref(e)):Vue.unref(e),columns:o,height:t.height},{operation:Vue.withCtx((({row:e})=>[Vue.createVNode(l,{link:"",type:"primary",size:"small",onClick:e=>{}},{default:Vue.withCtx((()=>[Vue.createTextVNode(" Detail ")])),_:2},1032,["onClick"]),Vue.createVNode(l,{link:"",type:"primary",size:"small"},{default:Vue.withCtx((()=>[Vue.createTextVNode("Edit")])),_:1})])),_:1},8,["data","height"])}}});export{t as _};
