var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,i=(e,t,r)=>n(e,"symbol"!=typeof t?t+"":t,r);import{d as a,a as c,b as u,w as h,e as d,f as p,g as f,i as v,h as b,k as m,l as w,t as y,F as g}from"./index-CKXHolY4.js";class k{constructor(e,t=0){i(this,"depth",0),i(this,"key"),i(this,"word",!1),i(this,"children",{}),i(this,"fail"),i(this,"count",0),this.key=e,this.depth=t}}const O=class{constructor(e,t){i(this,"root",new k("root")),i(this,"customCharacter");const r=e.length;this.customCharacter=(null==t?void 0:t.customCharacter)||"*";for(let s=0;s<r;s++)this.add(e[s],!1);this.build()}build(){const e=[];e.push(this.root);let t=0;for(;e.length>t;){const r=e[t],s=r.children;for(const t in r.children){const o=s[t];let l=r.fail;for(;l&&!l.children[t];)l=l.fail;o.fail=(null==l?void 0:l.children[t])||this.root,e.push(o)}t++}}search(e,t={replace:!0}){let r=this.root;const s=[],o=[],l=[],{replace:n=!0,verify:i=!1}=t,a=e.length;for(let c=0;c<a;c++){const t=e[c],a=t.toLowerCase();for(;r&&!(null==r?void 0:r.children[a]);)r=null==r?void 0:r.fail;if(r=(null==r?void 0:r.children[a])||this.root,s.push(t),o.push(t),r.word){let e=c+1-r.depth,t="";for(;e<=c;){t+=o[e],n&&(s[e]=this.customCharacter),e++}if(l.push(t),i)break}}return{words:l,text:s.join("")}}filter(e,t){return this.search(e,t)}verify(e){const{words:t}=this.search(e,{verify:!0});return!t.length}delete(e){const t=this.pop(e.toLowerCase(),e.length,this.root);return this.build(),t}pop(e,t,r,s="delete",o=0){if(!r)return"delete";if(o===t){r.word=!1,r.count--;let e=!0;for(const t in r.children)if(t){e=!1;break}return e?s:"update"}{const l=e[o],n=r.children[l],i=this.pop(e,t,n,r.word?"update":s,o+1);return r.count--,"delete"===i&&0===(null==n?void 0:n.count)&&delete r.children[l],i}}add(e,t=!0){const r=e.toLowerCase(),s=r.length;return this.put(r,s),t&&this.build(),!0}put(e,t){let r=this.root;const s=t-1;r.count++;for(let o=0;o<t;o++){const t=e[o],l=r.children[t];if(l)l.count++,r=l;else{const e=new k(t,o+1);e.count=1,r.children[t]=e,r=e}s===o&&r.depth&&(r.word=!0)}}},j={class:"card-header"},x=f("p",{class:"font-medium"},"敏感词过滤",-1),C={class:"flex flex-wrap gap-2 my-2"},_=f("span",null,"自定义敏感词",-1),P={class:"mt-2"},L=a((V=((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&n(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&n(e,r,t[r]);return e})({},{name:"Sensitive"}),t(V,r({__name:"sensitive",setup(e){const t=["脑残","废物","白痴","三八","智障"],r=c(),s=new O(t);function o(){r.value=s.filter(r.value).text}return(e,s)=>{const l=d("el-link"),n=d("el-tag"),i=d("el-input"),a=d("el-card");return p(),u(a,{shadow:"never"},{header:h((()=>[f("div",j,[x,v(l,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/sensitive.vue",target:"_blank"},{default:h((()=>[b(" 代码位置 src/views/able/sensitive.vue ")])),_:1})])])),default:h((()=>[f("div",C,[_,(p(),m(g,null,w(t,((e,t)=>v(n,{key:t,type:"warning",class:"mx-1",effect:"dark",round:""},{default:h((()=>[b(y(e),1)])),_:2},1024))),64))]),v(i,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=e=>r.value=e),onInput:o},null,8,["modelValue"]),f("p",P,y(r.value),1)])),_:1})}}}))));var V;export{L as default};
