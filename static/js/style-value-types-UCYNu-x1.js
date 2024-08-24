const t=(t,s)=>r=>Math.max(Math.min(r,s),t),s=t=>t%1?Number(t.toFixed(5)):t,r=/(-)?([\d]*\.?[\d])+/g,e=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,a=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function n(t){return"string"==typeof t}const o={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},l=Object.assign(Object.assign({},o),{transform:t(0,1)}),u=Object.assign(Object.assign({},o),{default:1}),p=t=>({test:s=>n(s)&&s.endsWith(t)&&1===s.split(" ").length,parse:parseFloat,transform:s=>`${s}${t}`}),c=p("deg"),i=p("%"),f=p("px"),m=Object.assign(Object.assign({},i),{parse:t=>i.parse(t)/100,transform:t=>i.transform(100*t)}),h=(t,s)=>r=>Boolean(n(r)&&a.test(r)&&r.startsWith(t)||s&&Object.prototype.hasOwnProperty.call(r,s)),b=(t,s,e)=>a=>{if(!n(a))return a;const[o,l,u,p]=a.match(r);return{[t]:parseFloat(o),[s]:parseFloat(l),[e]:parseFloat(u),alpha:void 0!==p?parseFloat(p):1}},g={test:h("hsl","hue"),parse:b("hue","saturation","lightness"),transform:({hue:t,saturation:r,lightness:e,alpha:a=1})=>"hsla("+Math.round(t)+", "+i.transform(s(r))+", "+i.transform(s(e))+", "+s(l.transform(a))+")"},d=t(0,255),O=Object.assign(Object.assign({},o),{transform:t=>Math.round(d(t))}),j={test:h("rgb","red"),parse:b("red","green","blue"),transform:({red:t,green:r,blue:e,alpha:a=1})=>"rgba("+O.transform(t)+", "+O.transform(r)+", "+O.transform(e)+", "+s(l.transform(a))+")"};const v={test:h("#"),parse:function(t){let s="",r="",e="",a="";return t.length>5?(s=t.substr(1,2),r=t.substr(3,2),e=t.substr(5,2),a=t.substr(7,2)):(s=t.substr(1,1),r=t.substr(2,1),e=t.substr(3,1),a=t.substr(4,1),s+=s,r+=r,e+=e,a+=a),{red:parseInt(s,16),green:parseInt(r,16),blue:parseInt(e,16),alpha:a?parseInt(a,16)/255:1}},transform:j.transform},y={test:t=>j.test(t)||v.test(t)||g.test(t),parse:t=>j.test(t)?j.parse(t):g.test(t)?g.parse(t):v.parse(t),transform:t=>n(t)?t:t.hasOwnProperty("red")?j.transform(t):g.transform(t)},F="${c}",$="${n}";function N(t){"number"==typeof t&&(t=`${t}`);const s=[];let a=0;const n=t.match(e);n&&(a=n.length,t=t.replace(e,F),s.push(...n.map(y.parse)));const l=t.match(r);return l&&(t=t.replace(r,$),s.push(...l.map(o.parse))),{values:s,numColors:a,tokenised:t}}function w(t){return N(t).values}function x(t){const{values:r,numColors:e,tokenised:a}=N(t),n=r.length;return t=>{let r=a;for(let a=0;a<n;a++)r=r.replace(a<e?F:$,a<e?y.transform(t[a]):s(t[a]));return r}}const I=t=>"number"==typeof t?0:t;const M={test:function(t){var s,a,o,l;return isNaN(t)&&n(t)&&(null!==(a=null===(s=t.match(r))||void 0===s?void 0:s.length)&&void 0!==a?a:0)+(null!==(l=null===(o=t.match(e))||void 0===o?void 0:o.length)&&void 0!==l?l:0)>0},parse:w,createTransformer:x,getAnimatableNone:function(t){const s=w(t);return x(t)(s.map(I))}},k=new Set(["brightness","contrast","saturate","opacity"]);function A(t){let[s,e]=t.slice(0,-1).split("(");if("drop-shadow"===s)return t;const[a]=e.match(r)||[];if(!a)return t;const n=e.replace(a,"");let o=k.has(s)?1:0;return a!==e&&(o*=100),s+"("+o+n+")"}const C=/([a-z-]*)\(.*?\)/g,P=Object.assign(Object.assign({},M),{getAnimatableNone:t=>{const s=t.match(C);return s?s.map(A).join(" "):t}});export{l as a,m as b,y as c,c as d,M as e,P as f,v as g,g as h,o as n,f as p,j as r,u as s};