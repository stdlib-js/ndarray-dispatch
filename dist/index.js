"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw r=0,e}}};var b=q(function(S,y){"use strict";var w=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,T=require("@stdlib/assert-is-positive-integer"),V=require("@stdlib/assert-is-integer").isPrimitive,x=require("@stdlib/assert-is-function-array"),F=require("@stdlib/assert-is-function"),c=require("@stdlib/assert-is-collection"),I=require("@stdlib/assert-is-ndarray-like"),i=require("@stdlib/string-format"),k=require("@stdlib/ndarray-dtype"),j=require("@stdlib/ndarray-base-dtype-resolve-enum"),A=require("@stdlib/ndarray-base-dtypes2enums"),P=require("@stdlib/blas-ext-base-gindex-of-row").ndarray;function U(a,r,e,t,v,m){var n,u,d;if(F(a))d=a;else if(!x(a))throw new TypeError(i("invalid argument. First argument must be either a function or an array of functions. Value: `%s`.",a));if(!c(r))throw new TypeError(i("invalid argument. Second argument must be an array-like object. Value: `%s`.",r));if(!c(e)&&e!==null)throw new TypeError(i("invalid argument. Third argument must be an array-like object or null. Value: `%s`.",e));if(!T(t))throw new TypeError(i("invalid argument. Fourth argument must be a positive integer. Value: `%s`.",t));if(!w(v))throw new TypeError(i("invalid argument. Fifth argument must be a nonnegative integer. Value: `%s`.",v));if(!w(m))throw new TypeError(i("invalid argument. Sixth argument must be a nonnegative integer. Value: `%s`.",m));if(n=v+m,n===0)throw new Error("invalid arguments. Interface must accept at least one input and/or output ndarray. Based on the provided arguments, `nin+nout` equals `0`.");if(t!==n)throw new Error("invalid arguments. Fourth argument does not equal the number of input and output ndarrays.");if(d){if(u=r.length/n,!V(u))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each input and output ndarray for each provided ndarray function.")}else if(u=a.length,r.length!==u*n)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each input and output ndarray for each provided ndarray function.");if(e&&e.length!==u)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");return r=A(r),E;function E(){var o,g,p,f,s,h,l;if(p=arguments.length,p!==t)throw p<t?new Error("invalid invocation. Insufficient arguments."):new Error("invalid invocation. Too many arguments.");for(o=[],g=[],l=0;l<t;l++){if(s=arguments[l],!I(s))throw l<v?new TypeError(i("invalid argument. Input array must be an ndarray-like object. Value: `%s`.",s)):new TypeError(i("invalid argument. Output array must be an ndarray-like object. Value: `%s`.",s));o.push(s),g.push(j(k(s)))}if(f=P(u,n,r,n,1,0,g,1,0),f<0)throw new TypeError("invalid arguments. Unable to resolve an ndarray function supporting the provided array argument data types.");if(d?h=d:h=a[f],e?h(o,e[f]):h(o),m===1)return o[n-1];if(m!==0)return o.slice(v)}}y.exports=U});var N=b();module.exports=N;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
