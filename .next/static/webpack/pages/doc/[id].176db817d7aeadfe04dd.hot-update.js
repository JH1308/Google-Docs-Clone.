self["webpackHotUpdate_N_E"]("pages/doc/[id]",{

/***/ "./components/TextEditor.js":
/*!**********************************!*\
  !*** ./components/TextEditor.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TextEditor; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Owner\\Documents\\visual stuido code\\google-docs\\my-project\\components\\TextEditor.js";



var Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()();
function TextEditor() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
_c = TextEditor;

var _c;

$RefreshReg$(_c, "TextEditor");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/dynamic.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/next-server/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
} // function dynamic<P = {}, O extends DynamicOptions>(options: O):


function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react["default"].createElement("p", null, error.message, /*#__PURE__*/_react["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options); // coming from build/babel/plugins/react-loadable-plugin.js

  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var LoadableContext = /*#__PURE__*/_react["default"].createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/next-server/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js


var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    webpack: null,
    modules: null
  }, options);
  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  var LoadableComponent = function LoadableComponent(props, ref) {
    _s();

    init();

    var context = _react["default"].useContext(_loadableContext.LoadableContext);

    var state = (0, _useSubscription.useSubscription)(subscription);

    _react["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return _react["default"].useMemo(function () {
      if (state.loading || state.error) {
        return /*#__PURE__*/_react["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return /*#__PURE__*/_react["default"].createElement(resolve(state.loaded), props);
      } else {
        return null;
      }
    }, [props, state]);
  };

  _s(LoadableComponent, "Bp87+qHhaUk8bOFGKxqLWPW1xR0=", true);

  LoadableComponent.preload = function () {
    return init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return /*#__PURE__*/_react["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts = this._opts;

      if (res.loading) {
        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      })["catch"](function (_err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _objectSpread(_objectSpread({}, this._state), {}, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }, partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

_c = Loadable;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolveInitializers, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolvePreload) {
    var res = function res() {
      initialized = true;
      return resolvePreload();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Loadable");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0RWRpdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9keW5hbWljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9sb2FkYWJsZS1jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9sb2FkYWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vY2pzL3VzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2Utc3Vic2NyaXB0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIkVkaXRvciIsImR5bmFtaWMiLCJUZXh0RWRpdG9yIiwiZXhwb3J0cyIsIm5vU1NSIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfbG9hZGFibGUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiaXNTZXJ2ZXJTaWRlIiwiTG9hZGFibGVJbml0aWFsaXplciIsImxvYWRhYmxlT3B0aW9ucyIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsImxvYWRpbmciLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJ0aW1lZE91dCIsImR5bmFtaWNPcHRpb25zIiwib3B0aW9ucyIsImxvYWRhYmxlRm4iLCJtZXNzYWdlIiwic3RhY2siLCJQcm9taXNlIiwibG9hZGVyIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiLCJMb2FkYWJsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiLCJfdXNlU3Vic2NyaXB0aW9uIiwiX2xvYWRhYmxlQ29udGV4dCIsIkFMTF9JTklUSUFMSVpFUlMiLCJSRUFEWV9JTklUSUFMSVpFUlMiLCJpbml0aWFsaXplZCIsImxvYWQiLCJwcm9taXNlIiwic3RhdGUiLCJsb2FkZWQiLCJ0aGVuIiwiZXJyIiwicmVzb2x2ZSIsImNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50IiwibG9hZEZuIiwib3B0cyIsIk9iamVjdCIsImFzc2lnbiIsImRlbGF5IiwidGltZW91dCIsInN1YnNjcmlwdGlvbiIsImluaXQiLCJzdWIiLCJMb2FkYWJsZVN1YnNjcmlwdGlvbiIsImdldEN1cnJlbnRWYWx1ZSIsImJpbmQiLCJzdWJzY3JpYmUiLCJyZXRyeSIsIm1vZHVsZUlkcyIsInB1c2giLCJpZHMiLCJtb2R1bGVJZCIsImluZGV4T2YiLCJMb2FkYWJsZUNvbXBvbmVudCIsInByb3BzIiwicmVmIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdWJzY3JpcHRpb24iLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsIm1vZHVsZU5hbWUiLCJ1c2VNZW1vIiwicHJlbG9hZCIsImZvcndhcmRSZWYiLCJfbG9hZEZuIiwiX29wdHMiLCJfY2FsbGJhY2tzIiwiU2V0IiwiX2RlbGF5IiwiX3RpbWVvdXQiLCJfcmVzIiwiX2NsZWFyVGltZW91dHMiLCJfc3RhdGUiLCJyZXMiLCJzZXRUaW1lb3V0IiwiX3VwZGF0ZSIsIl9lcnIiLCJwYXJ0aWFsIiwiY2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJhZGQiLCJMb2FkYWJsZSIsImZsdXNoSW5pdGlhbGl6ZXJzIiwiaW5pdGlhbGl6ZXJzIiwicHJvbWlzZXMiLCJsZW5ndGgiLCJwb3AiLCJhbGwiLCJwcmVsb2FkQWxsIiwicmVzb2x2ZUluaXRpYWxpemVycyIsInJlamVjdCIsInByZWxvYWRSZWFkeSIsInJlc29sdmVQcmVsb2FkIiwid2luZG93IiwiX19ORVhUX1BSRUxP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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQSxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxnQ0FBZ0M7O0FBRW5DO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDMUhhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsd0pBQWlFO0FBQ25FIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvYy9baWRdLjE3NmRiODE3ZDdhZWFkZmUwNGRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBcInJlYWN0LWRyYWZ0LXd5c2l3eWcvZGlzdC9yZWFjdC1kcmFmdC13eXNpd3lnLmNzc1wiO1xyXG5cclxuY29uc3QgRWRpdG9yID0gZHluYW1pYygpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0RWRpdG9yKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vU1NSPW5vU1NSO2V4cG9ydHMuZGVmYXVsdD1keW5hbWljO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfbG9hZGFibGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkYWJsZVwiKSk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCBpc1NlcnZlclNpZGU9dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnO2Z1bmN0aW9uIG5vU1NSKExvYWRhYmxlSW5pdGlhbGl6ZXIsbG9hZGFibGVPcHRpb25zKXsvLyBSZW1vdmluZyB3ZWJwYWNrIGFuZCBtb2R1bGVzIG1lYW5zIHJlYWN0LWxvYWRhYmxlIHdvbid0IHRyeSBwcmVsb2FkaW5nXG5kZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2s7ZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzOy8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgcmVhY3QtbG9hZGFibGUgZnJvbSBpbml0aWFsaXppbmcgb24gdGhlIHNlcnZlclxuaWYoIWlzU2VydmVyU2lkZSl7cmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTt9Y29uc3QgTG9hZGluZz1sb2FkYWJsZU9wdGlvbnMubG9hZGluZzsvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbnJldHVybigpPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nLHtlcnJvcjpudWxsLGlzTG9hZGluZzp0cnVlLHBhc3REZWxheTpmYWxzZSx0aW1lZE91dDpmYWxzZX0pO30vLyBmdW5jdGlvbiBkeW5hbWljPFAgPSB7fSwgTyBleHRlbmRzIER5bmFtaWNPcHRpb25zPihvcHRpb25zOiBPKTpcbmZ1bmN0aW9uIGR5bmFtaWMoZHluYW1pY09wdGlvbnMsb3B0aW9ucyl7bGV0IGxvYWRhYmxlRm49X2xvYWRhYmxlLmRlZmF1bHQ7bGV0IGxvYWRhYmxlT3B0aW9ucz17Ly8gQSBsb2FkaW5nIGNvbXBvbmVudCBpcyBub3QgcmVxdWlyZWQsIHNvIHdlIGRlZmF1bHQgaXRcbmxvYWRpbmc6KHtlcnJvcixpc0xvYWRpbmcscGFzdERlbGF5fSk9PntpZighcGFzdERlbGF5KXJldHVybiBudWxsO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYoaXNMb2FkaW5nKXtyZXR1cm4gbnVsbDt9aWYoZXJyb3Ipe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLG51bGwsZXJyb3IubWVzc2FnZSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCksZXJyb3Iuc3RhY2spO319cmV0dXJuIG51bGw7fX07Ly8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4vLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuLy8gVGhlIHJlYWN0LWxvYWRhYmxlIGJhYmVsIHBsdWdpbiB3aWxsIHR1cm4gZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpIGludG8gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4vLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XG5pZihkeW5hbWljT3B0aW9ucyBpbnN0YW5jZW9mIFByb21pc2Upe2xvYWRhYmxlT3B0aW9ucy5sb2FkZXI9KCk9PmR5bmFtaWNPcHRpb25zOy8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxufWVsc2UgaWYodHlwZW9mIGR5bmFtaWNPcHRpb25zPT09J2Z1bmN0aW9uJyl7bG9hZGFibGVPcHRpb25zLmxvYWRlcj1keW5hbWljT3B0aW9uczsvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbn1lbHNlIGlmKHR5cGVvZiBkeW5hbWljT3B0aW9ucz09PSdvYmplY3QnKXtsb2FkYWJsZU9wdGlvbnM9ey4uLmxvYWRhYmxlT3B0aW9ucywuLi5keW5hbWljT3B0aW9uc307fS8vIFN1cHBvcnQgZm9yIHBhc3Npbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7bG9hZGluZzogKCkgPT4gPHA+TG9hZGluZyBzb21ldGhpbmc8L3A+fSlcbmxvYWRhYmxlT3B0aW9ucz17Li4ubG9hZGFibGVPcHRpb25zLC4uLm9wdGlvbnN9Oy8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXG5pZihsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpe2xvYWRhYmxlT3B0aW9ucz17Li4ubG9hZGFibGVPcHRpb25zLC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZH07ZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZDt9Ly8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pXG5pZih0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzcj09PSdib29sZWFuJyl7aWYoIWxvYWRhYmxlT3B0aW9ucy5zc3Ipe2RlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO3JldHVybiBub1NTUihsb2FkYWJsZUZuLGxvYWRhYmxlT3B0aW9ucyk7fWRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO31yZXR1cm4gbG9hZGFibGVGbihsb2FkYWJsZU9wdGlvbnMpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5Mb2FkYWJsZUNvbnRleHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Y29uc3QgTG9hZGFibGVDb250ZXh0PS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KG51bGwpO2V4cG9ydHMuTG9hZGFibGVDb250ZXh0PUxvYWRhYmxlQ29udGV4dDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7TG9hZGFibGVDb250ZXh0LmRpc3BsYXlOYW1lPSdMb2FkYWJsZUNvbnRleHQnO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvYWRhYmxlLWNvbnRleHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VzZVN1YnNjcmlwdGlvbj1yZXF1aXJlKFwidXNlLXN1YnNjcmlwdGlvblwiKTt2YXIgX2xvYWRhYmxlQ29udGV4dD1yZXF1aXJlKFwiLi9sb2FkYWJsZS1jb250ZXh0XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9LyoqXG5AY29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQgSmFtZXMgS3lsZSA8bWVAdGhlamFtZXNreWxlLmNvbT5cbiBNSVQgTGljZW5zZVxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG5cIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbndpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbmRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xucGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG50aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbmluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG5OT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFXG5MSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXG5PRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbldJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFXG4qLyAvLyBodHRwczovL2dpdGh1Yi5jb20vamFtaWVidWlsZHMvcmVhY3QtbG9hZGFibGUvYmxvYi92NS41LjAvc3JjL2luZGV4LmpzXG4vLyBNb2RpZmllZCB0byBiZSBjb21wYXRpYmxlIHdpdGggd2VicGFjayA0IC8gTmV4dC5qc1xuY29uc3QgQUxMX0lOSVRJQUxJWkVSUz1bXTtjb25zdCBSRUFEWV9JTklUSUFMSVpFUlM9W107bGV0IGluaXRpYWxpemVkPWZhbHNlO2Z1bmN0aW9uIGxvYWQobG9hZGVyKXtsZXQgcHJvbWlzZT1sb2FkZXIoKTtsZXQgc3RhdGU9e2xvYWRpbmc6dHJ1ZSxsb2FkZWQ6bnVsbCxlcnJvcjpudWxsfTtzdGF0ZS5wcm9taXNlPXByb21pc2UudGhlbihsb2FkZWQ9PntzdGF0ZS5sb2FkaW5nPWZhbHNlO3N0YXRlLmxvYWRlZD1sb2FkZWQ7cmV0dXJuIGxvYWRlZDt9KS5jYXRjaChlcnI9PntzdGF0ZS5sb2FkaW5nPWZhbHNlO3N0YXRlLmVycm9yPWVycjt0aHJvdyBlcnI7fSk7cmV0dXJuIHN0YXRlO31mdW5jdGlvbiByZXNvbHZlKG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqLmRlZmF1bHQ6b2JqO31mdW5jdGlvbiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkRm4sb3B0aW9ucyl7bGV0IG9wdHM9T2JqZWN0LmFzc2lnbih7bG9hZGVyOm51bGwsbG9hZGluZzpudWxsLGRlbGF5OjIwMCx0aW1lb3V0Om51bGwsd2VicGFjazpudWxsLG1vZHVsZXM6bnVsbH0sb3B0aW9ucyk7bGV0IHN1YnNjcmlwdGlvbj1udWxsO2Z1bmN0aW9uIGluaXQoKXtpZighc3Vic2NyaXB0aW9uKXtjb25zdCBzdWI9bmV3IExvYWRhYmxlU3Vic2NyaXB0aW9uKGxvYWRGbixvcHRzKTtzdWJzY3JpcHRpb249e2dldEN1cnJlbnRWYWx1ZTpzdWIuZ2V0Q3VycmVudFZhbHVlLmJpbmQoc3ViKSxzdWJzY3JpYmU6c3ViLnN1YnNjcmliZS5iaW5kKHN1YikscmV0cnk6c3ViLnJldHJ5LmJpbmQoc3ViKSxwcm9taXNlOnN1Yi5wcm9taXNlLmJpbmQoc3ViKX07fXJldHVybiBzdWJzY3JpcHRpb24ucHJvbWlzZSgpO30vLyBTZXJ2ZXIgb25seVxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtBTExfSU5JVElBTElaRVJTLnB1c2goaW5pdCk7fS8vIENsaWVudCBvbmx5XG5pZighaW5pdGlhbGl6ZWQmJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmdHlwZW9mIG9wdHMud2VicGFjaz09PSdmdW5jdGlvbicpe2NvbnN0IG1vZHVsZUlkcz1vcHRzLndlYnBhY2soKTtSRUFEWV9JTklUSUFMSVpFUlMucHVzaChpZHM9Pntmb3IoY29uc3QgbW9kdWxlSWQgb2YgbW9kdWxlSWRzKXtpZihpZHMuaW5kZXhPZihtb2R1bGVJZCkhPT0tMSl7cmV0dXJuIGluaXQoKTt9fX0pO31jb25zdCBMb2FkYWJsZUNvbXBvbmVudD0ocHJvcHMscmVmKT0+e2luaXQoKTtjb25zdCBjb250ZXh0PV9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX2xvYWRhYmxlQ29udGV4dC5Mb2FkYWJsZUNvbnRleHQpO2NvbnN0IHN0YXRlPSgwLF91c2VTdWJzY3JpcHRpb24udXNlU3Vic2NyaXB0aW9uKShzdWJzY3JpcHRpb24pO19yZWFjdC5kZWZhdWx0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCgpPT4oe3JldHJ5OnN1YnNjcmlwdGlvbi5yZXRyeX0pLFtdKTtpZihjb250ZXh0JiZBcnJheS5pc0FycmF5KG9wdHMubW9kdWxlcykpe29wdHMubW9kdWxlcy5mb3JFYWNoKG1vZHVsZU5hbWU9Pntjb250ZXh0KG1vZHVsZU5hbWUpO30pO31yZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2lmKHN0YXRlLmxvYWRpbmd8fHN0YXRlLmVycm9yKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChvcHRzLmxvYWRpbmcse2lzTG9hZGluZzpzdGF0ZS5sb2FkaW5nLHBhc3REZWxheTpzdGF0ZS5wYXN0RGVsYXksdGltZWRPdXQ6c3RhdGUudGltZWRPdXQsZXJyb3I6c3RhdGUuZXJyb3IscmV0cnk6c3Vic2NyaXB0aW9uLnJldHJ5fSk7fWVsc2UgaWYoc3RhdGUubG9hZGVkKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZXNvbHZlKHN0YXRlLmxvYWRlZCkscHJvcHMpO31lbHNle3JldHVybiBudWxsO319LFtwcm9wcyxzdGF0ZV0pO307TG9hZGFibGVDb21wb25lbnQucHJlbG9hZD0oKT0+aW5pdCgpO0xvYWRhYmxlQ29tcG9uZW50LmRpc3BsYXlOYW1lPSdMb2FkYWJsZUNvbXBvbmVudCc7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoTG9hZGFibGVDb21wb25lbnQpO31jbGFzcyBMb2FkYWJsZVN1YnNjcmlwdGlvbntjb25zdHJ1Y3Rvcihsb2FkRm4sb3B0cyl7dGhpcy5fbG9hZEZuPWxvYWRGbjt0aGlzLl9vcHRzPW9wdHM7dGhpcy5fY2FsbGJhY2tzPW5ldyBTZXQoKTt0aGlzLl9kZWxheT1udWxsO3RoaXMuX3RpbWVvdXQ9bnVsbDt0aGlzLnJldHJ5KCk7fXByb21pc2UoKXtyZXR1cm4gdGhpcy5fcmVzLnByb21pc2U7fXJldHJ5KCl7dGhpcy5fY2xlYXJUaW1lb3V0cygpO3RoaXMuX3Jlcz10aGlzLl9sb2FkRm4odGhpcy5fb3B0cy5sb2FkZXIpO3RoaXMuX3N0YXRlPXtwYXN0RGVsYXk6ZmFsc2UsdGltZWRPdXQ6ZmFsc2V9O2NvbnN0e19yZXM6cmVzLF9vcHRzOm9wdHN9PXRoaXM7aWYocmVzLmxvYWRpbmcpe2lmKHR5cGVvZiBvcHRzLmRlbGF5PT09J251bWJlcicpe2lmKG9wdHMuZGVsYXk9PT0wKXt0aGlzLl9zdGF0ZS5wYXN0RGVsYXk9dHJ1ZTt9ZWxzZXt0aGlzLl9kZWxheT1zZXRUaW1lb3V0KCgpPT57dGhpcy5fdXBkYXRlKHtwYXN0RGVsYXk6dHJ1ZX0pO30sb3B0cy5kZWxheSk7fX1pZih0eXBlb2Ygb3B0cy50aW1lb3V0PT09J251bWJlcicpe3RoaXMuX3RpbWVvdXQ9c2V0VGltZW91dCgoKT0+e3RoaXMuX3VwZGF0ZSh7dGltZWRPdXQ6dHJ1ZX0pO30sb3B0cy50aW1lb3V0KTt9fXRoaXMuX3Jlcy5wcm9taXNlLnRoZW4oKCk9Pnt0aGlzLl91cGRhdGUoe30pO3RoaXMuX2NsZWFyVGltZW91dHMoKTt9KS5jYXRjaChfZXJyPT57dGhpcy5fdXBkYXRlKHt9KTt0aGlzLl9jbGVhclRpbWVvdXRzKCk7fSk7dGhpcy5fdXBkYXRlKHt9KTt9X3VwZGF0ZShwYXJ0aWFsKXt0aGlzLl9zdGF0ZT17Li4udGhpcy5fc3RhdGUsZXJyb3I6dGhpcy5fcmVzLmVycm9yLGxvYWRlZDp0aGlzLl9yZXMubG9hZGVkLGxvYWRpbmc6dGhpcy5fcmVzLmxvYWRpbmcsLi4ucGFydGlhbH07dGhpcy5fY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2s9PmNhbGxiYWNrKCkpO31fY2xlYXJUaW1lb3V0cygpe2NsZWFyVGltZW91dCh0aGlzLl9kZWxheSk7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO31nZXRDdXJyZW50VmFsdWUoKXtyZXR1cm4gdGhpcy5fc3RhdGU7fXN1YnNjcmliZShjYWxsYmFjayl7dGhpcy5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7cmV0dXJuKCk9Pnt0aGlzLl9jYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTt9O319ZnVuY3Rpb24gTG9hZGFibGUob3B0cyl7cmV0dXJuIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWQsb3B0cyk7fWZ1bmN0aW9uIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycyxpZHMpe2xldCBwcm9taXNlcz1bXTt3aGlsZShpbml0aWFsaXplcnMubGVuZ3RoKXtsZXQgaW5pdD1pbml0aWFsaXplcnMucG9wKCk7cHJvbWlzZXMucHVzaChpbml0KGlkcykpO31yZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCk9PntpZihpbml0aWFsaXplcnMubGVuZ3RoKXtyZXR1cm4gZmx1c2hJbml0aWFsaXplcnMoaW5pdGlhbGl6ZXJzLGlkcyk7fX0pO31Mb2FkYWJsZS5wcmVsb2FkQWxsPSgpPT57cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlSW5pdGlhbGl6ZXJzLHJlamVjdCk9PntmbHVzaEluaXRpYWxpemVycyhBTExfSU5JVElBTElaRVJTKS50aGVuKHJlc29sdmVJbml0aWFsaXplcnMscmVqZWN0KTt9KTt9O0xvYWRhYmxlLnByZWxvYWRSZWFkeT0oaWRzPVtdKT0+e3JldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlUHJlbG9hZD0+e2NvbnN0IHJlcz0oKT0+e2luaXRpYWxpemVkPXRydWU7cmV0dXJuIHJlc29sdmVQcmVsb2FkKCk7fTsvLyBXZSBhbHdheXMgd2lsbCByZXNvbHZlLCBlcnJvcnMgc2hvdWxkIGJlIGhhbmRsZWQgd2l0aGluIGxvYWRpbmcgVUlzLlxuZmx1c2hJbml0aWFsaXplcnMoUkVBRFlfSU5JVElBTElaRVJTLGlkcykudGhlbihyZXMscmVzKTt9KTt9O2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7d2luZG93Ll9fTkVYVF9QUkVMT0FEUkVBRFk9TG9hZGFibGUucHJlbG9hZFJlYWR5O312YXIgX2RlZmF1bHQ9TG9hZGFibGU7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9hZGFibGUuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2R5bmFtaWMnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHZ1bmRlZmluZWRcbiAqIHVzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vXG4vLyBJbiBvcmRlciB0byBhdm9pZCByZW1vdmluZyBhbmQgcmUtYWRkaW5nIHN1YnNjcmlwdGlvbnMgZWFjaCB0aW1lIHRoaXMgaG9vayBpcyBjYWxsZWQsXG4vLyB0aGUgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhpcyBob29rIHNob3VsZCBiZSBtZW1vaXplZCBpbiBzb21lIHdheeKAk1xuLy8gZWl0aGVyIGJ5IHdyYXBwaW5nIHRoZSBlbnRpcmUgcGFyYW1zIG9iamVjdCB3aXRoIHVzZU1lbW8oKVxuLy8gb3IgYnkgd3JhcHBpbmcgdGhlIGluZGl2aWR1YWwgY2FsbGJhY2tzIHdpdGggdXNlQ2FsbGJhY2soKS5cblxuZnVuY3Rpb24gdXNlU3Vic2NyaXB0aW9uKF9yZWYpIHtcbiAgdmFyIGdldEN1cnJlbnRWYWx1ZSA9IF9yZWYuZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlID0gX3JlZi5zdWJzY3JpYmU7XG5cbiAgLy8gUmVhZCB0aGUgY3VycmVudCB2YWx1ZSBmcm9tIG91ciBzdWJzY3JpcHRpb24uXG4gIC8vIFdoZW4gdGhpcyB2YWx1ZSBjaGFuZ2VzLCB3ZSdsbCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gYWxzbyBzdG9yZSB0aGUgaG9vayBwYXJhbXMgc28gdGhhdCB3ZSBjYW4gY2hlY2sgZm9yIHN0YWxlbmVzcy5cbiAgLy8gKFNlZSB0aGUgY29tbWVudCBpbiBjaGVja0ZvclVwZGF0ZXMoKSBiZWxvdyBmb3IgbW9yZSBpbmZvLilcbiAgdmFyIF91c2VTdGF0ZSA9IHJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiBnZXRDdXJyZW50VmFsdWUoKVxuICAgIH07XG4gIH0pLFxuICAgICAgc3RhdGUgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgdmFsdWVUb1JldHVybiA9IHN0YXRlLnZhbHVlOyAvLyBJZiBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZCBzaW5jZSBvdXIgbGFzdCByZW5kZXIsIHNjaGVkdWxlIGFuIHVwZGF0ZSB3aXRoIGl0cyBjdXJyZW50IHZhbHVlLlxuXG4gIGlmIChzdGF0ZS5nZXRDdXJyZW50VmFsdWUgIT09IGdldEN1cnJlbnRWYWx1ZSB8fCBzdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgIC8vIElmIHRoZSBzdWJzY3JpcHRpb24gaGFzIGJlZW4gdXBkYXRlZCwgd2UnbGwgc2NoZWR1bGUgYW5vdGhlciB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgICAvLyBSZWFjdCB3aWxsIHByb2Nlc3MgdGhpcyB1cGRhdGUgaW1tZWRpYXRlbHksIHNvIHRoZSBvbGQgc3Vic2NyaXB0aW9uIHZhbHVlIHdvbid0IGJlIGNvbW1pdHRlZC5cbiAgICAvLyBJdCBpcyBzdGlsbCBuaWNlIHRvIGF2b2lkIHJldHVybmluZyBhIG1pc21hdGNoZWQgdmFsdWUgdGhvdWdoLCBzbyBsZXQncyBvdmVycmlkZSB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIHZhbHVlVG9SZXR1cm4gPSBnZXRDdXJyZW50VmFsdWUoKTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBnZXRDdXJyZW50VmFsdWU6IGdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgICAgdmFsdWU6IHZhbHVlVG9SZXR1cm5cbiAgICB9KTtcbiAgfSAvLyBEaXNwbGF5IHRoZSBjdXJyZW50IHZhbHVlIGZvciB0aGlzIGhvb2sgaW4gUmVhY3QgRGV2VG9vbHMuXG5cblxuICByZWFjdC51c2VEZWJ1Z1ZhbHVlKHZhbHVlVG9SZXR1cm4pOyAvLyBJdCBpcyBpbXBvcnRhbnQgbm90IHRvIHN1YnNjcmliZSB3aGlsZSByZW5kZXJpbmcgYmVjYXVzZSB0aGlzIGNhbiBsZWFkIHRvIG1lbW9yeSBsZWFrcy5cbiAgLy8gKExlYXJuIG1vcmUgYXQgcmVhY3Rqcy5vcmcvZG9jcy9zdHJpY3QtbW9kZS5odG1sI2RldGVjdGluZy11bmV4cGVjdGVkLXNpZGUtZWZmZWN0cylcbiAgLy8gSW5zdGVhZCwgd2Ugd2FpdCB1bnRpbCB0aGUgY29tbWl0IHBoYXNlIHRvIGF0dGFjaCBvdXIgaGFuZGxlci5cbiAgLy9cbiAgLy8gV2UgaW50ZW50aW9uYWxseSB1c2UgYSBwYXNzaXZlIGVmZmVjdCAodXNlRWZmZWN0KSByYXRoZXIgdGhhbiBhIHN5bmNocm9ub3VzIG9uZSAodXNlTGF5b3V0RWZmZWN0KVxuICAvLyBzbyB0aGF0IHdlIGRvbid0IHN0cmV0Y2ggdGhlIGNvbW1pdCBwaGFzZS5cbiAgLy8gVGhpcyBhbHNvIGhhcyBhbiBhZGRlZCBiZW5lZml0IHdoZW4gbXVsdGlwbGUgY29tcG9uZW50cyBhcmUgc3Vic2NyaWJlZCB0byB0aGUgc2FtZSBzb3VyY2U6XG4gIC8vIEl0IGFsbG93cyBlYWNoIG9mIHRoZSBldmVudCBoYW5kbGVycyB0byBzYWZlbHkgc2NoZWR1bGUgd29yayB3aXRob3V0IHBvdGVudGlhbGx5IHJlbW92aW5nIGFuIGFub3RoZXIgaGFuZGxlci5cbiAgLy8gKExlYXJuIG1vcmUgYXQgaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL2sweXZyNTk3MG8pXG5cbiAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcblxuICAgIHZhciBjaGVja0ZvclVwZGF0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgZXZlbiBhZnRlciBiZWluZyB1bnN1YnNjcmliZWQsXG4gICAgICAvLyBpZiBpdCdzIHJlbW92ZWQgYXMgYSByZXN1bHQgb2YgYSBzdWJzY3JpcHRpb24gZXZlbnQvdXBkYXRlLlxuICAgICAgLy8gSW4gdGhpcyBjYXNlLCBSZWFjdCB3aWxsIGxvZyBhIERFViB3YXJuaW5nIGFib3V0IGFuIHVwZGF0ZSBmcm9tIGFuIHVubW91bnRlZCBjb21wb25lbnQuXG4gICAgICAvLyBXZSBjYW4gYXZvaWQgdHJpZ2dlcmluZyB0aGF0IHdhcm5pbmcgd2l0aCB0aGlzIGNoZWNrLlxuICAgICAgaWYgKGRpZFVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gV2UgdXNlIGEgc3RhdGUgdXBkYXRlciBmdW5jdGlvbiB0byBhdm9pZCBzY2hlZHVsaW5nIHdvcmsgZm9yIGEgc3RhbGUgc291cmNlLlxuICAgICAgLy8gSG93ZXZlciBpdCdzIGltcG9ydGFudCB0byBlYWdlcmx5IHJlYWQgdGhlIGN1cnJlbnRseSB2YWx1ZSxcbiAgICAgIC8vIHNvIHRoYXQgYWxsIHNjaGVkdWxlZCB3b3JrIHNoYXJlcyB0aGUgc2FtZSB2YWx1ZSAoaW4gdGhlIGV2ZW50IG9mIG11bHRpcGxlIHN1YnNjcmlwdGlvbnMpLlxuICAgICAgLy8gVGhpcyBhdm9pZHMgdmlzdWFsIFwidGVhcmluZ1wiIHdoZW4gYSBtdXRhdGlvbiBoYXBwZW5zIGR1cmluZyBhIChjb25jdXJyZW50KSByZW5kZXIuXG5cblxuICAgICAgdmFyIHZhbHVlID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgICBzZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIC8vIElnbm9yZSB2YWx1ZXMgZnJvbSBzdGFsZSBzb3VyY2VzIVxuICAgICAgICAvLyBTaW5jZSB3ZSBzdWJzY3JpYmUgYW4gdW5zdWJzY3JpYmUgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAgICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGZvciBhIHN0YWxlIChwcmV2aW91cykgc3Vic2NyaXB0aW9uLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGF2b2lkcyBzY2hlZHVsaW5nIGFuIHVwZGF0ZSBmb3IgdGhhdCBzdGFsZSBzdWJzY3JpcHRpb24uXG4gICAgICAgIGlmIChwcmV2U3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgcHJldlN0YXRlLnN1YnNjcmliZSAhPT0gc3Vic2NyaWJlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfSAvLyBTb21lIHN1YnNjcmlwdGlvbnMgd2lsbCBhdXRvLWludm9rZSB0aGUgaGFuZGxlciwgZXZlbiBpZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQuXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZCwgbm8gdXBkYXRlIGlzIG5lZWRlZC5cbiAgICAgICAgLy8gUmV0dXJuIHN0YXRlIGFzLWlzIHNvIFJlYWN0IGNhbiBiYWlsIG91dCBhbmQgYXZvaWQgYW4gdW5uZWNlc3NhcnkgcmVuZGVyLlxuXG5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoY2hlY2tGb3JVcGRhdGVzKTsgLy8gQmVjYXVzZSB3ZSdyZSBzdWJzY3JpYmluZyBpbiBhIHBhc3NpdmUgZWZmZWN0LFxuICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBhbiB1cGRhdGUgaGFzIG9jY3VycmVkIGJldHdlZW4gcmVuZGVyIGFuZCBvdXIgZWZmZWN0IGhhbmRsZXIuXG4gICAgLy8gQ2hlY2sgZm9yIHRoaXMgYW5kIHNjaGVkdWxlIGFuIHVwZGF0ZSBpZiB3b3JrIGhhcyBvY2N1cnJlZC5cblxuICAgIGNoZWNrRm9yVXBkYXRlcygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtnZXRDdXJyZW50VmFsdWUsIHN1YnNjcmliZV0pOyAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgZm9yIG91ciBjYWxsZXIgdG8gdXNlIHdoaWxlIHJlbmRlcmluZy5cblxuICByZXR1cm4gdmFsdWVUb1JldHVybjtcbn1cblxuZXhwb3J0cy51c2VTdWJzY3JpcHRpb24gPSB1c2VTdWJzY3JpcHRpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9