var e,_,t,n,l,o,r,u,i,s,f={},c=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,a=Array.isArray;function d(e,_){for(var t in _)e[t]=_[t];return e}function h(e){var _=e.parentNode;_&&_.removeChild(e)}function v(_,t,n){var l,o,r,u={};for(r in t)"key"==r?l=t[r]:"ref"==r?o=t[r]:u[r]=t[r];if(arguments.length>2&&(u.children=arguments.length>3?e.call(arguments,2):n),"function"==typeof _&&null!=_.defaultProps)for(r in _.defaultProps)void 0===u[r]&&(u[r]=_.defaultProps[r]);return y(_,u,l,o,null)}function y(e,n,l,o,r){var u={type:e,props:n,key:l,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++t:r,__i:-1,__u:0};return null==r&&null!=_.vnode&&_.vnode(u),u}function g(e){return e.children}function m(e,_){this.props=e,this.context=_}function b(e,_){if(null==_)return e.__?b(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if(null!=(t=e.__k[_])&&null!=t.__e)return t.__e;return"function"==typeof e.type?b(e):null}function k(e){var _,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if(null!=(t=e.__k[_])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return k(e)}}function w(e){(!e.__d&&(e.__d=!0)&&n.push(e)&&!x.__r++||l!==_.debounceRendering)&&((l=_.debounceRendering)||o)(x)}function x(){var e,t,l,o,u,i,s,f;for(n.sort(r);e=n.shift();)e.__d&&(t=n.length,o=void 0,i=(u=(l=e).__v).__e,s=[],f=[],l.__P&&((o=d({},u)).__v=u.__v+1,_.vnode&&_.vnode(o),U(l.__P,o,u,l.__n,l.__P.namespaceURI,32&u.__u?[i]:null,s,null==i?b(u):i,!!(32&u.__u),f),o.__v=u.__v,o.__.__k[o.__i]=o,L(s,o,f),o.__e!=i&&k(o)),n.length>t&&n.sort(r));x.__r=0}function S(e,_,t,n,l,o,r,u,i,s,p){var d,h,v,m,k,w=n&&n.__k||c,x=_.length;for(t.__d=i,function(e,_,t){var n,l,o,r,u,i=_.length,s=t.length,f=s,c=0;for(e.__k=[],n=0;n<i;n++)r=n+c,null!=(l=e.__k[n]=null==(l=_[n])||"boolean"==typeof l||"function"==typeof l?null:"string"==typeof l||"number"==typeof l||"bigint"==typeof l||l.constructor==String?y(null,l,null,null,null):a(l)?y(g,{children:l},null,null,null):void 0===l.constructor&&l.__b>0?y(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l)?(l.__=e,l.__b=e.__b+1,u=C(l,t,r,f),l.__i=u,o=null,-1!==u&&(f--,(o=t[u])&&(o.__u|=131072)),null==o||null===o.__v?(-1==u&&c--,"function"!=typeof l.type&&(l.__u|=65536)):u!==r&&(u==r-1?c--:u==r+1?c++:u>r?f>i-r?c+=u-r:c--:u<r&&(u==r-c?c-=u-r:c++),u!==n+c&&(l.__u|=65536))):(o=t[r])&&null==o.key&&o.__e&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=b(o)),F(o,o,!1),t[r]=null,f--);if(f)for(n=0;n<s;n++)null!=(o=t[n])&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=b(o)),F(o,o))}(t,_,w),i=t.__d,d=0;d<x;d++)null!=(v=t.__k[d])&&"boolean"!=typeof v&&"function"!=typeof v&&(h=-1===v.__i?f:w[v.__i]||f,v.__i=d,U(e,v,h,l,o,r,u,i,s,p),m=v.__e,v.ref&&h.ref!=v.ref&&(h.ref&&E(h.ref,null,v),p.push(v.ref,v.__c||m,v)),null==k&&null!=m&&(k=m),65536&v.__u||h.__k===v.__k?i=P(v,i,e):"function"==typeof v.type&&void 0!==v.__d?i=v.__d:m&&(i=m.nextSibling),v.__d=void 0,v.__u&=-196609);t.__d=i,t.__e=k}function P(e,_,t){var n,l;if("function"==typeof e.type){for(n=e.__k,l=0;n&&l<n.length;l++)n[l]&&(n[l].__=e,_=P(n[l],_,t));return _}e.__e!=_&&(_&&e.type&&!t.contains(_)&&(_=b(e)),t.insertBefore(e.__e,_||null),_=e.__e);do{_=_&&_.nextSibling}while(null!=_&&8===_.nodeType);return _}function C(e,_,t,n){var l=e.key,o=e.type,r=t-1,u=t+1,i=_[t];if(null===i||i&&l==i.key&&o===i.type&&!(131072&i.__u))return t;if(n>(null==i||131072&i.__u?0:1))for(;r>=0||u<_.length;){if(r>=0){if((i=_[r])&&!(131072&i.__u)&&l==i.key&&o===i.type)return r;r--}if(u<_.length){if((i=_[u])&&!(131072&i.__u)&&l==i.key&&o===i.type)return u;u++}}return-1}function T(e,_,t){"-"===_[0]?e.setProperty(_,null==t?"":t):e[_]=null==t?"":"number"!=typeof t||p.test(_)?t:t+"px"}function D(e,_,t,n,l){var o;e:if("style"===_)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof n&&(e.style.cssText=n=""),n)for(_ in n)t&&_ in t||T(e.style,_,"");if(t)for(_ in t)n&&t[_]===n[_]||T(e.style,_,t[_])}else if("o"===_[0]&&"n"===_[1])o=_!==(_=_.replace(/(PointerCapture)$|Capture$/i,"$1")),_=_.toLowerCase()in e||"onFocusOut"===_||"onFocusIn"===_?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+o]=t,t?n?t.u=n.u:(t.u=u,e.addEventListener(_,o?s:i,o)):e.removeEventListener(_,o?s:i,o);else{if("http://www.w3.org/2000/svg"==l)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=_&&"height"!=_&&"href"!=_&&"list"!=_&&"form"!=_&&"tabIndex"!=_&&"download"!=_&&"rowSpan"!=_&&"colSpan"!=_&&"role"!=_&&"popover"!=_&&_ in e)try{e[_]=null==t?"":t;break e}catch(r){}"function"==typeof t||(null==t||!1===t&&"-"!==_[4]?e.removeAttribute(_):e.setAttribute(_,"popover"==_&&1==t?"":t))}}function M(e){return function(t){if(this.l){var n=this.l[t.type+e];if(null==t.t)t.t=u++;else if(t.t<n.u)return;return n(_.event?_.event(t):t)}}}function U(t,n,l,o,r,u,i,s,c,p){var v,y,k,w,x,P,C,T,M,U,L,E,F,H,N,A,I=n.type;if(void 0!==n.constructor)return null;128&l.__u&&(c=!!(32&l.__u),u=[s=n.__e=l.__e]),(v=_.__b)&&v(n);e:if("function"==typeof I)try{if(T=n.props,M="prototype"in I&&I.prototype.render,U=(v=I.contextType)&&o[v.__c],L=v?U?U.props.value:v.__:o,l.__c?C=(y=n.__c=l.__c).__=y.__E:(M?n.__c=y=new I(T,L):(n.__c=y=new m(T,L),y.constructor=I,y.render=W),U&&U.sub(y),y.props=T,y.state||(y.state={}),y.context=L,y.__n=o,k=y.__d=!0,y.__h=[],y._sb=[]),M&&null==y.__s&&(y.__s=y.state),M&&null!=I.getDerivedStateFromProps&&(y.__s==y.state&&(y.__s=d({},y.__s)),d(y.__s,I.getDerivedStateFromProps(T,y.__s))),w=y.props,x=y.state,y.__v=n,k)M&&null==I.getDerivedStateFromProps&&null!=y.componentWillMount&&y.componentWillMount(),M&&null!=y.componentDidMount&&y.__h.push(y.componentDidMount);else{if(M&&null==I.getDerivedStateFromProps&&T!==w&&null!=y.componentWillReceiveProps&&y.componentWillReceiveProps(T,L),!y.__e&&(null!=y.shouldComponentUpdate&&!1===y.shouldComponentUpdate(T,y.__s,L)||n.__v===l.__v)){for(n.__v!==l.__v&&(y.props=T,y.state=y.__s,y.__d=!1),n.__e=l.__e,n.__k=l.__k,n.__k.forEach((function(e){e&&(e.__=n)})),E=0;E<y._sb.length;E++)y.__h.push(y._sb[E]);y._sb=[],y.__h.length&&i.push(y);break e}null!=y.componentWillUpdate&&y.componentWillUpdate(T,y.__s,L),M&&null!=y.componentDidUpdate&&y.__h.push((function(){y.componentDidUpdate(w,x,P)}))}if(y.context=L,y.props=T,y.__P=t,y.__e=!1,F=_.__r,H=0,M){for(y.state=y.__s,y.__d=!1,F&&F(n),v=y.render(y.props,y.state,y.context),N=0;N<y._sb.length;N++)y.__h.push(y._sb[N]);y._sb=[]}else do{y.__d=!1,F&&F(n),v=y.render(y.props,y.state,y.context),y.state=y.__s}while(y.__d&&++H<25);y.state=y.__s,null!=y.getChildContext&&(o=d(d({},o),y.getChildContext())),M&&!k&&null!=y.getSnapshotBeforeUpdate&&(P=y.getSnapshotBeforeUpdate(w,x)),S(t,a(A=null!=v&&v.type===g&&null==v.key?v.props.children:v)?A:[A],n,l,o,r,u,i,s,c,p),y.base=n.__e,n.__u&=-161,y.__h.length&&i.push(y),C&&(y.__E=y.__=null)}catch(R){if(n.__v=null,c||null!=u){for(n.__u|=c?160:32;s&&8===s.nodeType&&s.nextSibling;)s=s.nextSibling;u[u.indexOf(s)]=null,n.__e=s}else n.__e=l.__e,n.__k=l.__k;_.__e(R,n,l)}else null==u&&n.__v===l.__v?(n.__k=l.__k,n.__e=l.__e):n.__e=function(_,t,n,l,o,r,u,i,s){var c,p,d,v,y,g,m,k=n.props,w=t.props,x=t.type;if("svg"===x?o="http://www.w3.org/2000/svg":"math"===x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(c=0;c<r.length;c++)if((y=r[c])&&"setAttribute"in y==!!x&&(x?y.localName===x:3===y.nodeType)){_=y,r[c]=null;break}if(null==_){if(null===x)return document.createTextNode(w);_=document.createElementNS(o,x,w.is&&w),r=null,i=!1}if(null===x)k===w||i&&_.data===w||(_.data=w);else{if(r=r&&e.call(_.childNodes),k=n.props||f,!i&&null!=r)for(k={},c=0;c<_.attributes.length;c++)k[(y=_.attributes[c]).name]=y.value;for(c in k)if(y=k[c],"children"==c);else if("dangerouslySetInnerHTML"==c)d=y;else if("key"!==c&&!(c in w)){if("value"==c&&"defaultValue"in w||"checked"==c&&"defaultChecked"in w)continue;D(_,c,null,y,o)}for(c in w)y=w[c],"children"==c?v=y:"dangerouslySetInnerHTML"==c?p=y:"value"==c?g=y:"checked"==c?m=y:"key"===c||i&&"function"!=typeof y||k[c]===y||D(_,c,y,k[c],o);if(p)i||d&&(p.__html===d.__html||p.__html===_.innerHTML)||(_.innerHTML=p.__html),t.__k=[];else if(d&&(_.innerHTML=""),S(_,a(v)?v:[v],t,n,l,"foreignObject"===x?"http://www.w3.org/1999/xhtml":o,r,u,r?r[0]:n.__k&&b(n,0),i,s),null!=r)for(c=r.length;c--;)null!=r[c]&&h(r[c]);i||(c="value",void 0!==g&&(g!==_[c]||"progress"===x&&!g||"option"===x&&g!==k[c])&&D(_,c,g,k[c],o),c="checked",void 0!==m&&m!==_[c]&&D(_,c,m,k[c],o))}return _}(l.__e,n,l,o,r,u,i,c,p);(v=_.diffed)&&v(n)}function L(e,t,n){t.__d=void 0;for(var l=0;l<n.length;l++)E(n[l],n[++l],n[++l]);_.__c&&_.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(n){_.__e(n,t.__v)}}))}function E(e,t,n){try{if("function"==typeof e){var l="function"==typeof e.__u;l&&e.__u(),l&&null==t||(e.__u=e(t))}else e.current=t}catch(o){_.__e(o,n)}}function F(e,t,n){var l,o;if(_.unmount&&_.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||E(l,null,t)),null!=(l=e.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(r){_.__e(r,t)}l.base=l.__P=null}if(l=e.__k)for(o=0;o<l.length;o++)l[o]&&F(l[o],t,n||"function"!=typeof e.type);n||null==e.__e||h(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function W(e,_,t){return this.constructor(e,t)}e=c.slice,_={__e:function(e,_,t,n){for(var l,o,r;_=_.__;)if((l=_.__c)&&!l.__)try{if((o=l.constructor)&&null!=o.getDerivedStateFromError&&(l.setState(o.getDerivedStateFromError(e)),r=l.__d),null!=l.componentDidCatch&&(l.componentDidCatch(e,n||{}),r=l.__d),r)return l.__E=l}catch(u){e=u}throw e}},t=0,m.prototype.setState=function(e,_){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(d({},t),this.props)),e&&d(t,e),null!=e&&this.__v&&(_&&this._sb.push(_),w(this))},m.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),w(this))},m.prototype.render=g,n=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=function(e,_){return e.__v.__b-_.__v.__b},x.__r=0,u=0,i=M(!1),s=M(!0);export{v as _,m as b};
