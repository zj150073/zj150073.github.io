var e=Object.defineProperty,t=Object.defineProperties,u=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,a=(t,u,o)=>u in t?e(t,u,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[u]=o;import{m as n,q as c}from"./index-DK9WUj9J.js";import{u as s}from"./hooks-D3PhPGWW.js";import{C as l}from"./check-bSE3wTVj.js";const i={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 1024 1024"},d=[Vue.createElementVNode("path",{fill:"#FF5D50",d:"M428.698 107.315c-6.503 72.192-36.352 207.258-160.256 337.408 3.686-48.025-7.117-83.763-19.047-107.673-6.605-13.159-26.06-10.599-28.877 3.84-5.734 29.44-20.582 75.059-57.6 137.779-71.628 121.395-62.566 459.878 340.736 459.878S934.093 585.728 876.8 442.522c-37.376-93.44-93.952-152.525-128.82-182.324-11.417-9.779-29.132-1.945-29.593 13.056-.921 30.464-7.321 73.37-33.075 102.144-.666-52.787-38.144-208.384-202.445-296.857-23.296-12.544-51.763 2.457-54.17 28.774z"},null,-1),Vue.createElementVNode("path",{fill:"#FFDF99",d:"M702.26 678.4c-4.2-45.056-60.673-166.554-212.634-246.426-10.599-5.58-23.092 3.124-21.504 15.002 6.246 46.848 12.953 140.493-24.064 184.73 4.044-40.397-18.125-73.83-36.66-94.31-8.396-9.217-23.552-4.66-25.497 7.68-3.533 22.322-12.851 56.268-36.557 97.945-42.086 74.035-86.989 188.672 124.57 294.656 10.956.563 22.17.87 33.74.87a618 618 0 0 0 32.717-.87C694.631 878.182 709.837 759.706 702.26 678.4"},null,-1)];const f={render:function(e,t){return Vue.openBlock(),Vue.createElementBlock("svg",i,[...d])}},C=Vue.createElementVNode("div",{class:"card-header"},[Vue.createElementVNode("span",{class:"font-medium"}," 消息提示 ")],-1),p=Vue.createElementVNode("h4",{class:"mb-4"},"Element Plus 的消息提示，点击弹出提示信息",-1),N=Vue.createElementVNode("h4",{class:"mb-4"}," 类似 Ant Design 风格的消息提示，点击弹出提示信息（基于 ElMessage 样式改版，不会影响 ElMessage 原本样式，使用和打包大小成本极低并适配整体暗色风格） ",-1),h=Vue.defineComponent((m=((e,t)=>{for(var u in t||(t={}))r.call(t,u)&&a(e,u,t[u]);if(o)for(var u of o(t))V.call(t,u)&&a(e,u,t[u]);return e})({},{name:"Message"}),t(m,u({__name:"message",setup:e=>(e,t)=>{const u=Vue.resolveComponent("el-link"),o=Vue.resolveComponent("el-button"),r=Vue.resolveComponent("el-space"),V=Vue.resolveComponent("el-divider"),a=Vue.resolveComponent("el-card");return Vue.openBlock(),Vue.createBlock(a,{shadow:"never"},{header:Vue.withCtx((()=>[C,Vue.createVNode(u,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/message.vue",target:"_blank"},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 代码位置 src/views/components/message.vue ")])),_:1})])),default:Vue.withCtx((()=>[p,Vue.createVNode(r,{wrap:""},{default:Vue.withCtx((()=>[Vue.createVNode(o,{type:"info",onClick:t[0]||(t[0]=e=>Vue.unref(n)("Info类型消息",{customClass:"el"}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" Info ")])),_:1}),Vue.createVNode(o,{type:"success",onClick:t[1]||(t[1]=e=>Vue.unref(n)("Success类型消息",{customClass:"el",type:"success"}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" Success ")])),_:1}),Vue.createVNode(o,{type:"warning",onClick:t[2]||(t[2]=e=>Vue.unref(n)("Warning类型消息",{customClass:"el",type:"warning"}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" Warning ")])),_:1}),Vue.createVNode(o,{type:"danger",onClick:t[3]||(t[3]=e=>Vue.unref(n)("Error类型消息",{customClass:"el",type:"error"}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" Error ")])),_:1}),Vue.createVNode(o,{onClick:t[4]||(t[4]=e=>Vue.unref(n)("可关闭消息",{customClass:"el",showClose:!0}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 可关闭 ")])),_:1}),Vue.createVNode(o,{onClick:t[5]||(t[5]=e=>Vue.unref(n)("分组消息合并",{customClass:"el",type:"success",grouping:!0}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 分组消息合并 ")])),_:1}),Vue.createVNode(o,{onClick:t[6]||(t[6]=e=>Vue.unref(n)("自定义消息图标",{customClass:"el",icon:Vue.unref(s)(Vue.unref(l))}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 自定义图标 ")])),_:1}),Vue.createVNode(o,{onClick:t[7]||(t[7]=e=>Vue.unref(n)("3秒后关闭",{customClass:"el",duration:3e3,onClose:()=>Vue.unref(n)("消息已关闭",{customClass:"el",type:"success"})}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 自定义延时关闭时间并设置关闭后其他操作 ")])),_:1}),Vue.createVNode(o,{onClick:t[8]||(t[8]=e=>Vue.unref(n)(Vue.h("p",null,[Vue.h("span",null,"Message can be "),Vue.h("i",{style:"color: teal"},"VNode")]),{customClass:"el"}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 自定义内容 ")])),_:1}),Vue.createVNode(o,{onClick:t[9]||(t[9]=e=>Vue.unref(n)("<strong>This is <i>HTML</i> string</strong>",{customClass:"el",dangerouslyUseHTMLString:!0}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" HTML 片段作为正文内容 ")])),_:1})])),_:1}),Vue.createVNode(V),N,Vue.createVNode(r,{wrap:""},{default:Vue.withCtx((()=>[Vue.createVNode(o,{type:"info",onClick:t[10]||(t[10]=e=>Vue.unref(n)("Info类型消息"))},{default:Vue.withCtx((()=>[Vue.createTextVNode("Info")])),_:1}),Vue.createVNode(o,{type:"success",onClick:t[11]||(t[11]=e=>Vue.unref(n)("Success类型消息",{type:"success"}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" Success ")])),_:1}),Vue.createVNode(o,{type:"warning",onClick:t[12]||(t[12]=e=>Vue.unref(n)("Warning类型消息",{type:"warning"}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" Warning ")])),_:1}),Vue.createVNode(o,{type:"danger",onClick:t[13]||(t[13]=e=>Vue.unref(n)("Error类型消息",{type:"error"}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" Error ")])),_:1}),Vue.createVNode(o,{onClick:t[14]||(t[14]=e=>Vue.unref(n)("可关闭消息",{showClose:!0}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 可关闭 ")])),_:1}),Vue.createVNode(o,{onClick:t[15]||(t[15]=e=>Vue.unref(n)("分组消息合并",{type:"success",grouping:!0}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 分组消息合并 ")])),_:1}),Vue.createVNode(o,{onClick:t[16]||(t[16]=e=>Vue.unref(n)("自定义消息图标",{icon:Vue.unref(f)}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 自定义图标 ")])),_:1}),Vue.createVNode(o,{onClick:t[17]||(t[17]=e=>Vue.unref(n)("3秒后关闭",{duration:3e3,onClose:()=>Vue.unref(n)("消息已关闭",{type:"success"})}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 自定义延时关闭时间并设置关闭后其他操作 ")])),_:1}),Vue.createVNode(o,{onClick:t[18]||(t[18]=e=>Vue.unref(n)(Vue.h("p",null,[Vue.h("span",null,"Message can be "),Vue.h("i",{style:"color: teal"},"VNode")])))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 自定义内容 ")])),_:1}),Vue.createVNode(o,{onClick:t[19]||(t[19]=e=>Vue.unref(n)("<strong>This is <i>HTML</i> string</strong>",{dangerouslyUseHTMLString:!0}))},{default:Vue.withCtx((()=>[Vue.createTextVNode(" HTML 片段作为正文内容 ")])),_:1})])),_:1}),Vue.createVNode(V),Vue.createVNode(o,{onClick:Vue.unref(c)},{default:Vue.withCtx((()=>[Vue.createTextVNode(" 关闭所有消息提示 ")])),_:1},8,["onClick"])])),_:1})}}))));var m;export{h as default};
