var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{R as u}from"./index-Cu9IQJA7.js";import{T as d,E as n}from"./index.esm-Dvpsa0ni.js";import{d as i,a as p,O as f,z as c,e as m,f as v,b as y,w as b,k as O,l as j,u as g,g as w,i as h,F as x}from"./index-DTxOO0Gw.js";const R={class:"wangeditor"},E="default",P=i((V=((e,a)=>{for(var t in a||(a={}))o.call(a,t)&&s(e,t,a[t]);if(r)for(var t of r(a))l.call(a,t)&&s(e,t,a[t]);return e})({},{name:"MultiEditor"}),a(V,t({__name:"EditorMulti",setup(e){const a=p([]);[{value:"<p>测试一</p>"},{value:"<p>测试二</p>"},{value:"<p>测试三</p>"},{value:"<p>测试四</p>"}].forEach((e=>{a.value.push({value:e.value,editorRef:f()})}));const t={excludeKeys:"fullScreen"},r={placeholder:"请输入内容..."};return c((()=>a.value.map((e=>{null!=e.editorRef&&e.editorRef.destroy()})))),(e,o)=>{const l=m("el-row");return v(),y(l,{gutter:30,justify:"space-around"},{default:b((()=>[(v(!0),O(x,null,j(a.value,((e,o)=>(v(),y(g(u),{key:o,value:11},{default:b((()=>[w("div",R,[h(g(d),{editor:e.editorRef,defaultConfig:t,mode:E,style:{"border-bottom":"1px solid #ccc"}},null,8,["editor"]),h(g(n),{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,defaultConfig:r,mode:E,style:{height:"300px","overflow-y":"hidden"},onOnCreated:e=>((e,t)=>{a.value[t].editorRef=e})(e,o)},null,8,["modelValue","onUpdate:modelValue","onOnCreated"])])])),_:2},1024)))),128))])),_:1})}}}))));var V;export{P as _};
