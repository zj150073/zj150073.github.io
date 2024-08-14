import{d as t}from"./dijkstrajs-CkR1O50I.js";var e={},n={},r={};let o;const i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];r.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},r.getSymbolTotalCodewords=function(t){return i[t]},r.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},r.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');o=t},r.isKanjiModeEnabled=function(){return void 0!==o},r.toSJIS=function(t){return o(t)};var s,a={};function u(){this.buffer=[],this.length=0}(s=a).L={bit:1},s.M={bit:0},s.Q={bit:3},s.H={bit:2},s.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},s.from=function(t,e){if(s.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return s.L;case"m":case"medium":return s.M;case"q":case"quartile":return s.Q;case"h":case"high":return s.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(n){return e}},u.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var c=u;function l(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}l.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)},l.prototype.get=function(t,e){return this.data[t*this.size+e]},l.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},l.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var f=l,h={};!function(t){const e=r.getSymbolSize;t.getRowColCoords=function(t){if(1===t)return[];const n=Math.floor(t/7)+2,r=e(t),o=145===r?26:2*Math.ceil((r-13)/(2*n-2)),i=[r-7];for(let e=1;e<n-1;e++)i[e]=i[e-1]-o;return i.push(6),i.reverse()},t.getPositions=function(e){const n=[],r=t.getRowColCoords(e),o=r.length;for(let t=0;t<o;t++)for(let e=0;e<o;e++)0===t&&0===e||0===t&&e===o-1||t===o-1&&0===e||n.push([r[t],r[e]]);return n}}(h);var g={};const d=r.getSymbolSize;g.getPositions=function(t){const e=d(t);return[[0,0],[e-7,0],[0,e-7]]};var p={};!function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e=3,n=3,r=40,o=10;function i(e,n,r){switch(e){case t.Patterns.PATTERN000:return(n+r)%2==0;case t.Patterns.PATTERN001:return n%2==0;case t.Patterns.PATTERN010:return r%3==0;case t.Patterns.PATTERN011:return(n+r)%3==0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case t.Patterns.PATTERN101:return n*r%2+n*r%3==0;case t.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case t.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(t){const n=t.size;let r=0,o=0,i=0,s=null,a=null;for(let u=0;u<n;u++){o=i=0,s=a=null;for(let c=0;c<n;c++){let n=t.get(u,c);n===s?o++:(o>=5&&(r+=e+(o-5)),s=n,o=1),n=t.get(c,u),n===a?i++:(i>=5&&(r+=e+(i-5)),a=n,i=1)}o>=5&&(r+=e+(o-5)),i>=5&&(r+=e+(i-5))}return r},t.getPenaltyN2=function(t){const e=t.size;let r=0;for(let n=0;n<e-1;n++)for(let o=0;o<e-1;o++){const e=t.get(n,o)+t.get(n,o+1)+t.get(n+1,o)+t.get(n+1,o+1);4!==e&&0!==e||r++}return r*n},t.getPenaltyN3=function(t){const e=t.size;let n=0,o=0,i=0;for(let r=0;r<e;r++){o=i=0;for(let s=0;s<e;s++)o=o<<1&2047|t.get(r,s),s>=10&&(1488===o||93===o)&&n++,i=i<<1&2047|t.get(s,r),s>=10&&(1488===i||93===i)&&n++}return n*r},t.getPenaltyN4=function(t){let e=0;const n=t.data.length;for(let r=0;r<n;r++)e+=t.data[r];return Math.abs(Math.ceil(100*e/n/5)-10)*o},t.applyMask=function(t,e){const n=e.size;for(let r=0;r<n;r++)for(let o=0;o<n;o++)e.isReserved(o,r)||e.xor(o,r,i(t,o,r))},t.getBestMask=function(e,n){const r=Object.keys(t.Patterns).length;let o=0,i=1/0;for(let s=0;s<r;s++){n(s),t.applyMask(s,e);const r=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(s,e),r<i&&(i=r,o=s)}return o}}(p);var w={};const m=a,E=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],y=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];w.getBlocksCount=function(t,e){switch(e){case m.L:return E[4*(t-1)+0];case m.M:return E[4*(t-1)+1];case m.Q:return E[4*(t-1)+2];case m.H:return E[4*(t-1)+3];default:return}},w.getTotalCodewordsCount=function(t,e){switch(e){case m.L:return y[4*(t-1)+0];case m.M:return y[4*(t-1)+1];case m.Q:return y[4*(t-1)+2];case m.H:return y[4*(t-1)+3];default:return}};var A={},C={};const B=new Uint8Array(512),I=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)B[e]=t,I[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)B[e]=B[e-255]}(),C.log=function(t){if(t<1)throw new Error("log("+t+")");return I[t]},C.exp=function(t){return B[t]},C.mul=function(t,e){return 0===t||0===e?0:B[I[t]+I[e]]},function(t){const e=C;t.mul=function(t,n){const r=new Uint8Array(t.length+n.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<n.length;i++)r[o+i]^=e.mul(t[o],n[i]);return r},t.mod=function(t,n){let r=new Uint8Array(t);for(;r.length-n.length>=0;){const t=r[0];for(let i=0;i<n.length;i++)r[i]^=e.mul(n[i],t);let o=0;for(;o<r.length&&0===r[o];)o++;r=r.slice(o)}return r},t.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let o=0;o<n;o++)r=t.mul(r,new Uint8Array([1,e.exp(o)]));return r}}(A);const M=A;function v(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}v.prototype.initialize=function(t){this.degree=t,this.genPoly=M.generateECPolynomial(this.degree)},v.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=M.mod(e,this.genPoly),r=this.degree-n.length;if(r>0){const t=new Uint8Array(this.degree);return t.set(n,r),t}return n};var T=v,N={},P={},b={isValid:function(t){return!isNaN(t)&&t>=1&&t<=40}},R={};const L="[0-9]+";let U="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";U=U.replace(/u/g,"\\u");const S="(?:(?![A-Z0-9 $%*+\\-./:]|"+U+")(?:.|[\r\n]))+";R.KANJI=new RegExp(U,"g"),R.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),R.BYTE=new RegExp(S,"g"),R.NUMERIC=new RegExp(L,"g"),R.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const x=new RegExp("^"+U+"$"),k=new RegExp("^"+L+"$"),F=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");R.testKanji=function(t){return x.test(t)},R.testNumeric=function(t){return k.test(t)},R.testAlphanumeric=function(t){return F.test(t)},function(t){const e=b,n=R;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(t,n){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!e.isValid(n))throw new Error("Invalid version: "+n);return n>=1&&n<10?t.ccBits[0]:n<27?t.ccBits[1]:t.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},t.isValid=function(t){return t&&t.bit&&t.ccBits},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(r){return n}}}(P),function(t){const e=r,n=w,o=a,i=P,s=b,u=e.getBCHDigit(7973);function c(t,e){return i.getCharCountIndicator(t,e)+4}function l(t,e){let n=0;return t.forEach((function(t){const r=c(t.mode,e);n+=r+t.getBitsLength()})),n}t.from=function(t,e){return s.isValid(t)?parseInt(t,10):e},t.getCapacity=function(t,r,o){if(!s.isValid(t))throw new Error("Invalid QR Code version");void 0===o&&(o=i.BYTE);const a=8*(e.getSymbolTotalCodewords(t)-n.getTotalCodewordsCount(t,r));if(o===i.MIXED)return a;const u=a-c(o,t);switch(o){case i.NUMERIC:return Math.floor(u/10*3);case i.ALPHANUMERIC:return Math.floor(u/11*2);case i.KANJI:return Math.floor(u/13);case i.BYTE:default:return Math.floor(u/8)}},t.getBestVersionForData=function(e,n){let r;const s=o.from(n,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,n){for(let r=1;r<=40;r++)if(l(e,r)<=t.getCapacity(r,n,i.MIXED))return r}(e,s);if(0===e.length)return 1;r=e[0]}else r=e;return function(e,n,r){for(let o=1;o<=40;o++)if(n<=t.getCapacity(o,r,e))return o}(r.mode,r.getLength(),s)},t.getEncodedBits=function(t){if(!s.isValid(t)||t<7)throw new Error("Invalid QR Code version");let n=t<<12;for(;e.getBCHDigit(n)-u>=0;)n^=7973<<e.getBCHDigit(n)-u;return t<<12|n}}(N);var z={};const D=r,H=D.getBCHDigit(1335);z.getEncodedBits=function(t,e){const n=t.bit<<3|e;let r=n<<10;for(;D.getBCHDigit(r)-H>=0;)r^=1335<<D.getBCHDigit(r)-H;return 21522^(n<<10|r)};var J={};const K=P;function Y(t){this.mode=K.NUMERIC,this.data=t.toString()}Y.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},Y.prototype.getLength=function(){return this.data.length},Y.prototype.getBitsLength=function(){return Y.getBitsLength(this.data.length)},Y.prototype.write=function(t){let e,n,r;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10);const o=this.data.length-e;o>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*o+1))};var j=Y;const V=P,O=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Q(t){this.mode=V.ALPHANUMERIC,this.data=t}Q.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},Q.prototype.getLength=function(){return this.data.length},Q.prototype.getBitsLength=function(){return Q.getBitsLength(this.data.length)},Q.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*O.indexOf(this.data[e]);n+=O.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(O.indexOf(this.data[e]),6)};var $=Q;const q=P;function Z(t){this.mode=q.BYTE,this.data="string"==typeof t?(new TextEncoder).encode(t):new Uint8Array(t)}Z.getBitsLength=function(t){return 8*t},Z.prototype.getLength=function(){return this.data.length},Z.prototype.getBitsLength=function(){return Z.getBitsLength(this.data.length)},Z.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var X=Z;const W=P,_=r;function G(t){this.mode=W.KANJI,this.data=t}G.getBitsLength=function(t){return 13*t},G.prototype.getLength=function(){return this.data.length},G.prototype.getBitsLength=function(){return G.getBitsLength(this.data.length)},G.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=_.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}};var tt=G;!function(e){const n=P,o=j,i=$,s=X,a=tt,u=R,c=r,l=t;function f(t){return unescape(encodeURIComponent(t)).length}function h(t,e,n){const r=[];let o;for(;null!==(o=t.exec(n));)r.push({data:o[0],index:o.index,mode:e,length:o[0].length});return r}function g(t){const e=h(u.NUMERIC,n.NUMERIC,t),r=h(u.ALPHANUMERIC,n.ALPHANUMERIC,t);let o,i;c.isKanjiModeEnabled()?(o=h(u.BYTE,n.BYTE,t),i=h(u.KANJI,n.KANJI,t)):(o=h(u.BYTE_KANJI,n.BYTE,t),i=[]);return e.concat(r,o,i).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function d(t,e){switch(e){case n.NUMERIC:return o.getBitsLength(t);case n.ALPHANUMERIC:return i.getBitsLength(t);case n.KANJI:return a.getBitsLength(t);case n.BYTE:return s.getBitsLength(t)}}function p(t,e){let r;const u=n.getBestModeForData(t);if(r=n.from(e,u),r!==n.BYTE&&r.bit<u.bit)throw new Error('"'+t+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(u));switch(r!==n.KANJI||c.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new o(t);case n.ALPHANUMERIC:return new i(t);case n.KANJI:return new a(t);case n.BYTE:return new s(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(p(e,null)):e.data&&t.push(p(e.data,e.mode)),t}),[])},e.fromString=function(t,r){const o=function(t){const e=[];for(let r=0;r<t.length;r++){const o=t[r];switch(o.mode){case n.NUMERIC:e.push([o,{data:o.data,mode:n.ALPHANUMERIC,length:o.length},{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.ALPHANUMERIC:e.push([o,{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.KANJI:e.push([o,{data:o.data,mode:n.BYTE,length:f(o.data)}]);break;case n.BYTE:e.push([{data:o.data,mode:n.BYTE,length:f(o.data)}])}}return e}(g(t,c.isKanjiModeEnabled())),i=function(t,e){const r={},o={start:{}};let i=["start"];for(let s=0;s<t.length;s++){const a=t[s],u=[];for(let t=0;t<a.length;t++){const c=a[t],l=""+s+t;u.push(l),r[l]={node:c,lastCount:0},o[l]={};for(let t=0;t<i.length;t++){const s=i[t];r[s]&&r[s].node.mode===c.mode?(o[s][l]=d(r[s].lastCount+c.length,c.mode)-d(r[s].lastCount,c.mode),r[s].lastCount+=c.length):(r[s]&&(r[s].lastCount=c.length),o[s][l]=d(c.length,c.mode)+4+n.getCharCountIndicator(c.mode,e))}}i=u}for(let n=0;n<i.length;n++)o[i[n]].end=0;return{map:o,table:r}}(o,r),s=l.find_path(i.map,"start","end"),a=[];for(let e=1;e<s.length-1;e++)a.push(i.table[s[e]].node);return e.fromArray(function(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(a))},e.rawSplit=function(t){return e.fromArray(g(t,c.isKanjiModeEnabled()))}}(J);const et=r,nt=a,rt=c,ot=f,it=h,st=g,at=p,ut=w,ct=T,lt=N,ft=z,ht=P,gt=J;function dt(t,e,n){const r=t.size,o=ft.getEncodedBits(e,n);let i,s;for(i=0;i<15;i++)s=1==(o>>i&1),i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(r-15+i,8,s,!0),i<8?t.set(8,r-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(r-8,8,1,!0)}function pt(t,e,n){const r=new rt;n.forEach((function(e){r.put(e.mode.bit,4),r.put(e.getLength(),ht.getCharCountIndicator(e.mode,t)),e.write(r)}));const o=8*(et.getSymbolTotalCodewords(t)-ut.getTotalCodewordsCount(t,e));for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(0);const i=(o-r.getLengthInBits())/8;for(let s=0;s<i;s++)r.put(s%2?17:236,8);return function(t,e,n){const r=et.getSymbolTotalCodewords(e),o=ut.getTotalCodewordsCount(e,n),i=r-o,s=ut.getBlocksCount(e,n),a=r%s,u=s-a,c=Math.floor(r/s),l=Math.floor(i/s),f=l+1,h=c-l,g=new ct(h);let d=0;const p=new Array(s),w=new Array(s);let m=0;const E=new Uint8Array(t.buffer);for(let I=0;I<s;I++){const t=I<u?l:f;p[I]=E.slice(d,d+t),w[I]=g.encode(p[I]),d+=t,m=Math.max(m,t)}const y=new Uint8Array(r);let A,C,B=0;for(A=0;A<m;A++)for(C=0;C<s;C++)A<p[C].length&&(y[B++]=p[C][A]);for(A=0;A<h;A++)for(C=0;C<s;C++)y[B++]=w[C][A];return y}(r,t,e)}function wt(t,e,n,r){let o;if(Array.isArray(t))o=gt.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=gt.rawSplit(t);r=lt.getBestVersionForData(e,n)}o=gt.fromString(t,r||40)}}const i=lt.getBestVersionForData(o,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<i)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+i+".\n")}else e=i;const s=pt(e,n,o),a=et.getSymbolSize(e),u=new ot(a);return function(t,e){const n=t.size,r=st.getPositions(e);for(let o=0;o<r.length;o++){const e=r[o][0],i=r[o][1];for(let r=-1;r<=7;r++)if(!(e+r<=-1||n<=e+r))for(let o=-1;o<=7;o++)i+o<=-1||n<=i+o||(r>=0&&r<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===r||6===r)||r>=2&&r<=4&&o>=2&&o<=4?t.set(e+r,i+o,!0,!0):t.set(e+r,i+o,!1,!0))}}(u,e),function(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2==0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}(u),function(t,e){const n=it.getPositions(e);for(let r=0;r<n.length;r++){const e=n[r][0],o=n[r][1];for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)-2===n||2===n||-2===r||2===r||0===n&&0===r?t.set(e+n,o+r,!0,!0):t.set(e+n,o+r,!1,!0)}}(u,e),dt(u,n,0),e>=7&&function(t,e){const n=t.size,r=lt.getEncodedBits(e);let o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+n-8-3,s=1==(r>>a&1),t.set(o,i,s,!0),t.set(i,o,s,!0)}(u,e),function(t,e){const n=t.size;let r=-1,o=n-1,i=7,s=0;for(let a=n-1;a>0;a-=2)for(6===a&&a--;;){for(let n=0;n<2;n++)if(!t.isReserved(o,a-n)){let r=!1;s<e.length&&(r=1==(e[s]>>>i&1)),t.set(o,a-n,r),i--,-1===i&&(s++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}(u,s),isNaN(r)&&(r=at.getBestMask(u,dt.bind(null,u,n))),at.applyMask(r,u),dt(u,n,r),{modules:u,version:e,errorCorrectionLevel:n,maskPattern:r,segments:o}}n.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let n,r,o=nt.M;return void 0!==e&&(o=nt.from(e.errorCorrectionLevel,nt.M),n=lt.from(e.version),r=at.from(e.maskPattern),e.toSJISFunc&&et.setToSJISFunction(e.toSJISFunc)),wt(t,n,o,r)};var mt={},Et={};!function(t){function e(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}t.getOptions=function(t){t||(t={}),t.color||(t.color={});const n=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:n,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},t.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},t.getImageWidth=function(e,n){const r=t.getScale(e,n);return Math.floor((e+2*n.margin)*r)},t.qrToImageData=function(e,n,r){const o=n.modules.size,i=n.modules.data,s=t.getScale(o,r),a=Math.floor((o+2*r.margin)*s),u=r.margin*s,c=[r.color.light,r.color.dark];for(let t=0;t<a;t++)for(let n=0;n<a;n++){let l=4*(t*a+n),f=r.color.light;if(t>=u&&n>=u&&t<a-u&&n<a-u){f=c[i[Math.floor((t-u)/s)*o+Math.floor((n-u)/s)]?1:0]}e[l++]=f.r,e[l++]=f.g,e[l++]=f.b,e[l]=f.a}}}(Et),function(t){const e=Et;t.render=function(t,n,r){let o=r,i=n;void 0!==o||n&&n.getContext||(o=n,n=void 0),n||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=e.getOptions(o);const s=e.getImageWidth(t.modules.size,o),a=i.getContext("2d"),u=a.createImageData(s,s);return e.qrToImageData(u.data,t,o),function(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}(a,i,s),a.putImageData(u,0,0),i},t.renderToDataURL=function(e,n,r){let o=r;void 0!==o||n&&n.getContext||(o=n,n=void 0),o||(o={});const i=t.render(e,n,o),s=o.type||"image/png",a=o.rendererOpts||{};return i.toDataURL(s,a.quality)}}(mt);var yt={};const At=Et;function Ct(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function Bt(t,e,n){let r=t+e;return void 0!==n&&(r+=" "+n),r}yt.render=function(t,e,n){const r=At.getOptions(e),o=t.modules.size,i=t.modules.data,s=o+2*r.margin,a=r.color.light.a?"<path "+Ct(r.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",u="<path "+Ct(r.color.dark,"stroke")+' d="'+function(t,e,n){let r="",o=0,i=!1,s=0;for(let a=0;a<t.length;a++){const u=Math.floor(a%e),c=Math.floor(a/e);u||i||(i=!0),t[a]?(s++,a>0&&u>0&&t[a-1]||(r+=i?Bt("M",u+n,.5+c+n):Bt("m",o,0),o=0,i=!1),u+1<e&&t[a+1]||(r+=Bt("h",s),s=0)):o++}return r}(i,o,r.margin)+'"/>',c='viewBox="0 0 '+s+" "+s+'"',l='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+c+' shape-rendering="crispEdges">'+a+u+"</svg>\n";return"function"==typeof n&&n(null,l),l};const It=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},Mt=n,vt=mt,Tt=yt;function Nt(t,e,n,r,o){const i=[].slice.call(arguments,1),s=i.length,a="function"==typeof i[s-1];if(!a&&!It())throw new Error("Callback required as last argument");if(!a){if(s<1)throw new Error("Too few arguments provided");return 1===s?(n=e,e=r=void 0):2!==s||e.getContext||(r=n,n=e,e=void 0),new Promise((function(o,i){try{const i=Mt.create(n,r);o(t(i,e,r))}catch(s){i(s)}}))}if(s<2)throw new Error("Too few arguments provided");2===s?(o=n,n=e,e=r=void 0):3===s&&(e.getContext&&void 0===o?(o=r,r=void 0):(o=r,r=n,n=e,e=void 0));try{const i=Mt.create(n,r);o(null,t(i,e,r))}catch(u){o(u)}}e.create=Mt.create,e.toCanvas=Nt.bind(null,vt.render),e.toDataURL=Nt.bind(null,vt.renderToDataURL),e.toString=Nt.bind(null,(function(t,e,n){return Tt.render(t,n)}));export{e as b};
