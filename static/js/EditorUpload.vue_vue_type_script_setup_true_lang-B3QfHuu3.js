var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(a,o,r)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[o]=r;import{T as d,E as n}from"./index.esm-Dvpsa0ni.js";import{d as i,O as p,a as u,z as c,f as m,k as f,i as g,u as y}from"./index-DTxOO0Gw.js";const b={class:"wangeditor"},v="default",O=i((j=((e,a)=>{for(var o in a||(a={}))t.call(a,o)&&s(e,o,a[o]);if(r)for(var o of r(a))l.call(a,o)&&s(e,o,a[o]);return e})({},{name:"picUpload"}),a(j,o({__name:"EditorUpload",setup(e){const a=p(),o=u("<p>仅提供代码参考，暂不可上传图片，可根据实际业务改写</p>"),r={excludeKeys:"fullScreen"},t={placeholder:"请输入内容...",MENU_CONF:{}};t.MENU_CONF.uploadImage={server:"",fieldName:"file",allowedFileTypes:["image/png","image/jpg","image/jpeg"],customInsert(e,a){e.data.url&&setTimeout((()=>{a(e.data.url)}),2e3)}};const l=e=>{a.value=e};return c((()=>{const e=a.value;null!=e&&e.destroy()})),(e,s)=>(m(),f("div",b,[g(y(d),{editor:a.value,defaultConfig:r,mode:v,style:{"border-bottom":"1px solid #ccc"}},null,8,["editor"]),g(y(n),{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=e=>o.value=e),defaultConfig:t,mode:v,style:{height:"500px","overflow-y":"hidden"},onOnCreated:l},null,8,["modelValue"])]))}}))));var j;export{O as _};
