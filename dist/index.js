"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var b=q(function(S,y){"use strict";var w=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,T=require("@stdlib/assert-is-positive-integer"),V=require("@stdlib/assert-is-integer").isPrimitive,x=require("@stdlib/assert-is-function-array"),F=require("@stdlib/assert-is-function"),c=require("@stdlib/assert-is-collection"),I=require("@stdlib/assert-is-ndarray-like"),n=require("@stdlib/string-format"),k=require("@stdlib/ndarray-dtype"),j=require("@stdlib/ndarray-base-dtype-resolve-enum"),A=require("@stdlib/ndarray-base-dtypes2enums"),P=require("@stdlib/blas-ext-base-gindex-of-row").ndarray;function U(e,r,i,t,v,m){var a,u,d;if(F(e))d=e;else if(!x(e))throw new TypeError(n("invalid argument. First argument must be either a function or an array of functions. Value: `%s`.",e));if(!c(r))throw new TypeError(n("invalid argument. Second argument must be an array-like object. Value: `%s`.",r));if(!c(i)&&i!==null)throw new TypeError(n("invalid argument. Third argument must be an array-like object or null. Value: `%s`.",i));if(!T(t))throw new TypeError(n("invalid argument. Fourth argument must be a positive integer. Value: `%s`.",t));if(!w(v))throw new TypeError(n("invalid argument. Fifth argument must be a nonnegative integer. Value: `%s`.",v));if(!w(m))throw new TypeError(n("invalid argument. Sixth argument must be a nonnegative integer. Value: `%s`.",m));if(a=v+m,a===0)throw new Error("invalid arguments. Interface must accept at least one input and/or output ndarray. Based on the provided arguments, `nin+nout` equals `0`.");if(t!==a)throw new Error("invalid arguments. Fourth argument does not equal the number of input and output ndarrays.");if(d){if(u=r.length/a,!V(u))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each input and output ndarray for each provided ndarray function.")}else if(u=e.length,r.length!==u*a)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each input and output ndarray for each provided ndarray function.");if(i&&i.length!==u)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");return r=A(r),E;function E(){var o,g,p,f,s,h,l;if(p=arguments.length,p!==t)throw p<t?new Error("invalid invocation. Insufficient arguments."):new Error("invalid invocation. Too many arguments.");for(o=[],g=[],l=0;l<t;l++){if(s=arguments[l],!I(s))throw l<v?new TypeError(n("invalid argument. Input array must be an ndarray-like object. Value: `%s`.",s)):new TypeError(n("invalid argument. Output array must be an ndarray-like object. Value: `%s`.",s));o.push(s),g.push(j(k(s)))}if(f=P(u,a,r,a,1,0,g,1,0),f<0)throw new TypeError("invalid arguments. Unable to resolve an ndarray function supporting the provided array argument data types.");if(d?h=d:h=e[f],i?h(o,i[f]):h(o),m===1)return o[a-1];if(m!==0)return o.slice(v)}}y.exports=U});var N=b();module.exports=N;
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
