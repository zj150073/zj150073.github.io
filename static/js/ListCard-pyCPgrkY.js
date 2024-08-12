var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{f as c,k as n,g as d,d as s,p,e as u,i as v,w as h,v as m,b as f,u as _,j as g,h as b,t as y,_ as w}from"./index-CgRj-jQH.js";import{d as V}from"./more-2-fill-iTOisMwj.js";const x={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-shop",viewBox:"0 0 16 16"},H=[d("path",{fill:"currentColor",d:"M8 1a2.5 2.5 0 0 0-2.5 2.5V5h-2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-2V3.5A2.5 2.5 0 0 0 8 1m1.5 5v2h1V6H12v8H4V6h1.5v2h1V6zm0-1h-3V3.5a1.5 1.5 0 1 1 3 0z"},null,-1)];const z={render:function(e,t){return c(),n("svg",x,[...H])}},j={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-laptop",viewBox:"0 0 16 16"},M=[d("path",{fill:"currentColor",d:"M2.5 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zm0-1h11V4h-11zM15 13H1v1h14z"},null,-1)];const O={render:function(e,t){return c(),n("svg",j,[...M])}},k={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-service",viewBox:"0 0 16 16"},C=[d("path",{fill:"currentColor",d:"M2.52 6.37a5.5 5.5 0 0 1 10.98.13v4c0 .05 0 .1-.02.15A4.5 4.5 0 0 1 9 14.7H8v-1h1a3.5 3.5 0 0 0 3.4-2.7h-1.9a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5h1.93a4.5 4.5 0 0 0-8.86 0H5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-4c0-.04 0-.09.02-.13M12.5 7H11v3h1.5zm-9 0v3H5V7z"},null,-1)];const S={render:function(e,t){return c(),n("svg",k,[...C])}},B={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-calendar",viewBox:"0 0 16 16"},P=[d("path",{fill:"currentColor",d:"M10 3H6V1.5H5V3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2V1.5h-1zM5 5h1V4h4v1h1V4h2v2H3V4h2zM3 7h10v6H3z"},null,-1)];const I={render:function(e,t){return c(),n("svg",B,[...P])}},A={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-user-avatar",viewBox:"0 0 16 16"},D=[d("path",{fill:"currentColor",d:"M8 10.5c1.24 0 2.42.31 3.5.88v1.12h1v-1.14a.94.94 0 0 0-.49-.84 8.48 8.48 0 0 0-8.02 0 .94.94 0 0 0-.49.84v1.14h1v-1.12A7.5 7.5 0 0 1 8 10.5M10.5 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"},null,-1),d("path",{fill:"currentColor",d:"M2.5 1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1zm11 1v11h-11v-11z"},null,-1)];const E={render:function(e,t){return c(),n("svg",A,[...D])}},L={class:"list-card-item_detail bg-bg_color"},R={class:"list-card-item_detail--operation"},q={class:"list-card-item_detail--name text-text_color_primary"},F={class:"list-card-item_detail--desc text-text_color_regular"},G=s((J=((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))i.call(t,r)&&l(e,r,t[r]);return e})({},{name:"ReCard"}),t(J,r({__name:"ListCard",props:{product:{type:Object}},emits:["manage-product","delete-item"],setup(e,{emit:t}){const r=e,a=t,o=p((()=>["list-card-item",{"list-card-item__disabled":!r.product.isSetup}])),i=p((()=>["list-card-item_detail--logo",{"list-card-item_detail--logo__disabled":!r.product.isSetup}]));return(t,r)=>{const l=u("el-tag"),s=u("IconifyIconOffline"),p=u("el-dropdown-item"),w=u("el-dropdown-menu"),x=u("el-dropdown"),H=u("el-row");return c(),n("div",{class:m(o.value)},[d("div",L,[v(H,{justify:"space-between"},{default:h((()=>[d("div",{class:m(i.value)},[1===e.product.type?(c(),f(_(z),{key:0})):g("",!0),2===e.product.type?(c(),f(_(I),{key:1})):g("",!0),3===e.product.type?(c(),f(_(S),{key:2})):g("",!0),4===e.product.type?(c(),f(_(E),{key:3})):g("",!0),5===e.product.type?(c(),f(_(O),{key:4})):g("",!0)],2),d("div",R,[v(l,{color:e.product.isSetup?"#00a870":"#eee",effect:"dark",class:"mx-1 list-card-item_detail--operation--tag"},{default:h((()=>[b(y(e.product.isSetup?"已启用":"已停用"),1)])),_:1},8,["color"]),v(x,{trigger:"click",disabled:!e.product.isSetup},{dropdown:h((()=>[v(w,{disabled:!e.product.isSetup},{default:h((()=>[v(p,{onClick:r[0]||(r[0]=t=>{return r=e.product,void a("manage-product",r);var r})},{default:h((()=>[b(" 管理 ")])),_:1}),v(p,{onClick:r[1]||(r[1]=t=>{return r=e.product,void a("delete-item",r);var r})},{default:h((()=>[b(" 删除 ")])),_:1})])),_:1},8,["disabled"])])),default:h((()=>[v(s,{icon:_(V),class:"text-[24px]"},null,8,["icon"])])),_:1},8,["disabled"])])])),_:1}),d("p",q,y(e.product.name),1),d("p",F,y(e.product.description),1)])],2)}}}))));var J;const K=w(G,[["__scopeId","data-v-00983da7"]]);export{K as default};
