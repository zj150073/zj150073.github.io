import{bO as l,bC as i,bs as L,bo as V,bp as _,bP as D,bm as G,br as B,bQ as A,bR as y,bF as K,bS as u}from"./index-C1X8aKZs.js";import{k as E,f as R,j as W}from"./index-C4vQhPJq.js";var T=l(i,"WeakMap");function q(t){return t!=null&&E(t.length)&&!L(t)}var N=Object.prototype;function H(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||N;return t===r}function Q(t,e){for(var r=-1,o=Array(t);++r<t;)o[r]=e(r);return o}function Y(){return!1}var z=typeof exports=="object"&&exports&&!exports.nodeType&&exports,w=z&&typeof module=="object"&&module&&!module.nodeType&&module,Z=w&&w.exports===z,x=Z?i.Buffer:void 0,J=x?x.isBuffer:void 0,X=J||Y,tt="[object Arguments]",rt="[object Array]",et="[object Boolean]",at="[object Date]",ot="[object Error]",nt="[object Function]",st="[object Map]",it="[object Number]",ut="[object Object]",ct="[object RegExp]",pt="[object Set]",ft="[object String]",bt="[object WeakMap]",gt="[object ArrayBuffer]",yt="[object DataView]",lt="[object Float32Array]",dt="[object Float64Array]",jt="[object Int8Array]",Tt="[object Int16Array]",ht="[object Int32Array]",vt="[object Uint8Array]",mt="[object Uint8ClampedArray]",_t="[object Uint16Array]",At="[object Uint32Array]",a={};a[lt]=a[dt]=a[jt]=a[Tt]=a[ht]=a[vt]=a[mt]=a[_t]=a[At]=!0;a[tt]=a[rt]=a[gt]=a[et]=a[yt]=a[at]=a[ot]=a[nt]=a[st]=a[it]=a[ut]=a[ct]=a[pt]=a[ft]=a[bt]=!1;function wt(t){return V(t)&&E(t.length)&&!!a[_(t)]}function xt(t){return function(e){return t(e)}}var U=typeof exports=="object"&&exports&&!exports.nodeType&&exports,b=U&&typeof module=="object"&&module&&!module.nodeType&&module,St=b&&b.exports===U,j=St&&D.process,S=function(){try{var t=b&&b.require&&b.require("util").types;return t||j&&j.binding&&j.binding("util")}catch(e){}}(),O=S&&S.isTypedArray,Ot=O?xt(O):wt,Pt=Object.prototype,Ct=Pt.hasOwnProperty;function Mt(t,e){var r=B(t),o=!r&&R(t),c=!r&&!o&&X(t),p=!r&&!o&&!c&&Ot(t),f=r||o||c||p,d=f?Q(t.length,String):[],F=d.length;for(var n in t)(e||Ct.call(t,n))&&!(f&&(n=="length"||c&&(n=="offset"||n=="parent")||p&&(n=="buffer"||n=="byteLength"||n=="byteOffset")||G(n,F)))&&d.push(n);return d}function $t(t,e){return function(r){return t(e(r))}}var It=$t(Object.keys,Object),kt=Object.prototype,Bt=kt.hasOwnProperty;function Et(t){if(!H(t))return It(t);var e=[];for(var r in Object(t))Bt.call(t,r)&&r!="constructor"&&e.push(r);return e}function zt(t){return q(t)?Mt(t):Et(t)}function Ut(){this.__data__=new A,this.size=0}function Ft(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function Lt(t){return this.__data__.get(t)}function Vt(t){return this.__data__.has(t)}var Dt=200;function Gt(t,e){var r=this.__data__;if(r instanceof A){var o=r.__data__;if(!y||o.length<Dt-1)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new K(o)}return r.set(t,e),this.size=r.size,this}function g(t){var e=this.__data__=new A(t);this.size=e.size}g.prototype.clear=Ut;g.prototype.delete=Ft;g.prototype.get=Lt;g.prototype.has=Vt;g.prototype.set=Gt;function Kt(t,e){for(var r=-1,o=t==null?0:t.length,c=0,p=[];++r<o;){var f=t[r];e(f,r,t)&&(p[c++]=f)}return p}function Rt(){return[]}var Wt=Object.prototype,qt=Wt.propertyIsEnumerable,P=Object.getOwnPropertySymbols,Nt=P?function(t){return t==null?[]:(t=Object(t),Kt(P(t),function(e){return qt.call(t,e)}))}:Rt;function Ht(t,e,r){var o=e(t);return B(t)?o:W(o,r(t))}function ar(t){return Ht(t,zt,Nt)}var h=l(i,"DataView"),v=l(i,"Promise"),m=l(i,"Set"),C="[object Map]",Qt="[object Object]",M="[object Promise]",$="[object Set]",I="[object WeakMap]",k="[object DataView]",Yt=u(h),Zt=u(y),Jt=u(v),Xt=u(m),tr=u(T),s=_;(h&&s(new h(new ArrayBuffer(1)))!=k||y&&s(new y)!=C||v&&s(v.resolve())!=M||m&&s(new m)!=$||T&&s(new T)!=I)&&(s=function(t){var e=_(t),r=e==Qt?t.constructor:void 0,o=r?u(r):"";if(o)switch(o){case Yt:return k;case Zt:return C;case Jt:return M;case Xt:return $;case tr:return I}return e});var or=i.Uint8Array;export{g as S,or as U,X as a,Ot as b,s as c,Nt as d,Ht as e,xt as f,ar as g,H as h,q as i,Mt as j,zt as k,S as n,$t as o,Rt as s};
