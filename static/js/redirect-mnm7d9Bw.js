var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,u=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;const p=Vue.defineComponent((c=((e,r)=>{for(var t in r||(r={}))a.call(r,t)&&u(e,t,r[t]);if(o)for(var t of o(r))n.call(r,t)&&u(e,t,r[t]);return e})({},{name:"Redirect"}),r(c,t({__name:"redirect",setup(e){const{currentRoute:r,replace:t}=VueRouter.useRouter(),{params:o,query:a}=Vue.unref(r),{path:n}=o;return t({path:"/"+(Array.isArray(n)?n.join("/"):n),query:a}),(e,r)=>(Vue.openBlock(),Vue.createElementBlock("div"))}}))));var c;export{p as default};
