var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,p=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&a(e,r,t[r]);if(s)for(var r of s(t))i.call(t,r)&&a(e,r,t[r]);return e},n=(e,s)=>t(e,r(s));import{n as m,M as A}from"./@pureadmin-f9nW_l6N.js";import{A as l}from"./@amap-Bx2D3lnM.js";import{m as j}from"./mock-DoK9H7vT.js";import{d as c,M as d,S as g,_ as u,e as y,i as f,c as v,P as x,o as w,f as k,D as C}from"./@vue-CFXrvzpc.js";import{_ as b}from"./index-CQT2hjpo.js";import"./vue-DWYrQbHy.js";import"./element-plus-DsFyl0Kk.js";import"./lodash-es-BgzC0s9P.js";import"./@element-plus-Bqpau_gV.js";import"./@popperjs-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-BWHVJBZs.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-kghe82LF.js";import"./vite-plugin-fake-server-CytHVkXj.js";import"./@faker-js-CRy60TLX.js";import"./version-rocket-chvOQqaV.js";import"./@iconify-icons-CxRB8ffa.js";import"./@vueuse-tP1Y4vdd.js";import"./defu-iUM7Auia.js";import"./framesync-CUhBu5sQ.js";import"./style-value-types-UCYNu-x1.js";import"./popmotion-DRTv1-mp.js";import"./hey-listen-DkH12NBk.js";import"./plus-pro-components-CYEVFP0q.js";import"./sortablejs-DhhifNSC.js";import"./axios-B1L2Kzed.js";import"./vue-i18n-DB-7wkrF.js";import"./@intlify-DfwD9yJy.js";import"./js-cookie-BXEMiIsG.js";import"./pinia-DzAV29mk.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-CGx-uoKe.js";import"./axs-request-CnYniYE7.js";import"./nprogress-L6f6pfEY.js";import"./echarts-D2b6xzX-.js";import"./zrender-CUz1GrA9.js";import"./tslib-ZseNXxlj.js";import"./vxe-table-CPtn8uUL.js";import"./xe-utils-CdBoVBzI.js";import"./dom-zindex-Ckn4mXSH.js";import"./responsive-storage-5vfjqqcs.js";import"./@iconify-BUzAfhQo.js";/* empty css                 */import"./vue-tippy-DPYCMIfw.js";const h={id:"mapview",ref:"mapview"},U=A(b(c(n(p({},{name:"Amap"}),{__name:"Amap",setup(e){let t,r;const s=d(),o=g({loading:!m()});return u((()=>{if(!s)return;const{MapConfigure:e}=s.appContext.config.globalProperties.$config,{options:i}=e;l.load({key:e.amapKey,version:"2.0",plugins:["AMap.MarkerCluster"]}).then((e=>{r=new e.Map(s.refs.mapview,i),r.plugin(["AMap.ToolBar","AMap.MapType"],(()=>{r.addControl(new e.ToolBar),r.addControl(new e.MapType({defaultType:0}))})),t=new e.MarkerCluster(r,[],{gridSize:80,maxZoom:14,renderMarker(t){const{marker:s,data:o}=t;if(Array.isArray(o)&&o[0]){const{driver:t,plateNumber:i,orientation:a}=o[0],p=`<img style="transform: scale(1) rotate(${360-Number(a)}deg);" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAUCAMAAADSpG8HAAAC91BMVEUAAAAAJQskNR8JNS8AAAAHwgAu2CIAZQIDGgccFA8aTDwVvRAtwyUNqQgcZhgsXSUQQQ0BJQcHMwIpJw4BAQCM63sRRDct5xwHswAMOzAv4SAIxAAr3xofuhZWzUwYRTMqnDEvtyRDvjgKMSwBjQCWkJRdxFNnm2A0cy8KLSgknR0hQTEydjNDYzFhjFpocEsXig9wimhcTi45hy0kTy1Vg0hQLx0EPABCSkAYSxwATQc0UjIFCwOU/4mt/6YP7wXI/8Gh/5eK/4CG/3tJfla5/7K3/7Ck/5tL/0Yq/h0ANxDi/9DG/77D/7vA/7jG/7Cz/6yb/5Gd/4WY/4GF/oFrl3Zy9WtTh2Fj319F2kklakMgbjgOSDAx/yoALBgc8RECIQ7N/8bL/7Sx/6m6/6Oq/6Gm/6Cb/5aX/410oYRuln+U/3tklXNZjGtY019Ou15y/1RV/0YlZUUs1j1E/jk8/ysiYisWZiMFUh8CsR0i6hkj/xUd2RMa+hAAPgwK+gDa/8nT/8bW/7/a/73O/7m9/7W//6qLrZyt/5qk/5GY/JB/rI2k/4eK8YeO/3aI/3N6/21w/2Jf/2Jt72Jj5GJNemJLhmBEgVtOxlhR1lZAgVE2aFEzdE0ye0w/5Uk+nkdGzUY1TUVG4EQ+u0ElXzsicTkhZjgsijYsrDI37i0kgiwhSCwAoxsTnBsY0hALgBAAEQgN4gcHowUS/wT/////8PeWt8HI47WlxK/K/6aUuqGm/52f7Zyx/5qt/5XCupS9/5C+pI+U9456m4uI9oSS/4CE/4B+9nqa/3hkjHBVgWxUxWGA/2BNtl5WvFtS4Vll/1hGpFhY2ldd/FRa71Ne+lI6eFJAXlFq/05Ks01U2ExS9EcxTUAldz481zssRDszyDcfWTc9+jAXyzAx2S4PYSwIUiscOSkitygVMSgLwyYCvCEfpiEDyCAAvR4i3xwe1xwQaxoj9xgQShcKaBYKQBYMWBQU7BAMbA8X8A0J1wsFdgsAAABw6AJ/AAAAPXRSTlMAZ1XZBPPiqUM7/v7d04B2aFdSSRb68uzp5+fn5N/e3drT0MzKxsW+vr27tLOysLCrqqmno6CQj4aEd3Ig/fi2ogAAAkNJREFUKM9ioACwmIMIFCEBYz1DU34ODkFLHUYIEORWUpPjkeU1EICp0T1xYGfnpOLKNWveva2sfP3qcfG8eZGXI0J6LhR6+qtCzBPef2by5IiI4yEhR3p7D3U5uqfYrir/5rUh4VZH2MqwLRpgRUbbN62etWR+c1ODNxA0NDa22JbHxdXVbfBysusKu10rBFKkWPD1evjDm82+vr4+Pg4ODokOHeeyor28vP68CT6WHlLKDlLEFrv6pMuyvCY3N9dWPz+gukT/xZk7plXUJfwo9PCYNJEXrKjqTqhLdESLXXJAAEidb2LSglntu7ozD5fVxsbbV0uDFMnULAx1WTrFPy011S4ZqMzVISlyblZOZnd7WY1nvH09K0gRQOLrwIraHN3d01LtgOr8/Bfdzc3NzclCUiS17j7Qukspgenpju670+zsXNsWRU+dPi38VHkVXBHb++c5LssW7LXNCHR0dAwMdHdLufd09pxr02d/9Pz0036zBEgRT2xCePiSxZ1OtrYZGba2Ts62+x48K4qKmhOzvsR+Y221CkiR1o2El1O5lh91dnZ2cnJydp4wsW9FTBFQVRx36aMS+83gcALMbNumz8tXrcgODgrqCQoKDs7O7ltbURETE/e7tOrJrz1hHCBFnAcLPAqvzJyRl3c6/+LZ/PwZM89HFr9Yu/7Lh+8bqydstYCkAv2k/gKPyPnyzJJcc8WYmZmVNbVNFDxWxpZc7RdVZ4KlFSZrPj5+YWAqs2ESgQqxW3EKMTFxArnEAgDLUd+tnLfEzAAAAABJRU5ErkJggg==' />`;s.setContent(p),s.setLabel({direction:"bottom",offset:new e.Pixel(-4,0),content:`<div> ${i}(${t})</div>`}),s.setOffset(new e.Pixel(-18,-10)),s.on("click",(({lnglat:e})=>{r.setZoom(13),r.setCenter(e)}))}}}),j().then((({data:e})=>{const r=e.map((e=>p({lnglat:[e.lng,e.lat]},e)));t&&t.setData(r)})).catch((e=>{})),r&&r.on("complete",(()=>{o.loading=!1}))})).catch((()=>{throw o.loading=!1,"地图加载失败，请重新加载"}))})),y((()=>{r&&r.destroy()&&r.clearEvents("click")})),(e,t)=>{const r=x("loading");return f((w(),v("div",h,null,512)),[[r,o.loading]])}}})),[["__scopeId","data-v-2ac3e490"]])),E=b(c(n(p({},{name:"MapPage"}),{__name:"map",setup:e=>(e,t)=>(w(),k(C(U)))})),[["__scopeId","data-v-3dc552d8"]]);export{E as default};
