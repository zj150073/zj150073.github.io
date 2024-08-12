var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{d as u,ar as n,a as r,n as o,b,w as p,e as v,A as c,f,g as m,i as g,B as y,h as _,k as h,l as x,u as z,ap as k,t as w,F as j,C as O,D as P,_ as D}from"./index-07XH1eRd.js";import{u as V}from"./hooks-B7JeNRBq.js";const B=e=>(O("data-v-894a8c7e"),e=e(),P(),e),A={class:"card-header"},C=B((()=>m("p",{class:"mb-2"},"基础按钮",-1))),I=B((()=>m("br",null,null,-1))),L=B((()=>m("p",{class:"mb-4"},"加载状态按钮",-1))),M=B((()=>m("div",{class:"custom-loading"},[m("svg",{class:"circular",viewBox:"-10, -10, 50, 50"},[m("path",{class:"path",d:"\n            M 30 15\n            L 28 17\n            M 25.61 25.61\n            A 15 15, 0, 0, 1, 15 30\n            A 15 15, 0, 1, 1, 27.99 7.5\n            L 15 15\n          ",style:{fill:"rgb(0 0 0 / 0%)","stroke-width":"4px"}})])],-1))),N=B((()=>m("p",{class:"mb-4"},"自定义元素标签。例如：按钮、div、链接",-1))),S=B((()=>m("p",{class:"mb-4"},"自定义颜色",-1))),U=u((E=((e,a)=>{for(var l in a||(a={}))d.call(a,l)&&s(e,l,a[l]);if(t)for(var l of t(a))i.call(a,l)&&s(e,l,a[l]);return e})({},{name:"PureButton"}),a(E,l({__name:"el-button",setup(e){const{isDark:a}=n(),l=r("default"),t=r(),d=r("default"),i=[{type:"",text:"Default",icon:"ep:search"},{type:"primary",text:"Primary",icon:"ep:edit"},{type:"success",text:"Success",icon:"ep:check"},{type:"info",text:"Info",icon:"ep:message"},{type:"warning",text:"Warning",icon:"ep:star"},{type:"danger",text:"Danger",icon:"ep:delete"}];return o(l,(e=>t.value="disabled"===e?"default":l.value)),(e,s)=>{const u=v("el-link"),n=v("el-radio"),r=v("el-radio-group"),o=v("el-space"),O=v("el-button",!0),P=v("el-divider"),D=v("el-card"),B=c("tippy");return f(),b(D,{shadow:"never"},{header:p((()=>[m("div",A,[g(o,{wrap:"",size:40},{default:p((()=>[y((f(),b(u,{href:"https://element-plus.org/zh-CN/component/button.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:p((()=>[_(" Button 按钮 ")])),_:1})),[[B,{content:"点击查看详细文档"}]]),g(r,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=e=>l.value=e)},{default:p((()=>[g(n,{value:"large"},{default:p((()=>[_("大尺寸")])),_:1}),g(n,{value:"default"},{default:p((()=>[_("默认尺寸")])),_:1}),g(n,{value:"small"},{default:p((()=>[_("小尺寸")])),_:1}),g(n,{value:"disabled"},{default:p((()=>[_("禁用")])),_:1})])),_:1},8,["modelValue"])])),_:1})]),g(u,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/el-button.vue",target:"_blank"},{default:p((()=>[_(" 代码位置 src/views/components/el-button.vue ")])),_:1})])),default:p((()=>[C,g(r,{modelValue:d.value,"onUpdate:modelValue":s[1]||(s[1]=e=>d.value=e),class:"mb-3"},{default:p((()=>[g(n,{label:"default",value:"default"}),g(n,{label:"plain",value:"plain"}),g(n,{label:"round",value:"round"}),g(n,{label:"circle",value:"circle"}),g(n,{label:"link",value:"link"}),g(n,{label:"text",value:"text"}),g(n,{label:"text-bg",value:"text-bg"})])),_:1},8,["modelValue"]),I,g(o,{wrap:""},{default:p((()=>[(f(),h(j,null,x(i,((e,a)=>g(O,{key:a,type:e.type,size:t.value,disabled:"disabled"===l.value,plain:"plain"===d.value,round:"round"===d.value,circle:"circle"===d.value,link:"link"===d.value,text:"text"===d.value||"text-bg"===d.value,bg:"text-bg"===d.value,icon:z(V)(e.icon)},k({_:2},["circle"!==d.value?{name:"default",fn:p((()=>[m("p",null,w(e.text),1)])),key:"0"}:void 0]),1032,["type","size","disabled","plain","round","circle","link","text","bg","icon"]))),64))])),_:1}),g(P),L,g(O,{text:"",bg:"",type:"primary",size:t.value,disabled:"disabled"===l.value,loading:"disabled"!==l.value},{default:p((()=>[_(w("disabled"===l.value?"停止加载":"加载中"),1)])),_:1},8,["size","disabled","loading"]),g(O,{type:"primary",plain:"",size:t.value,disabled:"disabled"===l.value,"loading-icon":z(V)("ep:eleme"),loading:"disabled"!==l.value},{default:p((()=>[_(w("disabled"===l.value?"停止加载":"加载中"),1)])),_:1},8,["size","disabled","loading-icon","loading"]),g(O,{type:"primary",size:t.value,disabled:"disabled"===l.value,loading:"disabled"!==l.value},{loading:p((()=>[M])),default:p((()=>[_(" "+w("disabled"===l.value?"停止加载":"加载中"),1)])),_:1},8,["size","disabled","loading"]),g(P),N,g(O,{size:t.value,disabled:"disabled"===l.value},{default:p((()=>[_(" button 标签 ")])),_:1},8,["size","disabled"]),g(O,{tag:"div",role:"button",tabindex:"0",size:t.value,disabled:"disabled"===l.value},{default:p((()=>[_(" div 标签 ")])),_:1},8,["size","disabled"]),g(O,{type:"primary",tag:"a",href:"disabled"===l.value?"javascript:void(0);":"https://element-plus.org/zh-CN/component/button.html#tag",target:"disabled"===l.value?"_self":"_blank",rel:"noopener noreferrer",size:t.value,disabled:"disabled"===l.value},{default:p((()=>[_(" a 链接 ")])),_:1},8,["href","target","size","disabled"]),g(P),S,g(o,{wrap:""},{default:p((()=>[g(O,{color:"#626aef",size:t.value,disabled:"disabled"===l.value,dark:z(a)},{default:p((()=>[_(" Default ")])),_:1},8,["size","disabled","dark"]),g(O,{color:"#626aef",size:t.value,disabled:"disabled"===l.value,dark:z(a),plain:""},{default:p((()=>[_(" Plain ")])),_:1},8,["size","disabled","dark"])])),_:1})])),_:1})}}}))));var E;const F=D(U,[["__scopeId","data-v-894a8c7e"]]);export{F as default};
