var ye=Object.defineProperty,Se=Object.defineProperties;var Le=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var Y=(e,o,n)=>o in e?ye(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,E=(e,o)=>{for(var n in o||(o={}))Be.call(o,n)&&Y(e,n,o[n]);if(X)for(var n of X(o))Ee.call(o,n)&&Y(e,n,o[n]);return e},F=(e,o)=>Se(e,Le(o));var P=(e,o,n)=>new Promise((l,b)=>{var d=c=>{try{t(n.next(c))}catch(r){b(r)}},v=c=>{try{t(n.throw(c))}catch(r){b(r)}},t=c=>c.done?l(c.value):Promise.resolve(c.value).then(d,v);t((n=n.apply(e,o)).next())});import{Q as te,v as Z,m as ee,aU as A,J as $,t as f,U as M,x as oe,a4 as ue,L as se,q as O,bb as N,bF as K,a3 as _e,au as ae,d as _,a7 as ie,p as j,o as x,g as re,h as ce,e as le,B as C,u,w as z,c as S,aw as G,F as U,bG as w,A as q,a0 as Ie,f as de,K as be,G as R,z as ve,y as Fe,k as Ne,n as $e,I as ze,b5 as Ge,C as Ue,M as me}from"./index-Ds-GAlGo.js";import{a as fe,p as we}from"./index-BsMrbun3.js";import{U as D,d as he}from"./event-BE20p1dL.js";import{d as De,a as J,b as ne,k as ke,_ as Q}from"./use-form-item-D3gq8yvl.js";import{i as Pe}from"./isEqual-9-3WEIzX.js";import{u as T}from"./index-DoNj3Rlw.js";const pe=E({modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:te,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},fe(["ariaControls"])),ge={[D]:e=>Z(e)||ee(e)||A(e),change:e=>Z(e)||ee(e)||A(e)},I=Symbol("checkboxGroupContextKey"),Te=({model:e,isChecked:o})=>{const n=$(I,void 0),l=f(()=>{var d,v;const t=(d=n==null?void 0:n.max)==null?void 0:d.value,c=(v=n==null?void 0:n.min)==null?void 0:v.value;return!M(t)&&e.value.length>=t&&!o.value||!M(c)&&e.value.length<=c&&o.value});return{isDisabled:De(f(()=>(n==null?void 0:n.disabled.value)||l.value)),isLimitDisabled:l}},Ae=(e,{model:o,isLimitExceeded:n,hasOwnLabel:l,isDisabled:b,isLabeledByFormItem:d})=>{const v=$(I,void 0),{formItem:t}=J(),{emit:c}=se();function r(a){var h,k,i,p;return[!0,e.trueValue,e.trueLabel].includes(a)?(k=(h=e.trueValue)!=null?h:e.trueLabel)!=null?k:!0:(p=(i=e.falseValue)!=null?i:e.falseLabel)!=null?p:!1}function s(a,h){c("change",r(a),h)}function m(a){if(n.value)return;const h=a.target;c("change",r(h.checked),a)}function V(a){return P(this,null,function*(){n.value||!l.value&&!b.value&&d.value&&(a.composedPath().some(i=>i.tagName==="LABEL")||(o.value=r([!1,e.falseValue,e.falseLabel].includes(o.value)),yield ue(),s(o.value,a)))})}const L=f(()=>(v==null?void 0:v.validateEvent)||e.validateEvent);return oe(()=>e.modelValue,()=>{L.value&&(t==null||t.validate("change").catch(a=>he()))}),{handleChange:m,onClickRoot:V}},Me=e=>{const o=O(!1),{emit:n}=se(),l=$(I,void 0),b=f(()=>M(l)===!1),d=O(!1),v=f({get(){var t,c;return b.value?(t=l==null?void 0:l.modelValue)==null?void 0:t.value:(c=e.modelValue)!=null?c:o.value},set(t){var c,r;b.value&&N(t)?(d.value=((c=l==null?void 0:l.max)==null?void 0:c.value)!==void 0&&t.length>(l==null?void 0:l.max.value)&&t.length>v.value.length,d.value===!1&&((r=l==null?void 0:l.changeEvent)==null||r.call(l,t))):(n(D,t),o.value=t)}});return{model:v,isGroup:b,isLimitExceeded:d}},Oe=(e,o,{model:n})=>{const l=$(I,void 0),b=O(!1),d=f(()=>K(e.value)?e.label:e.value),v=f(()=>{const s=n.value;return A(s)?s:N(s)?_e(d.value)?s.map(ae).some(m=>Pe(m,d.value)):s.map(ae).includes(d.value):s!=null?s===e.trueValue||s===e.trueLabel:!!s}),t=ne(f(()=>{var s;return(s=l==null?void 0:l.size)==null?void 0:s.value}),{prop:!0}),c=ne(f(()=>{var s;return(s=l==null?void 0:l.size)==null?void 0:s.value})),r=f(()=>!!o.default||!K(d.value));return{checkboxButtonSize:t,isChecked:v,isFocused:b,checkboxSize:c,hasOwnLabel:r,actualValue:d}},Ce=(e,o)=>{const{formItem:n}=J(),{model:l,isGroup:b,isLimitExceeded:d}=Me(e),{isFocused:v,isChecked:t,checkboxButtonSize:c,checkboxSize:r,hasOwnLabel:s,actualValue:m}=Oe(e,o,{model:l}),{isDisabled:V}=Te({model:l,isChecked:t}),{inputId:L,isLabeledByFormItem:a}=ke(e,{formItemContext:n,disableIdGeneration:s,disableIdManagement:b}),{handleChange:h,onClickRoot:k}=Ae(e,{model:l,isLimitExceeded:d,hasOwnLabel:s,isDisabled:V,isLabeledByFormItem:a});return(()=>{function p(){var y,g;N(l.value)&&!l.value.includes(m.value)?l.value.push(m.value):l.value=(g=(y=e.trueValue)!=null?y:e.trueLabel)!=null?g:!0}e.checked&&p()})(),T({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>b.value&&K(e.value))),T({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>!!e.trueLabel)),T({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>!!e.falseLabel)),{inputId:L,isLabeledByFormItem:a,isChecked:t,isDisabled:V,isFocused:v,checkboxButtonSize:c,checkboxSize:r,hasOwnLabel:s,model:l,actualValue:m,handleChange:h,onClickRoot:k}},Ke=_({name:"ElCheckbox"}),Re=_(F(E({},Ke),{props:pe,emits:ge,setup(e){const o=e,n=ie(),{inputId:l,isLabeledByFormItem:b,isChecked:d,isDisabled:v,isFocused:t,checkboxSize:c,hasOwnLabel:r,model:s,actualValue:m,handleChange:V,onClickRoot:L}=Ce(o,n),a=j("checkbox"),h=f(()=>[a.b(),a.m(c.value),a.is("disabled",v.value),a.is("bordered",o.border),a.is("checked",d.value)]),k=f(()=>[a.e("input"),a.is("disabled",v.value),a.is("checked",d.value),a.is("indeterminate",o.indeterminate),a.is("focus",t.value)]);return(i,p)=>(x(),re(ve(!u(r)&&u(b)?"span":"label"),{class:C(u(h)),"aria-controls":i.indeterminate?i.ariaControls:null,onClick:u(L)},{default:ce(()=>{var y,g,W,H;return[le("span",{class:C(u(k))},[i.trueValue||i.falseValue||i.trueLabel||i.falseLabel?z((x(),S("input",{key:0,id:u(l),"onUpdate:modelValue":B=>G(s)?s.value=B:null,class:C(u(a).e("original")),type:"checkbox",indeterminate:i.indeterminate,name:i.name,tabindex:i.tabindex,disabled:u(v),"true-value":(g=(y=i.trueValue)!=null?y:i.trueLabel)!=null?g:!0,"false-value":(H=(W=i.falseValue)!=null?W:i.falseLabel)!=null?H:!1,onChange:u(V),onFocus:B=>t.value=!0,onBlur:B=>t.value=!1,onClick:U(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[w,u(s)]]):z((x(),S("input",{key:1,id:u(l),"onUpdate:modelValue":B=>G(s)?s.value=B:null,class:C(u(a).e("original")),type:"checkbox",indeterminate:i.indeterminate,disabled:u(v),value:u(m),name:i.name,tabindex:i.tabindex,onChange:u(V),onFocus:B=>t.value=!0,onBlur:B=>t.value=!1,onClick:U(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[w,u(s)]]),le("span",{class:C(u(a).e("inner"))},null,2)],2),u(r)?(x(),S("span",{key:0,class:C(u(a).e("label"))},[q(i.$slots,"default"),i.$slots.default?R("v-if",!0):(x(),S(Ie,{key:0},[de(be(i.label),1)],64))],2)):R("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}}));var je=Q(Re,[["__file","checkbox.vue"]]);const qe=_({name:"ElCheckboxButton"}),Je=_(F(E({},qe),{props:pe,emits:ge,setup(e){const o=e,n=ie(),{isFocused:l,isChecked:b,isDisabled:d,checkboxButtonSize:v,model:t,actualValue:c,handleChange:r}=Ce(o,n),s=$(I,void 0),m=j("checkbox"),V=f(()=>{var a,h,k,i;const p=(h=(a=s==null?void 0:s.fill)==null?void 0:a.value)!=null?h:"";return{backgroundColor:p,borderColor:p,color:(i=(k=s==null?void 0:s.textColor)==null?void 0:k.value)!=null?i:"",boxShadow:p?`-1px 0 0 0 ${p}`:void 0}}),L=f(()=>[m.b("button"),m.bm("button",v.value),m.is("disabled",d.value),m.is("checked",b.value),m.is("focus",l.value)]);return(a,h)=>{var k,i,p,y;return x(),S("label",{class:C(u(L))},[a.trueValue||a.falseValue||a.trueLabel||a.falseLabel?z((x(),S("input",{key:0,"onUpdate:modelValue":g=>G(t)?t.value=g:null,class:C(u(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:u(d),"true-value":(i=(k=a.trueValue)!=null?k:a.trueLabel)!=null?i:!0,"false-value":(y=(p=a.falseValue)!=null?p:a.falseLabel)!=null?y:!1,onChange:u(r),onFocus:g=>l.value=!0,onBlur:g=>l.value=!1,onClick:U(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[w,u(t)]]):z((x(),S("input",{key:1,"onUpdate:modelValue":g=>G(t)?t.value=g:null,class:C(u(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:u(d),value:u(c),onChange:u(r),onFocus:g=>l.value=!0,onBlur:g=>l.value=!1,onClick:U(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[w,u(t)]]),a.$slots.default||a.label?(x(),S("span",{key:2,class:C(u(m).be("button","inner")),style:Fe(u(b)?u(V):void 0)},[q(a.$slots,"default",{},()=>[de(be(a.label),1)])],6)):R("v-if",!0)],2)}}}));var xe=Q(Je,[["__file","checkbox-button.vue"]]);const Qe=Ne(E({modelValue:{type:$e(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:te,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}},fe(["ariaLabel"]))),We={[D]:e=>N(e),change:e=>N(e)},He=_({name:"ElCheckboxGroup"}),Xe=_(F(E({},He),{props:Qe,emits:We,setup(e,{emit:o}){const n=e,l=j("checkbox"),{formItem:b}=J(),{inputId:d,isLabeledByFormItem:v}=ke(n,{formItemContext:b}),t=r=>P(this,null,function*(){o(D,r),yield ue(),o("change",r)}),c=f({get(){return n.modelValue},set(r){t(r)}});return ze(I,F(E({},we(Ge(n),["size","min","max","disabled","validateEvent","fill","textColor"])),{modelValue:c,changeEvent:t})),oe(()=>n.modelValue,()=>{n.validateEvent&&(b==null||b.validate("change").catch(r=>he()))}),(r,s)=>{var m;return x(),re(ve(r.tag),{id:u(d),class:C(u(l).b("group")),role:"group","aria-label":u(v)?void 0:r.ariaLabel||"checkbox-group","aria-labelledby":u(v)?(m=u(b))==null?void 0:m.labelId:void 0},{default:ce(()=>[q(r.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}}));var Ve=Q(Xe,[["__file","checkbox-group.vue"]]);const oa=Ue(je,{CheckboxButton:xe,CheckboxGroup:Ve});me(xe);me(Ve);export{oa as E};
