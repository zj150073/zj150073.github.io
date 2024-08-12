var e=Object.defineProperty,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(l,t,a)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&n(e,o,r[o]);if(l)for(var o of l(r))a.call(r,o)&&n(e,o,r[o]);return e};import{S as o}from"./sortable.esm-DhhifNSC.js";import{d as i,a as u,Z as s,am as d,ag as c,p,i as v,a5 as f,F as m,B as x,A as b,e as y,h,u as g,ac as w,aD as k,aN as C,y as j,Y as T}from"./index-DTxOO0Gw.js";import{u as O}from"./epTheme-CGjnJ42E.js";import{E as R,R as E,C as S,D as V,S as B}from"./collapse-9_zmrDvD.js";const A=T(i({name:"VxeTableBar",props:{title:{type:String,default:"列表"},vxeTableRef:{type:Object},columns:{type:Array,default:()=>[]},tree:{type:Boolean,default:!1},isExpandAll:{type:Boolean,default:!0},tableKey:{type:[String,Number],default:"0"}},emits:["refresh"],setup(e,{emit:l,slots:t,attrs:a}){const n=u("small"),i=u(!1),T=u(!0),A=u(!1),P=s(),$=u(e.isExpandAll);let D=d(c(null==e?void 0:e.columns),"title");const I=u(d(c(null==e?void 0:e.columns),"title")),K=u(c(null==e?void 0:e.columns)),N=p((()=>e=>({background:e===n.value?O().epThemeColor:"",color:e===n.value?"#fff":"var(--el-text-color-primary)"}))),_=p((()=>["text-black","dark:text-white","duration-100","hover:!text-primary","cursor-pointer","outline-none"])),z=p((()=>["flex","justify-between","pt-[3px]","px-[11px]","border-b-[1px]","border-solid","border-[#dcdfe6]","dark:border-[#303030]"]));function G(){const l=c(K.value).filter((e=>I.value.includes(e.title)));e.vxeTableRef.reloadColumn(l)}function Y(){return l=this,t=null,a=function*(){T.value=!0,A.value=!1,K.value=c(null==e?void 0:e.columns),D=[],D=yield d(c(null==e?void 0:e.columns),"title"),I.value=d(c(null==e?void 0:e.columns),"title"),e.vxeTableRef.refreshColumn()},new Promise(((e,n)=>{var r=e=>{try{i(a.next(e))}catch(l){n(l)}},o=e=>{try{i(a.throw(e))}catch(l){n(l)}},i=l=>l.done?e(l.value):Promise.resolve(l.value).then(r,o);i((a=a.apply(l,t)).next())}));var l,t,a}function F(l){n.value=l,e.vxeTableRef.refreshColumn()}const M={dropdown:()=>v(y("el-dropdown-menu"),{class:"translation"},{default:()=>[v(y("el-dropdown-item"),{style:N.value("medium"),onClick:()=>F("medium")},{default:()=>[h("宽松")]}),v(y("el-dropdown-item"),{style:N.value("small"),onClick:()=>F("small")},{default:()=>[h("默认")]}),v(y("el-dropdown-item"),{style:N.value("mini"),onClick:()=>F("mini")},{default:()=>[h("紧凑")]})]})},U=e=>({content:e,offset:[0,18],duration:[300,0],followCursor:!0,hideOnClick:"toggle"}),Z={reference:()=>x(v(B,{class:["w-[16px]",_.value]},null),[[b("tippy"),U("列设置")]])};return()=>{let u;return v(m,null,[v("div",f(a,{class:"w-[99/100] mt-2 px-2 pb-2 bg-bg_color"}),[v("div",{class:"flex justify-between w-full h-[60px] p-4"},[(null==t?void 0:t.title)?t.title():v("p",{class:"font-bold truncate"},[e.title]),v("div",{class:"flex items-center justify-around"},[(null==t?void 0:t.buttons)?v("div",{class:"flex mr-4"},[t.buttons()]):null,e.tree?v(m,null,[x(v(R,{class:["w-[16px]",_.value],style:{transform:$.value?"none":"rotate(-90deg)"},onClick:()=>($.value=!$.value,$.value?e.vxeTableRef.setAllTreeExpand(!0):e.vxeTableRef.clearTreeExpand(),void e.vxeTableRef.refreshColumn())},null),[[b("tippy"),U($.value?"折叠":"展开")]]),v(y("el-divider"),{direction:"vertical"},null)]):null,x(v(E,{class:["w-[16px]",_.value,i.value?"animate-spin":""],onClick:()=>(i.value=!0,l("refresh"),void C(500).then((()=>i.value=!1)))},null),[[b("tippy"),U("刷新")]]),v(y("el-divider"),{direction:"vertical"},null),x(v(y("el-dropdown"),{trigger:"click"},r({default:()=>[v(S,{class:["w-[16px]",_.value]},null)]},M)),[[b("tippy"),U("密度")]]),v(y("el-divider"),{direction:"vertical"},null),v(y("el-popover"),{placement:"bottom-start","popper-style":{padding:0},width:"200",trigger:"click"},r({default:()=>[v("div",{class:[z.value]},[v(y("el-checkbox"),{class:"!-mr-1",label:"列展示",modelValue:T.value,"onUpdate:modelValue":e=>T.value=e,indeterminate:A.value,onChange:e=>{return l=e,I.value=l?D:[],A.value=!1,void G();var l}},null),v(y("el-button"),{type:"primary",link:!0,onClick:()=>Y()},{default:()=>[h("重置")]})]),v("div",{class:"pt-[6px] pl-[11px]"},[v(y("el-scrollbar"),{"max-height":"36vh"},{default:()=>[v(y("el-checkbox-group"),{ref:`VxeGroupRef${g(e.tableKey)}`,modelValue:I.value,onChange:e=>function(e){I.value=e;const l=e.length;T.value=l===D.length,A.value=l>0&&l<D.length}(e)},{default:()=>{return[v(y("el-space"),{direction:"vertical",alignment:"flex-start",size:0},(l=u=D.map(((l,t)=>{return v("div",{class:"flex items-center"},[v(V,{class:["drag-btn w-[16px] mr-2",(a=l,K.value.filter((e=>w(e.title)===w(a)))[0].fixed?"!cursor-no-drop":"!cursor-grab")],onMouseenter:l=>(l=>{l.preventDefault(),j((()=>{var l;const t=(null==(l=null==P?void 0:P.proxy)?void 0:l.$refs[`VxeGroupRef${g(e.tableKey)}`]).$el.firstElementChild;o.create(t,{animation:300,handle:".drag-btn",onEnd:({newIndex:e,oldIndex:l,item:t})=>{const a=t,n=a.parentNode,r=K.value[l],o=K.value[e];if((null==r?void 0:r.fixed)||(null==o?void 0:o.fixed)){const t=n.children[l];return void(e>l?n.insertBefore(a,t):n.insertBefore(a,t?t.nextElementSibling:t))}const i=K.value.splice(l,1)[0];K.value.splice(e,0,i),G()}})}))})(l)},null),v(y("el-checkbox"),{key:t,label:l,value:l,onChange:G},{default:()=>[v("span",{title:w(l),class:"inline-block w-[120px] truncate hover:text-text_color_primary"},[w(l)])]})]);var a})),"function"==typeof l||"[object Object]"===Object.prototype.toString.call(l)&&!k(l)?u:{default:()=>[u]}))];var l}})]})])]},Z))])]),t.default({size:n.value,dynamicColumns:K.value})])])}}}));export{A as V};
