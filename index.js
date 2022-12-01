// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dispatch=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,f=n.__lookupGetter__,u=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var s,c,l,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(f.call(t,e)||u.call(t,e)?(s=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=s):t[e]=r.value),l="get"in r,p="set"in r,c&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(t,e,r.get),p&&a&&a.call(t,e,r.set),t};var s=e;function c(t,e,r){s(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function d(t,e){return null!=t&&g.call(t,e)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var b=h()?function(t){var e,r,n;if(null==t)return y.call(t);r=t[_],e=d(t,_);try{t[_]=void 0}catch(e){return y.call(t)}return n=y.call(t),e?t[_]=r:delete t[_],n}:function(t){return y.call(t)},w=Number,m=w.prototype.toString;var v=h();function E(t){return"object"==typeof t&&(t instanceof w||(v?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Number]"===b(t)))}function O(t){return l(t)||E(t)}c(O,"isPrimitive",l),c(O,"isObject",E);var A=Number.POSITIVE_INFINITY,j=w.NEGATIVE_INFINITY,I=Math.floor;function x(t){return I(t)===t}function U(t){return t<A&&t>j&&x(t)}function T(t){return l(t)&&U(t)}function S(t){return E(t)&&U(t.valueOf())}function N(t){return T(t)||S(t)}function M(t){return T(t)&&t>=0}function R(t){return S(t)&&t.valueOf()>=0}function V(t){return M(t)||R(t)}function B(t){return T(t)&&t>0}function F(t){return S(t)&&t.valueOf()>0}function L(t){return B(t)||F(t)}c(N,"isPrimitive",T),c(N,"isObject",S),c(V,"isPrimitive",M),c(V,"isObject",R),c(L,"isPrimitive",B),c(L,"isObject",F);var k=/./;function C(t){return"boolean"==typeof t}var P=Boolean.prototype.toString;var G=h();function D(t){return"object"==typeof t&&(t instanceof Boolean||(G?function(t){try{return P.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===b(t)))}function Y(t){return C(t)||D(t)}function q(){return new Function("return this;")()}c(Y,"isPrimitive",C),c(Y,"isObject",D);var $="object"==typeof self?self:null,J="object"==typeof window?window:null,W="object"==typeof global?global:null;function X(t){if(arguments.length){if(!C(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return q()}if($)return $;if(J)return J;if(W)return W;throw new Error("unexpected error. Unable to resolve global object.")}var Z=X(),H=Z.document&&Z.document.childNodes,z=Int8Array;function K(){return/^\s*function\s*([^(]*)/i}var Q=/^\s*function\s*([^(]*)/i;c(K,"REGEXP",Q);var tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===b(t)};function et(t){return null!==t&&"object"==typeof t}function rt(t){var e,r,n,i;if(("Object"===(r=b(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Q.exec(n.toString()))return e[1]}return et(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}c(et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!tt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(et));var nt="function"==typeof k||"object"==typeof z||"function"==typeof H?function(t){return rt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?rt(t).toLowerCase():e};function it(t){return"function"===nt(t)}var ot=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&x(t.length)&&t.length>=0&&t.length<=4294967295}(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(it);function at(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&x(t.length)&&t.length>=0&&t.length<=9007199254740991}var ft=X();function ut(t,e,r){s(t,e,{configurable:!1,enumerable:!1,get:r})}var st={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function ct(t){return Math.abs(t)}function lt(t,e){return e&&(2===t||3===t)}function pt(t,e){return e&&(1===t||3===t)}function ht(t,e,r){var n,i,o,a,f;for(n=t.length,i=r,o=r,f=0;f<n;f++){if(0===t[f])return[r,r];(a=e[f])>0?o+=a*(t[f]-1):a<0&&(i+=a*(t[f]-1))}return[i,o]}function yt(t){return t.re}function gt(t){return t.im}function dt(t){return"string"==typeof t}c(ht,"assign",(function(t,e,r,n){var i,o,a,f,u;for(i=t.length,o=r,a=r,u=0;u<i;u++){if(0===t[u])return n[0]=r,n[1]=r,n;(f=e[u])>0?a+=f*(t[u]-1):f<0&&(o+=f*(t[u]-1))}return n[0]=o,n[1]=a,n}));var _t=String.prototype.valueOf;var bt=h();function wt(t){return"object"==typeof t&&(t instanceof String||(bt?function(t){try{return _t.call(t),!0}catch(t){return!1}}(t):"[object String]"===b(t)))}function mt(t){return dt(t)||wt(t)}function vt(t){return"number"==typeof t}function Et(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function Ot(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+Et(i):Et(i)+t,n&&(t="-"+t)),t}c(mt,"isPrimitive",dt),c(mt,"isObject",wt);var At=String.prototype.toLowerCase,jt=String.prototype.toUpperCase;function It(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!vt(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=Ot(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=Ot(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===jt.call(t.specifier)?jt.call(r):At.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function xt(t){return"string"==typeof t}var Ut=Math.abs,Tt=String.prototype.toLowerCase,St=String.prototype.toUpperCase,Nt=String.prototype.replace,Mt=/e\+(\d)$/,Rt=/e-(\d)$/,Vt=/^(\d+)$/,Bt=/^(\d+)e/,Ft=/\.0$/,Lt=/\.0*e/,kt=/(\..*[^0])0*e/;function Ct(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!vt(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":Ut(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=Nt.call(r,kt,"$1e"),r=Nt.call(r,Lt,"e"),r=Nt.call(r,Ft,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=Nt.call(r,Mt,"e+0$1"),r=Nt.call(r,Rt,"e-0$1"),t.alternate&&(r=Nt.call(r,Vt,"$1."),r=Nt.call(r,Bt,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===St.call(t.specifier)?St.call(r):Tt.call(r)}function Pt(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function Gt(t,e,r){var n=e-t.length;return n<0?t:t=r?t+Pt(n):Pt(n)+t}var Dt=String.fromCharCode,Yt=isNaN,qt=Array.isArray;function $t(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function Jt(t){var e,r,n,i,o,a,f,u,s;if(!qt(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",f=1,u=0;u<t.length;u++)if(xt(n=t[u]))a+=n;else{if(e=void 0!==n.precision,!(n=$t(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),r=n.flags,s=0;s<r.length;s++)switch(i=r.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,Yt(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,Yt(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=It(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Yt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Yt(o)?String(n.arg):Dt(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Ct(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Ot(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Gt(n.arg,n.width,n.padRight)),a+=n.arg||"",f+=1}return a}var Wt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Xt(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function Zt(t){var e,r,n,i;for(r=[],i=0,n=Wt.exec(t);n;)(e=t.slice(i,Wt.lastIndex-n[0].length)).length&&r.push(e),r.push(Xt(n)),i=Wt.lastIndex,n=Wt.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function Ht(t){return"string"==typeof t}function zt(t){var e,r,n;if(!Ht(t))throw new TypeError(zt("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=Zt(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return Jt.apply(null,r)}var Kt=/[-\/\\^$*+?.()|[\]{}]/g;var Qt=RegExp.prototype.exec;var te=h();function ee(t){return"object"==typeof t&&(t instanceof RegExp||(te?function(t){try{return Qt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===b(t)))}function re(t,e,r){if(!dt(t))throw new TypeError(zt("invalid argument. First argument must be a string. Value: `%s`.",t));if(dt(e))e=function(t){var e,r;if(!dt(t))throw new TypeError(zt("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(Kt,"\\$&"):(e=(e=t.substring(1,r)).replace(Kt,"\\$&"),t=t[0]+e+t.substring(r))}(e),e=new RegExp(e,"g");else if(!ee(e))throw new TypeError(zt("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!dt(r)&&!it(r))throw new TypeError(zt("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return t.replace(e,r)}var ne={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var ie="function"==typeof Uint8Array;var oe="function"==typeof Uint8Array?Uint8Array:null;var ae,fe="function"==typeof Uint8Array?Uint8Array:void 0;ae=function(){var t,e,r;if("function"!=typeof oe)return!1;try{e=new oe(e=[1,3.14,-3.14,256,257]),r=e,t=(ie&&r instanceof Uint8Array||"[object Uint8Array]"===b(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?fe:function(){throw new Error("not implemented")};var ue=ae,se="function"==typeof Uint16Array;var ce="function"==typeof Uint16Array?Uint16Array:null;var le,pe="function"==typeof Uint16Array?Uint16Array:void 0;le=function(){var t,e,r;if("function"!=typeof ce)return!1;try{e=new ce(e=[1,3.14,-3.14,65536,65537]),r=e,t=(se&&r instanceof Uint16Array||"[object Uint16Array]"===b(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?pe:function(){throw new Error("not implemented")};var he,ye={uint16:le,uint8:ue};(he=new ye.uint16(1))[0]=4660;var ge=52===new ye.uint8(he.buffer)[0],de="function"==typeof ArrayBuffer;var _e="function"==typeof Float64Array;var be="function"==typeof Float64Array?Float64Array:null;var we,me="function"==typeof Float64Array?Float64Array:void 0;we=function(){var t,e,r;if("function"!=typeof be)return!1;try{e=new be([1,3.14,-3.14,NaN]),r=e,t=(_e&&r instanceof Float64Array||"[object Float64Array]"===b(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?me:function(){throw new Error("not implemented")};var ve=we,Ee="function"==typeof ArrayBuffer?ArrayBuffer:null;var Oe,Ae="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Oe=function(){var t,e,r,n;if("function"!=typeof Ee)return!1;try{r=new Ee(16),n=r,(t=(de&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===b(n))&&"function"==typeof Ee.isView)&&((e=new ve(r))[0]=-3.14,e[1]=NaN,t=t&&Ee.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?Ae:function(){throw new Error("not implemented")};var je=Oe,Ie="function"==typeof DataView;var xe="function"==typeof DataView?DataView:null;var Ue,Te="function"==typeof DataView?DataView:void 0;Ue=function(){var t,e,r,n;if("function"!=typeof xe)return!1;try{r=new je(24),e=new xe(r,8),n=e,(t=(Ie&&n instanceof DataView||"[object DataView]"===b(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?Te:function(){throw new Error("not implemented")};var Se=Ue,Ne="function"==typeof BigInt?BigInt:void 0,Me=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Re(){return Me.slice()}function Ve(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Be(t,e,r){s(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function Fe(t){return Object.keys(Object(t))}var Le,ke=void 0!==Object.keys;function Ce(t){return"[object Arguments]"===b(t)}Le=function(){return Ce(arguments)}();var Pe=Le;function Ge(t){return t!=t}function De(t){return l(t)&&Ge(t)}function Ye(t){return E(t)&&Ge(t.valueOf())}function qe(t){return De(t)||Ye(t)}c(qe,"isPrimitive",De),c(qe,"isObject",Ye);var $e=Object.prototype.propertyIsEnumerable;var Je=!$e.call("beep","0");function We(t,e){var r;return null!=t&&(!(r=$e.call(t,e))&&Je&&mt(t)?!De(e=+e)&&T(e)&&e>=0&&e<t.length:r)}var Xe=Pe?Ce:function(t){return null!==t&&"object"==typeof t&&!tt(t)&&"number"==typeof t.length&&x(t.length)&&t.length>=0&&t.length<=4294967295&&d(t,"callee")&&!We(t,"callee")},Ze=Array.prototype.slice;var He=We((function(){}),"prototype"),ze=!We({toString:null},"toString");function Ke(t,e,r){var n,i;if(!at(t)&&!dt(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!T(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(qe(e)){for(;i<n;i++)if(qe(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function Qe(t){return t.constructor&&t.constructor.prototype===t}var tr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],er="undefined"==typeof window?void 0:window;var rr=function(){var t;if("undefined"===nt(er))return!1;for(t in er)try{-1===Ke(tr,t)&&d(er,t)&&null!==er[t]&&"object"===nt(er[t])&&Qe(er[t])}catch(t){return!0}return!1}(),nr="undefined"!=typeof window;var ir,or=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ir=ke?function(){return 2!==(Fe(arguments)||"").length}(1,2)?function(t){return Xe(t)?Fe(Ze.call(t)):Fe(t)}:Fe:function(t){var e,r,n,i,o,a,f;if(i=[],Xe(t)){for(f=0;f<t.length;f++)i.push(f.toString());return i}if("string"==typeof t){if(t.length>0&&!d(t,"0"))for(f=0;f<t.length;f++)i.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!et(t))return i;r=He&&n}for(o in t)r&&"prototype"===o||!d(t,o)||i.push(String(o));if(ze)for(e=function(t){if(!1===nr&&!rr)return Qe(t);try{return Qe(t)}catch(t){return!1}}(t),f=0;f<or.length;f++)a=or[f],e&&"constructor"===a||!d(t,a)||i.push(String(a));return i};var ar=ir;c(Re,"enum",Ve),function(t,e){var r,n,i;for(r=ar(e),i=0;i<r.length;i++)Be(t,n=r[i],e[n])}(Re,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var fr=["row-major","column-major"];function ur(){return{"row-major":1,"column-major":2}}c((function(){return fr.slice()}),"enum",ur);var sr=["throw","clamp","wrap"];function cr(){return{throw:1,clamp:2,wrap:3}}c((function(){return sr.slice()}),"enum",cr);var lr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},pr={"row-major":1,"column-major":2},hr={throw:1,clamp:2,wrap:3};var yr=new ue(8),gr=new Se(yr.buffer);function dr(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<yr.length;a++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=I(t/4294967296),ge?(gr.setUint32(0,o,ge),gr.setUint32(4,i,ge)):(gr.setUint32(0,i,ge),gr.setUint32(4,o,ge)),a=0;a<yr.length;a++)e[n]=yr[a],n+=r;return e}c((function(t){var e,r,n,i;return e=new ue(8),0===t||(i=(4294967295&t)>>>0,n=I(t/4294967296),r=new Se(e.buffer),ge?(r.setUint32(0,i,ge),r.setUint32(4,n,ge)):(r.setUint32(0,n,ge),r.setUint32(4,i,ge))),e}),"assign",dr);var _r={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},br={"row-major":1,"column-major":2},wr={throw:1,clamp:2,wrap:3};function mr(t,e,r,n,i,o){var a,f,u,s,c;if(!(this instanceof mr))return new mr(t,e,r,n,i,o);for(s=1,c=0;c<r.length;c++)s*=r[c];return f=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*s:null,this._byteLength=f,this._bytesPerElement=function(t){return st[t]||null}(t),this._buffer=e,this._dtype=t,this._length=s,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=Boolean(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=ht(e,r,n))[1]-o[0]+1}(s,r,n,i,this._iterationOrder),u=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=ct(t[0]),a=1;a<r;a++){if(o=ct(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:pt(u,a),COLUMN_MAJOR_CONTIGUOUS:lt(u,a),READONLY:!1},this.__meta_dataview__=null,this}function vr(t){return t instanceof mr||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}function Er(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function Or(t,e,r,n,i,o,a,f,u){var s,c,l,p;for(s=o,l=0;l<t;l++){for(c=u,p=0;p<e&&r[s+p*i]===a[c];p++)c+=f;if(p===e)return l;s+=n}return-1}return c(mr,"name","ndarray"),ut(mr.prototype,"byteLength",(function(){return this._byteLength})),ut(mr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),ut(mr.prototype,"data",(function(){return this._buffer})),ut(mr.prototype,"dtype",(function(){return this._dtype})),ut(mr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),ut(mr.prototype,"length",(function(){return this._length})),ut(mr.prototype,"ndims",(function(){return this._ndims})),ut(mr.prototype,"offset",(function(){return this._offset})),ut(mr.prototype,"order",(function(){return this._order})),ut(mr.prototype,"shape",(function(){return this._shape.slice()})),ut(mr.prototype,"strides",(function(){return this._strides.slice()})),c(mr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),c(mr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),c(mr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),c(mr.prototype,"iset",(function(t,e){var r,n,i,o,a,f;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(f=0;f<i;f++)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(f=i-1;f>=0;f--)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),c(mr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=yt(i=this.iget(o))+", "+gt(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=yt(i=this.iget(o))+", "+gt(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=yt(i=this.iget(this._length-1-o))+", "+gt(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=re(ne[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),c(mr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(yt(r),gt(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),c(mr.prototype,"__array_meta_dataview__","function"==typeof ft.BigInt&&"function"==typeof BigInt&&"bigint"==typeof ft.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,f,u,s,c,l,p,h;if(u=this._mode||"throw",a=this._submode||[u],r=33+16*(l=this._ndims)+(p=a.length),(f=this.__meta_dataview__)&&f.byteLength===r)return f;for(f=new Se(new je(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,f.setInt8(s,ge?1:0),s+=1,f.setInt16(s,lr[n],ge),s+=2,f.setBigInt64(s,Ne(l),ge),c=8*l,s+=8,h=0;h<l;h++)f.setBigInt64(s,Ne(i[h]),ge),f.setBigInt64(s+c,Ne(o[h]*t),ge),s+=8;for(s+=c,f.setBigInt64(s,Ne(this._offset*t),ge),s+=8,f.setInt8(s,pr[this._order]),s+=1,f.setInt8(s,hr[u]),s+=1,f.setBigInt64(s,Ne(p),ge),s+=8,h=0;h<p;h++)f.setInt8(s,hr[a[h]]),s+=1;return e=0,e|=this._flags.READONLY?4:0,f.setInt32(s,e,ge),this.__meta_dataview__=f,f}:function(){var t,e,r,n,i,o,a,f,u,s,c,l,p,h,y;if(s=this._mode||"throw",f=this._submode||[s],n=33+16*(p=this._ndims)+(h=f.length),(u=this.__meta_dataview__)&&u.byteLength===n)return u;for(u=new Se(new je(n)),e=new ue(u.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,u.setInt8(c,ge?1:0),c+=1,u.setInt16(c,_r[i],ge),dr(p,e,1,c+=2),l=8*p,c+=8,y=0;y<p;y++)dr(o[y],e,1,c),dr(a[y]*t,e,1,c+l),c+=8;for(c+=l,dr(this._offset*t,e,1,c),c+=8,u.setInt8(c,br[this._order]),c+=1,u.setInt8(c,wr[s]),dr(h,e,1,c+=1),c+=8,y=0;y<h;y++)u.setInt8(c,wr[f[y]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,u.setInt32(c,r,ge),this.__meta_dataview__=u,u}),function(t,e,r,n,i,o){var a,f,u;if(it(t))u=t;else if(!ot(t))throw new TypeError(Er("0Mq5s",t));if(!at(e))throw new TypeError(Er("0Mq3A",e));if(!at(r)&&null!==r)throw new TypeError(Er("invalid argument. Third argument must be an array-like object or null. Value: `%s`.",r));if(!L(n))throw new TypeError(Er("0Mq5u",n));if(!M(i))throw new TypeError(Er("0Mq5v",i));if(!M(o))throw new TypeError(Er("0Mq5w",o));if(0===(a=i+o))throw new Error(Er("0Mq0h"));if(n!==a)throw new Error(Er("0Mq0i"));if(u){if(!T(f=e.length/a))throw new Error(Er("0Mq0j"))}else if(f=t.length,e.length!==f*a)throw new Error(Er("0Mq0j"));if(r&&r.length!==f)throw new Error(Er("0Mq0k"));return function(){var s,c,l,p,h,y,g;if((l=arguments.length)!==n){if(l<n)throw new Error(Er("0Mq0l"));throw new Error(Er("0Mq0m"))}for(s=[],c=[],g=0;g<n;g++){if(!vr(h=arguments[g]))throw g<i?new TypeError(Er("invalid argument. Input array must be an ndarray-like object. Value: `%s`.",h)):new TypeError(Er("invalid argument. Output array must be an ndarray-like object. Value: `%s`.",h));s.push(h),c.push(h.dtype)}if((p=Or(f,a,e,a,1,0,c,1,0))<0)throw new TypeError(Er("0Mq0p"));y=u||t[p];r?y(s,r[p]):y(s);if(1===o)return s[a-1];if(0===o)return;return s.slice(i)}}}));
//# sourceMappingURL=index.js.map