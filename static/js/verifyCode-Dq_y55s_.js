var g=(s,r,e)=>new Promise((u,t)=>{var a=o=>{try{v(e.next(o))}catch(d){t(d)}},f=o=>{try{v(e.throw(o))}catch(d){t(d)}},v=o=>o.done?u(o.value):Promise.resolve(o.value).then(a,f);v((e=e.apply(s,r)).next())});import{v as E,as as A,aJ as p,l as w,aK as C}from"./index-6jyvy8UW.js";const $=/^\d{6}$/,y=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/,z=E({password:[{validator:(s,r,e)=>{r===""?e(new Error("请输入密码")):y.test(r)?e():e(new Error("密码格式应为8-18位数字、字母、符号的任意两种组合"))},trigger:"blur"}],verifyCode:[{validator:(s,r,e)=>{r===""?e(new Error("请输入验证码")):A().verifyCode!==r?e(new Error("请输入正确的验证码")):e()},trigger:"blur"}]}),Z=E({phone:[{validator:(s,r,e)=>{r===""?e(new Error("请输入手机号码")):p(r)?e():e(new Error("请输入正确的手机号码格式"))},trigger:"blur"}],verifyCode:[{validator:(s,r,e)=>{r===""?e(new Error("请输入验证码")):$.test(r)?e():e(new Error("请输入6位数字验证码"))},trigger:"blur"}]}),h=E({phone:[{validator:(s,r,e)=>{r===""?e(new Error("请输入手机号码")):p(r)?e():e(new Error("请输入正确的手机号码格式"))},trigger:"blur"}],verifyCode:[{validator:(s,r,e)=>{r===""?e(new Error("请输入验证码")):$.test(r)?e():e(new Error("请输入6位数字验证码"))},trigger:"blur"}],password:[{validator:(s,r,e)=>{r===""?e(new Error("请输入密码")):y.test(r)?e():e(new Error("密码格式应为8-18位数字、字母、符号的任意两种组合"))},trigger:"blur"}]}),l=w(!1),i=w(null),n=w(""),P=()=>({isDisabled:l,timer:i,text:n,start:(e,u,t=60)=>g(void 0,null,function*(){if(!e)return;const a=C(t,!0);yield e.validateField(u,f=>{f&&(clearInterval(i.value),l.value=!0,n.value=`${t}`,i.value=setInterval(()=>{t>0?(t-=1,n.value=`${t}`):(n.value="",l.value=!1,clearInterval(i.value),t=a)},1e3))})}),end:()=>{n.value="",l.value=!1,clearInterval(i.value)}});export{h as a,z as l,Z as p,P as u};