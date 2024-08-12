var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,s=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&o(e,a,t[a]);if(i)for(var a of i(t))n.call(t,a)&&o(e,a,t[a]);return e},r=(e,i)=>t(e,a(i));import{d as u,a as c,bc as d,p as f,u as p,bd as m,be as v,k as y,s as h,v as w,S as b,j as g,g as O,y as k,bf as T,f as S,Y as A,r as x,b as _,w as j,e as C,i as F,h as M,l as $,t as P,F as q,C as D,D as E,_ as H}from"./index-CgRj-jQH.js";const R=Object.freeze(Object.defineProperty({__proto__:null,animationFrame:()=>{window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(e){return window.clearTimeout(e)},window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)}},arrayEqual:(e,t)=>{if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;++a)if(e[a]!==t[a])return!1;return!0},copyObj:function e(){Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)});let t,a,i,l,n,o,s=1,r=arguments[0]||{},u=!1,c=arguments.length;if("boolean"==typeof r&&(u=r,r=arguments[1]||{},s++),"object"!=typeof r&&"function"!=typeof r&&(r={}),s===c)return r;for(;s<c;s++)if(null!=(a=arguments[s]))for(t in a)i=r[t],l=a[t],n=Array.isArray(l),u&&l&&("object"==typeof l||n)?(n?(n=!1,o=i&&Array.isArray(i)?i:[]):o=i&&"object"==typeof i?i:{},r[t]=e(u,o,l)):void 0!==l&&(r[t]=l);return r}},Symbol.toStringTag,{value:"Module"})),L=["innerHTML"],W=A(u(r(s({},{name:"ReSeamlessScroll"}),{__name:"index",props:{data:{type:Array},classOption:{type:Object}},emits:["scrollEnd"],setup(e,{expose:t,emit:a}){const{animationFrame:i,copyObj:l}=R;i();const n=e,o=a,s=c(0),r=c(0),u=c(0),A=c(0),x=c(0),_=c(0),j=c(0),C=c("");let F=null,M=null,$=null,P=null,q=null,D=!1,E="ease-in";void 0===n.classOption.key&&(n.classOption.key=0);const H=d(`wrap${n.classOption.key}`,null),W=d(`slotList${n.classOption.key}`,null),Y=d(`realBox${n.classOption.key}`,null),z=f((()=>p(s)<0)),I=f((()=>Math.abs(p(s))<p(_)-p(x))),B=f((()=>({step:1,limitMoveNum:5,hoverStop:!0,direction:"top",openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1}))),N=f((()=>l({},p(B),n.classOption))),U=f((()=>p(z)?"":p(N).switchDisabledClass)),X=f((()=>p(I)?"":p(N).switchDisabledClass)),G=f((()=>({position:"absolute",margin:`${p(A)/2}px 0 0 -${p(N).switchOffset}px`,transform:"translate(-100%,-50%)"}))),J=f((()=>({position:"absolute",margin:`${p(A)/2}px 0 0 ${p(x)+p(N).switchOffset}px`,transform:"translateY(-50%)"}))),K=f((()=>"bottom"!==p(N).direction&&"top"!==p(N).direction)),Q=f((()=>p(K)?{float:"left",overflow:"hidden"}:{overflow:"hidden"})),V=f((()=>({transform:`translate(${p(s)}px,${p(r)}px)`,transition:`all ${E} ${p(u)}ms`,overflow:"hidden"}))),Z=f((()=>p(N).navigation)),ee=f((()=>!p(Z)&&p(N).autoPlay)),te=f((()=>n.data.length>=p(N).limitMoveNum)),ae=f((()=>p(N).hoverStop&&p(ee)&&p(te))),ie=f((()=>p(N).openTouch)),le=f((()=>p(N).isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1)),ne=f((()=>p(N).singleWidth*p(le))),oe=f((()=>p(N).singleHeight*p(le))),se=f((()=>{let e;const t=p(N).step;if(e=p(K)?p(ne):p(oe),e>0&&e%t>0)throw"如果设置了单步滚动，step需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确";return t}));function re(){p(z)&&(Math.abs(p(s))<p(N).switchSingleStep?s.value=0:s.value+=p(N).switchSingleStep)}function ue(){p(I)&&(p(_)-p(x)+p(s)<p(N).switchSingleStep?s.value=p(x)-p(_):s.value-=p(N).switchSingleStep)}function ce(){cancelAnimationFrame(M||"")}function de(e){if(!p(ie))return;let t;const a=e.targetTouches[0],{waitTime:i,singleHeight:l,singleWidth:n}=p(N);$={x:a.pageX,y:a.pageY},P=p(r),q=p(s),l&&n?(t&&clearTimeout(t),t=setTimeout((()=>{ce()}),i+20)):ce()}function fe(e){if(!p(ie)||e.targetTouches.length>1||e.scale&&1!==e.scale)return;const t=e.targetTouches[0],{direction:a}=p(N),i={x:t.pageX-$.x,y:t.pageY-$.y};e.preventDefault();const l=Math.abs(i.x)<Math.abs(i.y)?1:0;1===l&&"bottom"===a||1===l&&"top"===a?r.value=P+i.y:(0===l&&"left"===a||0===l&&"right"===a)&&(s.value=q+i.x)}function pe(){if(!p(ie))return;let e;const t=p(N).direction;if(u.value=50,"top"===t)p(r)>0&&(r.value=0);else if("bottom"===t){const e=p(j)/2*-1;p(r)<e&&(r.value=e)}else if("left"===t)p(s)>0&&(s.value=0);else if("right"===t){const e=-1*p(_);p(s)<e&&(s.value=e)}e&&clearTimeout(e),e=setTimeout((()=>{u.value=0,ye()}),p(u))}function me(){p(ae)&&function(){D=!0,F&&clearTimeout(F);ce()}()}function ve(){p(ae)&&(D=!1,ye())}function ye(){D||(M=requestAnimationFrame((function(){const e=p(j)/2,t=p(_)/2,{direction:a,waitTime:i}=p(N);"top"===a?(Math.abs(p(r))>=e&&(o("scrollEnd"),r.value=0),r.value-=se.value):"bottom"===a?(p(r)>=0&&(o("scrollEnd"),r.value=-1*e),r.value+=se.value):"left"===a?(Math.abs(p(s))>=t&&(o("scrollEnd"),s.value=0),s.value-=se.value):"right"===a&&(p(s)>=0&&(o("scrollEnd"),s.value=-1*t),s.value+=se.value),F&&clearTimeout(F),p(oe)?Math.abs(p(r))%p(oe)<p(se)?F=setTimeout((()=>{ye()}),i):ye():p(ne)&&Math.abs(p(s))%p(ne)<p(se)?F=setTimeout((()=>{ye()}),i):ye()})))}function he(){k((()=>{const{switchDelay:e}=p(N);if(C.value="",p(K)){A.value=p(H).offsetHeight,x.value=p(H).offsetWidth;let e=p(W).offsetWidth;p(ee)&&(e=2*e+1),p(Y).style.width=e+"px",_.value=e}if(!p(ee))return E="linear",void(u.value=e);E="ease-in",u.value=0,p(te)?(C.value=p(W).innerHTML,setTimeout((()=>{var e;j.value=null==(e=p(Y))?void 0:e.offsetHeight,ye()}),0)):(ce(),r.value=s.value=0)}))}function we(e){"left"!==p(N).direction&&"right"!==p(N).direction&&T((()=>{e.deltaY>0?r.value-=se.value:r.value+=se.value}),50)()}return m((()=>{he()})),v((()=>{ce(),clearTimeout(F)})),t({reset:function(){s.value=0,r.value=0,ce(),he()}}),(t,a)=>(S(),y("div",{ref:"wrap"+e.classOption.key},[Z.value?(S(),y("div",{key:0,style:h(G.value),class:w(U.value),onClick:re},[b(t.$slots,"left-switch")],6)):g("",!0),Z.value?(S(),y("div",{key:1,style:h(J.value),class:w(X.value),onClick:ue},[b(t.$slots,"right-switch")],6)):g("",!0),O("div",{ref:"realBox"+e.classOption.key,style:h(V.value),onMouseenter:me,onMouseleave:ve,onTouchstartPassive:de,onTouchmovePassive:fe,onTouchend:pe,onMousewheelPassive:we},[O("div",{ref:"slotList"+e.classOption.key,style:h(Q.value)},[b(t.$slots,"default")],4),O("div",{style:h(Q.value),innerHTML:C.value},null,12,L)],36)],512))}}))),Y={class:"card-header"},z=(e=>(D("data-v-ff2abade"),e=e(),E(),e))((()=>O("span",{class:"font-medium"},"无缝滚动",-1))),I={class:"item"},B=["textContent"],N=H(u(r(s({},{name:"SeamlessScroll"}),{__name:"seamless-scroll",setup(e){const t=c(),a=c([{title:"无缝滚动第一行无缝滚动第一行！！！！！！！！！！"},{title:"无缝滚动第二行无缝滚动第二行！！！！！！！！！！"},{title:"无缝滚动第三行无缝滚动第三行！！！！！！！！！！"},{title:"无缝滚动第四行无缝滚动第四行！！！！！！！！！！"},{title:"无缝滚动第五行无缝滚动第五行！！！！！！！！！！"},{title:"无缝滚动第六行无缝滚动第六行！！！！！！！！！！"},{title:"无缝滚动第七行无缝滚动第七行！！！！！！！！！！"},{title:"无缝滚动第八行无缝滚动第八行！！！！！！！！！！"},{title:"无缝滚动第九行无缝滚动第九行！！！！！！！！！！"}]),i=x({direction:"top"});function l(e){p(t).reset(),p(i).direction=e}return(e,n)=>{const o=C("el-button"),s=C("el-link"),r=C("el-card"),u=C("el-space");return S(),_(u,{wrap:""},{default:j((()=>[F(r,{class:"box-card",shadow:"never"},{header:j((()=>[O("div",Y,[z,F(o,{class:"button",link:"",type:"primary",onClick:n[0]||(n[0]=e=>l("top"))},{default:j((()=>[O("span",{style:h({color:"top"===i.direction?"red":""})}," 向上滚动 ",4)])),_:1}),F(o,{class:"button",link:"",type:"primary",onClick:n[1]||(n[1]=e=>l("bottom"))},{default:j((()=>[O("span",{style:h({color:"bottom"===i.direction?"red":""})}," 向下滚动 ",4)])),_:1}),F(o,{class:"button",link:"",type:"primary",onClick:n[2]||(n[2]=e=>l("left"))},{default:j((()=>[O("span",{style:h({color:"left"===i.direction?"red":""})}," 向左滚动 ",4)])),_:1}),F(o,{class:"button",link:"",type:"primary",onClick:n[3]||(n[3]=e=>l("right"))},{default:j((()=>[O("span",{style:h({color:"right"===i.direction?"red":""})}," 向右滚动 ",4)])),_:1})]),F(s,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/seamless-scroll.vue",target:"_blank"},{default:j((()=>[M(" 代码位置 src/views/components/seamless-scroll.vue ")])),_:1})])),default:j((()=>[F(p(W),{ref_key:"scroll",ref:t,data:a.value,"class-option":i,class:"warp"},{default:j((()=>[O("ul",I,[(S(!0),y(q,null,$(a.value,((e,t)=>(S(),y("li",{key:t},[O("span",{class:"title",textContent:P(e.title)},null,8,B)])))),128))])])),_:1},8,["data","class-option"])])),_:1})])),_:1})}}})),[["__scopeId","data-v-ff2abade"]]);export{N as default};
