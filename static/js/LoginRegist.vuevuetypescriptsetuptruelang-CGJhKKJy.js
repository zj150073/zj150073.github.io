var U=(k,f,r)=>new Promise((s,m)=>{var b=t=>{try{_(r.next(t))}catch(y){m(y)}},$=t=>{try{_(r.throw(t))}catch(y){m(y)}},_=t=>t.done?s(t.value):Promise.resolve(t.value).then(b,$);_((r=r.apply(k,f)).next())});import{u as g,a as A,m as h}from"./verifyCode-CwQewhIE.js";import{d as B,h as C,p as E,r as w,A as F,o as N,u as a,w as l,b as e,e as T,g as V,F as c,t as j,l as z}from"./index-BYgSgvzh.js";const S={class:"w-full flex justify-between"},H=B({__name:"LoginRegist",setup(k){const f=C(!1),r=C(!1),s=E({username:"",phone:"",verifyCode:"",password:"",repeatPassword:""}),m=C(),{isDisabled:b,text:$}=g(),_=[{validator:(d,o,u)=>{o===""?u(new Error(window.$i18n("请输入确认密码"))):s.password!==o?u(new Error(window.$i18n("两次密码不一致!"))):u()},trigger:"blur"}],t=d=>U(this,null,function*(){r.value=!0,d&&(yield d.validate(o=>{o?f.value?setTimeout(()=>{h("注册成功",{type:"success"}),r.value=!1},2e3):(r.value=!1,h("请勾选隐私政策",{type:"warning"})):r.value=!1}))});function y(){g().end(),z().SET_CURRENTPAGE(0)}return(d,o)=>{const u=w("el-input"),p=w("el-form-item"),i=w("AjmerMotion"),v=w("el-button"),R=w("el-checkbox"),P=w("el-form");return N(),F(P,{ref_key:"ruleFormRef",ref:m,model:a(s),rules:a(A),size:"large"},{default:l(()=>[e(i,null,{default:l(()=>[e(p,{prop:"username"},{default:l(()=>[e(u,{modelValue:a(s).username,"onUpdate:modelValue":o[0]||(o[0]=n=>a(s).username=n),clearable:"",placeholder:d.$i18n("账号")},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(i,{delay:100},{default:l(()=>[e(p,{prop:"phone"},{default:l(()=>[e(u,{modelValue:a(s).phone,"onUpdate:modelValue":o[1]||(o[1]=n=>a(s).phone=n),clearable:"",placeholder:d.$i18n("手机号")},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(i,{delay:150},{default:l(()=>[e(p,{prop:"verifyCode"},{default:l(()=>[T("div",S,[e(u,{modelValue:a(s).verifyCode,"onUpdate:modelValue":o[2]||(o[2]=n=>a(s).verifyCode=n),clearable:"",placeholder:d.$i18n("验证码")},null,8,["modelValue","placeholder"]),e(v,{disabled:a(b),class:"ml-2",onClick:o[3]||(o[3]=n=>a(g)().start(a(m),"phone"))},{default:l(()=>[V(c(a($)),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}),e(i,{delay:200},{default:l(()=>[e(p,{prop:"password"},{default:l(()=>[e(u,{modelValue:a(s).password,"onUpdate:modelValue":o[4]||(o[4]=n=>a(s).password=n),clearable:"","show-password":"",placeholder:d.$i18n("密码")},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(i,{delay:250},{default:l(()=>[e(p,{rules:_,prop:"repeatPassword"},{default:l(()=>[e(u,{modelValue:a(s).repeatPassword,"onUpdate:modelValue":o[5]||(o[5]=n=>a(s).repeatPassword=n),clearable:"","show-password":"",placeholder:d.$i18n("确认密码")},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(i,{delay:300},{default:l(()=>[e(p,null,{default:l(()=>[e(R,{modelValue:a(f),"onUpdate:modelValue":o[6]||(o[6]=n=>j(f)?f.value=n:null)},{default:l(()=>[V(c(d.$i18n("我已仔细阅读并接受")),1)]),_:1},8,["modelValue"]),e(v,{link:"",type:"primary"},{default:l(()=>[V(c(d.$i18n("《隐私政策》")),1)]),_:1})]),_:1})]),_:1}),e(i,{delay:350},{default:l(()=>[e(p,null,{default:l(()=>[e(v,{class:"w-full",size:"default",type:"primary",loading:a(r),onClick:o[7]||(o[7]=n=>t(a(m)))},{default:l(()=>[V(c(d.$i18n("确定")),1)]),_:1},8,["loading"])]),_:1})]),_:1}),e(i,{delay:400},{default:l(()=>[e(p,null,{default:l(()=>[e(v,{class:"w-full",size:"default",onClick:y},{default:l(()=>[V(c(d.$i18n("返回")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{H as _};
