(self["webpackChunkphenix"] = self["webpackChunkphenix"] || []).push([["src_sdk_transformation_WorkerTransformStream_ts"],{

/***/ "./src/dom/BrowserDetector.ts":
/*!************************************!*\
  !*** ./src/dom/BrowserDetector.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrowserDetector)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



var _BrowserDetector, _navigator, _navigator2;
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var BrowserDetector = /*#__PURE__*/function () {
  function BrowserDetector() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, BrowserDetector);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(BrowserDetector, null, [{
    key: "browserNameAndVersion",
    get: function get() {
      return BrowserDetector._browserNameAndVersion;
    }
  }, {
    key: "browserName",
    get: function get() {
      return this._browserName;
    }
  }, {
    key: "browserMajorVersion",
    get: function get() {
      return this._browserMajorVersion;
    }
  }, {
    key: "isAndroid",
    get: function get() {
      return BrowserDetector._isAndroid;
    }
  }, {
    key: "isChrome69",
    get: function get() {
      return BrowserDetector._isChrome69;
    }
  }, {
    key: "isChrome70",
    get: function get() {
      return BrowserDetector._isChrome70;
    }
  }, {
    key: "isChrome71",
    get: function get() {
      return BrowserDetector._isChrome71;
    }
  }, {
    key: "isChrome72",
    get: function get() {
      return BrowserDetector._isChrome72;
    }
  }, {
    key: "isChrome74",
    get: function get() {
      return BrowserDetector._isChrome74;
    }
  }, {
    key: "isChrome75",
    get: function get() {
      return BrowserDetector._isChrome75;
    }
  }, {
    key: "isChrome76",
    get: function get() {
      return BrowserDetector._isChrome76;
    }
  }, {
    key: "isChrome77",
    get: function get() {
      return BrowserDetector._isChrome77;
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      return BrowserDetector._isMobile;
    }
  }, {
    key: "parseBrowserNameAndVersion",
    value: function parseBrowserNameAndVersion() {
      if (!navigator || !navigator.userAgent) {
        return '';
      }
      var browserNameAndVersion = navigator.userAgent.match(BrowserDetector._browserNameAndVersionRegex);
      if (browserNameAndVersion && browserNameAndVersion[0]) {
        return browserNameAndVersion[0];
      }
      return BrowserDetector.parseBrowserNameAndVersionForIE();
    }
  }, {
    key: "parseBrowserName",
    value: function parseBrowserName() {
      if (!BrowserDetector._browserNameAndVersion) {
        return '';
      }
      var browserNameList = BrowserDetector._browserNameAndVersion.split('/');
      if (!browserNameList || !browserNameList[0]) {
        return '';
      }
      return browserNameList[0];
    }
  }, {
    key: "parseBrowserMajorVersion",
    value: function parseBrowserMajorVersion() {
      if (!BrowserDetector._browserNameAndVersion) {
        return 0;
      }
      var browserVersionList = BrowserDetector._browserNameAndVersion.split('/');
      if (!browserVersionList || !browserVersionList[1]) {
        return 0;
      }
      var fullVersion = browserVersionList[1];
      if (!fullVersion) {
        return 0;
      }
      return Number(fullVersion.split('.')[0]) || 0;
    }
  }, {
    key: "parseBrowserNameAndVersionForIE",
    value: function parseBrowserNameAndVersionForIE() {
      if (!navigator || !navigator.userAgent) {
        return '';
      }
      var userAgent = navigator.userAgent;
      var msie = userAgent.indexOf('MSIE ');
      if (msie > 0) {
        // IE 10 or older => return version number
        return "IE/".concat(parseInt(userAgent.substring(msie + 5, userAgent.indexOf('.', msie)), 10));
      }
      var trident = userAgent.indexOf('Trident/');
      if (trident > 0) {
        // IE 11 => return version number
        var version = userAgent.indexOf('rv:');
        return "IE/".concat(parseInt(userAgent.substring(version + 3, userAgent.indexOf('.', version)), 10));
      }
      return '';
    }
  }]);
}();
_BrowserDetector = BrowserDetector;
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_browserNameAndVersionRegex", /(MSIE|(?!Gecko.+)Firefox|(?!AppleWebKit.+Chrome.+)Safari|(?!AppleWebKit.+)Chrome|AppleWebKit(?!.+Chrome|.+Safari)|Gecko(?!.+Firefox))(?: |\/)([\d.apre]+)/g);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_browserNameAndVersion", _BrowserDetector.parseBrowserNameAndVersion());
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_browserName", _BrowserDetector.parseBrowserName());
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_browserMajorVersion", _BrowserDetector.parseBrowserMajorVersion());
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isMobile", /Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test((_navigator = navigator) === null || _navigator === void 0 ? void 0 : _navigator.userAgent));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isAndroid", /Android/i.test((_navigator2 = navigator) === null || _navigator2 === void 0 ? void 0 : _navigator2.userAgent));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome69", _BrowserDetector._browserNameAndVersion.includes('Chrome/69.'));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome70", _BrowserDetector._browserNameAndVersion.includes('Chrome/70.'));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome71", _BrowserDetector._browserNameAndVersion.includes('Chrome/71.'));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome72", _BrowserDetector._browserNameAndVersion.includes('Chrome/72.'));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome74", _BrowserDetector._browserNameAndVersion.includes('Chrome/74.'));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome75", _BrowserDetector._browserNameAndVersion.includes('Chrome/75.'));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome76", _BrowserDetector._browserNameAndVersion.includes('Chrome/76.'));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome77", _BrowserDetector._browserNameAndVersion.includes('Chrome/77.'));


/***/ }),

/***/ "./src/sdk/transformation/SurrogateFrameDataManager.ts":
/*!*************************************************************!*\
  !*** ./src/sdk/transformation/SurrogateFrameDataManager.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkipFrame: () => (/* binding */ SkipFrame),
/* harmony export */   "default": () => (/* binding */ SurrogateFrameDataManager)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dom/BrowserDetector */ "./src/dom/BrowserDetector.ts");




var _SurrogateFrameDataManager;
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var SkipFrame = Symbol();
var SurrogateFrameDataManager = /*#__PURE__*/function () {
  function SurrogateFrameDataManager() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, SurrogateFrameDataManager);
    throw new Error('SurrogateFrameDataManager is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(SurrogateFrameDataManager, null, [{
    key: "getSurrogateAudioSilentPerCodec",
    value: function getSurrogateAudioSilentPerCodec(codec) {
      switch (codec.toUpperCase()) {
        case 'OPUS':
          {
            return SurrogateFrameDataManager._dummyAudioSilentPerCodec.OPUS.buffer;
          }
        default:
          {
            return undefined;
          }
      }
    }
  }, {
    key: "getInvalidSurrogateAudioData",
    value: function getInvalidSurrogateAudioData() {
      return SurrogateFrameDataManager._singleZeroByte.buffer;
    }
  }, {
    key: "getSurrogateVideoIFramePerCodec",
    value: function getSurrogateVideoIFramePerCodec(codec) {
      switch (codec.toUpperCase()) {
        case 'H264':
          {
            if (SurrogateFrameDataManager._useUpdateSurrogate82x82PFrameFrameNumber) {
              SurrogateFrameDataManager._surrogate82x82PFrameFrameNumber = SurrogateFrameDataManager._surrogate82x82PFrameFrameNumberReset;
              return SurrogateFrameDataManager._dummy82x82H264.IFrame.buffer;
            }
            return SurrogateFrameDataManager._dummy2x2VideoIFramePerCodec.H264.buffer;
          }
        case 'VP8':
          {
            return SurrogateFrameDataManager._dummy2x2VideoIFramePerCodec.VP8.buffer;
          }
        case 'VP9':
          {
            return SurrogateFrameDataManager._dummy2x2VideoIFramePerCodec.VP9.buffer;
          }
        default:
          {
            return undefined;
          }
      }
    }
  }, {
    key: "getInvalidSurrogateVideoIFrame",
    value: function getInvalidSurrogateVideoIFrame(codec) {
      if (codec.toUpperCase() === 'H264' && SurrogateFrameDataManager._useUpdateSurrogate82x82PFrameFrameNumber) {
        SurrogateFrameDataManager._surrogate82x82PFrameFrameNumber = SurrogateFrameDataManager._surrogate82x82PFrameFrameNumberReset;
        if (SurrogateFrameDataManager._isAndroidChrome) {
          return SkipFrame;
        }
      }
      return SurrogateFrameDataManager._singleZeroByte.buffer;
    }
  }, {
    key: "getSurrogateVideoPFramePerCodec",
    value: function getSurrogateVideoPFramePerCodec(codec) {
      switch (codec.toUpperCase()) {
        case 'H264':
          {
            if (SurrogateFrameDataManager._useUpdateSurrogate82x82PFrameFrameNumber) {
              var buffer = SurrogateFrameDataManager.getSurrogate82x82PFrameAndUpdateFrameNumber();
              return buffer;
            }
            return SurrogateFrameDataManager._dummy2x2VideoPFramePerCodec.H264.buffer;
          }
        case 'VP8':
          {
            return SurrogateFrameDataManager._dummy2x2VideoPFramePerCodec.VP8.buffer;
          }
        case 'VP9':
          {
            return SurrogateFrameDataManager._dummy2x2VideoPFramePerCodec.VP9.buffer;
          }
        default:
          {
            return undefined;
          }
      }
    }
  }, {
    key: "getInvalidSurrogateVideoPFrame",
    value: function getInvalidSurrogateVideoPFrame(codec) {
      if (codec.toUpperCase() === 'H264' && SurrogateFrameDataManager._useUpdateSurrogate82x82PFrameFrameNumber) {
        var savedSurrogateFrameNumber = SurrogateFrameDataManager._surrogate82x82PFrameFrameNumber;
        var buffer = SurrogateFrameDataManager.getSurrogate82x82PFrameAndUpdateFrameNumber();
        if (savedSurrogateFrameNumber > SurrogateFrameDataManager._surrogate82x82PFrameFrameNumberReset) {
          if (SurrogateFrameDataManager._isAndroidChrome) {
            return SkipFrame;
          }
          return SurrogateFrameDataManager._singleZeroByte.buffer;
        }
        SurrogateFrameDataManager._surrogate82x82PFrameFrameNumber++;
        return buffer;
      }
      return SurrogateFrameDataManager._singleZeroByte.buffer;
    }
  }, {
    key: "getSurrogate82x82PFrameAndUpdateFrameNumber",
    value: function getSurrogate82x82PFrameAndUpdateFrameNumber() {
      var bitMask1 = 0x0e;
      var bitMask2 = 0x01;
      var bitShiftRightBy1 = 1;
      var bitShiftLeftBy7 = 7;
      var byte1 = (SurrogateFrameDataManager._surrogate82x82PFrameFrameNumber & bitMask1) >> bitShiftRightBy1;
      var byte2 = (SurrogateFrameDataManager._surrogate82x82PFrameFrameNumber & bitMask2) << bitShiftLeftBy7;
      var copyOfDummyPFrames = SurrogateFrameDataManager._dummy82x82H264.PFrame.slice();
      var buffer = copyOfDummyPFrames.buffer;
      var bufferIndex = SurrogateFrameDataManager._dummy82x82H264PFrameFrameNumberIndex;
      buffer[bufferIndex] |= byte1;
      buffer[bufferIndex + 1] |= byte2;
      SurrogateFrameDataManager._surrogate82x82PFrameFrameNumber++;
      return buffer;
    }
  }]);
}();
_SurrogateFrameDataManager = SurrogateFrameDataManager;
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(SurrogateFrameDataManager, "_isSafari", _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_4__["default"].browserName === 'Safari');
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(SurrogateFrameDataManager, "_isMobileChrome", _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_4__["default"].browserName === 'Chrome' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_4__["default"].isMobile());
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(SurrogateFrameDataManager, "_isAndroidChrome", _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_4__["default"].browserName === 'Chrome' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_4__["default"].isAndroid);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(SurrogateFrameDataManager, "_singleZeroByte", new Uint8Array([0x00]));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(SurrogateFrameDataManager, "_dummyAudioSilentPerCodec", {
  OPUS: new Uint8Array([0x68, 0x07, 0xd9, 0xab, 0xbc, 0x79, 0x87, 0xab, 0x8e, 0x4a, 0x14, 0xf3, 0xa7, 0x1c, 0xf2, 0x9a, 0x7a, 0x45, 0xa7, 0x2d, 0x44, 0x25, 0x74, 0x4c, 0xad, 0x16, 0xb3, 0x0e, 0x51, 0x57, 0xea, 0xe7, 0xad, 0x2a, 0x38, 0xce, 0x33])
});
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(SurrogateFrameDataManager, "_dummy2x2VideoIFramePerCodec", {
  H264: new Uint8Array([0x00, 0x00, 0x00, 0x01, 0x09, 0xf0,
  // Access unit delimiter
  0x00, 0x00, 0x00, 0x01, 0x67, 0xf4, 0x00, 0x0a, 0x91, 0x9b, 0x2b, 0xf1, 0xf1, 0xf8, 0x08, 0x80, 0x00, 0x00, 0x03, 0x00, 0x80, 0x00, 0x00, 0x19, 0x07, 0x89, 0x12, 0xcb,
  // Sequence parameter set
  0x00, 0x00, 0x00, 0x01, 0x68, 0xeb, 0xe3, 0xc4, 0x48, 0x44,
  // Picture paramter set
  /* */
  0x00, 0x00, 0x01, 0x65, 0x88, 0x82, 0x00, 0x3f, 0x70, 0x23, 0x86, 0xe6, 0xd1, 0x80, 0x09, 0xaf, 0x0a, 0x41, 0x66, 0x6b, 0x54, 0x46, 0xfb, 0x71, 0xd9, 0x7f, 0xff, 0xff, 0xf9]),
  // Slice layer: idr data
  VP8: new Uint8Array([0xb0, 0x02, 0x00, 0x9d, 0x01, 0x2a, 0x01, 0x00, 0x01, 0x00, 0x39, 0x6b, 0x00, 0x27, 0x1c, 0x24, 0x0c, 0x2c, 0x2c, 0x44, 0xcc, 0x24, 0x41, 0xa8, 0x00, 0x13, 0xa7, 0xa3, 0x7a, 0x50, 0x00, 0xfe, 0xeb, 0xde, 0x2f, 0x8a, 0x1e, 0x6b, 0x7b, 0x07, 0x72, 0x63, 0x09, 0xa4, 0x8e, 0xc0]),
  VP9: new Uint8Array([0x82, 0x49, 0x83, 0x42, 0x00, 0x00, 0x00, 0x00, 0x06, 0x76, 0x38, 0x24, 0x1c, 0x19, 0xa0, 0x00, 0x00, 0x20, 0x40, 0x00, 0x11, 0xbf, 0xdd, 0x77, 0xff, 0x40, 0x7f, 0xb1, 0x00])
});
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(SurrogateFrameDataManager, "_dummy2x2VideoPFramePerCodec", {
  H264: new Uint8Array([0x00, 0x00, 0x00, 0x01, 0x09, 0xf0,
  // Access unit delimiter
  0x00, 0x00, 0x00, 0x01, 0x41, 0x9a, 0x68, 0x49, 0xa8, 0x41, 0x68, 0x99, 0x4c, 0x0f, 0xff, 0x92, 0x81]),
  // Slice layer: non idr data
  VP8: new Uint8Array([0x31, 0x03, 0x00, 0xe4, 0xe0, 0xa8, 0x9b, 0x37, 0xaf, 0x10, 0x4f, 0x4f, 0xb1, 0x0a, 0x2f, 0xe4, 0x92, 0xc0, 0x1f, 0xe7, 0x4f, 0x46, 0xff, 0xee, 0x51, 0xc1, 0x5d, 0x00, 0xfe, 0xeb, 0xde, 0x2f, 0x8a, 0x1e, 0x6b, 0x7b, 0x07, 0x72, 0x63, 0x09, 0xa4, 0x8e, 0xc0]),
  VP9: new Uint8Array([0x86, 0x00, 0x40, 0x92, 0x9c, 0x24, 0x48, 0x00, 0x00, 0x03, 0x70, 0x00, 0x00, 0x4b, 0x40])
});
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(SurrogateFrameDataManager, "_dummy82x82H264", {
  IFrame: new Uint8Array([0x00, 0x00, 0x00, 0x01, 0x67, 0x42, 0xc0, 0x0d, 0xda, 0x18, 0xde, 0x22, 0x22, 0x10, 0x00, 0x00, 0x03, 0x00, 0x10, 0x00, 0x00, 0x03, 0x03, 0xc8, 0xf1, 0x42, 0xaa,
  // Sequence parameter set
  0x00, 0x00, 0x00, 0x01, 0x68, 0xce, 0x0f, 0xc8,
  // Picture parameter set
  0x00, 0x00, 0x00, 0x01, 0x06, 0x03].concat(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(new Uint8Array(40).fill(0xff)), [0x5f], _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(new Uint8Array(10295).fill(0xff)), [0x80,
  // Supplemental enhancement information (SEI)
  0x00, 0x00, 0x00, 0x01, 0x65, 0x88, 0x84, 0x05], _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(new Uint8Array(3).fill(0xff)), [0x0f, 0x45, 0x00, 0x01, 0x57, 0x9f, 0x27, 0x27, 0x27, 0x27, 0x27, 0x5d, 0x75, 0xd7, 0x5d, 0x75, 0xd7, 0x5d, 0x75, 0xd7, 0x5d, 0x75, 0xd7, 0x5d, 0x75, 0xd7, 0x5d, 0x75, 0xd7, 0x5d, 0x75, 0xd7, 0x5d, 0x78])),
  // Slice layer: Idr data
  PFrame: new Uint8Array([0x00, 0x00, 0x00, 0x01, 0x06, 0x03].concat(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(new Uint8Array(40).fill(0xff)), [0xa4], _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(new Uint8Array(10364).fill(0xff)), [0x80,
  // SEI
  0x00, 0x00, 0x00, 0x01, 0x41, 0x9a, 0x20, 0x15, 0xf0, 0x4b])),
  // Slice layer: non idr data
  // XXX following: firefox testing
  truncated: new Uint8Array([
  // Note: IFrame-centric
  0x00, 0x00, 0x00, 0x01, 0x67,
  // SPS -- with no data
  0x00, 0x00, 0x00, 0x01, 0x68]) // PPS -- with no data
});
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(SurrogateFrameDataManager, "_dummy82x82H264PFrameFrameNumberIndex", 10418);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(SurrogateFrameDataManager, "_surrogate82x82PFrameFrameNumberReset", 1);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(SurrogateFrameDataManager, "_useUpdateSurrogate82x82PFrameFrameNumber", _SurrogateFrameDataManager._isMobileChrome || _SurrogateFrameDataManager._isSafari);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(SurrogateFrameDataManager, "_surrogate82x82PFrameFrameNumber", _SurrogateFrameDataManager._surrogate82x82PFrameFrameNumberReset);


/***/ }),

/***/ "./src/sdk/transformation/WorkerTransformStream.ts":
/*!*********************************************************!*\
  !*** ./src/sdk/transformation/WorkerTransformStream.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SurrogateFrameDataManager */ "./src/sdk/transformation/SurrogateFrameDataManager.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var worker = self;
worker.onmessage = function (event) {
  console.log('NIKNIK: worker.onmessage');
  WorkerTransformStream.forceInvalidFrame = event.data.forceInvalidFrame;
};
if (self.RTCTransformEvent) {
  console.log('NIKNIK: self.RTCTransformEvent 10c1d');
  self.onrtctransform = function (event) {
    var transformer = event.transformer;
    console.log('NIKNIK: worker event.transformer: ', event.transformer);
    console.dir(event.transformer);
    WorkerTransformStream.transformer = transformer;
    WorkerTransformStream.codec = transformer.options.codec;
    WorkerTransformStream.transformFunction = transformer.options.kind === 'video' ? WorkerTransformStream.videoTransformFunction : WorkerTransformStream.audioTransformFunction;
    WorkerTransformStream.forceInvalidFrame = false;
    var transformStream = new TransformStream({
      transform: WorkerTransformStream.transformFunction
    });
    var source = transformer.readable;
    var sink = transformer.writable;
    source.pipeThrough(transformStream).pipeTo(sink);
  };
} else {
  console.log('NIKNIK: NOT self.RTCTransformEvent');
}
var WorkerTransformStream = /*#__PURE__*/function () {
  function WorkerTransformStream() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, WorkerTransformStream);
    throw new Error('WorkerTransformStream is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(WorkerTransformStream, null, [{
    key: "videoTransformFunction",
    value: function videoTransformFunction(chunk, controller) {
      console.log('NIKNIK: videoTransformFunction');
      postMessage({
        chunk: {
          type: chunk.type,
          timestamp: chunk.timestamp,
          data: chunk.data
        }
      });
      if (WorkerTransformStream.forceInvalidFrame) {
        WorkerTransformStream.forceInvalidFrame = false;
        console.log('NIKNIK: worker forceInvalidFrame: true');
        if (WorkerTransformStream.transformer.sendKeyFrameRequest) {
          console.log('NIKNIK: worker sendKeyFrameRequest YES - BEFORE SkipFrame');
          WorkerTransformStream.transformer.sendKeyFrameRequest();
          console.log('NIKNIK: worker sendKeyFrameRequest YES - AFTER SkipFrame');
          WorkerTransformStream._validVideoFrame(chunk, controller);
          // Firefox test: controller.enqueue(chunk);

          return;
        }
        var surrogate;
        if (chunk.type === 'key') {
          surrogate = _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_3__["default"].getInvalidSurrogateVideoIFrame(WorkerTransformStream.codec);
        } else {
          surrogate = _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_3__["default"].getInvalidSurrogateVideoPFrame(WorkerTransformStream.codec);
        }
        if (surrogate === _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_3__.SkipFrame) {
          console.log('NIKNIK: SHOULD NEVER BE HERE: SkipFrame IS ANDROID CHROME ONLY!!!');
          return;
        }
        if (WorkerTransformStream.transformer.sendKeyFrameRequest) {
          console.log('NIKNIK: worker sendKeyFrameRequest YES - AFTER SkipFrame');
          WorkerTransformStream.transformer.sendKeyFrameRequest();
          return;
        }
        console.log('NIKNIK: worker sendKeyFrameRequest NO');
        chunk.data = surrogate || chunk.data;
        controller.enqueue(chunk);
      } else {
        console.log('NIKNIK: worker _validVideoFrame');
        WorkerTransformStream._validVideoFrame(chunk, controller);
        // Firefox test: controller.enqueue(chunk);
      }
    }
  }, {
    key: "_validVideoFrame",
    value: function _validVideoFrame(chunk, controller) {
      if (chunk.type === 'key') {
        chunk.data = _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_3__["default"].getSurrogateVideoIFramePerCodec(WorkerTransformStream.codec) || chunk.data;
      } else {
        chunk.data = _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_3__["default"].getSurrogateVideoPFramePerCodec(WorkerTransformStream.codec) || chunk.data;
      }
      controller.enqueue(chunk);
    }
  }, {
    key: "audioTransformFunction",
    value: function audioTransformFunction(chunk, controller) {
      // X console.log('NIKNIK: audioTransformFunction');
      postMessage({
        chunk: {
          timestamp: chunk.timestamp,
          data: chunk.data
        }
      });
      if (WorkerTransformStream.forceInvalidFrame) {
        WorkerTransformStream.forceInvalidFrame = false;
        chunk.data = _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_3__["default"].getInvalidSurrogateAudioData();
      } else {
        chunk.data = _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_3__["default"].getSurrogateAudioSilentPerCodec(WorkerTransformStream.codec) || chunk.data;
      }
      controller.enqueue(chunk);
    }
  }]);
}();
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(WorkerTransformStream, "codec", void 0);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(WorkerTransformStream, "transformFunction", void 0);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(WorkerTransformStream, "forceInvalidFrame", void 0);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(WorkerTransformStream, "transformer", void 0);


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return arrayLikeToArray(r);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(r) {
  return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
  }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Nka190cmFuc2Zvcm1hdGlvbl9Xb3JrZXJUcmFuc2Zvcm1TdHJlYW1fdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUZBLElBR3FCQSxlQUFlO0VBQUEsU0FBQUEsZ0JBQUE7SUFBQUMsZ0pBQUEsT0FBQUQsZUFBQTtFQUFBO0VBQUEsT0FBQUUsNklBQUEsQ0FBQUYsZUFBQTtJQUFBRyxHQUFBO0lBQUFDLEdBQUEsRUFrQmxDLFNBQUFBLElBQUEsRUFBMkM7TUFDekMsT0FBT0osZUFBZSxDQUFDSyxzQkFBc0I7SUFDL0M7RUFBQztJQUFBRixHQUFBO0lBQUFDLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWlDO01BQy9CLE9BQU8sSUFBSSxDQUFDRSxZQUFZO0lBQzFCO0VBQUM7SUFBQUgsR0FBQTtJQUFBQyxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUF5QztNQUN2QyxPQUFPLElBQUksQ0FBQ0csb0JBQW9CO0lBQ2xDO0VBQUM7SUFBQUosR0FBQTtJQUFBQyxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFnQztNQUM5QixPQUFPSixlQUFlLENBQUNRLFVBQVU7SUFDbkM7RUFBQztJQUFBTCxHQUFBO0lBQUFDLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWlDO01BQy9CLE9BQU9KLGVBQWUsQ0FBQ1MsV0FBVztJQUNwQztFQUFDO0lBQUFOLEdBQUE7SUFBQUMsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBaUM7TUFDL0IsT0FBT0osZUFBZSxDQUFDVSxXQUFXO0lBQ3BDO0VBQUM7SUFBQVAsR0FBQTtJQUFBQyxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFpQztNQUMvQixPQUFPSixlQUFlLENBQUNXLFdBQVc7SUFDcEM7RUFBQztJQUFBUixHQUFBO0lBQUFDLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWlDO01BQy9CLE9BQU9KLGVBQWUsQ0FBQ1ksV0FBVztJQUNwQztFQUFDO0lBQUFULEdBQUE7SUFBQUMsR0FB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QUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtFQUFFO0VBQ3BDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7RUFBRTtFQUN4SyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0VBQUU7RUFDNUQ7RUFBTSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFBRTtFQUN4THZCLEdBQUcsRUFBRSxJQUFJdUIsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFB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RUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtFQUFFO0VBQ2xLLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0VBQUU7RUFDaEQsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUF4RCxNQUFBLENBQUF5RCxtSkFBQSxDQUFLLElBQUlELFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFFLElBQUksR0FBQUQsbUpBQUEsQ0FBSyxJQUFJRCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBRSxJQUFJO0VBQUU7RUFDdkgsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBQUQsbUpBQUEsQ0FBSyxJQUFJRCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVB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Ozs7Ozs7QUNYekYsY0FBYyxzR0FBaUM7QUFDL0Msa0JBQWtCLG1CQUFPLENBQUMsOEVBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHlCQUF5QixTQUFTLHlCQUF5Qjs7Ozs7Ozs7OztBQ04zRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHLEVBQUUseUJBQXlCLFNBQVMseUJBQXlCO0FBQ2hFO0FBQ0EsMEJBQTBCLHlCQUF5QixTQUFTLHlCQUF5Qjs7Ozs7Ozs7OztBQ1RyRix1QkFBdUIsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx5QkFBeUIsU0FBUyx5QkFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvZG9tL0Jyb3dzZXJEZXRlY3Rvci50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL3RyYW5zZm9ybWF0aW9uL1N1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3Nkay90cmFuc2Zvcm1hdGlvbi9Xb3JrZXJUcmFuc2Zvcm1TdHJlYW0udHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgMjAyNCBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcm93c2VyRGV0ZWN0b3Ige1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfYnJvd3Nlck5hbWVBbmRWZXJzaW9uUmVnZXggPSAvKE1TSUV8KD8hR2Vja28uKylGaXJlZm94fCg/IUFwcGxlV2ViS2l0LitDaHJvbWUuKylTYWZhcml8KD8hQXBwbGVXZWJLaXQuKylDaHJvbWV8QXBwbGVXZWJLaXQoPyEuK0Nocm9tZXwuK1NhZmFyaSl8R2Vja28oPyEuK0ZpcmVmb3gpKSg/OiB8XFwvKShbXFxkLmFwcmVdKykvZztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbiA9IEJyb3dzZXJEZXRlY3Rvci5wYXJzZUJyb3dzZXJOYW1lQW5kVmVyc2lvbigpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfYnJvd3Nlck5hbWUgPSBCcm93c2VyRGV0ZWN0b3IucGFyc2VCcm93c2VyTmFtZSgpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfYnJvd3Nlck1ham9yVmVyc2lvbiA9IEJyb3dzZXJEZXRlY3Rvci5wYXJzZUJyb3dzZXJNYWpvclZlcnNpb24oKTtcblxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNNb2JpbGUgPSAoL0FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fE9wZXJhIE1pbmkvaSkudGVzdChuYXZpZ2F0b3I/LnVzZXJBZ2VudCk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9pc0FuZHJvaWQgPSAoL0FuZHJvaWQvaSkudGVzdChuYXZpZ2F0b3I/LnVzZXJBZ2VudCk7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2lzQ2hyb21lNjkgPSBCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbi5pbmNsdWRlcygnQ2hyb21lLzY5LicpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNDaHJvbWU3MCA9IEJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uLmluY2x1ZGVzKCdDaHJvbWUvNzAuJyk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9pc0Nocm9tZTcxID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uaW5jbHVkZXMoJ0Nocm9tZS83MS4nKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2lzQ2hyb21lNzIgPSBCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbi5pbmNsdWRlcygnQ2hyb21lLzcyLicpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNDaHJvbWU3NCA9IEJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uLmluY2x1ZGVzKCdDaHJvbWUvNzQuJyk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9pc0Nocm9tZTc1ID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uaW5jbHVkZXMoJ0Nocm9tZS83NS4nKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2lzQ2hyb21lNzYgPSBCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbi5pbmNsdWRlcygnQ2hyb21lLzc2LicpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNDaHJvbWU3NyA9IEJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uLmluY2x1ZGVzKCdDaHJvbWUvNzcuJyk7XG5cbiAgc3RhdGljIGdldCBicm93c2VyTmFtZUFuZFZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZ2V0IGJyb3dzZXJOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Jyb3dzZXJOYW1lO1xuICB9XG5cbiAgc3RhdGljIGdldCBicm93c2VyTWFqb3JWZXJzaW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Jyb3dzZXJNYWpvclZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzQW5kcm9pZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9pc0FuZHJvaWQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzQ2hyb21lNjkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5faXNDaHJvbWU2OTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXNDaHJvbWU3MCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9pc0Nocm9tZTcwO1xuICB9XG5cbiAgc3RhdGljIGdldCBpc0Nocm9tZTcxKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuX2lzQ2hyb21lNzE7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzQ2hyb21lNzIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5faXNDaHJvbWU3MjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXNDaHJvbWU3NCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9pc0Nocm9tZTc0O1xuICB9XG5cbiAgc3RhdGljIGdldCBpc0Nocm9tZTc1KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuX2lzQ2hyb21lNzU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzQ2hyb21lNzYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5faXNDaHJvbWU3NjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXNDaHJvbWU3NygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9pc0Nocm9tZTc3O1xuICB9XG5cbiAgc3RhdGljIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuX2lzTW9iaWxlO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VCcm93c2VyTmFtZUFuZFZlcnNpb24oKTogc3RyaW5nIHtcbiAgICBpZiAoIW5hdmlnYXRvciB8fCAhbmF2aWdhdG9yLnVzZXJBZ2VudCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGJyb3dzZXJOYW1lQW5kVmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb25SZWdleCk7XG5cbiAgICBpZiAoYnJvd3Nlck5hbWVBbmRWZXJzaW9uICYmIGJyb3dzZXJOYW1lQW5kVmVyc2lvblswXSkge1xuICAgICAgcmV0dXJuIGJyb3dzZXJOYW1lQW5kVmVyc2lvblswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLnBhcnNlQnJvd3Nlck5hbWVBbmRWZXJzaW9uRm9ySUUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHBhcnNlQnJvd3Nlck5hbWUoKTogc3RyaW5nIHtcbiAgICBpZiAoIUJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgYnJvd3Nlck5hbWVMaXN0ID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uc3BsaXQoJy8nKTtcblxuICAgIGlmICghYnJvd3Nlck5hbWVMaXN0IHx8ICFicm93c2VyTmFtZUxpc3RbMF0pIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gYnJvd3Nlck5hbWVMaXN0WzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VCcm93c2VyTWFqb3JWZXJzaW9uKCk6IG51bWJlciB7XG4gICAgaWYgKCFCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgY29uc3QgYnJvd3NlclZlcnNpb25MaXN0ID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uc3BsaXQoJy8nKTtcblxuICAgIGlmICghYnJvd3NlclZlcnNpb25MaXN0IHx8ICFicm93c2VyVmVyc2lvbkxpc3RbMV0pIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGNvbnN0IGZ1bGxWZXJzaW9uID0gYnJvd3NlclZlcnNpb25MaXN0WzFdO1xuXG4gICAgaWYgKCFmdWxsVmVyc2lvbikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIE51bWJlcihmdWxsVmVyc2lvbi5zcGxpdCgnLicpWzBdKSB8fCAwO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VCcm93c2VyTmFtZUFuZFZlcnNpb25Gb3JJRSgpOiBzdHJpbmcge1xuICAgIGlmICghbmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IudXNlckFnZW50KSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBjb25zdCBtc2llID0gdXNlckFnZW50LmluZGV4T2YoJ01TSUUgJyk7XG5cbiAgICBpZiAobXNpZSA+IDApIHtcbiAgICAgIC8vIElFIDEwIG9yIG9sZGVyID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgICAgcmV0dXJuIGBJRS8ke3BhcnNlSW50KHVzZXJBZ2VudC5zdWJzdHJpbmcobXNpZSArIDUsIHVzZXJBZ2VudC5pbmRleE9mKCcuJywgbXNpZSkpLCAxMCl9YDtcbiAgICB9XG5cbiAgICBjb25zdCB0cmlkZW50ID0gdXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQvJyk7XG5cbiAgICBpZiAodHJpZGVudCA+IDApIHtcbiAgICAgIC8vIElFIDExID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgICAgY29uc3QgdmVyc2lvbiA9IHVzZXJBZ2VudC5pbmRleE9mKCdydjonKTtcblxuICAgICAgcmV0dXJuIGBJRS8ke3BhcnNlSW50KHVzZXJBZ2VudC5zdWJzdHJpbmcodmVyc2lvbiArIDMsIHVzZXJBZ2VudC5pbmRleE9mKCcuJywgdmVyc2lvbikpLCAxMCl9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDI0IFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IEJyb3dzZXJEZXRlY3RvciBmcm9tICcuLi8uLi9kb20vQnJvd3NlckRldGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IFNraXBGcmFtZSA9IFN5bWJvbCgpO1xuXG5leHBvcnQgdHlwZSBTdXJyb2dhdGVGcmFtZVR5cGUgPSBBcnJheUJ1ZmZlciB8IHVuZGVmaW5lZCB8IHR5cGVvZiBTa2lwRnJhbWU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNTYWZhcmkgPSBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdTYWZhcmknO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNNb2JpbGVDaHJvbWUgPSBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdDaHJvbWUnICYmIEJyb3dzZXJEZXRlY3Rvci5pc01vYmlsZSgpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNBbmRyb2lkQ2hyb21lID0gQnJvd3NlckRldGVjdG9yLmJyb3dzZXJOYW1lID09PSAnQ2hyb21lJyAmJiBCcm93c2VyRGV0ZWN0b3IuaXNBbmRyb2lkO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfc2luZ2xlWmVyb0J5dGUgPSBuZXcgVWludDhBcnJheShbMHgwMF0pO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfZHVtbXlBdWRpb1NpbGVudFBlckNvZGVjID0ge09QVVM6IG5ldyBVaW50OEFycmF5KFsweDY4LCAweDA3LCAweGQ5LCAweGFiLCAweGJjLCAweDc5LCAweDg3LCAweGFiLCAweDhlLCAweDRhLCAweDE0LCAweGYzLCAweGE3LCAweDFjLCAweGYyLCAweDlhLCAweDdhLCAweDQ1LCAweGE3LCAweDJkLCAweDQ0LCAweDI1LCAweDc0LCAweDRjLCAweGFkLCAweDE2LCAweGIzLCAweDBlLCAweDUxLCAweDU3LCAweGVhLCAweGU3LCAweGFkLCAweDJhLCAweDM4LCAweGNlLCAweDMzXSl9O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfZHVtbXkyeDJWaWRlb0lGcmFtZVBlckNvZGVjID0ge1xuICAgIEgyNjQ6IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIDB4MDksIDB4ZjAsIC8vIEFjY2VzcyB1bml0IGRlbGltaXRlclxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgMHg2NywgMHhmNCwgMHgwMCwgMHgwYSwgMHg5MSwgMHg5YiwgMHgyYiwgMHhmMSwgMHhmMSwgMHhmOCwgMHgwOCwgMHg4MCwgMHgwMCwgMHgwMCwgMHgwMywgMHgwMCwgMHg4MCwgMHgwMCwgMHgwMCwgMHgxOSwgMHgwNywgMHg4OSwgMHgxMiwgMHhjYiwgLy8gU2VxdWVuY2UgcGFyYW1ldGVyIHNldFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgMHg2OCwgMHhlYiwgMHhlMywgMHhjNCwgMHg0OCwgMHg0NCwgLy8gUGljdHVyZSBwYXJhbXRlciBzZXRcbiAgICAgIC8qICovIDB4MDAsIDB4MDAsIDB4MDEsIDB4NjUsIDB4ODgsIDB4ODIsIDB4MDAsIDB4M2YsIDB4NzAsIDB4MjMsIDB4ODYsIDB4ZTYsIDB4ZDEsIDB4ODAsIDB4MDksIDB4YWYsIDB4MGEsIDB4NDEsIDB4NjYsIDB4NmIsIDB4NTQsIDB4NDYsIDB4ZmIsIDB4NzEsIDB4ZDksIDB4N2YsIDB4ZmYsIDB4ZmYsIDB4ZjldKSwgLy8gU2xpY2UgbGF5ZXI6IGlkciBkYXRhXG4gICAgVlA4OiBuZXcgVWludDhBcnJheShbMHhiMCwgMHgwMiwgMHgwMCwgMHg5ZCwgMHgwMSwgMHgyYSwgMHgwMSwgMHgwMCwgMHgwMSwgMHgwMCwgMHgzOSwgMHg2YiwgMHgwMCwgMHgyNywgMHgxYywgMHgyNCwgMHgwYywgMHgyYywgMHgyYywgMHg0NCwgMHhjYywgMHgyNCwgMHg0MSwgMHhhOCwgMHgwMCwgMHgxMywgMHhhNywgMHhhMywgMHg3YSwgMHg1MCwgMHgwMCwgMHhmZSwgMHhlYiwgMHhkZSwgMHgyZiwgMHg4YSwgMHgxZSwgMHg2YiwgMHg3YiwgMHgwNywgMHg3MiwgMHg2MywgMHgwOSwgMHhhNCwgMHg4ZSwgMHhjMF0pLFxuICAgIFZQOTogbmV3IFVpbnQ4QXJyYXkoWzB4ODIsIDB4NDksIDB4ODMsIDB4NDIsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDYsIDB4NzYsIDB4MzgsIDB4MjQsIDB4MWMsIDB4MTksIDB4YTAsIDB4MDAsIDB4MDAsIDB4MjAsIDB4NDAsIDB4MDAsIDB4MTEsIDB4YmYsIDB4ZGQsIDB4NzcsIDB4ZmYsIDB4NDAsIDB4N2YsIDB4YjEsIDB4MDBdKVxuICB9O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfZHVtbXkyeDJWaWRlb1BGcmFtZVBlckNvZGVjID0ge1xuICAgIEgyNjQ6IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIDB4MDksIDB4ZjAsIC8vIEFjY2VzcyB1bml0IGRlbGltaXRlclxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgMHg0MSwgMHg5YSwgMHg2OCwgMHg0OSwgMHhhOCwgMHg0MSwgMHg2OCwgMHg5OSwgMHg0YywgMHgwZiwgMHhmZiwgMHg5MiwgMHg4MV0pLCAvLyBTbGljZSBsYXllcjogbm9uIGlkciBkYXRhXG4gICAgVlA4OiBuZXcgVWludDhBcnJheShbMHgzMSwgMHgwMywgMHgwMCwgMHhlNCwgMHhlMCwgMHhhOCwgMHg5YiwgMHgzNywgMHhhZiwgMHgxMCwgMHg0ZiwgMHg0ZiwgMHhiMSwgMHgwYSwgMHgyZiwgMHhlNCwgMHg5MiwgMHhjMCwgMHgxZiwgMHhlNywgMHg0ZiwgMHg0NiwgMHhmZiwgMHhlZSwgMHg1MSwgMHhjMSwgMHg1ZCwgMHgwMCwgMHhmZSwgMHhlYiwgMHhkZSwgMHgyZiwgMHg4YSwgMHgxZSwgMHg2YiwgMHg3YiwgMHgwNywgMHg3MiwgMHg2MywgMHgwOSwgMHhhNCwgMHg4ZSwgMHhjMF0pLFxuICAgIFZQOTogbmV3IFVpbnQ4QXJyYXkoWzB4ODYsIDB4MDAsIDB4NDAsIDB4OTIsIDB4OWMsIDB4MjQsIDB4NDgsIDB4MDAsIDB4MDAsIDB4MDMsIDB4NzAsIDB4MDAsIDB4MDAsIDB4NGIsIDB4NDBdKVxuICB9O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfZHVtbXk4Mng4MkgyNjQgPSB7XG4gICAgSUZyYW1lOiBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAxLCAweDY3LCAweDQyLCAweGMwLCAweDBkLCAweGRhLCAweDE4LCAweGRlLCAweDIyLCAweDIyLCAweDEwLCAweDAwLCAweDAwLCAweDAzLCAweDAwLCAweDEwLCAweDAwLCAweDAwLCAweDAzLCAweDAzLCAweGM4LCAweGYxLCAweDQyLCAweGFhLCAvLyBTZXF1ZW5jZSBwYXJhbWV0ZXIgc2V0XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAxLCAweDY4LCAweGNlLCAweDBmLCAweGM4LCAvLyBQaWN0dXJlIHBhcmFtZXRlciBzZXRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIDB4MDYsIDB4MDMsIC4uLm5ldyBVaW50OEFycmF5KDQwKS5maWxsKDB4ZmYpLCAweDVmLCAuLi5uZXcgVWludDhBcnJheSgxMDI5NSkuZmlsbCgweGZmKSwgMHg4MCwgLy8gU3VwcGxlbWVudGFsIGVuaGFuY2VtZW50IGluZm9ybWF0aW9uIChTRUkpXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAxLCAweDY1LCAweDg4LCAweDg0LCAweDA1LCAuLi5uZXcgVWludDhBcnJheSgzKS5maWxsKDB4ZmYpLCAweDBmLCAweDQ1LCAweDAwLCAweDAxLCAweDU3LCAweDlmLCAweDI3LCAweDI3LCAweDI3LCAweDI3LCAweDI3LCAweDVkLCAweDc1LCAweGQ3LCAweDVkLCAweDc1LCAweGQ3LCAweDVkLCAweDc1LCAweGQ3LCAweDVkLCAweDc1LCAweGQ3LCAweDVkLCAweDc1LCAweGQ3LCAweDVkLCAweDc1LCAweGQ3LCAweDVkLCAweDc1LCAweGQ3LCAweDVkLCAweDc4XSksIC8vIFNsaWNlIGxheWVyOiBJZHIgZGF0YVxuICAgIFBGcmFtZTogbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgMHgwNiwgMHgwMywgLi4ubmV3IFVpbnQ4QXJyYXkoNDApLmZpbGwoMHhmZiksIDB4YTQsIC4uLm5ldyBVaW50OEFycmF5KDEwMzY0KS5maWxsKDB4ZmYpLCAweDgwLCAvLyBTRUlcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIDB4NDEsIDB4OWEsIDB4MjAsIDB4MTUsIDB4ZjAsIDB4NGJdKSwgLy8gU2xpY2UgbGF5ZXI6IG5vbiBpZHIgZGF0YVxuICAgIC8vIFhYWCBmb2xsb3dpbmc6IGZpcmVmb3ggdGVzdGluZ1xuICAgIHRydW5jYXRlZDogbmV3IFVpbnQ4QXJyYXkoWyAvLyBOb3RlOiBJRnJhbWUtY2VudHJpY1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgMHg2NywgLy8gU1BTIC0tIHdpdGggbm8gZGF0YVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgMHg2OF0pIC8vIFBQUyAtLSB3aXRoIG5vIGRhdGFcbiAgfTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2R1bW15ODJ4ODJIMjY0UEZyYW1lRnJhbWVOdW1iZXJJbmRleCA9IDEwNDE4O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfc3Vycm9nYXRlODJ4ODJQRnJhbWVGcmFtZU51bWJlclJlc2V0ID0gMTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3VzZVVwZGF0ZVN1cnJvZ2F0ZTgyeDgyUEZyYW1lRnJhbWVOdW1iZXIgPSBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLl9pc01vYmlsZUNocm9tZSB8fCBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLl9pc1NhZmFyaTtcbiAgcHJpdmF0ZSBzdGF0aWMgX3N1cnJvZ2F0ZTgyeDgyUEZyYW1lRnJhbWVOdW1iZXIgPSBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLl9zdXJyb2dhdGU4Mng4MlBGcmFtZUZyYW1lTnVtYmVyUmVzZXQ7XG5cbiAgc3RhdGljIGdldFN1cnJvZ2F0ZUF1ZGlvU2lsZW50UGVyQ29kZWMoY29kZWM6IHN0cmluZyk6IEFycmF5QnVmZmVyIHwgdW5kZWZpbmVkIHtcbiAgICBzd2l0Y2ggKGNvZGVjLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGNhc2UgJ09QVVMnOiB7XG4gICAgICAgIHJldHVybiBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLl9kdW1teUF1ZGlvU2lsZW50UGVyQ29kZWMuT1BVUy5idWZmZXI7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0SW52YWxpZFN1cnJvZ2F0ZUF1ZGlvRGF0YSgpOiBBcnJheUJ1ZmZlciB7XG4gICAgcmV0dXJuIFN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIuX3NpbmdsZVplcm9CeXRlLmJ1ZmZlcjtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTdXJyb2dhdGVWaWRlb0lGcmFtZVBlckNvZGVjKGNvZGVjOiBzdHJpbmcpOiBBcnJheUJ1ZmZlciB8IHVuZGVmaW5lZCB7XG4gICAgc3dpdGNoIChjb2RlYy50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBjYXNlICdIMjY0Jzoge1xuICAgICAgICBpZiAoU3Vycm9nYXRlRnJhbWVEYXRhTWFuYWdlci5fdXNlVXBkYXRlU3Vycm9nYXRlODJ4ODJQRnJhbWVGcmFtZU51bWJlcikge1xuICAgICAgICAgIFN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIuX3N1cnJvZ2F0ZTgyeDgyUEZyYW1lRnJhbWVOdW1iZXIgPSBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLl9zdXJyb2dhdGU4Mng4MlBGcmFtZUZyYW1lTnVtYmVyUmVzZXQ7XG5cbiAgICAgICAgICByZXR1cm4gU3Vycm9nYXRlRnJhbWVEYXRhTWFuYWdlci5fZHVtbXk4Mng4MkgyNjQuSUZyYW1lLmJ1ZmZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLl9kdW1teTJ4MlZpZGVvSUZyYW1lUGVyQ29kZWMuSDI2NC5idWZmZXI7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ1ZQOCc6IHtcbiAgICAgICAgcmV0dXJuIFN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIuX2R1bW15MngyVmlkZW9JRnJhbWVQZXJDb2RlYy5WUDguYnVmZmVyO1xuICAgICAgfVxuXG4gICAgICBjYXNlICdWUDknOiB7XG4gICAgICAgIHJldHVybiBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLl9kdW1teTJ4MlZpZGVvSUZyYW1lUGVyQ29kZWMuVlA5LmJ1ZmZlcjtcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnZhbGlkU3Vycm9nYXRlVmlkZW9JRnJhbWUoY29kZWM6IHN0cmluZyk6IFN1cnJvZ2F0ZUZyYW1lVHlwZSB7XG4gICAgaWYgKChjb2RlYy50b1VwcGVyQ2FzZSgpID09PSAnSDI2NCcpICYmIFN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIuX3VzZVVwZGF0ZVN1cnJvZ2F0ZTgyeDgyUEZyYW1lRnJhbWVOdW1iZXIpIHtcbiAgICAgIFN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIuX3N1cnJvZ2F0ZTgyeDgyUEZyYW1lRnJhbWVOdW1iZXIgPSBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLl9zdXJyb2dhdGU4Mng4MlBGcmFtZUZyYW1lTnVtYmVyUmVzZXQ7XG5cbiAgICAgIGlmIChTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLl9pc0FuZHJvaWRDaHJvbWUpIHtcbiAgICAgICAgcmV0dXJuIFNraXBGcmFtZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gU3Vycm9nYXRlRnJhbWVEYXRhTWFuYWdlci5fc2luZ2xlWmVyb0J5dGUuYnVmZmVyO1xuICB9XG5cbiAgc3RhdGljIGdldFN1cnJvZ2F0ZVZpZGVvUEZyYW1lUGVyQ29kZWMoY29kZWM6IHN0cmluZyk6IEFycmF5QnVmZmVyIHwgdW5kZWZpbmVkIHtcbiAgICBzd2l0Y2ggKGNvZGVjLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGNhc2UgJ0gyNjQnOiB7XG4gICAgICAgIGlmIChTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLl91c2VVcGRhdGVTdXJyb2dhdGU4Mng4MlBGcmFtZUZyYW1lTnVtYmVyKSB7XG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gU3Vycm9nYXRlRnJhbWVEYXRhTWFuYWdlci5nZXRTdXJyb2dhdGU4Mng4MlBGcmFtZUFuZFVwZGF0ZUZyYW1lTnVtYmVyKCk7XG5cbiAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIuX2R1bW15MngyVmlkZW9QRnJhbWVQZXJDb2RlYy5IMjY0LmJ1ZmZlcjtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnVlA4Jzoge1xuICAgICAgICByZXR1cm4gU3Vycm9nYXRlRnJhbWVEYXRhTWFuYWdlci5fZHVtbXkyeDJWaWRlb1BGcmFtZVBlckNvZGVjLlZQOC5idWZmZXI7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ1ZQOSc6IHtcbiAgICAgICAgcmV0dXJuIFN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIuX2R1bW15MngyVmlkZW9QRnJhbWVQZXJDb2RlYy5WUDkuYnVmZmVyO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldEludmFsaWRTdXJyb2dhdGVWaWRlb1BGcmFtZShjb2RlYzogc3RyaW5nKTogU3Vycm9nYXRlRnJhbWVUeXBlIHtcbiAgICBpZiAoKGNvZGVjLnRvVXBwZXJDYXNlKCkgPT09ICdIMjY0JykgJiYgU3Vycm9nYXRlRnJhbWVEYXRhTWFuYWdlci5fdXNlVXBkYXRlU3Vycm9nYXRlODJ4ODJQRnJhbWVGcmFtZU51bWJlcikge1xuICAgICAgY29uc3Qgc2F2ZWRTdXJyb2dhdGVGcmFtZU51bWJlciA9IFN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIuX3N1cnJvZ2F0ZTgyeDgyUEZyYW1lRnJhbWVOdW1iZXI7XG4gICAgICBjb25zdCBidWZmZXIgPSBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLmdldFN1cnJvZ2F0ZTgyeDgyUEZyYW1lQW5kVXBkYXRlRnJhbWVOdW1iZXIoKTtcblxuICAgICAgaWYgKHNhdmVkU3Vycm9nYXRlRnJhbWVOdW1iZXIgPiBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLl9zdXJyb2dhdGU4Mng4MlBGcmFtZUZyYW1lTnVtYmVyUmVzZXQpIHtcbiAgICAgICAgaWYgKFN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIuX2lzQW5kcm9pZENocm9tZSkge1xuICAgICAgICAgIHJldHVybiBTa2lwRnJhbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU3Vycm9nYXRlRnJhbWVEYXRhTWFuYWdlci5fc2luZ2xlWmVyb0J5dGUuYnVmZmVyO1xuICAgICAgfVxuXG4gICAgICBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLl9zdXJyb2dhdGU4Mng4MlBGcmFtZUZyYW1lTnVtYmVyKys7XG5cbiAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIFN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIuX3NpbmdsZVplcm9CeXRlLmJ1ZmZlcjtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldFN1cnJvZ2F0ZTgyeDgyUEZyYW1lQW5kVXBkYXRlRnJhbWVOdW1iZXIoKTogQXJyYXlCdWZmZXIge1xuICAgIGNvbnN0IGJpdE1hc2sxID0gMHgwZTtcbiAgICBjb25zdCBiaXRNYXNrMiA9IDB4MDE7XG4gICAgY29uc3QgYml0U2hpZnRSaWdodEJ5MSA9IDE7XG4gICAgY29uc3QgYml0U2hpZnRMZWZ0Qnk3ID0gNztcbiAgICBjb25zdCBieXRlMSA9ICgoU3Vycm9nYXRlRnJhbWVEYXRhTWFuYWdlci5fc3Vycm9nYXRlODJ4ODJQRnJhbWVGcmFtZU51bWJlciAmIGJpdE1hc2sxKSA+PiBiaXRTaGlmdFJpZ2h0QnkxKTtcbiAgICBjb25zdCBieXRlMiA9ICgoU3Vycm9nYXRlRnJhbWVEYXRhTWFuYWdlci5fc3Vycm9nYXRlODJ4ODJQRnJhbWVGcmFtZU51bWJlciAmIGJpdE1hc2syKSA8PCBiaXRTaGlmdExlZnRCeTcpO1xuICAgIGNvbnN0IGNvcHlPZkR1bW15UEZyYW1lcyA9IFN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIuX2R1bW15ODJ4ODJIMjY0LlBGcmFtZS5zbGljZSgpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IGNvcHlPZkR1bW15UEZyYW1lcy5idWZmZXI7XG4gICAgY29uc3QgYnVmZmVySW5kZXggPSBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLl9kdW1teTgyeDgySDI2NFBGcmFtZUZyYW1lTnVtYmVySW5kZXg7XG5cbiAgICBidWZmZXJbYnVmZmVySW5kZXhdIHw9IGJ5dGUxO1xuICAgIGJ1ZmZlcltidWZmZXJJbmRleCArIDFdIHw9IGJ5dGUyO1xuICAgIFN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIuX3N1cnJvZ2F0ZTgyeDgyUEZyYW1lRnJhbWVOdW1iZXIrKztcblxuICAgIHJldHVybiBidWZmZXI7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU3Vycm9nYXRlRnJhbWVEYXRhTWFuYWdlciBpcyBhIHN0YXRpYyBjbGFzcyB0aGF0IG1heSBub3QgYmUgaW5zdGFudGlhdGVkJyk7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDI0IFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLCB7U3Vycm9nYXRlRnJhbWVUeXBlLCBTa2lwRnJhbWV9IGZyb20gJy4vU3Vycm9nYXRlRnJhbWVEYXRhTWFuYWdlcic7XG5cbnR5cGUgVHJhbnNmb3JtU3RyZWFtUG9zdE1lc3NhZ2UgPSB7XG4gIG9wdGlvbnM6IHtcbiAgICBraW5kOiBzdHJpbmc7XG4gICAgY29kZWM6IHN0cmluZztcbiAgfTtcbiAgcmVhZGFibGU6IFJlYWRhYmxlU3RyZWFtO1xuICB3cml0YWJsZTogV3JpdGFibGVTdHJlYW07XG4gIHNlbmRLZXlGcmFtZVJlcXVlc3QoKTogUHJvbWlzZTx2b2lkPjtcbn07XG5cbnR5cGUgRm9yY2VJbnZhbGlkRnJhbWVQb3N0TWVzc2FnZSA9IHtcbiAgZm9yY2VJbnZhbGlkRnJhbWU6IGJvb2xlYW47XG59O1xuXG5pbnRlcmZhY2UgSVJlc3BvbnNlV29ya2VyIHtcbiAgb25tZXNzYWdlOiAobWVzc2FnZTogTWVzc2FnZUV2ZW50PEZvcmNlSW52YWxpZEZyYW1lUG9zdE1lc3NhZ2U+KSA9PiB2b2lkO1xufVxuXG5jb25zdCB3b3JrZXI6IElSZXNwb25zZVdvcmtlciA9IHNlbGYgYXMgSVJlc3BvbnNlV29ya2VyO1xuXG53b3JrZXIub25tZXNzYWdlID0gZXZlbnQgPT4ge1xuICBjb25zb2xlLmxvZygnTklLTklLOiB3b3JrZXIub25tZXNzYWdlJyk7XG4gIFdvcmtlclRyYW5zZm9ybVN0cmVhbS5mb3JjZUludmFsaWRGcmFtZSA9IGV2ZW50LmRhdGEuZm9yY2VJbnZhbGlkRnJhbWU7XG59O1xuXG5pZiAoc2VsZi5SVENUcmFuc2Zvcm1FdmVudCkge1xuICBjb25zb2xlLmxvZygnTklLTklLOiBzZWxmLlJUQ1RyYW5zZm9ybUV2ZW50IDEwYzFkJyk7XG4gIHNlbGYub25ydGN0cmFuc2Zvcm0gPSBldmVudCA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtZXIgPSBldmVudC50cmFuc2Zvcm1lciBhcyBUcmFuc2Zvcm1TdHJlYW1Qb3N0TWVzc2FnZTtcblxuICAgIGNvbnNvbGUubG9nKCdOSUtOSUs6IHdvcmtlciBldmVudC50cmFuc2Zvcm1lcjogJywgZXZlbnQudHJhbnNmb3JtZXIpO1xuICAgIGNvbnNvbGUuZGlyKGV2ZW50LnRyYW5zZm9ybWVyKTtcblxuICAgIFdvcmtlclRyYW5zZm9ybVN0cmVhbS50cmFuc2Zvcm1lciA9IHRyYW5zZm9ybWVyO1xuICAgIFdvcmtlclRyYW5zZm9ybVN0cmVhbS5jb2RlYyA9IHRyYW5zZm9ybWVyLm9wdGlvbnMuY29kZWM7XG4gICAgV29ya2VyVHJhbnNmb3JtU3RyZWFtLnRyYW5zZm9ybUZ1bmN0aW9uID0gdHJhbnNmb3JtZXIub3B0aW9ucy5raW5kID09PSAndmlkZW8nID8gV29ya2VyVHJhbnNmb3JtU3RyZWFtLnZpZGVvVHJhbnNmb3JtRnVuY3Rpb24gOiBXb3JrZXJUcmFuc2Zvcm1TdHJlYW0uYXVkaW9UcmFuc2Zvcm1GdW5jdGlvbjtcbiAgICBXb3JrZXJUcmFuc2Zvcm1TdHJlYW0uZm9yY2VJbnZhbGlkRnJhbWUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRyYW5zZm9ybVN0cmVhbSA9IG5ldyBUcmFuc2Zvcm1TdHJlYW0oe3RyYW5zZm9ybTogV29ya2VyVHJhbnNmb3JtU3RyZWFtLnRyYW5zZm9ybUZ1bmN0aW9ufSk7XG4gICAgY29uc3Qgc291cmNlID0gdHJhbnNmb3JtZXIucmVhZGFibGU7XG4gICAgY29uc3Qgc2luayA9IHRyYW5zZm9ybWVyLndyaXRhYmxlO1xuXG4gICAgc291cmNlXG4gICAgICAucGlwZVRocm91Z2godHJhbnNmb3JtU3RyZWFtKVxuICAgICAgLnBpcGVUbyhzaW5rKTtcbiAgfTtcbn0gZWxzZSB7XG4gIGNvbnNvbGUubG9nKCdOSUtOSUs6IE5PVCBzZWxmLlJUQ1RyYW5zZm9ybUV2ZW50Jyk7XG59XG5cbmNsYXNzIFdvcmtlclRyYW5zZm9ybVN0cmVhbSB7XG4gIHN0YXRpYyBjb2RlYzogc3RyaW5nO1xuICBzdGF0aWMgdHJhbnNmb3JtRnVuY3Rpb246IFRyYW5zZm9ybWVyVHJhbnNmb3JtQ2FsbGJhY2s8QXVkaW9EYXRhIHwgVmlkZW9GcmFtZSwgVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXI+IHwgdW5kZWZpbmVkO1xuICBzdGF0aWMgZm9yY2VJbnZhbGlkRnJhbWU6IGJvb2xlYW47XG4gIHN0YXRpYyB0cmFuc2Zvcm1lcjogUlRDUnRwU2NyaXB0VHJhbnNmb3JtZXI7XG5cbiAgc3RhdGljIHZpZGVvVHJhbnNmb3JtRnVuY3Rpb24oY2h1bmssIGNvbnRyb2xsZXIpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnTklLTklLOiB2aWRlb1RyYW5zZm9ybUZ1bmN0aW9uJyk7XG4gICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgY2h1bms6IHtcbiAgICAgICAgdHlwZTogY2h1bmsudHlwZSxcbiAgICAgICAgdGltZXN0YW1wOiBjaHVuay50aW1lc3RhbXAsXG4gICAgICAgIGRhdGE6IGNodW5rLmRhdGFcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChXb3JrZXJUcmFuc2Zvcm1TdHJlYW0uZm9yY2VJbnZhbGlkRnJhbWUpIHtcbiAgICAgIFdvcmtlclRyYW5zZm9ybVN0cmVhbS5mb3JjZUludmFsaWRGcmFtZSA9IGZhbHNlO1xuXG4gICAgICBjb25zb2xlLmxvZygnTklLTklLOiB3b3JrZXIgZm9yY2VJbnZhbGlkRnJhbWU6IHRydWUnKTtcblxuICAgICAgaWYgKFdvcmtlclRyYW5zZm9ybVN0cmVhbS50cmFuc2Zvcm1lci5zZW5kS2V5RnJhbWVSZXF1ZXN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOSUtOSUs6IHdvcmtlciBzZW5kS2V5RnJhbWVSZXF1ZXN0IFlFUyAtIEJFRk9SRSBTa2lwRnJhbWUnKTtcbiAgICAgICAgV29ya2VyVHJhbnNmb3JtU3RyZWFtLnRyYW5zZm9ybWVyLnNlbmRLZXlGcmFtZVJlcXVlc3QoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ05JS05JSzogd29ya2VyIHNlbmRLZXlGcmFtZVJlcXVlc3QgWUVTIC0gQUZURVIgU2tpcEZyYW1lJyk7XG4gICAgICAgIFdvcmtlclRyYW5zZm9ybVN0cmVhbS5fdmFsaWRWaWRlb0ZyYW1lKGNodW5rLCBjb250cm9sbGVyKTtcbiAgICAgICAgLy8gRmlyZWZveCB0ZXN0OiBjb250cm9sbGVyLmVucXVldWUoY2h1bmspO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHN1cnJvZ2F0ZTogU3Vycm9nYXRlRnJhbWVUeXBlO1xuXG4gICAgICBpZiAoY2h1bmsudHlwZSA9PT0gJ2tleScpIHtcbiAgICAgICAgc3Vycm9nYXRlID0gU3Vycm9nYXRlRnJhbWVEYXRhTWFuYWdlci5nZXRJbnZhbGlkU3Vycm9nYXRlVmlkZW9JRnJhbWUoV29ya2VyVHJhbnNmb3JtU3RyZWFtLmNvZGVjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1cnJvZ2F0ZSA9IFN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIuZ2V0SW52YWxpZFN1cnJvZ2F0ZVZpZGVvUEZyYW1lKFdvcmtlclRyYW5zZm9ybVN0cmVhbS5jb2RlYyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXJyb2dhdGUgPT09IFNraXBGcmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnTklLTklLOiBTSE9VTEQgTkVWRVIgQkUgSEVSRTogU2tpcEZyYW1lIElTIEFORFJPSUQgQ0hST01FIE9OTFkhISEnKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChXb3JrZXJUcmFuc2Zvcm1TdHJlYW0udHJhbnNmb3JtZXIuc2VuZEtleUZyYW1lUmVxdWVzdCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTklLTklLOiB3b3JrZXIgc2VuZEtleUZyYW1lUmVxdWVzdCBZRVMgLSBBRlRFUiBTa2lwRnJhbWUnKTtcbiAgICAgICAgV29ya2VyVHJhbnNmb3JtU3RyZWFtLnRyYW5zZm9ybWVyLnNlbmRLZXlGcmFtZVJlcXVlc3QoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKCdOSUtOSUs6IHdvcmtlciBzZW5kS2V5RnJhbWVSZXF1ZXN0IE5PJyk7XG4gICAgICBjaHVuay5kYXRhID0gc3Vycm9nYXRlIHx8IGNodW5rLmRhdGE7XG4gICAgICBjb250cm9sbGVyLmVucXVldWUoY2h1bmspO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnTklLTklLOiB3b3JrZXIgX3ZhbGlkVmlkZW9GcmFtZScpO1xuICAgICAgV29ya2VyVHJhbnNmb3JtU3RyZWFtLl92YWxpZFZpZGVvRnJhbWUoY2h1bmssIGNvbnRyb2xsZXIpO1xuICAgICAgLy8gRmlyZWZveCB0ZXN0OiBjb250cm9sbGVyLmVucXVldWUoY2h1bmspO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIF92YWxpZFZpZGVvRnJhbWUoY2h1bmssIGNvbnRyb2xsZXIpOiB2b2lkIHtcbiAgICBpZiAoY2h1bmsudHlwZSA9PT0gJ2tleScpIHtcbiAgICAgIGNodW5rLmRhdGEgPSBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLmdldFN1cnJvZ2F0ZVZpZGVvSUZyYW1lUGVyQ29kZWMoV29ya2VyVHJhbnNmb3JtU3RyZWFtLmNvZGVjKSB8fCBjaHVuay5kYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaHVuay5kYXRhID0gU3Vycm9nYXRlRnJhbWVEYXRhTWFuYWdlci5nZXRTdXJyb2dhdGVWaWRlb1BGcmFtZVBlckNvZGVjKFdvcmtlclRyYW5zZm9ybVN0cmVhbS5jb2RlYykgfHwgY2h1bmsuZGF0YTtcbiAgICB9XG5cbiAgICBjb250cm9sbGVyLmVucXVldWUoY2h1bmspO1xuICB9XG5cbiAgc3RhdGljIGF1ZGlvVHJhbnNmb3JtRnVuY3Rpb24oY2h1bmssIGNvbnRyb2xsZXIpOiB2b2lkIHtcbiAgICAvLyBYIGNvbnNvbGUubG9nKCdOSUtOSUs6IGF1ZGlvVHJhbnNmb3JtRnVuY3Rpb24nKTtcbiAgICBwb3N0TWVzc2FnZSh7XG4gICAgICBjaHVuazoge1xuICAgICAgICB0aW1lc3RhbXA6IGNodW5rLnRpbWVzdGFtcCxcbiAgICAgICAgZGF0YTogY2h1bmsuZGF0YVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKFdvcmtlclRyYW5zZm9ybVN0cmVhbS5mb3JjZUludmFsaWRGcmFtZSkge1xuICAgICAgV29ya2VyVHJhbnNmb3JtU3RyZWFtLmZvcmNlSW52YWxpZEZyYW1lID0gZmFsc2U7XG4gICAgICBjaHVuay5kYXRhID0gU3Vycm9nYXRlRnJhbWVEYXRhTWFuYWdlci5nZXRJbnZhbGlkU3Vycm9nYXRlQXVkaW9EYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNodW5rLmRhdGEgPSBTdXJyb2dhdGVGcmFtZURhdGFNYW5hZ2VyLmdldFN1cnJvZ2F0ZUF1ZGlvU2lsZW50UGVyQ29kZWMoV29ya2VyVHJhbnNmb3JtU3RyZWFtLmNvZGVjKSB8fCBjaHVuay5kYXRhO1xuICAgIH1cblxuICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShjaHVuayk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignV29ya2VyVHJhbnNmb3JtU3RyZWFtIGlzIGEgc3RhdGljIGNsYXNzIHRoYXQgbWF5IG5vdCBiZSBpbnN0YW50aWF0ZWQnKTtcbiAgfVxufVxuXG5leHBvcnQge307XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShyLCBhKSB7XG4gIChudWxsID09IGEgfHwgYSA+IHIubGVuZ3RoKSAmJiAoYSA9IHIubGVuZ3RoKTtcbiAgZm9yICh2YXIgZSA9IDAsIG4gPSBBcnJheShhKTsgZSA8IGE7IGUrKykgbltlXSA9IHJbZV07XG4gIHJldHVybiBuO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGEsIG4pIHtcbiAgaWYgKCEoYSBpbnN0YW5jZW9mIG4pKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyhlLCByKSB7XG4gIGZvciAodmFyIHQgPSAwOyB0IDwgci5sZW5ndGg7IHQrKykge1xuICAgIHZhciBvID0gclt0XTtcbiAgICBvLmVudW1lcmFibGUgPSBvLmVudW1lcmFibGUgfHwgITEsIG8uY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBvICYmIChvLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdG9Qcm9wZXJ0eUtleShvLmtleSksIG8pO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoZSwgciwgdCkge1xuICByZXR1cm4gciAmJiBfZGVmaW5lUHJvcGVydGllcyhlLnByb3RvdHlwZSwgciksIHQgJiYgX2RlZmluZVByb3BlcnRpZXMoZSwgdCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6ICExXG4gIH0pLCBlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSwgciwgdCkge1xuICByZXR1cm4gKHIgPSB0b1Byb3BlcnR5S2V5KHIpKSBpbiBlID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIHtcbiAgICB2YWx1ZTogdCxcbiAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIHdyaXRhYmxlOiAhMFxuICB9KSA6IGVbcl0gPSB0LCBlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KHIpIHtcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBudWxsICE9IHJbU3ltYm9sLml0ZXJhdG9yXSB8fCBudWxsICE9IHJbXCJAQGl0ZXJhdG9yXCJdKSByZXR1cm4gQXJyYXkuZnJvbShyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkocikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMocikgfHwgaXRlcmFibGVUb0FycmF5KHIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIHRvUHJpbWl0aXZlKHQsIHIpIHtcbiAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7XG4gIHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHRvUHJpbWl0aXZlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZShcIi4vdG9QcmltaXRpdmUuanNcIik7XG5mdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjtcbn1cbm1vZHVsZS5leHBvcnRzID0gdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgYSkge1xuICBpZiAocikge1xuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyLCBhKTtcbiAgICB2YXIgdCA9IHt9LnRvU3RyaW5nLmNhbGwocikuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiBcIk9iamVjdFwiID09PSB0ICYmIHIuY29uc3RydWN0b3IgJiYgKHQgPSByLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSB0IHx8IFwiU2V0XCIgPT09IHQgPyBBcnJheS5mcm9tKHIpIDogXCJBcmd1bWVudHNcIiA9PT0gdCB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KSA/IGFycmF5TGlrZVRvQXJyYXkociwgYSkgOiB2b2lkIDA7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7Il0sIm5hbWVzIjpbIkJyb3dzZXJEZXRlY3RvciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdldCIsIl9icm93c2VyTmFtZUFuZFZlcnNpb24iLCJfYnJvd3Nlck5hbWUiLCJfYnJvd3Nlck1ham9yVmVyc2lvbiIsIl9pc0FuZHJvaWQiLCJfaXNDaHJvbWU2OSIsIl9pc0Nocm9tZTcwIiwiX2lzQ2hyb21lNzEiLCJfaXNDaHJvbWU3MiIsIl9pc0Nocm9tZTc0IiwiX2lzQ2hyb21lNzUiLCJfaXNDaHJvbWU3NiIsIl9pc0Nocm9tZTc3IiwidmFsdWUiLCJpc01vYmlsZSIsIl9pc01vYmlsZSIsInBhcnNlQnJvd3Nlck5hbWVBbmRWZXJzaW9uIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYnJvd3Nlck5hbWVBbmRWZXJzaW9uIiwibWF0Y2giLCJfYnJvd3Nlck5hbWVBbmRWZXJzaW9uUmVnZXgiLCJwYXJzZUJyb3dzZXJOYW1lQW5kVmVyc2lvbkZvcklFIiwicGFyc2VCcm93c2VyTmFtZSIsImJyb3dzZXJOYW1lTGlzdCIsInNwbGl0IiwicGFyc2VCcm93c2VyTWFqb3JWZXJzaW9uIiwiYnJvd3NlclZlcnNpb25MaXN0IiwiZnVsbFZlcnNpb24iLCJOdW1iZXIiLCJtc2llIiwiaW5kZXhPZiIsImNvbmNhdCIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwidHJpZGVudCIsInZlcnNpb24iLCJfQnJvd3NlckRldGVjdG9yIiwiX2RlZmluZVByb3BlcnR5IiwidGVzdCIsIl9uYXZpZ2F0b3IiLCJfbmF2aWdhdG9yMiIsImluY2x1ZGVzIiwiZGVmYXVsdCIsIlNraXBGcmFtZSIsIlN5bWJvbCIsIlN1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIiLCJFcnJvciIsImdldFN1cnJvZ2F0ZUF1ZGlvU2lsZW50UGVyQ29kZWMiLCJjb2RlYyIsInRvVXBwZXJDYXNlIiwiX2R1bW15QXVkaW9TaWxlbnRQZXJDb2RlYyIsIk9QVVMiLCJidWZmZXIiLCJ1bmRlZmluZWQiLCJnZXRJbnZhbGlkU3Vycm9nYXRlQXVkaW9EYXRhIiwiX3NpbmdsZVplcm9CeXRlIiwiZ2V0U3Vycm9nYXRlVmlkZW9JRnJhbWVQZXJDb2RlYyIsIl91c2VVcGRhdGVTdXJyb2dhdGU4Mng4MlBGcmFtZUZyYW1lTnVtYmVyIiwiX3N1cnJvZ2F0ZTgyeDgyUEZyYW1lRnJhbWVOdW1iZXIiLCJfc3Vycm9nYXRlODJ4ODJQRnJhbWVGcmFtZU51bWJlclJlc2V0IiwiX2R1bW15ODJ4ODJIMjY0IiwiSUZyYW1lIiwiX2R1bW15MngyVmlkZW9JRnJhbWVQZXJDb2RlYyIsIkgyNjQiLCJWUDgiLCJWUDkiLCJnZXRJbnZhbGlkU3Vycm9nYXRlVmlkZW9JRnJhbWUiLCJfaXNBbmRyb2lkQ2hyb21lIiwiZ2V0U3Vycm9nYXRlVmlkZW9QRnJhbWVQZXJDb2RlYyIsImdldFN1cnJvZ2F0ZTgyeDgyUEZyYW1lQW5kVXBkYXRlRnJhbWVOdW1iZXIiLCJfZHVtbXkyeDJWaWRlb1BGcmFtZVBlckNvZGVjIiwiZ2V0SW52YWxpZFN1cnJvZ2F0ZVZpZGVvUEZyYW1lIiwic2F2ZWRTdXJyb2dhdGVGcmFtZU51bWJlciIsImJpdE1hc2sxIiwiYml0TWFzazIiLCJiaXRTaGlmdFJpZ2h0QnkxIiwiYml0U2hpZnRMZWZ0Qnk3IiwiYnl0ZTEiLCJieXRlMiIsImNvcHlPZkR1bW15UEZyYW1lcyIsIlBGcmFtZSIsInNsaWNlIiwiYnVmZmVySW5kZXgiLCJfZHVtbXk4Mng4MkgyNjRQRnJhbWVGcmFtZU51bWJlckluZGV4IiwiX1N1cnJvZ2F0ZUZyYW1lRGF0YU1hbmFnZXIiLCJicm93c2VyTmFtZSIsImlzQW5kcm9pZCIsIlVpbnQ4QXJyYXkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJmaWxsIiwidHJ1bmNhdGVkIiwiX2lzTW9iaWxlQ2hyb21lIiwiX2lzU2FmYXJpIiwid29ya2VyIiwic2VsZiIsIm9ubWVzc2FnZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIldvcmtlclRyYW5zZm9ybVN0cmVhbSIsImZvcmNlSW52YWxpZEZyYW1lIiwiZGF0YSIsIlJUQ1RyYW5zZm9ybUV2ZW50Iiwib25ydGN0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1lciIsImRpciIsIm9wdGlvbnMiLCJ0cmFuc2Zvcm1GdW5jdGlvbiIsImtpbmQiLCJ2aWRlb1RyYW5zZm9ybUZ1bmN0aW9uIiwiYXVkaW9UcmFuc2Zvcm1GdW5jdGlvbiIsInRyYW5zZm9ybVN0cmVhbSIsIlRyYW5zZm9ybVN0cmVhbSIsInRyYW5zZm9ybSIsInNvdXJjZSIsInJlYWRhYmxlIiwic2luayIsIndyaXRhYmxlIiwicGlwZVRocm91Z2giLCJwaXBlVG8iLCJjaHVuayIsImNvbnRyb2xsZXIiLCJwb3N0TWVzc2FnZSIsInR5cGUiLCJ0aW1lc3RhbXAiLCJzZW5kS2V5RnJhbWVSZXF1ZXN0IiwiX3ZhbGlkVmlkZW9GcmFtZSIsInN1cnJvZ2F0ZSIsImVucXVldWUiXSwic291cmNlUm9vdCI6IiJ9