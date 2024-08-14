import{M as e}from"./motion-B0UlpB9w.js";import{t as l,$ as a,m as o,B as r}from"./index-CQT2hjpo.js";import{u,a as s}from"./verifyCode-DjY98lPV.js";import{u as d}from"./hooks-DylvqpOU.js";import{an as i,l as n,ao as t}from"./@iconify-icons-CxRB8ffa.js";import{d as p,r as f,S as c,a1 as m,o as g,f as y,B as h,s as v,D as _,a as w,E as V,p as x}from"./@vue-CFXrvzpc.js";import{u as P}from"./vue-i18n-DB-7wkrF.js";const b={class:"w-full flex justify-between"},C=p({__name:"LoginRegist",setup(p){const{t:C}=P(),k=f(!1),R=f(!1),U=c({username:"",phone:"",verifyCode:"",password:"",repeatPassword:""}),j=f(),{isDisabled:E,text:S}=u(),D=[{validator:(e,o,r)=>{""===o?r(new Error(l(a("login.purePassWordSureReg")))):U.password!==o?r(new Error(l(a("login.purePassWordDifferentReg")))):r()},trigger:"blur"}],T=e=>{return r=this,u=null,s=function*(){R.value=!0,e&&(yield e.validate((e=>{e?k.value?setTimeout((()=>{o(l(a("login.pureRegisterSuccess")),{type:"success"}),R.value=!1}),2e3):(R.value=!1,o(l(a("login.pureTickPrivacy")),{type:"warning"})):R.value=!1})))},new Promise(((e,l)=>{var a=e=>{try{d(s.next(e))}catch(a){l(a)}},o=e=>{try{d(s.throw(e))}catch(a){l(a)}},d=l=>l.done?e(l.value):Promise.resolve(l.value).then(a,o);d((s=s.apply(r,u)).next())}));var r,u,s};function z(){u().end(),r().SET_CURRENTPAGE(0)}return(o,r)=>{const p=m("el-input"),f=m("el-form-item"),c=m("el-button"),P=m("el-checkbox"),B=m("el-form");return g(),y(B,{ref_key:"ruleFormRef",ref:j,model:U,rules:_(s),size:"large"},{default:h((()=>[v(_(e),null,{default:h((()=>[v(f,{rules:[{required:!0,message:_(l)(_(a)("login.pureUsernameReg")),trigger:"blur"}],prop:"username"},{default:h((()=>[v(p,{modelValue:U.username,"onUpdate:modelValue":r[0]||(r[0]=e=>U.username=e),clearable:"",placeholder:_(C)("login.pureUsername"),"prefix-icon":_(d)(_(i))},null,8,["modelValue","placeholder","prefix-icon"])])),_:1},8,["rules"])])),_:1}),v(_(e),{delay:100},{default:h((()=>[v(f,{prop:"phone"},{default:h((()=>[v(p,{modelValue:U.phone,"onUpdate:modelValue":r[1]||(r[1]=e=>U.phone=e),clearable:"",placeholder:_(C)("login.purePhone"),"prefix-icon":_(d)(_(n))},null,8,["modelValue","placeholder","prefix-icon"])])),_:1})])),_:1}),v(_(e),{delay:150},{default:h((()=>[v(f,{prop:"verifyCode"},{default:h((()=>[w("div",b,[v(p,{modelValue:U.verifyCode,"onUpdate:modelValue":r[2]||(r[2]=e=>U.verifyCode=e),clearable:"",placeholder:_(C)("login.pureSmsVerifyCode"),"prefix-icon":_(d)("ri:shield-keyhole-line")},null,8,["modelValue","placeholder","prefix-icon"]),v(c,{disabled:_(E),class:"ml-2",onClick:r[3]||(r[3]=e=>_(u)().start(j.value,"phone"))},{default:h((()=>[V(x(_(S).length>0?_(S)+_(C)("login.pureInfo"):_(C)("login.pureGetVerifyCode")),1)])),_:1},8,["disabled"])])])),_:1})])),_:1}),v(_(e),{delay:200},{default:h((()=>[v(f,{prop:"password"},{default:h((()=>[v(p,{modelValue:U.password,"onUpdate:modelValue":r[4]||(r[4]=e=>U.password=e),clearable:"","show-password":"",placeholder:_(C)("login.purePassword"),"prefix-icon":_(d)(_(t))},null,8,["modelValue","placeholder","prefix-icon"])])),_:1})])),_:1}),v(_(e),{delay:250},{default:h((()=>[v(f,{rules:D,prop:"repeatPassword"},{default:h((()=>[v(p,{modelValue:U.repeatPassword,"onUpdate:modelValue":r[5]||(r[5]=e=>U.repeatPassword=e),clearable:"","show-password":"",placeholder:_(C)("login.pureSure"),"prefix-icon":_(d)(_(t))},null,8,["modelValue","placeholder","prefix-icon"])])),_:1})])),_:1}),v(_(e),{delay:300},{default:h((()=>[v(f,null,{default:h((()=>[v(P,{modelValue:k.value,"onUpdate:modelValue":r[6]||(r[6]=e=>k.value=e)},{default:h((()=>[V(x(_(C)("login.pureReadAccept")),1)])),_:1},8,["modelValue"]),v(c,{link:"",type:"primary"},{default:h((()=>[V(x(_(C)("login.purePrivacyPolicy")),1)])),_:1})])),_:1})])),_:1}),v(_(e),{delay:350},{default:h((()=>[v(f,null,{default:h((()=>[v(c,{class:"w-full",size:"default",type:"primary",loading:R.value,onClick:r[7]||(r[7]=e=>T(j.value))},{default:h((()=>[V(x(_(C)("login.pureDefinite")),1)])),_:1},8,["loading"])])),_:1})])),_:1}),v(_(e),{delay:400},{default:h((()=>[v(f,null,{default:h((()=>[v(c,{class:"w-full",size:"default",onClick:z},{default:h((()=>[V(x(_(C)("login.pureBack")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])}}});export{C as _};
