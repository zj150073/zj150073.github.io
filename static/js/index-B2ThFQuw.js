var e=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(r,a,t)=>a in r?e(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t;import{d as o,a as n,B as p,k as c,i as v,w as u,e as f,A as b,f as d,g as m,u as w,a2 as y,b as g,j,t as x,aK as O,Y as h}from"./index-CKXHolY4.js";import{R as P}from"./index-C0K3ZvFi.js";const k={"element-loading-background":"transparent"},R={class:"w-[18vw]"},_={class:"mt-1 text-center"},S={class:"flex flex-wrap justify-center items-center text-center"},C={key:1,class:"mt-1"},I=o((z=((e,r)=>{for(var a in r||(r={}))s.call(r,a)&&l(e,a,r[a]);if(t)for(var a of t(r))i.call(r,a)&&l(e,a,r[a]);return e})({},{name:"ReCropperPreview"}),r(z,a({__name:"index",props:{imgSrc:String},emits:["cropper"],setup(e,{expose:r,emit:a}){const t=a,s=n(),i=n(),l=n(),o=n(!1),h=n("");function I({base64:e,blob:r,info:a}){s.value=a,h.value=e,t("cropper",{base64:e,blob:r,info:a})}return r({hidePopover:function(){i.value.hide()}}),(r,a)=>{const t=f("el-image"),n=f("el-popover"),z=b("loading");return p((d(),c("div",k,[v(n,{ref_key:"popoverRef",ref:i,visible:o.value,placement:"right",width:"18vw"},{reference:u((()=>[m("div",R,[v(w(P),{ref_key:"refCropper",ref:l,src:e.imgSrc,circled:"",onCropper:I,onReadied:a[0]||(a[0]=e=>o.value=!0)},null,8,["src"]),p(m("p",_," 温馨提示：右键上方裁剪区可开启功能菜单 ",512),[[y,o.value]])])])),default:u((()=>[m("div",S,[h.value?(d(),g(t,{key:0,src:h.value,"preview-src-list":Array.of(h.value),fit:"cover"},null,8,["src","preview-src-list"])):j("",!0),s.value?(d(),c("div",C,[m("p",null," 图像大小："+x(parseInt(s.value.width))+" × "+x(parseInt(s.value.height))+"像素 ",1),m("p",null," 文件大小："+x(w(O)(s.value.size))+"（"+x(s.value.size)+" 字节） ",1)])):j("",!0)])])),_:1},8,["visible"])])),[[z,!o.value]])}}}))));var z;const A=h(I);export{A as R};
