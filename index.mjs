// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function-array@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function m(r,e,t,i,s,n,o,l,m){var d,a,h,f;for(d=n,h=0;h<r;h++){for(a=m,f=0;f<e&&t[d+f*s]===o[a];f++)a+=l;if(f===e)return h;d+=i}return-1}function d(d,a,h,f,p,w){var u,j,g;if(s(d))g=d;else if(!i(d))throw new TypeError(l("0Mq5s",d));if(!n(a))throw new TypeError(l("0Mq3A",a));if(!n(h)&&null!==h)throw new TypeError(l("invalid argument. Third argument must be an array-like object or null. Value: `%s`.",h));if(!e(f))throw new TypeError(l("0Mq5u",f));if(!r(p))throw new TypeError(l("0Mq5v",p));if(!r(w))throw new TypeError(l("0Mq5w",w));if(0===(u=p+w))throw new Error(l("0Mq0h"));if(f!==u)throw new Error(l("0Mq0i"));if(g){if(j=a.length/u,!t(j))throw new Error(l("0Mq0j"))}else if(j=d.length,a.length!==j*u)throw new Error(l("0Mq0j"));if(h&&h.length!==j)throw new Error(l("0Mq0k"));return function(){var r,e,t,i,s,n,c;if((t=arguments.length)!==f){if(t<f)throw new Error(l("0Mq0l"));throw new Error(l("0Mq0m"))}for(r=[],e=[],c=0;c<f;c++){if(!o(s=arguments[c]))throw c<p?new TypeError(l("invalid argument. Input array must be an ndarray-like object. Value: `%s`.",s)):new TypeError(l("invalid argument. Output array must be an ndarray-like object. Value: `%s`.",s));r.push(s),e.push(s.dtype)}if((i=m(j,u,a,u,1,0,e,1,0))<0)throw new TypeError(l("0Mq0p"));n=g||d[i];h?n(r,h[i]):n(r);if(1===w)return r[u-1];if(0===w)return;return r.slice(p)}}export{d as default};
//# sourceMappingURL=index.mjs.map
