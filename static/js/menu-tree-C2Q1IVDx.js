import{d as y,a as u,a8 as w,a9 as C,p as H,aa as M,ab as I,b as N,w as e,e as n,f as P,g as d,h as s,i as o,u as r,t as T,ac as p}from"./index-BdQqVUXy.js";import{u as Z}from"./hooks-DmI0Ij89.js";const B={width:24,height:24,body:'<path fill="currentColor" d="M10 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8v2h5V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H8v6h5v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H7a1 1 0 0 1-1-1V8H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6Zm9 16h-4v2h4v-2Zm0-8h-4v2h4v-2ZM9 4H5v2h4V4Z"/>'},R={class:"card-header"},q={class:"font-medium"},E=y({name:"MenuTree",__name:"menu-tree",setup(z){const c=u(""),v=u({value:"uniqueId",children:"children"}),i=u(),_=w(C().wholeMenus,!0),h=H(()=>M(_)),f=I(h.value),b=a=>{i.value.filter(a)},x=(a,t)=>p(t.meta.title).indexOf(a)!==-1;return(a,t)=>{const m=n("el-link"),k=n("el-input"),V=n("el-tree-v2"),g=n("el-card");return P(),N(g,{shadow:"never"},{header:e(()=>[d("div",R,[d("span",q,[s(" 菜单树结构（采用 Element Plus 的 "),o(m,{href:"https://element-plus.gitee.io/zh-CN/component/tree-v2.html",target:"_blank",icon:r(Z)(r(B)),style:{margin:"0 5px 4px 0","font-size":"16px"}},{default:e(()=>[s(" Tree V2 ")]),_:1},8,["icon"]),s(" 组件并支持国际化） ")])]),o(m,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/menu-tree.vue",target:"_blank"},{default:e(()=>[s(" 代码位置 src/views/able/menu-tree.vue ")]),_:1})]),default:e(()=>[o(k,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=l=>c.value=l),class:"mb-4",placeholder:"请输入关键字查找",clearable:"",onInput:b},null,8,["modelValue"]),o(V,{ref_key:"treeRef",ref:i,data:h.value,props:v.value,"show-checkbox":"",height:500,"filter-method":x,"default-expanded-keys":r(f)},{default:e(({data:l})=>[d("span",null,T(r(p)(l.meta.title)),1)]),_:1},8,["data","props","default-expanded-keys"])]),_:1})}}});export{E as default};
