var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;import{d as l,r as c,f as u,B as i,a1 as p,o as m,s as b,E as f,a as _}from"./@vue-CFXrvzpc.js";const d={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APPID:"project-number",VITE_CDN:"false",VITE_COMPRESSION:"gzip-clear",VITE_HIDE_HOME:"false",VITE_PORT:"8848",VITE_PUBLIC_PATH:"/",VITE_ROUTER_HISTORY:"hash"},E=_("div",{class:"card-header"},[_("span",{class:"font-medium"},"通过 iframe 引入按钮页面")],-1),O=["src"],v=l((I=((e,r)=>{for(var t in r||(r={}))s.call(r,t)&&n(e,t,r[t]);if(a)for(var t of a(r))o.call(r,t)&&n(e,t,r[t]);return e})({},{name:"ButtonPage"}),r(I,t({__name:"button",setup(e){const{VITE_PUBLIC_PATH:r}=d,t=c(`${r}html/button.html`);return(e,r)=>{const a=p("el-link"),s=p("el-card");return m(),u(s,{shadow:"never"},{header:i((()=>[E,b(a,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/button.vue",target:"_blank"},{default:i((()=>[f(" 代码位置 src/views/components/button.vue ")])),_:1})])),default:i((()=>[_("iframe",{src:t.value,frameborder:"0",class:"iframe w-full h-[60vh]"},null,8,O)])),_:1})}}}))));var I;export{v as default};
