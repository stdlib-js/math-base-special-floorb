<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# floorb

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a numeric value to the nearest multiple of b^n toward negative infinity.



<section class="usage">

## Usage

To use in Observable,

```javascript
floorb = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floorb@v0.3.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var floorb = require( 'path/to/vendor/umd/math-base-special-floorb/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floorb@v0.3.1-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.floorb;
})();
</script>
```

#### floorb( x, n, b )

Rounds a `numeric` value to the nearest multiple of `b^n` toward negative infinity.

```javascript
// Round a value to 4 decimal places:
var v = floorb( 3.141592653589793, -4, 10 );
// returns 3.1415

// If n = 0 or b = 1, `floorb` behaves like `floor`:
v = floorb( 3.141592653589793, 0, 2 );
// returns 3.0

// Round a value to the nearest multiple of two toward negative infinity:
v = floorb( 5.0, 1, 2 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Due to rounding error in [floating-point numbers][ieee754], rounding may **not** be exact. For example,

    ```javascript
    var x = -0.2 - 0.1;
    // returns -0.30000000000000004

    // Should round to -0.3...
    var v = floorb( x, -16, 10 );
    // returns -0.3000000000000001
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floorb@v0.3.1-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x;
var n;
var b;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = round( (randu()*10.0) - 5.0 );
    b = round( randu()*10.0 );
    v = floorb( x, n, b );
    console.log( 'x: %d. %d^%d: %d. Rounded: %d.', x, b, n, pow( b, n ), v );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/floorb.h"
```

#### stdlib_base_floorb( x, n, b )

Rounds a `numeric` value to the nearest multiple of `b^n` toward negative infinity.

```c
double out = stdlib_base_floorb( 3.141592653589793, -4, 10 );
// returns 3.1415
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **n**: `[in] int32_t` power.
-   **b**: `[in] int32_t` base.

```c
double stdlib_base_floorb( const double x, const int32_t n, const int32_t b );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/floorb.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    const double x[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };
    const int32_t n[] = { -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 };
    const int32_t b[] = { 20, 19, 18, 17, 16, 15, 14, 13, 12, 11 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_floorb( x[ i ], n[ i ], b[ i ] );
        printf( "floorb(%lf, %d, %d) = %lf\n", x[ i ], n[ i ], b[ i ], v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/ceilb`][@stdlib/math/base/special/ceilb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/floor`][@stdlib/math/base/special/floor]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/floorn`][@stdlib/math/base/special/floorn]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number to the nearest multiple of 10^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/roundb`][@stdlib/math/base/special/roundb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n on a linear scale.</span>

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-floorb.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-floorb

[test-image]: https://github.com/stdlib-js/math-base-special-floorb/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/math-base-special-floorb/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-floorb/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-floorb?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-floorb.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-floorb/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-floorb/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-floorb/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-floorb/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-floorb/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-floorb/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-floorb/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-floorb/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-floorb/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/ceilb]: https://github.com/stdlib-js/math-base-special-ceilb/tree/umd

[@stdlib/math/base/special/floor]: https://github.com/stdlib-js/math-base-special-floor/tree/umd

[@stdlib/math/base/special/floorn]: https://github.com/stdlib-js/math-base-special-floorn/tree/umd

[@stdlib/math/base/special/roundb]: https://github.com/stdlib-js/math-base-special-roundb/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
