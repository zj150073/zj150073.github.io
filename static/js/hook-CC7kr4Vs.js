var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=Math.pow,i=(t,s,n)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,l=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&i(e,s,t[s]);if(n)for(var s of n(t))a.call(t,s)&&i(e,s,t[s]);return e},c=(e,n)=>t(e,s(n)),u=(e,t,s)=>new Promise(((n,r)=>{var a=e=>{try{i(s.next(e))}catch(t){r(t)}},o=e=>{try{i(s.throw(e))}catch(t){r(t)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(a,o);i((s=s.apply(e,t)).next())}));import{r as h,a as d,p as g,n as p,aX as f,m,g8 as b,$ as w,i as y,e as v,ga as x,aV as k,fh as M,L as S,am as j,bk as T,ah as I,N as C,eq as A,dn as D,et as P,eE as R,F as E}from"./index-07XH1eRd.js";import{_ as O}from"./role.vue_vue_type_script_setup_true_lang-Dife-mwi.js";import{_ as L}from"./index.vue_vue_type_script_setup_true_lang-CcpJ7Ipp.js";import{u as z}from"./user-DNtD0Fqa.js";import{u as F}from"./hooks-DaK0hl85.js";import{R as W}from"./index-BsL8gts0.js";import{e as $,k as N,l as q,m as Y}from"./system-hdjNX1A0.js";import"./index-gq_XZBaU.js";import"./index-BupdMAIo.js";const _=(e,t)=>e.push.apply(e,t),G=e=>e.sort(((e,t)=>e.i-t.i||e.j-t.j)),B=e=>{const t={};let s=1;return e.forEach((e=>{t[e]=s,s+=1})),t};const U={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]},H=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,V=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,Z=/^[A-Z\xbf-\xdf]+$/,X=/^[^a-z\xdf-\xff]+$/,K=/^[a-z\xdf-\xff]+$/,J=/^[^A-Z\xbf-\xdf]+$/,Q=/[a-z\xdf-\xff]/,ee=/[A-Z\xbf-\xdf]/,te=/[^A-Za-z\xbf-\xdf]/gi,se=/^\d+$/,ne=(new Date).getFullYear(),re={recentYear:/19\d\d|200\d|201\d|202\d/g},ae=[" ",",",";",":","|","/","\\","_",".","-"],oe=ae.length;class ie{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return G(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let r=n+5;r<=n+9&&!(r>=e.length);r+=1){const a=e.slice(n,+r+1||9e9),o=s.exec(a);if(null!=o){const e=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);null!=e&&t.push({pattern:"date",token:a,i:n,j:r,separator:o[2],year:e.year,month:e.month,day:e.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=e=>Math.abs(e.year-ne);for(let r=0;r<=Math.abs(e.length-4);r+=1)for(let a=r+3;a<=r+7&&!(a>=e.length);a+=1){const o=e.slice(r,+a+1||9e9);if(s.exec(o)){const e=[],s=o.length;if(U[s].forEach((([t,s])=>{const n=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,t),10),parseInt(o.slice(t,s),10),parseInt(o.slice(s),10)]);null!=n&&e.push(n)})),e.length>0){let s=e[0],i=n(e[0]);e.slice(1).forEach((e=>{const t=n(e);t<i&&(s=e,i=t)})),t.push({pattern:"date",token:o,i:r,j:a,separator:"",year:s.year,month:s.month,day:s.day})}}}return t}filterNoise(e){return e.filter((t=>{let s=!1;const n=e.length;for(let r=0;r<n;r+=1){const n=e[r];if(t!==n&&n.i<=t.i&&n.j>=t.j){s=!0;break}}return!s}))}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let r=0,a=e.length;r<a;r+=1){const a=e[r];if(a>99&&a<1e3||a>2050)return null;a>31&&(s+=1),a>12&&(t+=1),a<=0&&(n+=1)}return s>=2||3===t||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[e,s]=t[n];if(1e3<=e&&e<=2050){const t=this.mapIntegersToDayMonth(s);return null!=t?{year:e,month:t.month,day:t.day}:null}}for(let n=0;n<s;n+=1){const[e,s]=t[n],r=this.mapIntegersToDayMonth(s);if(null!=r)return{year:this.twoToFourDigitYear(e),month:r.month,day:r.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const e=t[s],n=e[0],r=e[1];if(n>=1&&n<=31&&r>=1&&r<=12)return{day:n,month:r}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const le=new Uint32Array(65536),ce=(e,t)=>{if(e.length<t.length){const s=t;t=e,e=s}return 0===t.length?e.length:e.length<=32?((e,t)=>{const s=e.length,n=t.length,r=1<<s-1;let a=-1,o=0,i=s,l=s;for(;l--;)le[e.charCodeAt(l)]|=1<<l;for(l=0;l<n;l++){let e=le[t.charCodeAt(l)];const s=e|o;e|=(e&a)+a^a,o|=~(e|a),a&=e,o&r&&i++,a&r&&i--,o=o<<1|1,a=a<<1|~(s|o),o&=s}for(l=s;l--;)le[e.charCodeAt(l)]=0;return i})(e,t):((e,t)=>{const s=t.length,n=e.length,r=[],a=[],o=Math.ceil(s/32),i=Math.ceil(n/32);for(let p=0;p<o;p++)a[p]=-1,r[p]=0;let l=0;for(;l<i-1;l++){let o=0,i=-1;const c=32*l,u=Math.min(32,n)+c;for(let t=c;t<u;t++)le[e.charCodeAt(t)]|=1<<t;for(let e=0;e<s;e++){const s=le[t.charCodeAt(e)],n=a[e/32|0]>>>e&1,l=r[e/32|0]>>>e&1,c=s|o,u=((s|l)&i)+i^i|s|l;let h=o|~(u|i),d=i&u;h>>>31^n&&(a[e/32|0]^=1<<e),d>>>31^l&&(r[e/32|0]^=1<<e),h=h<<1|n,d=d<<1|l,i=d|~(c|h),o=h&c}for(let t=c;t<u;t++)le[e.charCodeAt(t)]=0}let c=0,u=-1;const h=32*l,d=Math.min(32,n-h)+h;for(let p=h;p<d;p++)le[e.charCodeAt(p)]|=1<<p;let g=n;for(let p=0;p<s;p++){const e=le[t.charCodeAt(p)],s=a[p/32|0]>>>p&1,o=r[p/32|0]>>>p&1,i=e|c,l=((e|o)&u)+u^u|e|o;let h=c|~(l|u),d=u&l;g+=h>>>n-1&1,g-=d>>>n-1&1,h>>>31^s&&(a[p/32|0]^=1<<p),d>>>31^o&&(r[p/32|0]^=1<<p),h=h<<1|s,d=d<<1|o,u=d|~(i|h),c=h&i}for(let p=h;p<d;p++)le[e.charCodeAt(p)]=0;return g})(e,t)},ue=(e,t,s)=>{let n=0;const r=Object.keys(t).find((t=>{const r=((e,t,s)=>{const n=e.length<=t.length,r=e.length<=s;return n||r?Math.ceil(e.length/4):s})(e,t,s);if(Math.abs(e.length-t.length)>r)return!1;const a=ce(e,t),o=a<=r;return o&&(n=a),o}));return r?{levenshteinDistance:n,levenshteinDistanceEntry:r}:{}};var he={a:["4","@"],b:["8"],c:["(","{","[","<"],d:["6","|)"],e:["3"],f:["#"],g:["6","9","&"],h:["#","|-|"],i:["1","!","|"],k:["<","|<"],l:["!","1","|","7"],m:["^^","nn","2n","/\\\\/\\\\"],n:["//"],o:["0","()"],q:["9"],u:["|_|"],s:["$","5"],t:["+","7"],v:["<",">","/"],w:["^/","uu","vv","2u","2v","\\\\/\\\\/"],x:["%","><"],z:["2"]},de={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class ge{constructor(e=[]){this.parents=e,this.children=new Map}addSub(e,...t){const s=e.charAt(0);this.children.has(s)||this.children.set(s,new ge([...this.parents,s]));let n=this.children.get(s);for(let r=1;r<e.length;r+=1){const t=e.charAt(r);n.hasChild(t)||n.addChild(t),n=n.getChild(t)}return n.subs=(n.subs||[]).concat(t),this}getChild(e){return this.children.get(e)}isTerminal(){return!!this.subs}addChild(e){this.hasChild(e)||this.children.set(e,new ge([...this.parents,e]))}hasChild(e){return this.children.has(e)}}var pe=(e,t)=>(Object.entries(e).forEach((([e,s])=>{s.forEach((s=>{t.addSub(s,e)}))})),t);const fe=new class{constructor(){this.matchers={},this.l33tTable=he,this.trieNodeRoot=pe(he,new ge),this.dictionary={userInputs:[]},this.rankedDictionaries={},this.rankedDictionariesMaxWordSize={},this.translations=de,this.graphs={},this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.l33tMaxSubstitutions=100,this.maxLength=256,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable,this.trieNodeRoot=pe(e.l33tTable,new ge)),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),void 0!==e.useLevenshteinDistance&&(this.useLevenshteinDistance=e.useLevenshteinDistance),void 0!==e.levenshteinThreshold&&(this.levenshteinThreshold=e.levenshteinThreshold),void 0!==e.l33tMaxSubstitutions&&(this.l33tMaxSubstitutions=e.l33tMaxSubstitutions),void 0!==e.maxLength&&(this.maxLength=e.maxLength)}setTranslations(e){if(!this.checkCustomTranslations(e))throw new Error("Invalid translations object fallback to keys");this.translations=e}checkCustomTranslations(e){let t=!0;return Object.keys(de).forEach((s=>{if(s in e){const n=s;Object.keys(de[n]).forEach((s=>{s in e[n]||(t=!1)}))}else t=!1})),t}setRankedDictionaries(){const e={},t={};Object.keys(this.dictionary).forEach((s=>{e[s]=B(this.dictionary[s]),t[s]=this.getRankedDictionariesMaxWordSize(this.dictionary[s])})),this.rankedDictionaries=e,this.rankedDictionariesMaxWordSize=t}getRankedDictionariesMaxWordSize(e){const t=e.map((e=>"string"!=typeof e?e.toString().length:e.length));return 0===t.length?0:t.reduce(((e,t)=>Math.max(e,t)),-1/0)}buildSanitizedRankedDictionary(e){const t=[];return e.forEach((e=>{const s=typeof e;"string"!==s&&"number"!==s&&"boolean"!==s||t.push(e.toString().toLowerCase())})),B(t)}extendUserInputsDictionary(e){this.dictionary.userInputs||(this.dictionary.userInputs=[]);const t=[...this.dictionary.userInputs,...e];this.rankedDictionaries.userInputs=this.buildSanitizedRankedDictionary(t),this.rankedDictionariesMaxWordSize.userInputs=this.getRankedDictionariesMaxWordSize(t)}addMatcher(e,t){this.matchers[e]||(this.matchers[e]=t)}};class me{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map((t=>c(l({},t),{token:t.token.split("").reverse().join(""),reversed:!0,i:e.length-1-t.j,j:e.length-1-t.i})))}}class be{constructor({substr:e,limit:t,trieRoot:s}){this.buffer=[],this.finalPasswords=[],this.substr=e,this.limit=t,this.trieRoot=s}getAllPossibleSubsAtIndex(e){const t=[];let s=this.trieRoot;for(let n=e;n<this.substr.length;n+=1){const e=this.substr.charAt(n);if(s=s.getChild(e),!s)break;t.push(s)}return t}helper({onlyFullSub:e,isFullSub:t,index:s,subIndex:n,changes:r,lastSubLetter:a,consecutiveSubCount:o}){if(this.finalPasswords.length>=this.limit)return;if(s===this.substr.length)return void(e===t&&this.finalPasswords.push({password:this.buffer.join(""),changes:r}));const i=[...this.getAllPossibleSubsAtIndex(s)];let l=!1;for(let c=s+i.length-1;c>=s;c-=1){const u=i[c-s];if(u.isTerminal()){if(a===u.parents.join("")&&o>=3)continue;l=!0;const s=u.subs;for(const i of s){this.buffer.push(i);const s=r.concat({i:n,letter:i,substitution:u.parents.join("")});if(this.helper({onlyFullSub:e,isFullSub:t,index:c+1,subIndex:n+i.length,changes:s,lastSubLetter:u.parents.join(""),consecutiveSubCount:a===u.parents.join("")?o+1:1}),this.buffer.pop(),this.finalPasswords.length>=this.limit)return}}}if(!e||!l){const i=this.substr.charAt(s);this.buffer.push(i),this.helper({onlyFullSub:e,isFullSub:t&&!l,index:s+1,subIndex:n+1,changes:r,lastSubLetter:a,consecutiveSubCount:o}),this.buffer.pop()}}getAll(){return this.helper({onlyFullSub:!0,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.helper({onlyFullSub:!1,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.finalPasswords}}class we{constructor(e){this.defaultMatch=e}isAlreadyIncluded(e,t){return e.some((e=>Object.entries(e).every((([e,s])=>"subs"===e||s===t[e]))))}match({password:e}){const t=[],s=((e,t,s)=>new be({substr:e,limit:t,trieRoot:s}).getAll())(e,fe.l33tMaxSubstitutions,fe.trieNodeRoot);let n=!1,r=!0;return s.forEach((s=>{if(n)return;const a=this.defaultMatch({password:s.password,useLevenshtein:r});r=!1,a.forEach((r=>{n||(n=0===r.i&&r.j===e.length-1);const a=((e,t,s)=>{const n=e.changes.filter((e=>e.i<t)).reduce(((e,t)=>e-t.letter.length+t.substitution.length),t),r=e.changes.filter((e=>e.i>=t&&e.i<=s)),a=r.reduce(((e,t)=>e-t.letter.length+t.substitution.length),s-t+n),o=[],i=[];return r.forEach((e=>{o.findIndex((t=>t.letter===e.letter&&t.substitution===e.substitution))<0&&(o.push({letter:e.letter,substitution:e.substitution}),i.push(`${e.substitution} -> ${e.letter}`))})),{i:n,j:a,subs:o,subDisplay:i.join(", ")}})(s,r.i,r.j),o=e.slice(a.i,+a.j+1||9e9),i=l(c(l({},r),{l33t:!0,token:o}),a),u=this.isAlreadyIncluded(t,i);o.toLowerCase()===r.matchedWord||u||t.push(i)}))})),t.filter((e=>e.token.length>1))}}class ye{constructor(){this.l33t=new we(this.defaultMatch),this.reverse=new me(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return G(t)}defaultMatch({password:e,useLevenshtein:t=!0}){const s=[],n=e.length,r=e.toLowerCase();return Object.keys(fe.rankedDictionaries).forEach((a=>{const o=fe.rankedDictionaries[a],i=fe.rankedDictionariesMaxWordSize[a],c=Math.min(i,n);for(let u=0;u<n;u+=1){const i=Math.min(u+c,n);for(let c=u;c<i;c+=1){const i=r.slice(u,+c+1||9e9),h=i in o;let d={};const g=0===u&&c===n-1;fe.useLevenshteinDistance&&g&&!h&&t&&(d=ue(i,o,fe.levenshteinThreshold));const p=0!==Object.keys(d).length;if(h||p){const t=o[p?d.levenshteinDistanceEntry:i];s.push(l({pattern:"dictionary",i:u,j:c,token:e.slice(u,+c+1||9e9),matchedWord:i,rank:t,dictionaryName:a,reversed:!1,l33t:!1},d))}}}})),s}}class ve{match({password:e,regexes:t=re}){const s=[];return Object.keys(t).forEach((n=>{const r=t[n];let a;for(r.lastIndex=0;a=r.exec(e);)if(a){const e=a[0];s.push({pattern:"regex",token:e,i:a.index,j:a.index+a[0].length-1,regexName:n,regexMatch:a})}})),G(s)}}var xe={nCk(e,t){let s=e;if(t>s)return 0;if(0===t)return 1;let n=1;for(let r=1;r<=t;r+=1)n*=s,n/=r,s-=1;return n},log10:e=>0===e?0:Math.log(e)/Math.log(10),log2:e=>Math.log(e)/Math.log(2),factorial(e){let t=1;for(let s=2;s<=e;s+=1)t*=s;return t}};var ke=e=>{const t=e.replace(te,"");if(t.match(J)||t.toLowerCase()===t)return 1;const s=[H,V,X],n=s.length;for(let r=0;r<n;r+=1){const e=s[r];if(t.match(e))return 2}return(e=>{const t=e.split(""),s=t.filter((e=>e.match(ee))).length,n=t.filter((e=>e.match(Q))).length;let r=0;const a=Math.min(s,n);for(let o=1;o<=a;o+=1)r+=xe.nCk(s+n,o);return r})(t)};const Me=(e,t)=>{let s=0,n=e.indexOf(t);for(;n>=0;)s+=1,n=e.indexOf(t,n+t.length);return s};var Se=({l33t:e,subs:t,token:s})=>{if(!e)return 1;let n=1;return t.forEach((e=>{const{subbedCount:t,unsubbedCount:r}=(({sub:e,token:t})=>{const s=t.toLowerCase();return{subbedCount:Me(s,e.substitution),unsubbedCount:Me(s,e.letter)}})({sub:e,token:s});if(0===t||0===r)n*=2;else{const e=Math.min(r,t);let s=0;for(let n=1;n<=e;n+=1)s+=xe.nCk(r+t,n);n*=s}})),n};const je=({token:e,graph:t,turns:s})=>{const n=Object.keys(fe.graphs[t]).length,r=(e=>{let t=0;return Object.keys(e).forEach((s=>{const n=e[s];t+=n.filter((e=>!!e)).length})),t/=Object.entries(e).length,t})(fe.graphs[t]);let a=0;const i=e.length;for(let l=2;l<=i;l+=1){const e=Math.min(s,l-1);for(let t=1;t<=e;t+=1)a+=xe.nCk(l-1,t-1)*n*o(r,t)}return a};const Te={bruteforce:({token:e})=>{let t,s=o(10,e.length);return s===Number.POSITIVE_INFINITY&&(s=Number.MAX_VALUE),t=1===e.length?11:51,Math.max(s,t)},date:({year:e,separator:t})=>{let s=365*Math.max(Math.abs(e-ne),20);return t&&(s*=4),s},dictionary:({rank:e,reversed:t,l33t:s,subs:n,token:r,dictionaryName:a})=>{const i=e,l=ke(r),c=Se({l33t:s,subs:n,token:r}),u=t?2:1;let h;return h="diceware"===a?o(6,5)/2:i*l*c*u,{baseGuesses:i,uppercaseVariations:l,l33tVariations:c,calculation:h}},regex:({regexName:e,regexMatch:t,token:s})=>{const n={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};return e in n?o(n[e],s.length):"recentYear"===e?Math.max(Math.abs(parseInt(t[0],10)-ne),20):0},repeat:({baseGuesses:e,repeatCount:t})=>e*t,sequence:({token:e,ascending:t})=>{const s=e.charAt(0);let n=0;return n=["a","A","z","Z","0","1","9"].includes(s)?4:s.match(/\d/)?10:26,t||(n*=2),n*e.length},spatial:({graph:e,token:t,shiftedCount:s,turns:n})=>{let r=je({token:t,graph:e,turns:n});if(s){const e=t.length-s;if(0===s||0===e)r*=2;else{let t=0;for(let n=1;n<=Math.min(s,e);n+=1)t+=xe.nCk(s+e,n);r*=t}}return Math.round(r)},separator:()=>oe};var Ie=(e,t)=>{const s={};if("guesses"in e&&null!=e.guesses)return e;const n=((e,t)=>{let s=1;return e.token.length<t.length&&(s=1===e.token.length?10:50),s})(e,t),r=((e,t)=>Te[e]?Te[e](t):fe.matchers[e]&&"scoring"in fe.matchers[e]?fe.matchers[e].scoring(t):0)(e.pattern,e);let a=0;"number"==typeof r?a=r:"dictionary"===e.pattern&&(a=r.calculation,s.baseGuesses=r.baseGuesses,s.uppercaseVariations=r.uppercaseVariations,s.l33tVariations=r.l33tVariations);const o=Math.max(a,n);return c(l(l({},e),s),{guesses:o,guessesLog10:xe.log10(o)})};const Ce={password:"",optimal:{},excludeAdditive:!1,separatorRegex:void 0,fillArray(e,t){const s=[];for(let n=0;n<e;n+=1){let e=[];"object"===t&&(e={}),s.push(e)}return s},makeBruteforceMatch(e,t){return{pattern:"bruteforce",token:this.password.slice(e,+t+1||9e9),i:e,j:t}},update(e,t){const s=e.j,n=Ie(e,this.password);let r=n.guesses;t>1&&(r*=this.optimal.pi[n.i-1][t-1]);let a=xe.factorial(t)*r;this.excludeAdditive||(a+=o(1e4,t-1));let i=!1;Object.keys(this.optimal.g[s]).forEach((e=>{const n=this.optimal.g[s][e];parseInt(e,10)<=t&&n<=a&&(i=!0)})),i||(this.optimal.g[s][t]=a,this.optimal.m[s][t]=n,this.optimal.pi[s][t]=r)},bruteforceUpdate(e){let t=this.makeBruteforceMatch(0,e);this.update(t,1);for(let s=1;s<=e;s+=1){t=this.makeBruteforceMatch(s,e);const n=this.optimal.m[s-1];Object.keys(n).forEach((e=>{"bruteforce"!==n[e].pattern&&this.update(t,parseInt(e,10)+1)}))}},unwind(e){const t=[];let s=e-1,n=0,r=1/0;const a=this.optimal.g[s];for(a&&Object.keys(a).forEach((e=>{const t=a[e];t<r&&(n=parseInt(e,10),r=t)}));s>=0;){const e=this.optimal.m[s][n];t.unshift(e),s=e.i-1,n-=1}return t}};var Ae={mostGuessableMatchSequence(e,t,s=!1){Ce.password=e,Ce.excludeAdditive=s;const n=e.length;let r=Ce.fillArray(n,"array");t.forEach((e=>{r[e.j].push(e)})),r=r.map((e=>e.sort(((e,t)=>e.i-t.i)))),Ce.optimal={m:Ce.fillArray(n,"object"),pi:Ce.fillArray(n,"object"),g:Ce.fillArray(n,"object")};for(let l=0;l<n;l+=1)r[l].forEach((e=>{e.i>0?Object.keys(Ce.optimal.m[e.i-1]).forEach((t=>{Ce.update(e,parseInt(t,10)+1)})):Ce.update(e,1)})),Ce.bruteforceUpdate(l);const a=Ce.unwind(n),o=a.length,i=this.getGuesses(e,o);return{password:e,guesses:i,guessesLog10:xe.log10(i),sequence:a}},getGuesses(e,t){const s=e.length;let n=0;return n=0===e.length?1:Ce.optimal.g[s-1][t],n}};class De{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const r=this.getGreedyMatch(e,n),a=this.getLazyMatch(e,n);if(null==r)break;const{match:o,baseToken:i}=this.setMatchToken(r,a);if(o){const e=o.index+o[0].length-1,r=this.getBaseGuesses(i,t);s.push(this.normalizeMatch(i,e,o,r)),n=e+1}}return s.some((e=>e instanceof Promise))?Promise.all(s):s}normalizeMatch(e,t,s,n){const r={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return n instanceof Promise?n.then((e=>c(l({},r),{baseGuesses:e}))):c(l({},r),{baseGuesses:n})}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let n,r="";if(t&&e[0].length>t[0].length){n=e;const t=s.exec(n[0]);t&&(r=t[1])}else n=t,n&&(r=n[1]);return{match:n,baseToken:r}}getBaseGuesses(e,t){const s=t.match(e);if(s instanceof Promise)return s.then((t=>Ae.mostGuessableMatchSequence(e,t).guesses));return Ae.mostGuessableMatchSequence(e,s).guesses}}class Pe{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(1===e.length)return[];let s=0,n=null;const r=e.length;for(let a=1;a<r;a+=1){const r=e.charCodeAt(a)-e.charCodeAt(a-1);if(null==n&&(n=r),r!==n){const o=a-1;this.update({i:s,j:o,delta:n,password:e,result:t}),s=o,n=r}}return this.update({i:s,j:r-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:r}){if(t-e>1||1===Math.abs(s)){const a=Math.abs(s);if(a>0&&a<=this.MAX_DELTA){const a=n.slice(e,+t+1||9e9),{sequenceName:o,sequenceSpace:i}=this.getSequence(a);return r.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:o,sequenceSpace:i,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return K.test(e)?(t="lower",s=26):Z.test(e)?(t="upper",s=26):se.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class Re{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(fe.graphs).forEach((s=>{const n=fe.graphs[s];_(t,this.helper(e,n,s))})),G(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const r=[];let a=0;const o=e.length;for(;a<o-1;){let i=a+1,l=null,c=0;for(n=this.checkIfShifted(s,e,a);;){const u=t[e.charAt(i-1)]||[];let h=!1,d=-1,g=-1;if(i<o){const t=e.charAt(i),s=u.length;for(let e=0;e<s;e+=1){const s=u[e];if(g+=1,s){const e=s.indexOf(t);if(-1!==e){h=!0,d=g,1===e&&(n+=1),l!==d&&(c+=1,l=d);break}}}}if(!h){i-a>2&&r.push({pattern:"spatial",i:a,j:i-1,token:e.slice(a,i),graph:s,turns:c,shiftedCount:n}),a=i;break}i+=1}}return r}}const Ee=new RegExp(`[${ae.join("")}]`);class Oe{static getMostUsedSeparatorChar(e){const t=[...e.split("").filter((e=>Ee.test(e))).reduce(((e,t)=>{const s=e.get(t);return s?e.set(t,s+1):e.set(t,1),e}),new Map).entries()].sort((([e,t],[s,n])=>n-t));if(!t.length)return;const s=t[0];return s[1]<2?void 0:s[0]}static getSeparatorRegex(e){return new RegExp(`([^${e}\n])(${e})(?!${e})`,"g")}match({password:e}){const t=[];if(0===e.length)return t;const s=Oe.getMostUsedSeparatorChar(e);if(void 0===s)return t;const n=Oe.getSeparatorRegex(s);for(const r of e.matchAll(n)){if(void 0===r.index)continue;const e=r.index+1;t.push({pattern:"separator",token:s,i:e,j:e})}return t}}class Le{constructor(){this.matchers={date:ie,dictionary:ye,regex:ve,repeat:De,sequence:Pe,spatial:Re,separator:Oe}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(fe.matchers)].forEach((n=>{if(!this.matchers[n]&&!fe.matchers[n])return;const r=(new(this.matchers[n]?this.matchers[n]:fe.matchers[n].Matching)).match({password:e,omniMatch:this});r instanceof Promise?(r.then((e=>{_(t,e)})),s.push(r)):_(t,r)})),s.length>0?new Promise(((e,n)=>{Promise.all(s).then((()=>{e(G(t))})).catch((e=>{n(e)}))})):G(t)}}const ze=2678400,Fe=32140800,We={second:1,minute:60,hour:3600,day:86400,month:ze,year:Fe,century:100*Fe};class $e{translate(e,t){let s=e;void 0!==t&&1!==t&&(s+="s");const{timeEstimation:n}=fe.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/(100/3600),onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach((e=>{const n=t[e];s[e]=this.displayTime(n)})),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1005?0:e<1000005?1:e<100000005?2:e<10000000005?3:4}displayTime(e){let t,s="centuries";const n=Object.keys(We),r=n.findIndex((t=>e<We[t]));return r>-1&&(s=n[r-1],0!==r?t=Math.round(e/We[s]):s="ltSecond"),this.translate(s,t)}}var Ne=()=>null,qe=()=>({warning:fe.translations.warnings.dates,suggestions:[fe.translations.suggestions.dates]});const Ye=(e,t)=>{let s=null;const n=e.dictionaryName,r="lastnames"===n||n.toLowerCase().includes("firstnames");return"passwords"===n?s=((e,t)=>{let s=null;return!t||e.l33t||e.reversed?e.guessesLog10<=4&&(s=fe.translations.warnings.similarToCommon):s=e.rank<=10?fe.translations.warnings.topTen:e.rank<=100?fe.translations.warnings.topHundred:fe.translations.warnings.common,s})(e,t):n.includes("wikipedia")?s=((e,t)=>{let s=null;return t&&(s=fe.translations.warnings.wordByItself),s})(0,t):r?s=((e,t)=>t?fe.translations.warnings.namesByThemselves:fe.translations.warnings.commonNames)(0,t):"userInputs"===n&&(s=fe.translations.warnings.userInputs),s};var _e=(e,t)=>{const s=Ye(e,t),n=[],r=e.token;return r.match(H)?n.push(fe.translations.suggestions.capitalization):r.match(X)&&r.toLowerCase()!==r&&n.push(fe.translations.suggestions.allUppercase),e.reversed&&e.token.length>=4&&n.push(fe.translations.suggestions.reverseWords),e.l33t&&n.push(fe.translations.suggestions.l33t),{warning:s,suggestions:n}},Ge=e=>"recentYear"===e.regexName?{warning:fe.translations.warnings.recentYears,suggestions:[fe.translations.suggestions.recentYears,fe.translations.suggestions.associatedYears]}:{warning:null,suggestions:[]},Be=e=>{let t=fe.translations.warnings.extendedRepeat;return 1===e.baseToken.length&&(t=fe.translations.warnings.simpleRepeat),{warning:t,suggestions:[fe.translations.suggestions.repeated]}},Ue=()=>({warning:fe.translations.warnings.sequences,suggestions:[fe.translations.suggestions.sequences]}),He=e=>{let t=fe.translations.warnings.keyPattern;return 1===e.turns&&(t=fe.translations.warnings.straightRow),{warning:t,suggestions:[fe.translations.suggestions.longerKeyboardPattern]}},Ve=()=>null;const Ze={warning:null,suggestions:[]};class Xe{constructor(){this.matchers={bruteforce:Ne,date:qe,dictionary:_e,regex:Ge,repeat:Be,sequence:Ue,spatial:He,separator:Ve},this.defaultFeedback={warning:null,suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(fe.translations.suggestions.useWords,fe.translations.suggestions.noNeed)}getFeedback(e,t){if(0===t.length)return this.defaultFeedback;if(e>2)return Ze;const s=fe.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let r=this.getMatchFeedback(n,1===t.length);return null!=r?r.suggestions.unshift(s):r={warning:null,suggestions:[s]},r}getLongestMatch(e){let t=e[0];return e.slice(1).forEach((e=>{e.token.length>t.token.length&&(t=e)})),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):fe.matchers[e.pattern]&&"feedback"in fe.matchers[e.pattern]?fe.matchers[e.pattern].feedback(e,t):Ze}}const Ke=()=>(new Date).getTime(),Je=(e,t)=>{const s=Ke(),n=(e=>(new Le).match(e))(e);if(n instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return((e,t,s)=>{const n=new Xe,r=new $e,a=Ae.mostGuessableMatchSequence(t,e),o=Ke()-s,i=r.estimateAttackTimes(a.guesses);return c(l(l({calcTime:o},a),i),{feedback:n.getFeedback(i.score,a.sequence)})})(n,e,s)};function Qe(e,t){const s=h({deptId:"",username:"",phone:"",status:""}),n=d(),r=d(),a=d([]),o=d(!0),i=d(),l=d({}),{switchStyle:c}=F(),_=d(),G=d([]),B=d(!0),U=d(0),H=h({total:0,pageSize:10,currentPage:1,background:!0}),V=[{label:"勾选列",type:"selection",fixed:"left",reserveSelection:!0},{label:"用户编号",prop:"id",width:90},{label:"用户头像",prop:"avatar",cellRenderer:({row:e})=>y(v("el-image"),{fit:"cover","preview-teleported":!0,src:e.avatar||z,"preview-src-list":Array.of(e.avatar||z),class:"w-[24px] h-[24px] rounded-full align-middle"},null),width:90},{label:"用户名称",prop:"username",minWidth:130},{label:"用户昵称",prop:"nickname",minWidth:130},{label:"性别",prop:"sex",minWidth:90,cellRenderer:({row:e,props:t})=>y(v("el-tag"),{size:t.size,type:1===e.sex?"danger":null,effect:"plain"},{default:()=>[1===e.sex?"女":"男"]})},{label:"部门",prop:"dept.name",minWidth:90},{label:"手机号码",prop:"phone",minWidth:90,formatter:({phone:e})=>x(e,{start:3,end:6})},{label:"状态",prop:"status",minWidth:90,cellRenderer:e=>{var t;return y(v("el-switch"),{size:"small"===e.props.size?"small":"default",loading:null==(t=l.value[e.index])?void 0:t.loading,modelValue:e.row.status,"onUpdate:modelValue":t=>e.row.status=t,"active-value":1,"inactive-value":0,"active-text":"已启用","inactive-text":"已停用","inline-prompt":!0,style:c.value,onChange:()=>function({row:e,index:t}){M.confirm(`确认要<strong>${0===e.status?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${e.username}</strong>用户吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then((()=>{l.value[t]=Object.assign({},l.value[t],{loading:!0}),setTimeout((()=>{l.value[t]=Object.assign({},l.value[t],{loading:!1}),S("已成功修改用户状态",{type:"success"})}),300)})).catch((()=>{0===e.status?e.status=1:e.status=0}))}(e)},null)}},{label:"创建时间",minWidth:90,prop:"createTime",formatter:({createTime:e})=>k(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:180,slot:"operation"}],Z=g((()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"])),X=h({newPwd:""}),K=[{color:"#e74242",text:"非常弱"},{color:"#EFBD47",text:"弱"},{color:"#ffa500",text:"一般"},{color:"#1bbf1b",text:"强"},{color:"#008000",text:"非常强"}],J=d(),Q=d([]);function ee(){return u(this,null,(function*(){o.value=!0;const{data:e}=yield q(T(s));a.value=e.list,H.total=e.total,H.pageSize=e.pageSize,H.currentPage=e.currentPage,setTimeout((()=>{o.value=!1}),500)}))}function te(e){if(!e||!e.length)return;const t=[];for(let s=0;s<e.length;s++)e[s].disabled=0===e[s].status,te(e[s].children),t.push(e[s]);return t}const se=d();return p(X,(({newPwd:e})=>J.value=f(e)?-1:Je(e).score)),m((()=>u(this,null,(function*(){B.value=!0,ee();const{data:e}=yield $();_.value=b(e),G.value=b(e),B.value=!1,Q.value=(yield N()).data})))),{form:s,loading:o,columns:V,dataList:a,treeData:G,treeLoading:B,selectedNum:U,pagination:H,buttonClass:Z,deviceDetection:w,onSearch:ee,resetForm:e=>{e&&(e.resetFields(),s.deptId="",t.value.onTreeReset(),ee())},onbatchDel:function(){const t=e.value.getTableRef().getSelectionRows();S(`已删除用户编号为 ${j(t,"id")} 的数据`,{type:"success"}),e.value.getTableRef().clearSelection(),ee()},openDialog:function(e="新增",t){var s,r,a,o,i,l,c,u,h;I({title:`${e}用户`,props:{formInline:{title:e,higherDeptOptions:te(_.value),parentId:null!=(s=null==t?void 0:t.dept.id)?s:0,nickname:null!=(r=null==t?void 0:t.nickname)?r:"",username:null!=(a=null==t?void 0:t.username)?a:"",password:null!=(o=null==t?void 0:t.password)?o:"",phone:null!=(i=null==t?void 0:t.phone)?i:"",email:null!=(l=null==t?void 0:t.email)?l:"",sex:null!=(c=null==t?void 0:t.sex)?c:"",status:null!=(u=null==t?void 0:t.status)?u:1,remark:null!=(h=null==t?void 0:t.remark)?h:""}},width:"46%",draggable:!0,fullscreen:w(),fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>C(L,{ref:n}),beforeSure:(t,{options:s})=>{const r=n.value.getRef(),a=s.props.formInline;function o(){S(`您${e}了用户名称为${a.username}的这条数据`,{type:"success"}),t(),ee()}r.validate((e=>{e&&o()}))}})},onTreeSelect:function({id:e,selected:t}){s.deptId=t?e:"",ee()},handleUpdate:function(e){},handleDelete:function(e){S(`您删除了用户编号为${e.id}的这条数据`,{type:"success"}),ee()},handleUpload:function(e){I({title:"裁剪、上传头像",width:"40%",closeOnClickModal:!1,fullscreen:w(),contentRenderer:()=>C(W,{ref:se,imgSrc:e.avatar||z,onCropper:e=>i.value=e}),beforeSure:e=>{e(),ee()},closeCallBack:()=>se.value.hidePopover()})},handleReset:function(e){I({title:`重置 ${e.username} 用户的密码`,width:"30%",draggable:!0,closeOnClickModal:!1,fullscreen:w(),contentRenderer:()=>y(E,null,[y(A,{ref:r,model:X},{default:()=>[y(D,{prop:"newPwd",rules:[{required:!0,message:"请输入新密码",trigger:"blur"}]},{default:()=>[y(P,{clearable:!0,"show-password":!0,type:"password",modelValue:X.newPwd,"onUpdate:modelValue":e=>X.newPwd=e,placeholder:"请输入新密码"},null)]})]}),y("div",{class:"mt-4 flex"},[K.map((({color:e,text:t},s)=>y("div",{class:"w-[19vw]",style:{marginLeft:0!==s?"4px":0}},[y(R,{striped:!0,"striped-flow":!0,duration:J.value===s?6:0,percentage:J.value>=s?100:0,color:e,"stroke-width":10,"show-text":!1},null),y("p",{class:"text-center",style:{color:J.value===s?e:""}},[t])])))])]),closeCallBack:()=>X.newPwd="",beforeSure:t=>{r.value.validate((s=>{s&&(S(`已成功重置 ${e.username} 用户的密码`,{type:"success"}),t(),ee())}))}})},handleRole:function(e){return u(this,null,(function*(){var t,s,n,r;const a=null!=(t=(yield Y({userId:e.id})).data)?t:[];I({title:`分配 ${e.username} 用户的角色`,props:{formInline:{username:null!=(s=null==e?void 0:e.username)?s:"",nickname:null!=(n=null==e?void 0:e.nickname)?n:"",roleOptions:null!=(r=Q.value)?r:[],ids:a}},width:"400px",draggable:!0,fullscreen:w(),fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>C(O),beforeSure:(e,{options:t})=>{t.props.formInline,e()}})}))},handleSizeChange:function(e){},onSelectionCancel:function(){U.value=0,e.value.getTableRef().clearSelection()},handleCurrentChange:function(e){},handleSelectionChange:function(t){U.value=t.length,e.value.setAdaptive()}}}export{Qe as useUser};
