(self.webpackChunkphenix=self.webpackChunkphenix||[]).push([[378],{378:(e,r,o)=>{"use strict";var t,n,a,i,s=o(383),u=o.n(s),m=o(579),d=o.n(m),l=o(693),f=o.n(l),c=o(132),p=o.n(c),y=function(){function e(){u()(this,e)}return d()(e,null,[{key:"browserNameAndVersion",get:function(){return e._browserNameAndVersion}},{key:"browserName",get:function(){return this._browserName}},{key:"browserMajorVersion",get:function(){return this._browserMajorVersion}},{key:"isAndroid",get:function(){return e._isAndroid}},{key:"isChrome69",get:function(){return e._isChrome69}},{key:"isChrome70",get:function(){return e._isChrome70}},{key:"isChrome71",get:function(){return e._isChrome71}},{key:"isChrome72",get:function(){return e._isChrome72}},{key:"isChrome74",get:function(){return e._isChrome74}},{key:"isChrome75",get:function(){return e._isChrome75}},{key:"isChrome76",get:function(){return e._isChrome76}},{key:"isChrome77",get:function(){return e._isChrome77}},{key:"isMobile",value:function(){return e._isMobile}},{key:"parseBrowserNameAndVersion",value:function(){if(!navigator||!navigator.userAgent)return"";var r=navigator.userAgent.match(e._browserNameAndVersionRegex);return r&&r[0]?r[0]:e.parseBrowserNameAndVersionForIE()}},{key:"parseBrowserName",value:function(){if(!e._browserNameAndVersion)return"";var r=e._browserNameAndVersion.split("/");return r&&r[0]?r[0]:""}},{key:"parseBrowserMajorVersion",value:function(){if(!e._browserNameAndVersion)return 0;var r=e._browserNameAndVersion.split("/");if(!r||!r[1])return 0;var o=r[1];return o&&Number(o.split(".")[0])||0}},{key:"parseBrowserNameAndVersionForIE",value:function(){if(!navigator||!navigator.userAgent)return"";var e=navigator.userAgent,r=e.indexOf("MSIE ");if(r>0)return"IE/".concat(parseInt(e.substring(r+5,e.indexOf(".",r)),10));if(e.indexOf("Trident/")>0){var o=e.indexOf("rv:");return"IE/".concat(parseInt(e.substring(o+3,e.indexOf(".",o)),10))}return""}}])}();t=y,f()(y,"_browserNameAndVersionRegex",/(MSIE|(?!Gecko.+)Firefox|(?!AppleWebKit.+Chrome.+)Safari|(?!AppleWebKit.+)Chrome|AppleWebKit(?!.+Chrome|.+Safari)|Gecko(?!.+Firefox))(?: |\/)([\d.apre]+)/g),f()(y,"_browserNameAndVersion",t.parseBrowserNameAndVersion()),f()(y,"_browserName",t.parseBrowserName()),f()(y,"_browserMajorVersion",t.parseBrowserMajorVersion()),f()(y,"_isMobile",/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(null===(n=navigator)||void 0===n?void 0:n.userAgent)),f()(y,"_isAndroid",/Android/i.test(null===(a=navigator)||void 0===a?void 0:a.userAgent)),f()(y,"_isChrome69",t._browserNameAndVersion.includes("Chrome/69.")),f()(y,"_isChrome70",t._browserNameAndVersion.includes("Chrome/70.")),f()(y,"_isChrome71",t._browserNameAndVersion.includes("Chrome/71.")),f()(y,"_isChrome72",t._browserNameAndVersion.includes("Chrome/72.")),f()(y,"_isChrome74",t._browserNameAndVersion.includes("Chrome/74.")),f()(y,"_isChrome75",t._browserNameAndVersion.includes("Chrome/75.")),f()(y,"_isChrome76",t._browserNameAndVersion.includes("Chrome/76.")),f()(y,"_isChrome77",t._browserNameAndVersion.includes("Chrome/77."));var _=Symbol(),g=function(){function e(){throw u()(this,e),new Error("SurrogateFrameDataManager is a static class that may not be instantiated")}return d()(e,null,[{key:"getSurrogateAudioSilentPerCodec",value:function(r){if("OPUS"===r.toUpperCase())return e._dummyAudioSilentPerCodec.OPUS.buffer}},{key:"getInvalidSurrogateAudioData",value:function(){return e._singleZeroByte.buffer}},{key:"getSurrogateVideoIFramePerCodec",value:function(r){switch(r.toUpperCase()){case"H264":return e._useUpdateSurrogate82x82PFrameFrameNumber?(e._surrogate82x82PFrameFrameNumber=e._surrogate82x82PFrameFrameNumberReset,e._dummy82x82H264.IFrame.buffer):e._dummy2x2VideoIFramePerCodec.H264.buffer;case"VP8":return e._dummy2x2VideoIFramePerCodec.VP8.buffer;case"VP9":return e._dummy2x2VideoIFramePerCodec.VP9.buffer;default:return}}},{key:"getInvalidSurrogateVideoIFrame",value:function(r){return"H264"===r.toUpperCase()&&e._useUpdateSurrogate82x82PFrameFrameNumber&&(e._surrogate82x82PFrameFrameNumber=e._surrogate82x82PFrameFrameNumberReset,e._isAndroidChrome)?_:e._singleZeroByte.buffer}},{key:"getSurrogateVideoPFramePerCodec",value:function(r){switch(r.toUpperCase()){case"H264":return e._useUpdateSurrogate82x82PFrameFrameNumber?e.getSurrogate82x82PFrameAndUpdateFrameNumber():e._dummy2x2VideoPFramePerCodec.H264.buffer;case"VP8":return e._dummy2x2VideoPFramePerCodec.VP8.buffer;case"VP9":return e._dummy2x2VideoPFramePerCodec.VP9.buffer;default:return}}},{key:"getInvalidSurrogateVideoPFrame",value:function(r){if("H264"===r.toUpperCase()&&e._useUpdateSurrogate82x82PFrameFrameNumber){var o=e._surrogate82x82PFrameFrameNumber,t=e.getSurrogate82x82PFrameAndUpdateFrameNumber();return o>e._surrogate82x82PFrameFrameNumberReset?e._isAndroidChrome?_:e._singleZeroByte.buffer:(e._surrogate82x82PFrameFrameNumber++,t)}return e._singleZeroByte.buffer}},{key:"getSurrogate82x82PFrameAndUpdateFrameNumber",value:function(){var r=(14&e._surrogate82x82PFrameFrameNumber)>>1,o=(1&e._surrogate82x82PFrameFrameNumber)<<7,t=e._dummy82x82H264.PFrame.slice().buffer,n=e._dummy82x82H264PFrameFrameNumberIndex;return t[n]|=r,t[n+1]|=o,e._surrogate82x82PFrameFrameNumber++,t}}])}();i=g,f()(g,"_isSafari","Safari"===y.browserName),f()(g,"_isMobileChrome","Chrome"===y.browserName&&y.isMobile()),f()(g,"_isAndroidChrome","Chrome"===y.browserName&&y.isAndroid),f()(g,"_singleZeroByte",new Uint8Array([0])),f()(g,"_dummyAudioSilentPerCodec",{OPUS:new Uint8Array([104,7,217,171,188,121,135,171,142,74,20,243,167,28,242,154,122,69,167,45,68,37,116,76,173,22,179,14,81,87,234,231,173,42,56,206,51])}),f()(g,"_dummy2x2VideoIFramePerCodec",{H264:new Uint8Array([0,0,0,1,9,240,0,0,0,1,103,244,0,10,145,155,43,241,241,248,8,128,0,0,3,0,128,0,0,25,7,137,18,203,0,0,0,1,104,235,227,196,72,68,0,0,1,101,136,130,0,63,112,35,134,230,209,128,9,175,10,65,102,107,84,70,251,113,217,127,255,255,249]),VP8:new Uint8Array([176,2,0,157,1,42,1,0,1,0,57,107,0,39,28,36,12,44,44,68,204,36,65,168,0,19,167,163,122,80,0,254,235,222,47,138,30,107,123,7,114,99,9,164,142,192]),VP9:new Uint8Array([130,73,131,66,0,0,0,0,6,118,56,36,28,25,160,0,0,32,64,0,17,191,221,119,255,64,127,177,0])}),f()(g,"_dummy2x2VideoPFramePerCodec",{H264:new Uint8Array([0,0,0,1,9,240,0,0,0,1,65,154,104,73,168,65,104,153,76,15,255,146,129]),VP8:new Uint8Array([49,3,0,228,224,168,155,55,175,16,79,79,177,10,47,228,146,192,31,231,79,70,255,238,81,193,93,0,254,235,222,47,138,30,107,123,7,114,99,9,164,142,192]),VP9:new Uint8Array([134,0,64,146,156,36,72,0,0,3,112,0,0,75,64])}),f()(g,"_dummy82x82H264",{IFrame:new Uint8Array([0,0,0,1,103,66,192,13,218,24,222,34,34,16,0,0,3,0,16,0,0,3,3,200,241,66,170,0,0,0,1,104,206,15,200,0,0,0,1,6,3].concat(p()(new Uint8Array(40).fill(255)),[95],p()(new Uint8Array(10295).fill(255)),[128,0,0,0,1,101,136,132,5],p()(new Uint8Array(3).fill(255)),[15,69,0,1,87,159,39,39,39,39,39,93,117,215,93,117,215,93,117,215,93,117,215,93,117,215,93,117,215,93,117,215,93,120])),PFrame:new Uint8Array([0,0,0,1,6,3].concat(p()(new Uint8Array(40).fill(255)),[164],p()(new Uint8Array(10364).fill(255)),[128,0,0,0,1,65,154,32,21,240,75])),truncated:new Uint8Array([0,0,0,1,103,0,0,0,1,104])}),f()(g,"_dummy82x82H264PFrameFrameNumberIndex",10418),f()(g,"_surrogate82x82PFrameFrameNumberReset",1),f()(g,"_useUpdateSurrogate82x82PFrameFrameNumber",i._isMobileChrome||i._isSafari),f()(g,"_surrogate82x82PFrameFrameNumber",i._surrogate82x82PFrameFrameNumberReset),self.onmessage=function(e){console.log("NIKNIK: worker.onmessage"),b.forceInvalidFrame=e.data.forceInvalidFrame},self.RTCTransformEvent?(console.log("NIKNIK: self.RTCTransformEvent 10c1d"),self.onrtctransform=function(e){var r=e.transformer;console.log("NIKNIK: worker event.transformer: ",e.transformer),console.dir(e.transformer),b.transformer=r,b.codec=r.options.codec,b.transformFunction="video"===r.options.kind?b.videoTransformFunction:b.audioTransformFunction,b.forceInvalidFrame=!1;var o=new TransformStream({transform:b.transformFunction}),t=r.readable,n=r.writable;t.pipeThrough(o).pipeTo(n)}):console.log("NIKNIK: NOT self.RTCTransformEvent");var b=function(){function e(){throw u()(this,e),new Error("WorkerTransformStream is a static class that may not be instantiated")}return d()(e,null,[{key:"videoTransformFunction",value:function(r,o){if(console.log("NIKNIK: videoTransformFunction"),postMessage({chunk:{type:r.type,timestamp:r.timestamp,data:r.data}}),e.forceInvalidFrame){if(e.forceInvalidFrame=!1,console.log("NIKNIK: worker forceInvalidFrame: true"),e.transformer.sendKeyFrameRequest)return console.log("NIKNIK: worker sendKeyFrameRequest YES - BEFORE SkipFrame"),e.transformer.sendKeyFrameRequest(),console.log("NIKNIK: worker sendKeyFrameRequest YES - AFTER SkipFrame"),void e._validVideoFrame(r,o);var t;if((t="key"===r.type?g.getInvalidSurrogateVideoIFrame(e.codec):g.getInvalidSurrogateVideoPFrame(e.codec))===_)return void console.log("NIKNIK: SHOULD NEVER BE HERE: SkipFrame IS ANDROID CHROME ONLY!!!");if(e.transformer.sendKeyFrameRequest)return console.log("NIKNIK: worker sendKeyFrameRequest YES - AFTER SkipFrame"),void e.transformer.sendKeyFrameRequest();console.log("NIKNIK: worker sendKeyFrameRequest NO"),r.data=t||r.data,o.enqueue(r)}else console.log("NIKNIK: worker _validVideoFrame"),e._validVideoFrame(r,o)}},{key:"_validVideoFrame",value:function(r,o){"key"===r.type?r.data=g.getSurrogateVideoIFramePerCodec(e.codec)||r.data:r.data=g.getSurrogateVideoPFramePerCodec(e.codec)||r.data,o.enqueue(r)}},{key:"audioTransformFunction",value:function(r,o){postMessage({chunk:{timestamp:r.timestamp,data:r.data}}),e.forceInvalidFrame?(e.forceInvalidFrame=!1,r.data=g.getInvalidSurrogateAudioData()):r.data=g.getSurrogateAudioSilentPerCodec(e.codec)||r.data,o.enqueue(r)}}])}();f()(b,"codec",void 0),f()(b,"transformFunction",void 0),f()(b,"forceInvalidFrame",void 0),f()(b,"transformer",void 0)},79:e=>{e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var o=0,t=Array(r);o<r;o++)t[o]=e[o];return t},e.exports.__esModule=!0,e.exports.default=e.exports},901:(e,r,o)=>{var t=o(79);e.exports=function(e){if(Array.isArray(e))return t(e)},e.exports.__esModule=!0,e.exports.default=e.exports},383:e=>{e.exports=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},579:(e,r,o)=>{var t=o(736);function n(e,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,t(n.key),n)}}e.exports=function(e,r,o){return r&&n(e.prototype,r),o&&n(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},693:(e,r,o)=>{var t=o(736);e.exports=function(e,r,o){return(r=t(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e},e.exports.__esModule=!0,e.exports.default=e.exports},291:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},869:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},132:(e,r,o)=>{var t=o(901),n=o(291),a=o(122),i=o(869);e.exports=function(e){return t(e)||n(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},45:(e,r,o)=>{var t=o(738).default;e.exports=function(e,r){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,r||"default");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},736:(e,r,o)=>{var t=o(738).default,n=o(45);e.exports=function(e){var r=n(e,"string");return"symbol"==t(r)?r:r+""},e.exports.__esModule=!0,e.exports.default=e.exports},738:e=>{function r(o){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(o)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},122:(e,r,o)=>{var t=o(79);e.exports=function(e,r){if(e){if("string"==typeof e)return t(e,r);var o={}.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,r):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=378.js.map