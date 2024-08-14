var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,u=(l,a,s)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[a]=s;import{d as o,r as i,w as r,c as p,s as n,B as m,a1 as c,P as v,o as b,a as f,i as h,f as V,E as w}from"./@vue-CFXrvzpc.js";const z={class:"card-header"},_=f("p",{class:"mb-2"},"日期和时间点",-1),x=f("p",{class:"text-[15px]"},"鼠标滚轮进行选择",-1),g=f("p",{class:"text-[15px]"},"箭头进行选择",-1),y=f("p",{class:"mb-2"},"限制时间选择范围",-1),k=f("p",{class:"mb-2"},"任意时间范围",-1),O={class:"card-header"},U=f("p",{class:"mb-2"},"固定时间点",-1),j=f("p",{class:"mb-2 mt-4"},"时间格式",-1),P=f("p",{class:"mb-2 mt-4"},"固定时间范围",-1),A=o((C=((e,l)=>{for(var a in l||(l={}))d.call(l,a)&&u(e,a,l[a]);if(s)for(var a of s(l))t.call(l,a)&&u(e,a,l[a]);return e})({},{name:"TimePicker"}),l(C,a({__name:"time-picker",setup(e){const l=i("default"),a=i(),s=i(""),d=i(""),t=i(),u=i(new Date(2016,9,10,18,30)),o=(e,l)=>{const a=[];for(let s=e;s<=l;s++)a.push(s);return a},A=()=>o(0,16).concat(o(19,23)),C=e=>17===e?o(0,29):18===e?o(31,59):void 0,D=(e,l)=>{if(18===e&&30===l)return o(1,59)};r(l,(e=>a.value="disabled"===e?"default":l.value));const E=i(""),N=i(""),B=i(""),I=i("");return(e,o)=>{const i=c("el-link"),r=c("el-radio"),S=c("el-radio-group"),T=c("el-space"),q=c("el-time-picker"),F=c("el-divider"),G=c("el-card"),H=c("el-time-select"),J=v("tippy");return b(),p("div",null,[n(G,{shadow:"never"},{header:m((()=>[f("div",z,[n(T,{wrap:"",size:40},{default:m((()=>[h((b(),V(i,{href:"https://element-plus.org/zh-CN/component/time-picker.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:m((()=>[w(" 时间选择器 ")])),_:1})),[[J,{content:"点击查看详细文档"}]]),n(S,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e)},{default:m((()=>[n(r,{value:"large"},{default:m((()=>[w("大尺寸")])),_:1}),n(r,{value:"default"},{default:m((()=>[w("默认尺寸")])),_:1}),n(r,{value:"small"},{default:m((()=>[w("小尺寸")])),_:1}),n(r,{value:"disabled"},{default:m((()=>[w("禁用")])),_:1})])),_:1},8,["modelValue"])])),_:1})]),n(i,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/time-picker.vue",target:"_blank"},{default:m((()=>[w(" 代码位置 src/views/components/time-picker.vue ")])),_:1})])),default:m((()=>[_,n(T,{wrap:""},{default:m((()=>[x,n(q,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=e=>s.value=e),placeholder:"请选择时间",class:"!w-[140px]",size:a.value,disabled:"disabled"===l.value},null,8,["modelValue","size","disabled"]),g,n(q,{modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=e=>d.value=e),"arrow-control":"",placeholder:"请选择时间",class:"!w-[140px]",size:a.value,disabled:"disabled"===l.value},null,8,["modelValue","size","disabled"])])),_:1}),n(F),y,n(q,{modelValue:u.value,"onUpdate:modelValue":o[3]||(o[3]=e=>u.value=e),class:"!w-[140px]","disabled-hours":A,"disabled-minutes":C,"disabled-seconds":D,placeholder:"Arbitrary time",size:a.value,disabled:"disabled"===l.value},null,8,["modelValue","size","disabled"]),n(F),k,n(q,{modelValue:t.value,"onUpdate:modelValue":o[4]||(o[4]=e=>t.value=e),class:"!w-[220px]","is-range":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",size:a.value,disabled:"disabled"===l.value},null,8,["modelValue","size","disabled"])])),_:1}),n(G,{shadow:"never",class:"mt-4"},{header:m((()=>[f("div",O,[h((b(),V(i,{href:"https://element-plus.org/zh-CN/component/time-select.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:m((()=>[w(" 时间选择 ")])),_:1})),[[J,{content:"点击查看详细文档"}]])])])),default:m((()=>[U,n(H,{modelValue:E.value,"onUpdate:modelValue":o[5]||(o[5]=e=>E.value=e),placeholder:"请选择时间",class:"!w-[140px]",start:"08:30",step:"00:15",end:"18:30",size:a.value,disabled:"disabled"===l.value},null,8,["modelValue","size","disabled"]),j,n(H,{modelValue:N.value,"onUpdate:modelValue":o[6]||(o[6]=e=>N.value=e),placeholder:"请选择时间",class:"!w-[140px]",start:"00:00",step:"00:30",end:"23:59",format:"hh:mm A",size:a.value,disabled:"disabled"===l.value},null,8,["modelValue","size","disabled"]),P,n(T,{wrap:""},{default:m((()=>[n(H,{modelValue:B.value,"onUpdate:modelValue":o[7]||(o[7]=e=>B.value=e),placeholder:"开始时间",class:"!w-[140px]","max-time":I.value,start:"08:30",step:"00:15",end:"18:30",size:a.value,disabled:"disabled"===l.value},null,8,["modelValue","max-time","size","disabled"]),n(H,{modelValue:I.value,"onUpdate:modelValue":o[8]||(o[8]=e=>I.value=e),placeholder:"结束时间",class:"!w-[140px]","min-time":B.value,start:"08:30",step:"00:15",end:"18:30",size:a.value,disabled:"disabled"===l.value},null,8,["modelValue","min-time","size","disabled"])])),_:1})])),_:1})])}}}))));var C;export{A as default};
