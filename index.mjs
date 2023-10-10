// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function-array@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtype-resolve-enum@v0.1.0-esm/index.mjs";function m(e,r,t,n,i,a,s,o,u){var d,m,l,f;for(d=a,l=0;l<e;l++){for(m=u,f=0;f<r&&t[d+f*i]===s[m];f++)m+=o;if(f===r)return l;d+=n}return-1}function l(l,f,p,h,g,v){var c,y,j;if(i(l))j=l;else if(!n(l))throw new TypeError(o("invalid argument. First argument must be either a function or an array of functions. Value: `%s`.",l));if(!a(f))throw new TypeError(o("invalid argument. Second argument must be an array-like object. Value: `%s`.",f));if(!a(p)&&null!==p)throw new TypeError(o("invalid argument. Third argument must be an array-like object or null. Value: `%s`.",p));if(!r(h))throw new TypeError(o("invalid argument. Fourth argument must be a positive integer. Value: `%s`.",h));if(!e(g))throw new TypeError(o("invalid argument. Fifth argument must be a nonnegative integer. Value: `%s`.",g));if(!e(v))throw new TypeError(o("invalid argument. Sixth argument must be a nonnegative integer. Value: `%s`.",v));if(0===(c=g+v))throw new Error("invalid arguments. Interface must accept at least one input and/or output ndarray. Based on the provided arguments, `nin+nout` equals `0`.");if(h!==c)throw new Error("invalid arguments. Fourth argument does not equal the number of input and output ndarrays.");if(j){if(y=f.length/c,!t(y))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each input and output ndarray for each provided ndarray function.")}else if(y=l.length,f.length!==y*c)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each input and output ndarray for each provided ndarray function.");if(p&&p.length!==y)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");return f=function(e){var r,t;for(r=[],t=0;t<e.length;t++)r.push(d(e[t]));return r}(f),function(){var e,r,t,n,i,a,w;if((t=arguments.length)!==h){if(t<h)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}for(e=[],r=[],w=0;w<h;w++){if(!s(i=arguments[w]))throw w<g?new TypeError(o("invalid argument. Input array must be an ndarray-like object. Value: `%s`.",i)):new TypeError(o("invalid argument. Output array must be an ndarray-like object. Value: `%s`.",i));e.push(i),r.push(d(u(i)))}if((n=m(y,c,f,c,1,0,r,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve an ndarray function supporting the provided array argument data types.");a=j||l[n];p?a(e,p[n]):a(e);if(1===v)return e[c-1];if(0===v)return;return e.slice(g)}}export{l as default};
//# sourceMappingURL=index.mjs.map
