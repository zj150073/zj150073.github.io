import{R as B}from"./index-CInJTcLw.js";import{d as R,a as o,z as j,b as m,w as t,e as a,A as z,f as c,g as r,h as i,i as l,B as N,k as h,u as v,j as g,t as p,cS as V}from"./index-BdQqVUXy.js";const D="/static/png/avatar-BYZ7LL6-.png",I={class:"card-header"},A={class:"font-medium"},L={"element-loading-background":"transparent"},S={class:"flex flex-wrap justify-center items-center text-center"},E={key:1,class:"mt-1"},Y=R({name:"Cropping",__name:"index",setup(J){const e=o(),_=o(),w=o(),u=o(!1),s=o("");function k({base64:f,blob:d,info:n}){e.value=n,s.value=f}return j(()=>{_.value.hide()}),(f,d)=>{const n=a("el-link"),b=a("el-image"),x=a("el-popover"),C=a("el-card"),y=z("loading");return c(),m(C,{shadow:"never"},{header:t(()=>[r("div",I,[r("span",A,[i(" 图片裁剪，基于开源的 "),l(n,{href:"https://fengyuanchen.github.io/cropperjs/",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:t(()=>[i(" cropperjs ")]),_:1}),i(" 进行二次封装（提示：右键下面左侧裁剪区可开启功能菜单） ")])]),l(n,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/cropping",target:"_blank"},{default:t(()=>[i(" 代码位置 src/views/components/cropping ")]),_:1})]),default:t(()=>[N((c(),h("div",L,[l(x,{ref_key:"popoverRef",ref:_,visible:u.value,placement:"right",width:"300px"},{reference:t(()=>[l(v(B),{ref_key:"refCropper",ref:w,class:"w-[30vw]",src:v(D),circled:"",onCropper:k,onReadied:d[0]||(d[0]=P=>u.value=!0)},null,8,["src"])]),default:t(()=>[r("div",S,[s.value?(c(),m(b,{key:0,src:s.value,"preview-src-list":Array.of(s.value),fit:"cover"},null,8,["src","preview-src-list"])):g("",!0),e.value?(c(),h("div",E,[r("p",null," 图像大小："+p(parseInt(e.value.width))+" × "+p(parseInt(e.value.height))+"像素 ",1),r("p",null," 文件大小："+p(v(V)(e.value.size))+"（"+p(e.value.size)+" 字节） ",1)])):g("",!0)])]),_:1},8,["visible"])])),[[y,!u.value]])]),_:1})}}});export{Y as default};
