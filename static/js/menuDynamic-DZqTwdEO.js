import{C as e,a as t,b as a,c as n,d as l,e as u}from"./index.esm-D80rNLuo.js";import{d as s,_ as d,e as o,A as i,f as m,k as c,B as r,i as f,w as x,h as p,F as _,l as k,b as v,t as h,C as b,D as C,g as y}from"./index-DTxOO0Gw.js";const g=s({name:"ExampleDynamic",components:{[e.name]:e,[t.name]:t,[a.name]:a,[n.name]:n,[l.name]:l},directives:{contextmenu:u},data:()=>({extra:[]}),methods:{addItem(e="item"){this.extra.push(e)},removeItem(){this.extra.pop()}}}),I=e=>(b("data-v-a005b502"),e=e(),C(),e),j=I((()=>y("p",{class:"mb-2"},"动态菜单",-1))),w={class:"wrapper"},D=[I((()=>y("code",null,"右键点击此区域",-1)))];const $=d(g,[["render",function(e,t,a,n,l,u){const s=o("v-contextmenu-item"),d=o("v-contextmenu-group"),b=o("v-contextmenu-divider"),C=o("v-contextmenu-submenu"),y=o("v-contextmenu"),g=i("contextmenu");return m(),c("div",null,[j,r((m(),c("div",w,D)),[[g,void 0,"contextmenu"]]),f(y,{ref:"contextmenu"},{default:x((()=>[f(d,{title:"操作"},{default:x((()=>[f(s,{"hide-on-click":!1,onClick:t[0]||(t[0]=t=>e.extra.push("item"))},{default:x((()=>[p(" 添加菜单 ")])),_:1}),f(s,{"hide-on-click":!1,onClick:t[1]||(t[1]=t=>e.extra.push("group"))},{default:x((()=>[p(" 添加菜单组 ")])),_:1}),f(s,{"hide-on-click":!1,onClick:t[2]||(t[2]=t=>e.extra.push("submenu"))},{default:x((()=>[p(" 添加子菜单 ")])),_:1}),f(s,{"hide-on-click":!1,onClick:t[3]||(t[3]=t=>e.extra.pop())},{default:x((()=>[p(" 删除 ")])),_:1})])),_:1}),(m(!0),c(_,null,k(e.extra,((e,t)=>(m(),c(_,{key:t},[f(b),"group"===e?(m(),v(d,{key:0,title:`菜单组 ${t+1}`},{default:x((()=>[f(s,null,{default:x((()=>[p("菜单1")])),_:1}),f(s,null,{default:x((()=>[p("菜单2")])),_:1}),f(s,null,{default:x((()=>[p("菜单3")])),_:1})])),_:2},1032,["title"])):"submenu"===e?(m(),v(C,{key:1,title:`子菜单 ${t+1}`},{default:x((()=>[f(s,null,{default:x((()=>[p("菜单1")])),_:1}),f(s,null,{default:x((()=>[p("菜单2")])),_:1}),f(s,null,{default:x((()=>[p("菜单3")])),_:1})])),_:2},1032,["title"])):(m(),v(s,{key:2},{default:x((()=>[p("菜单 "+h(t+1),1)])),_:2},1024))],64)))),128))])),_:1},512)])}],["__scopeId","data-v-a005b502"]]);export{$ as default};
