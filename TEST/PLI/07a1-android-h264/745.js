(self.webpackChunkphenix=self.webpackChunkphenix||[]).push([[745],{228:e=>{e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var o=0,n=new Array(r);o<r;o++)n[o]=e[o];return n},e.exports.__esModule=!0,e.exports.default=e.exports},646:(e,r,o)=>{var n=o(228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},575:e=>{e.exports=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},913:(e,r,o)=>{var n=o(696);function t(e,r){for(var o=0;o<r.length;o++){var t=r[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,n(t.key),t)}}e.exports=function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},713:(e,r,o)=>{var n=o(696);e.exports=function(e,r,o){return(r=n(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e},e.exports.__esModule=!0,e.exports.default=e.exports},860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:(e,r,o)=>{var n=o(646),t=o(860),a=o(379),i=o(206);e.exports=function(e){return n(e)||t(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},868:(e,r,o)=>{var n=o(8).default;e.exports=function(e,r){if("object"!=n(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var t=o.call(e,r||"default");if("object"!=n(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},696:(e,r,o)=>{var n=o(8).default,t=o(868);e.exports=function(e){var r=t(e,"string");return"symbol"==n(r)?r:String(r)},e.exports.__esModule=!0,e.exports.default=e.exports},8:e=>{function r(o){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(o)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},379:(e,r,o)=>{var n=o(228);e.exports=function(e,r){if(e){if("string"==typeof e)return n(e,r);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,r):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},745:(e,r,o)=>{"use strict";var n,t,a,i=o(575),s=o.n(i),u=o(913),f=o.n(u),c=o(713),l=o.n(c),d=o(319),m=o.n(d),p=function(){function e(){s()(this,e)}return f()(e,null,[{key:"browserNameAndVersion",get:function(){return e._browserNameAndVersion}},{key:"browserName",get:function(){return this._browserName}},{key:"browserMajorVersion",get:function(){return this._browserMajorVersion}},{key:"isChrome69",get:function(){return e._isChrome69}},{key:"isChrome70",get:function(){return e._isChrome70}},{key:"isChrome71",get:function(){return e._isChrome71}},{key:"isChrome72",get:function(){return e._isChrome72}},{key:"isChrome74",get:function(){return e._isChrome74}},{key:"isChrome75",get:function(){return e._isChrome75}},{key:"isChrome76",get:function(){return e._isChrome76}},{key:"isChrome77",get:function(){return e._isChrome77}},{key:"isMobile",value:function(){var e;return/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(null===(e=navigator)||void 0===e?void 0:e.userAgent)}},{key:"parseBrowserNameAndVersion",value:function(){if(!navigator||!navigator.userAgent)return"";var r=navigator.userAgent.match(e._browserNameAndVersionRegex);return r&&r[0]?r[0]:e.parseBrowserNameAndVersionForIE()}},{key:"parseBrowserName",value:function(){if(!e._browserNameAndVersion)return"";var r=e._browserNameAndVersion.split("/");return r&&r[0]?r[0]:""}},{key:"parseBrowserMajorVersion",value:function(){if(!e._browserNameAndVersion)return 0;var r=e._browserNameAndVersion.split("/");if(!r||!r[1])return 0;var o=r[1];return o&&Number(o.split(".")[0])||0}},{key:"parseBrowserNameAndVersionForIE",value:function(){if(!navigator||!navigator.userAgent)return"";var e=navigator.userAgent,r=e.indexOf("MSIE ");if(r>0)return"IE/".concat(parseInt(e.substring(r+5,e.indexOf(".",r)),10));if(e.indexOf("Trident/")>0){var o=e.indexOf("rv:");return"IE/".concat(parseInt(e.substring(o+3,e.indexOf(".",o)),10))}return""}}]),e}();n=p,l()(p,"_browserNameAndVersionRegex",/(MSIE|(?!Gecko.+)Firefox|(?!AppleWebKit.+Chrome.+)Safari|(?!AppleWebKit.+)Chrome|AppleWebKit(?!.+Chrome|.+Safari)|Gecko(?!.+Firefox))(?: |\/)([\d.apre]+)/g),l()(p,"_browserNameAndVersion",n.parseBrowserNameAndVersion()),l()(p,"_browserName",n.parseBrowserName()),l()(p,"_browserMajorVersion",n.parseBrowserMajorVersion()),l()(p,"_isChrome69",n._browserNameAndVersion.includes("Chrome/69.")),l()(p,"_isChrome70",n._browserNameAndVersion.includes("Chrome/70.")),l()(p,"_isChrome71",n._browserNameAndVersion.includes("Chrome/71.")),l()(p,"_isChrome72",n._browserNameAndVersion.includes("Chrome/72.")),l()(p,"_isChrome74",n._browserNameAndVersion.includes("Chrome/74.")),l()(p,"_isChrome75",n._browserNameAndVersion.includes("Chrome/75.")),l()(p,"_isChrome76",n._browserNameAndVersion.includes("Chrome/76.")),l()(p,"_isChrome77",n._browserNameAndVersion.includes("Chrome/77."));var y={H264:new Uint8Array([0,0,0,1,9,240,0,0,0,1,103,244,0,10,145,155,43,241,241,248,8,128,0,0,3,0,128,0,0,25,7,137,18,203,0,0,0,1,104,235,227,196,72,68,0,0,1,101,136,130,0,63,112,35,134,230,209,128,9,175,10,65,102,107,84,70,251,113,217,127,255,255,249]),VP8:new Uint8Array([176,2,0,157,1,42,1,0,1,0,57,107,0,39,28,36,12,44,44,68,204,36,65,168,0,19,167,163,122,80,0,254,235,222,47,138,30,107,123,7,114,99,9,164,142,192]),VP9:new Uint8Array([130,73,131,66,0,0,0,0,6,118,56,36,28,25,160,0,0,32,64,0,17,191,221,119,255,64,127,177,0])},b={H264:new Uint8Array([0,0,0,1,9,240,0,0,0,1,65,154,104,73,168,65,104,153,76,15,255,146,129]),VP8:new Uint8Array([49,3,0,228,224,168,155,55,175,16,79,79,177,10,47,228,146,192,31,231,79,70,255,238,81,193,93,0,254,235,222,47,138,30,107,123,7,114,99,9,164,142,192]),VP9:new Uint8Array([134,0,64,146,156,36,72,0,0,3,112,0,0,75,64])},v={I:new Uint8Array([0,0,0,1,103,66,192,13,218,24,222,34,34,16,0,0,3,0,16,0,0,3,3,200,241,66,170,0,0,0,1,104,206,15,200,0,0,0,1,6,3].concat(m()(new Uint8Array(40).fill(255)),[95],m()(new Uint8Array(10295).fill(255)),[128,0,0,0,1,101,136,132,5],m()(new Uint8Array(3).fill(255)),[15,69,0,1,87,159,39,39,39,39,39,93,117,215,93,117,215,93,117,215,93,117,215,93,117,215,93,117,215,93,117,215,93,120])),P:new Uint8Array([0,0,0,1,6,3].concat(m()(new Uint8Array(40).fill(255)),[164],m()(new Uint8Array(10364).fill(255)),[128,0,0,0,1,65,154,32,21,240,75])),truncated:new Uint8Array([0,0,0,1,101,136,132,5].concat(m()(new Uint8Array(3).fill(255)),[15,69,0,1,87,159,39,39,39,39,39,93,117,215,93,117,215,93,117,215,93,117,215,93,117,215,93,117,215,93,117,215,93,120]))},h={opus:new Uint8Array([104,7,217,171,188,121,135,171,142,74,20,243,167,28,242,154,122,69,167,45,68,37,116,76,173,22,179,14,81,87,234,231,173,42,56,206,51])},w=new Uint8Array([0]),x="Chrome"===p.browserName&&/Macintosh/i.test(null===(t=navigator)||void 0===t?void 0:t.userAgent),_="Chrome"===p.browserName&&/Android/i.test(null===(a=navigator)||void 0===a?void 0:a.userAgent),A=-1;function g(e,r){return"H264"!==e?r:("H264"===e&&_&&console.log("NIKNIK: invalidFrame android chrome"),"H264"!==e||_||console.log("NIKNIK: invalidFrame NOT android chrome"),x||(v.truncated[6]^=8),w.buffer)}self.onmessage=function(e){C.forceInvalidFrame=e.data.forceInvalidFrame},self.RTCTransformEvent&&(self.onrtctransform=function(e){var r=e.transformer;C.codec=r.options.codec,C.transformFunction="video"===r.options.kind?C.videoTransformFunction:C.audioTransformFunction,C.forceInvalidFrame=!1;var o=new TransformStream({transform:C.transformFunction}),n=r.readable,t=r.writable;n.pipeThrough(o).pipeTo(t)});var C=function(){function e(){throw s()(this,e),new Error("WorkerTransformStream is a static class that may not be instantiated")}return f()(e,null,[{key:"videoTransformFunction",value:function(r,o){postMessage({chunk:{type:r.type,timestamp:r.timestamp,data:r.data}}),e.forceInvalidFrame?(e.forceInvalidFrame=!1,r.data=g(e.codec,r.data)):"key"===r.type?r.data=function(e){switch(e){case"H264":return x?y[e].buffer:v.I.buffer;case"VP8":case"VP9":return y[e].buffer;default:return}}(e.codec)||r.data:r.data=function(e){switch(2!==A&&(A=2,console.log("NIKNIK: P frame: ",e," isAndroidChrome: ",_)),e){case"H264":return x?b[e].buffer:v.P.buffer;case"VP8":case"VP9":return b[e].buffer;default:return}}(e.codec)||r.data,o.enqueue(r)}},{key:"audioTransformFunction",value:function(r,o){postMessage({chunk:{timestamp:r.timestamp,data:r.data}}),e.forceInvalidFrame?(e.forceInvalidFrame=!1,r.data=g(e.codec,r.data)):r.data=function(e){if("opus"===e)return h[e].buffer}(e.codec)||r.data,o.enqueue(r)}}]),e}();l()(C,"codec",void 0),l()(C,"transformFunction",void 0),l()(C,"forceInvalidFrame",void 0)}}]);
//# sourceMappingURL=745.js.map