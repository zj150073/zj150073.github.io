var e=Object.defineProperty,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(l,t,o)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o,u=(e,u)=>{for(var a in u||(u={}))t.call(u,a)&&r(e,a,u[a]);if(l)for(var a of l(u))o.call(u,a)&&r(e,a,u[a]);return e};import{S as a}from"./sortable.esm-DhhifNSC.js";import{r as n,C as i,t as c,Q as s,M as d}from"./index-DK9WUj9J.js";import{u as v}from"./epTheme-7UiBGgiM.js";import{E as V,R as p,C as m,D as f,S as x}from"./collapse-Bf6A8-db.js";const b={title:{type:String,default:"列表"},vxeTableRef:{type:Object},columns:{type:Array,default:()=>[]},tree:{type:Boolean,default:!1},isExpandAll:{type:Boolean,default:!0},tableKey:{type:[String,Number],default:"0"}},y=d(Vue.defineComponent({name:"VxeTableBar",props:b,emits:["refresh"],setup(e,{emit:l,slots:t,attrs:o}){const r=Vue.ref("small"),d=Vue.ref(!1),b=Vue.ref(!0),y=Vue.ref(!1),h=Vue.getCurrentInstance(),N=Vue.ref(e.isExpandAll);let C=n(i(null==e?void 0:e.columns),"title");const g=Vue.ref(n(i(null==e?void 0:e.columns),"title")),w=Vue.ref(i(null==e?void 0:e.columns)),k=Vue.computed((()=>e=>({background:e===r.value?v().epThemeColor:"",color:e===r.value?"#fff":"var(--el-text-color-primary)"}))),T=Vue.computed((()=>["text-black","dark:text-white","duration-100","hover:!text-primary","cursor-pointer","outline-none"])),j=Vue.computed((()=>["flex","justify-between","pt-[3px]","px-[11px]","border-b-[1px]","border-solid","border-[#dcdfe6]","dark:border-[#303030]"]));function D(){const l=i(w.value).filter((e=>g.value.includes(e.title)));e.vxeTableRef.reloadColumn(l)}function O(){return l=this,t=null,o=function*(){b.value=!0,y.value=!1,w.value=i(null==e?void 0:e.columns),C=[],C=yield n(i(null==e?void 0:e.columns),"title"),g.value=n(i(null==e?void 0:e.columns),"title"),e.vxeTableRef.refreshColumn()},new Promise(((e,r)=>{var u=e=>{try{n(o.next(e))}catch(l){r(l)}},a=e=>{try{n(o.throw(e))}catch(l){r(l)}},n=l=>l.done?e(l.value):Promise.resolve(l.value).then(u,a);n((o=o.apply(l,t)).next())}));var l,t,o}function R(l){r.value=l,e.vxeTableRef.refreshColumn()}const E={dropdown:()=>Vue.createVNode(Vue.resolveComponent("el-dropdown-menu"),{class:"translation"},{default:()=>[Vue.createVNode(Vue.resolveComponent("el-dropdown-item"),{style:k.value("medium"),onClick:()=>R("medium")},{default:()=>[Vue.createTextVNode("宽松")]}),Vue.createVNode(Vue.resolveComponent("el-dropdown-item"),{style:k.value("small"),onClick:()=>R("small")},{default:()=>[Vue.createTextVNode("默认")]}),Vue.createVNode(Vue.resolveComponent("el-dropdown-item"),{style:k.value("mini"),onClick:()=>R("mini")},{default:()=>[Vue.createTextVNode("紧凑")]})]})},S=e=>({content:e,offset:[0,18],duration:[300,0],followCursor:!0,hideOnClick:"toggle"}),P={reference:()=>Vue.withDirectives(Vue.createVNode(x,{class:["w-[16px]",T.value]},null),[[Vue.resolveDirective("tippy"),S("列设置")]])};return()=>{let n;return Vue.createVNode(Vue.Fragment,null,[Vue.createVNode("div",Vue.mergeProps(o,{class:"w-[99/100] mt-2 px-2 pb-2 bg-bg_color"}),[Vue.createVNode("div",{class:"flex justify-between w-full h-[60px] p-4"},[(null==t?void 0:t.title)?t.title():Vue.createVNode("p",{class:"font-bold truncate"},[e.title]),Vue.createVNode("div",{class:"flex items-center justify-around"},[(null==t?void 0:t.buttons)?Vue.createVNode("div",{class:"flex mr-4"},[t.buttons()]):null,e.tree?Vue.createVNode(Vue.Fragment,null,[Vue.withDirectives(Vue.createVNode(V,{class:["w-[16px]",T.value],style:{transform:N.value?"none":"rotate(-90deg)"},onClick:()=>(N.value=!N.value,N.value?e.vxeTableRef.setAllTreeExpand(!0):e.vxeTableRef.clearTreeExpand(),void e.vxeTableRef.refreshColumn())},null),[[Vue.resolveDirective("tippy"),S(N.value?"折叠":"展开")]]),Vue.createVNode(Vue.resolveComponent("el-divider"),{direction:"vertical"},null)]):null,Vue.withDirectives(Vue.createVNode(p,{class:["w-[16px]",T.value,d.value?"animate-spin":""],onClick:()=>(d.value=!0,l("refresh"),void s(500).then((()=>d.value=!1)))},null),[[Vue.resolveDirective("tippy"),S("刷新")]]),Vue.createVNode(Vue.resolveComponent("el-divider"),{direction:"vertical"},null),Vue.withDirectives(Vue.createVNode(Vue.resolveComponent("el-dropdown"),{trigger:"click"},u({default:()=>[Vue.createVNode(m,{class:["w-[16px]",T.value]},null)]},E)),[[Vue.resolveDirective("tippy"),S("密度")]]),Vue.createVNode(Vue.resolveComponent("el-divider"),{direction:"vertical"},null),Vue.createVNode(Vue.resolveComponent("el-popover"),{placement:"bottom-start","popper-style":{padding:0},width:"200",trigger:"click"},u({default:()=>[Vue.createVNode("div",{class:[j.value]},[Vue.createVNode(Vue.resolveComponent("el-checkbox"),{class:"!-mr-1",label:"列展示",modelValue:b.value,"onUpdate:modelValue":e=>b.value=e,indeterminate:y.value,onChange:e=>{return l=e,g.value=l?C:[],y.value=!1,void D();var l}},null),Vue.createVNode(Vue.resolveComponent("el-button"),{type:"primary",link:!0,onClick:()=>O()},{default:()=>[Vue.createTextVNode("重置")]})]),Vue.createVNode("div",{class:"pt-[6px] pl-[11px]"},[Vue.createVNode(Vue.resolveComponent("el-scrollbar"),{"max-height":"36vh"},{default:()=>[Vue.createVNode(Vue.resolveComponent("el-checkbox-group"),{ref:`VxeGroupRef${Vue.unref(e.tableKey)}`,modelValue:g.value,onChange:e=>function(e){g.value=e;const l=e.length;b.value=l===C.length,y.value=l>0&&l<C.length}(e)},{default:()=>{return[Vue.createVNode(Vue.resolveComponent("el-space"),{direction:"vertical",alignment:"flex-start",size:0},(l=n=C.map(((l,t)=>{return Vue.createVNode("div",{class:"flex items-center"},[Vue.createVNode(f,{class:["drag-btn w-[16px] mr-2",(o=l,w.value.filter((e=>c(e.title)===c(o)))[0].fixed?"!cursor-no-drop":"!cursor-grab")],onMouseenter:l=>(l=>{l.preventDefault(),Vue.nextTick((()=>{var l;const t=(null==(l=null==h?void 0:h.proxy)?void 0:l.$refs[`VxeGroupRef${Vue.unref(e.tableKey)}`]).$el.firstElementChild;a.create(t,{animation:300,handle:".drag-btn",onEnd:({newIndex:e,oldIndex:l,item:t})=>{const o=t,r=o.parentNode,u=w.value[l],a=w.value[e];if((null==u?void 0:u.fixed)||(null==a?void 0:a.fixed)){const t=r.children[l];return void(e>l?r.insertBefore(o,t):r.insertBefore(o,t?t.nextElementSibling:t))}const n=w.value.splice(l,1)[0];w.value.splice(e,0,n),D()}})}))})(l)},null),Vue.createVNode(Vue.resolveComponent("el-checkbox"),{key:t,label:l,value:l,onChange:D},{default:()=>[Vue.createVNode("span",{title:c(l),class:"inline-block w-[120px] truncate hover:text-text_color_primary"},[c(l)])]})]);var o})),"function"==typeof l||"[object Object]"===Object.prototype.toString.call(l)&&!Vue.isVNode(l)?n:{default:()=>[n]}))];var l}})]})])]},P))])]),t.default({size:r.value,dynamicColumns:w.value})])])}}}));export{y as V};
