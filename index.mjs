// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function-array@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtype-resolve-enum@v0.2.1-esm/index.mjs";function m(m,f,l,p,w,v){var a,g,c;if(i(m))c=m;else if(!s(m))throw new TypeError(d("0jr5d",m));if(!n(f))throw new TypeError(d("0jr2y",f));if(!n(l)&&null!==l)throw new TypeError(d("0jr5e",l));if(!e(p))throw new TypeError(d("0jr5f",p));if(!r(w))throw new TypeError(d("0jr5X",w));if(!r(v))throw new TypeError(d("0jr5g",v));if(0===(a=w+v))throw new Error(d("0jr0h"));if(p!==a)throw new Error(d("0jr0i"));if(c){if(g=f.length/a,!t(g))throw new Error(d("0jr0j"))}else if(g=m.length,f.length!==g*a)throw new Error(d("0jr0j"));if(l&&l.length!==g)throw new Error(d("0jr0k"));return f=function(r){var e,t;for(e=[],t=0;t<r.length;t++)e.push(h(r[t]));return e}(f),function(){var r,e,t,s,i,n,u;if(t=arguments.length,t!==p){if(t<p)throw new Error(d("0jr0l"));throw new Error(d("0jr0m"))}for(r=[],e=[],u=0;u<p;u++){if(!o(i=arguments[u]))throw u<w?new TypeError(d("0jr5h",i)):new TypeError(d("0jr5i",i));r.push(i),e.push(h(j(i)))}if((s=function(r,e,t,s,i,n,o,d,j){var h,m,f,l;for(h=n,f=0;f<r;f++){for(m=j,l=0;l<e&&t[h+l*i]===o[m];l++)m+=d;if(l===e)return f;h+=s}return-1}(g,a,f,a,1,0,e,1,0))<0)throw new TypeError(d("0jr0n"));n=c||m[s];l?n(r,l[s]):n(r);if(1===v)return r[a-1];if(0===v)return;return r.slice(w)}}export{m as default};
//# sourceMappingURL=index.mjs.map
