var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{b as n}from"./index-DK9WUj9J.js";const V={class:"card-header"},c={class:"font-medium"},d=Vue.createElementVNode("span",null," 请输入要创建水印的值：",-1),i=Vue.createElementVNode("span",null,"请选择要创建水印的颜色：",-1),p=Vue.defineComponent((s=((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&o(e,a,t[a]);if(r)for(var a of r(t))u.call(t,a)&&o(e,a,t[a]);return e})({},{name:"WaterMark"}),t(s,a({__name:"watermark",setup(e){const t=Vue.ref(),a=Vue.ref(),r=Vue.ref("#409EFF"),l=Vue.ref("vue-pure-admin"),{setWatermark:u,clear:o}=n(),{setWatermark:p,clear:s}=n(t),{setWatermark:m}=n(a);return Vue.onMounted((()=>{Vue.nextTick((()=>{m("无法删除的水印",{forever:!0,width:180,height:70})}))})),Vue.onBeforeUnmount((()=>{o()})),(e,n)=>{const m=Vue.resolveComponent("el-link"),f=Vue.resolveComponent("el-input"),v=Vue.resolveComponent("el-color-picker"),h=Vue.resolveComponent("el-space"),w=Vue.resolveComponent("el-button"),x=Vue.resolveComponent("el-card");return Vue.openBlock(),Vue.createBlock(x,{shadow:"never"},{header:Vue.withCtx((()=>[Vue.createElementVNode("div",V,[Vue.createElementVNode("span",c,[Vue.createVNode(m,{href:"https://pure-admin-utils.netlify.app/hooks/useWatermark/useWatermark",target:"_blank",style:{margin:"0 5px 4px 0","font-size":"16px"}},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 页面水印 ")])),_:1})])]),Vue.createVNode(m,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/watermark.vue",target:"_blank"},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 代码位置 src/views/able/watermark.vue ")])),_:1})])),default:Vue.withCtx((()=>[Vue.createVNode(h,{wrap:"",class:"!mb-2"},{default:Vue.withCtx((()=>[d,Vue.createVNode(f,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=e=>l.value=e),class:"mr-4",style:{width:"200px"},clearable:""},null,8,["modelValue"]),i,Vue.createVNode(v,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=e=>r.value=e),"show-alpha":""},null,8,["modelValue"])])),_:1}),Vue.createVNode(h,{wrap:""},{default:Vue.withCtx((()=>[Vue.createVNode(w,{plain:"",onClick:n[2]||(n[2]=e=>Vue.unref(u)(l.value,{color:r.value}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 创建整页水印 ")])),_:1}),Vue.createVNode(w,{plain:"",onClick:n[3]||(n[3]=e=>Vue.unref(u)(l.value,{gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 创建整页渐变水印 ")])),_:1}),Vue.createVNode(w,{plain:"",onClick:n[4]||(n[4]=e=>Vue.unref(u)(l.value,{rotate:0,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 创建整页渐变且水平90度的水印 ")])),_:1}),Vue.createVNode(w,{plain:"",onClick:n[5]||(n[5]=e=>Vue.unref(u)(l.value,{gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}],shadowConfig:[20]}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 创建整页渐变且有阴影的水印 ")])),_:1}),Vue.createVNode(w,{plain:"",onClick:n[6]||(n[6]=e=>Vue.unref(u)(l.value,{globalAlpha:.15,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 创建整页高透明渐变水印 ")])),_:1}),Vue.createVNode(w,{plain:"",onClick:Vue.unref(o)},{default:Vue.withCtx((()=>[Vue.createTextVNode("清除整页水印")])),_:1},8,["onClick"])])),_:1}),Vue.createElementVNode("div",{ref_key:"local",ref:t,class:"w-1/2 h-[200px] border border-sky-500 mt-4"},null,512),Vue.createVNode(h,{wrap:"",class:"mt-6"},{default:Vue.withCtx((()=>[Vue.createVNode(w,{plain:"",onClick:n[7]||(n[7]=e=>Vue.unref(p)("局部水印",{color:r.value,width:140,height:65}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 创建局部水印 ")])),_:1}),Vue.createVNode(w,{plain:"",onClick:n[8]||(n[8]=e=>Vue.unref(p)("局部水印",{width:140,height:65,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 创建局部渐变水印 ")])),_:1}),Vue.createVNode(w,{plain:"",onClick:n[9]||(n[9]=e=>Vue.unref(p)("局部水印",{width:140,height:65,rotate:0,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 创建局部渐变且水平90度的水印 ")])),_:1}),Vue.createVNode(w,{plain:"",onClick:n[10]||(n[10]=e=>Vue.unref(p)("局部水印",{width:140,height:65,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}],shadowConfig:[20]}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 创建局部渐变且有阴影的水印 ")])),_:1}),Vue.createVNode(w,{plain:"",onClick:Vue.unref(s)},{default:Vue.withCtx((()=>[Vue.createTextVNode("清除局部水印")])),_:1},8,["onClick"])])),_:1}),Vue.createElementVNode("div",{ref_key:"preventLocal",ref:a,class:"w-1/2 h-[200px] border border-indigo-500 mt-4"},null,512)])),_:1})}}}))));var s;export{p as default};
