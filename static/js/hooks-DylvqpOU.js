var e=Object.defineProperty,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,t=(n,r,o)=>r in n?e(n,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[r]=o,i=(e,i)=>{for(var c in i||(i={}))r.call(i,c)&&t(e,c,i[c]);if(n)for(var c of n(i))o.call(i,c)&&t(e,c,i[c]);return e};import{F as c,I as a,j as f}from"./index-CQT2hjpo.js";import{d as l,x as s}from"./@vue-CFXrvzpc.js";function p(e,n){const r=/^IF-/;if(r.test(e)){const o=e.split(r)[1],t=o.slice(0,-1==o.indexOf(" ")?o.length:o.indexOf(" ")),a=o.slice(o.indexOf(" ")+1,o.length);return l({name:"FontIcon",render:()=>s(c,i({icon:t,iconType:a},n))})}return"function"==typeof e||"function"==typeof(null==e?void 0:e.render)?n?s(e,i({},n)):e:l("object"==typeof e?{name:"OfflineIcon",render:()=>s(a,i({icon:e},n))}:{name:"Icon",render(){const r=e&&e.includes(":")?f:a;return s(r,i({icon:e},n))}})}export{p as u};
