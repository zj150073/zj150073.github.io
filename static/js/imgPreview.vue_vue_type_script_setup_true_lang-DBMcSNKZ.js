import{d as e}from"./data-RmShT9iF.js";const t=Vue.createElementVNode("video",{width:"180",height:"180",controls:""},[Vue.createElementVNode("source",{src:"https://pure-admin.github.io/pure-admin-doc/video/url.mov",type:"video/mp4"})],-1),o=Vue.defineComponent({__name:"imgPreview",setup(o){const i=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"},{label:"视频",slot:"video"},{label:"图像",slot:"image"}];return(o,r)=>{const a=Vue.resolveComponent("el-image"),l=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createBlock(l,{data:Vue.unref(e),columns:i},{video:Vue.withCtx((()=>[t])),image:Vue.withCtx((({row:t,index:o})=>[Vue.createVNode(a,{"preview-teleported":"",loading:"lazy",src:t.image,"preview-src-list":Vue.unref(e).map((e=>e.image)),"initial-index":o,fit:"cover",class:"w-[100px] h-[100px]"},null,8,["src","preview-src-list","initial-index"])])),_:1},8,["data"])}}});export{o as _};
