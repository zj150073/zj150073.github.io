import{d as e,a as t,p as n,r as u,n as o,z as i,b2 as l,B as r,i as a,T as s,b6 as c,aF as d,aD as v,y as m,a2 as f}from"./index-07XH1eRd.js";var p=function(e,t){var n,u=t.arg;if(u){var o=t.value,i=d(u)?u.value:null===(n=t.instance)||void 0===n?void 0:n.$refs[u];i&&"function"==typeof i.addReference&&(e.$contextmenuKey=u,i.addReference(e,o))}},h=function(e,t){var n,u=e.$contextmenuKey;if(u){var o=d(u)?u.value:null===(n=t.instance)||void 0===n?void 0:n.$refs[u];o&&"function"==typeof o.removeReference&&o.removeReference(e)}},g={mounted:p,updated:function(e,t){h(e,t),p(e,t)},beforeUnmount:h},x="v-contextmenu",b="v-contextmenu-icon",y="v-contextmenu-inner",C="v-contextmenu-divider",w="v-contextmenu-item",_="v-contextmenu-item--hover",j="v-contextmenu-item--disabled",k="v-contextmenu-group",M="v-contextmenu-group__title",R="v-contextmenu-group__menus",O="v-contextmenu-submenu",$="v-contextmenu-submenu__title",A="v-contextmenu-submenu__menus",B="v-contextmenu-submenu__menus--top",E="v-contextmenu-submenu__menus--right",S="v-contextmenu-submenu__menus--bottom",V="v-contextmenu-submenu__menus--left",P="v-contextmenu-submenu__arrow";var W=["contextmenu"],L=e({name:"VContextmenu",props:{modelValue:{type:Boolean,default:!1},autoAdjustPlacement:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},teleport:{type:[String,Object],default:function(){return"body"}},preventContextmenu:{type:Boolean,default:!0}},emits:["show","hide","update:modelValue","contextmenu"],setup:function(e,r){var a=r.emit,s=t(null),c=t(e.modelValue||!1),d=function(e){c.value=e,a("update:modelValue",e)},v=t({top:0,left:0}),f=n((function(){return{top:"".concat(v.value.top,"px"),left:"".concat(v.value.left,"px")}})),p=t(null),h=function(t,n){var u,o,i=t instanceof Event?n:t,l=(null==i?void 0:i.autoAdjustPlacement)||e.autoAdjustPlacement,r={top:(null==i?void 0:i.top)||0,left:(null==i?void 0:i.left)||0};t instanceof Event&&(t.preventDefault(),r.top=null!==(u=null==i?void 0:i.top)&&void 0!==u?u:t.pageY,r.left=null!==(o=null==i?void 0:i.left)&&void 0!==o?o:t.pageX);d(!0),m((function(){if(l){var e=s.value;if(!e)return;var t=e.clientWidth,n=e.clientHeight;if(n+r.top>=window.innerHeight+window.scrollY){var u=r.top-n;u>window.scrollY&&(r.top=u)}if(t+r.left>=window.innerWidth+window.scrollX){var o=r.left-t;o>window.scrollX&&(r.left=o)}}v.value=r,a("show")}))},g=function(){p.value=null,d(!1),a("hide")},x=u(new Map),b=t(),y=n((function(){return b.value&&x.get(b.value)})),C=function(e){e.target&&s.value&&b.value&&(s.value.contains(e.target)||y.value&&y.value.triggers.includes("click")&&b.value.contains(e.target)||d(!1))};return o(c,(function(e){e?document.addEventListener("click",C):document.removeEventListener("click",C)})),i((function(){document.removeEventListener("click",C)})),l("visible",c),l("autoAdjustPlacement",e.autoAdjustPlacement),l("show",h),l("hide",g),{visible:c,style:f,currentReferenceOptions:y,currentOptions:p,contextmenuRef:s,addReference:function(t,n){var u=null!=n&&n.trigger?Array.isArray(n.trigger)?n.trigger:[n.trigger]:W,o=function(n){e.disabled||(b.value=t,h(n,{}))};u.forEach((function(e){t.addEventListener(e,o)})),x.set(t,{triggers:u,handler:o})},removeReference:function(e){var t=x.get(e);t&&(t.triggers.forEach((function(n){e.removeEventListener(n,t.handler)})),x.delete(e))},toggle:d,show:h,hide:g}},methods:{renderContent:function(){var e,t,n=this;return r(a("div",{class:x,ref:"contextmenuRef",style:this.style,onContextmenu:function(e){n.$props.preventContextmenu&&e.preventDefault(),n.$emit("contextmenu",e)}},[a("ul",{class:y},[null===(e=(t=this.$slots).default)||void 0===e?void 0:e.call(t,{triggerOptions:"currentReferenceOptions",options:"currentOptions"})])]),[[f,"visible"]])}},render:function(){var e,t;return this.visible?this.teleport?a(s,{to:this.teleport},"function"==typeof(t=e=this.renderContent())||"[object Object]"===Object.prototype.toString.call(t)&&!v(t)?e:{default:function(){return[e]}}):this.renderContent():null}});function D(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var u=n.call(e,t||"default");if("object"!=typeof u)return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function H(e,t,n){return(t=D(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=e({name:"VContextmenuItem",props:{disabled:{type:Boolean,default:!1},hideOnClick:{type:Boolean,default:!0},contextmenuAsClick:{type:Boolean,default:!0}},emits:["click","contextmenu","mouseenter","mouseleave"],setup:function(e,u){var o=u.emit,i=c("hide"),l=t(!1);return{classes:n((function(){return H(H(H({},w,!0),j,e.disabled),_,l.value)})),handleClick:function(t){o("click",t),e.disabled||e.hideOnClick&&(null==i||i())},handleContextmenu:function(t){if(o("contextmenu",t),e.contextmenuAsClick){if(e.disabled)return;e.hideOnClick&&(null==i||i())}},handleMouseenter:function(t){o("mouseenter",t),e.disabled||(l.value=!0)},handleMouseleave:function(t){o("mouseleave",t),e.disabled||(l.value=!1)}}},render:function(){var e,t;return a("li",{class:this.classes,onClick:this.handleClick,onContextmenu:this.handleContextmenu,onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave},[null===(e=(t=this.$slots).default)||void 0===e?void 0:e.call(t)])}}),X=e({name:"VContextmenuDivider",render:function(){return a("li",{class:C},null)}}),Y=e({name:"VContextmenuIcon",props:{name:{type:String,required:!0}},render:function(){return a("i",{class:[b,"".concat(b,"-").concat(this.name)]},null)}}),q=e({name:"VContextmenuSubmenu",props:{title:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["mouseenter","mouseleave"],setup:function(e,u){var o=u.emit,i=t(null),l=c("autoAdjustPlacement"),r=t(["top","right"]),a=t(!1),s=n((function(){return H(H(H(H({},w,!0),$,!0),_,a.value),j,e.disabled)})),d=n((function(){return H(H(H(H(H(H({},x,!0),A,!0),B,r.value.includes("top")),E,r.value.includes("right")),S,r.value.includes("bottom")),V,r.value.includes("left"))}));return{hover:a,submenuRef:i,titleClasses:s,menusClasses:d,handleMouseenter:function(t){e.disabled||(a.value=!0,o("mouseenter",t),m((function(){var e=[];if(l){var n=t.target.getBoundingClientRect();if(!i.value)return;var u=i.value.clientWidth,o=i.value.clientHeight;n.right+u>=window.innerWidth?e.push("left"):e.push("right"),n.bottom+o>=window.innerHeight?e.push("bottom"):e.push("top")}r.value=e})))},handleMouseleave:function(t){e.disabled||(a.value=!1,o("mouseleave",t))}}},render:function(){var e,t,n,u;return a("li",{class:O,onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave},[a("div",{class:this.titleClasses},[(null===(e=(t=this.$slots).title)||void 0===e?void 0:e.call(t))||this.title,a("span",{class:P},[a(Y,{name:"right-arrow"},null)])]),this.hover?a("div",{ref:"submenuRef",class:this.menusClasses},[a("ul",{class:y},[null===(n=(u=this.$slots).default)||void 0===n?void 0:n.call(u)])]):null])}}),I=e({name:"VContextmenuGroup",props:{title:{type:String,default:void 0},maxWidth:{type:[Number,String],default:void 0}},setup:function(e){return{style:n((function(){if(e.maxWidth)return{"max-width":"number"==typeof e.maxWidth?"".concat(e.maxWidth,"px"):e.maxWidth,"overflow-x":"auto"}}))}},methods:{renderTitle:function(){var e,t,n=(null===(e=(t=this.$slots).title)||void 0===e?void 0:e.call(t))||this.title;return n?a("div",{class:M},[n]):null}},render:function(){var e,t;return a("li",{class:k},[this.renderTitle(),a("ul",{style:this.style,class:R},[null===(e=(t=this.$slots).default)||void 0===e?void 0:e.call(t)])])}});export{L as C,T as a,X as b,q as c,I as d,g as e};
