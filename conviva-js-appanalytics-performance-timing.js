/*!
 * Attaches Performance Timing data to Snowplow events v3.1.6 (http://bit.ly/sp-js)
 * Copyright 2021 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

"use strict";!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).snowplowPerformanceTiming={})}(this,(function(t){t.PerformanceTimingPlugin=function(){return{contexts:function(){var t=window,e=(t=t.performance||t.mozPerformance||t.msPerformance||t.webkitPerformance).timing;return t=t?[{schema:"iglu:org.w3/PerformanceTiming/jsonschema/1-0-0",data:{navigationStart:e.navigationStart,redirectStart:e.redirectStart,redirectEnd:e.redirectEnd,fetchStart:e.fetchStart,domainLookupStart:e.domainLookupStart,domainLookupEnd:e.domainLookupEnd,connectStart:e.connectStart,secureConnectionStart:e.secureConnectionStart,connectEnd:e.connectEnd,requestStart:e.requestStart,responseStart:e.responseStart,responseEnd:e.responseEnd,unloadEventStart:e.unloadEventStart,unloadEventEnd:e.unloadEventEnd,domLoading:e.domLoading,domInteractive:e.domInteractive,domContentLoadedEventStart:e.domContentLoadedEventStart,domContentLoadedEventEnd:e.domContentLoadedEventEnd,domComplete:e.domComplete,loadEventStart:e.loadEventStart,loadEventEnd:e.loadEventEnd,msFirstPaint:e.msFirstPaint,chromeFirstPaint:e.chromeFirstPaint,requestEnd:e.requestEnd,proxyStart:e.proxyStart,proxyEnd:e.proxyEnd}}]:[]}}},Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.min.js.map
