"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=v(function(m,o){
var f=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-assert-is-infinite/dist'),q=require('@stdlib/math-base-special-pow/dist'),n=require('@stdlib/math-base-special-floor/dist'),c=require('@stdlib/math-base-special-floorn/dist');function l(r,e,i){var a,t;return f(r)||f(e)||f(i)||i<=0||u(e)||u(i)?NaN:u(r)||r===0?r:i===10?c(r,e):e===0||i===1?n(r):(t=q(i,-e),u(t)||(a=n(r*t)/t,u(a))?r:a)}o.exports=l
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
