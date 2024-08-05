(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["phenix"] = factory();
	else
		root["phenix"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom/ApplicationActivityMonitor.ts":
/*!***********************************************!*\
  !*** ./src/dom/ApplicationActivityMonitor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApplicationActivityMonitor)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lang/Disposable */ "./src/lang/Disposable.ts");
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rx/ReadOnlySubject */ "./src/rx/ReadOnlySubject.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lang/DisposableList */ "./src/lang/DisposableList.ts");




/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var defaultDocumentFocusIntervalTimeout = 3000;
var ApplicationActivityMonitor = /*#__PURE__*/function () {
  function ApplicationActivityMonitor() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, ApplicationActivityMonitor);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_disposables", new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_7__["default"]());
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyIsForeground", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_isForeground", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_timeOfLastTabFocusChange", Date.now());
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_documentFocusInterval", void 0);
    this._isForeground = new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__["default"](true);
    this._readOnlyIsForeground = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._isForeground);
    this.detectTabFocusChange();
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(ApplicationActivityMonitor, [{
    key: "isForeground",
    get: function get() {
      return this._readOnlyIsForeground;
    }
  }, {
    key: "getTimeSinceLastChange",
    value: function getTimeSinceLastChange() {
      return Date.now() - this._timeOfLastTabFocusChange;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._disposables.dispose();
    }
  }, {
    key: "detectTabFocusChange",
    value: function detectTabFocusChange() {
      var _this = this;
      var hidden;
      var visibilityChange;
      if ((typeof document === "undefined" ? "undefined" : _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default()(document)) !== 'object') {
        return;
      }

      // Due to typescript not having a definition for 'msHidden' or 'webkitHidden' types
      // Required to @ts-ignore to prevent typescript errors
      /* eslint-disable @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden';
        visibilityChange = 'msvisibilitychange';
        // @ts-ignore
      } else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden';
        visibilityChange = 'webkitvisibilitychange';
      } else if (typeof document.hidden !== 'undefined') {
        // Opera 12.10 and Firefox 18 and later support
        hidden = 'hidden';
        visibilityChange = 'visibilitychange';
      }
      /* eslint-enable @typescript-eslint/ban-ts-comment */

      var handleVisibilityChange = function handleVisibilityChange() {
        var isForeground = !document[hidden];
        _this.setFocusState(isForeground);
      };
      if (typeof document.addEventListener !== 'undefined' && typeof document[hidden] !== 'undefined') {
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
        this._disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_4__["default"](function () {
          document.removeEventListener(visibilityChange, handleVisibilityChange, false);
        }));
      } else {
        this.listenForDocumentFocus.call(this);
      }
    }
  }, {
    key: "listenForDocumentFocus",
    value: function listenForDocumentFocus() {
      var _this2 = this;
      this._documentFocusInterval = window.setInterval(function () {
        var isForeground = document.hasFocus();
        _this2.setFocusState(isForeground);
      }, defaultDocumentFocusIntervalTimeout);
      this._disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_4__["default"](function () {
        if (_this2._documentFocusInterval) {
          clearInterval(_this2._documentFocusInterval);
        }
        _this2._documentFocusInterval = null;
      }));
    }
  }, {
    key: "setFocusState",
    value: function setFocusState(isForeground) {
      if (this._isForeground === isForeground) {
        return;
      }
      this._isForeground.value = isForeground;
    }
  }]);
}();


/***/ }),

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

/***/ "./src/dom/ConfigurationParameterReader.ts":
/*!*************************************************!*\
  !*** ./src/dom/ConfigurationParameterReader.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfigurationParameterReader)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metrics_TelemetryDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../metrics/TelemetryDefault */ "./src/metrics/TelemetryDefault.ts");
/* harmony import */ var _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../metrics/TelemetricLevelMapping */ "./src/metrics/TelemetricLevelMapping.ts");
/* harmony import */ var _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger/LoggingLevelMapping */ "./src/logger/LoggingLevelMapping.ts");
/* harmony import */ var _logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger/LoggerDefaults */ "./src/logger/LoggerDefaults.ts");


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var ConfigurationParameterReader = /*#__PURE__*/function () {
  function ConfigurationParameterReader() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, ConfigurationParameterReader);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(ConfigurationParameterReader, [{
    key: "getStringValue",
    value: function getStringValue(name) {
      return this.readConfigurationParameterValue(name) || this.readConfigurationParameterURIValue("".concat(name, "-uri-parameter-name")) || this.defaultStringValue[name];
    }
  }, {
    key: "getBooleanValue",
    value: function getBooleanValue(name) {
      var value = this.readConfigurationParameterValue(name);
      if (value) {
        return value === 'true' || value === '1' || value === 'On';
      }
      var valueFromUri = this.readConfigurationParameterURIValue("".concat(name, "-uri-parameter-name"));
      if (valueFromUri) {
        return valueFromUri === 'true' || valueFromUri === '1' || valueFromUri === 'On';
      }
      return this.defaultBooleanValue[name] === true;
    }
  }, {
    key: "defaultStringValue",
    get: function get() {
      return {
        'phenix-metrics-level': _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_3__["default"].convertTelemetryLevelToTelemetryLevelType(_metrics_TelemetryDefault__WEBPACK_IMPORTED_MODULE_2__["default"].defaultTelemetryLevel),
        'phenix-logging-level': _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_4__["default"].convertLoggingLevelToLoggingLevelType(_logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_5__["default"].defaultLoggingLevel),
        'phenix-console-logging-level': _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_4__["default"].convertLoggingLevelToLoggingLevelType(_logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_5__["default"].defaultConsoleLoggingLevel),
        'phenix-telemetry-logging-level': _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_4__["default"].convertLoggingLevelToLoggingLevelType(_logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_5__["default"].defaultTelemetryLoggingLevel),
        'phenix-channel-token': '',
        'phenix-uri': '',
        'phenix-base-uri': ''
      };
    }
  }, {
    key: "defaultBooleanValue",
    get: function get() {
      return {
        'phenix-automatically-retry-on-failure': true,
        'phenix-automatically-reconnect-peer-connection': true,
        'phenix-force-garbage-collection-on-restart': true,
        'phenix-skip-garbage-collection-on-mobile-devices': true
      };
    }
  }, {
    key: "readConfigurationParameterValue",
    value: function readConfigurationParameterValue(name) {
      var metaValue = document.querySelector("meta[name='".concat(name, "']"));
      if (!metaValue) {
        return;
      }
      var value = metaValue.getAttribute('value');
      if (!value) {
        return;
      }
      return value;
    }
  }, {
    key: "readConfigurationParameterURIValue",
    value: function readConfigurationParameterURIValue(name) {
      var valueURIParameterName = this.readConfigurationParameterValue(name);
      if (!valueURIParameterName) {
        return;
      }
      var value = new URLSearchParams(location.search).get(valueURIParameterName) || undefined;
      if (!value) {
        return;
      }
      return value;
    }
  }]);
}();


/***/ }),

/***/ "./src/dom/GarbageCollectorManager.ts":
/*!********************************************!*\
  !*** ./src/dom/GarbageCollectorManager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GarbageCollectorManager)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environment/FeatureEnablement */ "./src/environment/FeatureEnablement.ts");


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var GarbageCollectorManager = /*#__PURE__*/function () {
  function GarbageCollectorManager() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, GarbageCollectorManager);
    throw new Error('GarbageCollectorManager is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(GarbageCollectorManager, null, [{
    key: "forceGarbageCollection",
    value: function forceGarbageCollection() {
      if (_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_2__["default"].isForceChromeGarbageCollectionSupported) {
        this.forceChromeGarbageCollection();
      }
    }
  }, {
    key: "forceChromeGarbageCollection",
    value: function forceChromeGarbageCollection() {
      var _this = this;
      if (_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_2__["default"].isQueueMicrotaskSupported) {
        queueMicrotask(function () {
          _this.overloadMemoryToInvokeGarbageCollection();
        });
      } else {
        setTimeout(function () {
          _this.overloadMemoryToInvokeGarbageCollection();
        });
      }
    }
  }, {
    key: "overloadMemoryToInvokeGarbageCollection",
    value: function overloadMemoryToInvokeGarbageCollection() {
      var img = document.createElement('img');
      img.src = window.URL.createObjectURL(new Blob([new ArrayBuffer(10e+7)])); // 100Mb or less or more depending on as you wish to force/invoke GC cycle run
      img.onerror = function () {
        window.URL.revokeObjectURL(this.src);
        img = null;
      };
    }
  }]);
}();


/***/ }),

/***/ "./src/dom/NetworkMonitor.ts":
/*!***********************************!*\
  !*** ./src/dom/NetworkMonitor.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NetworkMonitor)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lang/Disposable */ "./src/lang/Disposable.ts");
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lang/DisposableList */ "./src/lang/DisposableList.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var NetworkMonitor = /*#__PURE__*/function () {
  function NetworkMonitor() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, NetworkMonitor);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_disposables", new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_5__["default"]());
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_isSupported", navigator && navigator['connection']);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_rtt", new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__["default"](undefined));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_effectiveType", new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__["default"](undefined));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_downlinkThroughputCapacity", new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__["default"](undefined));
    if (!this.isSupported) {
      return;
    }
    this.setupNetworkChangeListeners();
    this.updateStatistics();
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(NetworkMonitor, [{
    key: "isSupported",
    get: function get() {
      return this._isSupported;
    }
  }, {
    key: "rtt",
    get: function get() {
      return this._rtt;
    }
  }, {
    key: "effectiveType",
    get: function get() {
      return this._effectiveType;
    }
  }, {
    key: "downlinkThroughputCapacity",
    get: function get() {
      return this._downlinkThroughputCapacity;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._disposables.dispose();
    }
  }, {
    key: "getDownlinkThroughputCapacity",
    value: function getDownlinkThroughputCapacity() {
      if (!this.isSupported) {
        return -1;
      }
      return navigator['connection'].downlink || navigator['connection'].downlinkMax;
    }
  }, {
    key: "getEffectiveType",
    value: function getEffectiveType() {
      if (!this.isSupported) {
        return 'Unknown';
      }
      return navigator['connection'].effectiveType || navigator['connection'].type;
    }
  }, {
    key: "getRoundTripTime",
    value: function getRoundTripTime() {
      return navigator['connection'].rtt;
    }
  }, {
    key: "setupNetworkChangeListeners",
    value: function setupNetworkChangeListeners() {
      var _this = this;
      var listener = function listener() {
        _this.updateStatistics();
      };
      navigator['connection'].addEventListener('change', listener);
      this._disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_3__["default"](function () {
        navigator['connection'].removeEventListener('change', listener);
      }));
    }
  }, {
    key: "updateStatistics",
    value: function updateStatistics() {
      this._rtt.value = this.getRoundTripTime();
      this._effectiveType.value = this.getEffectiveType();
      this._downlinkThroughputCapacity.value = this.getDownlinkThroughputCapacity();
    }
  }]);
}();


/***/ }),

/***/ "./src/dom/StreamSetupListener.ts":
/*!****************************************!*\
  !*** ./src/dom/StreamSetupListener.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StreamSetupListener: () => (/* binding */ StreamSetupListener)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../metrics/MetricsType */ "./src/metrics/MetricsType.ts");
/* harmony import */ var _metrics_MetricType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metrics/MetricType */ "./src/metrics/MetricType.ts");
/* harmony import */ var _time_Duration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../time/Duration */ "./src/time/Duration.ts");
/* harmony import */ var _sdk_SDK__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sdk/SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





var StreamSetupListener = /*#__PURE__*/function () {
  function StreamSetupListener(pageLoadTime) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, StreamSetupListener);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_7__["default"].getLogger('StreamSetupListener'));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "metricsService", _sdk_SDK__WEBPACK_IMPORTED_MODULE_6__["default"].metricsService);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_pageLoadTime", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_startTime", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_metricSubmitted", false);
    this._startTime = Date.now();
    this._pageLoadTime = pageLoadTime;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(StreamSetupListener, [{
    key: "success",
    value: function success(streamId) {
      this.recordStreamMetric(_metrics_MetricsType__WEBPACK_IMPORTED_MODULE_3__["default"].SetupCompleted, streamId);
    }
  }, {
    key: "fail",
    value: function fail() {
      this.recordStreamMetric(_metrics_MetricsType__WEBPACK_IMPORTED_MODULE_3__["default"].SetupFailed);
    }
  }, {
    key: "recordStreamMetric",
    value: function recordStreamMetric(metricType, streamId) {
      if (this._metricSubmitted) {
        return;
      }
      this._metricSubmitted = true;
      var now = Date.now();
      var setupTime = now - this._startTime;
      var metricName = new _metrics_MetricType__WEBPACK_IMPORTED_MODULE_4__["default"](metricType).getName();
      this.metricsService.push({
        metricType: metricType,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          uint64: setupTime
        },
        streamId: streamId
      });
      this._logger.info('[%s] [%s] Stream metric [%s] in [%s]', new _time_Duration__WEBPACK_IMPORTED_MODULE_5__["default"](now - this._pageLoadTime).toIsoString(), streamId, metricName, new _time_Duration__WEBPACK_IMPORTED_MODULE_5__["default"](setupTime).toIsoString());
    }
  }]);
}();

/***/ }),

/***/ "./src/edgeAuth/EdgeAuthParser.ts":
/*!****************************************!*\
  !*** ./src/edgeAuth/EdgeAuthParser.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EdgeAuthParser)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _EdgeToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EdgeToken */ "./src/edgeAuth/EdgeToken.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var edgeAuthTokenPrefix = 'DIGEST:';
var EdgeAuthParser = /*#__PURE__*/function () {
  function EdgeAuthParser() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, EdgeAuthParser);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(EdgeAuthParser, null, [{
    key: "parseToken",
    value: function parseToken(token) {
      if (!this.isEncodedEdgeTokenValid(token)) {
        EdgeAuthParser._logger.error('Token is not valid [%s]', token);
        return new _EdgeToken__WEBPACK_IMPORTED_MODULE_4__["default"](null);
      }
      try {
        var decodedToken = atob(token.substr(edgeAuthTokenPrefix.length));
        var edgeToken = JSON.parse(decodedToken);
        edgeToken.token = JSON.parse(edgeToken.token);
        return new _EdgeToken__WEBPACK_IMPORTED_MODULE_4__["default"](edgeToken);
      } catch (e) {
        EdgeAuthParser._logger.error('Cannot parse token value', e);
        return new _EdgeToken__WEBPACK_IMPORTED_MODULE_4__["default"](null);
      }
    }
  }, {
    key: "isEncodedEdgeTokenValid",
    value: function isEncodedEdgeTokenValid(token) {
      return !!token && token.startsWith(edgeAuthTokenPrefix);
    }
  }]);
}();
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(EdgeAuthParser, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger('EdgeAuthParser'));


/***/ }),

/***/ "./src/edgeAuth/EdgeToken.ts":
/*!***********************************!*\
  !*** ./src/edgeAuth/EdgeToken.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EdgeToken)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var EdgeToken = /*#__PURE__*/function () {
  function EdgeToken(edgeToken) {
    var _edgeToken$token, _edgeToken$token2;
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, EdgeToken);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_applicationId", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_token", void 0);
    this._applicationId = (edgeToken === null || edgeToken === void 0 ? void 0 : edgeToken.applicationId) || '';
    this._token = {
      uri: edgeToken !== null && edgeToken !== void 0 && (_edgeToken$token = edgeToken.token) !== null && _edgeToken$token !== void 0 && _edgeToken$token.uri ? new URL(edgeToken.token.uri) : null,
      capabilities: (edgeToken === null || edgeToken === void 0 ? void 0 : (_edgeToken$token2 = edgeToken.token) === null || _edgeToken$token2 === void 0 ? void 0 : _edgeToken$token2.capabilities) || []
    };
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(EdgeToken, [{
    key: "uri",
    get: function get() {
      return this._token.uri;
    }
  }, {
    key: "capabilities",
    get: function get() {
      return this._token.capabilities;
    }
  }, {
    key: "tenancy",
    get: function get() {
      return this._applicationId;
    }
  }]);
}();


/***/ }),

/***/ "./src/environment/BuildFeatures.ts":
/*!******************************************!*\
  !*** ./src/environment/BuildFeatures.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BuildFeatures)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var BuildFeatures = /*#__PURE__*/function () {
  function BuildFeatures() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, BuildFeatures);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(BuildFeatures, null, [{
    key: "sendLocalCandidates",
    get: function get() {
      return this._sendLocalCandidates;
    }
  }, {
    key: "sendLogs",
    get: function get() {
      return this._sendLogs;
    }
  }, {
    key: "sendMetrics",
    get: function get() {
      return this._sendMetrics;
    }
  }, {
    key: "logToConsole",
    get: function get() {
      return this._logToConsole;
    }
  }, {
    key: "applyFeatures",
    value: function applyFeatures() {
      try {
        var features = {"sendLocalCandidates":true,"sendLogs":"All","sendMetrics":"All","logToConsole":"All"};
        this._sendLocalCandidates = 'sendLocalCandidates' in features ? features.sendLocalCandidates : true;
        this._sendLogs = 'sendLogs' in features ? features.sendLogs : 'All';
        this._sendMetrics = 'sendMetrics' in features ? features.sendMetrics : 'All';
        this._logToConsole = 'logToConsole' in features ? features.logToConsole : 'All';
      } catch (e) {
        this._sendLocalCandidates = true;
        this._sendLogs = 'All';
        this._sendMetrics = 'All';
        this._logToConsole = 'All';
      }
    }
  }]);
}();
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BuildFeatures, "_sendLocalCandidates", void 0);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BuildFeatures, "_sendLogs", void 0);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BuildFeatures, "_sendMetrics", void 0);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BuildFeatures, "_logToConsole", void 0);

BuildFeatures.applyFeatures();

/***/ }),

/***/ "./src/environment/FeatureEnablement.ts":
/*!**********************************************!*\
  !*** ./src/environment/FeatureEnablement.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FeatureEnablement)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/BrowserDetector */ "./src/dom/BrowserDetector.ts");


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var FeatureEnablement = /*#__PURE__*/function () {
  function FeatureEnablement() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, FeatureEnablement);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(FeatureEnablement, null, [{
    key: "clientOfferDisabled",
    get: function get() {
      // Client offer workflow does not work correctly in the following browsers
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].isChrome74 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].isChrome75 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].isChrome76 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].isChrome77;
    }
  }, {
    key: "addTranceiverDisabled",
    get: function get() {
      // Chrome 69, 70, 71, 72 exposes `addTranceiver` but it does not work correctly
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].isChrome69 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].isChrome70 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].isChrome71 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].isChrome72;
    }
  }, {
    key: "getStatsPromiseBasedDisabled",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName === 'Chrome' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserMajorVersion <= 66;
    }
  }, {
    key: "getCurrentOfferDisabled",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName === 'Chrome' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserMajorVersion <= 69 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName === 'Firefox' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserMajorVersion <= 56;
    }
  }, {
    key: "onTrackDisabled",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName === 'Chrome' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserMajorVersion <= 63 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName === 'Firefox' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserMajorVersion <= 52;
    }
  }, {
    key: "webkitRTCPeerConnectionEnabled",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName === 'Chrome' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserMajorVersion <= 55;
    }
  }, {
    key: "promiseBasedPCMethodsDisabled",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName === 'Firefox' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserMajorVersion <= 52;
    }
  }, {
    key: "shouldUseNativeHls",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName === 'Safari' || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName === 'SamsungBrowser';
    }
  }, {
    key: "isPrecachingEnabled",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName !== 'IE';
    }
  }, {
    key: "isForceChromeGarbageCollectionSupported",
    get: function get() {
      var _document;
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName === 'Chrome' && typeof ((_document = document) === null || _document === void 0 ? void 0 : _document.createElement) === 'function';
    }
  }, {
    key: "isQueueMicrotaskSupported",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName === 'Chrome' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserMajorVersion >= 71 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName === 'Firefox' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserMajorVersion >= 69 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName === 'Safari';
    }
  }, {
    key: "isMobile",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].isMobile();
    }
  }, {
    key: "isInsertableStreamsSupported",
    get: function get() {
      return !(typeof MediaStreamTrackProcessor === 'undefined' || typeof MediaStreamTrackGenerator === 'undefined');
    }
  }, {
    key: "isEncodedInsertableStreamsSupported",
    get: function get() {
      return typeof RTCRtpReceiver !== 'undefined' && typeof RTCRtpReceiver.prototype.createEncodedStreams !== 'undefined';
    }
  }, {
    key: "isRTCRtpScriptTransformSupported",
    get: function get() {
      return typeof RTCRtpScriptTransform !== 'undefined';
    }
  }, {
    key: "errorStackAlsoHasErrorMessage",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName !== 'Firefox' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__["default"].browserName !== 'Safari';
    }
  }]);
}();


/***/ }),

/***/ "./src/environment/Parameters.ts":
/*!***************************************!*\
  !*** ./src/environment/Parameters.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parameters)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Parameters = /*#__PURE__*/function () {
  function Parameters() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Parameters);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Parameters, null, [{
    key: "discoveryParameters",
    get: function get() {
      return this._discoveryParameters;
    }
  }, {
    key: "applyParameters",
    value: function applyParameters() {
      try {
        var parameters = {"discovery":{"intentions":"distribution"}};
        this._discoveryParameters = 'discovery' in parameters ? parameters.discovery : {
          intentions: ''
        };
      } catch (e) {
        this._discoveryParameters = {
          intentions: ''
        };
      }
    }
  }]);
}();
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(Parameters, "_discoveryParameters", void 0);

Parameters.applyParameters();

/***/ }),

/***/ "./src/lang/Disposable.ts":
/*!********************************!*\
  !*** ./src/lang/Disposable.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Disposable)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Disposable = /*#__PURE__*/function () {
  function Disposable(disposable) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Disposable);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_disposed", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_disposable", void 0);
    this._disposed = false;
    this._disposable = disposable;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Disposable, [{
    key: "dispose",
    value: function dispose() {
      if (this._disposed) {
        return;
      }
      this._disposed = true;
      return this._disposable.call(this);
    }
  }]);
}();


/***/ }),

/***/ "./src/lang/DisposableList.ts":
/*!************************************!*\
  !*** ./src/lang/DisposableList.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DisposableList)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var DisposableList = /*#__PURE__*/function () {
  function DisposableList() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, DisposableList);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_list", []);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(DisposableList, [{
    key: "add",
    value: function add(disposable) {
      this._list.push(disposable);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._list.forEach(function (disposable) {
        return disposable.dispose();
      });
      this._list.length = 0;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "DisposableList[disposables=".concat(this._list.length, "]");
    }
  }]);
}();


/***/ }),

/***/ "./src/lang/Numbers.ts":
/*!*****************************!*\
  !*** ./src/lang/Numbers.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Numbers)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
// As float in ECMAScript use 64-bit format it cannot have/handle more than 15 symbols after dot.
var maxDigitsInFloatAfterDot = 15;
var Numbers = /*#__PURE__*/function () {
  function Numbers() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Numbers);
    throw new Error('Numbers is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Numbers, null, [{
    key: "countNumberLength",
    value: function countNumberLength(value) {
      var incrementForNegativeValue = 0;
      var number = value;
      if (number < 0) {
        number *= -1;
        incrementForNegativeValue++;
      }
      return Numbers.countDigitsBeforeDecimal(number) + incrementForNegativeValue + (number !== Math.floor(number) ? Numbers.countDigitsAfterDecimal(number) + 1 : 0);
    }
  }, {
    key: "fixRounding",
    value: function fixRounding(value, precision) {
      var power = Math.pow(10, precision);
      return Math.round(value * power) / power;
    }
  }, {
    key: "countDigitsBeforeDecimal",
    value: function countDigitsBeforeDecimal(value) {
      var digitsBeforeDecimal = 1;
      var number = value;
      while (number >= 10) {
        number = number / 10;
        digitsBeforeDecimal++;
      }
      return digitsBeforeDecimal;
    }
  }, {
    key: "countDigitsAfterDecimal",
    value: function countDigitsAfterDecimal(value) {
      var originalValue = value;
      var modifiedValue = Math.floor(value);
      var count = 0;
      while (modifiedValue !== originalValue && count < maxDigitsInFloatAfterDot) {
        count++;
        modifiedValue = Numbers.fixRounding(originalValue, count);
      }
      return count;
    }
  }]);
}();


/***/ }),

/***/ "./src/lang/Strings.ts":
/*!*****************************!*\
  !*** ./src/lang/Strings.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Strings)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Strings = /*#__PURE__*/function () {
  function Strings() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Strings);
    throw new Error('Strings is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Strings, null, [{
    key: "random",
    value: function random(length) {
      var random13Characters = function random13Characters() {
        return Math.random().toString(16).substring(2, 15);
      };
      var loops = Math.ceil(length / 13);
      return new Array(loops).fill(random13Characters).reduce(function (string, func) {
        return string + func();
      }, '').substring(0, length);
    }
  }]);
}();


/***/ }),

/***/ "./src/lang/assertUnreachable.ts":
/*!***************************************!*\
  !*** ./src/lang/assertUnreachable.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export assertUnreachable */
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
function assertUnreachable(x) {
  throw new Error("Unexpected value [".concat(x, "]. This should never be reached"));
}
/* harmony default export */ __webpack_exports__["default"] = (assertUnreachable);

/***/ }),

/***/ "./src/logger/Appenders.ts":
/*!*********************************!*\
  !*** ./src/logger/Appenders.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Appenders)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Appenders = /*#__PURE__*/function () {
  function Appenders() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Appenders);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_appenders", []);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Appenders, [{
    key: "value",
    get: function get() {
      return this._appenders;
    }
  }, {
    key: "add",
    value: function add(appender) {
      this._appenders.push(appender);
    }
  }, {
    key: "remove",
    value: function remove(appender) {
      this._appenders = this._appenders.reduce(function (items, item) {
        if (!(item === appender)) {
          items.push(item);
        }
        return items;
      }, []);
    }
  }]);
}();


/***/ }),

/***/ "./src/logger/ConsoleAppender.ts":
/*!***************************************!*\
  !*** ./src/logger/ConsoleAppender.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleAppender)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logger */ "./src/logger/Logger.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var ConsoleAppender = /*#__PURE__*/function () {
  function ConsoleAppender(threshold) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, ConsoleAppender);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_threshold", void 0);
    this._threshold = threshold;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(ConsoleAppender, [{
    key: "log",
    value: function log(logLevel, message, category, date) {
      if (logLevel < this._threshold) {
        return;
      }
      var fullMessage = "".concat(date.toISOString(), " [").concat(category, "] [").concat(_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel[logLevel], "] ").concat(message);
      if (logLevel < _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Warn) {
        console.log(fullMessage);
        return;
      }
      console.error(fullMessage);
    }
  }]);
}();


/***/ }),

/***/ "./src/logger/Logger.ts":
/*!******************************!*\
  !*** ./src/logger/Logger.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggingLevel: () => (/* binding */ LoggingLevel),
/* harmony export */   "default": () => (/* binding */ Logger)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment/FeatureEnablement */ "./src/environment/FeatureEnablement.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */


var LoggingLevel = /*#__PURE__*/function (LoggingLevel) {
  LoggingLevel[LoggingLevel["All"] = -1] = "All";
  LoggingLevel[LoggingLevel["Trace"] = 10] = "Trace";
  LoggingLevel[LoggingLevel["Debug"] = 20] = "Debug";
  LoggingLevel[LoggingLevel["Info"] = 30] = "Info";
  LoggingLevel[LoggingLevel["Warn"] = 40] = "Warn";
  LoggingLevel[LoggingLevel["Error"] = 50] = "Error";
  LoggingLevel[LoggingLevel["Fatal"] = 60] = "Fatal";
  LoggingLevel[LoggingLevel["Off"] = 100] = "Off";
  return LoggingLevel;
}({});
var Logger = /*#__PURE__*/function () {
  function Logger(category, appenders, threshold) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Logger);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_category", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_appenders", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_threshold", void 0);
    this._category = category;
    this._appenders = appenders;
    this._threshold = threshold;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Logger, [{
    key: "category",
    get: function get() {
      return this._category;
    }
  }, {
    key: "appenders",
    get: function get() {
      return this._appenders;
    }
  }, {
    key: "threshold",
    get: function get() {
      return this._threshold;
    }
  }, {
    key: "trace",
    value: function trace() {
      if (!this._threshold.value || this._threshold.value > LoggingLevel.Trace) {
        return;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      this.log(LoggingLevel.Trace, args);
    }
  }, {
    key: "debug",
    value: function debug() {
      if (!this._threshold.value || this._threshold.value > LoggingLevel.Debug) {
        return;
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      this.log(LoggingLevel.Debug, args);
    }
  }, {
    key: "info",
    value: function info() {
      if (!this._threshold.value || this._threshold.value > LoggingLevel.Info) {
        return;
      }
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this.log(LoggingLevel.Info, args);
    }
  }, {
    key: "warn",
    value: function warn() {
      if (!this._threshold.value || this._threshold.value > LoggingLevel.Warn) {
        return;
      }
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      this.log(LoggingLevel.Warn, args);
    }
  }, {
    key: "error",
    value: function error() {
      if (!this._threshold.value || this._threshold.value > LoggingLevel.Error) {
        return;
      }
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      this.log(LoggingLevel.Error, args);
    }
  }, {
    key: "fatal",
    value: function fatal() {
      if (!this._threshold.value || this._threshold.value > LoggingLevel.Fatal) {
        return;
      }
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      this.log(LoggingLevel.Fatal, args);
    }
  }, {
    key: "log",
    value: function log(level, args) {
      var _this = this;
      var date = new Date();
      var message = this.replacePlaceholders(args);
      this._appenders.value.forEach(function (appender) {
        appender.log(level, message, _this.category, date);
      });
    }
  }, {
    key: "replacePlaceholders",
    value: function replacePlaceholders(args) {
      var _this2 = this;
      var replacePlaceholdersString = args[0];
      var index = 0;
      while (replacePlaceholdersString.indexOf && args.length > 1 && index >= 0) {
        index = replacePlaceholdersString.indexOf('%', index);
        if (index > 0) {
          var type = replacePlaceholdersString.substring(index + 1, index + 2);
          switch (type) {
            case '%':
              // Escaped '%%' turns into '%'
              replacePlaceholdersString = replacePlaceholdersString.substring(0, index) + replacePlaceholdersString.substring(index + 1);
              index++;
              break;
            case 's':
            case 'd':
              // Replace '%d' or '%s' with the argument
              args[0] = replacePlaceholdersString = this.replaceArgument(this.toString(args[1]), replacePlaceholdersString, index);
              args.splice(1, 1);
              break;
            case 'j':
              // Replace %j' with the argument
              args[0] = replacePlaceholdersString = this.replaceArgument(this.stringify(args[1]), replacePlaceholdersString, index);
              args.splice(1, 1);
              break;
            default:
              return args.toString();
          }
        }
      }
      if (args.length > 1) {
        args = args.reduce(function (accumulator, currentValue, index, array) {
          if (index + 1 === array.length && currentValue instanceof Error) {
            if (_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_3__["default"].errorStackAlsoHasErrorMessage) {
              return accumulator + '\n' + _this2.toString(currentValue.stack);
            }
            return accumulator + '\n' + _this2.toString(currentValue.message) + '\n' + _this2.toString(currentValue.stack);
          }
          return accumulator + "[".concat(_this2.toString(currentValue), "]");
        });
      }
      return args.toString();
    }
  }, {
    key: "stringify",
    value: function stringify(arg) {
      var cache = [];
      try {
        return JSON.stringify(arg instanceof Error ? this.toString(arg) : arg, function (key, value) {
          if (!!value && value instanceof Object) {
            if (cache.includes(value)) {
              return '<recursive>';
            }
            cache.push(value);
          }
          return value;
        }, 2);
      } catch (e) {
        return '[object invalid JSON.stringify]';
      }
    }
  }, {
    key: "replaceArgument",
    value: function replaceArgument(argument, replacePlaceholdersString, index) {
      return replacePlaceholdersString.substring(0, index) + this.toString(argument) + replacePlaceholdersString.substring(index + 2);
    }
  }, {
    key: "toString",
    value: function toString(data) {
      if (typeof data === 'string') {
        return data;
      }
      if (typeof data === 'boolean') {
        return data ? 'true' : 'false';
      }
      if (typeof data === 'number') {
        return data.toString();
      }
      var toStringStr = '';
      if (data) {
        if (typeof data === 'function') {
          toStringStr = data.toString();
        } else if (data instanceof Object) {
          try {
            toStringStr = data.toString();
          } catch (e) {
            toStringStr = '[object invalid toString()]';
          }
        }
      }
      return toStringStr;
    }
  }]);
}();


/***/ }),

/***/ "./src/logger/LoggerDefaults.ts":
/*!**************************************!*\
  !*** ./src/logger/LoggerDefaults.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoggerDefaults)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environment_BuildFeatures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environment/BuildFeatures */ "./src/environment/BuildFeatures.ts");
/* harmony import */ var _logger_Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/Logger */ "./src/logger/Logger.ts");


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var LoggerDefaults = /*#__PURE__*/function () {
  function LoggerDefaults() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, LoggerDefaults);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(LoggerDefaults, null, [{
    key: "defaultLoggingLevel",
    get: function get() {
      return _logger_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel[_environment_BuildFeatures__WEBPACK_IMPORTED_MODULE_2__["default"].sendLogs];
    }
  }, {
    key: "defaultConsoleLoggingLevel",
    get: function get() {
      return _logger_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel[_environment_BuildFeatures__WEBPACK_IMPORTED_MODULE_2__["default"].logToConsole];
    }
  }, {
    key: "defaultTelemetryLoggingLevel",
    get: function get() {
      return _logger_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Info;
    }
  }]);
}();


/***/ }),

/***/ "./src/logger/LoggerFactory.ts":
/*!*************************************!*\
  !*** ./src/logger/LoggerFactory.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoggerFactory)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logger */ "./src/logger/Logger.ts");
/* harmony import */ var _Appenders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Appenders */ "./src/logger/Appenders.ts");
/* harmony import */ var _LoggingThreshold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggingThreshold */ "./src/logger/LoggingThreshold.ts");
/* harmony import */ var _ConsoleAppender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConsoleAppender */ "./src/logger/ConsoleAppender.ts");
/* harmony import */ var _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../telemetry/TelemetryApender */ "./src/telemetry/TelemetryApender.ts");
/* harmony import */ var _telemetry_TelemetryConfiguration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../telemetry/TelemetryConfiguration */ "./src/telemetry/TelemetryConfiguration.ts");
/* harmony import */ var _dom_ConfigurationParameterReader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom/ConfigurationParameterReader */ "./src/dom/ConfigurationParameterReader.ts");
/* harmony import */ var _LoggerDefaults__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LoggerDefaults */ "./src/logger/LoggerDefaults.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */









var LoggerFactory = /*#__PURE__*/function () {
  function LoggerFactory() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, LoggerFactory);
    throw new Error('LoggerFactory is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(LoggerFactory, null, [{
    key: "telemetryConfiguration",
    get: function get() {
      return LoggerFactory._telemetryConfiguration;
    }
  }, {
    key: "getLogger",
    value: function getLogger(category) {
      if (typeof category !== 'string') {
        category = 'SDK';
      }
      var logger = LoggerFactory._loggers[category];
      if (logger) {
        return logger;
      }
      return LoggerFactory._loggers[category] = new _Logger__WEBPACK_IMPORTED_MODULE_3__["default"](category, this._appenders, this._threshold);
    }
  }, {
    key: "applyLoggerConfigFromParameterConfiguration",
    value: function applyLoggerConfigFromParameterConfiguration() {
      LoggerFactory.applyLoggingLevel();
      LoggerFactory.applyAppenderLoggingLevel('console', LoggerFactory.applyConsoleLogger.bind(this));
      LoggerFactory.applyAppenderLoggingLevel('telemetry', LoggerFactory.applyTelemetryLogger.bind(this));
    }
  }, {
    key: "applyLoggingLevel",
    value: function applyLoggingLevel() {
      var parameterValue = this._configurationParameterReader.getStringValue('phenix-logging-level');
      if (_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel[parameterValue]) {
        this._threshold.setThreshold(_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel[parameterValue]);
      }
      return;
    }
  }, {
    key: "applyAppenderLoggingLevel",
    value: function applyAppenderLoggingLevel(name, applyAppender) {
      var parameterValue = this._configurationParameterReader.getStringValue("phenix-".concat(name, "-logging-level"));
      if (parameterValue === 'Off') {
        return;
      }
      applyAppender(_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel[parameterValue]);
    }
  }, {
    key: "applyConsoleLogger",
    value: function applyConsoleLogger(level) {
      this._appenders.add(new _ConsoleAppender__WEBPACK_IMPORTED_MODULE_6__["default"](level || _LoggerDefaults__WEBPACK_IMPORTED_MODULE_10__["default"].defaultConsoleLoggingLevel));
    }
  }, {
    key: "applyTelemetryLogger",
    value: function applyTelemetryLogger(level) {
      this._telemetryConfiguration.threshold = level || _LoggerDefaults__WEBPACK_IMPORTED_MODULE_10__["default"].defaultTelemetryLoggingLevel;
      this._appenders.add(new _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_7__["default"](this._telemetryConfiguration));
    }
  }]);
}();
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(LoggerFactory, "_configurationParameterReader", new _dom_ConfigurationParameterReader__WEBPACK_IMPORTED_MODULE_9__["default"]());
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(LoggerFactory, "_loggers", {});
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(LoggerFactory, "_appenders", new _Appenders__WEBPACK_IMPORTED_MODULE_4__["default"]());
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(LoggerFactory, "_threshold", new _LoggingThreshold__WEBPACK_IMPORTED_MODULE_5__["default"]());
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(LoggerFactory, "_telemetryConfiguration", new _telemetry_TelemetryConfiguration__WEBPACK_IMPORTED_MODULE_8__["default"]());

LoggerFactory.applyLoggerConfigFromParameterConfiguration();

/***/ }),

/***/ "./src/logger/LoggingLevelMapping.ts":
/*!*******************************************!*\
  !*** ./src/logger/LoggingLevelMapping.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoggingLevelMapping)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logger */ "./src/logger/Logger.ts");


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var LoggingLevelMapping = /*#__PURE__*/function () {
  function LoggingLevelMapping() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, LoggingLevelMapping);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(LoggingLevelMapping, null, [{
    key: "convertLoggingLevelToLoggingLevelType",
    value: function convertLoggingLevelToLoggingLevelType(loggingLevel) {
      switch (loggingLevel) {
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Off:
          return 'Off';
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Trace:
          return 'Trace';
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Debug:
          return 'Debug';
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Info:
          return 'Trace';
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Warn:
          return 'Warn';
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Error:
          return 'Error';
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Fatal:
          return 'Fatal';
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.All:
          return 'All';
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_2__["default"])(loggingLevel);
      }
    }
  }, {
    key: "convertLoggingLevelTypeToLoggingLevel",
    value: function convertLoggingLevelTypeToLoggingLevel(loggingLevelType) {
      switch (loggingLevelType) {
        case 'Off':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Off;
        case 'Trace':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Trace;
        case 'Debug':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Debug;
        case 'Info':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Info;
        case 'Warn':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Warn;
        case 'Error':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Error;
        case 'Fatal':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Fatal;
        case 'All':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.All;
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_2__["default"])(loggingLevelType);
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/logger/LoggingThreshold.ts":
/*!****************************************!*\
  !*** ./src/logger/LoggingThreshold.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoggingThreshold)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LoggerDefaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoggerDefaults */ "./src/logger/LoggerDefaults.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var LoggingThreshold = /*#__PURE__*/function () {
  function LoggingThreshold() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, LoggingThreshold);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_threshold", _LoggerDefaults__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLoggingLevel);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(LoggingThreshold, [{
    key: "value",
    get: function get() {
      return this._threshold;
    }
  }, {
    key: "setThreshold",
    value: function setThreshold(threshold) {
      this._threshold = threshold;
    }
  }]);
}();


/***/ }),

/***/ "./src/metrics/MetricType.ts":
/*!***********************************!*\
  !*** ./src/metrics/MetricType.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetricType)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MetricsConfiguration */ "./src/metrics/MetricsConfiguration.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _MetricsType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MetricsType */ "./src/metrics/MetricsType.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */



var MetricType = /*#__PURE__*/function () {
  function MetricType(metrics) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, MetricType);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_metrics", void 0);
    this._metrics = metrics;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(MetricType, [{
    key: "getName",
    value: function getName() {
      return _MetricsType__WEBPACK_IMPORTED_MODULE_5__["default"][this._metrics];
    }
  }, {
    key: "getTelemetryLevel",
    value: function getTelemetryLevel() {
      switch (this._metrics) {
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__["default"].TimeToFirstFrame:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.Essential;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__["default"].ChannelCreationTimeToFirstFrame:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.Essential;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__["default"].Stalled:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__["default"].Buffering:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__["default"].SetupCompleted:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__["default"].SetupFailed:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__["default"].RoundTripTime:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__["default"].DownlinkThroughputCapacity:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__["default"].NetworkType:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__["default"].ResolutionChanged:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__["default"].ApplicationForeground:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__["default"].ApplicationBackground:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_4__["default"])(this._metrics);
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/metrics/MetricsConfiguration.ts":
/*!*********************************************!*\
  !*** ./src/metrics/MetricsConfiguration.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TelemetryLevel: () => (/* binding */ TelemetryLevel),
/* harmony export */   "default": () => (/* binding */ MetricsConfiguration)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TelemetryDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TelemetryDefault */ "./src/metrics/TelemetryDefault.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var TelemetryLevel = /*#__PURE__*/function (TelemetryLevel) {
  TelemetryLevel[TelemetryLevel["Off"] = 100] = "Off";
  TelemetryLevel[TelemetryLevel["Essential"] = 10] = "Essential";
  TelemetryLevel[TelemetryLevel["All"] = -1] = "All";
  return TelemetryLevel;
}({});
var MetricsConfiguration = /*#__PURE__*/function () {
  function MetricsConfiguration() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, MetricsConfiguration);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_url", 'https://telemetry.phenixrts.com/telemetry/metrics');
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_tenancy", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_sessionId", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_environment", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_threshold", _TelemetryDefault__WEBPACK_IMPORTED_MODULE_3__["default"].defaultTelemetryLevel);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(MetricsConfiguration, [{
    key: "url",
    get: function get() {
      return this._url;
    },
    set: function set(url) {
      var metricsUrl = new URL(url);
      metricsUrl.pathname = metricsUrl.pathname + '/metrics';
      this._url = metricsUrl.toString();
    }
  }, {
    key: "environment",
    get: function get() {
      return this._environment;
    },
    set: function set(environment) {
      this._environment = environment;
    }
  }, {
    key: "tenancy",
    get: function get() {
      return this._tenancy;
    },
    set: function set(tenancy) {
      this._tenancy = tenancy;
    }
  }, {
    key: "sessionId",
    get: function get() {
      return this._sessionId;
    },
    set: function set(sessionId) {
      this._sessionId = sessionId;
    }
  }, {
    key: "threshold",
    get: function get() {
      return this._threshold;
    },
    set: function set(threshold) {
      this._threshold = threshold;
    }
  }]);
}();


/***/ }),

/***/ "./src/metrics/MetricsFactory.ts":
/*!***************************************!*\
  !*** ./src/metrics/MetricsFactory.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetricsFactory)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MetricsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MetricsService */ "./src/metrics/MetricsService.ts");
/* harmony import */ var _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MetricsConfiguration */ "./src/metrics/MetricsConfiguration.ts");
/* harmony import */ var _sdk_SDK__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sdk/SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _sdk_TelemetryUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sdk/TelemetryUrl */ "./src/sdk/TelemetryUrl.ts");
/* harmony import */ var _sdk_Environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sdk/Environment */ "./src/sdk/Environment.ts");
/* harmony import */ var _TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TelemetricLevelMapping */ "./src/metrics/TelemetricLevelMapping.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */







var MetricsFactory = /*#__PURE__*/function () {
  function MetricsFactory() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, MetricsFactory);
    throw new Error('LoggerFactory is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(MetricsFactory, null, [{
    key: "getMetricsService",
    value: function getMetricsService(url) {
      if (typeof url !== 'string') {
        throw new Error('ur');
      }
      var metricsServices = MetricsFactory._metricsServices[url];
      if (metricsServices) {
        return metricsServices;
      }
      var metricsConfiguration = new _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_4__["default"]();
      metricsConfiguration.sessionId = _sdk_SDK__WEBPACK_IMPORTED_MODULE_5__["default"].clientSessionId;
      metricsConfiguration.tenancy = _sdk_SDK__WEBPACK_IMPORTED_MODULE_5__["default"].tenancy.value;
      metricsConfiguration.url = _sdk_TelemetryUrl__WEBPACK_IMPORTED_MODULE_6__["default"].getTelemetryUrl(url);
      metricsConfiguration.environment = _sdk_Environment__WEBPACK_IMPORTED_MODULE_7__["default"].getEnvironmentFromUrl(url);
      metricsConfiguration.threshold = _TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_8__["default"].convertTelemetryLevelTypeToTelemetryLevel(_sdk_SDK__WEBPACK_IMPORTED_MODULE_5__["default"].telemetryLevel);
      return MetricsFactory._metricsServices[url] = new _MetricsService__WEBPACK_IMPORTED_MODULE_3__["default"](metricsConfiguration);
    }
  }, {
    key: "setTelemetryLevel",
    value: function setTelemetryLevel(telemetryLevel) {
      var metricsServices = Object.values(MetricsFactory._metricsServices);
      if (metricsServices && metricsServices.length) {
        metricsServices.forEach(function (metricsService) {
          var metricsConfiguration = metricsService.metricsConfiguration;
          metricsConfiguration.threshold = telemetryLevel;
        });
      }
    }
  }]);
}();
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(MetricsFactory, "_metricsServices", {});


/***/ }),

/***/ "./src/metrics/MetricsService.ts":
/*!***************************************!*\
  !*** ./src/metrics/MetricsService.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetricsService)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _time_ExponentialBackoff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../time/ExponentialBackoff */ "./src/time/ExponentialBackoff.ts");
/* harmony import */ var _sdk_version_VersionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sdk/version/VersionManager */ "./src/sdk/version/VersionManager.ts");
/* harmony import */ var _MetricType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MetricType */ "./src/metrics/MetricType.ts");






/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





var requestSizeLimit = 1024;
var maxBufferedRecords = 2048;
var MetricsService = /*#__PURE__*/function () {
  function MetricsService(metricsConfiguration) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, MetricsService);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__["default"].getLogger('MetricsService'));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_metricsConfiguration", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_exponentialBackoff", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_metrics", []);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_isSending", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_failureCount", 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_domain", location.hostname);
    this._metricsConfiguration = metricsConfiguration;
    this._exponentialBackoff = new _time_ExponentialBackoff__WEBPACK_IMPORTED_MODULE_7__["default"]();
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(MetricsService, [{
    key: "metricsConfiguration",
    get: function get() {
      return this._metricsConfiguration;
    }
  }, {
    key: "push",
    value: function push(metric) {
      var streamId = metric.streamId,
        value = metric.value,
        previousValue = metric.previousValue,
        runtime = metric.runtime,
        resource = metric.resource,
        kind = metric.kind;
      var metricType = new _MetricType__WEBPACK_IMPORTED_MODULE_9__["default"](metric.metricType);
      if (this._metricsConfiguration.threshold > metricType.getTelemetryLevel()) {
        return;
      }
      var metricRecord = {
        timestamp: new Date().toISOString(),
        tenancy: this._metricsConfiguration.tenancy,
        sessionId: this._metricsConfiguration.sessionId,
        streamId: streamId,
        metric: metricType.getName(),
        value: value,
        previousValue: previousValue,
        fullQualifiedName: this._domain,
        environment: this._metricsConfiguration.environment,
        version: _sdk_version_VersionManager__WEBPACK_IMPORTED_MODULE_8__["default"].sdkVersion,
        runtime: runtime,
        resource: resource,
        kind: kind
      };
      this._metrics.push(metricRecord);
      var ignored = this.sendMetricsIfAble();
    }
  }, {
    key: "sendMetrics",
    value: function () {
      var _sendMetrics = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(metricsMessages) {
        var formData;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              formData = new FormData();
              formData.append('jsonBody', JSON.stringify({
                records: metricsMessages
              }));
              _context.next = 4;
              return fetch(this._metricsConfiguration.url, {
                method: 'POST',
                body: formData
              });
            case 4:
              return _context.abrupt("return", _context.sent);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function sendMetrics(_x) {
        return _sendMetrics.apply(this, arguments);
      }
      return sendMetrics;
    }()
  }, {
    key: "sendMetricsIfAble",
    value: function () {
      var _sendMetricsIfAble = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2() {
        var _this = this;
        var metricsMessages;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this._metrics.length <= 0 || this._isSending)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              this._isSending = true;
              metricsMessages = this._metrics.slice(0, requestSizeLimit);
              this._metrics = this._metrics.slice(requestSizeLimit);
              return _context2.abrupt("return", this.sendMetrics(metricsMessages).then(function (response) {
                if (_this.isResponseStatusCodeRetryable(response)) {
                  if (_this._metrics.length <= maxBufferedRecords) {
                    _this._failureCount++;
                    setTimeout(function () {
                      _this._metrics = [].concat(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(metricsMessages), _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_this._metrics));
                      _this._isSending = false;
                      var ignored = _this.sendMetricsIfAble();
                    }, _this._exponentialBackoff.getExponentialBackoffIntervalByFailureCount(_this._failureCount));
                    return;
                  }
                  _this._logger.error('Too many cached metric records [%s], dropping [%s] records', _this._metrics.length, metricsMessages.length);
                }
                _this._isSending = false;
                _this._failureCount = 0;
                var ignored = _this.sendMetricsIfAble();
                return response;
              }).catch(function () {
                _this._isSending = false;
                var ignored = _this.sendMetricsIfAble();
              }));
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function sendMetricsIfAble() {
        return _sendMetricsIfAble.apply(this, arguments);
      }
      return sendMetricsIfAble;
    }()
  }, {
    key: "isResponseStatusCodeRetryable",
    value: function isResponseStatusCodeRetryable(_ref) {
      var status = _ref.status;
      return /^5\d{2}$/.test(status.toString());
    }
  }]);
}();


/***/ }),

/***/ "./src/metrics/MetricsType.ts":
/*!************************************!*\
  !*** ./src/metrics/MetricsType.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__) => {

"use strict";
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var MetricsType = /*#__PURE__*/function (MetricsType) {
  MetricsType[MetricsType["TimeToFirstFrame"] = 0] = "TimeToFirstFrame";
  MetricsType[MetricsType["ChannelCreationTimeToFirstFrame"] = 1] = "ChannelCreationTimeToFirstFrame";
  MetricsType[MetricsType["Stalled"] = 2] = "Stalled";
  MetricsType[MetricsType["Buffering"] = 3] = "Buffering";
  MetricsType[MetricsType["SetupCompleted"] = 4] = "SetupCompleted";
  MetricsType[MetricsType["SetupFailed"] = 5] = "SetupFailed";
  MetricsType[MetricsType["RoundTripTime"] = 6] = "RoundTripTime";
  MetricsType[MetricsType["DownlinkThroughputCapacity"] = 7] = "DownlinkThroughputCapacity";
  MetricsType[MetricsType["NetworkType"] = 8] = "NetworkType";
  MetricsType[MetricsType["ResolutionChanged"] = 9] = "ResolutionChanged";
  MetricsType[MetricsType["ApplicationForeground"] = 10] = "ApplicationForeground";
  MetricsType[MetricsType["ApplicationBackground"] = 11] = "ApplicationBackground";
  return MetricsType;
}(MetricsType || {});
/* harmony default export */ __webpack_exports__["default"] = (MetricsType);

/***/ }),

/***/ "./src/metrics/TelemetricLevelMapping.ts":
/*!***********************************************!*\
  !*** ./src/metrics/TelemetricLevelMapping.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TelemetryLevelMapping)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MetricsConfiguration */ "./src/metrics/MetricsConfiguration.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var TelemetryLevelMapping = /*#__PURE__*/function () {
  function TelemetryLevelMapping() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, TelemetryLevelMapping);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(TelemetryLevelMapping, null, [{
    key: "convertTelemetryLevelToTelemetryLevelType",
    value: function convertTelemetryLevelToTelemetryLevelType(telemetryLevel) {
      switch (telemetryLevel) {
        case _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_2__.TelemetryLevel.Off:
          return 'Off';
        case _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_2__.TelemetryLevel.Essential:
          return 'Essential';
        case _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_2__.TelemetryLevel.All:
          return 'All';
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_3__["default"])(telemetryLevel);
      }
    }
  }, {
    key: "convertTelemetryLevelTypeToTelemetryLevel",
    value: function convertTelemetryLevelTypeToTelemetryLevel(telemetryLevelType) {
      switch (telemetryLevelType) {
        case 'Off':
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_2__.TelemetryLevel.Off;
        case 'Essential':
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_2__.TelemetryLevel.Essential;
        case 'All':
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_2__.TelemetryLevel.All;
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_3__["default"])(telemetryLevelType);
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/metrics/TelemetryDefault.ts":
/*!*****************************************!*\
  !*** ./src/metrics/TelemetryDefault.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TelemetryDefault)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environment_BuildFeatures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environment/BuildFeatures */ "./src/environment/BuildFeatures.ts");
/* harmony import */ var _metrics_MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../metrics/MetricsConfiguration */ "./src/metrics/MetricsConfiguration.ts");


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var TelemetryDefault = /*#__PURE__*/function () {
  function TelemetryDefault() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, TelemetryDefault);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(TelemetryDefault, null, [{
    key: "defaultTelemetryLevel",
    get: function get() {
      return _metrics_MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel[_environment_BuildFeatures__WEBPACK_IMPORTED_MODULE_2__["default"].sendMetrics];
    }
  }]);
}();


/***/ }),

/***/ "./src/promise/Promise.ts":
/*!********************************!*\
  !*** ./src/promise/Promise.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PromiseHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PromiseHandler */ "./src/promise/PromiseHandler.ts");




/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var Promise = /*#__PURE__*/function () {
  function Promise(callback) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, Promise);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_state", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_handled", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_value", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_deferreds", void 0);
    if (!(this instanceof Promise)) {
      throw new TypeError('Promises must be constructed via new');
    }
    if (typeof callback !== 'function') {
      throw new TypeError('not a function');
    }
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];
    this.doResolve(callback);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(Promise, [{
    key: "doResolve",
    value: function doResolve(callback) {
      var _this = this;
      var done = false;
      try {
        callback(function (value) {
          if (done) {
            return;
          }
          done = true;
          _this.promiseResolve(value);
        }, function (reason) {
          if (done) {
            return;
          }
          done = true;
          _this.promiseReject(reason);
        });
      } catch (error) {
        if (done) {
          return;
        }
        done = true;
        this.promiseReject(error);
      }
    }
  }, {
    key: "promiseResolve",
    value: function promiseResolve(newValue) {
      var promise = this;
      try {
        // Promise Resolution Procedure: https://github.com/Promises-aplus/Promises-spec#the-Promise-resolution-procedure
        if (newValue === promise) {
          throw new TypeError('A Promise cannot be resolved with it self.');
        }
        if (newValue && (_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default()(newValue) === 'object' || typeof newValue === 'function')) {
          var _then = newValue.then;
          if (newValue instanceof Promise) {
            promise._state = 3;
            promise._value = newValue;
            promise.finale();
            return;
          } else if (typeof _then === 'function') {
            promise.doResolve(function () {
              // eslint-disable-next-line prefer-rest-params
              _then.apply(newValue, arguments);
            });
            return;
          }
        }
        promise._state = 1;
        promise._value = newValue;
        promise.finale();
      } catch (e) {
        promise.promiseReject(e);
      }
    }
  }, {
    key: "promiseReject",
    value: function promiseReject(newValue) {
      this._state = 2;
      this._value = newValue;
      this.finale();
    }
  }, {
    key: "finale",
    value: function finale() {
      var _this2 = this;
      if (this._state === 2 && this._deferreds.length === 0) {
        Promise._immediate(function () {
          if (!_this2._handled) {
            Promise._unhandledRejection(_this2._value);
          }
        });
      }
      for (var i = 0, len = this._deferreds.length; i < len; i++) {
        this.handle(this._deferreds[i]);
      }
      this._deferreds = null;
    }
  }, {
    key: "handle",
    value: function handle(deferred) {
      var promise = this;
      while (promise._state === 3) {
        promise = promise._value;
      }
      if (promise._state === 0) {
        promise._deferreds.push(deferred);
        return;
      }
      promise._handled = true;
      Promise._immediate(function () {
        var callback = promise._state === 1 ? deferred.onFulfilled : deferred.onRejected;
        if (callback === null) {
          if (promise._state === 1) {
            deferred.promise.promiseResolve(promise._value);
          } else {
            deferred.promise.promiseReject(promise._value);
          }
          return;
        }
        var result;
        try {
          result = callback(promise._value);
        } catch (e) {
          deferred.promise.promiseReject(e);
          return;
        }
        deferred.promise.promiseResolve(result);
      });
    }
  }], [{
    key: "all",
    value: function all(arr) {
      return new Promise(function (resolve, reject) {
        if (!Array.isArray(arr)) {
          return reject(new TypeError('Promise.all accepts an array'));
        }
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0) {
          return resolve([]);
        }
        var remaining = args.length;
        var manageResponse = function manageResponse(i, value) {
          try {
            if (value && (_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object' || typeof value === 'function')) {
              var _then2 = value.then;
              if (typeof _then2 === 'function') {
                _then2.call(value, function (value) {
                  return manageResponse(i, value);
                }, reject);
                return;
              }
            }
            args[i] = value;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (error) {
            reject(error);
          }
        };
        for (var i = 0; i < args.length; i++) {
          manageResponse(i, args[i]);
        }
      });
    }
  }, {
    key: "resolve",
    value: function resolve(value) {
      if (value && _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object' && value.constructor === Promise) {
        return value;
      }
      return new Promise(function (resolve) {
        return resolve(value);
      });
    }
  }, {
    key: "reject",
    value: function reject(value) {
      return new Promise(function (_, reject) {
        return reject(value);
      });
    }
  }, {
    key: "race",
    value: function race(arr) {
      return new Promise(function (resolve, reject) {
        if (!Array.isArray(arr)) {
          return reject(new TypeError('Promise.race accepts an array'));
        }
        for (var i = 0, len = arr.length; i < len; i++) {
          Promise.resolve(arr[i]).then(resolve, reject);
        }
      });
    }
  }, {
    key: "_immediate",
    value: function _immediate(callback) {
      var ignored = setTimeout(callback, 0);
    }
  }, {
    key: "_unhandledRejection",
    value: function _unhandledRejection(error) {
      if (typeof console !== 'undefined' && console) {
        console.warn('Possible Unhandled Promise Rejection:', error); // eslint-disable-line no-console
      }
    }
  }]);
}();
Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype['then'] = function (onFulfilled, onRejected) {
  var promise = new this.constructor(function () {
    return null;
  });
  this.handle(new _PromiseHandler__WEBPACK_IMPORTED_MODULE_4__["default"](onFulfilled, onRejected, promise));
  return promise;
};
Promise.prototype['finally'] = function (callback) {
  var constructor = this.constructor;
  return this.then(function (value) {
    return constructor.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    return constructor.resolve(callback()).then(function () {
      return constructor.reject(reason);
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Promise);

/***/ }),

/***/ "./src/promise/PromiseHandler.ts":
/*!***************************************!*\
  !*** ./src/promise/PromiseHandler.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PromiseHandler)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var PromiseHandler = /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default()(function PromiseHandler(onFulfilled, onRejected, promise) {
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, PromiseHandler);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "onFulfilled", void 0);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "onRejected", void 0);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "promise", void 0);
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
});


/***/ }),

/***/ "./src/rtc/PeerConnectionService.ts":
/*!******************************************!*\
  !*** ./src/rtc/PeerConnectionService.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PeerConnectionService)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environment/FeatureEnablement */ "./src/environment/FeatureEnablement.ts");
/* harmony import */ var _VanillaPeerConnectionFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VanillaPeerConnectionFactory */ "./src/rtc/VanillaPeerConnectionFactory.ts");





/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var PeerConnectionService = /*#__PURE__*/function () {
  function PeerConnectionService() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, PeerConnectionService);
    throw new Error('PeerConnectionService is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(PeerConnectionService, null, [{
    key: "peerConnectionFactory",
    get: function get() {
      return PeerConnectionService._peerConnectionFactory;
    }
  }, {
    key: "initiateInitialPrecaching",
    value: function initiateInitialPrecaching() {
      if (_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_7__["default"].isPrecachingEnabled) {
        var ignored = PeerConnectionService.precacheCreatePeerConnectionOffer().catch(function (e) {
          return PeerConnectionService._logger.error('Failed to pre-cache peer connection offer', e);
        });
      }
    }
  }, {
    key: "precacheCreatePeerConnectionOffer",
    value: function () {
      var _precacheCreatePeerConnectionOffer = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", PeerConnectionService._cached = {
                direction: 'recvonly',
                peerConnection: PeerConnectionService.createPeerConnectionOffer().catch(function (e) {
                  PeerConnectionService._cached = null;
                  throw e;
                })
              });
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function precacheCreatePeerConnectionOffer() {
        return _precacheCreatePeerConnectionOffer.apply(this, arguments);
      }
      return precacheCreatePeerConnectionOffer;
    }()
  }, {
    key: "createPeerConnectionOffer",
    value: function () {
      var _createPeerConnectionOffer = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3() {
        var direction,
          encodedInsertableStreams,
          value,
          configuration,
          _args3 = arguments;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              direction = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 'recvonly';
              encodedInsertableStreams = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : false;
              if (!(PeerConnectionService._cached && PeerConnectionService._cached.direction === direction && !encodedInsertableStreams)) {
                _context3.next = 6;
                break;
              }
              value = PeerConnectionService._cached.peerConnection;
              PeerConnectionService._cached = null;
              return _context3.abrupt("return", value);
            case 6:
              configuration = _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_7__["default"].isEncodedInsertableStreamsSupported ? {
                encodedInsertableStreams: encodedInsertableStreams
              } : undefined;
              return _context3.abrupt("return", PeerConnectionService._peerConnectionFactory.value.createPeerConnection(configuration).then( /*#__PURE__*/function () {
                var _ref = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(peerConnection) {
                  var supportsAddTransceiver, videoTransceiver, audioTransceiver, options;
                  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        supportsAddTransceiver = peerConnection.supportsAddTransceiver;
                        if (!supportsAddTransceiver) {
                          _context2.next = 11;
                          break;
                        }
                        audioTransceiver = peerConnection.addTransceiver('audio', {
                          direction: direction
                        });
                        videoTransceiver = peerConnection.addTransceiver('video', {
                          direction: direction
                        });
                        _context2.t0 = audioTransceiver;
                        _context2.t1 = videoTransceiver;
                        _context2.t2 = peerConnection;
                        _context2.next = 9;
                        return peerConnection.createOffer(undefined);
                      case 9:
                        _context2.t3 = _context2.sent;
                        return _context2.abrupt("return", {
                          audioTransceiver: _context2.t0,
                          videoTransceiver: _context2.t1,
                          peerConnection: _context2.t2,
                          localOffer: _context2.t3
                        });
                      case 11:
                        options = direction === 'recvonly' ? {
                          offerToReceiveAudio: true,
                          offerToReceiveVideo: true
                        } : {};
                        _context2.t4 = peerConnection;
                        _context2.next = 15;
                        return peerConnection.createOffer(options);
                      case 15:
                        _context2.t5 = _context2.sent;
                        return _context2.abrupt("return", {
                          peerConnection: _context2.t4,
                          localOffer: _context2.t5
                        });
                      case 17:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function createPeerConnectionOffer() {
        return _createPeerConnectionOffer.apply(this, arguments);
      }
      return createPeerConnectionOffer;
    }()
  }]);
}();
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(PeerConnectionService, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger('PeerConnectionService'));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(PeerConnectionService, "_peerConnectionFactory", new _rx_Subject__WEBPACK_IMPORTED_MODULE_6__["default"](new _VanillaPeerConnectionFactory__WEBPACK_IMPORTED_MODULE_8__["default"]()));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(PeerConnectionService, "_cached", void 0);

PeerConnectionService.initiateInitialPrecaching();

/***/ }),

/***/ "./src/rtc/RtcConfigurationManager.ts":
/*!********************************************!*\
  !*** ./src/rtc/RtcConfigurationManager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RtcConfigurationManager)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var RtcConfigurationManager = /*#__PURE__*/function () {
  function RtcConfigurationManager() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, RtcConfigurationManager);
    throw new Error('RtcConfigurationManager is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(RtcConfigurationManager, null, [{
    key: "truncateIceServers",
    value: function truncateIceServers(configuration) {
      var iceServers = [];
      for (var i = 0; i < configuration.iceServers.length; i++) {
        var urls = [];
        for (var index = 0; index < 2; index++) {
          var url = configuration.iceServers[i].urls[index];
          if (url) {
            urls.push(configuration.iceServers[i].urls[index]);
          }
        }
        iceServers.push({
          urls: urls,
          username: configuration.iceServers[i].username,
          credential: configuration.iceServers[i].credential
        });
      }
      configuration.iceServers = iceServers;
      return configuration;
    }
  }]);
}();


/***/ }),

/***/ "./src/rtc/RtcConnectionMonitor.ts":
/*!*****************************************!*\
  !*** ./src/rtc/RtcConnectionMonitor.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RtcConnectionMonitor)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environment/FeatureEnablement */ "./src/environment/FeatureEnablement.ts");
/* harmony import */ var _SdpParser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SdpParser */ "./src/rtc/SdpParser.ts");





/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var updateStatisticTimeout = 1000;
var RtcConnectionMonitor = /*#__PURE__*/function () {
  function RtcConnectionMonitor(peerConnection, mediaStream, estimatedRoundTripTime) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, RtcConnectionMonitor);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_estimatedRoundTripTime", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_estimatedVideoCodec", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_estimatedAudioCodec", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_rtcStatistic", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__["default"]({}));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_peerConnection", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_isMonitorRunning", true);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_updateTimeout", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_tracksToMonitor", void 0);
    this._peerConnection = peerConnection;
    this._estimatedRoundTripTime = estimatedRoundTripTime;
    this._tracksToMonitor = mediaStream.getTracks().map(function (track) {
      return track.kind;
    }) || [];
    if (this._peerConnection) {
      if (!_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__["default"].getCurrentOfferDisabled) {
        var parsedSDP = new _SdpParser__WEBPACK_IMPORTED_MODULE_7__["default"](this._peerConnection.currentRemoteDescription.sdp);
        this._estimatedAudioCodec = parsedSDP.audioCodec;
        this._estimatedVideoCodec = parsedSDP.videoCodec;
      }
      this.updateStatistic();
    }
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(RtcConnectionMonitor, [{
    key: "rtcStatistic",
    get: function get() {
      return this._rtcStatistic;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._isMonitorRunning = false;
      this._peerConnection = null;
      if (this._updateTimeout) {
        clearTimeout(this._updateTimeout);
        this._updateTimeout = null;
      }
    }
  }, {
    key: "updateStatistic",
    value: function () {
      var _updateStatistic = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var _this = this;
        var _ignored, getKindForSafari11, ignored;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__["default"].getStatsPromiseBasedDisabled) {
                _context.next = 5;
                break;
              }
              _context.next = 3;
              return this.updateStatisticLegacy();
            case 3:
              _ignored = _context.sent;
              return _context.abrupt("return");
            case 5:
              // Safari 11 doesnt have kind or mediaType so we need to take it from the inbound-rtp object id
              getKindForSafari11 = function getKindForSafari11(item) {
                return item.id.includes('Audio') ? 'audio' : item.id.includes('Video') ? 'video' : '';
              };
              _context.next = 8;
              return this._peerConnection.getStats(null).then(function (stats) {
                var rtcStatistics = {};
                if (stats) {
                  var roundTripTime = _this._estimatedRoundTripTime;
                  var lastPacketReceivedTimestamp;
                  stats.forEach(function (report) {
                    if (report.type === 'candidate-pair' && report.currentRoundTripTime) {
                      roundTripTime = report.currentRoundTripTime * 1000;
                      if (rtcStatistics['audio']) {
                        rtcStatistics['audio'].roundTripTime = roundTripTime;
                      }
                      if (rtcStatistics['video']) {
                        rtcStatistics['video'].roundTripTime = roundTripTime;
                      }
                    }
                    if (report.type === 'candidate-pair' && report.lastPacketReceivedTimestamp) {
                      lastPacketReceivedTimestamp = report.lastPacketReceivedTimestamp;
                      if (rtcStatistics['audio']) {
                        rtcStatistics['audio'].lastPacketReceivedTimestamp = lastPacketReceivedTimestamp;
                      }
                      if (rtcStatistics['video']) {
                        rtcStatistics['video'].lastPacketReceivedTimestamp = lastPacketReceivedTimestamp;
                      }
                    }
                    if (report.type === 'inbound-rtp') {
                      var _kind = report.kind || report.mediaType || getKindForSafari11(report);
                      var codec = '';
                      stats.forEach(function (item) {
                        if (item.id === report.codecId) {
                          codec = item.mimeType;
                        }
                      });
                      if (_kind && _this._tracksToMonitor.includes(_kind)) {
                        var _this$_rtcStatistic$v, _this$_rtcStatistic$v2, _this$_rtcStatistic$v3, _this$_rtcStatistic$v4, _this$_rtcStatistic$v5;
                        var bytes = report.bytesReceived || 0;
                        var previousBytesReceived = (_this$_rtcStatistic$v = (_this$_rtcStatistic$v2 = _this._rtcStatistic.value) === null || _this$_rtcStatistic$v2 === void 0 ? void 0 : (_this$_rtcStatistic$v3 = _this$_rtcStatistic$v2[_kind]) === null || _this$_rtcStatistic$v3 === void 0 ? void 0 : _this$_rtcStatistic$v3.bytesReceived) !== null && _this$_rtcStatistic$v !== void 0 ? _this$_rtcStatistic$v : 0;
                        var bytesDelta = bytes - previousBytesReceived;
                        var timeDelta = report.timestamp - ((_this$_rtcStatistic$v4 = _this._rtcStatistic.value) === null || _this$_rtcStatistic$v4 === void 0 ? void 0 : (_this$_rtcStatistic$v5 = _this$_rtcStatistic$v4[_kind]) === null || _this$_rtcStatistic$v5 === void 0 ? void 0 : _this$_rtcStatistic$v5.timestamp);
                        var bitrate = bytesDelta && timeDelta ? Math.floor(8 * bytesDelta / timeDelta * 1000) : 0;
                        rtcStatistics[_kind] = {
                          ssrc: report.ssrc,
                          mediaType: _kind,
                          timestamp: report.timestamp,
                          bitrate: bitrate,
                          bytesReceived: report.bytesReceived,
                          packetsLost: report.packetsLost,
                          packetsReceived: report.packetsReceived,
                          codec: codec || _this.getCodecByType(_kind),
                          roundTripTime: roundTripTime
                        };
                        if (report.lastPacketReceivedTimestamp || lastPacketReceivedTimestamp) {
                          rtcStatistics[_kind].lastPacketReceivedTimestamp = report.lastPacketReceivedTimestamp || lastPacketReceivedTimestamp;
                        }
                        if (_kind === 'video' && _this._rtcStatistic.value && _this._rtcStatistic.value.video) {
                          rtcStatistics[_kind]['framesDecoded'] = report.framesDecoded;
                          var fps = (report.framesDecoded - _this._rtcStatistic.value.video.framesDecoded) / (rtcStatistics[_kind].timestamp - _this._rtcStatistic.value.video.timestamp) * 1000;
                          rtcStatistics[_kind]['fps'] = fps ? Math.round(fps * 100) / 100 : 0;
                        }
                      }
                    }
                  });
                }
                _this._rtcStatistic.value = rtcStatistics;
              }).then(function () {
                if (_this._isMonitorRunning) {
                  _this._updateTimeout = window.setTimeout(function () {
                    return _this.updateStatistic();
                  }, updateStatisticTimeout);
                }
              });
            case 8:
              ignored = _context.sent;
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function updateStatistic() {
        return _updateStatistic.apply(this, arguments);
      }
      return updateStatistic;
    }()
  }, {
    key: "updateStatisticLegacy",
    value: function () {
      var _updateStatisticLegacy = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        var _this2 = this;
        var ignored;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this._peerConnection.getStatsLegacy().then(function (stats) {
                var rtcStatistics = {};
                var roundTripTime = _this2._estimatedRoundTripTime;
                stats.result().forEach(function (report) {
                  report.names().forEach(function (name) {
                    if (name === 'googRTT') {
                      roundTripTime = report.stat(name);
                    }
                  });
                  if (report.type === 'ssrc') {
                    var mediaType = report.stat('mediaType').toString();
                    rtcStatistics[mediaType] = {
                      timestamp: Date.now()
                    };
                    rtcStatistics[mediaType]['ssrc'] = report.stat('ssrc').toString();
                    rtcStatistics[mediaType]['mediaType'] = mediaType;
                    rtcStatistics[mediaType]['bytesReceived'] = report.stat('bytesReceived');
                    rtcStatistics[mediaType]['packetsLost'] = report.stat('packetsLost');
                    rtcStatistics[mediaType]['packetsReceived'] = report.stat('packetsReceived');
                    rtcStatistics[mediaType]['codec'] = report.stat('googCodecName').toString() || _this2.getCodecByType(mediaType);
                    rtcStatistics[mediaType]['roundTripTime'] = roundTripTime;
                    if (mediaType === 'video' && _this2._rtcStatistic.value && _this2._rtcStatistic.value.video) {
                      rtcStatistics[mediaType]['framesDecoded'] = report.stat('framesDecoded');
                      rtcStatistics[mediaType]['fps'] = (rtcStatistics[mediaType].framesDecoded - _this2._rtcStatistic.value.video.framesDecoded) / (rtcStatistics[mediaType].timestamp - _this2._rtcStatistic.value.video.timestamp) * 1000 || 0;
                    }
                  }
                });
                _this2._rtcStatistic.value = rtcStatistics;
              }).then(function () {
                if (_this2._isMonitorRunning) {
                  _this2._updateTimeout = window.setTimeout(function () {
                    return _this2.updateStatistic();
                  }, updateStatisticTimeout);
                }
              });
            case 2:
              ignored = _context2.sent;
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function updateStatisticLegacy() {
        return _updateStatisticLegacy.apply(this, arguments);
      }
      return updateStatisticLegacy;
    }()
  }, {
    key: "getCodecByType",
    value: function getCodecByType(type) {
      switch (type) {
        case 'audio':
          return this._estimatedAudioCodec;
        case 'video':
          return this._estimatedVideoCodec;
        default:
          return 'unknown';
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/rtc/SdpParser.ts":
/*!******************************!*\
  !*** ./src/rtc/SdpParser.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SdpParser)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var SdpParser = /*#__PURE__*/function () {
  function SdpParser(sdp) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, SdpParser);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_sdp", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_audioCodec", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_videoCodec", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_isAudioTrackEnabled", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_isVideoTrackEnabled", void 0);
    this._sdp = sdp;
    var sdpSplitByLines = this._sdp.split(/(\r\n|\r|\n)/);
    var sdpSplitByTracks = this._sdp.split(/(?:^|[\r\n])m=/);
    this._audioCodec = this.applyCodec('audio', sdpSplitByLines);
    this._videoCodec = this.applyCodec('video', sdpSplitByLines);
    this._isAudioTrackEnabled = this.isTrackByTypeEnabled('audio', sdpSplitByTracks);
    this._isVideoTrackEnabled = this.isTrackByTypeEnabled('video', sdpSplitByTracks);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(SdpParser, [{
    key: "audioCodec",
    get: function get() {
      return this._audioCodec;
    }
  }, {
    key: "videoCodec",
    get: function get() {
      return this._videoCodec;
    }
  }, {
    key: "isAudioTrackEnabled",
    get: function get() {
      return this._isAudioTrackEnabled;
    }
  }, {
    key: "isVideoTrackEnabled",
    get: function get() {
      return this._isVideoTrackEnabled;
    }
  }, {
    key: "isTrackByTypeEnabled",
    value: function isTrackByTypeEnabled(type, sdpSplitByTracks) {
      var sdpSectionForType = sdpSplitByTracks.find(function (sdpTrack) {
        return sdpTrack.startsWith(type);
      });
      if (!sdpSectionForType) {
        return false;
      }
      return !sdpSectionForType.includes("a=inactive");
    }
  }, {
    key: "applyCodec",
    value: function applyCodec(type, sdpSplitByLines) {
      var usedCodecLine = sdpSplitByLines.find(function (sdpLine) {
        return sdpLine.includes("a=rtpmap:".concat(sdpSplitByLines.find(function (i) {
          return i.includes("m=".concat(type));
        }).split(' ')[3]));
      });
      var usedCodec = usedCodecLine.split(' ')[1];
      var codecName = usedCodec.split('/')[0];
      return codecName;
    }
  }]);
}();


/***/ }),

/***/ "./src/rtc/VanillaPeerConnection.ts":
/*!******************************************!*\
  !*** ./src/rtc/VanillaPeerConnection.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environment/FeatureEnablement */ "./src/environment/FeatureEnablement.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];





/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var VanillaPeerConnection = /*#__PURE__*/function () {
  function VanillaPeerConnection(configuration) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, VanillaPeerConnection);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger('VanillaPeerConnection'));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_peerConnection", void 0);
    if (_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__["default"].webkitRTCPeerConnectionEnabled) {
      // Ignored as legacy webkitRTCPeerConnection class is deprecated
      // This was a Chrome specific implementation
      // Requires a ts-ignore directive to prevent typescript errors
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this._peerConnection = new webkitRTCPeerConnection(configuration);
      return;
    }
    this._peerConnection = new RTCPeerConnection(configuration);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(VanillaPeerConnection, [{
    key: "native",
    get: function get() {
      return this._peerConnection;
    }
  }, {
    key: "currentLocalDescription",
    get: function get() {
      return this._peerConnection.currentLocalDescription;
    }
  }, {
    key: "currentRemoteDescription",
    get: function get() {
      return this._peerConnection.currentRemoteDescription;
    }
  }, {
    key: "connectionState",
    get: function get() {
      return this._peerConnection.connectionState;
    }
  }, {
    key: "iceConnectionState",
    get: function get() {
      return this._peerConnection.iceConnectionState;
    }
  }, {
    key: "supportsGetConfiguration",
    get: function get() {
      return typeof this._peerConnection.getConfiguration === 'function';
    }
  }, {
    key: "supportsSetConfiguration",
    get: function get() {
      return typeof this._peerConnection.setConfiguration === 'function';
    }
  }, {
    key: "supportsAddTransceiver",
    get: function get() {
      return !_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__["default"].addTranceiverDisabled && typeof this._peerConnection.addTransceiver === 'function';
    }
  }, {
    key: "createOffer",
    value: function () {
      var _createOffer = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(options) {
        var _this = this;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__["default"].promiseBasedPCMethodsDisabled) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                return _this._peerConnection.createOffer(resolve, reject, options);
              }));
            case 2:
              return _context.abrupt("return", this._peerConnection.createOffer(options));
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createOffer(_x) {
        return _createOffer.apply(this, arguments);
      }
      return createOffer;
    }()
  }, {
    key: "createAnswer",
    value: function () {
      var _createAnswer = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(options) {
        var _this2 = this;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__["default"].promiseBasedPCMethodsDisabled) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                return _this2._peerConnection.createAnswer(resolve, reject, options);
              }));
            case 2:
              return _context2.abrupt("return", this._peerConnection.createAnswer(options));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createAnswer(_x2) {
        return _createAnswer.apply(this, arguments);
      }
      return createAnswer;
    }()
  }, {
    key: "setLocalDescription",
    value: function () {
      var _setLocalDescription = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3(description) {
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this._peerConnection.setLocalDescription(_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__["default"].promiseBasedPCMethodsDisabled ? new RTCSessionDescription(description) : description));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function setLocalDescription(_x3) {
        return _setLocalDescription.apply(this, arguments);
      }
      return setLocalDescription;
    }()
  }, {
    key: "setRemoteDescription",
    value: function () {
      var _setRemoteDescription = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4(description) {
        var _description$sdp;
        var hasCrypto;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              hasCrypto = (_description$sdp = description.sdp) === null || _description$sdp === void 0 ? void 0 : _description$sdp.match(/a=crypto:/i);
              if (hasCrypto) {
                this._logger.warn('SDP a=crypto is not supported');
              }
              return _context4.abrupt("return", this._peerConnection.setRemoteDescription(_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__["default"].promiseBasedPCMethodsDisabled ? new RTCSessionDescription(description) : description));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function setRemoteDescription(_x4) {
        return _setRemoteDescription.apply(this, arguments);
      }
      return setRemoteDescription;
    }()
  }, {
    key: "getSenders",
    value: function getSenders() {
      return this._peerConnection.getSenders();
    }
  }, {
    key: "getReceivers",
    value: function getReceivers() {
      return this._peerConnection.getReceivers();
    }
  }, {
    key: "getStats",
    value: function getStats(selector) {
      return this._peerConnection.getStats(selector);
    }
  }, {
    key: "getStatsLegacy",
    value: function getStatsLegacy() {
      var _this3 = this;
      return new Promise(function (resolve) {
        // Ignored due to typescript not having legacy 'getStats' method type definition
        // This was a Chrome specific implementation of the 'getStats' method for
        // Chrome@<= 66 detailed here: https://bugs.chromium.org/p/chromium/issues/detail?id=627816
        // Requires a ts-ignore directive to prevent typescript errors
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        var ignored = _this3._peerConnection.getStats(resolve);
      });
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener, options) {
      this._peerConnection.addEventListener(type, listener, options);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener, options) {
      this._peerConnection.removeEventListener(type, listener, options);
    }
  }, {
    key: "addTransceiver",
    value: function addTransceiver(name, options) {
      return this._peerConnection.addTransceiver(name, options);
    }
  }, {
    key: "addStream",
    value: function addStream(mediaStream) {
      var _this4 = this;
      mediaStream.getTracks().forEach(function (track) {
        _this4._peerConnection.addTrack(track);
      });
    }
  }, {
    key: "getConfiguration",
    value: function getConfiguration() {
      return this._peerConnection.getConfiguration();
    }
  }, {
    key: "setConfiguration",
    value: function setConfiguration(configuration) {
      this._peerConnection.setConfiguration(configuration);
    }
  }, {
    key: "ontrack",
    get: function get() {
      return this._peerConnection.ontrack;
    },
    set: function set(handler) {
      this._peerConnection.ontrack = handler;
    }
  }, {
    key: "onicecandidate",
    get: function get() {
      return this._peerConnection.onicecandidate;
    },
    set: function set(handler) {
      this._peerConnection.onicecandidate = handler;
    }
  }, {
    key: "onconnectionstatechange",
    get: function get() {
      return this._peerConnection.onconnectionstatechange;
    },
    set: function set(handler) {
      this._peerConnection.onconnectionstatechange = handler;
    }
  }, {
    key: "oniceconnectionstatechange",
    get: function get() {
      return this._peerConnection.oniceconnectionstatechange;
    },
    set: function set(handler) {
      this._peerConnection.oniceconnectionstatechange = handler;
    }
  }, {
    key: "close",
    value: function close() {
      this._peerConnection.close();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._peerConnection = null;
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (VanillaPeerConnection);

/***/ }),

/***/ "./src/rtc/VanillaPeerConnectionFactory.ts":
/*!*************************************************!*\
  !*** ./src/rtc/VanillaPeerConnectionFactory.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _VanillaPeerConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VanillaPeerConnection */ "./src/rtc/VanillaPeerConnection.ts");




/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var VanillaPeerConnectionFactory = /*#__PURE__*/function () {
  function VanillaPeerConnectionFactory() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, VanillaPeerConnectionFactory);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(VanillaPeerConnectionFactory, [{
    key: "createPeerConnection",
    value: function () {
      var _createPeerConnection = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(configuration) {
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new _VanillaPeerConnection__WEBPACK_IMPORTED_MODULE_4__["default"](configuration));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function createPeerConnection(_x) {
        return _createPeerConnection.apply(this, arguments);
      }
      return createPeerConnection;
    }()
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (VanillaPeerConnectionFactory);

/***/ }),

/***/ "./src/rx/ReadOnlySubject.ts":
/*!***********************************!*\
  !*** ./src/rx/ReadOnlySubject.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReadOnlySubject)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var ReadOnlySubject = /*#__PURE__*/function () {
  function ReadOnlySubject(subject) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, ReadOnlySubject);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_subject", void 0);
    this._subject = subject;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(ReadOnlySubject, [{
    key: "value",
    get: function get() {
      return this._subject.value;
    }
  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      return this._subject.subscribe(listener);
    }
  }]);
}();


/***/ }),

/***/ "./src/rx/Subject.ts":
/*!***************************!*\
  !*** ./src/rx/Subject.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Subject)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits.js */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lang/Disposable */ "./src/lang/Disposable.ts");






function _callSuper(t, o, e) { return o = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(o), _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default()(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var DisposableListener = /*#__PURE__*/function (_Disposable) {
  function DisposableListener(listeners, listener) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, DisposableListener);
    return _callSuper(this, DisposableListener, [function () {
      var idx = listeners.indexOf(listener);
      if (idx >= 0) {
        listeners.splice(idx, 1);
      }
    }]);
  }
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_5___default()(DisposableListener, _Disposable);
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(DisposableListener);
}(_lang_Disposable__WEBPACK_IMPORTED_MODULE_6__["default"]);
var Subject = /*#__PURE__*/function () {
  function Subject(value) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, Subject);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(this, "_listeners", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(this, "_value", void 0);
    this._listeners = [];
    this._value = value;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Subject, [{
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      var changed = this._value !== value;
      if (changed && value) {
        var comparable = value;
        if (typeof comparable.equals === 'function') {
          changed = !comparable.equals(this._value);
        }
      }
      if (!changed) {
        return;
      }
      this._value = value;
      this._listeners.forEach(function (listener) {
        listener(value);
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      this._listeners.push(listener);
      listener(this._value);
      return new DisposableListener(this._listeners, listener);
    }
  }]);
}();


/***/ }),

/***/ "./src/sdk/Environment.ts":
/*!********************************!*\
  !*** ./src/sdk/Environment.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Environment)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Environment = /*#__PURE__*/function () {
  function Environment() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Environment);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Environment, null, [{
    key: "getEnvironmentFromUrl",
    value: function getEnvironmentFromUrl(url) {
      try {
        var baseURL = new URL(url);
        return baseURL.origin;
      } catch (e) {
        return '';
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/sdk/SDK.ts":
/*!************************!*\
  !*** ./src/sdk/SDK.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SDK)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _lang_Strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lang/Strings */ "./src/lang/Strings.ts");
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rx/ReadOnlySubject */ "./src/rx/ReadOnlySubject.ts");
/* harmony import */ var _edgeAuth_EdgeAuthParser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edgeAuth/EdgeAuthParser */ "./src/edgeAuth/EdgeAuthParser.ts");
/* harmony import */ var _logger_Logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logger/Logger */ "./src/logger/Logger.ts");
/* harmony import */ var _logger_ConsoleAppender__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logger/ConsoleAppender */ "./src/logger/ConsoleAppender.ts");
/* harmony import */ var _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../telemetry/TelemetryApender */ "./src/telemetry/TelemetryApender.ts");
/* harmony import */ var _dom_ConfigurationParameterReader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dom/ConfigurationParameterReader */ "./src/dom/ConfigurationParameterReader.ts");
/* harmony import */ var _metrics_MetricsConfiguration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../metrics/MetricsConfiguration */ "./src/metrics/MetricsConfiguration.ts");
/* harmony import */ var _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../metrics/TelemetricLevelMapping */ "./src/metrics/TelemetricLevelMapping.ts");
/* harmony import */ var _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../logger/LoggingLevelMapping */ "./src/logger/LoggingLevelMapping.ts");
/* harmony import */ var _environment_BuildFeatures__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environment/BuildFeatures */ "./src/environment/BuildFeatures.ts");
/* harmony import */ var _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../dom/BrowserDetector */ "./src/dom/BrowserDetector.ts");
/* harmony import */ var _dom_ApplicationActivityMonitor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../dom/ApplicationActivityMonitor */ "./src/dom/ApplicationActivityMonitor.ts");
/* harmony import */ var _rtc_PeerConnectionService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../rtc/PeerConnectionService */ "./src/rtc/PeerConnectionService.ts");
/* harmony import */ var _TelemetryUrl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TelemetryUrl */ "./src/sdk/TelemetryUrl.ts");
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Environment */ "./src/sdk/Environment.ts");
/* harmony import */ var _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./discovery/DiscoveryUri */ "./src/sdk/discovery/DiscoveryUri.ts");
/* harmony import */ var _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../metrics/MetricsFactory */ "./src/metrics/MetricsFactory.ts");
/* harmony import */ var _metrics_TelemetryDefault__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../metrics/TelemetryDefault */ "./src/metrics/TelemetryDefault.ts");



var _SDK;
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





















var pageLoadTime = window['__phenixPageLoadTime'] || window['__pageLoadTime'] || Date.now();
var SDK = /*#__PURE__*/function () {
  function SDK() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, SDK);
    throw new Error('SDK is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(SDK, null, [{
    key: "pageLoadTime",
    get: function get() {
      return pageLoadTime;
    }
  }, {
    key: "sendLocalCandidates",
    get: function get() {
      return this._sendLocalCandidates;
    }
  }, {
    key: "tenancy",
    get: function get() {
      return this._tenancy;
    }
  }, {
    key: "clientSessionId",
    get: function get() {
      return SDK._clientSessionId;
    }
  }, {
    key: "loadedTimestamp",
    get: function get() {
      return SDK._loadedTimestamp;
    }
  }, {
    key: "initialized",
    get: function get() {
      return SDK._readOnlyInitialized;
    }
  }, {
    key: "discoveryUri",
    get: function get() {
      return SDK._readOnlyDiscoveryUri;
    }
  }, {
    key: "peerConnectionFactory",
    get: function get() {
      return SDK._readOnlyPeerConnectionFactory;
    }
  }, {
    key: "automaticRetryOnFailure",
    get: function get() {
      return SDK._automaticallyRetryOnFailure;
    }
  }, {
    key: "automaticallyReconnectPeerConnection",
    get: function get() {
      return SDK._automaticallyReconnectPeerConnection;
    }
  }, {
    key: "automaticallyPlayMediaStream",
    get: function get() {
      return SDK._automaticallyPlayMediaStream;
    }
  }, {
    key: "automaticallyMuteVideoOnPlayFailure",
    get: function get() {
      return SDK._automaticallyMuteVideoOnPlayFailure;
    }
  }, {
    key: "forceGarbageCollectionOnRestart",
    get: function get() {
      return this._forceGarbageCollectionOnRestart;
    }
  }, {
    key: "skipGarbageCollectionOnMobileDevices",
    get: function get() {
      return this._skipGarbageCollectionOnMobileDevices;
    }
  }, {
    key: "webPlayerLoader",
    get: function get() {
      return this._webPlayerLoader;
    }
  }, {
    key: "shakaPlayerLoader",
    get: function get() {
      return this._shakaPlayerLoader;
    }
  }, {
    key: "hlsJsLoader",
    get: function get() {
      return this._hlsJsLoader;
    }
  }, {
    key: "metricsService",
    get: function get() {
      return SDK._metricsService;
    }
  }, {
    key: "applicationActivityMonitor",
    get: function get() {
      return this._applicationActivityMonitor;
    }
  }, {
    key: "telemetryUrl",
    get: function get() {
      return this._telemetryUrl;
    }
  }, {
    key: "maximalNumberOfPeerConnectionReconnectAttempts",
    get: function get() {
      return this._maximalNumberOfPeerConnectionReconnectAttempts;
    },
    set: function set(retriesAmount) {
      this._maximalNumberOfPeerConnectionReconnectAttempts = retriesAmount;
    }
  }, {
    key: "loggingLevel",
    get: function get() {
      return _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_14__["default"].convertLoggingLevelToLoggingLevelType(this._logger.threshold.value);
    }
  }, {
    key: "telemetryLevel",
    get: function get() {
      return _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_13__["default"].convertTelemetryLevelToTelemetryLevelType(SDK._telemetryLevel.value);
    }
  }, {
    key: "browserDetector",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_16__["default"];
    }
  }, {
    key: "applyTelemetryConfiguration",
    value: function applyTelemetryConfiguration() {
      var _this = this;
      var telemetryConfiguration = _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__["default"].telemetryConfiguration;
      telemetryConfiguration.sessionId = SDK.clientSessionId;
      telemetryConfiguration.pageLoadTime = SDK.pageLoadTime;
      var ignoredEnvironment = SDK._environment.subscribe(function (environment) {
        telemetryConfiguration.environment = environment;
      });
      var ignoredDiscoveryUri = SDK.telemetryUrl.subscribe(function (value) {
        var telemetryAppender = _this._logger.appenders.value.find(function (appender) {
          return appender instanceof _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_10__["default"];
        });
        if (telemetryAppender) {
          telemetryConfiguration.url = value;
          _this._logger.appenders.remove(telemetryAppender);
          _this._logger.appenders.add(new _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_10__["default"](telemetryConfiguration));
          _this._logger.info('Telemetry URL was set to [%s]', telemetryConfiguration.url);
        }
      });
      var ignoredTenancy = SDK._tenancy.subscribe(function (tenancy) {
        var telemetryAppender = _this._logger.appenders.value.find(function (appender) {
          return appender instanceof _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_10__["default"];
        });
        if (telemetryAppender && tenancy) {
          telemetryConfiguration.tenancy = tenancy;
          _this._logger.appenders.remove(telemetryAppender);
          _this._logger.appenders.add(new _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_10__["default"](telemetryConfiguration));
          _this._logger.info('Telemetry tenancy was set to [%s]', telemetryConfiguration.tenancy);
        }
      });
    }
  }, {
    key: "applyMetricsConfiguration",
    value: function applyMetricsConfiguration() {
      SDK._metricsService = _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_22__["default"].getMetricsService(_discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_21__["default"].uri.value);
      SDK._metricsConfiguration = SDK._metricsService.metricsConfiguration;
      SDK._metricsConfiguration.sessionId = SDK.clientSessionId;
      var ignoredEnvironment = SDK._environment.subscribe(function (environment) {
        SDK._metricsConfiguration.environment = environment;
      });
      var ignoredDiscoveryUri = SDK.telemetryUrl.subscribe(function (value) {
        SDK._metricsConfiguration.url = value;
      });
      var ignoredTenancy = SDK._tenancy.subscribe(function (tenancy) {
        SDK._metricsConfiguration.tenancy = tenancy;
      });
      var value = this._configurationParameterReader.getStringValue('phenix-metrics-level');
      if (value) {
        _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_22__["default"].setTelemetryLevel(_metrics_MetricsConfiguration__WEBPACK_IMPORTED_MODULE_12__.TelemetryLevel[value]);
      }
      var ignoredTelemetryLevel = SDK._telemetryLevel.subscribe(function (telemetryLevel) {
        _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_22__["default"].setTelemetryLevel(telemetryLevel);
      });
    }
  }, {
    key: "applyAutomaticallyRetryOnFailureFromParameterConfiguration",
    value: function applyAutomaticallyRetryOnFailureFromParameterConfiguration() {
      this._automaticallyRetryOnFailure = this._configurationParameterReader.getBooleanValue('phenix-automatically-retry-on-failure');
      this._logger.info('Automatically retry on failure is set to: [%s]', this._automaticallyRetryOnFailure);
      return;
    }
  }, {
    key: "applyAutomaticallyReconnectPeerConnectionFromParameterConfiguration",
    value: function applyAutomaticallyReconnectPeerConnectionFromParameterConfiguration() {
      this._automaticallyReconnectPeerConnection = this._configurationParameterReader.getBooleanValue('phenix-automatically-reconnect-peer-connection');
      this._logger.info('Automatically reconnect peer connection is set to: [%s]', this._automaticallyReconnectPeerConnection);
      return;
    }
  }, {
    key: "applyForceGarbageCollectionOnRestartFromParameterConfiguration",
    value: function applyForceGarbageCollectionOnRestartFromParameterConfiguration() {
      this._forceGarbageCollectionOnRestart = this._configurationParameterReader.getBooleanValue('phenix-force-garbage-collection-on-restart');
      this._logger.info('Force garbage collection on restart is set to: [%s]', this._forceGarbageCollectionOnRestart);
      return;
    }
  }, {
    key: "applySkipGarbageCollectionOnMobileDevicesFromParameterConfiguration",
    value: function applySkipGarbageCollectionOnMobileDevicesFromParameterConfiguration() {
      this._skipGarbageCollectionOnMobileDevices = this._configurationParameterReader.getBooleanValue('phenix-skip-garbage-collection-on-mobile-devices');
      this._logger.info('Skip garbage collection on mobile devices on restart is set to: [%s]', this._skipGarbageCollectionOnMobileDevices);
      return;
    }
  }, {
    key: "applyDiscoveryUriDefaultFromParameterConfiguration",
    value: function applyDiscoveryUriDefaultFromParameterConfiguration() {
      SDK.discoveryUri.subscribe(function (value) {
        SDK.telemetryUrl.value = SDK.getTelemetryUrl(value);
        SDK._environment.value = _Environment__WEBPACK_IMPORTED_MODULE_20__["default"].getEnvironmentFromUrl(value);
      });
      var channelToken = this._configurationParameterReader.getStringValue('phenix-channel-token');
      if (channelToken) {
        var edgeToken = _edgeAuth_EdgeAuthParser__WEBPACK_IMPORTED_MODULE_7__["default"].parseToken(channelToken);
        SDK._tenancy.value = edgeToken.tenancy;
        _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_21__["default"].uri.value = (edgeToken.uri || SDK.discoveryUri.value).toString();
        this._logger.info('Discovery URI set from configuration parameter to [%s]', SDK.discoveryUri.value);
        return;
      }
      var uriValue = this._configurationParameterReader.getStringValue('phenix-uri');
      if (uriValue) {
        _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_21__["default"].uri.value = uriValue;
        this._logger.info('Discovery URI set from "phenix-uri" configuration parameter tag to [%s]', SDK.discoveryUri.value);
        return;
      }
      var baseURIValue = this._configurationParameterReader.getStringValue('phenix-base-uri');
      if (baseURIValue) {
        var uri = new URL(baseURIValue);
        uri.pathname = '/pcast/endPoints';
        _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_21__["default"].uri.value = uri.toString();
        this._logger.info('Discovery URI set from "phenix-base-uri" configuration parameter tag to [%s]', SDK.discoveryUri.value);
        return;
      }
    }
  }, {
    key: "init",
    value: function init(options) {
      if (!this._initialized.value) {
        this._applicationActivityMonitor = new _dom_ApplicationActivityMonitor__WEBPACK_IMPORTED_MODULE_17__["default"]();
      }
      if (options) {
        if (options.discoveryUri) {
          _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_21__["default"].uri.value = options.discoveryUri;
        }
        if (options.peerConnectionFactory) {
          _rtc_PeerConnectionService__WEBPACK_IMPORTED_MODULE_18__["default"].peerConnectionFactory.value = options.peerConnectionFactory;
        }
        if (options.telemetryLevel && _metrics_MetricsConfiguration__WEBPACK_IMPORTED_MODULE_12__.TelemetryLevel[options.telemetryLevel]) {
          SDK._telemetryLevel.value = _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_13__["default"].convertTelemetryLevelTypeToTelemetryLevel(options.telemetryLevel);
        }
        if (options.loggingLevel && _logger_Logger__WEBPACK_IMPORTED_MODULE_8__.LoggingLevel[options.loggingLevel]) {
          this._logger.threshold.setThreshold(_logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_14__["default"].convertLoggingLevelTypeToLoggingLevel(options.loggingLevel));
        }
        if (options.consoleLoggingLevel && _logger_Logger__WEBPACK_IMPORTED_MODULE_8__.LoggingLevel[options.consoleLoggingLevel]) {
          var consoleAppender = this._logger.appenders.value.find(function (appender) {
            return appender instanceof _logger_ConsoleAppender__WEBPACK_IMPORTED_MODULE_9__["default"];
          });
          if (consoleAppender) {
            this._logger.appenders.remove(consoleAppender);
          }
          if (options.consoleLoggingLevel !== 'Off') {
            this._logger.appenders.add(new _logger_ConsoleAppender__WEBPACK_IMPORTED_MODULE_9__["default"](_logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_14__["default"].convertLoggingLevelTypeToLoggingLevel(options.consoleLoggingLevel)));
          }
        }
        if (typeof options.automaticallyPlayMediaStream === 'boolean') {
          this._automaticallyPlayMediaStream = options.automaticallyPlayMediaStream;
        }
        if (typeof options.automaticallyMuteVideoOnPlayFailure === 'boolean') {
          this._automaticallyMuteVideoOnPlayFailure = options.automaticallyMuteVideoOnPlayFailure;
        }
        if (options.webPlayerLoader) {
          this._webPlayerLoader = options.webPlayerLoader;
        }
        if (options.shakaPlayerLoader) {
          this._shakaPlayerLoader = options.shakaPlayerLoader;
        }
        if (options.hlsJsLoader) {
          this._hlsJsLoader = options.hlsJsLoader;
        }
      }
      SDK._initialized.value = true;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      SDK._initialized.value = false;
      this._applicationActivityMonitor.dispose();
      this._applicationActivityMonitor = null;
    }
  }, {
    key: "getTelemetryUrl",
    value: function getTelemetryUrl(url) {
      return _TelemetryUrl__WEBPACK_IMPORTED_MODULE_19__["default"].getTelemetryUrl(url);
    }
  }]);
}();
_SDK = SDK;
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_automaticallyRetryOnFailure", true);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_automaticallyReconnectPeerConnection", true);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_automaticallyPlayMediaStream", true);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_automaticallyMuteVideoOnPlayFailure", true);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_forceGarbageCollectionOnRestart", true);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_skipGarbageCollectionOnMobileDevices", true);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_webPlayerLoader", null);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_shakaPlayerLoader", null);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_hlsJsLoader", null);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_configurationParameterReader", new _dom_ConfigurationParameterReader__WEBPACK_IMPORTED_MODULE_11__["default"]());
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_applicationActivityMonitor", void 0);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_environment", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__["default"](''));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_telemetryUrl", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__["default"]('https://telemetry.phenixrts.com/telemetry'));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_maximalNumberOfPeerConnectionReconnectAttempts", 8);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_telemetryLevel", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__["default"](_metrics_TelemetryDefault__WEBPACK_IMPORTED_MODULE_23__["default"].defaultTelemetryLevel));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_metricsService", void 0);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_metricsConfiguration", void 0);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_sendLocalCandidates", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__["default"](_environment_BuildFeatures__WEBPACK_IMPORTED_MODULE_15__["default"].sendLocalCandidates));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_tenancy", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__["default"](''));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_clientSessionId", _lang_Strings__WEBPACK_IMPORTED_MODULE_4__["default"].random(32));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_loadedTimestamp", new Date());
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger('SDK'));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_initialized", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__["default"](false));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_readOnlyInitialized", new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](_SDK._initialized));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_readOnlyDiscoveryUri", new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](_discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_21__["default"].uri));
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_readOnlyPeerConnectionFactory", new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](_rtc_PeerConnectionService__WEBPACK_IMPORTED_MODULE_18__["default"].peerConnectionFactory));

window.addEventListener('unload', function () {
  SDK.dispose();
});
SDK.applyDiscoveryUriDefaultFromParameterConfiguration();
SDK.applyMetricsConfiguration();
SDK.applyTelemetryConfiguration();
SDK.applyAutomaticallyRetryOnFailureFromParameterConfiguration();
SDK.applyAutomaticallyReconnectPeerConnectionFromParameterConfiguration();
SDK.applyForceGarbageCollectionOnRestartFromParameterConfiguration();
SDK.applySkipGarbageCollectionOnMobileDevicesFromParameterConfiguration();
SDK.init();

/***/ }),

/***/ "./src/sdk/TelemetryUrl.ts":
/*!*********************************!*\
  !*** ./src/sdk/TelemetryUrl.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TelemetryUrl)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var TelemetryUrl = /*#__PURE__*/function () {
  function TelemetryUrl() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, TelemetryUrl);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(TelemetryUrl, null, [{
    key: "getTelemetryUrl",
    value: function getTelemetryUrl(url) {
      try {
        var baseURL = new URL(url);
        var segments = baseURL.hostname.split('.');
        switch (baseURL.protocol) {
          case 'ws:':
            baseURL.protocol = 'http:';
            break;
          case 'wss:':
            baseURL.protocol = 'https:';
            break;
          default:
            break;
        }
        if (segments.length === 2 || segments.length === 3 && segments[segments.length - 2].length <= 2 && segments[segments.length - 1].length <= 3) {
          segments.unshift('telemetry');
        } else if (segments[0].startsWith('stg-') || segments[0].endsWith('-stg') || segments[0].includes('-stg-') || segments[0] === 'stg') {
          segments[0] = 'telemetry-stg';
        } else if (segments[0].startsWith('local') || segments[0].endsWith('-local')) {
          // Leave URL unchanged
        } else {
          segments[0] = 'telemetry';
        }
        baseURL.hostname = segments.join('.');
        return "".concat(baseURL.origin, "/telemetry");
      } catch (e) {
        return url;
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/sdk/api/SetTemporaryMaximalBitrate.ts":
/*!***************************************************!*\
  !*** ./src/sdk/api/SetTemporaryMaximalBitrate.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BitrateMode: () => (/* binding */ BitrateMode),
/* harmony export */   BitrateState: () => (/* binding */ BitrateState)
/* harmony export */ });
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var BitrateState = /*#__PURE__*/function (BitrateState) {
  BitrateState[BitrateState["Keep"] = 0] = "Keep";
  BitrateState[BitrateState["Reset"] = 1] = "Reset";
  return BitrateState;
}({});
var BitrateMode = /*#__PURE__*/function (BitrateMode) {
  BitrateMode[BitrateMode["Normal"] = 0] = "Normal";
  BitrateMode[BitrateMode["Force"] = 1] = "Force";
  BitrateMode[BitrateMode["Reset"] = 2] = "Reset";
  return BitrateMode;
}({});

/***/ }),

/***/ "./src/sdk/channels/Channel.ts":
/*!*************************************!*\
  !*** ./src/sdk/channels/Channel.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Channel)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../rx/ReadOnlySubject */ "./src/rx/ReadOnlySubject.ts");
/* harmony import */ var _video_Dimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../video/Dimension */ "./src/video/Dimension.ts");
/* harmony import */ var _time_ExponentialBackoff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../time/ExponentialBackoff */ "./src/time/ExponentialBackoff.ts");
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _dom_GarbageCollectorManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dom/GarbageCollectorManager */ "./src/dom/GarbageCollectorManager.ts");
/* harmony import */ var _ChannelState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ChannelState */ "./src/sdk/channels/ChannelState.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lang/Disposable */ "./src/lang/Disposable.ts");
/* harmony import */ var _video_VideoTelemetry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../video/VideoTelemetry */ "./src/video/VideoTelemetry.ts");
/* harmony import */ var _video_SessionTelemetry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../video/SessionTelemetry */ "./src/video/SessionTelemetry.ts");
/* harmony import */ var _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../api/SetTemporaryMaximalBitrate */ "./src/sdk/api/SetTemporaryMaximalBitrate.ts");
/* harmony import */ var _edgeAuth_EdgeAuthParser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../edgeAuth/EdgeAuthParser */ "./src/edgeAuth/EdgeAuthParser.ts");
/* harmony import */ var _context_TokenContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../context/TokenContext */ "./src/sdk/context/TokenContext.ts");
/* harmony import */ var _context_ChannelContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../context/ChannelContext */ "./src/sdk/context/ChannelContext.ts");
/* harmony import */ var _transformation_EncodedStreamSink__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../transformation/EncodedStreamSink */ "./src/sdk/transformation/EncodedStreamSink.ts");
/* harmony import */ var _transformation_StreamTrackTransform__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../transformation/StreamTrackTransform */ "./src/sdk/transformation/StreamTrackTransform.ts");
/* harmony import */ var _context_StreamTransformContext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../context/StreamTransformContext */ "./src/sdk/context/StreamTransformContext.ts");
/* harmony import */ var _context_PeerConnectionContext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../context/PeerConnectionContext */ "./src/sdk/context/PeerConnectionContext.ts");
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../context/StateContext */ "./src/sdk/context/StateContext.ts");
/* harmony import */ var _streaming_StreamFactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../streaming/StreamFactory */ "./src/sdk/streaming/StreamFactory.ts");
/* harmony import */ var _discovery_Discovery__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../discovery/Discovery */ "./src/sdk/discovery/Discovery.ts");
/* harmony import */ var _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../discovery/DiscoveryUri */ "./src/sdk/discovery/DiscoveryUri.ts");
/* harmony import */ var _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../metrics/MetricsFactory */ "./src/metrics/MetricsFactory.ts");
/* harmony import */ var _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../environment/FeatureEnablement */ "./src/environment/FeatureEnablement.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];





/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

























var defaultStreamTerminationReason = 'client:termination';
var failureCountCleanUpIntervalInMilliseconds = 3000;
var standbyPollingIntervalInMilliseconds = 15000;
var Channel = /*#__PURE__*/function () {
  function Channel(videoElement, token, options) {
    var _this = this;
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, Channel);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger('Channel'));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_tokenContext", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_channelContext", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_peerConnectionContext", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_streamTransformContext", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_stateContext", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_exponentialBackoff", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_channelStartTime", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyVideoElement", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyToken", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyPeerConnection", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyState", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyAutoMuted", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyAutoPaused", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyTokenExpiring", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyAuthorized", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyOnline", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyLoading", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyPlaying", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyStandby", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyStopped", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyTargetLag", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyLag", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyBitrateLimit", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyResolution", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyFailureCount", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyEndPoint", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyStream", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyRtcStatistics", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyMediaStream", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_metricsService", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_sessionTelemetry", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_videoMetaDataChangedHandler", void 0);
    var edgeToken = _edgeAuth_EdgeAuthParser__WEBPACK_IMPORTED_MODULE_17__["default"].parseToken(token);
    var channelContextOptions = {
      targetLag: options === null || options === void 0 ? void 0 : options.targetLag
    };
    var streamTransformContextOptions = {
      hasInsertableStreams: edgeToken.capabilities.includes('insertable-streams'),
      hasEncodedInsertableStreams: edgeToken.capabilities.includes('encoded-insertable-streams'),
      videoStreamTransformCallback: options === null || options === void 0 ? void 0 : options.videoStreamTransformCallback,
      audioStreamTransformCallback: options === null || options === void 0 ? void 0 : options.audioStreamTransformCallback,
      encodedVideoStreamSink: options === null || options === void 0 ? void 0 : options.encodedVideoStreamSink,
      encodedAudioStreamSink: options === null || options === void 0 ? void 0 : options.encodedAudioStreamSink
    };
    this._tokenContext = new _context_TokenContext__WEBPACK_IMPORTED_MODULE_18__["default"](token);
    this._channelContext = new _context_ChannelContext__WEBPACK_IMPORTED_MODULE_19__["default"](channelContextOptions);
    this._peerConnectionContext = new _context_PeerConnectionContext__WEBPACK_IMPORTED_MODULE_23__["default"]();
    this._streamTransformContext = new _context_StreamTransformContext__WEBPACK_IMPORTED_MODULE_22__["default"](streamTransformContextOptions);
    this._stateContext = new _context_StateContext__WEBPACK_IMPORTED_MODULE_24__["default"]();
    this._exponentialBackoff = new _time_ExponentialBackoff__WEBPACK_IMPORTED_MODULE_8__["default"]();
    this._channelStartTime = Date.now();
    this._readOnlyVideoElement = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.videoElement);
    this._readOnlyToken = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._tokenContext.token);
    this._readOnlyPeerConnection = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._peerConnectionContext.peerConnection);
    this._readOnlyState = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.state);
    this._readOnlyAutoMuted = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.autoMuted);
    this._readOnlyAutoPaused = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.autoPaused);
    this._readOnlyTokenExpiring = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._tokenContext.tokenExpiring);
    this._readOnlyAuthorized = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.authorized);
    this._readOnlyOnline = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.online);
    this._readOnlyLoading = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.loading);
    this._readOnlyPlaying = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.playing);
    this._readOnlyStandby = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.standby);
    this._readOnlyStopped = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.stopped);
    this._readOnlyTargetLag = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.targetLag);
    this._readOnlyLag = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.lag);
    this._readOnlyBitrateLimit = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.bitrateLimit);
    this._readOnlyResolution = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.resolution);
    this._readOnlyFailureCount = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.failureCount);
    this._readOnlyEndPoint = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.endPoint);
    this._readOnlyStream = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.stream);
    this._readOnlyRtcStatistics = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._channelContext.rtcStatistics);
    this._readOnlyMediaStream = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__["default"](this._peerConnectionContext.mediaStream);
    var discoveryUri = (edgeToken.uri || _SDK__WEBPACK_IMPORTED_MODULE_9__["default"].discoveryUri.value).toString();
    _SDK__WEBPACK_IMPORTED_MODULE_9__["default"].tenancy.value = edgeToken.tenancy || _SDK__WEBPACK_IMPORTED_MODULE_9__["default"].tenancy.value;
    _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_27__["default"].uri.value = discoveryUri;
    this._metricsService = _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_28__["default"].getMetricsService(discoveryUri);
    this._sessionTelemetry = new _video_SessionTelemetry__WEBPACK_IMPORTED_MODULE_15__["default"](_SDK__WEBPACK_IMPORTED_MODULE_9__["default"].pageLoadTime, this._metricsService);
    this._channelContext.channelDisposables.add(this._sessionTelemetry);
    this._videoMetaDataChangedHandler = this.handleVideoMetaDataChanged.bind(this);
    this.videoElement = videoElement;
    this._channelContext.channelDisposables.add(this._channelContext.videoElement.subscribe(function (videoElement) {
      _this._channelContext.rendererDisposables.dispose();
      if (!videoElement) {
        return;
      }
      _this._channelContext.rendererDisposables.add(_this._channelContext.stream.subscribe(function (stream) {
        if (_this._channelContext.videoTelemetry) {
          _this._channelContext.videoTelemetry.dispose();
        }
        if (!stream) {
          return;
        }
        if (!_this.videoElement) {
          return;
        }
        if (_this.videoElement.dataset) {
          _this.videoElement.dataset.sessionId = _SDK__WEBPACK_IMPORTED_MODULE_9__["default"].clientSessionId;
          _this.videoElement.dataset.streamId = _this.streamId;
        }
        _this._channelContext.videoTelemetry = new _video_VideoTelemetry__WEBPACK_IMPORTED_MODULE_14__["default"](_this.streamId, _SDK__WEBPACK_IMPORTED_MODULE_9__["default"].pageLoadTime, _this._channelStartTime, _this._metricsService);
        _this._channelContext.videoTelemetry.setupListenerForTimeToFirstTime(_this.videoElement);
        _this._channelContext.videoTelemetry.setupListenerForRebuffering(_this.videoElement);
        if (_this._channelContext.state.value === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Stopped) {
          var ignored = _this.restartAfterStop();
        }
      }));
      _this._channelContext.channelDisposables.add(_this._channelContext.rendererDisposables);
    }));
    this._channelContext.channelDisposables.add(this._channelContext.state.subscribe(function (state) {
      if (_this._channelContext.clearFailureCountTimeout) {
        clearTimeout(_this._channelContext.clearFailureCountTimeout);
      }
      if (!_this._channelContext.failureCount.value) {
        return;
      }
      if (state !== _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Playing) {
        return;
      }
      _this._channelContext.clearFailureCountTimeout = window.setTimeout(function () {
        _this._channelContext.failureCount.value = 0;
      }, failureCountCleanUpIntervalInMilliseconds);
    }));
    this._channelContext.channelDisposables.add(this._channelContext.resolution.subscribe(function (resolution) {
      if (_this._channelContext.videoTelemetry) {
        _this._channelContext.videoTelemetry.onVideoResolutionChanges(resolution.toString());
      }
    }));
    this._channelContext.channelDisposables.add(this._channelContext.bitrateLimit.subscribe(function (bitrateLimit) {
      if (bitrateLimit && _this._channelContext.endPoint.value && _this._channelContext.stream.value) {
        var elapsedInMilliseconds = Date.now() - _this._channelContext.channelInitialization.getTime();
        var ignored = _this._channelContext.endPoint.value.limitBitrate(_this._channelContext.stream.value, elapsedInMilliseconds, bitrateLimit, _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_16__.BitrateState.Keep, _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_16__.BitrateMode.Normal).catch(function (e) {
          _this._logger.error('Error while setting limit bitrate', e);
        });
      }
    }));
    var destroyStreamOnUnmount = function destroyStreamOnUnmount() {
      if (_this._channelContext.stream.value && _this._channelContext.endPoint.value) {
        var ignored = _this._channelContext.endPoint.value.destroyStreamOnUnmount(_this._channelContext.stream.value, 'client:termination-on-window-unload');
      }
    };
    window.addEventListener('beforeunload', destroyStreamOnUnmount);
    this._channelContext.channelDisposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_13__["default"](function () {
      window.removeEventListener('beforeunload', destroyStreamOnUnmount);
    }));
    this.start();
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(Channel, [{
    key: "videoElement",
    get: function get() {
      return this._channelContext.videoElement.value;
    },
    set: function set(videoElement) {
      if (this._channelContext.videoElement.value) {
        this._channelContext.videoElement.value.removeEventListener('loadeddata', this._videoMetaDataChangedHandler);
        this._channelContext.videoElement.value.removeEventListener('loadedmetadata', this._videoMetaDataChangedHandler);
        this._channelContext.videoElement.value.removeEventListener('resize', this._videoMetaDataChangedHandler);
        if (this._channelContext.videoElement.value.dataset) {
          this._channelContext.videoElement.value.dataset.sessionId = '';
          this._channelContext.videoElement.value.dataset.streamId = '';
        }
        this._channelContext.rendererDisposables.dispose();
        this._channelContext.videoElement.value.pause();
        this._channelContext.videoElement.value.srcObject = null;
      }
      this._channelContext.autoMuted.value = false;
      this._channelContext.autoPaused.value = false;
      this._channelContext.loading.value = false;
      this._channelContext.playing.value = false;
      this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Stopped;
      this._channelContext.videoElement.value = videoElement;
      if (this._channelContext.videoElement.value) {
        this._channelContext.videoElement.value.addEventListener('loadeddata', this._videoMetaDataChangedHandler);
        this._channelContext.videoElement.value.addEventListener('loadedmetadata', this._videoMetaDataChangedHandler);
        this._channelContext.videoElement.value.addEventListener('resize', this._videoMetaDataChangedHandler);
      }
    }
  }, {
    key: "handleVideoMetaDataChanged",
    value: function handleVideoMetaDataChanged() {
      var videoElement = this._channelContext.videoElement.value;
      if (videoElement) {
        if (this.resolution.value.width !== videoElement.videoWidth || this.resolution.value.height !== videoElement.videoHeight) {
          this._channelContext.resolution.value = new _video_Dimension__WEBPACK_IMPORTED_MODULE_7__["default"](videoElement.videoWidth, videoElement.videoHeight);
        }
      } else {
        this._channelContext.resolution.value = _video_Dimension__WEBPACK_IMPORTED_MODULE_7__["default"].empty;
      }
    }
  }, {
    key: "token",
    get: function get() {
      return this._tokenContext.token.value;
    },
    set: function set(token) {
      this._channelContext.disposables.dispose();
      this._tokenContext.token.value = token;
      this._tokenContext.tokenExpiring.value = false;
      var edgeToken = _edgeAuth_EdgeAuthParser__WEBPACK_IMPORTED_MODULE_17__["default"].parseToken(this._tokenContext.token.value);
      var discoveryUri = (edgeToken.uri || _SDK__WEBPACK_IMPORTED_MODULE_9__["default"].discoveryUri.value).toString();
      _SDK__WEBPACK_IMPORTED_MODULE_9__["default"].tenancy.value = edgeToken.tenancy || _SDK__WEBPACK_IMPORTED_MODULE_9__["default"].tenancy.value;
      _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_27__["default"].uri.value = discoveryUri;
      this._metricsService = _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_28__["default"].getMetricsService(discoveryUri);
      this._streamTransformContext.hasInsertableStreams.value = edgeToken.capabilities.includes('insertable-streams');
      this._streamTransformContext.hasEncodedInsertableStreams.value = edgeToken.capabilities.includes('encoded-insertable-streams');
      this.start();
    }
  }, {
    key: "peerConnection",
    get: function get() {
      return this._readOnlyPeerConnection;
    }
  }, {
    key: "state",
    get: function get() {
      return this._readOnlyState;
    }
  }, {
    key: "autoMuted",
    get: function get() {
      return this._readOnlyAutoMuted;
    }
  }, {
    key: "autoPaused",
    get: function get() {
      return this._readOnlyAutoPaused;
    }
  }, {
    key: "tokenExpiring",
    get: function get() {
      return this._readOnlyTokenExpiring;
    }
  }, {
    key: "authorized",
    get: function get() {
      return this._readOnlyAuthorized;
    }
  }, {
    key: "online",
    get: function get() {
      return this._readOnlyOnline;
    }
  }, {
    key: "loading",
    get: function get() {
      return this._readOnlyLoading;
    }
  }, {
    key: "playing",
    get: function get() {
      return this._readOnlyPlaying;
    }
  }, {
    key: "standby",
    get: function get() {
      return this._readOnlyStandby;
    }
  }, {
    key: "stopped",
    get: function get() {
      return this._readOnlyStopped;
    }
  }, {
    key: "targetLag",
    get: function get() {
      return this._readOnlyTargetLag;
    }
  }, {
    key: "lag",
    get: function get() {
      return this._readOnlyLag;
    }
  }, {
    key: "bitrateLimit",
    get: function get() {
      return this._readOnlyBitrateLimit.value;
    }
  }, {
    key: "resolution",
    get: function get() {
      return this._readOnlyResolution;
    }
  }, {
    key: "failureCount",
    get: function get() {
      return this._readOnlyFailureCount;
    }
  }, {
    key: "endPoint",
    get: function get() {
      return this._readOnlyEndPoint;
    }
  }, {
    key: "stream",
    get: function get() {
      return this._readOnlyStream;
    }
  }, {
    key: "streamId",
    get: function get() {
      return this._channelContext.streamId;
    }
  }, {
    key: "rtcStatistics",
    get: function get() {
      return this._readOnlyRtcStatistics;
    }
  }, {
    key: "mediaStream",
    get: function get() {
      return this._readOnlyMediaStream;
    }
  }, {
    key: "setBitrateLimit",
    value: function setBitrateLimit(bitrateLimit) {
      this._channelContext.bitrateLimit.value = bitrateLimit;
    }
  }, {
    key: "clearBitrateLimit",
    value: function clearBitrateLimit() {
      var _this2 = this;
      if (this._channelContext.bitrateLimit.value && this._channelContext.endPoint.value && this._channelContext.stream.value) {
        var elapsedInMilliseconds = Date.now() - this._channelContext.channelInitialization.getTime();
        var bitrateInBitsPerSecond = 0;
        var ignored = this._channelContext.endPoint.value.limitBitrate(this._channelContext.stream.value, elapsedInMilliseconds, bitrateInBitsPerSecond, _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_16__.BitrateState.Keep, _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_16__.BitrateMode.Reset).then(function (_ref) {
          var status = _ref.status;
          if (status === 'ok') {
            _this2._channelContext.bitrateLimit.value = 0;
          }
        }).catch(function (e) {
          _this2._logger.error('Error while setting limit bitrate', e);
        });
      }
    }
  }, {
    key: "updateTargetLag",
    value: function updateTargetLag(lag) {
      this._channelContext.targetLag.value = lag;
    }
  }, {
    key: "stop",
    value: function () {
      var _stop = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(reason) {
        var _this3 = this;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve) {
                if (!_this3._stateContext.isStarting.value) {
                  _this3.processStop(reason);
                  resolve();
                  return;
                }
                _this3._channelContext.rendererDisposables.add(_this3._stateContext.isStarting.subscribe(function (isStarting) {
                  if (!isStarting) {
                    _this3.processStop(reason);
                    resolve();
                  }
                }));
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function stop(_x) {
        return _stop.apply(this, arguments);
      }
      return stop;
    }()
  }, {
    key: "processStop",
    value: function processStop(reason) {
      if (this._channelContext.videoElement.value) {
        this._channelContext.videoElement.value.pause();
        this._channelContext.videoElement.value.srcObject = null;
      }
      this._channelContext.rendererDisposables.dispose();
      this.cleanUpResources(reason);
      this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Stopped;
    }
  }, {
    key: "resume",
    value: function () {
      var _resume = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!this._peerConnectionContext.mediaStream.value) {
                _context2.next = 3;
                break;
              }
              this._channelContext.autoPaused.value = false;
              return _context2.abrupt("return", this.playMediaStreamInVideoElement(this._peerConnectionContext.mediaStream.value));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function resume() {
        return _resume.apply(this, arguments);
      }
      return resume;
    }()
  }, {
    key: "mute",
    value: function mute() {
      var videoElement = this._channelContext.videoElement.value;
      if (videoElement) {
        videoElement.muted = true;
      }
    }
  }, {
    key: "unmute",
    value: function unmute() {
      var videoElement = this._channelContext.videoElement.value;
      if (videoElement) {
        videoElement.muted = false;
        this._channelContext.autoMuted.value = false;
      }
    }
  }, {
    key: "dispose",
    value: function () {
      var _dispose = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3() {
        var _this4 = this;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.stop('client:channel-dispose').then(function () {
                _this4._channelContext.channelDisposables.dispose();
                _this4._stateContext.isDisposed = true;
              }));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function dispose() {
        return _dispose.apply(this, arguments);
      }
      return dispose;
    }()
  }, {
    key: "getUri",
    value: function getUri(token) {
      var url = _edgeAuth_EdgeAuthParser__WEBPACK_IMPORTED_MODULE_17__["default"].parseToken(token).uri;
      if (url) {
        return url;
      }
      this._logger.info('Fall back to the default discover URI [%s]', _SDK__WEBPACK_IMPORTED_MODULE_9__["default"].discoveryUri.value);
      return new URL(_SDK__WEBPACK_IMPORTED_MODULE_9__["default"].discoveryUri.value);
    }
  }, {
    key: "start",
    value: function () {
      var _start = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4() {
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!this._stateContext.isDisposed) {
                _context4.next = 2;
                break;
              }
              throw new Error('Channel was already disposed');
            case 2:
              if (!this._stateContext.isStarting.value) {
                _context4.next = 5;
                break;
              }
              this._logger.info('Channel is already starting, skipping start');
              return _context4.abrupt("return");
            case 5:
              this._stateContext.isStarting.value = true;
              return _context4.abrupt("return", this.processStart());
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function start() {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }, {
    key: "processStart",
    value: function () {
      var _processStart = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5() {
        var _this5 = this;
        var token, listenOnStreamSetup, _StreamTrackTransform, valid, validationResult, _StreamTrackTransform2, _valid, _validationResult, _EncodedStreamSink$va, _valid2, _validationResult2, _EncodedStreamSink$va2, _valid3, _validationResult3, hasTransformStreamCallback, hasEncodedStreamSink, uri, handleStreamFailureCallback, streamPlayer;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              token = this._tokenContext.token.value;
              listenOnStreamSetup = this._sessionTelemetry.listenOnStreamSetup();
              if (_edgeAuth_EdgeAuthParser__WEBPACK_IMPORTED_MODULE_17__["default"].isEncodedEdgeTokenValid(token)) {
                _context5.next = 8;
                break;
              }
              this._logger.error('Failed to parse token [%s]', token);
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Unauthorized;
              this._channelContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 8:
              if (!this._streamTransformContext.videoStreamTransformCallback) {
                _context5.next = 16;
                break;
              }
              _StreamTrackTransform = _transformation_StreamTrackTransform__WEBPACK_IMPORTED_MODULE_21__["default"].validateMediaStreamTrackTransform('video', this._streamTransformContext.videoStreamTransformCallback), valid = _StreamTrackTransform.valid, validationResult = _StreamTrackTransform.validationResult;
              if (valid) {
                _context5.next = 16;
                break;
              }
              this._logger.error(validationResult);
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ConfigurationError;
              this._channelContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 16:
              if (!this._streamTransformContext.audioStreamTransformCallback) {
                _context5.next = 24;
                break;
              }
              _StreamTrackTransform2 = _transformation_StreamTrackTransform__WEBPACK_IMPORTED_MODULE_21__["default"].validateMediaStreamTrackTransform('audio', this._streamTransformContext.audioStreamTransformCallback), _valid = _StreamTrackTransform2.valid, _validationResult = _StreamTrackTransform2.validationResult;
              if (_valid) {
                _context5.next = 24;
                break;
              }
              this._logger.error(_validationResult);
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ConfigurationError;
              this._channelContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 24:
              if (!this._streamTransformContext.encodedVideoStreamSink) {
                _context5.next = 32;
                break;
              }
              _EncodedStreamSink$va = _transformation_EncodedStreamSink__WEBPACK_IMPORTED_MODULE_20__["default"].validateEncodedStreamSink('video', this._streamTransformContext.encodedVideoStreamSink), _valid2 = _EncodedStreamSink$va.valid, _validationResult2 = _EncodedStreamSink$va.validationResult;
              if (_valid2) {
                _context5.next = 32;
                break;
              }
              this._logger.error(_validationResult2);
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ConfigurationError;
              this._channelContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 32:
              if (!this._streamTransformContext.encodedAudioStreamSink) {
                _context5.next = 40;
                break;
              }
              _EncodedStreamSink$va2 = _transformation_EncodedStreamSink__WEBPACK_IMPORTED_MODULE_20__["default"].validateEncodedStreamSink('audio', this._streamTransformContext.encodedAudioStreamSink), _valid3 = _EncodedStreamSink$va2.valid, _validationResult3 = _EncodedStreamSink$va2.validationResult;
              if (_valid3) {
                _context5.next = 40;
                break;
              }
              this._logger.error(_validationResult3);
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ConfigurationError;
              this._channelContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 40:
              if (!(this._streamTransformContext.hasInsertableStreams.value && this._streamTransformContext.hasEncodedInsertableStreams.value)) {
                _context5.next = 46;
                break;
              }
              this._logger.error('Both insertable-streams and encoded-insertable-streams are enabled, only use one or the other');
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ConfigurationError;
              this._channelContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 46:
              hasTransformStreamCallback = typeof this._streamTransformContext.videoStreamTransformCallback === 'function' || typeof this._streamTransformContext.audioStreamTransformCallback === 'function';
              hasEncodedStreamSink = typeof this._streamTransformContext.encodedVideoStreamSink === 'function' || typeof this._streamTransformContext.encodedAudioStreamSink === 'function';
              if (!(hasTransformStreamCallback && hasEncodedStreamSink)) {
                _context5.next = 54;
                break;
              }
              this._logger.error('Both Media Stream Track transform callback and encodedInsertableStreams sink function found, only use one type or the other');
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ConfigurationError;
              this._channelContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 54:
              if (!this._streamTransformContext.hasInsertableStreams.value) {
                _context5.next = 69;
                break;
              }
              if (_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_29__["default"].isInsertableStreamsSupported) {
                _context5.next = 61;
                break;
              }
              this._logger.error('Browser does not support Media Stream Track API');
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].UnsupportedFeature;
              this._channelContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 61:
              if (hasTransformStreamCallback) {
                _context5.next = 67;
                break;
              }
              this._logger.error('CreateChannelOptions transform callback function is missing; however, insertable-streams is enabled');
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ConfigurationError;
              this._channelContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 67:
              _context5.next = 75;
              break;
            case 69:
              if (!hasTransformStreamCallback) {
                _context5.next = 75;
                break;
              }
              this._logger.error("CreateChannelOptions transform callback function found; however, insertable-streams is not enabled");
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ConfigurationError;
              this._channelContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 75:
              if (!this._streamTransformContext.hasEncodedInsertableStreams.value) {
                _context5.next = 90;
                break;
              }
              if (_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_29__["default"].isEncodedInsertableStreamsSupported || _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_29__["default"].isRTCRtpScriptTransformSupported) {
                _context5.next = 82;
                break;
              }
              this._logger.error('Browser does not support encodedInsertableStreams API');
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].UnsupportedFeature;
              this._channelContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 82:
              if (hasEncodedStreamSink) {
                _context5.next = 88;
                break;
              }
              this._logger.error('CreateChannelOptions transform sink function is missing; however, encoded-insertable-streams is enabled');
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ConfigurationError;
              this._channelContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 88:
              _context5.next = 96;
              break;
            case 90:
              if (!hasEncodedStreamSink) {
                _context5.next = 96;
                break;
              }
              this._logger.error("CreateChannelOptions transform sink function found; however, encoded-insertable-streams is not enabled");
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ConfigurationError;
              this._channelContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 96:
              this.cleanUpResources('client:start');
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Starting;
              this._channelContext.loading.value = true;
              uri = this.getUri(token);
              this._channelContext.disposables.add(this._channelContext.state.subscribe(function (state) {
                if (state === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Error || state === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Recovering) {
                  _discovery_Discovery__WEBPACK_IMPORTED_MODULE_26__["default"].clearCachedClosestEndpoint(uri);
                }
              }));
              handleStreamFailureCallback = function handleStreamFailureCallback() {
                return new Promise(function (resolve) {
                  // Need to set isStarting to false and call handleStreamFailure if stream monitors found an issue
                  _this5._stateContext.isStarting.value = false;
                  return resolve(_this5.handleStreamFailure());
                });
              };
              streamPlayer = _streaming_StreamFactory__WEBPACK_IMPORTED_MODULE_25__["default"].create(token, this._channelContext, this._peerConnectionContext, this._streamTransformContext, handleStreamFailureCallback);
              if (streamPlayer) {
                _context5.next = 106;
                break;
              }
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 106:
              return _context5.abrupt("return", streamPlayer.start(uri, token, listenOnStreamSetup, this.playMediaStreamInVideoElement.bind(this)).then(function () {
                _this5._channelContext.loading.value = false;
              }).catch(function (e) {
                listenOnStreamSetup.fail();
                _this5._channelContext.failureCount.value++;
                _this5._channelContext.online.value = false;
                _this5.cleanUpResources('client:cleanup-after-failed-setup');
                _this5._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ClientStartError;
                _this5._logger.error('Failed to start channel', e);
              }).finally(function () {
                _this5._stateContext.isStarting.value = false;
                if (_this5._channelContext.state.value === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Playing || !_SDK__WEBPACK_IMPORTED_MODULE_9__["default"].automaticRetryOnFailure) {
                  return;
                }
                var timeoutId = setTimeout(function () {
                  var ignored = _this5.handleStreamFailure().catch(function (e) {
                    _this5._logger.error('Failed handling stream failure', e);
                  });
                }, _this5.getRetryInterval());
                _this5._channelContext.disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_13__["default"](function () {
                  clearTimeout(timeoutId);
                }));
              }));
            case 107:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function processStart() {
        return _processStart.apply(this, arguments);
      }
      return processStart;
    }()
  }, {
    key: "restartAfterStop",
    value: function () {
      var _restartAfterStop = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee6() {
        var ignored;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!this._stateContext.isDisposed) {
                _context6.next = 2;
                break;
              }
              throw new Error('Channel was already disposed');
            case 2:
              if (!this._peerConnectionContext.mediaStream.value) {
                _context6.next = 4;
                break;
              }
              return _context6.abrupt("return", this.playMediaStreamInVideoElement(this._peerConnectionContext.mediaStream.value));
            case 4:
              if (this._tokenContext.token.value) {
                ignored = this.start();
              }
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function restartAfterStop() {
        return _restartAfterStop.apply(this, arguments);
      }
      return restartAfterStop;
    }()
  }, {
    key: "play",
    value: function () {
      var _play = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee7() {
        var mediaStream;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              mediaStream = this._peerConnectionContext.mediaStream.value;
              if (mediaStream) {
                _context7.next = 3;
                break;
              }
              return _context7.abrupt("return", this.start());
            case 3:
              return _context7.abrupt("return", this.playMediaStreamInVideoElement(mediaStream));
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function play() {
        return _play.apply(this, arguments);
      }
      return play;
    }()
  }, {
    key: "getRetryInterval",
    value: function getRetryInterval() {
      switch (this._channelContext.state.value) {
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].StandBy:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Offline:
          return standbyPollingIntervalInMilliseconds;
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Error:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Recovering:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Unauthorized:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].GeoRestricted:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].GeoBlocked:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Stopped:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Starting:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Playing:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Paused:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Reconnecting:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].UnsupportedFeature:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ConfigurationError:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].TransientConfigurationError:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ConnectionError:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ClientStartError:
          // First and second attempt fast, after that exponential with backoff interval
          return this._exponentialBackoff.getExponentialBackoffIntervalByFailureCount(this._channelContext.failureCount.value);
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_12__["default"])(this._channelContext.state.value);
      }
    }
  }, {
    key: "handleStreamFailure",
    value: function () {
      var _handleStreamFailure = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee8() {
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.t0 = this._channelContext.state.value;
              _context8.next = _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Error ? 3 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Reconnecting ? 3 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].StandBy ? 3 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Offline ? 3 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Recovering ? 3 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].TransientConfigurationError ? 3 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ConnectionError ? 3 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ClientStartError ? 3 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Unauthorized ? 5 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].GeoRestricted ? 7 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].GeoBlocked ? 9 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Stopped ? 11 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Playing ? 13 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Paused ? 15 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Starting ? 17 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].UnsupportedFeature ? 19 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].ConfigurationError ? 21 : 23;
              break;
            case 3:
              this._logger.info('Retry start with initial state [%s] [%s]', this._channelContext.state.value, _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"][this._channelContext.state.value]);
              return _context8.abrupt("break", 24);
            case 5:
              this._logger.info('Channel is unauthorized, skipping retry of start. Please provide a new token and invoke start()');
              return _context8.abrupt("return");
            case 7:
              this._logger.info('Channel is geo restricted, skipping retry of start. Please provide a new token and invoke start()');
              return _context8.abrupt("return");
            case 9:
              this._logger.info('Channel is geo blocked, skipping retry of start. Please provide a new token and invoke start()');
              return _context8.abrupt("return");
            case 11:
              this._logger.info('Channel is stopped, skipping retry of start.');
              return _context8.abrupt("return");
            case 13:
              this._logger.info('Channel is playing, skipping retry of start');
              return _context8.abrupt("return");
            case 15:
              this._logger.info('Channel is paused, skipping retry of start. Please invoke play()');
              return _context8.abrupt("return");
            case 17:
              this._logger.info('Channel is already starting, skipping retry of start');
              return _context8.abrupt("return");
            case 19:
              this._logger.info('Channel is stopped due to unsupported feature, skipping retry of start.');
              return _context8.abrupt("return");
            case 21:
              this._logger.info('Channel is stopped due to configuration error, skipping retry of start.');
              return _context8.abrupt("return");
            case 23:
              (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_12__["default"])(this._channelContext.state.value);
            case 24:
              return _context8.abrupt("return", this.start());
            case 25:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function handleStreamFailure() {
        return _handleStreamFailure.apply(this, arguments);
      }
      return handleStreamFailure;
    }()
  }, {
    key: "cleanUpResources",
    value: function cleanUpResources() {
      var _this6 = this;
      var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultStreamTerminationReason;
      this._channelContext.disposables.dispose();
      var peerConnection = this._peerConnectionContext.peerConnection.value;
      if (peerConnection) {
        this._peerConnectionContext.peerConnection.value = null;
        peerConnection.close();
        peerConnection.dispose();
        if (_SDK__WEBPACK_IMPORTED_MODULE_9__["default"].forceGarbageCollectionOnRestart && !(_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_29__["default"].isMobile && _SDK__WEBPACK_IMPORTED_MODULE_9__["default"].skipGarbageCollectionOnMobileDevices)) {
          _dom_GarbageCollectorManager__WEBPACK_IMPORTED_MODULE_10__["default"].forceGarbageCollection();
        }
      }
      if (this._peerConnectionContext.mediaStream.value) {
        this._peerConnectionContext.mediaStream.value.getTracks().forEach(function (track) {
          return track.stop();
        });
        this._peerConnectionContext.mediaStream.value = null;
      }
      this._channelContext.autoPaused.value = false;
      this._channelContext.autoMuted.value = false;
      this._channelContext.playing.value = false;
      this._channelContext.stopped.value = true;
      this._channelContext.standby.value = false;
      if (this._channelContext.stream.value && this._channelContext.endPoint.value) {
        var ignored = this._channelContext.endPoint.value.destroyStream(this._channelContext.stream.value, reason).then(function (_ref2) {
          var status = _ref2.status;
          if (status !== 'ok') {
            _this6._logger.warn('[%s] Failed to destroy stream with reason [%s]', _this6.streamId, status);
            return;
          }
          _this6._logger.info('[%s] Destroyed stream with reason [%s]', _this6.streamId, status);
        }).catch(function (e) {
          _this6._logger.error('[%s] Failed to destroy stream', _this6.streamId, e);
        });
      }
      if (this.videoElement && this.videoElement.dataset) {
        this.videoElement.dataset.sessionId = '';
        this.videoElement.dataset.streamId = '';
      }
      this._channelContext.stream.value = null;
      this._channelContext.endPoint.value = null;
      this._peerConnectionContext.peerConnectionReconnectAttempts = 0;
    }
  }, {
    key: "playMediaStreamInVideoElement",
    value: function () {
      var _playMediaStreamInVideoElement = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee9(mediaStream) {
        var _this7 = this;
        var videoElement, playPromise;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              videoElement = this._channelContext.videoElement.value;
              if (videoElement) {
                _context9.next = 8;
                break;
              }
              this._channelContext.autoMuted.value = false;
              this._channelContext.autoPaused.value = false;
              this._channelContext.loading.value = false;
              this._channelContext.playing.value = false;
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Stopped;
              return _context9.abrupt("return");
            case 8:
              if (!this._streamTransformContext.hasEncodedInsertableStreams.value) {
                videoElement.srcObject = mediaStream;
              }
              playPromise = videoElement.play();
              if (!(playPromise === undefined)) {
                _context9.next = 17;
                break;
              }
              this._channelContext.autoMuted.value = false;
              this._channelContext.autoPaused.value = false;
              this._channelContext.loading.value = false;
              this._channelContext.playing.value = true;
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Playing;
              return _context9.abrupt("return");
            case 17:
              return _context9.abrupt("return", playPromise.then(function () {
                _this7._channelContext.autoMuted.value = false;
                _this7._channelContext.autoPaused.value = false;
                _this7._channelContext.loading.value = false;
                _this7._channelContext.playing.value = true;
                _this7._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Playing;
              }).catch(function (e) {
                var hasAudioTrack = !!mediaStream.getTracks().filter(function (track) {
                  return track.kind === 'audio';
                }).length;
                var automaticallyMuteVideoOnPlayFailureOff = !_SDK__WEBPACK_IMPORTED_MODULE_9__["default"].automaticallyMuteVideoOnPlayFailure;
                if (automaticallyMuteVideoOnPlayFailureOff || videoElement.muted || !hasAudioTrack) {
                  videoElement.srcObject = null;
                  _this7._channelContext.autoMuted.value = false;
                  _this7._channelContext.autoPaused.value = true;
                  _this7._channelContext.loading.value = false;
                  _this7._channelContext.playing.value = false;
                  _this7._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Paused;
                  if (automaticallyMuteVideoOnPlayFailureOff) {
                    _this7._logger.info('[%s] Paused video after play failed. Manual user action required.', _this7.streamId, e);
                    return;
                  }
                  if (hasAudioTrack) {
                    _this7._logger.info('[%s] Failed to play video. Manual user action required.', _this7.streamId, e);
                    return;
                  }
                  _this7._logger.info('[%s] Failed to play muted video. Manual user action required.', _this7.streamId, e);
                  return;
                }
                videoElement.muted = true;
                return videoElement.play().then(function () {
                  _this7._logger.info('[%s] Played video after auto muting. Manual user action required to unmute.', _this7.streamId);
                  _this7._channelContext.autoMuted.value = true;
                  _this7._channelContext.autoPaused.value = false;
                  _this7._channelContext.loading.value = false;
                  _this7._channelContext.playing.value = true;
                  _this7._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Playing;
                }).catch(function (e) {
                  videoElement.muted = false;
                  _this7._logger.info('[%s] Failed to play video. Manual user action required.', _this7.streamId, e);
                  videoElement.srcObject = null;
                  _this7._channelContext.autoMuted.value = false;
                  _this7._channelContext.autoPaused.value = true;
                  _this7._channelContext.loading.value = false;
                  _this7._channelContext.playing.value = false;
                  _this7._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_11__["default"].Paused;
                });
              }));
            case 18:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function playMediaStreamInVideoElement(_x2) {
        return _playMediaStreamInVideoElement.apply(this, arguments);
      }
      return playMediaStreamInVideoElement;
    }()
  }]);
}();


/***/ }),

/***/ "./src/sdk/channels/ChannelState.ts":
/*!******************************************!*\
  !*** ./src/sdk/channels/ChannelState.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__) => {

"use strict";
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var ChannelState = /*#__PURE__*/function (ChannelState) {
  ChannelState[ChannelState["Offline"] = 1] = "Offline";
  ChannelState[ChannelState["Starting"] = 2] = "Starting";
  ChannelState[ChannelState["Paused"] = 3] = "Paused";
  ChannelState[ChannelState["Playing"] = 4] = "Playing";
  ChannelState[ChannelState["Recovering"] = 5] = "Recovering";
  ChannelState[ChannelState["Reconnecting"] = 6] = "Reconnecting";
  ChannelState[ChannelState["StandBy"] = 7] = "StandBy";
  ChannelState[ChannelState["Stopped"] = 8] = "Stopped";
  ChannelState[ChannelState["Unauthorized"] = 9] = "Unauthorized";
  ChannelState[ChannelState["GeoRestricted"] = 10] = "GeoRestricted";
  ChannelState[ChannelState["GeoBlocked"] = 11] = "GeoBlocked";
  ChannelState[ChannelState["UnsupportedFeature"] = 12] = "UnsupportedFeature";
  ChannelState[ChannelState["ConfigurationError"] = 13] = "ConfigurationError";
  ChannelState[ChannelState["TransientConfigurationError"] = 14] = "TransientConfigurationError";
  ChannelState[ChannelState["ConnectionError"] = 15] = "ConnectionError";
  ChannelState[ChannelState["ClientStartError"] = 16] = "ClientStartError";
  ChannelState[ChannelState["Error"] = 17] = "Error";
  return ChannelState;
}(ChannelState || {});
/* harmony default export */ __webpack_exports__["default"] = (ChannelState);

/***/ }),

/***/ "./src/sdk/channels/Channels.ts":
/*!**************************************!*\
  !*** ./src/sdk/channels/Channels.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Channels)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Channel */ "./src/sdk/channels/Channel.ts");
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var Channels = /*#__PURE__*/function () {
  function Channels() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Channels);
    throw new Error('Channels is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Channels, null, [{
    key: "createChannel",
    value: function createChannel(options) {
      if (!_SDK__WEBPACK_IMPORTED_MODULE_3__["default"].initialized.value) {
        throw new Error('SDK is not loaded.');
      }
      var channelOptions = {
        targetLag: options.targetLag,
        videoStreamTransformCallback: options.videoStreamTransformCallback,
        audioStreamTransformCallback: options.audioStreamTransformCallback,
        encodedVideoStreamSink: options.encodedVideoStreamSink,
        encodedAudioStreamSink: options.encodedAudioStreamSink
      };
      return new _Channel__WEBPACK_IMPORTED_MODULE_2__["default"](options.videoElement, options.token, channelOptions);
    }
  }]);
}();


/***/ }),

/***/ "./src/sdk/context/ChannelContext.ts":
/*!*******************************************!*\
  !*** ./src/sdk/context/ChannelContext.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChannelContext)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _channels_ChannelState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../channels/ChannelState */ "./src/sdk/channels/ChannelState.ts");
/* harmony import */ var _video_Dimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../video/Dimension */ "./src/video/Dimension.ts");
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lang/DisposableList */ "./src/lang/DisposableList.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */






var defaultTargetLag = 0;
var ChannelContext = /*#__PURE__*/function () {
  function ChannelContext(options) {
    var _options$targetLag;
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, ChannelContext);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "channelInitialization", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "disposables", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "channelDisposables", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "rendererDisposables", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "videoElement", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "state", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "autoMuted", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "autoPaused", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "authorized", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "online", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "loading", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "playing", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "standby", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "stopped", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "targetLag", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "lag", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "bitrateLimit", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "resolution", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "failureCount", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "endPoint", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "stream", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "rtcStatistics", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "videoTelemetry", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "rtcAudioStatistic", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "rtcVideoStatistic", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "clearFailureCountTimeout", void 0);
    this.disposables = new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_8__["default"]();
    this.channelDisposables = new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_8__["default"]();
    this.rendererDisposables = new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_8__["default"]();
    this.channelInitialization = new Date();
    this.videoElement = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](null);
    this.state = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](_channels_ChannelState__WEBPACK_IMPORTED_MODULE_4__["default"].Starting);
    this.autoMuted = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](false);
    this.autoPaused = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](false);
    this.authorized = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](true);
    this.online = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](true);
    this.loading = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](false);
    this.playing = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](false);
    this.standby = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](false);
    this.stopped = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](false);
    this.targetLag = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"]((_options$targetLag = options === null || options === void 0 ? void 0 : options.targetLag) !== null && _options$targetLag !== void 0 ? _options$targetLag : defaultTargetLag);
    this.lag = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](0);
    this.bitrateLimit = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](0);
    this.resolution = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](_video_Dimension__WEBPACK_IMPORTED_MODULE_5__["default"].empty);
    this.failureCount = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](0);
    this.endPoint = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](null);
    this.stream = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](null);
    this.rtcStatistics = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](null);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(ChannelContext, [{
    key: "streamId",
    get: function get() {
      var stream = this.stream.value;
      if (!stream) {
        return '-';
      }
      return stream.streamId;
    }
  }, {
    key: "applyStatus",
    value: function applyStatus(status) {
      switch (status) {
        case 'ok':
          break;
        case 'unauthorized':
        case 'geo-restricted':
        case 'geo-blocked':
          this.authorized.value = false;

        // eslint-disable-next-line no-fallthrough
        case 'no-stream':
        case 'not-found':
          this.failureCount.value = 0;
          this.playing.value = false;
          this.standby.value = true;
          this.stopped.value = false;
          this.stream.value = null;
          return;
        default:
          this.failureCount.value++;
          this.playing.value = false;
          this.standby.value = true;
          this.stopped.value = false;
          this.stream.value = null;
          return;
      }
    }
  }, {
    key: "applySessionAndStreamPropertiesToVideoElement",
    value: function applySessionAndStreamPropertiesToVideoElement() {
      if (this.videoElement.value && this.videoElement.value.dataset) {
        this.videoElement.value.dataset.sessionId = _SDK__WEBPACK_IMPORTED_MODULE_6__["default"].clientSessionId;
        this.videoElement.value.dataset.streamId = this.streamId;
      }
    }
  }, {
    key: "mapSubscribeStatusToChannelStatus",
    value: function mapSubscribeStatusToChannelStatus(status) {
      switch (status) {
        case 'ok':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_4__["default"].Starting;
        case 'no-stream':
        case 'not-found':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_4__["default"].StandBy;
        case 'geo-restricted':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_4__["default"].GeoRestricted;
        case 'geo-blocked':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_4__["default"].GeoBlocked;
        case 'unauthorized':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_4__["default"].Unauthorized;
        case 'capacity':
        case 'rate-limited':
        case 'timeout':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_4__["default"].Recovering;
        case 'forbidden-tag':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_4__["default"].ConfigurationError;
        case 'port-in-range-not-found':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_4__["default"].TransientConfigurationError;
        case 'failed':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_4__["default"].Error;
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_7__["default"])(status);
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/sdk/context/PeerConnectionContext.ts":
/*!**************************************************!*\
  !*** ./src/sdk/context/PeerConnectionContext.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PeerConnectionContext)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rx/Subject */ "./src/rx/Subject.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var PeerConnectionContext = /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default()(function PeerConnectionContext() {
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, PeerConnectionContext);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "mediaStream", void 0);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "peerConnection", void 0);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "peerConnectionReconnectAttempts", void 0);
  this.mediaStream = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](null);
  this.peerConnection = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](null);
  this.peerConnectionReconnectAttempts = 0;
});


/***/ }),

/***/ "./src/sdk/context/StateContext.ts":
/*!*****************************************!*\
  !*** ./src/sdk/context/StateContext.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StateContext)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rx/Subject */ "./src/rx/Subject.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var StateContext = /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default()(function StateContext() {
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, StateContext);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "isStarting", void 0);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "isDisposed", void 0);
  this.isStarting = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](false);
  this.isDisposed = false;
});


/***/ }),

/***/ "./src/sdk/context/StreamTransformContext.ts":
/*!***************************************************!*\
  !*** ./src/sdk/context/StreamTransformContext.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StreamTransformContext)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rx/Subject */ "./src/rx/Subject.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var StreamTransformContext = /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default()(function StreamTransformContext(options) {
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, StreamTransformContext);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "hasInsertableStreams", void 0);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "hasEncodedInsertableStreams", void 0);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "videoStreamTransformCallback", void 0);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "audioStreamTransformCallback", void 0);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "encodedVideoStreamSink", void 0);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "encodedAudioStreamSink", void 0);
  this.hasInsertableStreams = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](options.hasInsertableStreams);
  this.hasEncodedInsertableStreams = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](options.hasEncodedInsertableStreams);
  this.videoStreamTransformCallback = options.videoStreamTransformCallback;
  this.audioStreamTransformCallback = options.audioStreamTransformCallback;
  this.encodedVideoStreamSink = options.encodedVideoStreamSink;
  this.encodedAudioStreamSink = options.encodedAudioStreamSink;
});


/***/ }),

/***/ "./src/sdk/context/TokenContext.ts":
/*!*****************************************!*\
  !*** ./src/sdk/context/TokenContext.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TokenContext)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rx/Subject */ "./src/rx/Subject.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var TokenContext = /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default()(function TokenContext(token) {
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, TokenContext);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "token", void 0);
  _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "tokenExpiring", void 0);
  this.token = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](token);
  this.tokenExpiring = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__["default"](false);
});


/***/ }),

/***/ "./src/sdk/defaults.ts":
/*!*****************************!*\
  !*** ./src/sdk/defaults.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultDiscoveryUri: () => (/* binding */ defaultDiscoveryUri)
/* harmony export */ });
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var defaultDiscoveryUri = 'https://pcast.phenixrts.com/pcast/endPoints';


/***/ }),

/***/ "./src/sdk/discovery/BitrateModeMapping.ts":
/*!*************************************************!*\
  !*** ./src/sdk/discovery/BitrateModeMapping.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BitrateModeMapping)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/SetTemporaryMaximalBitrate */ "./src/sdk/api/SetTemporaryMaximalBitrate.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var BitrateModeMapping = /*#__PURE__*/function () {
  function BitrateModeMapping() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, BitrateModeMapping);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(BitrateModeMapping, null, [{
    key: "convertBitrateModeToBitrateModeType",
    value: function convertBitrateModeToBitrateModeType(bitrateMode) {
      switch (bitrateMode) {
        case _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_2__.BitrateMode.Normal:
          return 'Normal';
        case _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_2__.BitrateMode.Force:
          return 'Force';
        case _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_2__.BitrateMode.Reset:
          return 'Reset';
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_3__["default"])(bitrateMode);
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/sdk/discovery/BitrateStateMapping.ts":
/*!**************************************************!*\
  !*** ./src/sdk/discovery/BitrateStateMapping.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BitrateStateMapping)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/SetTemporaryMaximalBitrate */ "./src/sdk/api/SetTemporaryMaximalBitrate.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");


/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var BitrateStateMapping = /*#__PURE__*/function () {
  function BitrateStateMapping() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, BitrateStateMapping);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(BitrateStateMapping, null, [{
    key: "convertBitrateStateToBitrateStateType",
    value: function convertBitrateStateToBitrateStateType(bitrateState) {
      switch (bitrateState) {
        case _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_2__.BitrateState.Keep:
          return 'Keep';
        case _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_2__.BitrateState.Reset:
          return 'Reset';
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_3__["default"])(bitrateState);
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/sdk/discovery/Discovery.ts":
/*!****************************************!*\
  !*** ./src/sdk/discovery/Discovery.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Discovery)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _DiscoveryService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DiscoveryService */ "./src/sdk/discovery/DiscoveryService.ts");





/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */



var discoveryCacheInterval = 60000;
var Discovery = /*#__PURE__*/function () {
  function Discovery() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, Discovery);
    throw new Error('Discovery is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(Discovery, null, [{
    key: "precacheClosestEndPointDiscovery",
    value: function () {
      var _precacheClosestEndPointDiscovery = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var uri;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              uri = new URL(_SDK__WEBPACK_IMPORTED_MODULE_5__["default"].discoveryUri.value);
              return _context.abrupt("return", Discovery.discoverClosestEndPointWithCaching(uri));
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function precacheClosestEndPointDiscovery() {
        return _precacheClosestEndPointDiscovery.apply(this, arguments);
      }
      return precacheClosestEndPointDiscovery;
    }()
  }, {
    key: "discoverClosestEndPointWithCaching",
    value: function () {
      var _discoverClosestEndPointWithCaching = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(uri) {
        var url, discoveryService, cachedValue, ignored;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              url = uri.toString();
              if (!Discovery._cache[url]) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return", Discovery._cache[url]);
            case 3:
              discoveryService = new _DiscoveryService__WEBPACK_IMPORTED_MODULE_6__["default"](uri);
              cachedValue = Discovery._cache[url] = discoveryService.discoverClosestEndPoint();
              ignored = Discovery._cache[url].then(function () {
                var ignored = setTimeout(function () {
                  if (Discovery._cache[url] === cachedValue) {
                    delete Discovery._cache[url];
                  }
                }, discoveryCacheInterval);
              }).catch(function () {
                delete Discovery._cache[url];
              });
              return _context2.abrupt("return", cachedValue);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function discoverClosestEndPointWithCaching(_x) {
        return _discoverClosestEndPointWithCaching.apply(this, arguments);
      }
      return discoverClosestEndPointWithCaching;
    }()
  }, {
    key: "clearCachedClosestEndpoint",
    value: function clearCachedClosestEndpoint(uri) {
      var url = uri.toString();
      if (Discovery._cache[url]) {
        delete Discovery._cache[url];
      }
    }
  }]);
}();
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(Discovery, "_cache", {});

var ignored = Discovery.precacheClosestEndPointDiscovery();

/***/ }),

/***/ "./src/sdk/discovery/DiscoveryService.ts":
/*!***********************************************!*\
  !*** ./src/sdk/discovery/DiscoveryService.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscoveryService)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _EndPoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EndPoint */ "./src/sdk/discovery/EndPoint.ts");
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../metrics/MetricsType */ "./src/metrics/MetricsType.ts");
/* harmony import */ var _DiscoveryUri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DiscoveryUri */ "./src/sdk/discovery/DiscoveryUri.ts");
/* harmony import */ var _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../metrics/MetricsFactory */ "./src/metrics/MetricsFactory.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];





/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */






var defaultTimeout = 20000;
var DiscoveryService = /*#__PURE__*/function () {
  function DiscoveryService(uri) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, DiscoveryService);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger('Discovery'));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_metricsService", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_uri", void 0);
    if (!uri) {
      throw new Error('Discovery requires uri');
    }
    this._metricsService = _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_10__["default"].getMetricsService(uri.toString());
    this._uri = uri;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(DiscoveryService, [{
    key: "discoverNearbyEndPoints",
    value: function () {
      var _discoverNearbyEndPoints = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(uri, timeout) {
        var url, response, asString, endPoints;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (timeout) {
                _context.next = 2;
                break;
              }
              throw new Error('Discovery requires timeout');
            case 2:
              url = uri.toString();
              _context.next = 5;
              return Promise.race([fetch(url, {
                method: 'GET',
                cache: 'no-cache'
              }), new Promise(function (_, reject) {
                return setTimeout(function () {
                  return reject(new Error("Discovery timed out [".concat(url, "]")));
                }, timeout);
              })]);
            case 5:
              response = _context.sent;
              if (response.ok) {
                _context.next = 8;
                break;
              }
              throw new Error("Discovery failed [".concat(url, "] [").concat(response.status, "]"));
            case 8:
              if (!(response.body === null)) {
                _context.next = 10;
                break;
              }
              throw new Error("Discovery failed with no data [".concat(url, "]"));
            case 10:
              _context.next = 12;
              return response.text();
            case 12:
              asString = _context.sent;
              endPoints = asString.split(',');
              return _context.abrupt("return", endPoints.map(function (endPoint) {
                return new _EndPoint__WEBPACK_IMPORTED_MODULE_6__["default"](endPoint, timeout);
              }));
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function discoverNearbyEndPoints(_x, _x2) {
        return _discoverNearbyEndPoints.apply(this, arguments);
      }
      return discoverNearbyEndPoints;
    }()
  }, {
    key: "discoverClosestEndPoint",
    value: function () {
      var _discoverClosestEndPoint = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        var _this = this;
        var timeout,
          url,
          endPoints,
          failedRequests,
          propagateFailureIfAllRequestsFailed,
          endPoint,
          _args2 = arguments;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              timeout = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : defaultTimeout;
              url = _DiscoveryUri__WEBPACK_IMPORTED_MODULE_9__["default"].buildDiscoveryUrl(this._uri);
              _context2.next = 4;
              return this.discoverNearbyEndPoints(new URL(url), timeout);
            case 4:
              endPoints = _context2.sent;
              failedRequests = 0;
              propagateFailureIfAllRequestsFailed = function propagateFailureIfAllRequestsFailed() {
                return new Promise(function (_, reject) {
                  if (failedRequests >= endPoints.length) {
                    reject("Discovery of [".concat(endPoints.length, "] endpoints from [").concat(url, "] failed, preventing it from completing"));
                  }
                });
              };
              _context2.next = 9;
              return Promise.race(endPoints.map(function (endPoint) {
                return endPoint.ping().catch(function (e) {
                  _this._logger.warn('Failed to ping end point [%s]', endPoint, e);
                  failedRequests++;
                  return propagateFailureIfAllRequestsFailed();
                }).then(function (time) {
                  var now = Date.now();
                  _this._logger.info('Discovered end point [%s] with time [%s]', endPoint.toString(), time);
                  _this._metricsService.push({
                    metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_8__["default"].RoundTripTime,
                    runtime: (now - _SDK__WEBPACK_IMPORTED_MODULE_7__["default"].pageLoadTime) / 1000,
                    value: {
                      uint64: time || 0
                    },
                    resource: endPoint.toString(),
                    kind: 'ping'
                  });
                  return endPoint;
                });
              }));
            case 9:
              endPoint = _context2.sent;
              return _context2.abrupt("return", endPoint);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function discoverClosestEndPoint() {
        return _discoverClosestEndPoint.apply(this, arguments);
      }
      return discoverClosestEndPoint;
    }()
  }]);
}();


/***/ }),

/***/ "./src/sdk/discovery/DiscoveryUri.ts":
/*!*******************************************!*\
  !*** ./src/sdk/discovery/DiscoveryUri.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscoveryUri)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defaults */ "./src/sdk/defaults.ts");
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _version_VersionManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../version/VersionManager */ "./src/sdk/version/VersionManager.ts");
/* harmony import */ var _environment_Parameters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environment/Parameters */ "./src/environment/Parameters.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





var DiscoveryUri = /*#__PURE__*/function () {
  function DiscoveryUri() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, DiscoveryUri);
    throw new Error('DiscoveryUri is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(DiscoveryUri, null, [{
    key: "uri",
    get: function get() {
      return DiscoveryUri._discoveryUri;
    }
  }, {
    key: "buildDiscoveryUrl",
    value: function buildDiscoveryUrl(uri) {
      var url = new URL(uri.toString());
      var sdkVersion = _version_VersionManager__WEBPACK_IMPORTED_MODULE_5__["default"].sdkVersion;
      var intentions = _environment_Parameters__WEBPACK_IMPORTED_MODULE_6__["default"].discoveryParameters.intentions;
      url.searchParams.set('version', sdkVersion);
      url.searchParams.set('intentions', intentions);
      url.searchParams.set('_', "".concat(Date.now()));
      if (url.pathname === '/') {
        url.pathname = '/pcast/endPoints';
      }
      return url.toString();
    }
  }]);
}();
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(DiscoveryUri, "_discoveryUri", new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__["default"](_defaults__WEBPACK_IMPORTED_MODULE_3__.defaultDiscoveryUri));


/***/ }),

/***/ "./src/sdk/discovery/EndPoint.ts":
/*!***************************************!*\
  !*** ./src/sdk/discovery/EndPoint.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EndPoint)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _edgeAuth_EdgeAuthParser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../edgeAuth/EdgeAuthParser */ "./src/edgeAuth/EdgeAuthParser.ts");
/* harmony import */ var _version_VersionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../version/VersionManager */ "./src/sdk/version/VersionManager.ts");
/* harmony import */ var _environment_Parameters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environment/Parameters */ "./src/environment/Parameters.ts");
/* harmony import */ var _BitrateModeMapping__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BitrateModeMapping */ "./src/sdk/discovery/BitrateModeMapping.ts");
/* harmony import */ var _BitrateStateMapping__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BitrateStateMapping */ "./src/sdk/discovery/BitrateStateMapping.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];






/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */






var apiVersion = 7;
var EndPoint = /*#__PURE__*/function () {
  function EndPoint(uri, timeout) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, EndPoint);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__["default"].getLogger('EndPoint'));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_uri", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_timeout", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_roundTripTime", void 0);
    this._uri = uri;
    this._timeout = timeout;
    if (!timeout) {
      throw new Error("End point requires a timeout");
    }
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(EndPoint, [{
    key: "roundTripTime",
    get: function get() {
      return this._roundTripTime;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "EndPoint[uri=".concat(this._uri, "]");
    }
  }, {
    key: "ping",
    value: function () {
      var _ping = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {
        var _this = this;
        var url, start, response, finished;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = this.buildPingUrl();
              start = Date.now();
              _context.next = 4;
              return Promise.race([fetch(url, {
                method: 'GET',
                cache: 'no-cache'
              }), new Promise(function (_, reject) {
                return setTimeout(function () {
                  return reject(new Error("Ping timed out [".concat(url, "]")));
                }, _this._timeout);
              })]);
            case 4:
              response = _context.sent;
              finished = Date.now();
              if (response.ok) {
                _context.next = 8;
                break;
              }
              throw new Error("Ping failed [".concat(url, "] [").concat(response.status, "]"));
            case 8:
              this._roundTripTime = finished - start;
              return _context.abrupt("return", this._roundTripTime);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function ping() {
        return _ping.apply(this, arguments);
      }
      return ping;
    }()
  }, {
    key: "subscribe",
    value: function () {
      var _subscribe = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2(token, localSessionDescription, failureCount) {
        var _this2 = this;
        var tenancy, url, formData, clientVersion, bodyWithOffer, bodyWithoutOffer, start, httpResponse, timeout, status, finished, subscribeResponse;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              tenancy = _edgeAuth_EdgeAuthParser__WEBPACK_IMPORTED_MODULE_7__["default"].parseToken(token).tenancy;
              if (tenancy) {
                _context2.next = 4;
                break;
              }
              this._logger.error('Failed to parse token [%s]', token);
              return _context2.abrupt("return", {
                status: 'unauthorized'
              });
            case 4:
              url = this.buildUrl([tenancy, 'stream', 'subscribe']).toString();
              formData = new FormData();
              clientVersion = _version_VersionManager__WEBPACK_IMPORTED_MODULE_8__["default"].sdkVersion;
              if (failureCount === 0 && localSessionDescription) {
                bodyWithOffer = {
                  apiVersion: apiVersion,
                  clientVersion: clientVersion,
                  bearerToken: token,
                  failureCount: failureCount,
                  httpRoundTripTime: this._roundTripTime,
                  setRemoteDescription: {
                    apiVersion: apiVersion,
                    sessionDescription: {
                      type: localSessionDescription.type,
                      sdp: localSessionDescription.sdp
                    }
                  },
                  createAnswerDescription: {
                    apiVersion: apiVersion
                  }
                };
                formData.append('jsonBody', JSON.stringify(bodyWithOffer));
              } else {
                bodyWithoutOffer = {
                  apiVersion: apiVersion,
                  clientVersion: clientVersion,
                  bearerToken: token,
                  failureCount: failureCount,
                  httpRoundTripTime: this._roundTripTime,
                  createOfferDescription: {
                    apiVersion: apiVersion
                  }
                };
                formData.append('jsonBody', JSON.stringify(bodyWithoutOffer));
              }
              start = Date.now();
              _context2.prev = 9;
              timeout = null;
              _context2.next = 13;
              return Promise.race([fetch(url, {
                method: 'POST',
                body: formData
              }), new Promise(function (resolve) {
                return timeout = window.setTimeout(function () {
                  _this2._logger.error('Failed to subscribe', new Error("Subscribe timed out [".concat(url, "]")));
                  resolve({
                    status: 408
                  });
                }, _this2._timeout);
              })]).finally(function () {
                if (timeout) {
                  clearTimeout(timeout);
                }
              });
            case 13:
              httpResponse = _context2.sent;
              _context2.next = 20;
              break;
            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](9);
              this._logger.error('Failed to subscribe', _context2.t0);
              return _context2.abrupt("return", {
                status: 'failed'
              });
            case 20:
              status = this.mapHttpStatusToSubscribeStatus(httpResponse);
              if (!(status !== 'ok')) {
                _context2.next = 23;
                break;
              }
              return _context2.abrupt("return", {
                status: status
              });
            case 23:
              finished = Date.now();
              _context2.next = 26;
              return this.convertHttpResponseToSubscribeResponse(tenancy, httpResponse);
            case 26:
              subscribeResponse = _context2.sent;
              this._logger.debug('Got subscribe response [%j] in [%s] ms', subscribeResponse, finished - start);
              return _context2.abrupt("return", subscribeResponse);
            case 29:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[9, 16]]);
      }));
      function subscribe(_x, _x2, _x3) {
        return _subscribe.apply(this, arguments);
      }
      return subscribe;
    }()
  }, {
    key: "publish",
    value: function () {
      var _publish = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee3(name, token, localSessionDescription, failureCount) {
        var _this3 = this;
        var tenancy, url, formData, clientVersion, bodyWithOffer, bodyWithoutOffer, start, httpResponse, timeout, status, finished, subscribeResponse;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              tenancy = _edgeAuth_EdgeAuthParser__WEBPACK_IMPORTED_MODULE_7__["default"].parseToken(token).tenancy;
              if (tenancy) {
                _context3.next = 4;
                break;
              }
              this._logger.error('Failed to parse token [%s]', token);
              return _context3.abrupt("return", {
                status: 'unauthorized'
              });
            case 4:
              url = this.buildUrl([tenancy, 'stream', 'publish']).toString();
              formData = new FormData();
              clientVersion = _version_VersionManager__WEBPACK_IMPORTED_MODULE_8__["default"].sdkVersion;
              if (failureCount === 0 && localSessionDescription) {
                bodyWithOffer = {
                  apiVersion: apiVersion,
                  clientVersion: clientVersion,
                  bearerToken: token,
                  failureCount: failureCount,
                  httpRoundTripTime: this._roundTripTime,
                  name: name,
                  setRemoteDescription: {
                    apiVersion: apiVersion,
                    sessionDescription: {
                      type: localSessionDescription.type,
                      sdp: localSessionDescription.sdp
                    }
                  },
                  createAnswerDescription: {
                    streamId: '',
                    apiVersion: apiVersion
                  }
                };
                formData.append('jsonBody', JSON.stringify(bodyWithOffer));
              } else {
                bodyWithoutOffer = {
                  apiVersion: apiVersion,
                  clientVersion: clientVersion,
                  bearerToken: token,
                  failureCount: failureCount,
                  httpRoundTripTime: this._roundTripTime,
                  name: name,
                  createOfferDescription: {
                    streamId: '',
                    apiVersion: apiVersion
                  }
                };
                formData.append('jsonBody', JSON.stringify(bodyWithoutOffer));
              }
              start = Date.now();
              _context3.prev = 9;
              timeout = null;
              _context3.next = 13;
              return Promise.race([fetch(url, {
                method: 'POST',
                body: formData
              }), new Promise(function (resolve) {
                return timeout = window.setTimeout(function () {
                  _this3._logger.error('Failed to publish', new Error("Publish timed out [".concat(url, "]")));
                  resolve({
                    status: 408
                  });
                }, _this3._timeout);
              })]).finally(function () {
                if (timeout) {
                  clearTimeout(timeout);
                }
              });
            case 13:
              httpResponse = _context3.sent;
              _context3.next = 20;
              break;
            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](9);
              this._logger.error('Failed to publish', _context3.t0);
              return _context3.abrupt("return", {
                status: 'failed'
              });
            case 20:
              status = this.mapHttpStatusToPublishStatus(httpResponse);
              if (!(status !== 'ok')) {
                _context3.next = 23;
                break;
              }
              return _context3.abrupt("return", {
                status: status
              });
            case 23:
              finished = Date.now();
              _context3.next = 26;
              return this.convertHttpResponseToPublishResponse(tenancy, httpResponse);
            case 26:
              subscribeResponse = _context3.sent;
              this._logger.debug('Got publish response [%j] in [%s] ms', subscribeResponse, finished - start);
              return _context3.abrupt("return", subscribeResponse);
            case 29:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[9, 16]]);
      }));
      function publish(_x4, _x5, _x6, _x7) {
        return _publish.apply(this, arguments);
      }
      return publish;
    }()
  }, {
    key: "setRemoteDescription",
    value: function () {
      var _setRemoteDescription = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee4(stream, sessionDescription) {
        var _this4 = this;
        var url, formData, body, start, httpResponse, timeout, status, finished, setRemoteDescriptionResponse;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              url = this.buildUrl([stream.tenancy, 'stream', stream.streamId, 'description', 'remote']).toString();
              formData = new FormData();
              body = {
                apiVersion: apiVersion,
                sharedSecret: stream.sharedSecret,
                sessionDescription: {
                  type: sessionDescription.type,
                  sdp: sessionDescription.sdp
                }
              };
              formData.append('jsonBody', JSON.stringify(body));
              start = Date.now();
              _context4.prev = 5;
              timeout = null;
              _context4.next = 9;
              return Promise.race([fetch(url, {
                method: 'POST',
                body: formData
              }), new Promise(function (resolve) {
                return timeout = window.setTimeout(function () {
                  _this4._logger.error('Failed to set remote description', new Error("Set remote description timed out [".concat(url, "]")));
                  resolve({
                    status: 408
                  });
                }, _this4._timeout);
              })]).finally(function () {
                if (timeout) {
                  clearTimeout(timeout);
                }
              });
            case 9:
              httpResponse = _context4.sent;
              _context4.next = 16;
              break;
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](5);
              this._logger.error('Failed to set remote description', _context4.t0);
              return _context4.abrupt("return", {
                status: 'failed'
              });
            case 16:
              status = this.mapHttpStatusToSetRemoteDescriptionStatus(httpResponse);
              if (!(status !== 'ok')) {
                _context4.next = 19;
                break;
              }
              return _context4.abrupt("return", {
                status: status
              });
            case 19:
              finished = Date.now();
              _context4.next = 22;
              return this.convertHttpResponseToSetRemoteDescriptionResponse(httpResponse);
            case 22:
              setRemoteDescriptionResponse = _context4.sent;
              this._logger.debug('Got set remote description response [%j] in [%s] ms', setRemoteDescriptionResponse, finished - start);
              return _context4.abrupt("return", setRemoteDescriptionResponse);
            case 25:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[5, 12]]);
      }));
      function setRemoteDescription(_x8, _x9) {
        return _setRemoteDescription.apply(this, arguments);
      }
      return setRemoteDescription;
    }()
  }, {
    key: "limitBitrate",
    value: function () {
      var _limitBitrate = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee5(stream, elapsedInMilliseconds, bitrateInBitsPerSecond, bitrateState, bitrateMode) {
        var _this5 = this;
        var url, formData, body, start, httpResponse, timeout, status, finished;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              url = this.buildUrl([stream.tenancy, 'stream', stream.streamId, 'bitrate']).toString();
              formData = new FormData();
              body = {
                apiVersion: apiVersion,
                sharedSecret: stream.sharedSecret,
                elapsedInMilliseconds: elapsedInMilliseconds,
                bitrateInBitsPerSecond: bitrateInBitsPerSecond,
                bitrateState: _BitrateStateMapping__WEBPACK_IMPORTED_MODULE_11__["default"].convertBitrateStateToBitrateStateType(bitrateState),
                bitrateMode: _BitrateModeMapping__WEBPACK_IMPORTED_MODULE_10__["default"].convertBitrateModeToBitrateModeType(bitrateMode)
              };
              formData.append('jsonBody', JSON.stringify(body));
              start = Date.now();
              _context5.prev = 5;
              timeout = null;
              _context5.next = 9;
              return Promise.race([fetch(url, {
                method: 'POST',
                body: formData
              }), new Promise(function (resolve) {
                return timeout = window.setTimeout(function () {
                  _this5._logger.error('Failed to set limit bitrate timed', new Error("Set limit bitrate timed out [".concat(url, "]")));
                  resolve({
                    status: 408
                  });
                }, _this5._timeout);
              })]).finally(function () {
                if (timeout) {
                  clearTimeout(timeout);
                }
              });
            case 9:
              httpResponse = _context5.sent;
              _context5.next = 16;
              break;
            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](5);
              this._logger.error('Failed to set limit bitrate timed', _context5.t0);
              return _context5.abrupt("return", {
                status: 'failed'
              });
            case 16:
              status = this.mapHttpStatusToSetTemporaryMaximalBitrateStatus(httpResponse);
              finished = Date.now();
              this._logger.info('Got set limit bitrate response [%s] in [%s] ms', status, finished - start);
              return _context5.abrupt("return", {
                status: status
              });
            case 20:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[5, 12]]);
      }));
      function limitBitrate(_x10, _x11, _x12, _x13, _x14) {
        return _limitBitrate.apply(this, arguments);
      }
      return limitBitrate;
    }()
  }, {
    key: "addIceCandidates",
    value: function () {
      var _addIceCandidates = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee6(stream, candidates, discoveryCompleted) {
        var _this6 = this;
        var options,
          url,
          formData,
          body,
          start,
          httpResponse,
          timeout,
          status,
          finished,
          addIceCandidatesResponse,
          _args6 = arguments;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              options = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : [];
              url = this.buildUrl([stream.tenancy, 'stream', stream.streamId, 'ice', 'candidates']).toString();
              formData = new FormData();
              body = {
                apiVersion: apiVersion,
                sharedSecret: stream.sharedSecret,
                candidates: candidates,
                discoveryCompleted: discoveryCompleted,
                options: options
              };
              formData.append('jsonBody', JSON.stringify(body));
              start = Date.now();
              _context6.prev = 6;
              timeout = null;
              _context6.next = 10;
              return Promise.race([fetch(url, {
                method: 'POST',
                body: formData
              }), new Promise(function (resolve) {
                return timeout = window.setTimeout(function () {
                  _this6._logger.error('Failed to add ice candidates', new Error("Add ice candidates timed out [".concat(url, "]")));
                  resolve({
                    status: 408
                  });
                }, _this6._timeout);
              })]).finally(function () {
                if (timeout) {
                  clearTimeout(timeout);
                }
              });
            case 10:
              httpResponse = _context6.sent;
              _context6.next = 17;
              break;
            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](6);
              this._logger.error('Failed to add ice candidates', _context6.t0);
              return _context6.abrupt("return", {
                status: 'failed'
              });
            case 17:
              status = this.mapHttpStatusToAddIceCandidatesStatus(httpResponse);
              if (!(status !== 'ok')) {
                _context6.next = 20;
                break;
              }
              return _context6.abrupt("return", {
                status: status
              });
            case 20:
              finished = Date.now();
              _context6.next = 23;
              return this.convertHttpResponseToAddIceCandidatesResponse(httpResponse);
            case 23:
              addIceCandidatesResponse = _context6.sent;
              this._logger.info('Got add ICE candidates response [%j] in [%s] ms', addIceCandidatesResponse, finished - start);
              return _context6.abrupt("return", addIceCandidatesResponse);
            case 26:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[6, 13]]);
      }));
      function addIceCandidates(_x15, _x16, _x17) {
        return _addIceCandidates.apply(this, arguments);
      }
      return addIceCandidates;
    }()
  }, {
    key: "destroyStream",
    value: function () {
      var _destroyStream = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee7(stream, reason) {
        var _this7 = this;
        var url, formData, body, start, httpResponse, timeout, status, finished, destroyStreamResponse;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              url = this.buildUrl([stream.tenancy, 'stream', stream.streamId, 'destroy']).toString();
              formData = new FormData();
              body = {
                apiVersion: apiVersion,
                sharedSecret: stream.sharedSecret,
                reason: reason,
                options: []
              };
              formData.append('jsonBody', JSON.stringify(body));
              start = Date.now();
              _context7.prev = 5;
              timeout = null;
              _context7.next = 9;
              return Promise.race([fetch(url, {
                method: 'POST',
                body: formData,
                cache: 'no-cache'
              }), new Promise(function (resolve) {
                return timeout = window.setTimeout(function () {
                  _this7._logger.error('Failed to subscribe', new Error("Delete stream timed out [".concat(url, "]")));
                  resolve({
                    status: 408
                  });
                }, _this7._timeout);
              })]).finally(function () {
                if (timeout) {
                  clearTimeout(timeout);
                }
              });
            case 9:
              httpResponse = _context7.sent;
              _context7.next = 16;
              break;
            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](5);
              this._logger.error('Failed to delete stream', _context7.t0);
              return _context7.abrupt("return", {
                status: 'failed'
              });
            case 16:
              status = this.mapHttpStatusToSetDestroyStreamStatus(httpResponse);
              if (!(status !== 'ok')) {
                _context7.next = 19;
                break;
              }
              return _context7.abrupt("return", {
                status: status
              });
            case 19:
              finished = Date.now();
              _context7.next = 22;
              return this.convertHttpResponseToDestroyStreamResponse(httpResponse);
            case 22:
              destroyStreamResponse = _context7.sent;
              this._logger.info('Got destroy stream response [%j] in [%s] ms', destroyStreamResponse, finished - start);
              return _context7.abrupt("return", destroyStreamResponse);
            case 25:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[5, 12]]);
      }));
      function destroyStream(_x18, _x19) {
        return _destroyStream.apply(this, arguments);
      }
      return destroyStream;
    }()
  }, {
    key: "destroyStreamOnUnmount",
    value: function () {
      var _destroyStreamOnUnmount = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee8(stream, reason) {
        var _navigator;
        var ignored, url, formData, body;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!((_navigator = navigator) !== null && _navigator !== void 0 && _navigator.sendBeacon)) {
                ignored = this.destroyStream(stream, reason);
              }
              url = this.buildUrl([stream.tenancy, 'stream', stream.streamId, 'destroy']).toString();
              formData = new FormData();
              body = {
                apiVersion: apiVersion,
                sharedSecret: stream.sharedSecret,
                reason: reason,
                options: []
              };
              formData.append('jsonBody', JSON.stringify(body));
              navigator.sendBeacon(url, formData);
            case 6:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function destroyStreamOnUnmount(_x20, _x21) {
        return _destroyStreamOnUnmount.apply(this, arguments);
      }
      return destroyStreamOnUnmount;
    }()
  }, {
    key: "buildUrl",
    value: function buildUrl(path) {
      var uri = new URL(this._uri);
      var pathAsArray = uri.pathname.split('/');
      pathAsArray.length = pathAsArray.length - 1;
      uri.pathname = pathAsArray.concat.apply(pathAsArray, _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(path)).join('/');
      return uri;
    }
  }, {
    key: "buildPingUrl",
    value: function buildPingUrl() {
      var uri = new URL(this._uri);
      var sdkVersion = _version_VersionManager__WEBPACK_IMPORTED_MODULE_8__["default"].sdkVersion;
      var intentions = _environment_Parameters__WEBPACK_IMPORTED_MODULE_9__["default"].discoveryParameters.intentions;
      uri.searchParams.set('type', 'http');
      uri.searchParams.set('version', sdkVersion);
      uri.searchParams.set('intentions', intentions);
      uri.searchParams.set('_', "".concat(Date.now()));
      return uri.toString();
    }
  }, {
    key: "mapHttpStatusToPublishStatus",
    value: function mapHttpStatusToPublishStatus(response) {
      if (!response) {
        return 'failed';
      }
      switch (response.status) {
        case 200:
          return 'ok';
        case 401:
          return 'unauthorized';
        case 402:
          return 'geo-restricted';
        case 403:
          return 'geo-blocked';
        case 406:
          return 'missing-channel-or-room-id';
        case 408:
          return 'timeout';
        case 409:
          return 'port-in-range-not-found';
        case 415:
          return 'forbidden-tag';
        case 503:
          return 'capacity';
        case 504:
          return 'rate-limited';
        default:
          return 'failed';
      }
    }
  }, {
    key: "mapHttpStatusToSubscribeStatus",
    value: function mapHttpStatusToSubscribeStatus(response) {
      if (!response) {
        return 'failed';
      }
      switch (response.status) {
        case 200:
          return 'ok';
        case 401:
          return 'unauthorized';
        case 402:
          return 'geo-restricted';
        case 403:
          return 'geo-blocked';
        case 408:
          return 'timeout';
        case 409:
          return 'port-in-range-not-found';
        case 415:
          return 'forbidden-tag';
        case 503:
          return 'capacity';
        case 504:
          return 'rate-limited';
        default:
          return 'failed';
      }
    }
  }, {
    key: "mapHttpStatusToSetRemoteDescriptionStatus",
    value: function mapHttpStatusToSetRemoteDescriptionStatus(response) {
      if (!response) {
        return 'failed';
      }
      switch (response.status) {
        case 200:
          return 'ok';
        case 401:
          return 'unauthorized';
        case 408:
          return 'timeout';
        case 503:
          return 'capacity';
        case 504:
          return 'rate-limited';
        default:
          return 'failed';
      }
    }
  }, {
    key: "mapHttpStatusToSetTemporaryMaximalBitrateStatus",
    value: function mapHttpStatusToSetTemporaryMaximalBitrateStatus(response) {
      if (!response) {
        return 'failed';
      }
      switch (response.status) {
        case 200:
          return 'ok';
        case 401:
          return 'unauthorized';
        case 408:
          return 'timeout';
        case 503:
          return 'capacity';
        case 504:
          return 'rate-limited';
        default:
          return 'failed';
      }
    }
  }, {
    key: "mapHttpStatusToAddIceCandidatesStatus",
    value: function mapHttpStatusToAddIceCandidatesStatus(response) {
      if (!response) {
        return 'failed';
      }
      switch (response.status) {
        case 200:
          return 'ok';
        case 401:
          return 'unauthorized';
        case 408:
          return 'timeout';
        case 503:
          return 'capacity';
        case 504:
          return 'rate-limited';
        default:
          return 'failed';
      }
    }
  }, {
    key: "mapHttpStatusToSetDestroyStreamStatus",
    value: function mapHttpStatusToSetDestroyStreamStatus(response) {
      if (!response) {
        return 'failed';
      }
      switch (response.status) {
        case 200:
          return 'ok';
        case 401:
          return 'unauthorized';
        case 408:
          return 'timeout';
        case 503:
          return 'capacity';
        case 504:
          return 'rate-limited';
        default:
          return 'failed';
      }
    }
  }, {
    key: "convertHttpResponseToSubscribeResponse",
    value: function () {
      var _convertHttpResponseToSubscribeResponse = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee9(tenancy, response) {
        var data, subscribeResponse;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return response.json();
            case 2:
              data = _context9.sent;
              subscribeResponse = {
                status: data.status
              };
              subscribeResponse.stream = {
                tenancy: tenancy,
                streamId: data.streamId,
                sharedSecret: data.sharedSecret
              };
              subscribeResponse.lag = data.lag;
              if (data) {
                if (data.rtcConfiguration) {
                  subscribeResponse.rtcConfiguration = this.convertIRtcConfigurationToRTCConfiguration(data.rtcConfiguration);
                }
                if (data.setRemoteDescriptionResponse && data.setRemoteDescriptionResponse.sessionDescription) {
                  subscribeResponse.setRemoteDescriptionResponse = {
                    sessionDescription: data.setRemoteDescriptionResponse.sessionDescription
                  };
                }
                if (data.createAnswerDescriptionResponse && data.createAnswerDescriptionResponse.sessionDescription) {
                  subscribeResponse.createAnswerDescriptionResponse = {
                    sessionDescription: data.createAnswerDescriptionResponse.sessionDescription
                  };
                }
                if (data.createOfferDescriptionResponse && data.createOfferDescriptionResponse.sessionDescription) {
                  subscribeResponse.createOfferDescriptionResponse = {
                    sessionDescription: data.createOfferDescriptionResponse.sessionDescription
                  };
                }
              }
              return _context9.abrupt("return", subscribeResponse);
            case 8:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function convertHttpResponseToSubscribeResponse(_x22, _x23) {
        return _convertHttpResponseToSubscribeResponse.apply(this, arguments);
      }
      return convertHttpResponseToSubscribeResponse;
    }()
  }, {
    key: "convertHttpResponseToPublishResponse",
    value: function () {
      var _convertHttpResponseToPublishResponse = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee10(tenancy, response) {
        var data, publishResponse;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return response.json();
            case 2:
              data = _context10.sent;
              publishResponse = {
                status: data.status
              };
              publishResponse.stream = {
                tenancy: tenancy,
                streamId: data.streamId,
                sharedSecret: data.sharedSecret
              };
              if (data) {
                if (data.rtcConfiguration) {
                  publishResponse.rtcConfiguration = this.convertIRtcConfigurationToRTCConfiguration(data.rtcConfiguration);
                }
                if (data.setRemoteDescriptionResponse && data.setRemoteDescriptionResponse.sessionDescription) {
                  publishResponse.setRemoteDescriptionResponse = {
                    sessionDescription: data.setRemoteDescriptionResponse.sessionDescription
                  };
                }
                if (data.createAnswerDescriptionResponse && data.createAnswerDescriptionResponse.sessionDescription) {
                  publishResponse.createAnswerDescriptionResponse = {
                    sessionDescription: data.createAnswerDescriptionResponse.sessionDescription
                  };
                }
                if (data.createOfferDescriptionResponse && data.createOfferDescriptionResponse.sessionDescription) {
                  publishResponse.createOfferDescriptionResponse = {
                    sessionDescription: data.createOfferDescriptionResponse.sessionDescription
                  };
                }
              }
              return _context10.abrupt("return", publishResponse);
            case 7:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function convertHttpResponseToPublishResponse(_x24, _x25) {
        return _convertHttpResponseToPublishResponse.apply(this, arguments);
      }
      return convertHttpResponseToPublishResponse;
    }()
  }, {
    key: "convertIRtcConfigurationToRTCConfiguration",
    value: function convertIRtcConfigurationToRTCConfiguration(configuration) {
      var rtcConfiguration = {
        iceServers: []
      };
      if (configuration.bundlePolicy) {
        rtcConfiguration.bundlePolicy = configuration.bundlePolicy;
      }
      if (typeof configuration.iceCandidatePoolSize === 'number') {
        rtcConfiguration.iceCandidatePoolSize = configuration.iceCandidatePoolSize;
      }
      if (configuration.iceServers) {
        var iceServers = [];
        for (var i = 0; i < configuration.iceServers.length; i++) {
          iceServers.push({
            urls: configuration.iceServers[i].urls,
            username: configuration.iceServers[i].username,
            credential: configuration.iceServers[i].credential
          });
        }
        rtcConfiguration.iceServers = iceServers;
      }
      if (configuration.iceTransportPolicy) {
        rtcConfiguration.iceTransportPolicy = configuration.iceTransportPolicy;
      }
      if (configuration.rtcpMuxPolicy) {
        rtcConfiguration.rtcpMuxPolicy = configuration.rtcpMuxPolicy;
      }
      return rtcConfiguration;
    }
  }, {
    key: "convertHttpResponseToSetRemoteDescriptionResponse",
    value: function () {
      var _convertHttpResponseToSetRemoteDescriptionResponse = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee11(response) {
        var data, setRemoteDescriptionResponse;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return response.json();
            case 2:
              data = _context11.sent;
              setRemoteDescriptionResponse = {
                status: data.status
              };
              if (data && data.sessionDescription) {
                setRemoteDescriptionResponse.sessionDescription = data.sessionDescription;
              }
              return _context11.abrupt("return", setRemoteDescriptionResponse);
            case 6:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function convertHttpResponseToSetRemoteDescriptionResponse(_x26) {
        return _convertHttpResponseToSetRemoteDescriptionResponse.apply(this, arguments);
      }
      return convertHttpResponseToSetRemoteDescriptionResponse;
    }()
  }, {
    key: "convertHttpResponseToAddIceCandidatesResponse",
    value: function () {
      var _convertHttpResponseToAddIceCandidatesResponse = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee12(response) {
        var data, addIceCandidatesResponse;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return response.json();
            case 2:
              data = _context12.sent;
              addIceCandidatesResponse = {
                status: data.status,
                options: []
              };
              if (data) {
                if (data.options) {
                  addIceCandidatesResponse.options = data.options;
                }
              }
              return _context12.abrupt("return", addIceCandidatesResponse);
            case 6:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      function convertHttpResponseToAddIceCandidatesResponse(_x27) {
        return _convertHttpResponseToAddIceCandidatesResponse.apply(this, arguments);
      }
      return convertHttpResponseToAddIceCandidatesResponse;
    }()
  }, {
    key: "convertHttpResponseToDestroyStreamResponse",
    value: function () {
      var _convertHttpResponseToDestroyStreamResponse = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee13(response) {
        var data, destroyStream;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return response.json();
            case 2:
              data = _context13.sent;
              destroyStream = {
                status: data.status
              };
              return _context13.abrupt("return", destroyStream);
            case 5:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
      function convertHttpResponseToDestroyStreamResponse(_x28) {
        return _convertHttpResponseToDestroyStreamResponse.apply(this, arguments);
      }
      return convertHttpResponseToDestroyStreamResponse;
    }()
  }]);
}();


/***/ }),

/***/ "./src/sdk/streaming/ChunkedStream.ts":
/*!********************************************!*\
  !*** ./src/sdk/streaming/ChunkedStream.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChunkedStream)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _discovery_Discovery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../discovery/Discovery */ "./src/sdk/discovery/Discovery.ts");
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lang/Disposable */ "./src/lang/Disposable.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lang/DisposableList */ "./src/lang/DisposableList.ts");
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _channels_ChannelState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../channels/ChannelState */ "./src/sdk/channels/ChannelState.ts");
/* harmony import */ var _ChunkedStreaming__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChunkedStreaming */ "./src/sdk/streaming/ChunkedStreaming.ts");
/* harmony import */ var _NetworkStates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NetworkStates */ "./src/sdk/streaming/NetworkStates.ts");
/* harmony import */ var _ChunkedStreamPlaybackMode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ChunkedStreamPlaybackMode */ "./src/sdk/streaming/ChunkedStreamPlaybackMode.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */









var ChunkedStream = /*#__PURE__*/function () {
  function ChunkedStream(channelContext, chunkedStreamPlaybackMode, handleStreamFailure) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, ChunkedStream);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__["default"].getLogger('ChunkedStream'));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_channelContext", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_chunkedStreamPlaybackMode", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_monitorDisposables", new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_5__["default"]());
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_handleStreamFailure", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_streamStatistics", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_monitorFailureCount", 0);
    this._channelContext = channelContext;
    this._chunkedStreamPlaybackMode = chunkedStreamPlaybackMode;
    this._handleStreamFailure = handleStreamFailure;
    this._channelContext.disposables.add(this);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(ChunkedStream, [{
    key: "start",
    value: function start(uri, token) {
      var _this = this;
      return _discovery_Discovery__WEBPACK_IMPORTED_MODULE_3__["default"].discoverClosestEndPointWithCaching(uri).then(function (endPoint) {
        _this._channelContext.online.value = true;
        _this._channelContext.endPoint.value = endPoint;
        _this._logger.info('Connecting to [%s]', endPoint.toString());
        return endPoint.subscribe(token, null, _this._channelContext.failureCount.value);
      }).then(function (_ref) {
        var status = _ref.status,
          stream = _ref.stream,
          createOfferDescriptionResponse = _ref.createOfferDescriptionResponse,
          lag = _ref.lag;
        _this._channelContext.stream.value = stream;
        _this._channelContext.lag.value = lag;
        _this._channelContext.applySessionAndStreamPropertiesToVideoElement();
        _this._logger.debug('[%s] Subscribe completed [%s] [%j] [%j] [%j] [%j]', _this._channelContext.streamId, status, createOfferDescriptionResponse);
        _this._channelContext.state.value = _this._channelContext.mapSubscribeStatusToChannelStatus(status);
        _this._channelContext.applyStatus(status);
        if (status !== 'ok') {
          return;
        }
        var offerSdp = createOfferDescriptionResponse.sessionDescription.sdp;
        var options = {
          originStartTime: Date.now() - lag + _this._channelContext.endPoint.value.roundTripTime / 2,
          lag: lag
        };
        return _ChunkedStreaming__WEBPACK_IMPORTED_MODULE_8__.ChunkedStreaming.start(_this._channelContext.videoElement.value, _this._channelContext.streamId, offerSdp, options).then(function (player) {
          _this.monitor(player);
          return player;
        }).catch(function (e) {
          _this._logger.error('ChunkedStreaming failed', e);
          _this._channelContext.loading.value = false;
          _this._channelContext.playing.value = false;
          _this._channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_7__["default"].Stopped;
        });
      });
    }
  }, {
    key: "monitor",
    value: function monitor(player) {
      var _this2 = this;
      this._monitorDisposables.dispose();
      var timeout = window.setTimeout(function () {
        var newStreamStatistics = _ChunkedStreaming__WEBPACK_IMPORTED_MODULE_8__.ChunkedStreaming.getStats();
        if (_this2._chunkedStreamPlaybackMode === _ChunkedStreamPlaybackMode__WEBPACK_IMPORTED_MODULE_10__["default"].Live && newStreamStatistics.networkState === _NetworkStates__WEBPACK_IMPORTED_MODULE_9__.NetworkStates.NetworkNoSource && _this2._channelContext.videoElement.value.currentTime === _this2._channelContext.videoElement.value.duration) {
          _this2._monitorFailureCount = 0;
          _this2._channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_7__["default"].ConnectionError;
          _this2._channelContext.playing.value = false;
          _this2._channelContext.loading.value = true;
          player.dispose();
          _this2._monitorDisposables.dispose();
          var ignored = _this2._handleStreamFailure().catch(function (e) {
            _this2._logger.error('Failed handling end of stream', e);
          });
          return;
        }
        if (_this2._streamStatistics && !_this2._channelContext.videoElement.value.paused && _this2._streamStatistics.currentTime >= newStreamStatistics.currentTime && (_this2._streamStatistics.dataBuffered >= newStreamStatistics.dataBuffered || !newStreamStatistics.dataBuffered)) {
          _this2._monitorFailureCount++;
          if (_this2._monitorFailureCount > 4) {
            _this2._monitorFailureCount = 0;
            _this2._channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_7__["default"].ConnectionError;
            _this2._channelContext.playing.value = false;
            _this2._channelContext.loading.value = true;
            player.dispose();
            _this2._monitorDisposables.dispose();
            var _ignored = _this2._handleStreamFailure().catch(function (e) {
              _this2._logger.error('Failed handling stream failure', e);
            });
            return;
          }
        } else {
          _this2._monitorFailureCount = 0;
        }
        if (_this2._channelContext.videoElement.value.paused && _this2._channelContext.state.value === _channels_ChannelState__WEBPACK_IMPORTED_MODULE_7__["default"].Playing) {
          _this2._channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_7__["default"].Paused;
        }
        if (!_this2._channelContext.videoElement.value.paused && _this2._channelContext.state.value !== _channels_ChannelState__WEBPACK_IMPORTED_MODULE_7__["default"].Playing) {
          _this2._channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_7__["default"].Playing;
        }
        _this2._streamStatistics = newStreamStatistics;
        _this2.monitor(player);
      }, 1000);
      this._monitorDisposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_4__["default"](function () {
        clearTimeout(timeout);
      }));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._monitorDisposables.dispose();
    }
  }]);
}();


/***/ }),

/***/ "./src/sdk/streaming/ChunkedStreamPlaybackMode.ts":
/*!********************************************************!*\
  !*** ./src/sdk/streaming/ChunkedStreamPlaybackMode.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__) => {

"use strict";
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var ChunkedStreamPlaybackMode = /*#__PURE__*/function (ChunkedStreamPlaybackMode) {
  ChunkedStreamPlaybackMode[ChunkedStreamPlaybackMode["Live"] = 1] = "Live";
  ChunkedStreamPlaybackMode[ChunkedStreamPlaybackMode["OndDemand"] = 2] = "OndDemand";
  return ChunkedStreamPlaybackMode;
}(ChunkedStreamPlaybackMode || {});
/* harmony default export */ __webpack_exports__["default"] = (ChunkedStreamPlaybackMode);

/***/ }),

/***/ "./src/sdk/streaming/ChunkedStreaming.ts":
/*!***********************************************!*\
  !*** ./src/sdk/streaming/ChunkedStreaming.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChunkedStreaming: () => (/* binding */ ChunkedStreaming)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environment/FeatureEnablement */ "./src/environment/FeatureEnablement.ts");
/* harmony import */ var _WebPlayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebPlayer */ "./src/sdk/streaming/WebPlayer.ts");
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _ShakaPlayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShakaPlayer */ "./src/sdk/streaming/ShakaPlayer.ts");
/* harmony import */ var _HlsPlayer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HlsPlayer */ "./src/sdk/streaming/HlsPlayer.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];




function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





var ChunkedStreaming = /*#__PURE__*/function () {
  function ChunkedStreaming() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, ChunkedStreaming);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(ChunkedStreaming, null, [{
    key: "hlsPlayer",
    get: function get() {
      return this._hlsPlayer;
    }
  }, {
    key: "phenixWebPlayer",
    get: function get() {
      return this._phenixWebPlayer;
    }
  }, {
    key: "shaka",
    get: function get() {
      return this._shaka;
    }
  }, {
    key: "start",
    value: function () {
      var _start = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(videoElement, streamId, offerSdp, options) {
        var _this = this;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this._options = options;
              if (!(this._hlsPlayer || this._shaka || this._phenixWebPlayer)) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", this.loaded(videoElement, streamId, offerSdp));
            case 3:
              if (!(!_SDK__WEBPACK_IMPORTED_MODULE_7__["default"].webPlayerLoader && !_SDK__WEBPACK_IMPORTED_MODULE_7__["default"].shakaPlayerLoader && !_SDK__WEBPACK_IMPORTED_MODULE_7__["default"].hlsJsLoader)) {
                _context.next = 5;
                break;
              }
              throw new Error('Unsupported-feature, add stream player');
            case 5:
              return _context.abrupt("return", new Promise(function (resolve) {
                if (_SDK__WEBPACK_IMPORTED_MODULE_7__["default"].hlsJsLoader) {
                  _this._pending = true;
                  _SDK__WEBPACK_IMPORTED_MODULE_7__["default"].hlsJsLoader(function (player) {
                    _this._hlsPlayer = player;
                    if (_this._pending) {
                      _this._pending = false;
                      resolve(_this.loaded(videoElement, streamId, offerSdp));
                    }
                  });
                }
                if (_SDK__WEBPACK_IMPORTED_MODULE_7__["default"].webPlayerLoader) {
                  _this._pending = true;
                  _SDK__WEBPACK_IMPORTED_MODULE_7__["default"].webPlayerLoader(function (player) {
                    _this._phenixWebPlayer = player;
                    if (_this._pending) {
                      _this._pending = false;
                      resolve(_this.loaded(videoElement, streamId, offerSdp));
                    }
                  });
                }
                if (_SDK__WEBPACK_IMPORTED_MODULE_7__["default"].shakaPlayerLoader) {
                  _this._pending = true;
                  _SDK__WEBPACK_IMPORTED_MODULE_7__["default"].shakaPlayerLoader(function (player) {
                    _this._shaka = player;
                    if (_this._pending) {
                      _this._pending = false;
                      resolve(_this.loaded(videoElement, streamId, offerSdp));
                    }
                  });
                }
              }));
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function start(_x, _x2, _x3, _x4) {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }, {
    key: "getStats",
    value: function getStats() {
      if (this._player) {
        return this._player.getStats();
      }
      return null;
    }
  }, {
    key: "play",
    value: function () {
      var _play = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(Player, videoElement, streamId, offerSdp, options) {
        var dashManifestUrlMatch, hlsManifestUrlMatch, manifestUrl, playlistUrl;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              dashManifestUrlMatch = offerSdp.match(/a=x-playlist:([^\n]*[.]mpd\??[^\s]*)/m);
              hlsManifestUrlMatch = offerSdp.match(/a=x-playlist:([^\n]*[.]m3u8\??[^\s]*)/m);
              manifestUrl = dashManifestUrlMatch && dashManifestUrlMatch[1] ? dashManifestUrlMatch[1] : '';
              playlistUrl = hlsManifestUrlMatch && hlsManifestUrlMatch[1] ? hlsManifestUrlMatch[1] : '';
              if (!playlistUrl) {
                _context2.next = 9;
                break;
              }
              if (!(!this._phenixWebPlayer || _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_5__["default"].shouldUseNativeHls)) {
                _context2.next = 9;
                break;
              }
              this._player = new Player(videoElement, 'hls', streamId, playlistUrl, options);
              this._player.start();
              return _context2.abrupt("return", this._player);
            case 9:
              if (!manifestUrl) {
                _context2.next = 14;
                break;
              }
              if (!(!this._hlsPlayer && !(this._phenixWebPlayer && _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_5__["default"].shouldUseNativeHls))) {
                _context2.next = 14;
                break;
              }
              this._player = new Player(videoElement, 'dash', streamId, manifestUrl, options);
              this._player.start();
              return _context2.abrupt("return", this._player);
            case 14:
              if (!(manifestUrl || playlistUrl)) {
                _context2.next = 16;
                break;
              }
              throw new Error("[".concat(streamId, "] Cannot play [").concat(playlistUrl ? 'HLS' : 'DASH', "] stream with included player"));
            case 16:
              throw new Error('No stream playlist found');
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function play(_x5, _x6, _x7, _x8, _x9) {
        return _play.apply(this, arguments);
      }
      return play;
    }()
  }, {
    key: "loaded",
    value: function loaded(videoElement, streamId, offerSdp) {
      if (!this._shaka && !this._phenixWebPlayer && !this._hlsPlayer) {
        return;
      }
      if (this._hlsPlayer) {
        return this.play(_HlsPlayer__WEBPACK_IMPORTED_MODULE_9__["default"], videoElement, streamId, offerSdp, _objectSpread(_objectSpread({}, this._options), {}, {
          preferNative: _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_5__["default"].shouldUseNativeHls
        }));
      }
      if (this._phenixWebPlayer) {
        return this.play(_WebPlayer__WEBPACK_IMPORTED_MODULE_6__["default"], videoElement, streamId, offerSdp, _objectSpread(_objectSpread({}, this._options), {}, {
          preferNative: _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_5__["default"].shouldUseNativeHls
        }));
      }
      if (this._shaka) {
        return this.play(_ShakaPlayer__WEBPACK_IMPORTED_MODULE_8__["default"], videoElement, streamId, offerSdp, _objectSpread(_objectSpread({}, this._options), {}, {
          preferNative: _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_5__["default"].shouldUseNativeHls
        }));
      }
    }
  }]);
}();
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(ChunkedStreaming, "_pending", false);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(ChunkedStreaming, "_hlsPlayer", void 0);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(ChunkedStreaming, "_phenixWebPlayer", void 0);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(ChunkedStreaming, "_shaka", void 0);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(ChunkedStreaming, "_options", void 0);
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(ChunkedStreaming, "_player", void 0);

/***/ }),

/***/ "./src/sdk/streaming/HlsPlayer.ts":
/*!****************************************!*\
  !*** ./src/sdk/streaming/HlsPlayer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HlsPlayer)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ChunkedStreaming__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChunkedStreaming */ "./src/sdk/streaming/ChunkedStreaming.ts");
/* harmony import */ var _NetworkStates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NetworkStates */ "./src/sdk/streaming/NetworkStates.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var HlsPlayer = /*#__PURE__*/function () {
  function HlsPlayer(videoElement, kind, streamId, manifestURI, options) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, HlsPlayer);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_videoElement", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_kind", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_streamId", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_manifestURI", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_options", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_player", void 0);
    this._videoElement = videoElement;
    this._kind = kind;
    this._streamId = streamId;
    this._manifestURI = encodeURI(manifestURI).replace(/[#]/g, '%23');
    this._options = options;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(HlsPlayer, [{
    key: "start",
    value: function start() {
      if (_ChunkedStreaming__WEBPACK_IMPORTED_MODULE_3__.ChunkedStreaming.hlsPlayer) {
        if (_ChunkedStreaming__WEBPACK_IMPORTED_MODULE_3__.ChunkedStreaming.hlsPlayer.isSupported()) {
          this._player = new _ChunkedStreaming__WEBPACK_IMPORTED_MODULE_3__.ChunkedStreaming.hlsPlayer({
            enableWorker: true,
            maxBufferLength: 1,
            backBufferLength: 0,
            liveSyncDuration: 7,
            liveDurationInfinity: true,
            liveMaxLatencyDuration: Infinity,
            highBufferWatchdogPeriod: 1
          });
          this._player.loadSource(this._manifestURI);
          this._player.attachMedia(this._videoElement);
        } else if (this._videoElement.canPlayType('application/vnd.apple.mpegurl')) {
          this._videoElement.src = this._manifestURI;
        }
      }
    }
  }, {
    key: "isSupported",
    value: function isSupported() {
      return _ChunkedStreaming__WEBPACK_IMPORTED_MODULE_3__.ChunkedStreaming.hlsPlayer && _ChunkedStreaming__WEBPACK_IMPORTED_MODULE_3__.ChunkedStreaming.hlsPlayer.isSupported();
    }
  }, {
    key: "getStats",
    value: function getStats() {
      if (!this._player) {
        return {
          width: 0,
          height: 0,
          currentTime: 0.0,
          lag: 0.0,
          networkState: _NetworkStates__WEBPACK_IMPORTED_MODULE_4__.NetworkStates.NetworkNoSource
        };
      }
      var statistics = {
        width: this._player.media.offsetWidth,
        height: this._player.media.offsetHeight,
        currentTime: this._player.media.currentTime,
        lag: 0.0,
        networkState: _NetworkStates__WEBPACK_IMPORTED_MODULE_4__.NetworkStates.NetworkIdle,
        dataBuffered: 0.0
      };
      if (this._videoElement.buffered && this._videoElement.buffered.length) {
        statistics.dataBuffered = this._videoElement.buffered.end(0);
      }
      if (this._player.streamController.state === 'IDLE') {
        statistics.networkState = _NetworkStates__WEBPACK_IMPORTED_MODULE_4__.NetworkStates.NetworkIdle;
      } else if (this._player.streamController.state === 'ERROR' || this._player.streamController.state === 'ENDED') {
        statistics.networkState = _NetworkStates__WEBPACK_IMPORTED_MODULE_4__.NetworkStates.NetworkNoSource;
      } else if (this._player.streamController.state.includes('LOADING') || this._player.streamController.state.includes('WAITING')) {
        statistics.networkState = _NetworkStates__WEBPACK_IMPORTED_MODULE_4__.NetworkStates.NetworkLoading;
      } else {
        statistics.networkState = _NetworkStates__WEBPACK_IMPORTED_MODULE_4__.NetworkStates.NetworkEmpty;
      }
      var currentTime = this._videoElement['currentTime'] || 0;
      var trueCurrentTime = (Date.now() - this._options.originStartTime) / 1000;
      statistics.lag = Math.max(0.0, currentTime + this._options.lag / 1000 - trueCurrentTime);
      return statistics;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this._player && this._player.destroy) {
        this._player.destroy();
        this._player = null;
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/sdk/streaming/NetworkStates.ts":
/*!********************************************!*\
  !*** ./src/sdk/streaming/NetworkStates.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkStates: () => (/* binding */ NetworkStates)
/* harmony export */ });
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var NetworkStates = /*#__PURE__*/function (NetworkStates) {
  NetworkStates[NetworkStates["NetworkEmpty"] = 0] = "NetworkEmpty";
  NetworkStates[NetworkStates["NetworkIdle"] = 1] = "NetworkIdle";
  NetworkStates[NetworkStates["NetworkLoading"] = 2] = "NetworkLoading";
  NetworkStates[NetworkStates["NetworkNoSource"] = 3] = "NetworkNoSource";
  return NetworkStates;
}({});

/***/ }),

/***/ "./src/sdk/streaming/RealTimeStream.ts":
/*!*********************************************!*\
  !*** ./src/sdk/streaming/RealTimeStream.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RealTimeStream)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lang/DisposableList */ "./src/lang/DisposableList.ts");
/* harmony import */ var _dom_GarbageCollectorManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dom/GarbageCollectorManager */ "./src/dom/GarbageCollectorManager.ts");
/* harmony import */ var _rtc_PeerConnectionService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../rtc/PeerConnectionService */ "./src/rtc/PeerConnectionService.ts");
/* harmony import */ var _discovery_Discovery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../discovery/Discovery */ "./src/sdk/discovery/Discovery.ts");
/* harmony import */ var _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../environment/FeatureEnablement */ "./src/environment/FeatureEnablement.ts");
/* harmony import */ var _channels_ChannelState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../channels/ChannelState */ "./src/sdk/channels/ChannelState.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _rtc_RtcConnectionMonitor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../rtc/RtcConnectionMonitor */ "./src/rtc/RtcConnectionMonitor.ts");
/* harmony import */ var _time_Duration__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../time/Duration */ "./src/time/Duration.ts");
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _rtc_RtcConfigurationManager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../rtc/RtcConfigurationManager */ "./src/rtc/RtcConfigurationManager.ts");
/* harmony import */ var _transformation_InsertableStreams__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../transformation/InsertableStreams */ "./src/sdk/transformation/InsertableStreams.ts");
/* harmony import */ var _rtc_SdpParser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../rtc/SdpParser */ "./src/rtc/SdpParser.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];






function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */















var iceCandidateAccumulationInterval = 100;
var defaultStreamSetupTimeout = 30000;
var RealTimeStream = /*#__PURE__*/function () {
  function RealTimeStream(channelContext, peerConnectionContext, streamTransformContext, handleStreamFailure) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, RealTimeStream);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_16__["default"].getLogger('RealTimeStream'));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_channelContext", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_peerConnectionContext", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_streamTransformContext", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_handleStreamFailure", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_disposables", void 0);
    this._channelContext = channelContext;
    this._peerConnectionContext = peerConnectionContext;
    this._streamTransformContext = streamTransformContext;
    this._handleStreamFailure = handleStreamFailure;
    this._disposables = new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this._channelContext.disposables.add(this);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(RealTimeStream, [{
    key: "start",
    value: function start(uri, token, listenOnStreamSetup, playMediaStreamInVideoElement) {
      var _this = this;
      var encodedInsertableStreams = typeof this._streamTransformContext.encodedVideoStreamSink === 'function' || typeof this._streamTransformContext.encodedAudioStreamSink === 'function';
      return Promise.all([_discovery_Discovery__WEBPACK_IMPORTED_MODULE_10__["default"].discoverClosestEndPointWithCaching(uri), _rtc_PeerConnectionService__WEBPACK_IMPORTED_MODULE_9__["default"].createPeerConnectionOffer('recvonly', encodedInsertableStreams).then(function (_ref) {
        var localOffer = _ref.localOffer,
          peerConnection = _ref.peerConnection;
        _this._peerConnectionContext.peerConnection.value = peerConnection;
        return {
          localOffer: localOffer,
          peerConnection: peerConnection
        };
      })]).then(function (_ref2) {
        var _ref3 = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, 2),
          endPoint = _ref3[0],
          _ref3$ = _ref3[1],
          localOffer = _ref3$.localOffer,
          peerConnection = _ref3$.peerConnection;
        _this._channelContext.online.value = true;
        _this._channelContext.endPoint.value = endPoint;
        _this._logger.info('Connecting to [%s]', endPoint.toString());
        _this._logger.info('Local offer:\n' + localOffer.sdp);
        if (_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_11__["default"].clientOfferDisabled || !peerConnection.supportsSetConfiguration || !peerConnection.supportsGetConfiguration) {
          peerConnection.close();
          peerConnection.dispose();
          if (_SDK__WEBPACK_IMPORTED_MODULE_6__["default"].forceGarbageCollectionOnRestart && !(_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_11__["default"].isMobile && _SDK__WEBPACK_IMPORTED_MODULE_6__["default"].skipGarbageCollectionOnMobileDevices)) {
            _dom_GarbageCollectorManager__WEBPACK_IMPORTED_MODULE_8__["default"].forceGarbageCollection();
          }
          peerConnection = null;
          localOffer = null;
          _this._peerConnectionContext.peerConnection.value = peerConnection;
        }
        return endPoint.subscribe(token, localOffer, _this._channelContext.failureCount.value);
      }).then(function (_ref4) {
        var status = _ref4.status,
          stream = _ref4.stream,
          rtcConfiguration = _ref4.rtcConfiguration,
          setRemoteDescriptionResponse = _ref4.setRemoteDescriptionResponse,
          createOfferDescriptionResponse = _ref4.createOfferDescriptionResponse,
          createAnswerDescriptionResponse = _ref4.createAnswerDescriptionResponse,
          lag = _ref4.lag;
        _this._channelContext.stream.value = stream;
        _this._channelContext.lag.value = lag;
        _this._channelContext.applySessionAndStreamPropertiesToVideoElement();
        _this._logger.debug('[%s] Subscribe completed [%s] [%j] [%j] [%j] [%j]', _this._channelContext.streamId, status, rtcConfiguration, setRemoteDescriptionResponse, createOfferDescriptionResponse, createAnswerDescriptionResponse);
        _this._channelContext.state.value = _this._channelContext.mapSubscribeStatusToChannelStatus(status);
        _this._channelContext.applyStatus(status);
        if (status !== 'ok') {
          return;
        }
        return _this.applyRtcConfiguration(_this._peerConnectionContext.peerConnection.value, rtcConfiguration).then(function (peerConnection) {
          var submitCandidatesTimeout;
          var cancelDiscovery = false;
          var discoveryCompleted = false;
          var candidates = [];
          if (!_this._peerConnectionContext.peerConnection.value) {
            _this._peerConnectionContext.peerConnection.value = peerConnection;
          }
          peerConnection.onicecandidate = function (e) {
            if (_this._channelContext.stream.value !== stream) {
              return;
            }
            if (_this._peerConnectionContext.peerConnection.value !== peerConnection) {
              return;
            }
            if (cancelDiscovery) {
              return;
            }
            if (!_SDK__WEBPACK_IMPORTED_MODULE_6__["default"].sendLocalCandidates.value) {
              return;
            }
            if (e.candidate && e.candidate.candidate) {
              candidates.push(e.candidate);
            } else {
              discoveryCompleted = true;
            }
            if (!submitCandidatesTimeout) {
              submitCandidatesTimeout = setTimeout(function () {
                if (_this._channelContext.stream.value !== stream) {
                  return;
                }
                if (cancelDiscovery) {
                  return;
                }
                var ignored = _this._channelContext.endPoint.value.addIceCandidates(stream, candidates, discoveryCompleted).then(function (_ref5) {
                  var status = _ref5.status,
                    options = _ref5.options;
                  if (status !== 'ok') {
                    _this._logger.warn('[%s] Failed to add ICE candidates with reason [%s]', _this._channelContext.streamId, status);
                    return;
                  }
                  if (options.includes('cancel')) {
                    cancelDiscovery = true;
                  }
                  _this._logger.info('[%s] Added ICE candidates with reason [%s] and options [%s]', _this._channelContext.streamId, status, options);
                }).catch(function (e) {
                  _this._logger.error('[%s] Failed to add ICE candidates', _this._channelContext.streamId, e);
                });
              }, iceCandidateAccumulationInterval);
            }
          };
          peerConnection.oniceconnectionstatechange = function () {
            if (_this._channelContext.stream.value !== stream) {
              return;
            }
            if (_this._peerConnectionContext.peerConnection.value !== peerConnection) {
              return;
            }
            var retryCallback = function retryCallback() {
              // If we stop normally the peer connection is unregistered first.
              // Thus anytime we see a closed peer connection that is still valid, it is an error.
              _this._channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_12__["default"].ConnectionError;
              if (_this._channelContext.videoElement.value) {
                _this._channelContext.videoElement.value.pause();
                _this._channelContext.videoElement.value.srcObject = null;
              }
              _this._channelContext.playing.value = false;
              _this._channelContext.loading.value = true;
              var ignored = _this._handleStreamFailure().catch(function (e) {
                _this._logger.error('[%s] Failed handling stream failure after peer connection stopped with state [%s]', _this._channelContext.streamId, peerConnection.iceConnectionState, e);
              });
            };
            switch (peerConnection.iceConnectionState) {
              case 'checking':
              case 'completed':
              case 'connected':
              case 'new':
                return;
              case 'disconnected':
              case 'failed':
                if (navigator.onLine) {
                  _this._logger.info('[%s] ICE connection state changed to [%s], trying to reconnect', _this._channelContext.streamId, peerConnection.iceConnectionState);
                  _this.reconnectPeerConnection(peerConnection, retryCallback);
                }
                return;
              case 'closed':
                _this._logger.info('[%s] ICE connection state changed to [%s], retrying to connect', _this._channelContext.streamId, peerConnection.iceConnectionState);
                retryCallback();
                return;
              default:
                (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_13__["default"])(peerConnection.iceConnectionState);
            }
          };
          var mediaStreamPromise = new Promise(function (resolve, reject) {
            if (!_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_11__["default"].onTrackDisabled) {
              var _timeoutId = setTimeout(function () {
                return reject(new Error('Stream setup timed out'));
              }, defaultStreamSetupTimeout);
              peerConnection.ontrack = function (e) {
                clearTimeout(_timeoutId);
                resolve(e.streams[0]);
              };
              return;
            }
            var trackListener = function trackListener(e) {
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              clearTimeout(timeoutId);
              peerConnection.removeEventListener('track', trackListener);
              peerConnection.removeEventListener('addstream', trackListener);
              if (e.streams) {
                resolve(e.streams[0]);
              } else {
                resolve(e.stream);
              }
            };
            var timeoutId = setTimeout(function () {
              peerConnection.removeEventListener('track', trackListener);
              peerConnection.removeEventListener('addstream', trackListener);
              reject(new Error('Stream setup timed out'));
            }, defaultStreamSetupTimeout);
            peerConnection.addEventListener('track', trackListener);
            peerConnection.addEventListener('addstream', trackListener);
            return;
          });
          return new Promise(function (resolve) {
            resolve();
          }).then(function () {
            if (!setRemoteDescriptionResponse) {
              return;
            }
            _this._logger.info('[%s] Set local SDP offer [%s]', _this._channelContext.streamId, setRemoteDescriptionResponse.sessionDescription.sdp);
            return peerConnection.setLocalDescription(setRemoteDescriptionResponse.sessionDescription).catch(function (e) {
              _this._logger.info('[%s] Failed to set local description [%j] with message [%s]', _this._channelContext.streamId, setRemoteDescriptionResponse.sessionDescription, e.message);
              throw e;
            });
          }).then(function () {
            if (!createAnswerDescriptionResponse) {
              return;
            }
            _this._logger.info('[%s] Set remote SDP answer [%s]', _this._channelContext.streamId, createAnswerDescriptionResponse.sessionDescription.sdp);
            return peerConnection.setRemoteDescription(createAnswerDescriptionResponse.sessionDescription).catch(function (e) {
              _this._logger.info('[%s] Failed to set remote description [%j] with message [%s]', _this._channelContext.streamId, createAnswerDescriptionResponse.sessionDescription, e.message);
              throw e;
            });
          }).then(function () {
            if (!createOfferDescriptionResponse) {
              return;
            }
            _this._logger.info('[%s] Set remote SDP offer [%s]', _this._channelContext.streamId, createOfferDescriptionResponse.sessionDescription.sdp);
            return peerConnection.setRemoteDescription(createOfferDescriptionResponse.sessionDescription).catch(function (e) {
              _this._logger.info('[%s] Failed to set remote description [%j] with message [%s]', _this._channelContext.streamId, createOfferDescriptionResponse.sessionDescription, e.message);
              throw e;
            }).then(function () {
              return peerConnection.createAnswer({
                offerToReceiveAudio: true,
                offerToReceiveVideo: true
              });
            }).then(function (answer) {
              _this._logger.info('[%s] Set local SDP answer [%j]', _this._channelContext.streamId, answer);
              return _this._channelContext.endPoint.value.setRemoteDescription(stream, answer);
            }).then(function (_ref6) {
              var status = _ref6.status,
                sessionDescription = _ref6.sessionDescription;
              _this._channelContext.state.value = _this.mapSetRemoteDescriptionStatusToChannelStatus(status);
              if (status !== 'ok') {
                _this._channelContext.playing.value = false;
                _this._channelContext.standby.value = true;
                _this._channelContext.stopped.value = false;
                return;
              }
              return peerConnection.setLocalDescription(sessionDescription).catch(function (e) {
                _this._logger.info('[%s] Failed to set local description [%j] with message [%s]', _this._channelContext.streamId, sessionDescription, e.message);
                throw e;
              });
            });
          }).then(function () {
            listenOnStreamSetup.success(_this._channelContext.streamId);
            return mediaStreamPromise;
          }).then(function (mediaStream) {
            if (_this._streamTransformContext.hasEncodedInsertableStreams.value) {
              var parsedRemoteDescription = new _rtc_SdpParser__WEBPACK_IMPORTED_MODULE_19__["default"](peerConnection.currentRemoteDescription.sdp);
              var _InsertableStreams$ap = _transformation_InsertableStreams__WEBPACK_IMPORTED_MODULE_18__["default"].applyEncodedStreamTransformation(mediaStream, peerConnection.getReceivers(), _this._streamTransformContext.encodedVideoStreamSink, _this._streamTransformContext.encodedAudioStreamSink, parsedRemoteDescription.videoCodec, parsedRemoteDescription.audioCodec),
                disposables = _InsertableStreams$ap.disposables;
              _this._disposables.add(disposables);
            }
            if (_this._streamTransformContext.hasInsertableStreams.value) {
              var _InsertableStreams$ap2 = _transformation_InsertableStreams__WEBPACK_IMPORTED_MODULE_18__["default"].applyInsertableStreamTransformation(mediaStream, _this._streamTransformContext.videoStreamTransformCallback, _this._streamTransformContext.audioStreamTransformCallback),
                transformedStream = _InsertableStreams$ap2.transformedStream,
                _disposables = _InsertableStreams$ap2.disposables;
              _this._disposables.add(_disposables);
              mediaStream = transformedStream;
            }
            _this._peerConnectionContext.mediaStream.value = mediaStream;
            var rtcConnectionMonitor = new _rtc_RtcConnectionMonitor__WEBPACK_IMPORTED_MODULE_14__["default"](peerConnection, mediaStream, _this._channelContext.endPoint.value.roundTripTime / 4);
            _this._disposables.add(rtcConnectionMonitor);
            var rtcConnectionMonitorStatisticSubscription = rtcConnectionMonitor.rtcStatistic.subscribe(function (statistics) {
              _this._channelContext.rtcStatistics.value = statistics;
              if (!_this._channelContext.rtcVideoStatistic && !_this._channelContext.rtcAudioStatistic) {
                _this._channelContext.rtcAudioStatistic = statistics.audio;
                _this._channelContext.rtcVideoStatistic = statistics.video;
                return;
              }
              var audioTrackFailed = false;
              var videoTrackFailed = false;
              if (statistics.audio) {
                if (_this._channelContext.rtcAudioStatistic && _this._channelContext.rtcAudioStatistic.timestamp !== statistics.audio.timestamp) {
                  audioTrackFailed = _this._channelContext.rtcAudioStatistic && _this._channelContext.rtcAudioStatistic.bytesReceived === statistics.audio.bytesReceived;
                  if (audioTrackFailed && navigator.onLine) {
                    _this._logger.info('[%s] Audio track failed with last bytesReceived [%s] is equal to previous bytesReceived [%s] within [%s]', _this._channelContext.streamId, statistics.audio.bytesReceived, _this._channelContext.rtcAudioStatistic.bytesReceived, new _time_Duration__WEBPACK_IMPORTED_MODULE_15__["default"](statistics.audio.timestamp - _this._channelContext.rtcAudioStatistic.timestamp).toIsoString());
                  }
                  _this._channelContext.rtcAudioStatistic = statistics.audio;
                }
              }
              if (statistics.video) {
                if (_this._channelContext.rtcVideoStatistic && _this._channelContext.rtcVideoStatistic.timestamp !== statistics.video.timestamp) {
                  videoTrackFailed = _this._channelContext.rtcVideoStatistic && _this._channelContext.rtcVideoStatistic.bytesReceived === statistics.video.bytesReceived;
                  if (videoTrackFailed && navigator.onLine) {
                    _this._logger.info('[%s] Video track failed with last bytesReceived [%s] is equal to previous bytesReceived [%s] within [%s]', _this._channelContext.streamId, statistics.video.bytesReceived, _this._channelContext.rtcVideoStatistic.bytesReceived, new _time_Duration__WEBPACK_IMPORTED_MODULE_15__["default"](statistics.video.timestamp - _this._channelContext.rtcVideoStatistic.timestamp).toIsoString());
                  }
                  _this._channelContext.rtcVideoStatistic = statistics.video;
                }
              }
              if ((videoTrackFailed || audioTrackFailed) && navigator.onLine) {
                var retryCallback = function retryCallback() {
                  _this._channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_12__["default"].ConnectionError;
                  if (_this._channelContext.videoElement.value) {
                    _this._channelContext.videoElement.value.pause();
                    _this._channelContext.videoElement.value.srcObject = null;
                  }
                  _this._channelContext.playing.value = false;
                  _this._channelContext.loading.value = true;
                  rtcConnectionMonitor.dispose();
                  var ignored = _this._handleStreamFailure().catch(function (e) {
                    _this._logger.error('[%s] Failed handling stream failure after track stopped with state [%s]', _this._channelContext.streamId, peerConnection.iceConnectionState, e);
                  });
                };
                _this.reconnectPeerConnection(peerConnection, retryCallback);
              } else {
                _this._peerConnectionContext.peerConnectionReconnectAttempts = 0;
                if (_this._channelContext.state.value !== _channels_ChannelState__WEBPACK_IMPORTED_MODULE_12__["default"].Reconnecting) {
                  return;
                }
                _this._channelContext.state.value = _this._channelContext.playing.value ? _channels_ChannelState__WEBPACK_IMPORTED_MODULE_12__["default"].Playing : _channels_ChannelState__WEBPACK_IMPORTED_MODULE_12__["default"].Paused;
                _this._logger.info('Channel state restored to [%s] after reconnecting', _channels_ChannelState__WEBPACK_IMPORTED_MODULE_12__["default"][_this._channelContext.state.value]);
              }
            });
            _this._disposables.add(rtcConnectionMonitorStatisticSubscription);
            if (!_SDK__WEBPACK_IMPORTED_MODULE_6__["default"].automaticallyPlayMediaStream) {
              _this._channelContext.autoMuted.value = false;
              _this._channelContext.autoPaused.value = true;
              _this._channelContext.loading.value = false;
              _this._channelContext.playing.value = false;
              _this._channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_12__["default"].Paused;
              return;
            }
            return playMediaStreamInVideoElement(mediaStream);
          });
        });
      });
    }
  }, {
    key: "applyRtcConfiguration",
    value: function () {
      var _applyRtcConfiguration = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(optionalPeerConnection, rtcConfiguration) {
        var newRtcConfiguration;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (optionalPeerConnection) {
                _context.next = 3;
                break;
              }
              rtcConfiguration = _rtc_RtcConfigurationManager__WEBPACK_IMPORTED_MODULE_17__["default"].truncateIceServers(rtcConfiguration);
              return _context.abrupt("return", _SDK__WEBPACK_IMPORTED_MODULE_6__["default"].peerConnectionFactory.value.createPeerConnection(rtcConfiguration));
            case 3:
              newRtcConfiguration = _objectSpread(_objectSpread({}, optionalPeerConnection.getConfiguration()), rtcConfiguration);
              optionalPeerConnection.setConfiguration(newRtcConfiguration);
              return _context.abrupt("return", optionalPeerConnection);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function applyRtcConfiguration(_x, _x2) {
        return _applyRtcConfiguration.apply(this, arguments);
      }
      return applyRtcConfiguration;
    }()
  }, {
    key: "reconnectPeerConnection",
    value: function reconnectPeerConnection(peerConnection, retryCallback) {
      var _this2 = this;
      if (peerConnection.iceConnectionState === 'closed') {
        return;
      }
      this._channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_12__["default"].Reconnecting;
      if (this._peerConnectionContext.peerConnectionReconnectAttempts < _SDK__WEBPACK_IMPORTED_MODULE_6__["default"].maximalNumberOfPeerConnectionReconnectAttempts || !_SDK__WEBPACK_IMPORTED_MODULE_6__["default"].automaticallyReconnectPeerConnection) {
        var _peerConnection$curre;
        this._peerConnectionContext.peerConnectionReconnectAttempts++;
        var isClientOfferFlow = ((_peerConnection$curre = peerConnection.currentLocalDescription) === null || _peerConnection$curre === void 0 ? void 0 : _peerConnection$curre.type) === 'offer';
        if (_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_11__["default"].clientOfferDisabled || !peerConnection.supportsSetConfiguration || !peerConnection.supportsGetConfiguration || !isClientOfferFlow) {
          return;
        }
        this._logger.info('Reconnecting peer connection by restarting ICE');
        var currentLocalDescription = peerConnection.currentLocalDescription;
        var ignored = peerConnection.createOffer({
          iceRestart: true
        }).then(function (offer) {
          return peerConnection.setLocalDescription(offer).then(function () {
            return peerConnection.setLocalDescription(currentLocalDescription);
          });
        }).catch(function (e) {
          _this2._logger.error('Failed to reconnect peer connection', e);
          _this2._peerConnectionContext.peerConnectionReconnectAttempts = 0;
          retryCallback();
        });
        return;
      }
      this._logger.info('Failed to reconnect peer connection after [%s] attempts, performing full recovery', this._peerConnectionContext.peerConnectionReconnectAttempts);
      this._peerConnectionContext.peerConnectionReconnectAttempts = 0;
      retryCallback();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._disposables.dispose();
    }
  }, {
    key: "mapSetRemoteDescriptionStatusToChannelStatus",
    value: function mapSetRemoteDescriptionStatusToChannelStatus(status) {
      switch (status) {
        case 'ok':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_12__["default"].Starting;
        case 'unauthorized':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_12__["default"].Unauthorized;
        case 'not-found':
        case 'capacity':
        case 'rate-limited':
        case 'timeout':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_12__["default"].Recovering;
        case 'failed':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_12__["default"].Error;
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_13__["default"])(status);
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/sdk/streaming/ShakaPlayer.ts":
/*!******************************************!*\
  !*** ./src/sdk/streaming/ShakaPlayer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShakaPlayer)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _ChunkedStreaming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChunkedStreaming */ "./src/sdk/streaming/ChunkedStreaming.ts");
/* harmony import */ var _NetworkStates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NetworkStates */ "./src/sdk/streaming/NetworkStates.ts");



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var ShakaPlayer = /*#__PURE__*/function () {
  function ShakaPlayer(videoElement, kind, streamId, manifestURI, options) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, ShakaPlayer);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger('ShakaPlayer'));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_videoElement", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_kind", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_streamId", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_manifestURI", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_options", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_monitoredStatistics", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_player", void 0);
    this._videoElement = videoElement;
    this._kind = kind;
    this._streamId = streamId;
    this._manifestURI = encodeURI(manifestURI).replace(/[#]/g, '%23');
    this._options = options;
    this._monitoredStatistics = {
      estimatedBandwidth: 0,
      playTime: 0
    };
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(ShakaPlayer, [{
    key: "start",
    value: function start() {
      if (_ChunkedStreaming__WEBPACK_IMPORTED_MODULE_4__.ChunkedStreaming.shaka) {
        var playerOptions = {
          abr: {
            defaultBandwidthEstimate: 2000000
          },
          manifest: {
            retryParameters: {
              timeout: 10000
            }
          },
          streaming: {
            liveSyncPanicThreshold: 1,
            bufferingGoal: 60,
            bufferBehind: 30,
            retryParameters: {
              timeout: 10000,
              maxAttempts: 10,
              backoffFactor: 1.1
            }
          }
        };
        this._player = new _ChunkedStreaming__WEBPACK_IMPORTED_MODULE_4__.ChunkedStreaming.shaka.Player(this._videoElement);
        this.loadPlayer(playerOptions);
        return;
      }
    }
  }, {
    key: "getStats",
    value: function getStats() {
      if (!this._player) {
        return {
          width: 0,
          height: 0,
          currentTime: 0,
          lag: 0,
          networkState: _NetworkStates__WEBPACK_IMPORTED_MODULE_5__.NetworkStates.NetworkNoSource
        };
      }
      var statistics = _objectSpread(_objectSpread({}, this._player.getStats()), {}, {
        currentTime: 0,
        lag: 0
      });
      var currentTime = this._videoElement['currentTime'] || 0;
      var trueCurrentTime = (Date.now() - this._options.originStartTime) / 1000;
      var lag = Math.max(0.0, trueCurrentTime - currentTime);
      if (this._videoElement) {
        statistics.currentTime = currentTime;
        statistics.lag = lag;
        if (this._videoElement.buffered && this._videoElement.buffered.length) {
          statistics.dataBuffered = this._videoElement.buffered.end(0);
        }
      }
      if (statistics.estimatedBandwidth > 0 && this._monitoredStatistics.estimatedBandwidth < statistics.estimatedBandwidth) {
        statistics.networkState = _NetworkStates__WEBPACK_IMPORTED_MODULE_5__.NetworkStates.NetworkLoading;
      } else if (statistics.playTime > 0 && this._monitoredStatistics.playTime < statistics.playTime) {
        statistics.networkState = _NetworkStates__WEBPACK_IMPORTED_MODULE_5__.NetworkStates.NetworkIdle;
      } else if (statistics.video) {
        statistics.networkState = _NetworkStates__WEBPACK_IMPORTED_MODULE_5__.NetworkStates.NetworkEmpty;
      } else {
        statistics.networkState = _NetworkStates__WEBPACK_IMPORTED_MODULE_5__.NetworkStates.NetworkNoSource;
      }
      this._monitoredStatistics.estimatedBandwidth = statistics.estimatedBandwidth;
      this._monitoredStatistics.playTime = statistics.playTime;
      return statistics;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this._player) {
        this._player.unload();
        this._player.destroy();
      }
      this._player = null;
    }
  }, {
    key: "loadPlayer",
    value: function loadPlayer(playerConfig) {
      var _this = this;
      this._player.configure(playerConfig);
      var ignored = this._player.load(this._manifestURI).then(function () {
        _this._logger.info('[%s] DASH live stream has been loaded', _this._streamId);
        if (_this._videoElement.play) {
          _this._videoElement.play();
        }
      }).catch(function (e) {
        _this._logger.error('[%s] Error while loading DASH live stream [%s]', _this._streamId, e.code, e);
      });
    }
  }]);
}();


/***/ }),

/***/ "./src/sdk/streaming/StreamFactory.ts":
/*!********************************************!*\
  !*** ./src/sdk/streaming/StreamFactory.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StreamFactory)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edgeAuth_EdgeAuthParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../edgeAuth/EdgeAuthParser */ "./src/edgeAuth/EdgeAuthParser.ts");
/* harmony import */ var _ChunkedStream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChunkedStream */ "./src/sdk/streaming/ChunkedStream.ts");
/* harmony import */ var _RealTimeStream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RealTimeStream */ "./src/sdk/streaming/RealTimeStream.ts");
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _ChunkedStreamPlaybackMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ChunkedStreamPlaybackMode */ "./src/sdk/streaming/ChunkedStreamPlaybackMode.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */






var StreamFactory = /*#__PURE__*/function () {
  function StreamFactory() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, StreamFactory);
    throw new Error('StreamFactory is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(StreamFactory, null, [{
    key: "create",
    value: function create(token, channelContext, peerConnectionContext, streamTransformContext, handleStreamFailure) {
      var tokenCapabilities = _edgeAuth_EdgeAuthParser__WEBPACK_IMPORTED_MODULE_3__["default"].parseToken(token).capabilities;
      var hasStreaming = tokenCapabilities.includes('streaming');
      var hasOnDemand = tokenCapabilities.includes('on-demand');
      if (hasStreaming || hasOnDemand) {
        return new _ChunkedStream__WEBPACK_IMPORTED_MODULE_4__["default"](channelContext, !hasOnDemand ? _ChunkedStreamPlaybackMode__WEBPACK_IMPORTED_MODULE_7__["default"].Live : _ChunkedStreamPlaybackMode__WEBPACK_IMPORTED_MODULE_7__["default"].OndDemand, handleStreamFailure);
      }
      return new _RealTimeStream__WEBPACK_IMPORTED_MODULE_5__["default"](channelContext, peerConnectionContext, streamTransformContext, handleStreamFailure);
    }
  }]);
}();
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(StreamFactory, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__["default"].getLogger('Streaming'));


/***/ }),

/***/ "./src/sdk/streaming/WebPlayer.ts":
/*!****************************************!*\
  !*** ./src/sdk/streaming/WebPlayer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebPlayer)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _ChunkedStreaming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChunkedStreaming */ "./src/sdk/streaming/ChunkedStreaming.ts");
/* harmony import */ var _NetworkStates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NetworkStates */ "./src/sdk/streaming/NetworkStates.ts");



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var bandwidthToStartAt = 3000000; // Corresponds to 720p in most setups
var minTimeBeforeNextReload = 15000;
var WebPlayer = /*#__PURE__*/function () {
  function WebPlayer(videoElement, kind, streamId, manifestURI, options) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, WebPlayer);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger('WebPlayer'));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_videoElement", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_kind", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_streamId", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_manifestURI", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_options", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_player", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_lastReloadTime", void 0);
    this._videoElement = videoElement;
    this._kind = kind;
    this._streamId = streamId;
    this._manifestURI = encodeURI(manifestURI).replace(/[#]/g, '%23');
    this._options = options;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(WebPlayer, [{
    key: "start",
    value: function start() {
      var _this = this;
      if (_ChunkedStreaming__WEBPACK_IMPORTED_MODULE_4__.ChunkedStreaming.phenixWebPlayer) {
        var playerOptions = _objectSpread(_objectSpread({}, this._options), {}, {
          bandwidthToStartAt: bandwidthToStartAt
        });
        this._player = new _ChunkedStreaming__WEBPACK_IMPORTED_MODULE_4__.ChunkedStreaming.phenixWebPlayer.WebPlayer(this._logger, this._videoElement, playerOptions);
        this._player.start(this._manifestURI);
        this._player.addEventListener('error', function (errorObject) {
          if (_this.canReload() && errorObject && (errorObject.code === 3 || errorObject.severity === _ChunkedStreaming__WEBPACK_IMPORTED_MODULE_4__.ChunkedStreaming.phenixWebPlayer.errors.severity.RECOVERABLE)) {
            _this._logger.warn('Reloading unhealthy stream after error event [%j]', errorObject);
            _this.reloadIfAble();
          }
          _this._logger.error('Cannot reload with error [%j]', errorObject);
        });
        return;
      }
    }
  }, {
    key: "isSupported",
    value: function isSupported() {
      return _ChunkedStreaming__WEBPACK_IMPORTED_MODULE_4__.ChunkedStreaming.phenixWebPlayer && _ChunkedStreaming__WEBPACK_IMPORTED_MODULE_4__.ChunkedStreaming.phenixWebPlayer.isSupported;
    }
  }, {
    key: "getStats",
    value: function getStats() {
      var _this$_videoElement$b, _this$_videoElement$b2;
      if (!this._player) {
        return {
          width: 0,
          height: 0,
          currentTime: 0.0,
          lag: 0.0,
          networkState: _NetworkStates__WEBPACK_IMPORTED_MODULE_5__.NetworkStates.NetworkNoSource,
          dataBuffered: 0.0
        };
      }
      var statistics = this._player.getStats();
      var currentTime = statistics.currentTime || this._videoElement['currentTime'];
      var trueCurrentTime = (Date.now() - this._options.originStartTime) / 1000;
      if ((_this$_videoElement$b = this._videoElement.buffered) !== null && _this$_videoElement$b !== void 0 && _this$_videoElement$b.length) {
        statistics.dataBuffered = this._videoElement.buffered.end(0);
      }
      if (statistics.isNative && statistics.deliveryType === 'Hls') {
        statistics.currentTime = currentTime - statistics.lag;
      }
      if (!statistics.currentTime) {
        statistics.currentTime = currentTime;
      }
      if (!statistics.isNative) {
        statistics.lag = Math.max(0.0, trueCurrentTime - currentTime);
      }
      if ((_this$_videoElement$b2 = this._videoElement.buffered) !== null && _this$_videoElement$b2 !== void 0 && _this$_videoElement$b2.length) {
        statistics.networkState = _NetworkStates__WEBPACK_IMPORTED_MODULE_5__.NetworkStates.NetworkLoading;
      } else if (statistics.currentTime > 0) {
        statistics.networkState = _NetworkStates__WEBPACK_IMPORTED_MODULE_5__.NetworkStates.NetworkIdle;
      } else if (statistics.video) {
        statistics.networkState = _NetworkStates__WEBPACK_IMPORTED_MODULE_5__.NetworkStates.NetworkEmpty;
      } else {
        statistics.networkState = _NetworkStates__WEBPACK_IMPORTED_MODULE_5__.NetworkStates.NetworkNoSource;
      }
      return statistics;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this._player) {
        this._player.dispose();
      }
      this._player = null;
    }
  }, {
    key: "canReload",
    value: function canReload() {
      var hasElapsedMinTimeSinceLastReload = !this._lastReloadTime || Date.now() - this._lastReloadTime > minTimeBeforeNextReload;
      return this._videoElement && this._player && this._videoElement.buffered.length !== 0 && hasElapsedMinTimeSinceLastReload;
    }
  }, {
    key: "reloadIfAble",
    value: function reloadIfAble() {
      if (!this.canReload()) {
        return;
      }
      this._logger.warn('[%s] Reloading unhealthy stream that was active for at least [%s] seconds', this._streamId, minTimeBeforeNextReload / 1000);
      this._lastReloadTime = Date.now();
      this.reload();
    }
  }, {
    key: "reload",
    value: function reload() {
      this._player.dispose();
      this._player = null;
      this.start();
    }
  }]);
}();


/***/ }),

/***/ "./src/sdk/transformation/EncodedStreamSink.ts":
/*!*****************************************************!*\
  !*** ./src/sdk/transformation/EncodedStreamSink.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EncodedStreamSink)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var EncodedStreamSink = /*#__PURE__*/function () {
  function EncodedStreamSink() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, EncodedStreamSink);
    throw new Error('EncodedStreamSink is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(EncodedStreamSink, null, [{
    key: "validateEncodedStreamSink",
    value: function validateEncodedStreamSink(mode, item) {
      if (typeof item !== 'function') {
        return {
          valid: false,
          validationResult: "Unexpected ".concat(mode, " Encoded Stream Sink function type. Found [").concat(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default()(item), "]")
        };
      }
      if (item.length !== 2) {
        return {
          valid: false,
          validationResult: "Unexpected ".concat(mode, " Encoded Stream Sink function parameter length. Expected 2. Found [").concat(item.length, "]")
        };
      }
      return {
        valid: true,
        validationResult: 'ok'
      };
    }
  }]);
}();


/***/ }),

/***/ "./src/sdk/transformation/InsertableStreams.ts":
/*!*****************************************************!*\
  !*** ./src/sdk/transformation/InsertableStreams.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InsertableStreams)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lang/Disposable */ "./src/lang/Disposable.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lang/DisposableList */ "./src/lang/DisposableList.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environment/FeatureEnablement */ "./src/environment/FeatureEnablement.ts");
/* harmony import */ var _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SurrogateFrameDataManager */ "./src/sdk/transformation/SurrogateFrameDataManager.ts");




/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





var NIKworker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(0), __webpack_require__.b), {
  type: undefined
});
var InsertableStreams = /*#__PURE__*/function () {
  function InsertableStreams() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, InsertableStreams);
    throw new Error('InsertableStreams is a static class that may not be instantiated');
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(InsertableStreams, null, [{
    key: "applyEncodedStreamTransformation",
    value: function applyEncodedStreamTransformation(stream, receivers, encodedVideoStreamSink, encodedAudioStreamSink, videoCodec, audioCodec) {
      var disposables = new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_5__["default"]();
      stream.getTracks().forEach(function (track) {
        var receiver = receivers.filter(function (receive) {
          return receive.track === track;
        })[0];
        var kind = track.kind;
        switch (kind) {
          case 'video':
            {
              if (encodedVideoStreamSink) {
                if (_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_7__["default"].isRTCRtpScriptTransformSupported) {
                  var worker = NIKworker; // XXX new Worker(new URL('./WorkerTransformStream.ts', import.meta.url), {type: 'module'});

                  console.log('NIKNIK: IS worker loaded 10c1d');
                  worker.onmessage = /*#__PURE__*/function () {
                    var _ref = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(event) {
                      return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return encodedVideoStreamSink(track, event.data.chunk);
                          case 2:
                            if (_context.sent) {
                              _context.next = 7;
                              break;
                            }
                            console.log('NIKNIK: IS forceInvalidFrame: true');
                            worker.postMessage({
                              forceInvalidFrame: true
                            });
                            _context.next = 8;
                            break;
                          case 7:
                            console.log('NIKNIK: IS forceInvalidFrame: a-ok');
                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    }));
                    return function (_x) {
                      return _ref.apply(this, arguments);
                    };
                  }();
                  receiver.transform = new RTCRtpScriptTransform(worker, {
                    kind: track.kind,
                    codec: videoCodec
                  });
                  disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_4__["default"](function () {
                    worker.terminate();
                  }));
                  break;
                }
                var encodedStreamTransformCallback = /*#__PURE__*/function () {
                  var _ref2 = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(chunk, controller) {
                    var surrogate;
                    return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return encodedVideoStreamSink(track, chunk);
                        case 2:
                          if (_context2.sent) {
                            _context2.next = 9;
                            break;
                          }
                          if (chunk.type === 'key') {
                            surrogate = _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_8__["default"].getInvalidSurrogateVideoIFrame(videoCodec);
                          } else {
                            surrogate = _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_8__["default"].getInvalidSurrogateVideoPFrame(videoCodec);
                          }
                          if (!(surrogate === _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_8__.SkipFrame)) {
                            _context2.next = 6;
                            break;
                          }
                          return _context2.abrupt("return");
                        case 6:
                          chunk.data = surrogate || chunk.data;
                          _context2.next = 10;
                          break;
                        case 9:
                          if (chunk.type === 'key') {
                            chunk.data = _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_8__["default"].getSurrogateVideoIFramePerCodec(videoCodec) || chunk.data;
                          } else {
                            chunk.data = _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_8__["default"].getSurrogateVideoPFramePerCodec(videoCodec) || chunk.data;
                          }
                        case 10:
                          controller.enqueue(chunk);
                        case 11:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2);
                  }));
                  return function encodedStreamTransformCallback(_x2, _x3) {
                    return _ref2.apply(this, arguments);
                  };
                }();
                var transformer = new TransformStream({
                  transform: encodedStreamTransformCallback
                });
                var receiverStreams = receiver.createEncodedStreams();
                var source = receiverStreams.readable;
                var sink = receiverStreams.writable;
                source.pipeThrough(transformer).pipeTo(sink);
              }
              break;
            }
          case 'audio':
            {
              if (encodedAudioStreamSink) {
                if (_environment_FeatureEnablement__WEBPACK_IMPORTED_MODULE_7__["default"].isRTCRtpScriptTransformSupported) {
                  var _worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(1), __webpack_require__.b), {
                    type: undefined
                  });
                  _worker.onmessage = /*#__PURE__*/function () {
                    var _ref3 = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(event) {
                      return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
                        while (1) switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return encodedAudioStreamSink(track, event.data.chunk);
                          case 2:
                            if (_context3.sent) {
                              _context3.next = 4;
                              break;
                            }
                            _worker.postMessage({
                              forceInvalidFrame: true
                            });
                          case 4:
                          case "end":
                            return _context3.stop();
                        }
                      }, _callee3);
                    }));
                    return function (_x4) {
                      return _ref3.apply(this, arguments);
                    };
                  }();
                  receiver.transform = new RTCRtpScriptTransform(_worker, {
                    kind: track.kind,
                    codec: audioCodec
                  });
                  var mediaStream = new MediaStream();
                  var audioPumper = new Audio();
                  audioPumper.srcObject = mediaStream;
                  document.body.appendChild(audioPumper);
                  disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_4__["default"](function () {
                    _worker.terminate();
                    document.body.removeChild(audioPumper);
                  }));
                  break;
                }
                var _encodedStreamTransformCallback = /*#__PURE__*/function () {
                  var _ref4 = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(chunk, controller) {
                    return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return encodedAudioStreamSink(track, chunk);
                        case 2:
                          if (_context4.sent) {
                            _context4.next = 6;
                            break;
                          }
                          chunk.data = _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_8__["default"].getInvalidSurrogateAudioData();
                          _context4.next = 7;
                          break;
                        case 6:
                          chunk.data = _SurrogateFrameDataManager__WEBPACK_IMPORTED_MODULE_8__["default"].getSurrogateAudioSilentPerCodec(audioCodec) || chunk.data;
                        case 7:
                          controller.enqueue(chunk);
                        case 8:
                        case "end":
                          return _context4.stop();
                      }
                    }, _callee4);
                  }));
                  return function _encodedStreamTransformCallback(_x5, _x6) {
                    return _ref4.apply(this, arguments);
                  };
                }();
                var _transformer = new TransformStream({
                  transform: _encodedStreamTransformCallback
                });
                var _receiverStreams = receiver.createEncodedStreams();
                var _source = _receiverStreams.readable;
                var _sink = _receiverStreams.writable;
                _source.pipeThrough(_transformer).pipeTo(_sink);
              }
              break;
            }
          default:
            (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_6__["default"])(kind);
        }
      });
      return {
        disposables: disposables
      };
    }
  }, {
    key: "applyInsertableStreamTransformation",
    value: function applyInsertableStreamTransformation(stream, videoStreamTransformCallback, audioStreamTransformCallback) {
      var transformedStream = new MediaStream();
      var disposables = new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_5__["default"]();
      stream.getTracks().forEach(function (track) {
        var kind = track.kind;
        switch (kind) {
          case 'video':
            {
              if (videoStreamTransformCallback) {
                var insertableStreamTransformCallback = function insertableStreamTransformCallback(chunk, controller) {
                  videoStreamTransformCallback(track, chunk, controller);
                };
                var videoTrack = track;
                var transformer = new TransformStream({
                  transform: insertableStreamTransformCallback
                });
                var processor = new MediaStreamTrackProcessor({
                  track: videoTrack
                });
                var generator = new MediaStreamTrackGenerator({
                  kind: videoTrack.kind
                });
                var source = processor.readable;
                var sink = generator.writable;
                source.pipeThrough(transformer).pipeTo(sink);
                transformedStream.addTrack(generator);
                disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_4__["default"](function () {
                  transformedStream.removeTrack(generator);
                }));
              } else {
                transformedStream.addTrack(track);
              }
              break;
            }
          case 'audio':
            {
              if (audioStreamTransformCallback) {
                var _insertableStreamTransformCallback = function _insertableStreamTransformCallback(chunk, controller) {
                  audioStreamTransformCallback(track, chunk, controller);
                };
                var audioTrack = track;
                var _transformer2 = new TransformStream({
                  transform: _insertableStreamTransformCallback
                });
                var _processor = new MediaStreamTrackProcessor({
                  track: audioTrack
                });
                var _generator = new MediaStreamTrackGenerator({
                  kind: audioTrack.kind
                });
                var _source2 = _processor.readable;
                var _sink2 = _generator.writable;
                _source2.pipeThrough(_transformer2).pipeTo(_sink2);
                transformedStream.addTrack(_generator);
                var mediaStream = new MediaStream();
                var audioPumper = new Audio();
                mediaStream.addTrack(track);
                audioPumper.srcObject = mediaStream;
                document.body.appendChild(audioPumper);
                disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_4__["default"](function () {
                  transformedStream.removeTrack(_generator);
                  document.body.removeChild(audioPumper);
                }));
              } else {
                transformedStream.addTrack(track);
              }
              break;
            }
          default:
            (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_6__["default"])(kind);
        }
      });
      return {
        transformedStream: transformedStream,
        disposables: disposables
      };
    }
  }]);
}();


/***/ }),

/***/ "./src/sdk/transformation/StreamTrackTransform.ts":
/*!********************************************************!*\
  !*** ./src/sdk/transformation/StreamTrackTransform.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StreamTrackTransform)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var StreamTrackTransform = /*#__PURE__*/function () {
  function StreamTrackTransform() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, StreamTrackTransform);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(StreamTrackTransform, null, [{
    key: "validateMediaStreamTrackTransform",
    value: function validateMediaStreamTrackTransform(mode, item) {
      if (typeof item !== 'function') {
        return {
          valid: false,
          validationResult: "Unexpected ".concat(mode, " Media Stream Track transform function type. Found [").concat(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default()(item), "]")
        };
      }
      if (item.length !== 3) {
        return {
          valid: false,
          validationResult: "Unexpected ".concat(mode, " Media Stream Track transform function parameter length. Expected 3. Found [").concat(item.length, "]")
        };
      }
      return {
        valid: true,
        validationResult: 'ok'
      };
    }
  }]);
}();


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

/***/ "./src/sdk/version/VersionManager.ts":
/*!*******************************************!*\
  !*** ./src/sdk/version/VersionManager.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VersionManager)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var VersionManager = /*#__PURE__*/function () {
  function VersionManager() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, VersionManager);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(VersionManager, null, [{
    key: "sdkVersion",
    get: function get() {
      try {
        return "2024-07-16T18:24:10.446Z (2024.1.0)";
      } catch (e) {
        return this._defaultVersion;
      }
    }
  }]);
}();
_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(VersionManager, "_defaultVersion", new Date().toISOString());


/***/ }),

/***/ "./src/telemetry/TelemetryApender.ts":
/*!*******************************************!*\
  !*** ./src/telemetry/TelemetryApender.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TelemetryAppender)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TelemetryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TelemetryService */ "./src/telemetry/TelemetryService.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var TelemetryAppender = /*#__PURE__*/function () {
  function TelemetryAppender(telemetryConfiguration) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, TelemetryAppender);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_telemetryService", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_tenancy", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_sessionId", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_threshold", void 0);
    this._tenancy = telemetryConfiguration.tenancy;
    this._sessionId = telemetryConfiguration.sessionId;
    this._threshold = telemetryConfiguration.threshold;
    this._telemetryService = new _TelemetryService__WEBPACK_IMPORTED_MODULE_3__["default"](telemetryConfiguration);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(TelemetryAppender, [{
    key: "log",
    value: function log(logLevel, message, category, date) {
      if (logLevel < this._threshold) {
        return;
      }
      this._telemetryService.push(logLevel, message, category, date);
    }
  }]);
}();


/***/ }),

/***/ "./src/telemetry/TelemetryConfiguration.ts":
/*!*************************************************!*\
  !*** ./src/telemetry/TelemetryConfiguration.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TelemetryConfiguration)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/LoggerDefaults */ "./src/logger/LoggerDefaults.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var TelemetryConfiguration = /*#__PURE__*/function () {
  function TelemetryConfiguration() {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, TelemetryConfiguration);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_url", 'https://telemetry.phenixrts.com/telemetry/logs');
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_tenancy", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_sessionId", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_environment", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_pageLoadTime", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_threshold", _logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_3__["default"].defaultTelemetryLoggingLevel);
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(TelemetryConfiguration, [{
    key: "url",
    get: function get() {
      return this._url;
    },
    set: function set(url) {
      var telemetryUrl = new URL(url);
      telemetryUrl.pathname = telemetryUrl.pathname + '/logs';
      this._url = telemetryUrl.toString();
    }
  }, {
    key: "environment",
    get: function get() {
      return this._environment;
    },
    set: function set(environment) {
      this._environment = environment;
    }
  }, {
    key: "tenancy",
    get: function get() {
      return this._tenancy;
    },
    set: function set(tenancy) {
      this._tenancy = tenancy;
    }
  }, {
    key: "sessionId",
    get: function get() {
      return this._sessionId;
    },
    set: function set(sessionId) {
      this._sessionId = sessionId;
    }
  }, {
    key: "pageLoadTime",
    get: function get() {
      return this._pageLoadTime;
    },
    set: function set(pageLoadTime) {
      this._pageLoadTime = pageLoadTime;
    }
  }, {
    key: "threshold",
    get: function get() {
      return this._threshold;
    },
    set: function set(threshold) {
      this._threshold = threshold;
    }
  }]);
}();


/***/ }),

/***/ "./src/telemetry/TelemetryService.ts":
/*!*******************************************!*\
  !*** ./src/telemetry/TelemetryService.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TelemetryService)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logger_Logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger/Logger */ "./src/logger/Logger.ts");
/* harmony import */ var _lang_Numbers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lang/Numbers */ "./src/lang/Numbers.ts");
/* harmony import */ var _sdk_version_VersionManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sdk/version/VersionManager */ "./src/sdk/version/VersionManager.ts");





/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */



var requestSizeLimit = 8192;
var TelemetryService = /*#__PURE__*/function () {
  function TelemetryService(telemetryConfiguration) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, TelemetryService);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_telemetryConfiguration", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_logs", []);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_isSending", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_domain", location.hostname);
    this._telemetryConfiguration = telemetryConfiguration;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(TelemetryService, [{
    key: "push",
    value: function push(logLevel, message, category, timestamp) {
      var runtime = (timestamp.valueOf() - this._telemetryConfiguration.pageLoadTime) / 1000;
      var logRecord = {
        timestamp: timestamp.toISOString(),
        tenancy: this._telemetryConfiguration.tenancy,
        level: _logger_Logger__WEBPACK_IMPORTED_MODULE_5__.LoggingLevel[logLevel],
        category: category,
        message: message,
        sessionId: this._telemetryConfiguration.sessionId,
        version: _sdk_version_VersionManager__WEBPACK_IMPORTED_MODULE_7__["default"].sdkVersion,
        environment: this._telemetryConfiguration.environment,
        fullQualifiedName: this._domain,
        runtime: runtime
      };
      if (logLevel < _logger_Logger__WEBPACK_IMPORTED_MODULE_5__.LoggingLevel.Error) {
        this._logs.push(logRecord);
      } else {
        this._logs.unshift(logRecord);
      }
      var ignored = this.sendLogsIfAble();
    }
  }, {
    key: "sendLogs",
    value: function () {
      var _sendLogs = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(logMessages) {
        var formData;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              formData = new FormData();
              formData.append('jsonBody', JSON.stringify({
                records: logMessages
              }));
              _context.next = 4;
              return fetch(this._telemetryConfiguration.url, {
                method: 'POST',
                body: formData
              });
            case 4:
              return _context.abrupt("return", _context.sent);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function sendLogs(_x) {
        return _sendLogs.apply(this, arguments);
      }
      return sendLogs;
    }()
  }, {
    key: "sendLogsIfAble",
    value: function () {
      var _sendLogsIfAble = _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        var _this = this;
        var numberOfLogsToSend, sizeOfLogsToSend, getItemSize, getLogSize, logMessages;
        return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this._logs.length <= 0 || this._isSending)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              numberOfLogsToSend = 0;
              sizeOfLogsToSend = 0;
              this._isSending = true;
              getItemSize = function getItemSize(item) {
                return typeof item === 'number' ? _lang_Numbers__WEBPACK_IMPORTED_MODULE_6__["default"].countNumberLength(item) : item.length;
              };
              getLogSize = function getLogSize(log) {
                return Object.values(log).reduce(function (sum, item) {
                  return sum + (item ? getItemSize(item) : 0);
                }, 0);
              };
              while (this._logs.length > numberOfLogsToSend && getLogSize(this._logs[numberOfLogsToSend]) + sizeOfLogsToSend < requestSizeLimit) {
                sizeOfLogsToSend += getLogSize(this._logs[numberOfLogsToSend]);
                numberOfLogsToSend++;
              }
              if (!numberOfLogsToSend) {
                this._logs[numberOfLogsToSend].message = this._logs[numberOfLogsToSend].message.substring(0, getLogSize(this._logs[numberOfLogsToSend]) + (requestSizeLimit - getLogSize(this._logs[numberOfLogsToSend])));
                numberOfLogsToSend = 1;
              }
              logMessages = this._logs.slice(0, numberOfLogsToSend);
              this._logs = this._logs.slice(numberOfLogsToSend);
              return _context2.abrupt("return", this.sendLogs(logMessages).then(function (response) {
                _this._isSending = false;
                var ignored = _this.sendLogsIfAble();
                return response;
              }).catch(function () {
                _this._isSending = false;
                var ignored = _this.sendLogsIfAble();
              }));
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function sendLogsIfAble() {
        return _sendLogsIfAble.apply(this, arguments);
      }
      return sendLogsIfAble;
    }()
  }]);
}();


/***/ }),

/***/ "./src/time/Duration.ts":
/*!******************************!*\
  !*** ./src/time/Duration.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Durations)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Durations = /*#__PURE__*/function () {
  function Durations() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Durations);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_duration", void 0);
    this._duration = duration;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Durations, [{
    key: "toIsoString",
    value: function toIsoString() {
      if (this._duration === 0) {
        return 'P0S';
      }
      var isNegative = this._duration < 0;
      var duration = isNegative ? Math.abs(this._duration) : this._duration;
      var offset = Math.floor(duration);
      var milliseconds = offset % 1000;
      offset = Math.floor(offset / 1000);
      var seconds = offset % 60;
      offset = Math.floor(offset / 60);
      var minutes = offset % 60;
      offset = Math.floor(offset / 60);
      var hours = offset % 24;
      var parts = ['PT'];
      if (isNegative) {
        parts.unshift('-');
      }
      if (hours) {
        parts.push(hours + 'H');
      }
      if (minutes) {
        parts.push(minutes + 'M');
      }
      if (seconds || milliseconds) {
        parts.push(String(seconds));
        if (milliseconds) {
          parts.push('.' + this.padStart(milliseconds.toString(), 3, '0'));
        }
        parts.push('S');
      }
      return parts.join('');
    }
  }, {
    key: "padStart",
    value: function padStart(item, targetLength, padString) {
      targetLength = targetLength >> 0;
      padString = String(typeof padString !== 'undefined' ? padString : ' ');
      if (item.length > targetLength) {
        return item;
      }
      targetLength = targetLength - item.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length);
      }
      return padString.slice(0, targetLength) + item;
    }
  }]);
}();


/***/ }),

/***/ "./src/time/ExponentialBackoff.ts":
/*!****************************************!*\
  !*** ./src/time/ExponentialBackoff.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExponentialBackoff)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var defaultBackoffIntervalInMillisecond = 2000;
var defaultMinBackoffIntervalInMillisecond = 1;
var defaultMaxBackoffIntervalInMillisecond = 300000;
var ExponentialBackoff = /*#__PURE__*/function () {
  function ExponentialBackoff() {
    var backoffIntervalInMillisecond = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBackoffIntervalInMillisecond;
    var minBackoffIntervalInMillisecond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMinBackoffIntervalInMillisecond;
    var maxBackoffIntervalInMillisecond = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultMaxBackoffIntervalInMillisecond;
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, ExponentialBackoff);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_backoffIntervalInMillisecond", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_minBackoffIntervalInMillisecond", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_maxBackoffIntervalInMillisecond", void 0);
    this._backoffIntervalInMillisecond = backoffIntervalInMillisecond;
    this._minBackoffIntervalInMillisecond = minBackoffIntervalInMillisecond;
    this._maxBackoffIntervalInMillisecond = maxBackoffIntervalInMillisecond;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(ExponentialBackoff, [{
    key: "getExponentialBackoffIntervalByFailureCount",
    value: function getExponentialBackoffIntervalByFailureCount(failureCount) {
      var backoffIntervalInSeconds = this._backoffIntervalInMillisecond / 1000;
      var randomization = 0.5 + 0.5 * Math.random(); // [0.5, 1)
      var exponentialBackoff = Math.pow(backoffIntervalInSeconds, failureCount - 2); //  [1/4 1/2 1 2 4 8 ....]
      var exponentialBackoffWithRandomization = Math.floor(exponentialBackoff) * randomization;
      var exponentialBackoffWithRandomizationInMillisecond = Math.ceil(Math.max(exponentialBackoffWithRandomization * 1000, this._minBackoffIntervalInMillisecond));
      return Math.min(exponentialBackoffWithRandomizationInMillisecond, this._maxBackoffIntervalInMillisecond);
    }
  }]);
}();


/***/ }),

/***/ "./src/video/Dimension.ts":
/*!********************************!*\
  !*** ./src/video/Dimension.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dimension)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Dimension = /*#__PURE__*/function () {
  function Dimension(width, height) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Dimension);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "width", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "height", void 0);
    this.width = width;
    this.height = height;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Dimension, [{
    key: "equals",
    value: function equals(other) {
      return other && this.width === other.width && this.height === other.height;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.width, "x").concat(this.height);
    }
  }], [{
    key: "empty",
    get: function get() {
      return new Dimension(0, 0);
    }
  }]);
}();


/***/ }),

/***/ "./src/video/SessionTelemetry.ts":
/*!***************************************!*\
  !*** ./src/video/SessionTelemetry.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SessionTelemetry)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dom_StreamSetupListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/StreamSetupListener */ "./src/dom/StreamSetupListener.ts");
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _dom_NetworkMonitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/NetworkMonitor */ "./src/dom/NetworkMonitor.ts");
/* harmony import */ var _sdk_SDK__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sdk/SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../metrics/MetricsType */ "./src/metrics/MetricsType.ts");
/* harmony import */ var _time_Duration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../time/Duration */ "./src/time/Duration.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lang/DisposableList */ "./src/lang/DisposableList.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */







var SessionTelemetry = /*#__PURE__*/function () {
  function SessionTelemetry(pageLoadTime, metricsService) {
    var _this = this;
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, SessionTelemetry);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger('SessionTelemetry'));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_metricsService", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_applicationActivityMonitor", _sdk_SDK__WEBPACK_IMPORTED_MODULE_6__["default"].applicationActivityMonitor);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_networkMonitor", new _dom_NetworkMonitor__WEBPACK_IMPORTED_MODULE_5__["default"]());
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_pageLoadTime", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_disposables", new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_9__["default"]());
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_lastNetworkStatistics", {});
    this._pageLoadTime = pageLoadTime;
    this._disposables.add(this._networkMonitor);
    this._metricsService = metricsService;
    if (!this._networkMonitor.isSupported) {
      return;
    }
    this._disposables.add(this._applicationActivityMonitor.isForeground.subscribe(function (isForeground) {
      _this.recordForegroundChange(isForeground);
    }));
    this._disposables.add(this._networkMonitor.rtt.subscribe(function (value) {
      _this.recordNetworkRTTUpdate(value);
    }));
    this._disposables.add(this._networkMonitor.effectiveType.subscribe(function (value) {
      _this.recordNetworkTypeChangeUpdate(value);
    }));
    this._disposables.add(this._networkMonitor.downlinkThroughputCapacity.subscribe(function (value) {
      _this.recordNetworkDownlinkThroughputCapacityUpdate(value);
    }));
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(SessionTelemetry, [{
    key: "listenOnStreamSetup",
    value: function listenOnStreamSetup() {
      return new _dom_StreamSetupListener__WEBPACK_IMPORTED_MODULE_3__.StreamSetupListener(this._pageLoadTime);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._disposables.dispose();
    }
  }, {
    key: "recordForegroundChange",
    value: function recordForegroundChange(isForeground) {
      var now = Date.now();
      var timeSinceLastChange = this._applicationActivityMonitor.getTimeSinceLastChange();
      this._metricsService.push({
        metricType: isForeground ? _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_7__["default"].ApplicationForeground : _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_7__["default"].ApplicationBackground,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          uint64: timeSinceLastChange
        }
      });
      this._logger.info('Application has gone into the [%s] after [%s] ms', isForeground ? 'foreground' : 'background', new _time_Duration__WEBPACK_IMPORTED_MODULE_8__["default"](timeSinceLastChange).toIsoString());
    }
  }, {
    key: "recordNetworkRTTUpdate",
    value: function recordNetworkRTTUpdate(newRTT) {
      var now = Date.now();
      var oldRtt = this._lastNetworkStatistics.rtt;
      this._lastNetworkStatistics.rtt = newRTT;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_7__["default"].RoundTripTime,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          uint64: newRTT
        },
        previousValue: oldRtt ? {
          uint64: oldRtt
        } : undefined,
        resource: 'navigator'
      });
      this._logger.info('[%s] Network RTT changed to [%s] from [%s]', new _time_Duration__WEBPACK_IMPORTED_MODULE_8__["default"](now - this._pageLoadTime).toIsoString(), newRTT, oldRtt);
    }
  }, {
    key: "recordNetworkTypeChangeUpdate",
    value: function recordNetworkTypeChangeUpdate(newNetworkType) {
      var now = Date.now();
      var oldNetworkType = this._lastNetworkStatistics.effectiveType;
      this._lastNetworkStatistics.effectiveType = newNetworkType;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_7__["default"].NetworkType,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          string: newNetworkType
        },
        previousValue: oldNetworkType ? {
          string: oldNetworkType
        } : undefined
      });
      this._logger.info('[%s] Network effective type has changed to [%s] from [%s]', new _time_Duration__WEBPACK_IMPORTED_MODULE_8__["default"](now - this._pageLoadTime).toIsoString(), newNetworkType, oldNetworkType);
    }
  }, {
    key: "recordNetworkDownlinkThroughputCapacityUpdate",
    value: function recordNetworkDownlinkThroughputCapacityUpdate(newCapacity) {
      var now = Date.now();
      var oldCapacity = this._lastNetworkStatistics.downlinkThroughputCapacity;
      this._lastNetworkStatistics.downlinkThroughputCapacity = newCapacity;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_7__["default"].DownlinkThroughputCapacity,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          float: newCapacity
        },
        previousValue: oldCapacity ? {
          float: oldCapacity
        } : undefined
      });
      this._logger.info('[%s] Network downlink throughput capacity changed to [%s] from [%s]', new _time_Duration__WEBPACK_IMPORTED_MODULE_8__["default"](now - this._pageLoadTime).toIsoString(), newCapacity, oldCapacity);
    }
  }]);
}();


/***/ }),

/***/ "./src/video/VideoTelemetry.ts":
/*!*************************************!*\
  !*** ./src/video/VideoTelemetry.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoTelemetry)
/* harmony export */ });
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _time_Duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../time/Duration */ "./src/time/Duration.ts");
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lang/Disposable */ "./src/lang/Disposable.ts");
/* harmony import */ var _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../metrics/MetricsType */ "./src/metrics/MetricsType.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lang/DisposableList */ "./src/lang/DisposableList.ts");



/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





var VideoTelemetry = /*#__PURE__*/function () {
  function VideoTelemetry(streamId, pageLoadTime, channelStartTime, metricsService) {
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, VideoTelemetry);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_pageLoadTime", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_channelStartTime", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger('StreamTelemetry'));
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_disposables", new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_7__["default"]());
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_streamId", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_metricsService", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_listenToFirstTime", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_listenForStall", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_listenForContinuation", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_timeToFirstFrame", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_channelCreationTimeToFirstFrame", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_startRecordingFirstFrame", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_videoStalled", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_lastProgress", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_videoResolution", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_clearTimeToFirstFrameListener", void 0);
    _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_clearRebufferingListener", void 0);
    this._streamId = streamId;
    this._pageLoadTime = pageLoadTime;
    this._channelStartTime = channelStartTime;
    this._metricsService = metricsService;
  }
  return _Users_nick_shin_WORK_JsSDK_git_zzMediaSource_player_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(VideoTelemetry, [{
    key: "setupListenerForTimeToFirstTime",
    value: function setupListenerForTimeToFirstTime(video) {
      var _this = this;
      this._startRecordingFirstFrame = Date.now();
      this._listenToFirstTime = function () {
        return _this.callTimeToFirstFrame();
      };
      video.addEventListener('loadeddata', this._listenToFirstTime);
      video.addEventListener('loadedmetadata', this._listenToFirstTime);
      this._clearTimeToFirstFrameListener = new _lang_Disposable__WEBPACK_IMPORTED_MODULE_5__["default"](function () {
        video.removeEventListener('loadeddata', _this._listenToFirstTime);
        video.removeEventListener('loadedmetadata', _this._listenToFirstTime);
      });
      this._disposables.add(this._clearTimeToFirstFrameListener);
    }
  }, {
    key: "setupListenerForRebuffering",
    value: function setupListenerForRebuffering(video) {
      var _this2 = this;
      this._listenForStall = function () {
        return _this2.onStall();
      };
      this._listenForContinuation = function (event) {
        return _this2.onContinuation(event, video);
      };
      video.addEventListener('stalled', this._listenForStall);
      video.addEventListener('pause', this._listenForStall);
      video.addEventListener('suspend', this._listenForStall);
      video.addEventListener('play', this._listenForContinuation);
      video.addEventListener('playing', this._listenForContinuation);
      video.addEventListener('progress', this._listenForContinuation);
      video.addEventListener('timeupdate', this._listenForContinuation);
      this._clearRebufferingListener = new _lang_Disposable__WEBPACK_IMPORTED_MODULE_5__["default"](function () {
        video.removeEventListener('stalled', _this2._listenForStall);
        video.removeEventListener('pause', _this2._listenForStall);
        video.removeEventListener('suspend', _this2._listenForStall);
        video.removeEventListener('play', _this2._listenForContinuation);
        video.removeEventListener('playing', _this2._listenForContinuation);
        video.removeEventListener('progress', _this2._listenForContinuation);
        video.removeEventListener('timeupdate', _this2._listenForContinuation);
      });
      this._disposables.add(this._clearRebufferingListener);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._disposables.dispose();
    }
  }, {
    key: "durationSincePageLoad",
    get: function get() {
      var now = Date.now();
      return new _time_Duration__WEBPACK_IMPORTED_MODULE_4__["default"](now - this._pageLoadTime).toIsoString();
    }
  }, {
    key: "callTimeToFirstFrame",
    value: function callTimeToFirstFrame() {
      var now = Date.now();
      this.pushTimeToFirstFrame(now);
      this.pushChannelCreationTimeToFirstFrame(now);
      this._clearTimeToFirstFrameListener.dispose();
    }
  }, {
    key: "pushTimeToFirstFrame",
    value: function pushTimeToFirstFrame(now) {
      this._timeToFirstFrame = now - this._startRecordingFirstFrame;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_6__["default"].TimeToFirstFrame,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          uint64: this._timeToFirstFrame
        },
        streamId: this._streamId
      });
      this._logger.info('[%s] [%s] First frame [%s]', this.durationSincePageLoad, this._streamId, new _time_Duration__WEBPACK_IMPORTED_MODULE_4__["default"](this._timeToFirstFrame).toIsoString());
    }
  }, {
    key: "pushChannelCreationTimeToFirstFrame",
    value: function pushChannelCreationTimeToFirstFrame(now) {
      this._channelCreationTimeToFirstFrame = now - this._channelStartTime;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_6__["default"].ChannelCreationTimeToFirstFrame,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          uint64: this._channelCreationTimeToFirstFrame
        },
        streamId: this._streamId
      });
      this._logger.info('[%s] [%s] Channel creation to first frame [%s]', this.durationSincePageLoad, this._streamId, new _time_Duration__WEBPACK_IMPORTED_MODULE_4__["default"](this._channelCreationTimeToFirstFrame).toIsoString());
    }
  }, {
    key: "onStall",
    value: function onStall() {
      if (this._videoStalled) {
        return;
      }
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_6__["default"].Stalled,
        runtime: (Date.now() - this._pageLoadTime) / 1000,
        streamId: this._streamId
      });
      this._videoStalled = Date.now();
      this._logger.info('[%s] [%s] [buffering] Stream has stalled', this.durationSincePageLoad, this._streamId);
    }
  }, {
    key: "onContinuation",
    value: function onContinuation(event, video) {
      if (!video.buffered) {
        return;
      }
      var bufferLength = video.buffered.length;
      var hasNotProgressedSinceLastProgressEvent = event.type === 'playing' || bufferLength > 0 ? (event.type === 'progress' || event.type === 'timeupdate') && video.buffered.end(bufferLength - 1) === this._lastProgress : true;
      if (!this._videoStalled || hasNotProgressedSinceLastProgressEvent) {
        return;
      }
      if (event.type === 'progress') {
        this._lastProgress = video.buffered.end(bufferLength - 1);
      }
      var timeSinceStop = Date.now() - this._videoStalled;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_6__["default"].Buffering,
        runtime: (Date.now() - this._pageLoadTime) / 1000,
        value: {
          uint64: timeSinceStop
        },
        streamId: this._streamId
      });
      this._logger.info('[%s] [%s] [buffering] Stream has recovered from stall after [%s]', this.durationSincePageLoad, this._streamId, new _time_Duration__WEBPACK_IMPORTED_MODULE_4__["default"](timeSinceStop).toIsoString());
      this._videoStalled = null;
    }
  }, {
    key: "onVideoResolutionChanges",
    value: function onVideoResolutionChanges(newResolution) {
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_6__["default"].ResolutionChanged,
        runtime: (Date.now() - this._pageLoadTime) / 1000,
        value: {
          string: newResolution
        },
        previousValue: this._videoResolution ? {
          string: this._videoResolution
        } : undefined,
        streamId: this._streamId
      });
      this._videoResolution = newResolution;
    }
  }]);
}();


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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ ((module) => {

function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _getPrototypeOf(t) {
  return (module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _getPrototypeOf(t);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && setPrototypeOf(t, e);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ ((module) => {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return assertThisInitialized(t);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];
var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(t, e) {
  return (module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _setPrototypeOf(t, e);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(r, e) {
  return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"channels": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************!*\
  !*** ./src/sdk/channels/index.ts ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChannelState: () => (/* reexport safe */ _ChannelState__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Channels: () => (/* reexport safe */ _Channels__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   SDK: () => (/* reexport safe */ _SDK__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _Channels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Channels */ "./src/sdk/channels/Channels.ts");
/* harmony import */ var _ChannelState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChannelState */ "./src/sdk/channels/ChannelState.ts");
/**
 * Copyright 2024 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





/* harmony default export */ __webpack_exports__["default"] = ({
  SDK: _SDK__WEBPACK_IMPORTED_MODULE_0__["default"],
  Channels: _Channels__WEBPACK_IMPORTED_MODULE_1__["default"],
  ChannelState: _ChannelState__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});