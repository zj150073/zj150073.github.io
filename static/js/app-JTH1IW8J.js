import{at as t,au as e,av as i,aw as a,$ as s,ax as o}from"./index-CgRj-jQH.js";const r=t({id:"pure-app",state:()=>{var t,o,r,d;return{sidebar:{opened:null!=(o=null==(t=e().getItem(`${i()}layout`))?void 0:t.sidebarStatus)?o:a().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:null!=(d=null==(r=e().getItem(`${i()}layout`))?void 0:r.layout)?d:a().Layout,device:s()?"mobile":"desktop",viewportSize:{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight},sortSwap:!1}},getters:{getSidebarStatus:t=>t.sidebar.opened,getDevice:t=>t.device,getViewportWidth:t=>t.viewportSize.width,getViewportHeight:t=>t.viewportSize.height},actions:{TOGGLE_SIDEBAR(t,a){const s=e().getItem(`${i()}layout`);t&&a?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,s.sidebarStatus=!0):!t&&a?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,s.sidebarStatus=!1):t||a||(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,s.sidebarStatus=this.sidebar.opened),e().setItem(`${i()}layout`,s)},toggleSideBar(t,e){return i=this,a=null,s=function*(){yield this.TOGGLE_SIDEBAR(t,e)},new Promise(((t,e)=>{var o=t=>{try{d(s.next(t))}catch(i){e(i)}},r=t=>{try{d(s.throw(t))}catch(i){e(i)}},d=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,r);d((s=s.apply(i,a)).next())}));var i,a,s},toggleDevice(t){this.device=t},setLayout(t){this.layout=t},setViewportSize(t){this.viewportSize=t},setSortSwap(t){this.sortSwap=t}}});function d(){return r(o)}export{d as u};
