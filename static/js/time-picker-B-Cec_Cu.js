import{d as H,a as o,n as M,k as P,i as l,w as s,e as r,A as R,f as h,g as n,B as N,b as T,h as m}from"./index-BdQqVUXy.js";const j={class:"card-header"},q=n("p",{class:"mb-2"},"日期和时间点",-1),F=n("p",{class:"text-[15px]"},"鼠标滚轮进行选择",-1),G=n("p",{class:"text-[15px]"},"箭头进行选择",-1),I=n("p",{class:"mb-2"},"限制时间选择范围",-1),J=n("p",{class:"mb-2"},"任意时间范围",-1),K={class:"card-header"},L=n("p",{class:"mb-2"},"固定时间点",-1),O=n("p",{class:"mb-2 mt-4"},"时间格式",-1),Q=n("p",{class:"mb-2 mt-4"},"固定时间范围",-1),Y=H({name:"TimePicker",__name:"time-picker",setup(W){const t=o("default"),d=o(),w=o(""),z=o(""),x=o(),k=o(new Date(2016,9,10,18,30)),c=(i,e)=>{const p=[];for(let u=i;u<=e;u++)p.push(u);return p},A=()=>c(0,16).concat(c(19,23)),D=i=>{if(i===17)return c(0,29);if(i===18)return c(31,59)},S=(i,e)=>{if(i===18&&e===30)return c(1,59)};M(t,i=>i==="disabled"?d.value="default":d.value=t.value);const g=o(""),U=o(""),b=o(""),f=o("");return(i,e)=>{const p=r("el-link"),u=r("el-radio"),E=r("el-radio-group"),V=r("el-space"),v=r("el-time-picker"),y=r("el-divider"),B=r("el-card"),_=r("el-time-select"),C=R("tippy");return h(),P("div",null,[l(B,{shadow:"never"},{header:s(()=>[n("div",j,[l(V,{wrap:"",size:40},{default:s(()=>[N((h(),T(p,{href:"https://element-plus.org/zh-CN/component/time-picker.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:s(()=>[m(" 时间选择器 ")]),_:1})),[[C,{content:"点击查看详细文档"}]]),l(E,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a)},{default:s(()=>[l(u,{value:"large"},{default:s(()=>[m("大尺寸")]),_:1}),l(u,{value:"default"},{default:s(()=>[m("默认尺寸")]),_:1}),l(u,{value:"small"},{default:s(()=>[m("小尺寸")]),_:1}),l(u,{value:"disabled"},{default:s(()=>[m("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),l(p,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/time-picker.vue",target:"_blank"},{default:s(()=>[m(" 代码位置 src/views/components/time-picker.vue ")]),_:1})]),default:s(()=>[q,l(V,{wrap:""},{default:s(()=>[F,l(v,{modelValue:w.value,"onUpdate:modelValue":e[1]||(e[1]=a=>w.value=a),placeholder:"请选择时间",class:"!w-[140px]",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","size","disabled"]),G,l(v,{modelValue:z.value,"onUpdate:modelValue":e[2]||(e[2]=a=>z.value=a),"arrow-control":"",placeholder:"请选择时间",class:"!w-[140px]",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","size","disabled"])]),_:1}),l(y),I,l(v,{modelValue:k.value,"onUpdate:modelValue":e[3]||(e[3]=a=>k.value=a),class:"!w-[140px]","disabled-hours":A,"disabled-minutes":D,"disabled-seconds":S,placeholder:"Arbitrary time",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","size","disabled"]),l(y),J,l(v,{modelValue:x.value,"onUpdate:modelValue":e[4]||(e[4]=a=>x.value=a),class:"!w-[220px]","is-range":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","size","disabled"])]),_:1}),l(B,{shadow:"never",class:"mt-4"},{header:s(()=>[n("div",K,[N((h(),T(p,{href:"https://element-plus.org/zh-CN/component/time-select.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:s(()=>[m(" 时间选择 ")]),_:1})),[[C,{content:"点击查看详细文档"}]])])]),default:s(()=>[L,l(_,{modelValue:g.value,"onUpdate:modelValue":e[5]||(e[5]=a=>g.value=a),placeholder:"请选择时间",class:"!w-[140px]",start:"08:30",step:"00:15",end:"18:30",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","size","disabled"]),O,l(_,{modelValue:U.value,"onUpdate:modelValue":e[6]||(e[6]=a=>U.value=a),placeholder:"请选择时间",class:"!w-[140px]",start:"00:00",step:"00:30",end:"23:59",format:"hh:mm A",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","size","disabled"]),Q,l(V,{wrap:""},{default:s(()=>[l(_,{modelValue:b.value,"onUpdate:modelValue":e[7]||(e[7]=a=>b.value=a),placeholder:"开始时间",class:"!w-[140px]","max-time":f.value,start:"08:30",step:"00:15",end:"18:30",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","max-time","size","disabled"]),l(_,{modelValue:f.value,"onUpdate:modelValue":e[8]||(e[8]=a=>f.value=a),placeholder:"结束时间",class:"!w-[140px]","min-time":b.value,start:"08:30",step:"00:15",end:"18:30",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","min-time","size","disabled"])]),_:1})]),_:1})])}}});export{Y as default};
