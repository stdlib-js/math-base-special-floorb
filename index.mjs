// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floorn@esm/index.mjs";var r=s,n=t,a=e,d=i,o=m;var l=function(s,t,e){var i,m;return r(s)||r(t)||r(e)||e<=0||n(t)||n(e)?NaN:n(s)||0===s?s:10===e?o(s,t):0===t||1===e?d(s):(m=a(e,-t),n(m)?s:(i=d(s*m)/m,n(i)?s:i))};export{l as default};
//# sourceMappingURL=index.mjs.map
