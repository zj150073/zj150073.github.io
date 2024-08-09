var F=Object.defineProperty;var L=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var S=(u,e,t)=>e in u?F(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t,A=(u,e)=>{for(var t in e||(e={}))G.call(e,t)&&S(u,t,e[t]);if(L)for(var t of L(e))q.call(e,t)&&S(u,t,e[t]);return u};import{fE as w,p as x,fH as O,fx as P,U as W,a as C,aw as M,fI as _,au as z,fq as H,fJ as Q,fK as J}from"./index-BdQqVUXy.js";import{u as K}from"./app-BXjGxDXC.js";import{u as k}from"./epTheme-Dnhv8HVo.js";function U(){const{$storage:u,$config:e}=w(),t=()=>{var r,p,i,d,h,c,v,y,g,T,l,o,f,m,s,b,$;O().multiTagsCache&&(!u.tags||u.tags.length===0)&&(u.tags=P),u.locale||(u.locale={locale:(r=e==null?void 0:e.Locale)!=null?r:"zh"},W().locale.value=(p=e==null?void 0:e.Locale)!=null?p:"zh"),u.layout||(u.layout={layout:(i=e==null?void 0:e.Layout)!=null?i:"vertical",theme:(d=e==null?void 0:e.Theme)!=null?d:"light",darkMode:(h=e==null?void 0:e.DarkMode)!=null?h:!1,sidebarStatus:(c=e==null?void 0:e.SidebarStatus)!=null?c:!0,epThemeColor:(v=e==null?void 0:e.EpThemeColor)!=null?v:"#409EFF",themeColor:(y=e==null?void 0:e.Theme)!=null?y:"light",overallStyle:(g=e==null?void 0:e.OverallStyle)!=null?g:"light"}),u.configure||(u.configure={grey:(T=e==null?void 0:e.Grey)!=null?T:!1,weak:(l=e==null?void 0:e.Weak)!=null?l:!1,hideTabs:(o=e==null?void 0:e.HideTabs)!=null?o:!1,hideFooter:(f=e.HideFooter)!=null?f:!0,showLogo:(m=e==null?void 0:e.ShowLogo)!=null?m:!0,showModel:(s=e==null?void 0:e.ShowModel)!=null?s:"smart",multiTagsCache:(b=e==null?void 0:e.MultiTagsCache)!=null?b:!1,stretch:($=e==null?void 0:e.Stretch)!=null?$:!1})},a=x(()=>u==null?void 0:u.layout.layout),n=x(()=>u.layout);return{layout:a,layoutTheme:n,initStorage:t}}const B={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"D:/company/study/vue-pure-admin/node_modules/.pnpm/@pureadmin+theme@3.2.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #000000d9 !default;
        $menuBg: #fff !default;
        $menuHover: #f6f6f6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: rgb(0 0 0 / 60%) !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: rgb(64 145 247 / 15%) !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: rgb(105 58 201 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: rgb(216 68 147 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: rgb(225 60 57 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: rgb(232 95 51 / 15%) !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: rgb(89 191 193 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: rgb(96 172 128 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `}]},V="/",X="assets",D=u=>{let e=u.replace("#","").match(/../g);for(let t=0;t<3;t++)e[t]=parseInt(e[t],16);return e},j=(u,e,t)=>{let a=[u.toString(16),e.toString(16),t.toString(16)];for(let n=0;n<3;n++)a[n].length==1&&(a[n]=`0${a[n]}`);return`#${a.join("")}`},Y=(u,e)=>{let t=D(u);for(let a=0;a<3;a++)t[a]=Math.floor(t[a]*(1-e));return j(t[0],t[1],t[2])},Z=(u,e)=>{let t=D(u);for(let a=0;a<3;a++)t[a]=Math.floor((255-t[a])*e+t[a]);return j(t[0],t[1],t[2])},E=u=>`(^${u}\\s+|\\s+${u}\\s+|\\s+${u}$|^${u}$)`,N=({scopeName:u,multipleScopeVars:e})=>{const t=Array.isArray(e)&&e.length?e:B.multipleScopeVars;let a=document.documentElement.className;new RegExp(E(u)).test(a)||(t.forEach(n=>{a=a.replace(new RegExp(E(n.scopeName),"g"),` ${u} `)}),document.documentElement.className=a.replace(/(^\s+|\s+$)/g,""))},I=({id:u,href:e})=>{const t=document.createElement("link");return t.rel="stylesheet",t.href=e,t.id=u,t},ee=u=>{const e=A({scopeName:"theme-default",customLinkHref:r=>r},u),t=e.themeLinkTagId||B.themeLinkTagId;let a=document.getElementById(t);const n=e.customLinkHref(`${V.replace(/\/$/,"")}${`/${X}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(a){a.id=`${t}_old`;const r=I({id:t,href:n});a.nextSibling?a.parentNode.insertBefore(r,a.nextSibling):a.parentNode.appendChild(r),r.onload=()=>{setTimeout(()=>{a.parentNode.removeChild(a),a=null},60),N(e)};return}a=I({id:t,href:n}),N(e),document[(e.themeLinkTagInjectTo||B.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(a)};function oe(){var g,T;const{layoutTheme:u,layout:e}=U(),t=C([{color:"#ffffff",themeColor:"light"},{color:"#1b2a47",themeColor:"default"},{color:"#722ed1",themeColor:"saucePurple"},{color:"#eb2f96",themeColor:"pink"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"}]),{$storage:a}=w(),n=C((g=a==null?void 0:a.layout)==null?void 0:g.darkMode),r=C((T=a==null?void 0:a.layout)==null?void 0:T.overallStyle),p=document.documentElement;function i(l,o,f){const m=f||document.body;let{className:s}=m;s=s.replace(o,"").trim(),m.className=l?`${s} ${o}`:s}function d(l=(f=>(f=M().Theme)!=null?f:"light")(),o=!0){var s,b;u.value.theme=l,ee({scopeName:`layout-theme-${l}`});const m=a.layout.themeColor;if(a.layout={layout:e.value,theme:l,darkMode:n.value,sidebarStatus:(s=a.layout)==null?void 0:s.sidebarStatus,epThemeColor:(b=a.layout)==null?void 0:b.epThemeColor,themeColor:o?l:m,overallStyle:r.value},l==="default"||l==="light")c(M().EpThemeColor);else{const $=t.value.find(R=>R.themeColor===l);c($.color)}}function h(l,o,f){document.documentElement.style.setProperty(`--el-color-primary-${l}-${o}`,n.value?Y(f,o/10):Z(f,o/10))}const c=l=>{k().setEpThemeColor(l),document.documentElement.style.setProperty("--el-color-primary",l);for(let o=1;o<=2;o++)h("dark",o,l);for(let o=1;o<=9;o++)h("light",o,l)};function v(l){r.value=l,k().epTheme==="light"&&n.value?d("default",!1):d(k().epTheme,!1),n.value?document.documentElement.classList.add("dark"):(a.layout.themeColor==="light"&&d("light",!1),document.documentElement.classList.remove("dark"))}function y(){_(),z().clear();const{Grey:l,Weak:o,MultiTagsCache:f,EpThemeColor:m,Layout:s}=M();K().setLayout(s),c(m),H().multiTagsCacheChange(f),i(l,"html-grey",document.querySelector("html")),i(o,"html-weakness",document.querySelector("html")),Q.push("/login"),H().handleTags("equal",[...P]),J()}return{body:p,dataTheme:n,overallStyle:r,layoutTheme:u,themeColors:t,onReset:y,toggleClass:i,dataThemeChange:v,setEpThemeColor:c,setLayoutThemeColor:d}}export{U as a,ee as t,oe as u};
