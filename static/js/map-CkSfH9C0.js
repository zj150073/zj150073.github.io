var e=Object.defineProperty,n=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,r=(n,o,a)=>o in n?e(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a,p=(e,n)=>{for(var o in n||(n={}))i.call(n,o)&&r(e,o,n[o]);if(a)for(var o of a(n))t.call(n,o)&&r(e,o,n[o]);return e},s=(e,a)=>n(e,o(a));import{c as l,d as c,f as A,_ as d,M as u}from"./index-DK9WUj9J.js";import{m as f}from"./mock-BfijETem.js";var g={exports:{}};const M=c(g.exports=function(){function e(e){var a=[];return e.AMapUI&&a.push(n(e.AMapUI)),e.Loca&&a.push(o(e.Loca)),Promise.all(a)}function n(e){return new Promise((function(n,o){var i=[];if(e.plugins)for(var s=0;s<e.plugins.length;s+=1)-1==t.AMapUI.plugins.indexOf(e.plugins[s])&&i.push(e.plugins[s]);if(r.AMapUI===a.failed)o("前次请求 AMapUI 失败");else if(r.AMapUI===a.notload){r.AMapUI=a.loading,t.AMapUI.version=e.version||t.AMapUI.version,s=t.AMapUI.version;var l=document.body||document.head,c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/ui/"+s+"/main.js",c.onerror=function(e){r.AMapUI=a.failed,o("请求 AMapUI 失败")},c.onload=function(){if(r.AMapUI=a.loaded,i.length)window.AMapUI.loadUI(i,(function(){for(var e=0,o=i.length;e<o;e++){var a=i[e].split("/").slice(-1)[0];window.AMapUI[a]=arguments[e]}for(n();p.AMapUI.length;)p.AMapUI.splice(0,1)[0]()}));else for(n();p.AMapUI.length;)p.AMapUI.splice(0,1)[0]()},l.appendChild(c)}else r.AMapUI===a.loaded?e.version&&e.version!==t.AMapUI.version?o("不允许多个版本 AMapUI 混用"):i.length?window.AMapUI.loadUI(i,(function(){for(var e=0,o=i.length;e<o;e++){var a=i[e].split("/").slice(-1)[0];window.AMapUI[a]=arguments[e]}n()})):n():e.version&&e.version!==t.AMapUI.version?o("不允许多个版本 AMapUI 混用"):p.AMapUI.push((function(e){e?o(e):i.length?window.AMapUI.loadUI(i,(function(){for(var e=0,o=i.length;e<o;e++){var a=i[e].split("/").slice(-1)[0];window.AMapUI[a]=arguments[e]}n()})):n()}))}))}function o(e){return new Promise((function(n,o){if(r.Loca===a.failed)o("前次请求 Loca 失败");else if(r.Loca===a.notload){r.Loca=a.loading,t.Loca.version=e.version||t.Loca.version;var i=t.Loca.version,s=t.AMap.version.startsWith("2"),l=i.startsWith("2");if(s&&!l||!s&&l)o("JSAPI 与 Loca 版本不对应！！");else{s=t.key,l=document.body||document.head;var c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/loca?v="+i+"&key="+s,c.onerror=function(e){r.Loca=a.failed,o("请求 AMapUI 失败")},c.onload=function(){for(r.Loca=a.loaded,n();p.Loca.length;)p.Loca.splice(0,1)[0]()},l.appendChild(c)}}else r.Loca===a.loaded?e.version&&e.version!==t.Loca.version?o("不允许多个版本 Loca 混用"):n():e.version&&e.version!==t.Loca.version?o("不允许多个版本 Loca 混用"):p.Loca.push((function(e){e?o(e):o()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var a,i;(i=a||(a={})).notload="notload",i.loading="loading",i.loaded="loaded",i.failed="failed";var t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},r={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},p={AMap:[],AMapUI:[],Loca:[]},s=[],l=function(e){"function"==typeof e&&(r.AMap===a.loaded?e(window.AMap):s.push(e))};return{load:function(n){return new Promise((function(o,i){if(r.AMap==a.failed)i("");else if(r.AMap==a.notload){var p=n.key,c=n.version,A=n.plugins;p?(window.AMap&&"lbs.amap.com"!==location.host&&i("禁止多种API加载方式混用"),t.key=p,t.AMap.version=c||t.AMap.version,t.AMap.plugins=A||t.AMap.plugins,r.AMap=a.loading,c=document.body||document.head,window.___onAPILoaded=function(t){if(delete window.___onAPILoaded,t)r.AMap=a.failed,i(t);else for(r.AMap=a.loaded,e(n).then((function(){o(window.AMap)})).catch(i);s.length;)s.splice(0,1)[0]()},(A=document.createElement("script")).type="text/javascript",A.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+t.AMap.version+"&key="+p+"&plugin="+t.AMap.plugins.join(","),A.onerror=function(e){r.AMap=a.failed,i(e)},c.appendChild(A)):i("请填写key")}else if(r.AMap==a.loaded)if(n.key&&n.key!==t.key)i("多个不一致的 key");else if(n.version&&n.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{if(p=[],n.plugins)for(c=0;c<n.plugins.length;c+=1)-1==t.AMap.plugins.indexOf(n.plugins[c])&&p.push(n.plugins[c]);p.length?window.AMap.plugin(p,(function(){e(n).then((function(){o(window.AMap)})).catch(i)})):e(n).then((function(){o(window.AMap)})).catch(i)}else if(n.key&&n.key!==t.key)i("多个不一致的 key");else if(n.version&&n.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{var d=[];if(n.plugins)for(c=0;c<n.plugins.length;c+=1)-1==t.AMap.plugins.indexOf(n.plugins[c])&&d.push(n.plugins[c]);l((function(){d.length?window.AMap.plugin(d,(function(){e(n).then((function(){o(window.AMap)})).catch(i)})):e(n).then((function(){o(window.AMap)})).catch(i)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},r={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},p={AMap:[],AMapUI:[],Loca:[]}}}}()),v={id:"mapview",ref:"mapview"},w=u(d(Vue.defineComponent(s(p({},{name:"Amap"}),{__name:"Amap",setup(e){let n,o;const a=Vue.getCurrentInstance(),i=Vue.reactive({loading:!A()});return Vue.onBeforeMount((()=>{if(!a)return;const{MapConfigure:e}=a.appContext.config.globalProperties.$config,{options:t}=e;M.load({key:e.amapKey,version:"2.0",plugins:["AMap.MarkerCluster"]}).then((e=>{o=new e.Map(a.refs.mapview,t),o.plugin(["AMap.ToolBar","AMap.MapType"],(()=>{o.addControl(new e.ToolBar),o.addControl(new e.MapType({defaultType:0}))})),n=new e.MarkerCluster(o,[],{gridSize:80,maxZoom:14,renderMarker(n){const{marker:a,data:i}=n;if(Array.isArray(i)&&i[0]){const{driver:n,plateNumber:t,orientation:r}=i[0],p=`<img style="transform: scale(1) rotate(${360-Number(r)}deg);" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAUCAMAAADSpG8HAAAC91BMVEUAAAAAJQskNR8JNS8AAAAHwgAu2CIAZQIDGgccFA8aTDwVvRAtwyUNqQgcZhgsXSUQQQ0BJQcHMwIpJw4BAQCM63sRRDct5xwHswAMOzAv4SAIxAAr3xofuhZWzUwYRTMqnDEvtyRDvjgKMSwBjQCWkJRdxFNnm2A0cy8KLSgknR0hQTEydjNDYzFhjFpocEsXig9wimhcTi45hy0kTy1Vg0hQLx0EPABCSkAYSxwATQc0UjIFCwOU/4mt/6YP7wXI/8Gh/5eK/4CG/3tJfla5/7K3/7Ck/5tL/0Yq/h0ANxDi/9DG/77D/7vA/7jG/7Cz/6yb/5Gd/4WY/4GF/oFrl3Zy9WtTh2Fj319F2kklakMgbjgOSDAx/yoALBgc8RECIQ7N/8bL/7Sx/6m6/6Oq/6Gm/6Cb/5aX/410oYRuln+U/3tklXNZjGtY019Ou15y/1RV/0YlZUUs1j1E/jk8/ysiYisWZiMFUh8CsR0i6hkj/xUd2RMa+hAAPgwK+gDa/8nT/8bW/7/a/73O/7m9/7W//6qLrZyt/5qk/5GY/JB/rI2k/4eK8YeO/3aI/3N6/21w/2Jf/2Jt72Jj5GJNemJLhmBEgVtOxlhR1lZAgVE2aFEzdE0ye0w/5Uk+nkdGzUY1TUVG4EQ+u0ElXzsicTkhZjgsijYsrDI37i0kgiwhSCwAoxsTnBsY0hALgBAAEQgN4gcHowUS/wT/////8PeWt8HI47WlxK/K/6aUuqGm/52f7Zyx/5qt/5XCupS9/5C+pI+U9456m4uI9oSS/4CE/4B+9nqa/3hkjHBVgWxUxWGA/2BNtl5WvFtS4Vll/1hGpFhY2ldd/FRa71Ne+lI6eFJAXlFq/05Ks01U2ExS9EcxTUAldz481zssRDszyDcfWTc9+jAXyzAx2S4PYSwIUiscOSkitygVMSgLwyYCvCEfpiEDyCAAvR4i3xwe1xwQaxoj9xgQShcKaBYKQBYMWBQU7BAMbA8X8A0J1wsFdgsAAABw6AJ/AAAAPXRSTlMAZ1XZBPPiqUM7/v7d04B2aFdSSRb68uzp5+fn5N/e3drT0MzKxsW+vr27tLOysLCrqqmno6CQj4aEd3Ig/fi2ogAAAkNJREFUKM9ioACwmIMIFCEBYz1DU34ODkFLHUYIEORWUpPjkeU1EICp0T1xYGfnpOLKNWveva2sfP3qcfG8eZGXI0J6LhR6+qtCzBPef2by5IiI4yEhR3p7D3U5uqfYrir/5rUh4VZH2MqwLRpgRUbbN62etWR+c1ODNxA0NDa22JbHxdXVbfBysusKu10rBFKkWPD1evjDm82+vr4+Pg4ODokOHeeyor28vP68CT6WHlLKDlLEFrv6pMuyvCY3N9dWPz+gukT/xZk7plXUJfwo9PCYNJEXrKjqTqhLdESLXXJAAEidb2LSglntu7ozD5fVxsbbV0uDFMnULAx1WTrFPy011S4ZqMzVISlyblZOZnd7WY1nvH09K0gRQOLrwIraHN3d01LtgOr8/Bfdzc3NzclCUiS17j7Qukspgenpju670+zsXNsWRU+dPi38VHkVXBHb++c5LssW7LXNCHR0dAwMdHdLufd09pxr02d/9Pz0036zBEgRT2xCePiSxZ1OtrYZGba2Ts62+x48K4qKmhOzvsR+Y221CkiR1o2El1O5lh91dnZ2cnJydp4wsW9FTBFQVRx36aMS+83gcALMbNumz8tXrcgODgrqCQoKDs7O7ltbURETE/e7tOrJrz1hHCBFnAcLPAqvzJyRl3c6/+LZ/PwZM89HFr9Yu/7Lh+8bqydstYCkAv2k/gKPyPnyzJJcc8WYmZmVNbVNFDxWxpZc7RdVZ4KlFSZrPj5+YWAqs2ESgQqxW3EKMTFxArnEAgDLUd+tnLfEzAAAAABJRU5ErkJggg==' />`;a.setContent(p),a.setLabel({direction:"bottom",offset:new e.Pixel(-4,0),content:`<div> ${t}(${n})</div>`}),a.setOffset(new e.Pixel(-18,-10)),a.on("click",(({lnglat:e})=>{o.setZoom(13),o.setCenter(e)}))}}}),f().then((({data:e})=>{const o=e.map((e=>p({lnglat:[e.lng,e.lat]},e)));n&&n.setData(o)})).catch((e=>{})),o&&o.on("complete",(()=>{i.loading=!1}))})).catch((()=>{throw i.loading=!1,"地图加载失败，请重新加载"}))})),Vue.onUnmounted((()=>{o&&o.destroy()&&o.clearEvents("click")})),(e,n)=>{const o=Vue.resolveDirective("loading");return Vue.withDirectives((Vue.openBlock(),Vue.createElementBlock("div",v,null,512)),[[o,i.loading]])}}})),[["__scopeId","data-v-2ac3e490"]])),h=d(Vue.defineComponent(s(p({},{name:"MapPage"}),{__name:"map",setup:e=>(e,n)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(w)))})),[["__scopeId","data-v-3dc552d8"]]);export{h as default};
