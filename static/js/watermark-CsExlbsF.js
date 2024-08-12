var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,u=(a,l,r)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[l]=r;import{d as n,a as i,x as c,m as d,y as s,z as p,b as v,w as m,e as f,f as b,g as h,i as g,h as k,u as w}from"./index-CgRj-jQH.js";const _={class:"card-header"},y={class:"font-medium"},C=h("span",null," 请输入要创建水印的值：",-1),x=h("span",null,"请选择要创建水印的颜色：",-1),O=n((j=((e,a)=>{for(var l in a||(a={}))o.call(a,l)&&u(e,l,a[l]);if(r)for(var l of r(a))t.call(a,l)&&u(e,l,a[l]);return e})({},{name:"WaterMark"}),a(j,l({__name:"watermark",setup(e){const a=i(),l=i(),r=i("#409EFF"),o=i("vue-pure-admin"),{setWatermark:t,clear:u}=c(),{setWatermark:n,clear:O}=c(a),{setWatermark:j}=c(l);return d((()=>{s((()=>{j("无法删除的水印",{forever:!0,width:180,height:70})}))})),p((()=>{u()})),(e,i)=>{const c=f("el-link"),d=f("el-input"),s=f("el-color-picker"),p=f("el-space"),j=f("el-button"),V=f("el-card");return b(),v(V,{shadow:"never"},{header:m((()=>[h("div",_,[h("span",y,[g(c,{href:"https://pure-admin-utils.netlify.app/hooks/useWatermark/useWatermark",target:"_blank",style:{margin:"0 5px 4px 0","font-size":"16px"}},{default:m((()=>[k(" 页面水印 ")])),_:1})])]),g(c,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/watermark.vue",target:"_blank"},{default:m((()=>[k(" 代码位置 src/views/able/watermark.vue ")])),_:1})])),default:m((()=>[g(p,{wrap:"",class:"!mb-2"},{default:m((()=>[C,g(d,{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=e=>o.value=e),class:"mr-4",style:{width:"200px"},clearable:""},null,8,["modelValue"]),x,g(s,{modelValue:r.value,"onUpdate:modelValue":i[1]||(i[1]=e=>r.value=e),"show-alpha":""},null,8,["modelValue"])])),_:1}),g(p,{wrap:""},{default:m((()=>[g(j,{plain:"",onClick:i[2]||(i[2]=e=>w(t)(o.value,{color:r.value}))},{default:m((()=>[k(" 创建整页水印 ")])),_:1}),g(j,{plain:"",onClick:i[3]||(i[3]=e=>w(t)(o.value,{gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:m((()=>[k(" 创建整页渐变水印 ")])),_:1}),g(j,{plain:"",onClick:i[4]||(i[4]=e=>w(t)(o.value,{rotate:0,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:m((()=>[k(" 创建整页渐变且水平90度的水印 ")])),_:1}),g(j,{plain:"",onClick:i[5]||(i[5]=e=>w(t)(o.value,{gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}],shadowConfig:[20]}))},{default:m((()=>[k(" 创建整页渐变且有阴影的水印 ")])),_:1}),g(j,{plain:"",onClick:i[6]||(i[6]=e=>w(t)(o.value,{globalAlpha:.15,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:m((()=>[k(" 创建整页高透明渐变水印 ")])),_:1}),g(j,{plain:"",onClick:w(u)},{default:m((()=>[k("清除整页水印")])),_:1},8,["onClick"])])),_:1}),h("div",{ref_key:"local",ref:a,class:"w-1/2 h-[200px] border border-sky-500 mt-4"},null,512),g(p,{wrap:"",class:"mt-6"},{default:m((()=>[g(j,{plain:"",onClick:i[7]||(i[7]=e=>w(n)("局部水印",{color:r.value,width:140,height:65}))},{default:m((()=>[k(" 创建局部水印 ")])),_:1}),g(j,{plain:"",onClick:i[8]||(i[8]=e=>w(n)("局部水印",{width:140,height:65,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:m((()=>[k(" 创建局部渐变水印 ")])),_:1}),g(j,{plain:"",onClick:i[9]||(i[9]=e=>w(n)("局部水印",{width:140,height:65,rotate:0,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:m((()=>[k(" 创建局部渐变且水平90度的水印 ")])),_:1}),g(j,{plain:"",onClick:i[10]||(i[10]=e=>w(n)("局部水印",{width:140,height:65,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}],shadowConfig:[20]}))},{default:m((()=>[k(" 创建局部渐变且有阴影的水印 ")])),_:1}),g(j,{plain:"",onClick:w(O)},{default:m((()=>[k("清除局部水印")])),_:1},8,["onClick"])])),_:1}),h("div",{ref_key:"preventLocal",ref:l,class:"w-1/2 h-[200px] border border-indigo-500 mt-4"},null,512)])),_:1})}}}))));var j;export{O as default};
