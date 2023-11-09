<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Dispatch

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [ndarray][@stdlib/ndarray/ctor] function interface which performs multiple dispatch.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-dispatch
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var dispatch = require( '@stdlib/ndarray-dispatch' );
```

#### dispatch( fcns, types, data, nargs, nin, nout )

Returns an [ndarray][@stdlib/ndarray/ctor] function interface which performs multiple dispatch.

<!-- eslint-disable array-element-newline -->

```javascript
var unary = require( '@stdlib/ndarray-base-unary' );
var Float64Array = require( '@stdlib/array-float64' );
var Float32Array = require( '@stdlib/array-float32' );
var ndarray = require( '@stdlib/ndarray-ctor' );

function foo( x ) {
    return x * 10.0;
}

function bar( x ) {
    return x * 5.0;
}

// Define a list of ndarray functions for applying a unary callback:
var fcns = [
    unary,
    unary
];

// Define a one-dimensional list of input and output array types:
var types = [
    'float64', 'float64', // input, output
    'float32', 'float32'  // input, output
];

// Define a list of callbacks which should be applied based on the provided array types:
var data = [
    foo,
    bar
];

// Define the total number of input arguments:
var nargs = 2; // input_array + output_array

// Define the number of input ndarrays:
var nin = 1;

// Define the number of output ndarrays:
var nout = 1;

// Create an ndarray function interface:
var fcn = dispatch( fcns, types, data, nargs, nin, nout );

// ...

var xbuf = new Float64Array( [ 1.0, 2.0, 3.0 ] );
var ybuf = new Float64Array( xbuf.length );

var x = ndarray( 'float64', xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
var y = ndarray( 'float64', ybuf, [ 3 ], [ 1 ], 0, 'row-major' );

fcn( x, y );
// ybuf => <Float64Array>[ 10.0, 20.0, 30.0 ]

xbuf = new Float32Array( [ 1.0, 2.0, 3.0 ] );
ybuf = new Float32Array( xbuf.length );

x = ndarray( 'float32', xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
y = ndarray( 'float32', ybuf, [ 3 ], [ 1 ], 0, 'row-major' );

fcn( x, y );
// ybuf => <Float32Array>[ 5.0, 10.0, 15.0 ]
```

The function accepts the following arguments:

-   **fcns**: list of [ndarray][@stdlib/ndarray/ctor] functions.
-   **types**: one-dimensional list of [ndarray][@stdlib/ndarray/ctor] argument [data types][@stdlib/ndarray/dtypes]. The length of `types` must be the number of [ndarray][@stdlib/ndarray/ctor] functions multiplied by `nin+nout`. If `fcns` is a function, rather than a list, the number of [ndarray][@stdlib/ndarray/ctor] functions is computed as `types.length / (nin+nout)`.
-   **data**: [ndarray][@stdlib/ndarray/ctor] function data (e.g., callbacks). If a list, the length of `data` must equal the number of [ndarray][@stdlib/ndarray/ctor] functions. If `null`, a returned [ndarray][@stdlib/ndarray/ctor] function interface does **not** provide a `data` argument to an invoked [ndarray][@stdlib/ndarray/ctor] function.
-   **nargs**: total number of [ndarray][@stdlib/ndarray/ctor] function interface arguments.
-   **nin**: number of input [ndarrays][@stdlib/ndarray/ctor].
-   **nout**: number of output [ndarrays][@stdlib/ndarray/ctor].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A returned [ndarray][@stdlib/ndarray/ctor] function interface has the following signature:

    ```text
    f( x, y, ... )
    ```

    where

    -   **x**: [ndarray][@stdlib/ndarray/ctor].
    -   **y**: [ndarray][@stdlib/ndarray/ctor].
    -   **...**: additional [ndarrays][@stdlib/ndarray/ctor].

-   The number of [ndarray][@stdlib/ndarray/ctor] function interface parameters is derived from `nargs`, the number of input [ndarrays][@stdlib/ndarray/ctor] is derived from `nin`, and the number of output [ndarrays][@stdlib/ndarray/ctor] is derived from `nout`.

-   An [ndarray][@stdlib/ndarray/ctor] function (i.e., a value provided for the `fcns` argument) should have the following signature:

    ```text
    f( arrays[, data] )
    ```

    where

    -   **arrays**: array containing input and output [ndarrays][@stdlib/ndarray/ctor].
    -   **data**: [ndarray][@stdlib/ndarray/ctor] function data (e.g., a callback).

-   For convenience, a single [ndarray][@stdlib/ndarray/ctor] function may be provided which will be invoked whenever the [ndarray][@stdlib/ndarray/ctor] argument data types match a sequence of types in `types`. Providing a single [ndarray][@stdlib/ndarray/ctor] function is particularly convenient for the case where, regardless of array data types, traversing arrays remains the same, but the [ndarray][@stdlib/ndarray/ctor] function `data` differs (e.g., callbacks which differ based on the array data types). For example, the following

    <!-- eslint-disable array-element-newline -->

    ```javascript
    var unary = require( '@stdlib/ndarray-base-unary' );

    function foo( x ) {
        return x * 10.0;
    }

    function bar( x ) {
        return x * 5.0;
    }

    var fcns = [
        unary,
        unary
    ];
    var types = [
        'float64', 'float64',
        'float32', 'float32'
    ];
    var data = [
        foo,
        bar
    ];

    var fcn = dispatch( fcns, types, data, 2, 1, 1 );
    ```

    is equivalent to

    <!-- eslint-disable array-element-newline -->

    ```javascript
    var unary = require( '@stdlib/ndarray-base-unary' );

    function foo( x ) {
        return x * 10.0;
    }

    function bar( x ) {
        return x * 5.0;
    }

    var types = [
        'float64', 'float64',
        'float32', 'float32'
    ];
    var data = [
        foo,
        bar
    ];

    var fcn = dispatch( unary, types, data, 2, 1, 1 );
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var unary = require( '@stdlib/ndarray-base-unary' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var abs = require( '@stdlib/math-base-special-abs' );
var Float64Array = require( '@stdlib/array-float64' );
var dispatch = require( '@stdlib/ndarray-dispatch' );

var types = [ 'float64', 'float64' ];

var data = [
    abs
];

var absolute = dispatch( unary, types, data, 2, 1, 1 );

var xbuf = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var x = ndarray( 'float64', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
var y = ndarray( 'float64', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );

absolute( x, y );
console.log( ybuf );
// => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray-ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-dispatch.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-dispatch

[test-image]: https://github.com/stdlib-js/ndarray-dispatch/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-dispatch/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-dispatch/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-dispatch?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-dispatch.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-dispatch/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-dispatch/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-dispatch/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-dispatch/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-dispatch/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-dispatch/main/LICENSE

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
