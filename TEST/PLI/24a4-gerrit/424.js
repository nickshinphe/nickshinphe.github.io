(self.webpackChunkphenix=self.webpackChunkphenix||[]).push([[424],{228:e=>{e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o},e.exports.__esModule=!0,e.exports.default=e.exports},646:(e,r,t)=>{var o=t(228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},575:e=>{e.exports=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},913:(e,r,t)=>{var o=t(696);function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,o(n.key),n)}}e.exports=function(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},713:(e,r,t)=>{var o=t(696);e.exports=function(e,r,t){return(r=o(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e},e.exports.__esModule=!0,e.exports.default=e.exports},860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:(e,r,t)=>{var o=t(646),n=t(860),a=t(379),i=t(206);e.exports=function(e){return o(e)||n(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},868:(e,r,t)=>{var o=t(8).default;e.exports=function(e,r){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},696:(e,r,t)=>{var o=t(8).default,n=t(868);e.exports=function(e){var r=n(e,"string");return"symbol"==o(r)?r:String(r)},e.exports.__esModule=!0,e.exports.default=e.exports},8:e=>{function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},379:(e,r,t)=>{var o=t(228);e.exports=function(e,r){if(e){if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,r):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},424:(e,r,t)=>{"use strict";var o,n,a,i=t(575),u=t.n(i),s=t(913),m=t.n(s),d=t(713),f=t.n(d),l=t(319),c=t.n(l),p=function(){function e(){u()(this,e)}return m()(e,null,[{key:"browserNameAndVersion",get:function(){return e._browserNameAndVersion}},{key:"browserName",get:function(){return this._browserName}},{key:"browserMajorVersion",get:function(){return this._browserMajorVersion}},{key:"isChrome69",get:function(){return e._isChrome69}},{key:"isChrome70",get:function(){return e._isChrome70}},{key:"isChrome71",get:function(){return e._isChrome71}},{key:"isChrome72",get:function(){return e._isChrome72}},{key:"isChrome74",get:function(){return e._isChrome74}},{key:"isChrome75",get:function(){return e._isChrome75}},{key:"isChrome76",get:function(){return e._isChrome76}},{key:"isChrome77",get:function(){return e._isChrome77}},{key:"isAndroid",get:function(){return e._isAndroid}},{key:"isMobile",value:function(){var e;return/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(null===(e=navigator)||void 0===e?void 0:e.userAgent)}},{key:"parseBrowserNameAndVersion",value:function(){if(!navigator||!navigator.userAgent)return"";var r=navigator.userAgent.match(e._browserNameAndVersionRegex);return r&&r[0]?r[0]:e.parseBrowserNameAndVersionForIE()}},{key:"parseBrowserName",value:function(){if(!e._browserNameAndVersion)return"";var r=e._browserNameAndVersion.split("/");return r&&r[0]?r[0]:""}},{key:"parseBrowserMajorVersion",value:function(){if(!e._browserNameAndVersion)return 0;var r=e._browserNameAndVersion.split("/");if(!r||!r[1])return 0;var t=r[1];return t&&Number(t.split(".")[0])||0}},{key:"parseBrowserNameAndVersionForIE",value:function(){if(!navigator||!navigator.userAgent)return"";var e=navigator.userAgent,r=e.indexOf("MSIE ");if(r>0)return"IE/".concat(parseInt(e.substring(r+5,e.indexOf(".",r)),10));if(e.indexOf("Trident/")>0){var t=e.indexOf("rv:");return"IE/".concat(parseInt(e.substring(t+3,e.indexOf(".",t)),10))}return""}}]),e}();o=p,f()(p,"_browserNameAndVersionRegex",/(MSIE|(?!Gecko.+)Firefox|(?!AppleWebKit.+Chrome.+)Safari|(?!AppleWebKit.+)Chrome|AppleWebKit(?!.+Chrome|.+Safari)|Gecko(?!.+Firefox))(?: |\/)([\d.apre]+)/g),f()(p,"_browserNameAndVersion",o.parseBrowserNameAndVersion()),f()(p,"_browserName",o.parseBrowserName()),f()(p,"_browserMajorVersion",o.parseBrowserMajorVersion()),f()(p,"_isChrome69",o._browserNameAndVersion.includes("Chrome/69.")),f()(p,"_isChrome70",o._browserNameAndVersion.includes("Chrome/70.")),f()(p,"_isChrome71",o._browserNameAndVersion.includes("Chrome/71.")),f()(p,"_isChrome72",o._browserNameAndVersion.includes("Chrome/72.")),f()(p,"_isChrome74",o._browserNameAndVersion.includes("Chrome/74.")),f()(p,"_isChrome75",o._browserNameAndVersion.includes("Chrome/75.")),f()(p,"_isChrome76",o._browserNameAndVersion.includes("Chrome/76.")),f()(p,"_isChrome77",o._browserNameAndVersion.includes("Chrome/77.")),f()(p,"_isAndroid",/Android/i.test(null===(n=navigator)||void 0===n?void 0:n.userAgent));var b=Symbol(),_=function(){function e(){throw u()(this,e),new Error("SurrogateFrameDataManager is a static class that may not be instantiated")}return m()(e,null,[{key:"getSurrogateVideoIFramePerCodec",value:function(r){switch(r){case"H264":return e._useUpdateSurrogatePFrameFrameNumber?(e._surrogatePFrameFrameNumber=e._surrogatePFrameFrameNumberReset,e._dummy82x82H264.IFrame.buffer):e._dummy2x2VideoIFramePerCodec[r].buffer;case"VP8":case"VP9":return e._dummy2x2VideoIFramePerCodec[r].buffer;default:return}}},{key:"getSurrogateVideoPFramePerCodec",value:function(r){switch(r){case"H264":return e._useUpdateSurrogatePFrameFrameNumber?e.getSurrogatePFrameAndUpdateFrameNumber():e._dummy2x2VideoPFramePerCodec[r].buffer;case"VP8":case"VP9":return e._dummy2x2VideoPFramePerCodec[r].buffer;default:return}}},{key:"getSurrogateAudioSilentPerCodec",value:function(r){if("opus"===r)return e._dummyAudioSilentPerCodec[r].buffer}},{key:"getInvalidSurrogateAudioData",value:function(){return e._singleZeroByte.buffer}},{key:"getInvalidSurrogateVideoIFrame",value:function(r){return"H264"===r&&e._useUpdateSurrogatePFrameFrameNumber&&(e._surrogatePFrameFrameNumber=e._surrogatePFrameFrameNumberReset,e._isAndroidChrome)?b:e._singleZeroByte.buffer}},{key:"getInvalidSurrogateVideoPFrame",value:function(r){if("H264"===r&&e._useUpdateSurrogatePFrameFrameNumber){var t=e._surrogatePFrameFrameNumber,o=e.getSurrogatePFrameAndUpdateFrameNumber();return t>e._surrogatePFrameFrameNumberReset?e._isAndroidChrome?b:e._singleZeroByte.buffer:(e._surrogatePFrameFrameNumber++,o)}return e._singleZeroByte.buffer}},{key:"getSurrogatePFrameAndUpdateFrameNumber",value:function(){var r=154|(14&e._surrogatePFrameFrameNumber)>>1,t=32|(1&e._surrogatePFrameFrameNumber)<<7,o=e._dummy82x82H264.PFrame.slice().buffer;return o[e._dummy82x82H264PFrameFrameNumberIndex]=r,o[e._dummy82x82H264PFrameFrameNumberIndex+1]=t,e._surrogatePFrameFrameNumber++,o}}]),e}();a=_,f()(_,"_dummy2x2VideoIFramePerCodec",{H264:new Uint8Array([0,0,0,1,9,240,0,0,0,1,103,244,0,10,145,155,43,241,241,248,8,128,0,0,3,0,128,0,0,25,7,137,18,203,0,0,0,1,104,235,227,196,72,68,0,0,1,101,136,130,0,63,112,35,134,230,209,128,9,175,10,65,102,107,84,70,251,113,217,127,255,255,249]),VP8:new Uint8Array([176,2,0,157,1,42,1,0,1,0,57,107,0,39,28,36,12,44,44,68,204,36,65,168,0,19,167,163,122,80,0,254,235,222,47,138,30,107,123,7,114,99,9,164,142,192]),VP9:new Uint8Array([130,73,131,66,0,0,0,0,6,118,56,36,28,25,160,0,0,32,64,0,17,191,221,119,255,64,127,177,0])}),f()(_,"_dummy2x2VideoPFramePerCodec",{H264:new Uint8Array([0,0,0,1,9,240,0,0,0,1,65,154,104,73,168,65,104,153,76,15,255,146,129]),VP8:new Uint8Array([49,3,0,228,224,168,155,55,175,16,79,79,177,10,47,228,146,192,31,231,79,70,255,238,81,193,93,0,254,235,222,47,138,30,107,123,7,114,99,9,164,142,192]),VP9:new Uint8Array([134,0,64,146,156,36,72,0,0,3,112,0,0,75,64])}),f()(_,"_dummy82x82H264",{IFrame:new Uint8Array([0,0,0,1,103,66,192,13,218,24,222,34,34,16,0,0,3,0,16,0,0,3,3,200,241,66,170,0,0,0,1,104,206,15,200,0,0,0,1,6,3].concat(c()(new Uint8Array(40).fill(255)),[95],c()(new Uint8Array(10295).fill(255)),[128,0,0,0,1,101,136,132,5],c()(new Uint8Array(3).fill(255)),[15,69,0,1,87,159,39,39,39,39,39,93,117,215,93,117,215,93,117,215,93,117,215,93,117,215,93,117,215,93,117,215,93,120])),PFrame:new Uint8Array([0,0,0,1,6,3].concat(c()(new Uint8Array(40).fill(255)),[164],c()(new Uint8Array(10364).fill(255)),[128,0,0,0,1,65,154,32,21,240,75]))}),f()(_,"_dummy82x82H264PFrameFrameNumberIndex",10418),f()(_,"_dummyAudioSilentPerCodec",{opus:new Uint8Array([104,7,217,171,188,121,135,171,142,74,20,243,167,28,242,154,122,69,167,45,68,37,116,76,173,22,179,14,81,87,234,231,173,42,56,206,51])}),f()(_,"_singleZeroByte",new Uint8Array([0])),f()(_,"_isAndroidChrome","Chrome"===p.browserName&&p.isAndroid),f()(_,"_isMobileChrome","Chrome"===p.browserName&&p.isMobile()),f()(_,"_isSafari","Safari"===p.browserName),f()(_,"_useUpdateSurrogatePFrameFrameNumber",a._isMobileChrome||a._isSafari),f()(_,"_surrogatePFrameFrameNumberReset",1),f()(_,"_surrogatePFrameFrameNumber",a._surrogatePFrameFrameNumberReset),self.onmessage=function(e){y.forceInvalidFrame=e.data.forceInvalidFrame},self.RTCTransformEvent&&(self.onrtctransform=function(e){var r=e.transformer;y.codec=r.options.codec,y.transformFunction="video"===r.options.kind?y.videoTransformFunction:y.audioTransformFunction,y.forceInvalidFrame=!1;var t=new TransformStream({transform:y.transformFunction}),o=r.readable,n=r.writable;o.pipeThrough(t).pipeTo(n)});var y=function(){function e(){throw u()(this,e),new Error("WorkerTransformStream is a static class that may not be instantiated")}return m()(e,null,[{key:"videoTransformFunction",value:function(r,t){if(postMessage({chunk:{type:r.type,timestamp:r.timestamp,data:r.data}}),e.forceInvalidFrame){var o;if(e.forceInvalidFrame=!1,(o="key"===r.type?_.getInvalidSurrogateVideoIFrame(e.codec):_.getInvalidSurrogateVideoPFrame(e.codec))===b)return;r.data=o||r.data}else"key"===r.type?r.data=_.getSurrogateVideoIFramePerCodec(e.codec)||r.data:r.data=_.getSurrogateVideoPFramePerCodec(e.codec)||r.data;t.enqueue(r)}},{key:"audioTransformFunction",value:function(r,t){postMessage({chunk:{timestamp:r.timestamp,data:r.data}}),e.forceInvalidFrame?(e.forceInvalidFrame=!1,r.data=_.getInvalidSurrogateAudioData()||r.data):r.data=_.getSurrogateAudioSilentPerCodec(e.codec)||r.data,t.enqueue(r)}}]),e}();f()(y,"codec",void 0),f()(y,"transformFunction",void 0),f()(y,"forceInvalidFrame",void 0)}}]);
//# sourceMappingURL=424.js.map