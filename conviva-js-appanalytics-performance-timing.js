/*!
 * Attaches Performance Timing data to Snowplow events v3.6.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

"use strict";!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).snowplowPerformanceTiming={})}(this,(function(e){e.PerformanceTimingPlugin=function(){return{contexts:function(){var e=window,n=(e=e.performance||e.mozPerformance||e.msPerformance||e.webkitPerformance).timing;return e=e?[{schema:"iglu:org.w3/PerformanceTiming/jsonschema/1-0-0",data:{navigationStart:n.navigationStart,loadEventEnd:n.loadEventEnd}}]:[]}}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.min.js.map
