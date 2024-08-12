import{M as e}from"./motion-CSG5UXFs.js";import{d as l,U as a,a as r,r as o,e as u,f as d,b as s,w as i,i as n,u as t,ac as p,ft as f,g as c,h as m,t as h,L as g,fP as y}from"./index-CKXHolY4.js";import{u as v,a as _}from"./verifyCode-Du_6CMh6.js";import{u as w}from"./hooks-Bl1Eeoqm.js";import{d as V}from"./lock-fill-DJ4QcHtb.js";import{d as x}from"./iphone-CgGaW-_Y.js";const b={width:24,height:24,body:'<path fill="currentColor" d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2Zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"/>'},P={class:"w-full flex justify-between"},C=l({__name:"LoginRegist",setup(l){const{t:C}=a(),k=r(!1),U=r(!1),R=o({username:"",phone:"",verifyCode:"",password:"",repeatPassword:""}),j=r(),{isDisabled:E,text:S}=v(),T=[{validator:(e,l,a)=>{""===l?a(new Error(p(f("login.purePassWordSureReg")))):R.password!==l?a(new Error(p(f("login.purePassWordDifferentReg")))):a()},trigger:"blur"}],z=e=>{return l=this,a=null,r=function*(){U.value=!0,e&&(yield e.validate((e=>{e?k.value?setTimeout((()=>{g(p(f("login.pureRegisterSuccess")),{type:"success"}),U.value=!1}),2e3):(U.value=!1,g(p(f("login.pureTickPrivacy")),{type:"warning"})):U.value=!1})))},new Promise(((e,o)=>{var u=e=>{try{s(r.next(e))}catch(l){o(l)}},d=e=>{try{s(r.throw(e))}catch(l){o(l)}},s=l=>l.done?e(l.value):Promise.resolve(l.value).then(u,d);s((r=r.apply(l,a)).next())}));var l,a,r};function D(){v().end(),y().SET_CURRENTPAGE(0)}return(l,a)=>{const r=u("el-input"),o=u("el-form-item"),g=u("el-button"),y=u("el-checkbox"),A=u("el-form");return d(),s(A,{ref_key:"ruleFormRef",ref:j,model:R,rules:t(_),size:"large"},{default:i((()=>[n(t(e),null,{default:i((()=>[n(o,{rules:[{required:!0,message:t(p)(t(f)("login.pureUsernameReg")),trigger:"blur"}],prop:"username"},{default:i((()=>[n(r,{modelValue:R.username,"onUpdate:modelValue":a[0]||(a[0]=e=>R.username=e),clearable:"",placeholder:t(C)("login.pureUsername"),"prefix-icon":t(w)(t(b))},null,8,["modelValue","placeholder","prefix-icon"])])),_:1},8,["rules"])])),_:1}),n(t(e),{delay:100},{default:i((()=>[n(o,{prop:"phone"},{default:i((()=>[n(r,{modelValue:R.phone,"onUpdate:modelValue":a[1]||(a[1]=e=>R.phone=e),clearable:"",placeholder:t(C)("login.purePhone"),"prefix-icon":t(w)(t(x))},null,8,["modelValue","placeholder","prefix-icon"])])),_:1})])),_:1}),n(t(e),{delay:150},{default:i((()=>[n(o,{prop:"verifyCode"},{default:i((()=>[c("div",P,[n(r,{modelValue:R.verifyCode,"onUpdate:modelValue":a[2]||(a[2]=e=>R.verifyCode=e),clearable:"",placeholder:t(C)("login.pureSmsVerifyCode"),"prefix-icon":t(w)("ri:shield-keyhole-line")},null,8,["modelValue","placeholder","prefix-icon"]),n(g,{disabled:t(E),class:"ml-2",onClick:a[3]||(a[3]=e=>t(v)().start(j.value,"phone"))},{default:i((()=>[m(h(t(S).length>0?t(S)+t(C)("login.pureInfo"):t(C)("login.pureGetVerifyCode")),1)])),_:1},8,["disabled"])])])),_:1})])),_:1}),n(t(e),{delay:200},{default:i((()=>[n(o,{prop:"password"},{default:i((()=>[n(r,{modelValue:R.password,"onUpdate:modelValue":a[4]||(a[4]=e=>R.password=e),clearable:"","show-password":"",placeholder:t(C)("login.purePassword"),"prefix-icon":t(w)(t(V))},null,8,["modelValue","placeholder","prefix-icon"])])),_:1})])),_:1}),n(t(e),{delay:250},{default:i((()=>[n(o,{rules:T,prop:"repeatPassword"},{default:i((()=>[n(r,{modelValue:R.repeatPassword,"onUpdate:modelValue":a[5]||(a[5]=e=>R.repeatPassword=e),clearable:"","show-password":"",placeholder:t(C)("login.pureSure"),"prefix-icon":t(w)(t(V))},null,8,["modelValue","placeholder","prefix-icon"])])),_:1})])),_:1}),n(t(e),{delay:300},{default:i((()=>[n(o,null,{default:i((()=>[n(y,{modelValue:k.value,"onUpdate:modelValue":a[6]||(a[6]=e=>k.value=e)},{default:i((()=>[m(h(t(C)("login.pureReadAccept")),1)])),_:1},8,["modelValue"]),n(g,{link:"",type:"primary"},{default:i((()=>[m(h(t(C)("login.purePrivacyPolicy")),1)])),_:1})])),_:1})])),_:1}),n(t(e),{delay:350},{default:i((()=>[n(o,null,{default:i((()=>[n(g,{class:"w-full",size:"default",type:"primary",loading:U.value,onClick:a[7]||(a[7]=e=>z(j.value))},{default:i((()=>[m(h(t(C)("login.pureDefinite")),1)])),_:1},8,["loading"])])),_:1})])),_:1}),n(t(e),{delay:400},{default:i((()=>[n(o,null,{default:i((()=>[n(g,{class:"w-full",size:"default",onClick:D},{default:i((()=>[m(h(t(C)("login.pureBack")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])}}});export{C as _,b as d};
