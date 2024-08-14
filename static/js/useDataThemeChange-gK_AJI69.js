import{x as e,p as l,h as o,y as t,n as a,z as u,A as r}from"./index-CQT2hjpo.js";import{P as n,R as m,N as s,S as i,T as h}from"./@pureadmin-f9nW_l6N.js";import{b as d,r as c}from"./@vue-CFXrvzpc.js";import{u as v}from"./vue-i18n-DB-7wkrF.js";import{u as y}from"./app-hKVND-TQ.js";import{u as g}from"./epTheme-D_wi1fCV.js";function f(){const{$storage:o,$config:t}=n();return{layout:d((()=>null==o?void 0:o.layout.layout)),layoutTheme:d((()=>o.layout)),initStorage:()=>{var a,u,r,n,m,s,i,h,d,c,y,g,f,p,C,T,S;!e().multiTagsCache||o.tags&&0!==o.tags.length||(o.tags=l),o.locale||(o.locale={locale:null!=(a=null==t?void 0:t.Locale)?a:"zh"},v().locale.value=null!=(u=null==t?void 0:t.Locale)?u:"zh"),o.layout||(o.layout={layout:null!=(r=null==t?void 0:t.Layout)?r:"vertical",theme:null!=(n=null==t?void 0:t.Theme)?n:"light",darkMode:null!=(m=null==t?void 0:t.DarkMode)&&m,sidebarStatus:null==(s=null==t?void 0:t.SidebarStatus)||s,epThemeColor:null!=(i=null==t?void 0:t.EpThemeColor)?i:"#409EFF",themeColor:null!=(h=null==t?void 0:t.Theme)?h:"light",overallStyle:null!=(d=null==t?void 0:t.OverallStyle)?d:"light"}),o.configure||(o.configure={grey:null!=(c=null==t?void 0:t.Grey)&&c,weak:null!=(y=null==t?void 0:t.Weak)&&y,hideTabs:null!=(g=null==t?void 0:t.HideTabs)&&g,hideFooter:null==(f=t.HideFooter)||f,showLogo:null==(p=null==t?void 0:t.ShowLogo)||p,showModel:null!=(C=null==t?void 0:t.ShowModel)?C:"smart",multiTagsCache:null!=(T=null==t?void 0:t.MultiTagsCache)&&T,stretch:null!=(S=null==t?void 0:t.Stretch)&&S})}}}function p(){var e,d;const{layoutTheme:v,layout:p}=f(),C=c([{color:"#ffffff",themeColor:"light"},{color:"#1b2a47",themeColor:"default"},{color:"#722ed1",themeColor:"saucePurple"},{color:"#eb2f96",themeColor:"pink"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"}]),{$storage:T}=n(),S=c(null==(e=null==T?void 0:T.layout)?void 0:e.darkMode),k=c(null==(d=null==T?void 0:T.layout)?void 0:d.overallStyle),b=document.documentElement;function E(e,l,o){const t=o||document.body;let{className:a}=t;a=a.replace(l,"").trim(),t.className=e?`${a} ${l}`:a}function L(e=(e=>null!=(e=o().Theme)?e:"light")(),l=!0){var t,a;v.value.theme=e,m({scopeName:`layout-theme-${e}`});const u=T.layout.themeColor;if(T.layout={layout:p.value,theme:e,darkMode:S.value,sidebarStatus:null==(t=T.layout)?void 0:t.sidebarStatus,epThemeColor:null==(a=T.layout)?void 0:a.epThemeColor,themeColor:l?e:u,overallStyle:k.value},"default"===e||"light"===e)$(o().EpThemeColor);else{const l=C.value.find((l=>l.themeColor===e));$(l.color)}}function M(e,l,o){document.documentElement.style.setProperty(`--el-color-primary-${e}-${l}`,S.value?i(o,l/10):h(o,l/10))}const $=e=>{g().setEpThemeColor(e),document.documentElement.style.setProperty("--el-color-primary",e);for(let l=1;l<=2;l++)M("dark",l,e);for(let l=1;l<=9;l++)M("light",l,e)};return{body:b,dataTheme:S,overallStyle:k,layoutTheme:v,themeColors:C,onReset:function(){t(),s().clear();const{Grey:e,Weak:n,MultiTagsCache:m,EpThemeColor:i,Layout:h}=o();y().setLayout(h),$(i),a().multiTagsCacheChange(m),E(e,"html-grey",document.querySelector("html")),E(n,"html-weakness",document.querySelector("html")),u.push("/login"),a().handleTags("equal",[...l]),r()},toggleClass:E,dataThemeChange:function(e){k.value=e,"light"===g().epTheme&&S.value?L("default",!1):L(g().epTheme,!1),S.value?document.documentElement.classList.add("dark"):("light"===T.layout.themeColor&&L("light",!1),document.documentElement.classList.remove("dark"))},setEpThemeColor:$,setLayoutThemeColor:L}}export{f as a,p as u};
