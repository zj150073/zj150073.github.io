import"./core-js-D3AlHbOc.js";import{f as t}from"./element-plus-DsFyl0Kk.js";
/*!
 * el-table-infinite-scroll v3.0.6
 * (c) 2019-2024 yujinpan
 */
/*!
 * el-table-infinite-scroll v3.0.6
 * (c) 2019-2024 yujinpan
 */
var e=".el-scrollbar__wrap",n={mounted:function(n,r,o,l){var c=n.querySelector(e);if(!c)throw new Error("".concat("[el-table-infinite-scroll]: ").concat(e," element not found."));c.style.overflowY="auto",setTimeout((function(){n.style.height||(c.style.height="400px"),i(n,c),t.mounted(c,r,o,l)}),0)},updated:function(t){i(t,t.querySelector(e))},unmounted:function(n){for(var i=n.querySelector(e),r=arguments.length,o=new Array(r>1?r-1:0),l=1;l<r;l++)o[l-1]=arguments[l];t.unmounted.apply(t,[i].concat(o))}};function i(t,e){!function(t,e,n){var i;n.forEach((function(n){null!==(i=t.getAttribute(n))?e.setAttribute(n,i):e.removeAttribute(n)}))}(t,e,["infinite-scroll-disabled","infinite-scroll-delay","infinite-scroll-immediate","infinite-scroll-distance"]);var n="infinite-scroll-distance",i=+(t.getAttribute(n)||0);e.setAttribute(n,(i<1?1:i)+"")}
/*!
 * el-table-infinite-scroll v3.0.6
 * (c) 2019-2024 yujinpan
 */var r=Object.assign(n,{install:function(t){t.directive("el-table-infinite-scroll",r)}});export{r as E};
