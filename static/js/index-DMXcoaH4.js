var e=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(r,a,t)=>a in r?e(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t;import{R as i}from"./index-OomM3T9Y.js";import{d as p,a as o,z as c,b as u,w as v,e as f,A as d,f as b,g as m,h as g,i as h,B as y,k as w,u as j,j as x,t as _,aK as k}from"./index-DTxOO0Gw.js";const O={class:"card-header"},P={class:"font-medium"},z={"element-loading-background":"transparent"},C={class:"flex flex-wrap justify-center items-center text-center"},I={key:1,class:"mt-1"},R=p((A=((e,r)=>{for(var a in r||(r={}))s.call(r,a)&&l(e,a,r[a]);if(t)for(var a of t(r))n.call(r,a)&&l(e,a,r[a]);return e})({},{name:"Cropping"}),r(A,a({__name:"index",setup(e){const r=o(),a=o(),t=o(),s=o(!1),n=o("");function l({base64:e,blob:a,info:t}){r.value=t,n.value=e}return c((()=>{a.value.hide()})),(e,p)=>{const o=f("el-link"),c=f("el-image"),R=f("el-popover"),A=f("el-card"),B=d("loading");return b(),u(A,{shadow:"never"},{header:v((()=>[m("div",O,[m("span",P,[g(" 图片裁剪，基于开源的 "),h(o,{href:"https://fengyuanchen.github.io/cropperjs/",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:v((()=>[g(" cropperjs ")])),_:1}),g(" 进行二次封装（提示：右键下面左侧裁剪区可开启功能菜单） ")])]),h(o,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/cropping",target:"_blank"},{default:v((()=>[g(" 代码位置 src/views/components/cropping ")])),_:1})])),default:v((()=>[y((b(),w("div",z,[h(R,{ref_key:"popoverRef",ref:a,visible:s.value,placement:"right",width:"300px"},{reference:v((()=>[h(j(i),{ref_key:"refCropper",ref:t,class:"w-[30vw]",src:j("/static/png/avatar-BYZ7LL6-.png"),circled:"",onCropper:l,onReadied:p[0]||(p[0]=e=>s.value=!0)},null,8,["src"])])),default:v((()=>[m("div",C,[n.value?(b(),u(c,{key:0,src:n.value,"preview-src-list":Array.of(n.value),fit:"cover"},null,8,["src","preview-src-list"])):x("",!0),r.value?(b(),w("div",I,[m("p",null," 图像大小："+_(parseInt(r.value.width))+" × "+_(parseInt(r.value.height))+"像素 ",1),m("p",null," 文件大小："+_(j(k)(r.value.size))+"（"+_(r.value.size)+" 字节） ",1)])):x("",!0)])])),_:1},8,["visible"])])),[[B,!s.value]])])),_:1})}}}))));var A;export{R as default};
