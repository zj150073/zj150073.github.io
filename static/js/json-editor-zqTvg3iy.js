var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;import{S as i}from"./vue-json-pretty-CvPdgqI5.js";import{d as l,r as d,n as u,b as h,w as c,e as p,f as b,g as m,h as w,i as f,u as g}from"./index-07XH1eRd.js";const v={class:"card-header"},y={class:"font-medium"},j={class:"font-medium"},O=l((_=((e,t)=>{for(var s in t||(t={}))o.call(t,s)&&n(e,s,t[s]);if(a)for(var s of a(t))r.call(t,s)&&n(e,s,t[s]);return e})({},{name:"JsonEditor"}),t(_,s({__name:"json-editor",setup(e){const t={status:200,text:"",error:null,config:void 0,data:[{news_id:51184,title:"iPhone X Review: Innovative future with real black technology",source:"Netease phone"},{news_id:51183,title:"Traffic paradise: How to design streets for people and unmanned vehicles in the future?",source:"Netease smart",link:"http://netease.smart/traffic-paradise/1235"},{news_id:51182,title:"Teslamask's American Business Relations: The government does not pay billions to build factories",source:"AI Finance",members:["Daniel","Mike","John"]}]},s=d({val:JSON.stringify(t),data:t,showLine:!0,showLineNumber:!0,showDoubleQuotes:!0,showLength:!0,editable:!0,showIcon:!0,editableTrigger:"click",deep:3});return u((()=>s.val),(e=>{s.data=JSON.parse(e)})),u((()=>s.data),(e=>{s.val=JSON.stringify(e)})),(e,t)=>{const a=p("el-link"),o=p("el-card");return b(),h(o,{shadow:"never"},{header:c((()=>[m("div",v,[m("span",y,[w(" JSON编辑器，采用开源的 "),f(a,{href:"https://github.com/leezng/vue-json-pretty",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:c((()=>[w(" vue-json-pretty ")])),_:1}),w(" （支持大数据量）。 ")]),m("span",j,[w(" 当然还有一款代码编辑器推荐（这里就不做演示了），采用开源的 "),f(a,{href:"https://github.com/surmon-china/vue-codemirror",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:c((()=>[w(" codemirror6 ")])),_:1})])]),f(a,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/json-editor.vue",target:"_blank"},{default:c((()=>[w(" 代码位置 src/views/components/json-editor.vue ")])),_:1})])),default:c((()=>[f(g(i),{data:s.data,"onUpdate:data":t[0]||(t[0]=e=>s.data=e),deep:s.deep,"show-double-quotes":s.showDoubleQuotes,"show-line":s.showLine,"show-length":s.showLength,"show-icon":s.showIcon,"show-line-number":s.showLineNumber,editable:s.editable,"editable-trigger":s.editableTrigger},null,8,["data","deep","show-double-quotes","show-line","show-length","show-icon","show-line-number","editable","editable-trigger"])])),_:1})}}}))));var _;export{O as default};
