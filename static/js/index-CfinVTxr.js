var e=Object.defineProperty,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(l,t,a)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,n=(e,n)=>{for(var o in n||(n={}))t.call(n,o)&&r(e,o,n[o]);if(l)for(var o of l(n))a.call(n,o)&&r(e,o,n[o]);return e};import{S as o}from"./sortablejs-DhhifNSC.js";import{t as i}from"./index-CQT2hjpo.js";import{u}from"./epTheme-D_wi1fCV.js";import{C as s,a as d,z as c,g as p,_ as v,M as f}from"./@pureadmin-f9nW_l6N.js";import{E as m,R as b,C as x,D as h,S as y}from"./collapse-CfOj5F7d.js";import{d as g,r as w,M as k,b as j,s as C,m as E,F as O,i as P,P as R,a1 as S,E as B,D as $,Q as z,n as A}from"./@vue-CFXrvzpc.js";const D=f(g({name:"PureTableBar",props:{title:{type:String,default:"列表"},tableRef:{type:Object},columns:{type:Array,default:()=>[]},isExpandAll:{type:Boolean,default:!0},tableKey:{type:[String,Number],default:"0"}},emits:["refresh"],setup(e,{emit:l,slots:t,attrs:a}){const r=w("default"),f=w(!1),g=w(!0),D=w(!1),I=k(),K=w(e.isExpandAll),M=s(null==e?void 0:e.columns).filter((e=>d(null==e?void 0:e.hide)?!e.hide:!(c(null==e?void 0:e.hide)&&(null==e?void 0:e.hide()))));let T=p(s(null==e?void 0:e.columns),"label");const V=w(p(s(M),"label")),_=w(s(null==e?void 0:e.columns)),G=j((()=>e=>({background:e===r.value?u().epThemeColor:"",color:e===r.value?"#fff":"var(--el-text-color-primary)"}))),N=j((()=>["text-black","dark:text-white","duration-100","hover:!text-primary","cursor-pointer","outline-none"])),F=j((()=>["flex","justify-between","pt-[3px]","px-[11px]","border-b-[1px]","border-solid","border-[#dcdfe6]","dark:border-[#303030]"]));function Q(){K.value=!K.value,U(e.tableRef.data,K.value)}function U(l,t){l.forEach((l=>{e.tableRef.toggleRowExpansion(l,t),void 0!==l.children&&null!==l.children&&U(l.children,t)}))}function q(){return l=this,t=null,a=function*(){g.value=!0,D.value=!1,_.value=s(null==e?void 0:e.columns),T=[],T=yield p(s(null==e?void 0:e.columns),"label"),V.value=p(s(M),"label")},new Promise(((e,r)=>{var n=e=>{try{i(a.next(e))}catch(l){r(l)}},o=e=>{try{i(a.throw(e))}catch(l){r(l)}},i=l=>l.done?e(l.value):Promise.resolve(l.value).then(n,o);i((a=a.apply(l,t)).next())}));var l,t,a}const H={dropdown:()=>C(S("el-dropdown-menu"),{class:"translation"},{default:()=>[C(S("el-dropdown-item"),{style:G.value("large"),onClick:()=>r.value="large"},{default:()=>[B("宽松")]}),C(S("el-dropdown-item"),{style:G.value("default"),onClick:()=>r.value="default"},{default:()=>[B("默认")]}),C(S("el-dropdown-item"),{style:G.value("small"),onClick:()=>r.value="small"},{default:()=>[B("紧凑")]})]})},J=e=>({content:e,offset:[0,18],duration:[300,0],followCursor:!0,hideOnClick:"toggle"}),L={reference:()=>P(C(y,{class:["w-[16px]",N.value]},null),[[R("tippy"),J("列设置")]])};return()=>{var u;let s;return C(O,null,[C("div",E(a,{class:"w-[99/100] mt-2 px-2 pb-2 bg-bg_color"}),[C("div",{class:"flex justify-between w-full h-[60px] p-4"},[(null==t?void 0:t.title)?t.title():C("p",{class:"font-bold truncate"},[e.title]),C("div",{class:"flex items-center justify-around"},[(null==t?void 0:t.buttons)?C("div",{class:"flex mr-4"},[t.buttons()]):null,(null==(u=e.tableRef)?void 0:u.size)?C(O,null,[P(C(m,{class:["w-[16px]",N.value],style:{transform:K.value?"none":"rotate(-90deg)"},onClick:()=>Q()},null),[[R("tippy"),J(K.value?"折叠":"展开")]]),C(S("el-divider"),{direction:"vertical"},null)]):null,P(C(b,{class:["w-[16px]",N.value,f.value?"animate-spin":""],onClick:()=>(f.value=!0,l("refresh"),void v(500).then((()=>f.value=!1)))},null),[[R("tippy"),J("刷新")]]),C(S("el-divider"),{direction:"vertical"},null),P(C(S("el-dropdown"),{trigger:"click"},n({default:()=>[C(x,{class:["w-[16px]",N.value]},null)]},H)),[[R("tippy"),J("密度")]]),C(S("el-divider"),{direction:"vertical"},null),C(S("el-popover"),{placement:"bottom-start","popper-style":{padding:0},width:"200",trigger:"click"},n({default:()=>[C("div",{class:[F.value]},[C(S("el-checkbox"),{class:"!-mr-1",label:"列展示",modelValue:g.value,"onUpdate:modelValue":e=>g.value=e,indeterminate:D.value,onChange:e=>{return l=e,V.value=l?T:[],D.value=!1,void _.value.map((e=>e.hide=!l));var l}},null),C(S("el-button"),{type:"primary",link:!0,onClick:()=>q()},{default:()=>[B("重置")]})]),C("div",{class:"pt-[6px] pl-[11px]"},[C(S("el-scrollbar"),{"max-height":"36vh"},{default:()=>[C(S("el-checkbox-group"),{ref:`GroupRef${$(e.tableKey)}`,modelValue:V.value,onChange:e=>function(e){V.value=e;const l=e.length;g.value=l===T.length,D.value=l>0&&l<T.length}(e)},{default:()=>{return[C(S("el-space"),{direction:"vertical",alignment:"flex-start",size:0},(l=s=T.map(((l,t)=>{return C("div",{class:"flex items-center"},[C(h,{class:["drag-btn w-[16px] mr-2",(a=l,_.value.filter((e=>i(e.label)===i(a)))[0].fixed?"!cursor-no-drop":"!cursor-grab")],onMouseenter:l=>(l=>{l.preventDefault(),A((()=>{var l;const t=(null==(l=null==I?void 0:I.proxy)?void 0:l.$refs[`GroupRef${$(e.tableKey)}`]).$el.firstElementChild;o.create(t,{animation:300,handle:".drag-btn",onEnd:({newIndex:e,oldIndex:l,item:t})=>{const a=t,r=a.parentNode,n=_.value[l],o=_.value[e];if((null==n?void 0:n.fixed)||(null==o?void 0:o.fixed)){const t=r.children[l];return void(e>l?r.insertBefore(a,t):r.insertBefore(a,t?t.nextElementSibling:t))}const i=_.value.splice(l,1)[0];_.value.splice(e,0,i)}})}))})(l)},null),C(S("el-checkbox"),{key:t,label:l,value:l,onChange:e=>function(e,l){_.value.filter((e=>i(e.label)===i(l)))[0].hide=!e}(e,l)},{default:()=>[C("span",{title:i(l),class:"inline-block w-[120px] truncate hover:text-text_color_primary"},[i(l)])]})]);var a})),"function"==typeof l||"[object Object]"===Object.prototype.toString.call(l)&&!z(l)?s:{default:()=>[s]}))];var l}})]})])]},L))])]),t.default({size:r.value,dynamicColumns:_.value})])])}}}));export{D as P};
