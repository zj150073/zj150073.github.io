var e=Object.defineProperty,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(n,r,t)=>r in n?e(n,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[r]=t,i=(e,i)=>{for(var c in i||(i={}))r.call(i,c)&&o(e,c,i[c]);if(n)for(var c of n(i))t.call(i,c)&&o(e,c,i[c]);return e};import{d as c,N as a,aA as f,aB as l,aC as s}from"./index-CgRj-jQH.js";function p(e,n){const r=/^IF-/;if(r.test(e)){const t=e.split(r)[1],o=t.slice(0,-1==t.indexOf(" ")?t.length:t.indexOf(" ")),l=t.slice(t.indexOf(" ")+1,t.length);return c({name:"FontIcon",render:()=>a(f,i({icon:o,iconType:l},n))})}return"function"==typeof e||"function"==typeof(null==e?void 0:e.render)?n?a(e,i({},n)):e:c("object"==typeof e?{name:"OfflineIcon",render:()=>a(l,i({icon:e},n))}:{name:"Icon",render(){const r=e&&e.includes(":")?s:l;return a(r,i({icon:e},n))}})}export{p as u};
