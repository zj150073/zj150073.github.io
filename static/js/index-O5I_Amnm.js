var e=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(r,a,s)=>a in r?e(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s;import{d as o,r as n,i as p,c,s as v,B as u,a1 as f,P as m,o as d,a as b,D as y,v as w,f as g,l as j,p as O}from"./@vue-CFXrvzpc.js";import{R as h}from"./index-Ud2csQmi.js";import{J as x,M as P}from"./@pureadmin-f9nW_l6N.js";const k={"element-loading-background":"transparent"},R={class:"w-[18vw]"},_={class:"mt-1 text-center"},S={class:"flex flex-wrap justify-center items-center text-center"},C={key:1,class:"mt-1"},I=o((z=((e,r)=>{for(var a in r||(r={}))t.call(r,a)&&l(e,a,r[a]);if(s)for(var a of s(r))i.call(r,a)&&l(e,a,r[a]);return e})({},{name:"ReCropperPreview"}),r(z,a({__name:"index",props:{imgSrc:String},emits:["cropper"],setup(e,{expose:r,emit:a}){const s=a,t=n(),i=n(),l=n(),o=n(!1),P=n("");function I({base64:e,blob:r,info:a}){t.value=a,P.value=e,s("cropper",{base64:e,blob:r,info:a})}return r({hidePopover:function(){i.value.hide()}}),(r,a)=>{const s=f("el-image"),n=f("el-popover"),z=m("loading");return p((d(),c("div",k,[v(n,{ref_key:"popoverRef",ref:i,visible:o.value,placement:"right",width:"18vw"},{reference:u((()=>[b("div",R,[v(y(h),{ref_key:"refCropper",ref:l,src:e.imgSrc,circled:"",onCropper:I,onReadied:a[0]||(a[0]=e=>o.value=!0)},null,8,["src"]),p(b("p",_," 温馨提示：右键上方裁剪区可开启功能菜单 ",512),[[w,o.value]])])])),default:u((()=>[b("div",S,[P.value?(d(),g(s,{key:0,src:P.value,"preview-src-list":Array.of(P.value),fit:"cover"},null,8,["src","preview-src-list"])):j("",!0),t.value?(d(),c("div",C,[b("p",null," 图像大小："+O(parseInt(t.value.width))+" × "+O(parseInt(t.value.height))+"像素 ",1),b("p",null," 文件大小："+O(y(x)(t.value.size))+"（"+O(t.value.size)+" 字节） ",1)])):j("",!0)])])),_:1},8,["visible"])])),[[z,!o.value]])}}}))));var z;const D=P(I);export{D as R};
