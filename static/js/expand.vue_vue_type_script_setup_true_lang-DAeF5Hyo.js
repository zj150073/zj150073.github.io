import{c as a}from"./data-C4dpkQ-R.js";import{d as e,r as l,a1 as s,o as p,c as d,E as r,s as t,B as o,a as u,p as m,D as n}from"./@vue-CFXrvzpc.js";const b={class:"m-4"},c={class:"mb-2"},i={class:"mb-2"},v={class:"mb-2"},y={class:"mb-4"},V=u("h3",null,"Family",-1),h=e({__name:"expand",setup(e){const h=l(!1),x=l(!1),w=[{type:"expand",slot:"expand"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}],_=[{label:"Name",prop:"name"},{label:"State",prop:"state"},{label:"City",prop:"city"},{label:"Address",prop:"address"},{label:"Zip",prop:"zip"}];return(e,l)=>{const f=s("el-switch"),j=s("pure-table");return p(),d("div",null,[r(" switch parent border: "),t(f,{modelValue:h.value,"onUpdate:modelValue":l[0]||(l[0]=a=>h.value=a)},null,8,["modelValue"]),r(" switch child border: "),t(f,{modelValue:x.value,"onUpdate:modelValue":l[1]||(l[1]=a=>x.value=a)},null,8,["modelValue"]),t(j,{data:n(a),columns:w,border:h.value},{expand:o((({row:a})=>[u("div",b,[u("p",c,"State: "+m(a.state),1),u("p",i,"City: "+m(a.city),1),u("p",v,"Address: "+m(a.address),1),u("p",y,"Zip: "+m(a.zip),1),V,t(j,{data:a.family,columns:_,border:x.value},null,8,["data","border"])])])),_:1},8,["data","border"])])}}});export{h as _};
