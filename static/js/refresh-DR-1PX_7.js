var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,r=(e,r)=>{for(var o in r||(r={}))a.call(r,o)&&n(e,o,r[o]);if(l)for(var o of l(r))t.call(r,o)&&n(e,o,r[o]);return e};import{S as o}from"./sortable.esm-DhhifNSC.js";import{d as i,a as u,Z as s,ag as d,fv as c,ad as v,am as p,p as f,i as m,a5 as b,F as h,B as x,A as y,e as g,h as w,u as k,ac as C,aD as j,aN as O,y as E,Y as R}from"./index-07XH1eRd.js";import{u as P}from"./epTheme-1P13BBk9.js";import{E as S,R as A,C as z,D as B,S as V}from"./collapse-Djz2l4lx.js";const $=R(i({name:"PureTableBar",props:{title:{type:String,default:"列表"},tableRef:{type:Object},columns:{type:Array,default:()=>[]},isExpandAll:{type:Boolean,default:!0},tableKey:{type:[String,Number],default:"0"}},emits:["refresh"],setup(e,{emit:l,slots:a,attrs:t}){const n=u("default"),i=u(!1),R=u(!0),$=u(!1),D=s(),I=u(e.isExpandAll),K=d(null==e?void 0:e.columns).filter((e=>c(null==e?void 0:e.hide)?!e.hide:!(v(null==e?void 0:e.hide)&&(null==e?void 0:e.hide()))));let M=p(d(null==e?void 0:e.columns),"label");const N=u(p(d(K),"label")),T=u(d(null==e?void 0:e.columns)),_=f((()=>e=>({background:e===n.value?P().epThemeColor:"",color:e===n.value?"#fff":"var(--el-text-color-primary)"}))),G=f((()=>["text-black","dark:text-white","duration-100","hover:!text-primary","cursor-pointer","outline-none"])),H=f((()=>["flex","justify-between","pt-[3px]","px-[11px]","border-b-[1px]","border-solid","border-[#dcdfe6]","dark:border-[#303030]"]));function Y(){I.value=!I.value,F(e.tableRef.data,I.value)}function F(l,a){l.forEach((l=>{e.tableRef.toggleRowExpansion(l,a),void 0!==l.children&&null!==l.children&&F(l.children,a)}))}function U(){return l=this,a=null,t=function*(){R.value=!0,$.value=!1,T.value=d(null==e?void 0:e.columns),M=[],M=yield p(d(null==e?void 0:e.columns),"label"),N.value=p(d(K),"label")},new Promise(((e,n)=>{var r=e=>{try{i(t.next(e))}catch(l){n(l)}},o=e=>{try{i(t.throw(e))}catch(l){n(l)}},i=l=>l.done?e(l.value):Promise.resolve(l.value).then(r,o);i((t=t.apply(l,a)).next())}));var l,a,t}const Z={dropdown:()=>m(g("el-dropdown-menu"),{class:"translation"},{default:()=>[m(g("el-dropdown-item"),{style:_.value("large"),onClick:()=>n.value="large"},{default:()=>[w("宽松")]}),m(g("el-dropdown-item"),{style:_.value("default"),onClick:()=>n.value="default"},{default:()=>[w("默认")]}),m(g("el-dropdown-item"),{style:_.value("small"),onClick:()=>n.value="small"},{default:()=>[w("紧凑")]})]})},q=e=>({content:e,offset:[0,18],duration:[300,0],followCursor:!0,hideOnClick:"toggle"}),J={reference:()=>x(m(V,{class:["w-[16px]",G.value]},null),[[y("tippy"),q("列设置")]])};return()=>{var u;let s;return m(h,null,[m("div",b(t,{class:"w-[99/100] mt-2 px-2 pb-2 bg-bg_color"}),[m("div",{class:"flex justify-between w-full h-[60px] p-4"},[(null==a?void 0:a.title)?a.title():m("p",{class:"font-bold truncate"},[e.title]),m("div",{class:"flex items-center justify-around"},[(null==a?void 0:a.buttons)?m("div",{class:"flex mr-4"},[a.buttons()]):null,(null==(u=e.tableRef)?void 0:u.size)?m(h,null,[x(m(S,{class:["w-[16px]",G.value],style:{transform:I.value?"none":"rotate(-90deg)"},onClick:()=>Y()},null),[[y("tippy"),q(I.value?"折叠":"展开")]]),m(g("el-divider"),{direction:"vertical"},null)]):null,x(m(A,{class:["w-[16px]",G.value,i.value?"animate-spin":""],onClick:()=>(i.value=!0,l("refresh"),void O(500).then((()=>i.value=!1)))},null),[[y("tippy"),q("刷新")]]),m(g("el-divider"),{direction:"vertical"},null),x(m(g("el-dropdown"),{trigger:"click"},r({default:()=>[m(z,{class:["w-[16px]",G.value]},null)]},Z)),[[y("tippy"),q("密度")]]),m(g("el-divider"),{direction:"vertical"},null),m(g("el-popover"),{placement:"bottom-start","popper-style":{padding:0},width:"200",trigger:"click"},r({default:()=>[m("div",{class:[H.value]},[m(g("el-checkbox"),{class:"!-mr-1",label:"列展示",modelValue:R.value,"onUpdate:modelValue":e=>R.value=e,indeterminate:$.value,onChange:e=>{return l=e,N.value=l?M:[],$.value=!1,void T.value.map((e=>e.hide=!l));var l}},null),m(g("el-button"),{type:"primary",link:!0,onClick:()=>U()},{default:()=>[w("重置")]})]),m("div",{class:"pt-[6px] pl-[11px]"},[m(g("el-scrollbar"),{"max-height":"36vh"},{default:()=>[m(g("el-checkbox-group"),{ref:`GroupRef${k(e.tableKey)}`,modelValue:N.value,onChange:e=>function(e){N.value=e;const l=e.length;R.value=l===M.length,$.value=l>0&&l<M.length}(e)},{default:()=>{return[m(g("el-space"),{direction:"vertical",alignment:"flex-start",size:0},(l=s=M.map(((l,a)=>{return m("div",{class:"flex items-center"},[m(B,{class:["drag-btn w-[16px] mr-2",(t=l,T.value.filter((e=>C(e.label)===C(t)))[0].fixed?"!cursor-no-drop":"!cursor-grab")],onMouseenter:l=>(l=>{l.preventDefault(),E((()=>{var l;const a=(null==(l=null==D?void 0:D.proxy)?void 0:l.$refs[`GroupRef${k(e.tableKey)}`]).$el.firstElementChild;o.create(a,{animation:300,handle:".drag-btn",onEnd:({newIndex:e,oldIndex:l,item:a})=>{const t=a,n=t.parentNode,r=T.value[l],o=T.value[e];if((null==r?void 0:r.fixed)||(null==o?void 0:o.fixed)){const a=n.children[l];return void(e>l?n.insertBefore(t,a):n.insertBefore(t,a?a.nextElementSibling:a))}const i=T.value.splice(l,1)[0];T.value.splice(e,0,i)}})}))})(l)},null),m(g("el-checkbox"),{key:a,label:l,value:l,onChange:e=>function(e,l){T.value.filter((e=>C(e.label)===C(l)))[0].hide=!e}(e,l)},{default:()=>[m("span",{title:C(l),class:"inline-block w-[120px] truncate hover:text-text_color_primary"},[C(l)])]})]);var t})),"function"==typeof l||"[object Object]"===Object.prototype.toString.call(l)&&!j(l)?s:{default:()=>[s]}))];var l}})]})])]},J))])]),a.default({size:n.value,dynamicColumns:T.value})])])}}})),D={width:1024,height:1024,body:'<path fill="currentColor" d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"/>'};export{$ as P,D as R};
