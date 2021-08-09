(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
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

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

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

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
}

_c = Head;
var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

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

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Owner_Documents_visual_stuido_code_google_docs_my_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/tailwind.css */ "./node_modules/@material-tailwind/react/tailwind.css");
/* harmony import */ var _material_tailwind_react_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Owner\\Documents\\visual stuido code\\google-docs\\my-project\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Owner_Documents_visual_stuido_code_google_docs_my_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_client__WEBPACK_IMPORTED_MODULE_5__.Provider, {
      session: pageProps.session,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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

/***/ "./node_modules/next-auth/dist/client/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/next-auth/dist/client/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useSession = useSession;
exports.session = exports.getSession = getSession;
exports.csrfToken = exports.getCsrfToken = getCsrfToken;
exports.providers = exports.getProviders = getProviders;
exports.signin = exports.signIn = signIn;
exports.signout = exports.signOut = signOut;
exports.options = exports.setOptions = setOptions;
exports.Provider = Provider;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next-auth/node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _logger2 = _interopRequireWildcard(__webpack_require__(/*! ../lib/logger */ "./node_modules/next-auth/dist/lib/logger.js"));

var _parseUrl = _interopRequireDefault(__webpack_require__(/*! ../lib/parse-url */ "./node_modules/next-auth/dist/lib/parse-url.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __NEXTAUTH = {
  baseUrl: (0, _parseUrl.default)(process.env.NEXTAUTH_URL || process.env.VERCEL_URL).baseUrl,
  basePath: (0, _parseUrl.default)(process.env.NEXTAUTH_URL).basePath,
  baseUrlServer: (0, _parseUrl.default)(process.env.NEXTAUTH_URL_INTERNAL || process.env.NEXTAUTH_URL || process.env.VERCEL_URL).baseUrl,
  basePathServer: (0, _parseUrl.default)(process.env.NEXTAUTH_URL_INTERNAL || process.env.NEXTAUTH_URL).basePath,
  keepAlive: 0,
  clientMaxAge: 0,
  _clientLastSync: 0,
  _clientSyncTimer: null,
  _eventListenersAdded: false,
  _clientSession: undefined,
  _getSession: function _getSession() {}
};
var logger = (0, _logger2.proxyLogger)(_logger2.default, __NEXTAUTH.basePath);
var broadcast = BroadcastChannel();

if (typeof window !== "undefined" && !__NEXTAUTH._eventListenersAdded) {
  __NEXTAUTH._eventListenersAdded = true;
  broadcast.receive(function () {
    return __NEXTAUTH._getSession({
      event: "storage"
    });
  });
  document.addEventListener("visibilitychange", function () {
    !document.hidden && __NEXTAUTH._getSession({
      event: "visibilitychange"
    });
  }, false);
}

var SessionContext = (0, _react.createContext)();

function useSession(session) {
  var context = (0, _react.useContext)(SessionContext);
  if (context) return context;
  return _useSessionHook(session);
}

function _useSessionHook(session) {
  var _useState = (0, _react.useState)(session),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(!data),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  (0, _react.useEffect)(function () {
    __NEXTAUTH._getSession = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee() {
      var _ref2,
          _ref2$event,
          event,
          triggredByEvent,
          triggeredByStorageEvent,
          clientMaxAge,
          clientLastSync,
          currentTime,
          clientSession,
          newClientSessionData,
          _args = arguments;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref2$event = _ref2.event, event = _ref2$event === void 0 ? null : _ref2$event;
              _context.prev = 1;
              triggredByEvent = event !== null;
              triggeredByStorageEvent = event === "storage";
              clientMaxAge = __NEXTAUTH.clientMaxAge;
              clientLastSync = parseInt(__NEXTAUTH._clientLastSync);
              currentTime = _now();
              clientSession = __NEXTAUTH._clientSession;

              if (!(!triggeredByStorageEvent && clientSession !== undefined)) {
                _context.next = 19;
                break;
              }

              if (!(clientMaxAge === 0 && triggredByEvent !== true)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return");

            case 13:
              if (!(clientMaxAge > 0 && clientSession === null)) {
                _context.next = 17;
                break;
              }

              return _context.abrupt("return");

            case 17:
              if (!(clientMaxAge > 0 && currentTime < clientLastSync + clientMaxAge)) {
                _context.next = 19;
                break;
              }

              return _context.abrupt("return");

            case 19:
              if (clientSession === undefined) {
                __NEXTAUTH._clientSession = null;
              }

              __NEXTAUTH._clientLastSync = _now();
              _context.next = 23;
              return getSession({
                triggerEvent: !triggeredByStorageEvent
              });

            case 23:
              newClientSessionData = _context.sent;
              __NEXTAUTH._clientSession = newClientSessionData;
              setData(newClientSessionData);
              setLoading(false);
              _context.next = 33;
              break;

            case 29:
              _context.prev = 29;
              _context.t0 = _context["catch"](1);
              logger.error("CLIENT_USE_SESSION_ERROR", _context.t0);
              setLoading(false);

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 29]]);
    }));

    __NEXTAUTH._getSession();
  });
  return [data, loading];
}

function getSession(_x) {
  return _getSession2.apply(this, arguments);
}

function _getSession2() {
  _getSession2 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee4(ctx) {
    var _ctx$triggerEvent;

    var session;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _fetchData("session", ctx);

          case 2:
            session = _context4.sent;

            if ((_ctx$triggerEvent = ctx === null || ctx === void 0 ? void 0 : ctx.triggerEvent) !== null && _ctx$triggerEvent !== void 0 ? _ctx$triggerEvent : true) {
              broadcast.post({
                event: "session",
                data: {
                  trigger: "getSession"
                }
              });
            }

            return _context4.abrupt("return", session);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getSession2.apply(this, arguments);
}

function getCsrfToken(_x2) {
  return _getCsrfToken.apply(this, arguments);
}

function _getCsrfToken() {
  _getCsrfToken = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee5(ctx) {
    var _yield$_fetchData;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _fetchData("csrf", ctx);

          case 2:
            _context5.t1 = _yield$_fetchData = _context5.sent;
            _context5.t0 = _context5.t1 === null;

            if (_context5.t0) {
              _context5.next = 6;
              break;
            }

            _context5.t0 = _yield$_fetchData === void 0;

          case 6:
            if (!_context5.t0) {
              _context5.next = 10;
              break;
            }

            _context5.t2 = void 0;
            _context5.next = 11;
            break;

          case 10:
            _context5.t2 = _yield$_fetchData.csrfToken;

          case 11:
            return _context5.abrupt("return", _context5.t2);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getCsrfToken.apply(this, arguments);
}

function getProviders() {
  return _getProviders.apply(this, arguments);
}

function _getProviders() {
  _getProviders = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee6() {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _fetchData("providers");

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getProviders.apply(this, arguments);
}

function signIn(_x3) {
  return _signIn.apply(this, arguments);
}

function _signIn() {
  _signIn = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee7(provider) {
    var options,
        authorizationParams,
        _options$callbackUrl,
        callbackUrl,
        _options$redirect,
        redirect,
        baseUrl,
        providers,
        isCredentials,
        isEmail,
        isSupportingReturn,
        signInUrl,
        _signInUrl,
        res,
        data,
        _data$url,
        url,
        error,
        _args7 = arguments;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            options = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
            authorizationParams = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {};
            _options$callbackUrl = options.callbackUrl, callbackUrl = _options$callbackUrl === void 0 ? window.location.href : _options$callbackUrl, _options$redirect = options.redirect, redirect = _options$redirect === void 0 ? true : _options$redirect;
            baseUrl = _apiBaseUrl();
            _context7.next = 6;
            return getProviders();

          case 6:
            providers = _context7.sent;

            if (providers) {
              _context7.next = 9;
              break;
            }

            return _context7.abrupt("return", window.location.replace("".concat(baseUrl, "/error")));

          case 9:
            if (provider in providers) {
              _context7.next = 11;
              break;
            }

            return _context7.abrupt("return", window.location.replace("".concat(baseUrl, "/signin?callbackUrl=").concat(encodeURIComponent(callbackUrl))));

          case 11:
            isCredentials = providers[provider].type === "credentials";
            isEmail = providers[provider].type === "email";
            isSupportingReturn = isCredentials || isEmail;
            signInUrl = isCredentials ? "".concat(baseUrl, "/callback/").concat(provider) : "".concat(baseUrl, "/signin/").concat(provider);
            _signInUrl = "".concat(signInUrl, "?").concat(new URLSearchParams(authorizationParams));
            _context7.t0 = fetch;
            _context7.t1 = _signInUrl;
            _context7.t2 = {
              "Content-Type": "application/x-www-form-urlencoded"
            };
            _context7.t3 = URLSearchParams;
            _context7.t4 = _objectSpread;
            _context7.t5 = _objectSpread({}, options);
            _context7.t6 = {};
            _context7.next = 25;
            return getCsrfToken();

          case 25:
            _context7.t7 = _context7.sent;
            _context7.t8 = callbackUrl;
            _context7.t9 = {
              csrfToken: _context7.t7,
              callbackUrl: _context7.t8,
              json: true
            };
            _context7.t10 = (0, _context7.t4)(_context7.t5, _context7.t6, _context7.t9);
            _context7.t11 = new _context7.t3(_context7.t10);
            _context7.t12 = {
              method: "post",
              headers: _context7.t2,
              body: _context7.t11
            };
            _context7.next = 33;
            return (0, _context7.t0)(_context7.t1, _context7.t12);

          case 33:
            res = _context7.sent;
            _context7.next = 36;
            return res.json();

          case 36:
            data = _context7.sent;

            if (!(redirect || !isSupportingReturn)) {
              _context7.next = 42;
              break;
            }

            url = (_data$url = data.url) !== null && _data$url !== void 0 ? _data$url : callbackUrl;
            window.location.replace(url);
            if (url.includes("#")) window.location.reload();
            return _context7.abrupt("return");

          case 42:
            error = new URL(data.url).searchParams.get("error");

            if (!res.ok) {
              _context7.next = 46;
              break;
            }

            _context7.next = 46;
            return __NEXTAUTH._getSession({
              event: "storage"
            });

          case 46:
            return _context7.abrupt("return", {
              error: error,
              status: res.status,
              ok: res.ok,
              url: error ? null : data.url
            });

          case 47:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _signIn.apply(this, arguments);
}

function signOut() {
  return _signOut.apply(this, arguments);
}

function _signOut() {
  _signOut = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee8() {
    var options,
        _options$callbackUrl2,
        callbackUrl,
        _options$redirect2,
        redirect,
        baseUrl,
        fetchOptions,
        res,
        data,
        _data$url2,
        url,
        _args8 = arguments;

    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            options = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
            _options$callbackUrl2 = options.callbackUrl, callbackUrl = _options$callbackUrl2 === void 0 ? window.location.href : _options$callbackUrl2, _options$redirect2 = options.redirect, redirect = _options$redirect2 === void 0 ? true : _options$redirect2;
            baseUrl = _apiBaseUrl();
            _context8.t0 = {
              "Content-Type": "application/x-www-form-urlencoded"
            };
            _context8.t1 = URLSearchParams;
            _context8.next = 7;
            return getCsrfToken();

          case 7:
            _context8.t2 = _context8.sent;
            _context8.t3 = callbackUrl;
            _context8.t4 = {
              csrfToken: _context8.t2,
              callbackUrl: _context8.t3,
              json: true
            };
            _context8.t5 = new _context8.t1(_context8.t4);
            fetchOptions = {
              method: "post",
              headers: _context8.t0,
              body: _context8.t5
            };
            _context8.next = 14;
            return fetch("".concat(baseUrl, "/signout"), fetchOptions);

          case 14:
            res = _context8.sent;
            _context8.next = 17;
            return res.json();

          case 17:
            data = _context8.sent;
            broadcast.post({
              event: "session",
              data: {
                trigger: "signout"
              }
            });

            if (!redirect) {
              _context8.next = 24;
              break;
            }

            url = (_data$url2 = data.url) !== null && _data$url2 !== void 0 ? _data$url2 : callbackUrl;
            window.location.replace(url);
            if (url.includes("#")) window.location.reload();
            return _context8.abrupt("return");

          case 24:
            _context8.next = 26;
            return __NEXTAUTH._getSession({
              event: "storage"
            });

          case 26:
            return _context8.abrupt("return", data);

          case 27:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _signOut.apply(this, arguments);
}

function setOptions() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      baseUrl = _ref3.baseUrl,
      basePath = _ref3.basePath,
      clientMaxAge = _ref3.clientMaxAge,
      keepAlive = _ref3.keepAlive;

  if (baseUrl) __NEXTAUTH.baseUrl = baseUrl;
  if (basePath) __NEXTAUTH.basePath = basePath;
  if (clientMaxAge) __NEXTAUTH.clientMaxAge = clientMaxAge;

  if (keepAlive) {
    __NEXTAUTH.keepAlive = keepAlive;
    if (typeof window === "undefined") return;

    if (__NEXTAUTH._clientSyncTimer !== null) {
      clearTimeout(__NEXTAUTH._clientSyncTimer);
    }

    __NEXTAUTH._clientSyncTimer = setTimeout((0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (__NEXTAUTH._clientSession) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.next = 4;
              return __NEXTAUTH._getSession({
                event: "timer"
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })), keepAlive * 1000);
  }
}

function Provider(_ref5) {
  var children = _ref5.children,
      session = _ref5.session,
      options = _ref5.options;
  setOptions(options);
  return (0, _react.createElement)(SessionContext.Provider, {
    value: useSession(session)
  }, children);
}

function _fetchData(_x4) {
  return _fetchData2.apply(this, arguments);
}

function _fetchData2() {
  _fetchData2 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee9(path) {
    var _ref7,
        ctx,
        _ref7$req,
        req,
        baseUrl,
        options,
        res,
        data,
        _args9 = arguments;

    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _ref7 = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {}, ctx = _ref7.ctx, _ref7$req = _ref7.req, req = _ref7$req === void 0 ? ctx === null || ctx === void 0 ? void 0 : ctx.req : _ref7$req;
            _context9.prev = 1;
            _context9.next = 4;
            return _apiBaseUrl();

          case 4:
            baseUrl = _context9.sent;
            options = req ? {
              headers: {
                cookie: req.headers.cookie
              }
            } : {};
            _context9.next = 8;
            return fetch("".concat(baseUrl, "/").concat(path), options);

          case 8:
            res = _context9.sent;
            _context9.next = 11;
            return res.json();

          case 11:
            data = _context9.sent;

            if (res.ok) {
              _context9.next = 14;
              break;
            }

            throw data;

          case 14:
            return _context9.abrupt("return", Object.keys(data).length > 0 ? data : null);

          case 17:
            _context9.prev = 17;
            _context9.t0 = _context9["catch"](1);
            logger.error("CLIENT_FETCH_ERROR", path, _context9.t0);
            return _context9.abrupt("return", null);

          case 21:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 17]]);
  }));
  return _fetchData2.apply(this, arguments);
}

function _apiBaseUrl() {
  if (typeof window === "undefined") {
    if (!process.env.NEXTAUTH_URL) {
      logger.warn("NEXTAUTH_URL", "NEXTAUTH_URL environment variable not set");
    }

    return "".concat(__NEXTAUTH.baseUrlServer).concat(__NEXTAUTH.basePathServer);
  }

  return __NEXTAUTH.basePath;
}

function _now() {
  return Math.floor(Date.now() / 1000);
}

function BroadcastChannel() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "nextauth.message";
  return {
    receive: function receive(onReceive) {
      if (typeof window === "undefined") return;
      window.addEventListener("storage", function () {
        var _ref6 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee3(event) {
          var message;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(event.key !== name)) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return");

                case 2:
                  message = JSON.parse(event.newValue);

                  if (!((message === null || message === void 0 ? void 0 : message.event) !== "session" || !(message !== null && message !== void 0 && message.data))) {
                    _context3.next = 5;
                    break;
                  }

                  return _context3.abrupt("return");

                case 5:
                  onReceive(message);

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
    },
    post: function post(message) {
      if (typeof localStorage === "undefined") return;
      localStorage.setItem(name, JSON.stringify(_objectSpread(_objectSpread({}, message), {}, {
        timestamp: _now()
      })));
    }
  };
}

var _default = {
  getSession: getSession,
  getCsrfToken: getCsrfToken,
  getProviders: getProviders,
  useSession: useSession,
  signIn: signIn,
  signOut: signOut,
  Provider: Provider,
  setOptions: setOptions,
  options: setOptions,
  session: getSession,
  providers: getProviders,
  csrfToken: getCsrfToken,
  signin: signIn,
  signout: signOut
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next-auth/dist/lib/logger.js":
/*!***************************************************!*\
  !*** ./node_modules/next-auth/dist/lib/logger.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setLogger = setLogger;
exports.proxyLogger = proxyLogger;
exports.default = void 0;
const _logger = {
  error(code, ...message) {
    console.error(`[next-auth][error][${code.toLowerCase()}]`, `\nhttps://next-auth.js.org/errors#${code.toLowerCase()}`, ...message);
  },

  warn(code, ...message) {
    console.warn(`[next-auth][warn][${code.toLowerCase()}]`, `\nhttps://next-auth.js.org/warnings#${code.toLowerCase()}`, ...message);
  },

  debug(code, ...message) {
    var _process, _process$env;

    if (!((_process = process) !== null && process !== void 0 && (_process$env = _process.env) !== null && _process$env !== void 0 && _process$env._NEXTAUTH_DEBUG)) return;
    console.log(`[next-auth][debug][${code.toLowerCase()}]`, ...message);
  }

};

function setLogger(newLogger = {}) {
  if (newLogger.error) _logger.error = newLogger.error;
  if (newLogger.warn) _logger.warn = newLogger.warn;
  if (newLogger.debug) _logger.debug = newLogger.debug;
}

var _default = _logger;
exports.default = _default;

function proxyLogger(logger = _logger, basePath) {
  try {
    if (typeof window === "undefined") {
      return logger;
    }

    const clientLogger = {};

    for (const level in logger) {
      clientLogger[level] = (code, ...message) => {
        _logger[level](code, ...message);

        const url = `${basePath}/_log`;
        const body = new URLSearchParams({
          level,
          code,
          message: JSON.stringify(message.map(m => {
            if (m instanceof Error) {
              return {
                name: m.name,
                message: m.message,
                stack: m.stack
              };
            }

            return m;
          }))
        });

        if (navigator.sendBeacon) {
          return navigator.sendBeacon(url, body);
        }

        return fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body
        });
      };
    }

    return clientLogger;
  } catch (_unused) {
    return _logger;
  }
}

/***/ }),

/***/ "./node_modules/next-auth/dist/lib/parse-url.js":
/*!******************************************************!*\
  !*** ./node_modules/next-auth/dist/lib/parse-url.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = parseUrl;

function parseUrl(url) {
  const defaultHost = 'http://localhost:3000';
  const defaultPath = '/api/auth';

  if (!url) {
    url = `${defaultHost}${defaultPath}`;
  }

  const protocol = url.startsWith('http:') ? 'http' : 'https';
  url = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const [_host, ..._path] = url.split('/');
  const baseUrl = _host ? `${protocol}://${_host}` : defaultHost;
  const basePath = _path.length > 0 ? `/${_path.join('/')}` : defaultPath;
  return {
    baseUrl,
    basePath
  };
}

/***/ }),

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next-auth/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next-auth/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \**************************************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next-auth/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next-auth/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \**************************************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/next-auth/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*********************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next-auth/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \********************************************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next-auth/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \***************************************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next-auth/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \*************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next-auth/node_modules/@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/next-auth/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \**************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/regenerator/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next-auth/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/@material-tailwind/react/tailwind.css":
/*!************************************************************!*\
  !*** ./node_modules/@material-tailwind/react/tailwind.css ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/@material-tailwind/react/tailwind.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/@material-tailwind/react/tailwind.css",
      function () {
        content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/@material-tailwind/react/tailwind.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css",
      function () {
        content = __webpack_require__(/*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles.css",
      function () {
        content = __webpack_require__(/*! !!./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/@material-tailwind/react/tailwind.css":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/@material-tailwind/react/tailwind.css ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tippy-box[data-placement^=top]>.tippy-svg-arrow{bottom:0}\n.tippy-box[data-placement^=top]>.tippy-svg-arrow:after,.tippy-box[data-placement^=top]>.tippy-svg-arrow>svg{top:16px;transform:rotate(180deg)}\n.tippy-box[data-placement^=bottom]>.tippy-svg-arrow{top:0}\n.tippy-box[data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}\n.tippy-box[data-placement^=left]>.tippy-svg-arrow{right:0}\n.tippy-box[data-placement^=left]>.tippy-svg-arrow:after,.tippy-box[data-placement^=left]>.tippy-svg-arrow>svg{transform:rotate(90deg);top:calc(50% - 3px);left:11px}\n.tippy-box[data-placement^=right]>.tippy-svg-arrow{left:0}\n.tippy-box[data-placement^=right]>.tippy-svg-arrow:after,.tippy-box[data-placement^=right]>.tippy-svg-arrow>svg{transform:rotate(-90deg);top:calc(50% - 3px);right:11px}\n.tippy-svg-arrow{width:16px;height:16px;fill:#333;text-align:initial}\n.tippy-svg-arrow,.tippy-svg-arrow>svg{position:absolute}\n.tippy-box[data-animation=scale][data-placement^=top]{transform-origin:bottom}\n.tippy-box[data-animation=scale][data-placement^=bottom]{transform-origin:top}\n.tippy-box[data-animation=scale][data-placement^=left]{transform-origin:right}\n.tippy-box[data-animation=scale][data-placement^=right]{transform-origin:left}\n.tippy-box[data-animation=scale][data-state=hidden]{transform:scale(.5);opacity:0}\n.tippy-box[data-animation=shift-away][data-state=hidden]{opacity:0}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=top]{transform:translateY(10px)}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=bottom]{transform:translateY(-10px)}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=left]{transform:translateX(10px)}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=right]{transform:translateX(-10px)}\n/*! tailwindcss v2.1.4 | MIT License | https://tailwindcss.com */\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n/*\nSections\n========\n*/\n/**\nRemove the margin in all browsers.\n*/\nbody {\n\tmargin: 0;\n}\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n\tfont-weight: bolder;\n}\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n\tfont-size: 80%;\n}\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\nsub {\n\tbottom: -0.25em;\n}\nsup {\n\ttop: -0.5em;\n}\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n/**\nRemove the inner border and padding in Firefox.\n*/\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n/**\nRestore the focus styles unset by the previous rule.\n*/\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n\tpadding: 0;\n}\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n\tvertical-align: baseline;\n}\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n\tdisplay: list-item;\n}\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/**\n * Tailwind custom reset styles\n */\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: Roboto, sans-serif; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #eeeeee; /* 2 */\n}\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #bdbdbd;\n}\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #bdbdbd;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #bdbdbd;\n}\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n*{--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(33, 150, 243, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000}\n.container{width:100%}\n@media (min-width: 640px){\n.container{max-width:640px}}\n@media (min-width: 768px){\n.container{max-width:768px}}\n@media (min-width: 1024px){\n.container{max-width:1024px}}\n@media (min-width: 1280px){\n.container{max-width:1280px}}\n@media (min-width: 1536px){\n.container{max-width:1536px}}\n.pointer-events-none{pointer-events:none}\n.pointer-events-auto{pointer-events:auto}\n.relative{position:relative}\n.absolute{position:absolute}\n.sticky{position:sticky}\n.fixed{position:fixed}\n.inset-0{top:0px;right:0px;bottom:0px;left:0px}\n.right-4{right:1rem}\n.top-1\\/3{top:33.333333%}\n.left-0{left:0px}\n.right-0{right:0px}\n.top-16{top:4rem}\n.-top-1\\.5{top:-0.375rem}\n.-top-0\\.5{top:-0.125rem}\n.-top-1{top:-0.25rem}\n.-top-0{top:0px}\n.top-1\\/4{top:25%}\n.top-1\\/2{top:50%}\n.right-2{right:0.5rem}\n.right-3{right:0.75rem}\n.top-2{top:0.5rem}\n.top-0{top:0px}\n.-bottom-4{bottom:-1rem}\n.-bottom-5{bottom:-1.25rem}\n.z-30{z-index:30}\n.z-20{z-index:20}\n.z-10{z-index:10}\n.z-50{z-index:50}\n.z-40{z-index:40}\n.float-left{float:left}\n.float-right{float:right}\n.mx-auto{margin-left:auto;margin-right:auto}\n.my-16{margin-top:4rem;margin-bottom:4rem}\n.my-4{margin-top:1rem;margin-bottom:1rem}\n.my-6{margin-top:1.5rem;margin-bottom:1.5rem}\n.mx-4{margin-left:1rem;margin-right:1rem}\n.mx-1{margin-left:0.25rem;margin-right:0.25rem}\n.my-8{margin-top:2rem;margin-bottom:2rem}\n.mx-5{margin-left:1.25rem;margin-right:1.25rem}\n.mb-16{margin-bottom:4rem}\n.mt-36{margin-top:9rem}\n.mt-10{margin-top:2.5rem}\n.mt-5{margin-top:1.25rem}\n.mt-16{margin-top:4rem}\n.mt-4{margin-top:1rem}\n.mt-20{margin-top:5rem}\n.mb-10{margin-bottom:2.5rem}\n.mt-8{margin-top:2rem}\n.mt-12{margin-top:3rem}\n.mb-24{margin-bottom:6rem}\n.mt-48{margin-top:12rem}\n.mr-auto{margin-right:auto}\n.ml-auto{margin-left:auto}\n.mb-6{margin-bottom:1.5rem}\n.mr-2{margin-right:0.5rem}\n.mt-2{margin-top:0.5rem}\n.mt-32{margin-top:8rem}\n.mt-6{margin-top:1.5rem}\n.mr-3{margin-right:0.75rem}\n.-mt-64{margin-top:-16rem}\n.mb-5{margin-bottom:1.25rem}\n.mb-12{margin-bottom:3rem}\n.mb-8{margin-bottom:2rem}\n.mb-4{margin-bottom:1rem}\n.mb-2{margin-bottom:0.5rem}\n.-mt-10{margin-top:-2.5rem}\n.-mt-9{margin-top:-2.25rem}\n.mb-1{margin-bottom:0.25rem}\n.ml-1{margin-left:0.25rem}\n.mr-1{margin-right:0.25rem}\n.mt-1{margin-top:0.25rem}\n.mb-0{margin-bottom:0px}\n.mt-3{margin-top:0.75rem}\n.ml-7{margin-left:1.75rem}\n.ml-2{margin-left:0.5rem}\n.mt-0{margin-top:0px}\n.mb-3{margin-bottom:0.75rem}\n.mr-4{margin-right:1rem}\n.-mt-12{margin-top:-3rem}\n.mr-10{margin-right:2.5rem}\n.block{display:block}\n.inline-block{display:inline-block}\n.flex{display:flex}\n.inline-flex{display:inline-flex}\n.grid{display:grid}\n.hidden{display:none}\n.h-16{height:4rem}\n.h-7{height:1.75rem}\n.h-10{height:2.5rem}\n.h-32{height:8rem}\n.h-20{height:5rem}\n.h-12{height:3rem}\n.h-6{height:1.5rem}\n.h-8{height:2rem}\n.h-24{height:6rem}\n.h-28{height:7rem}\n.h-5{height:1.25rem}\n.h-screen{height:100vh}\n.h-auto{height:auto}\n.h-full{height:100%}\n.h-9{height:2.25rem}\n.h-11{height:2.75rem}\n.h-4{height:1rem}\n.h-px{height:1px}\n.h-2{height:0.5rem}\n.w-full{width:100%}\n.w-40{width:10rem}\n.w-72{width:18rem}\n.w-\\[28rem\\]{width:28rem}\n.w-64{width:16rem}\n.w-96{width:24rem}\n.w-48{width:12rem}\n.w-16{width:4rem}\n.w-7{width:1.75rem}\n.w-32{width:8rem}\n.w-12{width:3rem}\n.w-10{width:2.5rem}\n.w-6{width:1.5rem}\n.w-8{width:2rem}\n.w-20{width:5rem}\n.w-24{width:6rem}\n.w-28{width:7rem}\n.w-5{width:1.25rem}\n.w-10\\/12{width:83.333333%}\n.w-4{width:1rem}\n.w-auto{width:auto}\n.w-14{width:3.5rem}\n.min-w-0{min-width:0px}\n.max-w-7xl{max-width:80rem}\n.max-w-full{max-width:100%}\n.max-w-max{max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}\n.max-w-sm{max-width:24rem}\n.max-w-6xl{max-width:72rem}\n.max-w-3xl{max-width:48rem}\n.max-w-xs{max-width:20rem}\n.flex-auto{flex:1 1 auto}\n.flex-1{flex:1 1 0%}\n.flex-none{flex:none}\n.flex-grow{flex-grow:1}\n.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}\n.-translate-y-1\\/3{--tw-translate-y:-33.333333%}\n.-translate-y-1\\/2{--tw-translate-y:-50%}\n.translate-y-0{--tw-translate-y:0px}\n.-translate-y-10{--tw-translate-y:-2.5rem}\n.cursor-pointer{cursor:pointer}\n.cursor-not-allowed{cursor:not-allowed}\n.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n.resize-none{resize:none}\n.list-none{list-style-type:none}\n.flex-col{flex-direction:column}\n.flex-wrap{flex-wrap:wrap}\n.place-items-center{place-items:center}\n.items-center{align-items:center}\n.items-end{align-items:flex-end}\n.items-start{align-items:flex-start}\n.justify-between{justify-content:space-between}\n.justify-center{justify-content:center}\n.justify-start{justify-content:flex-start}\n.justify-end{justify-content:flex-end}\n.gap-8{gap:2rem}\n.gap-10{gap:2.5rem}\n.gap-4{gap:1rem}\n.gap-2{gap:0.5rem}\n.gap-3{gap:0.75rem}\n.gap-1{gap:0.25rem}\n.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem}\n.gap-y-8{row-gap:2rem}\n.gap-x-24{-moz-column-gap:6rem;column-gap:6rem}\n.gap-y-4{row-gap:1rem}\n.gap-x-8{-moz-column-gap:2rem;column-gap:2rem}\n.space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}\n.overflow-hidden{overflow:hidden}\n.overflow-y-scroll{overflow-y:scroll}\n.overflow-x-hidden{overflow-x:hidden}\n.overflow-y-auto{overflow-y:auto}\n.whitespace-nowrap{white-space:nowrap}\n.break-words{overflow-wrap:break-word}\n.rounded{border-radius:0.25rem}\n.rounded-lg{border-radius:0.5rem}\n.rounded-full{border-radius:9999px}\n.rounded-xl{border-radius:0.75rem}\n.rounded-md{border-radius:0.375rem}\n.rounded-sm{border-radius:0.125rem}\n.rounded-t{border-top-left-radius:0.25rem;border-top-right-radius:0.25rem}\n.border{border-width:1px}\n.border-0{border-width:0px}\n.border-t-0{border-top-width:0px}\n.border-r-0{border-right-width:0px}\n.border-l-0{border-left-width:0px}\n.border-t{border-top-width:1px}\n.border-b{border-bottom-width:1px}\n.border-b-0{border-bottom-width:0px}\n.border-r{border-right-width:1px}\n.border-solid{border-style:solid}\n.border-none{border-style:none}\n.border-blue-gray-50{--tw-border-opacity:1;border-color:rgba(236, 239, 241, var(--tw-border-opacity))}\n.border-gray-200{--tw-border-opacity:1;border-color:rgba(238, 238, 238, var(--tw-border-opacity))}\n.border-gray-300{--tw-border-opacity:1;border-color:rgba(224, 224, 224, var(--tw-border-opacity))}\n.border-blue-gray-500{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity))}\n.border-gray-500{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity))}\n.border-brown-500{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity))}\n.border-deep-orange-500{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity))}\n.border-orange-500{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity))}\n.border-amber-500{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity))}\n.border-yellow-600{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity))}\n.border-lime-500{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity))}\n.border-light-green-500{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity))}\n.border-green-500{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity))}\n.border-teal-500{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity))}\n.border-cyan-500{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity))}\n.border-light-blue-500{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity))}\n.border-blue-500{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity))}\n.border-indigo-500{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity))}\n.border-deep-purple-500{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity))}\n.border-purple-500{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity))}\n.border-pink-500{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity))}\n.border-red-500{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity))}\n.border-transparent{border-color:transparent}\n.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}\n.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(245, 245, 245, var(--tw-bg-opacity))}\n.bg-orange-900{--tw-bg-opacity:1;background-color:rgba(230, 81, 0, var(--tw-bg-opacity))}\n.bg-light-blue-500{--tw-bg-opacity:1;background-color:rgba(3, 169, 244, var(--tw-bg-opacity))}\n.bg-gray-900{--tw-bg-opacity:1;background-color:rgba(33, 33, 33, var(--tw-bg-opacity))}\n.bg-yellow-600{--tw-bg-opacity:1;background-color:rgba(253, 216, 53, var(--tw-bg-opacity))}\n.bg-red-700{--tw-bg-opacity:1;background-color:rgba(211, 47, 47, var(--tw-bg-opacity))}\n.bg-green-500{--tw-bg-opacity:1;background-color:rgba(76, 175, 80, var(--tw-bg-opacity))}\n.bg-blue-gray-800{--tw-bg-opacity:1;background-color:rgba(55, 71, 79, var(--tw-bg-opacity))}\n.bg-blue-gray-500{--tw-bg-opacity:1;background-color:rgba(96, 125, 139, var(--tw-bg-opacity))}\n.bg-gray-500{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.bg-brown-500{--tw-bg-opacity:1;background-color:rgba(121, 85, 72, var(--tw-bg-opacity))}\n.bg-deep-orange-500{--tw-bg-opacity:1;background-color:rgba(255, 87, 34, var(--tw-bg-opacity))}\n.bg-orange-500{--tw-bg-opacity:1;background-color:rgba(255, 152, 0, var(--tw-bg-opacity))}\n.bg-amber-500{--tw-bg-opacity:1;background-color:rgba(255, 193, 7, var(--tw-bg-opacity))}\n.bg-lime-500{--tw-bg-opacity:1;background-color:rgba(205, 220, 57, var(--tw-bg-opacity))}\n.bg-light-green-500{--tw-bg-opacity:1;background-color:rgba(139, 195, 74, var(--tw-bg-opacity))}\n.bg-teal-500{--tw-bg-opacity:1;background-color:rgba(0, 150, 136, var(--tw-bg-opacity))}\n.bg-cyan-500{--tw-bg-opacity:1;background-color:rgba(0, 188, 212, var(--tw-bg-opacity))}\n.bg-blue-500{--tw-bg-opacity:1;background-color:rgba(33, 150, 243, var(--tw-bg-opacity))}\n.bg-indigo-500{--tw-bg-opacity:1;background-color:rgba(63, 81, 181, var(--tw-bg-opacity))}\n.bg-deep-purple-500{--tw-bg-opacity:1;background-color:rgba(103, 58, 183, var(--tw-bg-opacity))}\n.bg-purple-500{--tw-bg-opacity:1;background-color:rgba(156, 39, 176, var(--tw-bg-opacity))}\n.bg-pink-500{--tw-bg-opacity:1;background-color:rgba(233, 30, 99, var(--tw-bg-opacity))}\n.bg-red-500{--tw-bg-opacity:1;background-color:rgba(244, 67, 54, var(--tw-bg-opacity))}\n.bg-transparent{background-color:transparent}\n.bg-gray-200{--tw-bg-opacity:1;background-color:rgba(238, 238, 238, var(--tw-bg-opacity))}\n.bg-blue-gray-100{--tw-bg-opacity:1;background-color:rgba(207, 216, 220, var(--tw-bg-opacity))}\n.bg-brown-100{--tw-bg-opacity:1;background-color:rgba(215, 204, 200, var(--tw-bg-opacity))}\n.bg-deep-orange-100{--tw-bg-opacity:1;background-color:rgba(255, 204, 188, var(--tw-bg-opacity))}\n.bg-orange-100{--tw-bg-opacity:1;background-color:rgba(255, 224, 178, var(--tw-bg-opacity))}\n.bg-amber-100{--tw-bg-opacity:1;background-color:rgba(255, 236, 179, var(--tw-bg-opacity))}\n.bg-yellow-100{--tw-bg-opacity:1;background-color:rgba(255, 249, 196, var(--tw-bg-opacity))}\n.bg-lime-100{--tw-bg-opacity:1;background-color:rgba(240, 244, 195, var(--tw-bg-opacity))}\n.bg-light-green-100{--tw-bg-opacity:1;background-color:rgba(220, 237, 200, var(--tw-bg-opacity))}\n.bg-green-100{--tw-bg-opacity:1;background-color:rgba(200, 230, 201, var(--tw-bg-opacity))}\n.bg-teal-100{--tw-bg-opacity:1;background-color:rgba(178, 223, 219, var(--tw-bg-opacity))}\n.bg-cyan-100{--tw-bg-opacity:1;background-color:rgba(178, 235, 242, var(--tw-bg-opacity))}\n.bg-light-blue-100{--tw-bg-opacity:1;background-color:rgba(179, 229, 252, var(--tw-bg-opacity))}\n.bg-blue-100{--tw-bg-opacity:1;background-color:rgba(187, 222, 251, var(--tw-bg-opacity))}\n.bg-indigo-100{--tw-bg-opacity:1;background-color:rgba(197, 202, 233, var(--tw-bg-opacity))}\n.bg-deep-purple-100{--tw-bg-opacity:1;background-color:rgba(209, 196, 233, var(--tw-bg-opacity))}\n.bg-purple-100{--tw-bg-opacity:1;background-color:rgba(225, 190, 231, var(--tw-bg-opacity))}\n.bg-pink-100{--tw-bg-opacity:1;background-color:rgba(248, 187, 208, var(--tw-bg-opacity))}\n.bg-red-100{--tw-bg-opacity:1;background-color:rgba(255, 205, 210, var(--tw-bg-opacity))}\n.bg-blue-gray-900{--tw-bg-opacity:1;background-color:rgba(38, 50, 56, var(--tw-bg-opacity))}\n.bg-brown-900{--tw-bg-opacity:1;background-color:rgba(62, 39, 35, var(--tw-bg-opacity))}\n.bg-deep-orange-900{--tw-bg-opacity:1;background-color:rgba(191, 54, 12, var(--tw-bg-opacity))}\n.bg-amber-900{--tw-bg-opacity:1;background-color:rgba(255, 111, 0, var(--tw-bg-opacity))}\n.bg-yellow-900{--tw-bg-opacity:1;background-color:rgba(245, 127, 23, var(--tw-bg-opacity))}\n.bg-lime-900{--tw-bg-opacity:1;background-color:rgba(130, 119, 23, var(--tw-bg-opacity))}\n.bg-light-green-900{--tw-bg-opacity:1;background-color:rgba(51, 105, 30, var(--tw-bg-opacity))}\n.bg-green-900{--tw-bg-opacity:1;background-color:rgba(27, 94, 32, var(--tw-bg-opacity))}\n.bg-teal-900{--tw-bg-opacity:1;background-color:rgba(0, 77, 64, var(--tw-bg-opacity))}\n.bg-cyan-900{--tw-bg-opacity:1;background-color:rgba(0, 96, 100, var(--tw-bg-opacity))}\n.bg-light-blue-900{--tw-bg-opacity:1;background-color:rgba(1, 87, 155, var(--tw-bg-opacity))}\n.bg-blue-900{--tw-bg-opacity:1;background-color:rgba(13, 71, 161, var(--tw-bg-opacity))}\n.bg-indigo-900{--tw-bg-opacity:1;background-color:rgba(26, 35, 126, var(--tw-bg-opacity))}\n.bg-deep-purple-900{--tw-bg-opacity:1;background-color:rgba(49, 27, 146, var(--tw-bg-opacity))}\n.bg-purple-900{--tw-bg-opacity:1;background-color:rgba(74, 20, 140, var(--tw-bg-opacity))}\n.bg-pink-900{--tw-bg-opacity:1;background-color:rgba(136, 14, 79, var(--tw-bg-opacity))}\n.bg-red-900{--tw-bg-opacity:1;background-color:rgba(183, 28, 28, var(--tw-bg-opacity))}\n.bg-black{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity))}\n.bg-gray-700{--tw-bg-opacity:1;background-color:rgba(97, 97, 97, var(--tw-bg-opacity))}\n.bg-blue-gray-200{--tw-bg-opacity:1;background-color:rgba(176, 190, 197, var(--tw-bg-opacity))}\n.bg-brown-200{--tw-bg-opacity:1;background-color:rgba(188, 170, 164, var(--tw-bg-opacity))}\n.bg-deep-orange-200{--tw-bg-opacity:1;background-color:rgba(255, 171, 145, var(--tw-bg-opacity))}\n.bg-orange-200{--tw-bg-opacity:1;background-color:rgba(255, 204, 128, var(--tw-bg-opacity))}\n.bg-amber-200{--tw-bg-opacity:1;background-color:rgba(255, 224, 130, var(--tw-bg-opacity))}\n.bg-yellow-200{--tw-bg-opacity:1;background-color:rgba(255, 245, 157, var(--tw-bg-opacity))}\n.bg-lime-200{--tw-bg-opacity:1;background-color:rgba(230, 238, 156, var(--tw-bg-opacity))}\n.bg-light-green-200{--tw-bg-opacity:1;background-color:rgba(197, 225, 165, var(--tw-bg-opacity))}\n.bg-green-200{--tw-bg-opacity:1;background-color:rgba(165, 214, 167, var(--tw-bg-opacity))}\n.bg-teal-200{--tw-bg-opacity:1;background-color:rgba(128, 203, 196, var(--tw-bg-opacity))}\n.bg-cyan-200{--tw-bg-opacity:1;background-color:rgba(128, 222, 234, var(--tw-bg-opacity))}\n.bg-light-blue-200{--tw-bg-opacity:1;background-color:rgba(129, 212, 250, var(--tw-bg-opacity))}\n.bg-blue-200{--tw-bg-opacity:1;background-color:rgba(144, 202, 249, var(--tw-bg-opacity))}\n.bg-indigo-200{--tw-bg-opacity:1;background-color:rgba(159, 168, 218, var(--tw-bg-opacity))}\n.bg-deep-purple-200{--tw-bg-opacity:1;background-color:rgba(179, 157, 219, var(--tw-bg-opacity))}\n.bg-purple-200{--tw-bg-opacity:1;background-color:rgba(206, 147, 216, var(--tw-bg-opacity))}\n.bg-pink-200{--tw-bg-opacity:1;background-color:rgba(244, 143, 177, var(--tw-bg-opacity))}\n.bg-red-200{--tw-bg-opacity:1;background-color:rgba(239, 154, 154, var(--tw-bg-opacity))}\n.bg-opacity-20{--tw-bg-opacity:0.2}\n.bg-opacity-80{--tw-bg-opacity:0.8}\n.bg-gradient-to-tr{background-image:linear-gradient(to top right, var(--tw-gradient-stops))}\n.from-blue-gray-500{--tw-gradient-from:#607d8b;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(96, 125, 139, 0))}\n.from-gray-500{--tw-gradient-from:#9e9e9e;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(158, 158, 158, 0))}\n.from-brown-500{--tw-gradient-from:#795548;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(121, 85, 72, 0))}\n.from-deep-orange-500{--tw-gradient-from:#ff5722;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 87, 34, 0))}\n.from-orange-500{--tw-gradient-from:#ff9800;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 152, 0, 0))}\n.from-amber-500{--tw-gradient-from:#ffc107;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 193, 7, 0))}\n.from-yellow-600{--tw-gradient-from:#fdd835;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(253, 216, 53, 0))}\n.from-lime-500{--tw-gradient-from:#cddc39;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(205, 220, 57, 0))}\n.from-light-green-500{--tw-gradient-from:#8bc34a;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(139, 195, 74, 0))}\n.from-green-500{--tw-gradient-from:#4caf50;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(76, 175, 80, 0))}\n.from-teal-500{--tw-gradient-from:#009688;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 150, 136, 0))}\n.from-cyan-500{--tw-gradient-from:#00bcd4;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 188, 212, 0))}\n.from-light-blue-500{--tw-gradient-from:#03a9f4;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(3, 169, 244, 0))}\n.from-blue-500{--tw-gradient-from:#2196f3;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(33, 150, 243, 0))}\n.from-indigo-500{--tw-gradient-from:#3f51b5;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(63, 81, 181, 0))}\n.from-deep-purple-500{--tw-gradient-from:#673ab7;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(103, 58, 183, 0))}\n.from-purple-500{--tw-gradient-from:#9c27b0;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(156, 39, 176, 0))}\n.from-pink-500{--tw-gradient-from:#e91e63;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(233, 30, 99, 0))}\n.from-red-500{--tw-gradient-from:#f44336;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(244, 67, 54, 0))}\n.from-light-blue-700{--tw-gradient-from:#0288d1;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(2, 136, 209, 0))}\n.to-blue-gray-700{--tw-gradient-to:#455a64}\n.to-gray-700{--tw-gradient-to:#616161}\n.to-brown-700{--tw-gradient-to:#5d4037}\n.to-deep-orange-700{--tw-gradient-to:#e64a19}\n.to-orange-700{--tw-gradient-to:#f57c00}\n.to-amber-700{--tw-gradient-to:#ffa000}\n.to-yellow-800{--tw-gradient-to:#f9a825}\n.to-lime-700{--tw-gradient-to:#afb42b}\n.to-light-green-700{--tw-gradient-to:#689f38}\n.to-green-700{--tw-gradient-to:#388e3c}\n.to-teal-700{--tw-gradient-to:#00796b}\n.to-cyan-700{--tw-gradient-to:#0097a7}\n.to-light-blue-700{--tw-gradient-to:#0288d1}\n.to-blue-700{--tw-gradient-to:#1976d2}\n.to-indigo-700{--tw-gradient-to:#303f9f}\n.to-deep-purple-700{--tw-gradient-to:#512da8}\n.to-purple-700{--tw-gradient-to:#7b1fa2}\n.to-pink-700{--tw-gradient-to:#c2185b}\n.to-red-700{--tw-gradient-to:#d32f2f}\n.to-light-blue-500{--tw-gradient-to:#03a9f4}\n.p-4{padding:1rem}\n.p-3{padding:0.75rem}\n.p-8{padding:2rem}\n.p-2{padding:0.5rem}\n.p-0{padding:0px}\n.p-2\\.5{padding:0.625rem}\n.p-6{padding:1.5rem}\n.p-1{padding:0.25rem}\n.p-5{padding:1.25rem}\n.p-10{padding:2.5rem}\n.px-4{padding-left:1rem;padding-right:1rem}\n.py-16{padding-top:4rem;padding-bottom:4rem}\n.py-1{padding-top:0.25rem;padding-bottom:0.25rem}\n.py-8{padding-top:2rem;padding-bottom:2rem}\n.py-28{padding-top:7rem;padding-bottom:7rem}\n.px-12{padding-left:3rem;padding-right:3rem}\n.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}\n.px-2{padding-left:0.5rem;padding-right:0.5rem}\n.py-2{padding-top:0.5rem;padding-bottom:0.5rem}\n.py-20{padding-top:5rem;padding-bottom:5rem}\n.py-24{padding-top:6rem;padding-bottom:6rem}\n.py-5{padding-top:1.25rem;padding-bottom:1.25rem}\n.py-1\\.5{padding-top:0.375rem;padding-bottom:0.375rem}\n.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}\n.px-6{padding-left:1.5rem;padding-right:1.5rem}\n.py-3{padding-top:0.75rem;padding-bottom:0.75rem}\n.px-7{padding-left:1.75rem;padding-right:1.75rem}\n.py-4{padding-top:1rem;padding-bottom:1rem}\n.px-8{padding-left:2rem;padding-right:2rem}\n.px-9{padding-left:2.25rem;padding-right:2.25rem}\n.px-3{padding-left:0.75rem;padding-right:0.75rem}\n.px-0{padding-left:0px;padding-right:0px}\n.px-5{padding-left:1.25rem;padding-right:1.25rem}\n.px-1\\.5{padding-left:0.375rem;padding-right:0.375rem}\n.px-1{padding-left:0.25rem;padding-right:0.25rem}\n.pt-28{padding-top:7rem}\n.pb-36{padding-bottom:9rem}\n.pt-8{padding-top:2rem}\n.pb-6{padding-bottom:1.5rem}\n.pb-2{padding-bottom:0.5rem}\n.pt-6{padding-top:1.5rem}\n.pb-4{padding-bottom:1rem}\n.pb-20{padding-bottom:5rem}\n.pt-32{padding-top:8rem}\n.pt-48{padding-top:12rem}\n.pt-24{padding-top:6rem}\n.pb-64{padding-bottom:16rem}\n.pb-16{padding-bottom:4rem}\n.pr-12{padding-right:3rem}\n.pl-4{padding-left:1rem}\n.pt-4{padding-top:1rem}\n.pt-9{padding-top:2.25rem}\n.pl-0{padding-left:0px}\n.pt-10{padding-top:2.5rem}\n.pl-5{padding-left:1.25rem}\n.pr-3{padding-right:0.75rem}\n.pl-7{padding-left:1.75rem}\n.pr-5{padding-right:1.25rem}\n.pl-8{padding-left:2rem}\n.pr-6{padding-right:1.5rem}\n.pt-1\\.5{padding-top:0.375rem}\n.pb-0\\.5{padding-bottom:0.125rem}\n.pt-1{padding-top:0.25rem}\n.pb-0{padding-bottom:0px}\n.pt-2\\.5{padding-top:0.625rem}\n.pb-1\\.5{padding-bottom:0.375rem}\n.pt-2{padding-top:0.5rem}\n.pb-1{padding-bottom:0.25rem}\n.pt-3\\.5{padding-top:0.875rem}\n.pb-2\\.5{padding-bottom:0.625rem}\n.pt-3{padding-top:0.75rem}\n.pl-2{padding-left:0.5rem}\n.pr-7{padding-right:1.75rem}\n.pl-3{padding-left:0.75rem}\n.pr-9{padding-right:2.25rem}\n.pr-1{padding-right:0.25rem}\n.pb-10{padding-bottom:2.5rem}\n.pt-16{padding-top:4rem}\n.text-center{text-align:center}\n.text-right{text-align:right}\n.text-left{text-align:left}\n.align-middle{vertical-align:middle}\n.font-serif{font-family:\"Roboto Slab\", serif}\n.text-xl{font-size:1.25rem;line-height:1.75rem}\n.text-sm{font-size:0.875rem;line-height:1.25rem}\n.text-xs{font-size:0.75rem;line-height:1rem}\n.text-6xl{font-size:3.75rem;line-height:1}\n.text-lg{font-size:1.125rem;line-height:1.75rem}\n.text-base{font-size:1rem;line-height:1.5rem}\n.text-2xl{font-size:1.5rem;line-height:2rem}\n.text-4xl{font-size:2.25rem;line-height:2.5rem}\n.text-3xl{font-size:1.875rem;line-height:2.25rem}\n.text-5xl{font-size:3rem;line-height:1}\n.text-7xl{font-size:4.5rem;line-height:1}\n.text-8xl{font-size:6rem;line-height:1}\n.text-9xl{font-size:8rem;line-height:1}\n.font-medium{font-weight:500}\n.font-semibold{font-weight:600}\n.font-bold{font-weight:700}\n.font-light{font-weight:300}\n.font-normal{font-weight:400}\n.uppercase{text-transform:uppercase}\n.capitalize{text-transform:capitalize}\n.leading-relaxed{line-height:1.625}\n.leading-none{line-height:1}\n.leading-normal{line-height:1.5}\n.leading-10{line-height:2.5rem}\n.leading-snug{line-height:1.375}\n.tracking-wider{letter-spacing:0.05em}\n.tracking-wide{letter-spacing:0.025em}\n.text-gray-700{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.text-blue-gray-700{--tw-text-opacity:1;color:rgba(69, 90, 100, var(--tw-text-opacity))}\n.text-light-blue-500{--tw-text-opacity:1;color:rgba(3, 169, 244, var(--tw-text-opacity))}\n.text-blue-gray-800{--tw-text-opacity:1;color:rgba(55, 71, 79, var(--tw-text-opacity))}\n.text-blue-gray-900{--tw-text-opacity:1;color:rgba(38, 50, 56, var(--tw-text-opacity))}\n.text-blue-gray-200{--tw-text-opacity:1;color:rgba(176, 190, 197, var(--tw-text-opacity))}\n.text-blue-gray-50{--tw-text-opacity:1;color:rgba(236, 239, 241, var(--tw-text-opacity))}\n.text-cyan-600{--tw-text-opacity:1;color:rgba(0, 172, 193, var(--tw-text-opacity))}\n.text-gray-500{--tw-text-opacity:1;color:rgba(158, 158, 158, var(--tw-text-opacity))}\n.text-gray-900{--tw-text-opacity:1;color:rgba(33, 33, 33, var(--tw-text-opacity))}\n.text-blue-600{--tw-text-opacity:1;color:rgba(30, 136, 229, var(--tw-text-opacity))}\n.text-blue-400{--tw-text-opacity:1;color:rgba(66, 165, 245, var(--tw-text-opacity))}\n.text-indigo-500{--tw-text-opacity:1;color:rgba(63, 81, 181, var(--tw-text-opacity))}\n.text-pink-400{--tw-text-opacity:1;color:rgba(236, 64, 122, var(--tw-text-opacity))}\n.text-red-600{--tw-text-opacity:1;color:rgba(229, 57, 53, var(--tw-text-opacity))}\n.text-gray-600{--tw-text-opacity:1;color:rgba(117, 117, 117, var(--tw-text-opacity))}\n.text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}\n.text-blue-gray-500{--tw-text-opacity:1;color:rgba(96, 125, 139, var(--tw-text-opacity))}\n.text-brown-500{--tw-text-opacity:1;color:rgba(121, 85, 72, var(--tw-text-opacity))}\n.text-deep-orange-500{--tw-text-opacity:1;color:rgba(255, 87, 34, var(--tw-text-opacity))}\n.text-orange-500{--tw-text-opacity:1;color:rgba(255, 152, 0, var(--tw-text-opacity))}\n.text-amber-500{--tw-text-opacity:1;color:rgba(255, 193, 7, var(--tw-text-opacity))}\n.text-yellow-600{--tw-text-opacity:1;color:rgba(253, 216, 53, var(--tw-text-opacity))}\n.text-lime-500{--tw-text-opacity:1;color:rgba(205, 220, 57, var(--tw-text-opacity))}\n.text-light-green-500{--tw-text-opacity:1;color:rgba(139, 195, 74, var(--tw-text-opacity))}\n.text-green-500{--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n.text-teal-500{--tw-text-opacity:1;color:rgba(0, 150, 136, var(--tw-text-opacity))}\n.text-cyan-500{--tw-text-opacity:1;color:rgba(0, 188, 212, var(--tw-text-opacity))}\n.text-blue-500{--tw-text-opacity:1;color:rgba(33, 150, 243, var(--tw-text-opacity))}\n.text-deep-purple-500{--tw-text-opacity:1;color:rgba(103, 58, 183, var(--tw-text-opacity))}\n.text-purple-500{--tw-text-opacity:1;color:rgba(156, 39, 176, var(--tw-text-opacity))}\n.text-pink-500{--tw-text-opacity:1;color:rgba(233, 30, 99, var(--tw-text-opacity))}\n.text-red-500{--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.text-gray-400{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity))}\n.text-gray-800{--tw-text-opacity:1;color:rgba(66, 66, 66, var(--tw-text-opacity))}\n.text-brown-700{--tw-text-opacity:1;color:rgba(93, 64, 55, var(--tw-text-opacity))}\n.text-deep-orange-700{--tw-text-opacity:1;color:rgba(230, 74, 25, var(--tw-text-opacity))}\n.text-orange-700{--tw-text-opacity:1;color:rgba(245, 124, 0, var(--tw-text-opacity))}\n.text-amber-700{--tw-text-opacity:1;color:rgba(255, 160, 0, var(--tw-text-opacity))}\n.text-yellow-700{--tw-text-opacity:1;color:rgba(251, 192, 45, var(--tw-text-opacity))}\n.text-lime-700{--tw-text-opacity:1;color:rgba(175, 180, 43, var(--tw-text-opacity))}\n.text-light-green-700{--tw-text-opacity:1;color:rgba(104, 159, 56, var(--tw-text-opacity))}\n.text-green-700{--tw-text-opacity:1;color:rgba(56, 142, 60, var(--tw-text-opacity))}\n.text-teal-700{--tw-text-opacity:1;color:rgba(0, 121, 107, var(--tw-text-opacity))}\n.text-cyan-700{--tw-text-opacity:1;color:rgba(0, 151, 167, var(--tw-text-opacity))}\n.text-light-blue-700{--tw-text-opacity:1;color:rgba(2, 136, 209, var(--tw-text-opacity))}\n.text-blue-700{--tw-text-opacity:1;color:rgba(25, 118, 210, var(--tw-text-opacity))}\n.text-indigo-700{--tw-text-opacity:1;color:rgba(48, 63, 159, var(--tw-text-opacity))}\n.text-deep-purple-700{--tw-text-opacity:1;color:rgba(81, 45, 168, var(--tw-text-opacity))}\n.text-purple-700{--tw-text-opacity:1;color:rgba(123, 31, 162, var(--tw-text-opacity))}\n.text-pink-700{--tw-text-opacity:1;color:rgba(194, 24, 91, var(--tw-text-opacity))}\n.text-red-700{--tw-text-opacity:1;color:rgba(211, 47, 47, var(--tw-text-opacity))}\n.text-gray-200{--tw-text-opacity:1;color:rgba(238, 238, 238, var(--tw-text-opacity))}\n.text-brown-800{--tw-text-opacity:1;color:rgba(78, 52, 46, var(--tw-text-opacity))}\n.text-deep-orange-800{--tw-text-opacity:1;color:rgba(216, 67, 21, var(--tw-text-opacity))}\n.text-orange-800{--tw-text-opacity:1;color:rgba(239, 108, 0, var(--tw-text-opacity))}\n.text-amber-800{--tw-text-opacity:1;color:rgba(255, 143, 0, var(--tw-text-opacity))}\n.text-yellow-800{--tw-text-opacity:1;color:rgba(249, 168, 37, var(--tw-text-opacity))}\n.text-lime-800{--tw-text-opacity:1;color:rgba(158, 157, 36, var(--tw-text-opacity))}\n.text-light-green-800{--tw-text-opacity:1;color:rgba(85, 139, 47, var(--tw-text-opacity))}\n.text-green-800{--tw-text-opacity:1;color:rgba(46, 125, 50, var(--tw-text-opacity))}\n.text-teal-800{--tw-text-opacity:1;color:rgba(0, 105, 92, var(--tw-text-opacity))}\n.text-cyan-800{--tw-text-opacity:1;color:rgba(0, 131, 143, var(--tw-text-opacity))}\n.text-light-blue-800{--tw-text-opacity:1;color:rgba(2, 119, 189, var(--tw-text-opacity))}\n.text-blue-800{--tw-text-opacity:1;color:rgba(21, 101, 192, var(--tw-text-opacity))}\n.text-indigo-800{--tw-text-opacity:1;color:rgba(40, 53, 147, var(--tw-text-opacity))}\n.text-deep-purple-800{--tw-text-opacity:1;color:rgba(69, 39, 160, var(--tw-text-opacity))}\n.text-purple-800{--tw-text-opacity:1;color:rgba(106, 27, 154, var(--tw-text-opacity))}\n.text-pink-800{--tw-text-opacity:1;color:rgba(173, 20, 87, var(--tw-text-opacity))}\n.text-red-800{--tw-text-opacity:1;color:rgba(198, 40, 40, var(--tw-text-opacity))}\n.text-black{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}\n.text-opacity-60{--tw-text-opacity:0.6}\n.no-underline{text-decoration:none}\n.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}\n.placeholder-white::-moz-placeholder{--tw-placeholder-opacity:1;color:rgba(255, 255, 255, var(--tw-placeholder-opacity))}\n.placeholder-white:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgba(255, 255, 255, var(--tw-placeholder-opacity))}\n.placeholder-white::placeholder{--tw-placeholder-opacity:1;color:rgba(255, 255, 255, var(--tw-placeholder-opacity))}\n.placeholder-opacity-50::-moz-placeholder{--tw-placeholder-opacity:0.5}\n.placeholder-opacity-50:-ms-input-placeholder{--tw-placeholder-opacity:0.5}\n.placeholder-opacity-50::placeholder{--tw-placeholder-opacity:0.5}\n.opacity-50{opacity:0.5}\n.opacity-0{opacity:0}\n.opacity-100{opacity:1}\n.opacity-25{opacity:0.25}\n.opacity-5{opacity:0.05}\n.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-blue-gray{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(96, 125, 139, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-gray{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(158, 158, 158, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-brown{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(121, 85, 72, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-deep-orange{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 87, 36, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-orange{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 152, 0, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-amber{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 193, 7, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-yellow{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 235, 59, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-lime{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(205, 220, 57, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-light-green{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(139, 195, 74, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-green{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(76, 175, 80, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-teal{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 150, 136, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-cyan{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 188, 212, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-light-blue{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(3, 169, 244, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-blue{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(33, 150, 243, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-indigo{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(63, 81, 181, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-deep-purple{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(103, 58, 183, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-purple{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(156, 39, 176, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-pink{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(233, 30, 99, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-red{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(244, 67, 54, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-blue-gray{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(69, 90, 100, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-gray{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(97, 97, 97, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-brown{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(93, 64, 55, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-deep-orange{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(230, 74, 25, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-orange{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(245, 122, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-amber{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(255, 160, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-yellow{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(251, 192, 45, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-lime{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(175, 180, 43, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-light-green{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(104, 159, 56, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-green{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(56, 142, 60, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-teal{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 121, 107, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-cyan{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 151, 167, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-light-blue{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(2, 136, 209, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-blue{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(25, 118, 210, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-indigo{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(48, 63, 159, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-deep-purple{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(81, 45, 168, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-purple{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(123, 31, 162, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-pink{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(194, 24, 91, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-red{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(211, 47, 47, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.outline-none{outline:2px solid transparent;outline-offset:2px}\n.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}\n.duration-300{transition-duration:300ms}\n.duration{transition-duration:150ms}\n.duration-500{transition-duration:500ms}\n/* Material Tailwind Input */\n.mt-input + label:after {\n        content: '';\n        pointer-events:none;\n        position:absolute;\n        top:0.125rem;\n        left:0px;\n        height:100%;\n        width:100%;\n        --tw-translate-x:0;\n        --tw-translate-y:0;\n        --tw-rotate:0;\n        --tw-skew-x:0;\n        --tw-skew-y:0;\n        --tw-scale-x:1;\n        --tw-scale-y:1;\n        transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n        --tw-scale-x:0;\n        border-width:1px;\n        border-top-width:0px;\n        border-left-width:0px;\n        border-right-width:0px;\n        border-bottom-width:2px;\n        transition-property:all;\n        transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration:150ms;\n        transition-duration:300ms;\n    }\n.mt-input:focus + label:after{--tw-scale-x:1}\n.mt-input:not(:-moz-placeholder-shown) + label span {\n        top: -14%;\n    }\n.mt-input:not(:-ms-input-placeholder) + label span {\n        top: -14%;\n    }\n.mt-input:focus + label span,\n    .mt-input:not(:placeholder-shown) + label span {\n        top: -14%;\n    }\n.mt-input:not(:-moz-placeholder-shown) + label span{font-size:0.75rem;line-height:1rem;line-height:1.25}\n.mt-input:not(:-ms-input-placeholder) + label span{font-size:0.75rem;line-height:1rem;line-height:1.25}\n.mt-input:focus + label span, .mt-input:not(:placeholder-shown) + label span{font-size:0.75rem;line-height:1rem;line-height:1.25}\n.texterea:not(:-moz-placeholder-shown) + label span {\n        top: -22px !important;\n    }\n.texterea:not(:-ms-input-placeholder) + label span {\n        top: -22px !important;\n    }\n.texterea:focus + label span,\n    .texterea:not(:placeholder-shown) + label span {\n        top: -22px !important;\n    }\n/* Material Tailwind Input Outline */\n.mt-input-outline:not(:-moz-placeholder-shown) {\n        border-top: transparent !important;\n    }\n.mt-input-outline:not(:-ms-input-placeholder) {\n        border-top: transparent !important;\n    }\n.mt-input-outline:focus,\n    .mt-input-outline:not(:placeholder-shown) {\n        border-top: transparent !important;\n    }\n.mt-input-outline + label {\n        line-height: 3.625 !important;\n    }\n.mt-input-outline:not(:-moz-placeholder-shown) + label{font-size:0.75rem !important;line-height:1rem !important;line-height:1.25 !important}\n.mt-input-outline:not(:-ms-input-placeholder) + label{font-size:0.75rem !important;line-height:1rem !important;line-height:1.25 !important}\n.mt-input-outline:focus + label, .mt-input-outline:not(:placeholder-shown) + label{font-size:0.75rem !important;line-height:1rem !important;line-height:1.25 !important}\n.mt-input-outline + label:before,\n    .mt-input-outline + label:after {\n        content: '';pointer-events:none;margin-top:0.375rem;box-sizing:border-box;display:block;height:0.5rem;width:0.625rem;border-width:1px;border-top-width:2px;border-bottom-width:0px;border-left-width:0px;border-right-width:0px;border-color:transparent;\n    }\n.mt-input-outline:not(:-moz-placeholder-shown) + label:before, .mt-input-outline:not(:-moz-placeholder-shown) + label:after{border-top-width:1px;--tw-border-opacity:1;border-color:rgba(224, 224, 224, var(--tw-border-opacity))}\n.mt-input-outline:not(:-ms-input-placeholder) + label:before, .mt-input-outline:not(:-ms-input-placeholder) + label:after{border-top-width:1px;--tw-border-opacity:1;border-color:rgba(224, 224, 224, var(--tw-border-opacity))}\n.mt-input-outline:not(:placeholder-shown) + label:before, .mt-input-outline:not(:placeholder-shown) + label:after{border-top-width:1px;--tw-border-opacity:1;border-color:rgba(224, 224, 224, var(--tw-border-opacity))}\n.mt-input-outline:focus + label::before, .mt-input-outline:focus + label::after{border-top-width:2px}\n.mt-input-outline + label:before{margin-right:0.25rem;border-top-left-radius:0.5rem}\n.mt-input-outline + label:after{margin-left:0.25rem;flex-grow:1;border-top-right-radius:0.5rem}\n/* Material Tailwind Radio Button */\n.mt-radio:checked + label span {\n        box-shadow: 0px 0px 0px 2px white inset;\n        --tw-bg-opacity:1 !important;\n    }\n.mt-radio:checked + label{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.mt-radio + label span::before {\n        content: '';\n        top: -1.5px;\n        left: -1.5px;\n        transform: scale3d(1, 1, 1);\n        position:absolute;\n        z-index:10;\n        margin:0px;\n        display:block;\n        height:1rem;\n        width:1rem;\n        border-radius:9999px;\n        opacity:0;\n    }\n.mt-radio:checked + label span::before {\n        -webkit-animation: radio-ripple 0.3s linear;\n                animation: radio-ripple 0.3s linear;\n    }\n/* Material Tailwind Checkbox */\n.mt-checkbox:checked + label span{--tw-bg-opacity:1 !important}\n.mt-checkbox:checked + label{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.mt-checkbox + label span::before {\n        content: '';\n        top: -1px;\n        left: -1.5px;\n        transform: scale3d(2, 2, 1);\n        position:absolute;\n        z-index:10;\n        margin:0px;\n        display:block;\n        height:1.25rem;\n        width:1.25rem;\n        border-radius:9999px;\n        opacity:0;\n    }\n.mt-checkbox + label span::after {\n        content: '';\n        top: 1px;\n        left: 6px;\n        position:absolute;\n        height:0.875rem;\n        width:0.375rem;\n        --tw-translate-x:0;\n        --tw-translate-y:0;\n        --tw-rotate:0;\n        --tw-skew-x:0;\n        --tw-skew-y:0;\n        --tw-scale-x:1;\n        --tw-scale-y:1;\n        transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n        --tw-rotate:45deg;\n        border-bottom-width:2px;\n        border-right-width:2px;\n        border-color:transparent;\n        transition-property:all;\n        transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration:150ms;\n        transition-duration:200ms;\n    }\n.mt-checkbox:checked + label span::before {\n        -webkit-animation: radio-ripple 0.3s linear;\n                animation: radio-ripple 0.3s linear;\n    }\n.mt-checkbox:checked + label span::after{--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity))}\n/* Material Tailwind Input Colors */\n.mt-input-blue-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity))}\n.mt-input-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity))}\n.mt-input-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity))}\n.mt-input-deep-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity))}\n.mt-input-amber-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity))}\n.mt-input-yellow-600:focus + label:after{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity))}\n.mt-input-lime-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity))}\n.mt-input-light-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity))}\n.mt-input-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity))}\n.mt-input-teal-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity))}\n.mt-input-cyan-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity))}\n.mt-input-light-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity))}\n.mt-input-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity))}\n.mt-input-indigo-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity))}\n.mt-input-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity))}\n.mt-input-deep-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity))}\n.mt-input-pink-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity))}\n.mt-input-red-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity))}\n/* Material Tailwind Input Outline Colors */\n.mt-input-outline-blue-gray-500:focus, .mt-input-outline-blue-gray-500:focus + label, .mt-input-outline-blue-gray-500:focus + label:before, .mt-input-outline-blue-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(96, 125, 139, var(--tw-text-opacity))}\n.mt-input-outline-gray-500:focus, .mt-input-outline-gray-500:focus + label, .mt-input-outline-gray-500:focus + label:before, .mt-input-outline-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(158, 158, 158, var(--tw-text-opacity))}\n.mt-input-outline-orange-500:focus, .mt-input-outline-orange-500:focus + label, .mt-input-outline-orange-500:focus + label:before, .mt-input-outline-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(255, 152, 0, var(--tw-text-opacity))}\n.mt-input-outline-deep-orange-500:focus, .mt-input-outline-deep-orange-500:focus + label, .mt-input-outline-deep-orange-500:focus + label:before, .mt-input-outline-deep-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(255, 87, 34, var(--tw-text-opacity))}\n.mt-input-outline-brown-500:focus, .mt-input-outline-brown-500:focus + label, .mt-input-outline-brown-500:focus + label:before, .mt-input-outline-brown-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(121, 85, 72, var(--tw-text-opacity))}\n.mt-input-outline-amber-500:focus, .mt-input-outline-amber-500:focus + label, .mt-input-outline-amber-500:focus + label:before, .mt-input-outline-amber-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(255, 193, 7, var(--tw-text-opacity))}\n.mt-input-outline-yellow-600:focus, .mt-input-outline-yellow-600:focus + label, .mt-input-outline-yellow-600:focus + label:before, .mt-input-outline-yellow-600:focus + label:after{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(253, 216, 53, var(--tw-text-opacity))}\n.mt-input-outline-lime-500:focus, .mt-input-outline-lime-500:focus + label, .mt-input-outline-lime-500:focus + label:before, .mt-input-outline-lime-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(205, 220, 57, var(--tw-text-opacity))}\n.mt-input-outline-light-green-500:focus, .mt-input-outline-light-green-500:focus + label, .mt-input-outline-light-green-500:focus + label:before, .mt-input-outline-light-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(139, 195, 74, var(--tw-text-opacity))}\n.mt-input-outline-green-500:focus, .mt-input-outline-green-500:focus + label, .mt-input-outline-green-500:focus + label:before, .mt-input-outline-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n.mt-input-outline-teal-500:focus, .mt-input-outline-teal-500:focus + label, .mt-input-outline-teal-500:focus + label:before, .mt-input-outline-teal-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(0, 150, 136, var(--tw-text-opacity))}\n.mt-input-outline-cyan-500:focus, .mt-input-outline-cyan-500:focus + label, .mt-input-outline-cyan-500:focus + label:before, .mt-input-outline-cyan-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(0, 188, 212, var(--tw-text-opacity))}\n.mt-input-outline-light-blue-500:focus, .mt-input-outline-light-blue-500:focus + label, .mt-input-outline-light-blue-500:focus + label:before, .mt-input-outline-light-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(3, 169, 244, var(--tw-text-opacity))}\n.mt-input-outline-blue-500:focus, .mt-input-outline-blue-500:focus + label, .mt-input-outline-blue-500:focus + label:before, .mt-input-outline-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(33, 150, 243, var(--tw-text-opacity))}\n.mt-input-outline-indigo-500:focus, .mt-input-outline-indigo-500:focus + label, .mt-input-outline-indigo-500:focus + label:before, .mt-input-outline-indigo-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(63, 81, 181, var(--tw-text-opacity))}\n.mt-input-outline-purple-500:focus, .mt-input-outline-purple-500:focus + label, .mt-input-outline-purple-500:focus + label:before, .mt-input-outline-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(156, 39, 176, var(--tw-text-opacity))}\n.mt-input-outline-deep-purple-500:focus, .mt-input-outline-deep-purple-500:focus + label, .mt-input-outline-deep-purple-500:focus + label:before, .mt-input-outline-deep-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(103, 58, 183, var(--tw-text-opacity))}\n.mt-input-outline-pink-500:focus, .mt-input-outline-pink-500:focus + label, .mt-input-outline-pink-500:focus + label:before, .mt-input-outline-pink-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(233, 30, 99, var(--tw-text-opacity))}\n.mt-input-outline-red-500:focus, .mt-input-outline-red-500:focus + label, .mt-input-outline-red-500:focus + label:before, .mt-input-outline-red-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.mt-input-outline-error:not(:-moz-placeholder-shown) + label, .mt-input-outline-error:not(:-moz-placeholder-shown) + label:before, .mt-input-outline-error:not(:-moz-placeholder-shown) + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.mt-input-outline-error:not(:-ms-input-placeholder) + label, .mt-input-outline-error:not(:-ms-input-placeholder) + label:before, .mt-input-outline-error:not(:-ms-input-placeholder) + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.mt-input-outline-error:not(:placeholder-shown) + label, .mt-input-outline-error:not(:placeholder-shown) + label:before, .mt-input-outline-error:not(:placeholder-shown) + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.mt-input-outline-success:not(:-moz-placeholder-shown) + label, .mt-input-outline-success:not(:-moz-placeholder-shown) + label:before, .mt-input-outline-success:not(:-moz-placeholder-shown) + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n.mt-input-outline-success:not(:-ms-input-placeholder) + label, .mt-input-outline-success:not(:-ms-input-placeholder) + label:before, .mt-input-outline-success:not(:-ms-input-placeholder) + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n.mt-input-outline-success:not(:placeholder-shown) + label, .mt-input-outline-success:not(:placeholder-shown) + label:before, .mt-input-outline-success:not(:placeholder-shown) + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n/* Material Tailwind Radio Button and Checkbox Colors */\n.mt-radio-blue-gray-500:checked + label span, .mt-radio-blue-gray-500 + label span::before, .mt-checkbox-blue-gray-500:checked + label span, .mt-checkbox-blue-gray-500 + label span::before{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(96, 125, 139, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-gray-500:checked + label span, .mt-radio-gray-500 + label span::before, .mt-checkbox-gray-500:checked + label span, .mt-checkbox-gray-500 + label span::before{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-orange-500:checked + label span, .mt-radio-orange-500 + label span::before, .mt-checkbox-orange-500:checked + label span, .mt-checkbox-orange-500 + label span::before{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(255, 152, 0, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-deep-orange-500:checked + label span, .mt-radio-deep-orange-500 + label span::before, .mt-checkbox-deep-orange-500:checked + label span, .mt-checkbox-deep-orange-500 + label span::before{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(255, 87, 34, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-brown-500:checked + label span, .mt-radio-brown-500 + label span::before, .mt-checkbox-brown-500:checked + label span, .mt-checkbox-brown-500 + label span::before{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(121, 85, 72, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-amber-500:checked + label span, .mt-radio-amber-500 + label span::before, .mt-checkbox-amber-500:checked + label span, .mt-checkbox-amber-500 + label span::before{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(255, 193, 7, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-yellow-600:checked + label span, .mt-radio-yellow-600 + label span::before, .mt-checkbox-yellow-600:checked + label span, .mt-checkbox-yellow-600 + label span::before{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(253, 216, 53, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-lime-500:checked + label span, .mt-radio-lime-500 + label span::before, .mt-checkbox-lime-500:checked + label span, .mt-checkbox-lime-500 + label span::before{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(205, 220, 57, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-light-green-500:checked + label span, .mt-radio-light-green-500 + label span::before, .mt-checkbox-light-green-500:checked + label span, .mt-checkbox-light-green-500 + label span::before{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(139, 195, 74, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-green-500:checked + label span, .mt-radio-green-500 + label span::before, .mt-checkbox-green-500:checked + label span, .mt-checkbox-green-500 + label span::before{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(76, 175, 80, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-teal-500:checked + label span, .mt-radio-teal-500 + label span::before, .mt-checkbox-teal-500:checked + label span, .mt-checkbox-teal-500 + label span::before{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(0, 150, 136, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-cyan-500:checked + label span, .mt-radio-cyan-500 + label span::before, .mt-checkbox-cyan-500:checked + label span, .mt-checkbox-cyan-500 + label span::before{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(0, 188, 212, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-light-blue-500:checked + label span, .mt-radio-light-blue-500 + label span::before, .mt-checkbox-light-blue-500:checked + label span, .mt-checkbox-light-blue-500 + label span::before{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(3, 169, 244, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-blue-500:checked + label span, .mt-radio-blue-500 + label span::before, .mt-checkbox-blue-500:checked + label span, .mt-checkbox-blue-500 + label span::before{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(33, 150, 243, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-indigo-500:checked + label span, .mt-radio-indigo-500 + label span::before, .mt-checkbox-indigo-500:checked + label span, .mt-checkbox-indigo-500 + label span::before{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(63, 81, 181, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-purple-500:checked + label span, .mt-radio-purple-500 + label span::before, .mt-checkbox-purple-500:checked + label span, .mt-checkbox-purple-500 + label span::before{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(156, 39, 176, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-deep-purple-500:checked + label span, .mt-radio-deep-purple-500 + label span::before, .mt-checkbox-deep-purple-500:checked + label span, .mt-checkbox-deep-purple-500 + label span::before{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(103, 58, 183, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-pink-500:checked + label span, .mt-radio-pink-500 + label span::before, .mt-checkbox-pink-500:checked + label span, .mt-checkbox-pink-500 + label span::before{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(233, 30, 99, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-red-500:checked + label span, .mt-radio-red-500 + label span::before, .mt-checkbox-red-500:checked + label span, .mt-checkbox-red-500 + label span::before{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(244, 67, 54, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n/* Tippy Boxx */\n.tippy-box:focus {\n    outline: none;\n}\n/* Tippy Animation */\n.tippy-box[data-animation='scale'] {\n    transform-origin: top left !important;\n}\n/* Tippy Arrow */\n.arrow-light .tippy-svg-arrow {\n    fill: #fff;\n}\n.arrow-dark .tippy-svg-arrow {\n    fill: rgba(0, 0, 0, 0.8);\n}\n/* Material Tailwind Radio Button Ripple Effect Animation */\n@-webkit-keyframes radio-ripple {\n    from {\n        opacity: 0;\n        transform: scale3d(1, 1, 1);\n    }\n    50% {\n        opacity: 1;\n        transform: scale3d(2, 2, 1);\n    }\n    to {\n        opacity: 0;\n        transform: scale3d(3, 3, 1);\n    }\n}\n@keyframes radio-ripple {\n    from {\n        opacity: 0;\n        transform: scale3d(1, 1, 1);\n    }\n    50% {\n        opacity: 1;\n        transform: scale3d(2, 2, 1);\n    }\n    to {\n        opacity: 0;\n        transform: scale3d(3, 3, 1);\n    }\n}\n.last\\:mr-0:last-child{margin-right:0px}\n.hover\\:border-blue-gray-700:hover{--tw-border-opacity:1;border-color:rgba(69, 90, 100, var(--tw-border-opacity))}\n.hover\\:border-gray-700:hover{--tw-border-opacity:1;border-color:rgba(97, 97, 97, var(--tw-border-opacity))}\n.hover\\:border-brown-700:hover{--tw-border-opacity:1;border-color:rgba(93, 64, 55, var(--tw-border-opacity))}\n.hover\\:border-deep-orange-700:hover{--tw-border-opacity:1;border-color:rgba(230, 74, 25, var(--tw-border-opacity))}\n.hover\\:border-orange-700:hover{--tw-border-opacity:1;border-color:rgba(245, 124, 0, var(--tw-border-opacity))}\n.hover\\:border-amber-700:hover{--tw-border-opacity:1;border-color:rgba(255, 160, 0, var(--tw-border-opacity))}\n.hover\\:border-yellow-700:hover{--tw-border-opacity:1;border-color:rgba(251, 192, 45, var(--tw-border-opacity))}\n.hover\\:border-lime-700:hover{--tw-border-opacity:1;border-color:rgba(175, 180, 43, var(--tw-border-opacity))}\n.hover\\:border-light-green-700:hover{--tw-border-opacity:1;border-color:rgba(104, 159, 56, var(--tw-border-opacity))}\n.hover\\:border-green-700:hover{--tw-border-opacity:1;border-color:rgba(56, 142, 60, var(--tw-border-opacity))}\n.hover\\:border-teal-700:hover{--tw-border-opacity:1;border-color:rgba(0, 121, 107, var(--tw-border-opacity))}\n.hover\\:border-cyan-700:hover{--tw-border-opacity:1;border-color:rgba(0, 151, 167, var(--tw-border-opacity))}\n.hover\\:border-light-blue-700:hover{--tw-border-opacity:1;border-color:rgba(2, 136, 209, var(--tw-border-opacity))}\n.hover\\:border-blue-700:hover{--tw-border-opacity:1;border-color:rgba(25, 118, 210, var(--tw-border-opacity))}\n.hover\\:border-indigo-700:hover{--tw-border-opacity:1;border-color:rgba(48, 63, 159, var(--tw-border-opacity))}\n.hover\\:border-deep-purple-700:hover{--tw-border-opacity:1;border-color:rgba(81, 45, 168, var(--tw-border-opacity))}\n.hover\\:border-purple-700:hover{--tw-border-opacity:1;border-color:rgba(123, 31, 162, var(--tw-border-opacity))}\n.hover\\:border-pink-700:hover{--tw-border-opacity:1;border-color:rgba(194, 24, 91, var(--tw-border-opacity))}\n.hover\\:border-red-700:hover{--tw-border-opacity:1;border-color:rgba(211, 47, 47, var(--tw-border-opacity))}\n.hover\\:bg-blue-gray-700:hover{--tw-bg-opacity:1;background-color:rgba(69, 90, 100, var(--tw-bg-opacity))}\n.hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgba(97, 97, 97, var(--tw-bg-opacity))}\n.hover\\:bg-brown-700:hover{--tw-bg-opacity:1;background-color:rgba(93, 64, 55, var(--tw-bg-opacity))}\n.hover\\:bg-deep-orange-700:hover{--tw-bg-opacity:1;background-color:rgba(230, 74, 25, var(--tw-bg-opacity))}\n.hover\\:bg-orange-700:hover{--tw-bg-opacity:1;background-color:rgba(245, 124, 0, var(--tw-bg-opacity))}\n.hover\\:bg-amber-700:hover{--tw-bg-opacity:1;background-color:rgba(255, 160, 0, var(--tw-bg-opacity))}\n.hover\\:bg-yellow-700:hover{--tw-bg-opacity:1;background-color:rgba(251, 192, 45, var(--tw-bg-opacity))}\n.hover\\:bg-lime-700:hover{--tw-bg-opacity:1;background-color:rgba(175, 180, 43, var(--tw-bg-opacity))}\n.hover\\:bg-light-green-700:hover{--tw-bg-opacity:1;background-color:rgba(104, 159, 56, var(--tw-bg-opacity))}\n.hover\\:bg-green-700:hover{--tw-bg-opacity:1;background-color:rgba(56, 142, 60, var(--tw-bg-opacity))}\n.hover\\:bg-teal-700:hover{--tw-bg-opacity:1;background-color:rgba(0, 121, 107, var(--tw-bg-opacity))}\n.hover\\:bg-cyan-700:hover{--tw-bg-opacity:1;background-color:rgba(0, 151, 167, var(--tw-bg-opacity))}\n.hover\\:bg-light-blue-700:hover{--tw-bg-opacity:1;background-color:rgba(2, 136, 209, var(--tw-bg-opacity))}\n.hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgba(25, 118, 210, var(--tw-bg-opacity))}\n.hover\\:bg-indigo-700:hover{--tw-bg-opacity:1;background-color:rgba(48, 63, 159, var(--tw-bg-opacity))}\n.hover\\:bg-deep-purple-700:hover{--tw-bg-opacity:1;background-color:rgba(81, 45, 168, var(--tw-bg-opacity))}\n.hover\\:bg-purple-700:hover{--tw-bg-opacity:1;background-color:rgba(123, 31, 162, var(--tw-bg-opacity))}\n.hover\\:bg-pink-700:hover{--tw-bg-opacity:1;background-color:rgba(194, 24, 91, var(--tw-bg-opacity))}\n.hover\\:bg-red-700:hover{--tw-bg-opacity:1;background-color:rgba(211, 47, 47, var(--tw-bg-opacity))}\n.hover\\:bg-blue-gray-50:hover{--tw-bg-opacity:1;background-color:rgba(236, 239, 241, var(--tw-bg-opacity))}\n.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgba(250, 250, 250, var(--tw-bg-opacity))}\n.hover\\:bg-brown-50:hover{--tw-bg-opacity:1;background-color:rgba(239, 235, 233, var(--tw-bg-opacity))}\n.hover\\:bg-deep-orange-50:hover{--tw-bg-opacity:1;background-color:rgba(251, 233, 231, var(--tw-bg-opacity))}\n.hover\\:bg-orange-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 243, 224, var(--tw-bg-opacity))}\n.hover\\:bg-amber-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 248, 225, var(--tw-bg-opacity))}\n.hover\\:bg-yellow-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 253, 231, var(--tw-bg-opacity))}\n.hover\\:bg-lime-50:hover{--tw-bg-opacity:1;background-color:rgba(249, 251, 231, var(--tw-bg-opacity))}\n.hover\\:bg-light-green-50:hover{--tw-bg-opacity:1;background-color:rgba(241, 248, 233, var(--tw-bg-opacity))}\n.hover\\:bg-green-50:hover{--tw-bg-opacity:1;background-color:rgba(232, 245, 233, var(--tw-bg-opacity))}\n.hover\\:bg-teal-50:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 241, var(--tw-bg-opacity))}\n.hover\\:bg-cyan-50:hover{--tw-bg-opacity:1;background-color:rgba(224, 247, 250, var(--tw-bg-opacity))}\n.hover\\:bg-light-blue-50:hover{--tw-bg-opacity:1;background-color:rgba(225, 245, 254, var(--tw-bg-opacity))}\n.hover\\:bg-blue-50:hover{--tw-bg-opacity:1;background-color:rgba(227, 242, 253, var(--tw-bg-opacity))}\n.hover\\:bg-indigo-50:hover{--tw-bg-opacity:1;background-color:rgba(232, 234, 246, var(--tw-bg-opacity))}\n.hover\\:bg-deep-purple-50:hover{--tw-bg-opacity:1;background-color:rgba(237, 231, 246, var(--tw-bg-opacity))}\n.hover\\:bg-purple-50:hover{--tw-bg-opacity:1;background-color:rgba(243, 229, 245, var(--tw-bg-opacity))}\n.hover\\:bg-pink-50:hover{--tw-bg-opacity:1;background-color:rgba(252, 228, 236, var(--tw-bg-opacity))}\n.hover\\:bg-red-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 235, 238, var(--tw-bg-opacity))}\n.hover\\:bg-blue-gray-500:hover{--tw-bg-opacity:1;background-color:rgba(96, 125, 139, var(--tw-bg-opacity))}\n.hover\\:bg-gray-500:hover{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.hover\\:bg-brown-500:hover{--tw-bg-opacity:1;background-color:rgba(121, 85, 72, var(--tw-bg-opacity))}\n.hover\\:bg-deep-orange-500:hover{--tw-bg-opacity:1;background-color:rgba(255, 87, 34, var(--tw-bg-opacity))}\n.hover\\:bg-orange-500:hover{--tw-bg-opacity:1;background-color:rgba(255, 152, 0, var(--tw-bg-opacity))}\n.hover\\:bg-amber-500:hover{--tw-bg-opacity:1;background-color:rgba(255, 193, 7, var(--tw-bg-opacity))}\n.hover\\:bg-yellow-600:hover{--tw-bg-opacity:1;background-color:rgba(253, 216, 53, var(--tw-bg-opacity))}\n.hover\\:bg-lime-500:hover{--tw-bg-opacity:1;background-color:rgba(205, 220, 57, var(--tw-bg-opacity))}\n.hover\\:bg-light-green-500:hover{--tw-bg-opacity:1;background-color:rgba(139, 195, 74, var(--tw-bg-opacity))}\n.hover\\:bg-green-500:hover{--tw-bg-opacity:1;background-color:rgba(76, 175, 80, var(--tw-bg-opacity))}\n.hover\\:bg-teal-500:hover{--tw-bg-opacity:1;background-color:rgba(0, 150, 136, var(--tw-bg-opacity))}\n.hover\\:bg-cyan-500:hover{--tw-bg-opacity:1;background-color:rgba(0, 188, 212, var(--tw-bg-opacity))}\n.hover\\:bg-light-blue-500:hover{--tw-bg-opacity:1;background-color:rgba(3, 169, 244, var(--tw-bg-opacity))}\n.hover\\:bg-blue-500:hover{--tw-bg-opacity:1;background-color:rgba(33, 150, 243, var(--tw-bg-opacity))}\n.hover\\:bg-indigo-500:hover{--tw-bg-opacity:1;background-color:rgba(63, 81, 181, var(--tw-bg-opacity))}\n.hover\\:bg-deep-purple-500:hover{--tw-bg-opacity:1;background-color:rgba(103, 58, 183, var(--tw-bg-opacity))}\n.hover\\:bg-purple-500:hover{--tw-bg-opacity:1;background-color:rgba(156, 39, 176, var(--tw-bg-opacity))}\n.hover\\:bg-pink-500:hover{--tw-bg-opacity:1;background-color:rgba(233, 30, 99, var(--tw-bg-opacity))}\n.hover\\:bg-red-500:hover{--tw-bg-opacity:1;background-color:rgba(244, 67, 54, var(--tw-bg-opacity))}\n.hover\\:bg-white:hover{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}\n.hover\\:bg-opacity-20:hover{--tw-bg-opacity:0.2}\n.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgba(33, 33, 33, var(--tw-text-opacity))}\n.hover\\:text-blue-gray-800:hover{--tw-text-opacity:1;color:rgba(55, 71, 79, var(--tw-text-opacity))}\n.hover\\:text-blue-gray-700:hover{--tw-text-opacity:1;color:rgba(69, 90, 100, var(--tw-text-opacity))}\n.hover\\:text-gray-700:hover{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.hover\\:text-brown-700:hover{--tw-text-opacity:1;color:rgba(93, 64, 55, var(--tw-text-opacity))}\n.hover\\:text-deep-orange-700:hover{--tw-text-opacity:1;color:rgba(230, 74, 25, var(--tw-text-opacity))}\n.hover\\:text-orange-700:hover{--tw-text-opacity:1;color:rgba(245, 124, 0, var(--tw-text-opacity))}\n.hover\\:text-amber-700:hover{--tw-text-opacity:1;color:rgba(255, 160, 0, var(--tw-text-opacity))}\n.hover\\:text-yellow-700:hover{--tw-text-opacity:1;color:rgba(251, 192, 45, var(--tw-text-opacity))}\n.hover\\:text-lime-700:hover{--tw-text-opacity:1;color:rgba(175, 180, 43, var(--tw-text-opacity))}\n.hover\\:text-light-green-700:hover{--tw-text-opacity:1;color:rgba(104, 159, 56, var(--tw-text-opacity))}\n.hover\\:text-green-700:hover{--tw-text-opacity:1;color:rgba(56, 142, 60, var(--tw-text-opacity))}\n.hover\\:text-teal-700:hover{--tw-text-opacity:1;color:rgba(0, 121, 107, var(--tw-text-opacity))}\n.hover\\:text-cyan-700:hover{--tw-text-opacity:1;color:rgba(0, 151, 167, var(--tw-text-opacity))}\n.hover\\:text-light-blue-700:hover{--tw-text-opacity:1;color:rgba(2, 136, 209, var(--tw-text-opacity))}\n.hover\\:text-blue-700:hover{--tw-text-opacity:1;color:rgba(25, 118, 210, var(--tw-text-opacity))}\n.hover\\:text-indigo-700:hover{--tw-text-opacity:1;color:rgba(48, 63, 159, var(--tw-text-opacity))}\n.hover\\:text-deep-purple-700:hover{--tw-text-opacity:1;color:rgba(81, 45, 168, var(--tw-text-opacity))}\n.hover\\:text-purple-700:hover{--tw-text-opacity:1;color:rgba(123, 31, 162, var(--tw-text-opacity))}\n.hover\\:text-pink-700:hover{--tw-text-opacity:1;color:rgba(194, 24, 91, var(--tw-text-opacity))}\n.hover\\:text-red-700:hover{--tw-text-opacity:1;color:rgba(211, 47, 47, var(--tw-text-opacity))}\n.hover\\:text-white:hover{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}\n.hover\\:shadow-lg-blue-gray:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(69, 90, 100, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-gray:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(97, 97, 97, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-brown:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(93, 64, 55, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-deep-orange:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(230, 74, 25, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-orange:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(245, 122, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-amber:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(255, 160, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-yellow:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(251, 192, 45, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-lime:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(175, 180, 43, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-light-green:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(104, 159, 56, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-green:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(56, 142, 60, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-teal:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 121, 107, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-cyan:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 151, 167, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-light-blue:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(2, 136, 209, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-blue:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(25, 118, 210, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-indigo:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(48, 63, 159, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-deep-purple:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(81, 45, 168, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-purple:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(123, 31, 162, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-pink:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(194, 24, 91, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-red:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(211, 47, 47, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-blue-gray:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(96, 125, 139, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-gray:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(158, 158, 158, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-brown:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(121, 85, 72, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-deep-orange:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 87, 36, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-orange:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 152, 0, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-amber:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 193, 7, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-yellow:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 235, 59, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-lime:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(205, 220, 57, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-light-green:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(139, 195, 74, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-green:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(76, 175, 80, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-teal:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 150, 136, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-cyan:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 188, 212, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-light-blue:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(3, 169, 244, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-blue:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(33, 150, 243, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-indigo:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(63, 81, 181, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-deep-purple:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(103, 58, 183, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-purple:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(156, 39, 176, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-pink:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(233, 30, 99, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-red:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(244, 67, 54, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.focus\\:border-2:focus{border-width:2px}\n.focus\\:border-blue-gray-500:focus{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity))}\n.focus\\:border-gray-500:focus{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity))}\n.focus\\:border-brown-500:focus{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity))}\n.focus\\:border-deep-orange-500:focus{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity))}\n.focus\\:border-orange-500:focus{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity))}\n.focus\\:border-amber-500:focus{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity))}\n.focus\\:border-yellow-600:focus{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity))}\n.focus\\:border-lime-500:focus{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity))}\n.focus\\:border-light-green-500:focus{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity))}\n.focus\\:border-green-500:focus{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity))}\n.focus\\:border-teal-500:focus{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity))}\n.focus\\:border-cyan-500:focus{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity))}\n.focus\\:border-light-blue-500:focus{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity))}\n.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity))}\n.focus\\:border-indigo-500:focus{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity))}\n.focus\\:border-deep-purple-500:focus{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity))}\n.focus\\:border-purple-500:focus{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity))}\n.focus\\:border-pink-500:focus{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity))}\n.focus\\:border-red-500:focus{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity))}\n.focus\\:bg-blue-gray-400:focus{--tw-bg-opacity:1;background-color:rgba(120, 144, 156, var(--tw-bg-opacity))}\n.focus\\:bg-gray-400:focus{--tw-bg-opacity:1;background-color:rgba(189, 189, 189, var(--tw-bg-opacity))}\n.focus\\:bg-brown-400:focus{--tw-bg-opacity:1;background-color:rgba(141, 110, 99, var(--tw-bg-opacity))}\n.focus\\:bg-deep-orange-400:focus{--tw-bg-opacity:1;background-color:rgba(255, 112, 67, var(--tw-bg-opacity))}\n.focus\\:bg-orange-400:focus{--tw-bg-opacity:1;background-color:rgba(255, 167, 38, var(--tw-bg-opacity))}\n.focus\\:bg-amber-400:focus{--tw-bg-opacity:1;background-color:rgba(255, 202, 40, var(--tw-bg-opacity))}\n.focus\\:bg-yellow-500:focus{--tw-bg-opacity:1;background-color:rgba(255, 235, 59, var(--tw-bg-opacity))}\n.focus\\:bg-lime-400:focus{--tw-bg-opacity:1;background-color:rgba(212, 225, 87, var(--tw-bg-opacity))}\n.focus\\:bg-light-green-400:focus{--tw-bg-opacity:1;background-color:rgba(156, 204, 101, var(--tw-bg-opacity))}\n.focus\\:bg-green-400:focus{--tw-bg-opacity:1;background-color:rgba(102, 187, 106, var(--tw-bg-opacity))}\n.focus\\:bg-teal-400:focus{--tw-bg-opacity:1;background-color:rgba(38, 166, 154, var(--tw-bg-opacity))}\n.focus\\:bg-cyan-400:focus{--tw-bg-opacity:1;background-color:rgba(38, 198, 218, var(--tw-bg-opacity))}\n.focus\\:bg-light-blue-400:focus{--tw-bg-opacity:1;background-color:rgba(41, 182, 246, var(--tw-bg-opacity))}\n.focus\\:bg-blue-400:focus{--tw-bg-opacity:1;background-color:rgba(66, 165, 245, var(--tw-bg-opacity))}\n.focus\\:bg-indigo-400:focus{--tw-bg-opacity:1;background-color:rgba(92, 107, 192, var(--tw-bg-opacity))}\n.focus\\:bg-deep-purple-400:focus{--tw-bg-opacity:1;background-color:rgba(126, 87, 194, var(--tw-bg-opacity))}\n.focus\\:bg-purple-400:focus{--tw-bg-opacity:1;background-color:rgba(171, 71, 188, var(--tw-bg-opacity))}\n.focus\\:bg-pink-400:focus{--tw-bg-opacity:1;background-color:rgba(236, 64, 122, var(--tw-bg-opacity))}\n.focus\\:bg-red-400:focus{--tw-bg-opacity:1;background-color:rgba(239, 83, 80, var(--tw-bg-opacity))}\n.focus\\:bg-gray-500:focus{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.focus\\:bg-opacity-20:focus{--tw-bg-opacity:0.2}\n.focus\\:text-gray-800:focus{--tw-text-opacity:1;color:rgba(66, 66, 66, var(--tw-text-opacity))}\n.focus\\:shadow-none:focus{--tw-shadow:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}\n.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}\n.active\\:bg-blue-gray-800:active{--tw-bg-opacity:1;background-color:rgba(55, 71, 79, var(--tw-bg-opacity))}\n.active\\:bg-gray-800:active{--tw-bg-opacity:1;background-color:rgba(66, 66, 66, var(--tw-bg-opacity))}\n.active\\:bg-brown-800:active{--tw-bg-opacity:1;background-color:rgba(78, 52, 46, var(--tw-bg-opacity))}\n.active\\:bg-deep-orange-800:active{--tw-bg-opacity:1;background-color:rgba(216, 67, 21, var(--tw-bg-opacity))}\n.active\\:bg-orange-800:active{--tw-bg-opacity:1;background-color:rgba(239, 108, 0, var(--tw-bg-opacity))}\n.active\\:bg-amber-800:active{--tw-bg-opacity:1;background-color:rgba(255, 143, 0, var(--tw-bg-opacity))}\n.active\\:bg-yellow-800:active{--tw-bg-opacity:1;background-color:rgba(249, 168, 37, var(--tw-bg-opacity))}\n.active\\:bg-lime-800:active{--tw-bg-opacity:1;background-color:rgba(158, 157, 36, var(--tw-bg-opacity))}\n.active\\:bg-light-green-800:active{--tw-bg-opacity:1;background-color:rgba(85, 139, 47, var(--tw-bg-opacity))}\n.active\\:bg-green-800:active{--tw-bg-opacity:1;background-color:rgba(46, 125, 50, var(--tw-bg-opacity))}\n.active\\:bg-teal-800:active{--tw-bg-opacity:1;background-color:rgba(0, 105, 92, var(--tw-bg-opacity))}\n.active\\:bg-cyan-800:active{--tw-bg-opacity:1;background-color:rgba(0, 131, 143, var(--tw-bg-opacity))}\n.active\\:bg-light-blue-800:active{--tw-bg-opacity:1;background-color:rgba(2, 119, 189, var(--tw-bg-opacity))}\n.active\\:bg-blue-800:active{--tw-bg-opacity:1;background-color:rgba(21, 101, 192, var(--tw-bg-opacity))}\n.active\\:bg-indigo-800:active{--tw-bg-opacity:1;background-color:rgba(40, 53, 147, var(--tw-bg-opacity))}\n.active\\:bg-deep-purple-800:active{--tw-bg-opacity:1;background-color:rgba(69, 39, 160, var(--tw-bg-opacity))}\n.active\\:bg-purple-800:active{--tw-bg-opacity:1;background-color:rgba(106, 27, 154, var(--tw-bg-opacity))}\n.active\\:bg-pink-800:active{--tw-bg-opacity:1;background-color:rgba(173, 20, 87, var(--tw-bg-opacity))}\n.active\\:bg-red-800:active{--tw-bg-opacity:1;background-color:rgba(198, 40, 40, var(--tw-bg-opacity))}\n.active\\:bg-blue-gray-100:active{--tw-bg-opacity:1;background-color:rgba(207, 216, 220, var(--tw-bg-opacity))}\n.active\\:bg-gray-100:active{--tw-bg-opacity:1;background-color:rgba(245, 245, 245, var(--tw-bg-opacity))}\n.active\\:bg-brown-100:active{--tw-bg-opacity:1;background-color:rgba(215, 204, 200, var(--tw-bg-opacity))}\n.active\\:bg-deep-orange-100:active{--tw-bg-opacity:1;background-color:rgba(255, 204, 188, var(--tw-bg-opacity))}\n.active\\:bg-orange-100:active{--tw-bg-opacity:1;background-color:rgba(255, 224, 178, var(--tw-bg-opacity))}\n.active\\:bg-amber-100:active{--tw-bg-opacity:1;background-color:rgba(255, 236, 179, var(--tw-bg-opacity))}\n.active\\:bg-yellow-100:active{--tw-bg-opacity:1;background-color:rgba(255, 249, 196, var(--tw-bg-opacity))}\n.active\\:bg-lime-100:active{--tw-bg-opacity:1;background-color:rgba(240, 244, 195, var(--tw-bg-opacity))}\n.active\\:bg-light-green-100:active{--tw-bg-opacity:1;background-color:rgba(220, 237, 200, var(--tw-bg-opacity))}\n.active\\:bg-green-100:active{--tw-bg-opacity:1;background-color:rgba(200, 230, 201, var(--tw-bg-opacity))}\n.active\\:bg-teal-100:active{--tw-bg-opacity:1;background-color:rgba(178, 223, 219, var(--tw-bg-opacity))}\n.active\\:bg-cyan-100:active{--tw-bg-opacity:1;background-color:rgba(178, 235, 242, var(--tw-bg-opacity))}\n.active\\:bg-light-blue-100:active{--tw-bg-opacity:1;background-color:rgba(179, 229, 252, var(--tw-bg-opacity))}\n.active\\:bg-blue-100:active{--tw-bg-opacity:1;background-color:rgba(187, 222, 251, var(--tw-bg-opacity))}\n.active\\:bg-indigo-100:active{--tw-bg-opacity:1;background-color:rgba(197, 202, 233, var(--tw-bg-opacity))}\n.active\\:bg-deep-purple-100:active{--tw-bg-opacity:1;background-color:rgba(209, 196, 233, var(--tw-bg-opacity))}\n.active\\:bg-purple-100:active{--tw-bg-opacity:1;background-color:rgba(225, 190, 231, var(--tw-bg-opacity))}\n.active\\:bg-pink-100:active{--tw-bg-opacity:1;background-color:rgba(248, 187, 208, var(--tw-bg-opacity))}\n.active\\:bg-red-100:active{--tw-bg-opacity:1;background-color:rgba(255, 205, 210, var(--tw-bg-opacity))}\n.active\\:bg-gray-500:active{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.active\\:bg-opacity-40:active{--tw-bg-opacity:0.4}\n@media (min-width: 640px){\n.sm\\:left-auto{left:auto}\n.sm\\:w-full{width:100%}}\n@media (min-width: 768px){\n.md\\:mt-40{margin-top:10rem}\n.md\\:mt-0{margin-top:0px}\n.md\\:mt-64{margin-top:16rem}\n.md\\:mb-0{margin-bottom:0px}\n.md\\:w-9\\/12{width:75%}\n.md\\:w-48{width:12rem}\n.md\\:w-6\\/12{width:50%}\n.md\\:w-4\\/12{width:33.333333%}\n.md\\:w-5\\/12{width:41.666667%}\n.md\\:w-8\\/12{width:66.666667%}\n.md\\:flex-row{flex-direction:row}\n.md\\:justify-start{justify-content:flex-start}\n.md\\:justify-between{justify-content:space-between}\n.md\\:gap-6{gap:1.5rem}\n.md\\:px-8{padding-left:2rem;padding-right:2rem}\n.md\\:px-4{padding-left:1rem;padding-right:1rem}\n.md\\:pr-12{padding-right:3rem}\n.md\\:pt-0{padding-top:0px}}\n@media (min-width: 1024px){\n.lg\\:static{position:static}\n.lg\\:mr-5{margin-right:1.25rem}\n.lg\\:ml-5{margin-left:1.25rem}\n.lg\\:mt-16{margin-top:4rem}\n.lg\\:block{display:block}\n.lg\\:flex{display:flex}\n.lg\\:hidden{display:none}\n.lg\\:w-4\\/12{width:33.333333%}\n.lg\\:w-6\\/12{width:50%}\n.lg\\:w-8\\/12{width:66.666667%}\n.lg\\:w-60{width:15rem}\n.lg\\:w-auto{width:auto}\n.lg\\:flex-row{flex-direction:row}\n.lg\\:items-center{align-items:center}\n.lg\\:justify-between{justify-content:space-between}\n.lg\\:justify-start{justify-content:flex-start}\n.lg\\:px-36{padding-left:9rem;padding-right:9rem}\n.lg\\:text-left{text-align:left}}\n", "",{"version":3,"sources":["webpack://node_modules/@material-tailwind/react/tailwind.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n.tippy-box[data-placement^=top]>.tippy-svg-arrow{bottom:0}\n.tippy-box[data-placement^=top]>.tippy-svg-arrow:after,.tippy-box[data-placement^=top]>.tippy-svg-arrow>svg{top:16px;transform:rotate(180deg)}\n.tippy-box[data-placement^=bottom]>.tippy-svg-arrow{top:0}\n.tippy-box[data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}\n.tippy-box[data-placement^=left]>.tippy-svg-arrow{right:0}\n.tippy-box[data-placement^=left]>.tippy-svg-arrow:after,.tippy-box[data-placement^=left]>.tippy-svg-arrow>svg{transform:rotate(90deg);top:calc(50% - 3px);left:11px}\n.tippy-box[data-placement^=right]>.tippy-svg-arrow{left:0}\n.tippy-box[data-placement^=right]>.tippy-svg-arrow:after,.tippy-box[data-placement^=right]>.tippy-svg-arrow>svg{transform:rotate(-90deg);top:calc(50% - 3px);right:11px}\n.tippy-svg-arrow{width:16px;height:16px;fill:#333;text-align:initial}\n.tippy-svg-arrow,.tippy-svg-arrow>svg{position:absolute}\n.tippy-box[data-animation=scale][data-placement^=top]{transform-origin:bottom}\n.tippy-box[data-animation=scale][data-placement^=bottom]{transform-origin:top}\n.tippy-box[data-animation=scale][data-placement^=left]{transform-origin:right}\n.tippy-box[data-animation=scale][data-placement^=right]{transform-origin:left}\n.tippy-box[data-animation=scale][data-state=hidden]{transform:scale(.5);opacity:0}\n.tippy-box[data-animation=shift-away][data-state=hidden]{opacity:0}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=top]{transform:translateY(10px)}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=bottom]{transform:translateY(-10px)}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=left]{transform:translateX(10px)}\n.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=right]{transform:translateX(-10px)}\n/*! tailwindcss v2.1.4 | MIT License | https://tailwindcss.com */\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n/*\nSections\n========\n*/\n/**\nRemove the margin in all browsers.\n*/\nbody {\n\tmargin: 0;\n}\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n\tfont-weight: bolder;\n}\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n\tfont-size: 80%;\n}\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\nsub {\n\tbottom: -0.25em;\n}\nsup {\n\ttop: -0.5em;\n}\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n/**\nRemove the inner border and padding in Firefox.\n*/\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n/**\nRestore the focus styles unset by the previous rule.\n*/\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n\tpadding: 0;\n}\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n\tvertical-align: baseline;\n}\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n\tdisplay: list-item;\n}\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/**\n * Tailwind custom reset styles\n */\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: Roboto, sans-serif; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #eeeeee; /* 2 */\n}\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #bdbdbd;\n}\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #bdbdbd;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #bdbdbd;\n}\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n*{--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(33, 150, 243, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000}\n.container{width:100%}\n@media (min-width: 640px){\n.container{max-width:640px}}\n@media (min-width: 768px){\n.container{max-width:768px}}\n@media (min-width: 1024px){\n.container{max-width:1024px}}\n@media (min-width: 1280px){\n.container{max-width:1280px}}\n@media (min-width: 1536px){\n.container{max-width:1536px}}\n.pointer-events-none{pointer-events:none}\n.pointer-events-auto{pointer-events:auto}\n.relative{position:relative}\n.absolute{position:absolute}\n.sticky{position:sticky}\n.fixed{position:fixed}\n.inset-0{top:0px;right:0px;bottom:0px;left:0px}\n.right-4{right:1rem}\n.top-1\\/3{top:33.333333%}\n.left-0{left:0px}\n.right-0{right:0px}\n.top-16{top:4rem}\n.-top-1\\.5{top:-0.375rem}\n.-top-0\\.5{top:-0.125rem}\n.-top-1{top:-0.25rem}\n.-top-0{top:0px}\n.top-1\\/4{top:25%}\n.top-1\\/2{top:50%}\n.right-2{right:0.5rem}\n.right-3{right:0.75rem}\n.top-2{top:0.5rem}\n.top-0{top:0px}\n.-bottom-4{bottom:-1rem}\n.-bottom-5{bottom:-1.25rem}\n.z-30{z-index:30}\n.z-20{z-index:20}\n.z-10{z-index:10}\n.z-50{z-index:50}\n.z-40{z-index:40}\n.float-left{float:left}\n.float-right{float:right}\n.mx-auto{margin-left:auto;margin-right:auto}\n.my-16{margin-top:4rem;margin-bottom:4rem}\n.my-4{margin-top:1rem;margin-bottom:1rem}\n.my-6{margin-top:1.5rem;margin-bottom:1.5rem}\n.mx-4{margin-left:1rem;margin-right:1rem}\n.mx-1{margin-left:0.25rem;margin-right:0.25rem}\n.my-8{margin-top:2rem;margin-bottom:2rem}\n.mx-5{margin-left:1.25rem;margin-right:1.25rem}\n.mb-16{margin-bottom:4rem}\n.mt-36{margin-top:9rem}\n.mt-10{margin-top:2.5rem}\n.mt-5{margin-top:1.25rem}\n.mt-16{margin-top:4rem}\n.mt-4{margin-top:1rem}\n.mt-20{margin-top:5rem}\n.mb-10{margin-bottom:2.5rem}\n.mt-8{margin-top:2rem}\n.mt-12{margin-top:3rem}\n.mb-24{margin-bottom:6rem}\n.mt-48{margin-top:12rem}\n.mr-auto{margin-right:auto}\n.ml-auto{margin-left:auto}\n.mb-6{margin-bottom:1.5rem}\n.mr-2{margin-right:0.5rem}\n.mt-2{margin-top:0.5rem}\n.mt-32{margin-top:8rem}\n.mt-6{margin-top:1.5rem}\n.mr-3{margin-right:0.75rem}\n.-mt-64{margin-top:-16rem}\n.mb-5{margin-bottom:1.25rem}\n.mb-12{margin-bottom:3rem}\n.mb-8{margin-bottom:2rem}\n.mb-4{margin-bottom:1rem}\n.mb-2{margin-bottom:0.5rem}\n.-mt-10{margin-top:-2.5rem}\n.-mt-9{margin-top:-2.25rem}\n.mb-1{margin-bottom:0.25rem}\n.ml-1{margin-left:0.25rem}\n.mr-1{margin-right:0.25rem}\n.mt-1{margin-top:0.25rem}\n.mb-0{margin-bottom:0px}\n.mt-3{margin-top:0.75rem}\n.ml-7{margin-left:1.75rem}\n.ml-2{margin-left:0.5rem}\n.mt-0{margin-top:0px}\n.mb-3{margin-bottom:0.75rem}\n.mr-4{margin-right:1rem}\n.-mt-12{margin-top:-3rem}\n.mr-10{margin-right:2.5rem}\n.block{display:block}\n.inline-block{display:inline-block}\n.flex{display:flex}\n.inline-flex{display:inline-flex}\n.grid{display:grid}\n.hidden{display:none}\n.h-16{height:4rem}\n.h-7{height:1.75rem}\n.h-10{height:2.5rem}\n.h-32{height:8rem}\n.h-20{height:5rem}\n.h-12{height:3rem}\n.h-6{height:1.5rem}\n.h-8{height:2rem}\n.h-24{height:6rem}\n.h-28{height:7rem}\n.h-5{height:1.25rem}\n.h-screen{height:100vh}\n.h-auto{height:auto}\n.h-full{height:100%}\n.h-9{height:2.25rem}\n.h-11{height:2.75rem}\n.h-4{height:1rem}\n.h-px{height:1px}\n.h-2{height:0.5rem}\n.w-full{width:100%}\n.w-40{width:10rem}\n.w-72{width:18rem}\n.w-\\[28rem\\]{width:28rem}\n.w-64{width:16rem}\n.w-96{width:24rem}\n.w-48{width:12rem}\n.w-16{width:4rem}\n.w-7{width:1.75rem}\n.w-32{width:8rem}\n.w-12{width:3rem}\n.w-10{width:2.5rem}\n.w-6{width:1.5rem}\n.w-8{width:2rem}\n.w-20{width:5rem}\n.w-24{width:6rem}\n.w-28{width:7rem}\n.w-5{width:1.25rem}\n.w-10\\/12{width:83.333333%}\n.w-4{width:1rem}\n.w-auto{width:auto}\n.w-14{width:3.5rem}\n.min-w-0{min-width:0px}\n.max-w-7xl{max-width:80rem}\n.max-w-full{max-width:100%}\n.max-w-max{max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}\n.max-w-sm{max-width:24rem}\n.max-w-6xl{max-width:72rem}\n.max-w-3xl{max-width:48rem}\n.max-w-xs{max-width:20rem}\n.flex-auto{flex:1 1 auto}\n.flex-1{flex:1 1 0%}\n.flex-none{flex:none}\n.flex-grow{flex-grow:1}\n.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}\n.-translate-y-1\\/3{--tw-translate-y:-33.333333%}\n.-translate-y-1\\/2{--tw-translate-y:-50%}\n.translate-y-0{--tw-translate-y:0px}\n.-translate-y-10{--tw-translate-y:-2.5rem}\n.cursor-pointer{cursor:pointer}\n.cursor-not-allowed{cursor:not-allowed}\n.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n.resize-none{resize:none}\n.list-none{list-style-type:none}\n.flex-col{flex-direction:column}\n.flex-wrap{flex-wrap:wrap}\n.place-items-center{place-items:center}\n.items-center{align-items:center}\n.items-end{align-items:flex-end}\n.items-start{align-items:flex-start}\n.justify-between{justify-content:space-between}\n.justify-center{justify-content:center}\n.justify-start{justify-content:flex-start}\n.justify-end{justify-content:flex-end}\n.gap-8{gap:2rem}\n.gap-10{gap:2.5rem}\n.gap-4{gap:1rem}\n.gap-2{gap:0.5rem}\n.gap-3{gap:0.75rem}\n.gap-1{gap:0.25rem}\n.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem}\n.gap-y-8{row-gap:2rem}\n.gap-x-24{-moz-column-gap:6rem;column-gap:6rem}\n.gap-y-4{row-gap:1rem}\n.gap-x-8{-moz-column-gap:2rem;column-gap:2rem}\n.space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}\n.overflow-hidden{overflow:hidden}\n.overflow-y-scroll{overflow-y:scroll}\n.overflow-x-hidden{overflow-x:hidden}\n.overflow-y-auto{overflow-y:auto}\n.whitespace-nowrap{white-space:nowrap}\n.break-words{overflow-wrap:break-word}\n.rounded{border-radius:0.25rem}\n.rounded-lg{border-radius:0.5rem}\n.rounded-full{border-radius:9999px}\n.rounded-xl{border-radius:0.75rem}\n.rounded-md{border-radius:0.375rem}\n.rounded-sm{border-radius:0.125rem}\n.rounded-t{border-top-left-radius:0.25rem;border-top-right-radius:0.25rem}\n.border{border-width:1px}\n.border-0{border-width:0px}\n.border-t-0{border-top-width:0px}\n.border-r-0{border-right-width:0px}\n.border-l-0{border-left-width:0px}\n.border-t{border-top-width:1px}\n.border-b{border-bottom-width:1px}\n.border-b-0{border-bottom-width:0px}\n.border-r{border-right-width:1px}\n.border-solid{border-style:solid}\n.border-none{border-style:none}\n.border-blue-gray-50{--tw-border-opacity:1;border-color:rgba(236, 239, 241, var(--tw-border-opacity))}\n.border-gray-200{--tw-border-opacity:1;border-color:rgba(238, 238, 238, var(--tw-border-opacity))}\n.border-gray-300{--tw-border-opacity:1;border-color:rgba(224, 224, 224, var(--tw-border-opacity))}\n.border-blue-gray-500{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity))}\n.border-gray-500{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity))}\n.border-brown-500{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity))}\n.border-deep-orange-500{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity))}\n.border-orange-500{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity))}\n.border-amber-500{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity))}\n.border-yellow-600{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity))}\n.border-lime-500{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity))}\n.border-light-green-500{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity))}\n.border-green-500{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity))}\n.border-teal-500{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity))}\n.border-cyan-500{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity))}\n.border-light-blue-500{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity))}\n.border-blue-500{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity))}\n.border-indigo-500{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity))}\n.border-deep-purple-500{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity))}\n.border-purple-500{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity))}\n.border-pink-500{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity))}\n.border-red-500{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity))}\n.border-transparent{border-color:transparent}\n.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}\n.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(245, 245, 245, var(--tw-bg-opacity))}\n.bg-orange-900{--tw-bg-opacity:1;background-color:rgba(230, 81, 0, var(--tw-bg-opacity))}\n.bg-light-blue-500{--tw-bg-opacity:1;background-color:rgba(3, 169, 244, var(--tw-bg-opacity))}\n.bg-gray-900{--tw-bg-opacity:1;background-color:rgba(33, 33, 33, var(--tw-bg-opacity))}\n.bg-yellow-600{--tw-bg-opacity:1;background-color:rgba(253, 216, 53, var(--tw-bg-opacity))}\n.bg-red-700{--tw-bg-opacity:1;background-color:rgba(211, 47, 47, var(--tw-bg-opacity))}\n.bg-green-500{--tw-bg-opacity:1;background-color:rgba(76, 175, 80, var(--tw-bg-opacity))}\n.bg-blue-gray-800{--tw-bg-opacity:1;background-color:rgba(55, 71, 79, var(--tw-bg-opacity))}\n.bg-blue-gray-500{--tw-bg-opacity:1;background-color:rgba(96, 125, 139, var(--tw-bg-opacity))}\n.bg-gray-500{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.bg-brown-500{--tw-bg-opacity:1;background-color:rgba(121, 85, 72, var(--tw-bg-opacity))}\n.bg-deep-orange-500{--tw-bg-opacity:1;background-color:rgba(255, 87, 34, var(--tw-bg-opacity))}\n.bg-orange-500{--tw-bg-opacity:1;background-color:rgba(255, 152, 0, var(--tw-bg-opacity))}\n.bg-amber-500{--tw-bg-opacity:1;background-color:rgba(255, 193, 7, var(--tw-bg-opacity))}\n.bg-lime-500{--tw-bg-opacity:1;background-color:rgba(205, 220, 57, var(--tw-bg-opacity))}\n.bg-light-green-500{--tw-bg-opacity:1;background-color:rgba(139, 195, 74, var(--tw-bg-opacity))}\n.bg-teal-500{--tw-bg-opacity:1;background-color:rgba(0, 150, 136, var(--tw-bg-opacity))}\n.bg-cyan-500{--tw-bg-opacity:1;background-color:rgba(0, 188, 212, var(--tw-bg-opacity))}\n.bg-blue-500{--tw-bg-opacity:1;background-color:rgba(33, 150, 243, var(--tw-bg-opacity))}\n.bg-indigo-500{--tw-bg-opacity:1;background-color:rgba(63, 81, 181, var(--tw-bg-opacity))}\n.bg-deep-purple-500{--tw-bg-opacity:1;background-color:rgba(103, 58, 183, var(--tw-bg-opacity))}\n.bg-purple-500{--tw-bg-opacity:1;background-color:rgba(156, 39, 176, var(--tw-bg-opacity))}\n.bg-pink-500{--tw-bg-opacity:1;background-color:rgba(233, 30, 99, var(--tw-bg-opacity))}\n.bg-red-500{--tw-bg-opacity:1;background-color:rgba(244, 67, 54, var(--tw-bg-opacity))}\n.bg-transparent{background-color:transparent}\n.bg-gray-200{--tw-bg-opacity:1;background-color:rgba(238, 238, 238, var(--tw-bg-opacity))}\n.bg-blue-gray-100{--tw-bg-opacity:1;background-color:rgba(207, 216, 220, var(--tw-bg-opacity))}\n.bg-brown-100{--tw-bg-opacity:1;background-color:rgba(215, 204, 200, var(--tw-bg-opacity))}\n.bg-deep-orange-100{--tw-bg-opacity:1;background-color:rgba(255, 204, 188, var(--tw-bg-opacity))}\n.bg-orange-100{--tw-bg-opacity:1;background-color:rgba(255, 224, 178, var(--tw-bg-opacity))}\n.bg-amber-100{--tw-bg-opacity:1;background-color:rgba(255, 236, 179, var(--tw-bg-opacity))}\n.bg-yellow-100{--tw-bg-opacity:1;background-color:rgba(255, 249, 196, var(--tw-bg-opacity))}\n.bg-lime-100{--tw-bg-opacity:1;background-color:rgba(240, 244, 195, var(--tw-bg-opacity))}\n.bg-light-green-100{--tw-bg-opacity:1;background-color:rgba(220, 237, 200, var(--tw-bg-opacity))}\n.bg-green-100{--tw-bg-opacity:1;background-color:rgba(200, 230, 201, var(--tw-bg-opacity))}\n.bg-teal-100{--tw-bg-opacity:1;background-color:rgba(178, 223, 219, var(--tw-bg-opacity))}\n.bg-cyan-100{--tw-bg-opacity:1;background-color:rgba(178, 235, 242, var(--tw-bg-opacity))}\n.bg-light-blue-100{--tw-bg-opacity:1;background-color:rgba(179, 229, 252, var(--tw-bg-opacity))}\n.bg-blue-100{--tw-bg-opacity:1;background-color:rgba(187, 222, 251, var(--tw-bg-opacity))}\n.bg-indigo-100{--tw-bg-opacity:1;background-color:rgba(197, 202, 233, var(--tw-bg-opacity))}\n.bg-deep-purple-100{--tw-bg-opacity:1;background-color:rgba(209, 196, 233, var(--tw-bg-opacity))}\n.bg-purple-100{--tw-bg-opacity:1;background-color:rgba(225, 190, 231, var(--tw-bg-opacity))}\n.bg-pink-100{--tw-bg-opacity:1;background-color:rgba(248, 187, 208, var(--tw-bg-opacity))}\n.bg-red-100{--tw-bg-opacity:1;background-color:rgba(255, 205, 210, var(--tw-bg-opacity))}\n.bg-blue-gray-900{--tw-bg-opacity:1;background-color:rgba(38, 50, 56, var(--tw-bg-opacity))}\n.bg-brown-900{--tw-bg-opacity:1;background-color:rgba(62, 39, 35, var(--tw-bg-opacity))}\n.bg-deep-orange-900{--tw-bg-opacity:1;background-color:rgba(191, 54, 12, var(--tw-bg-opacity))}\n.bg-amber-900{--tw-bg-opacity:1;background-color:rgba(255, 111, 0, var(--tw-bg-opacity))}\n.bg-yellow-900{--tw-bg-opacity:1;background-color:rgba(245, 127, 23, var(--tw-bg-opacity))}\n.bg-lime-900{--tw-bg-opacity:1;background-color:rgba(130, 119, 23, var(--tw-bg-opacity))}\n.bg-light-green-900{--tw-bg-opacity:1;background-color:rgba(51, 105, 30, var(--tw-bg-opacity))}\n.bg-green-900{--tw-bg-opacity:1;background-color:rgba(27, 94, 32, var(--tw-bg-opacity))}\n.bg-teal-900{--tw-bg-opacity:1;background-color:rgba(0, 77, 64, var(--tw-bg-opacity))}\n.bg-cyan-900{--tw-bg-opacity:1;background-color:rgba(0, 96, 100, var(--tw-bg-opacity))}\n.bg-light-blue-900{--tw-bg-opacity:1;background-color:rgba(1, 87, 155, var(--tw-bg-opacity))}\n.bg-blue-900{--tw-bg-opacity:1;background-color:rgba(13, 71, 161, var(--tw-bg-opacity))}\n.bg-indigo-900{--tw-bg-opacity:1;background-color:rgba(26, 35, 126, var(--tw-bg-opacity))}\n.bg-deep-purple-900{--tw-bg-opacity:1;background-color:rgba(49, 27, 146, var(--tw-bg-opacity))}\n.bg-purple-900{--tw-bg-opacity:1;background-color:rgba(74, 20, 140, var(--tw-bg-opacity))}\n.bg-pink-900{--tw-bg-opacity:1;background-color:rgba(136, 14, 79, var(--tw-bg-opacity))}\n.bg-red-900{--tw-bg-opacity:1;background-color:rgba(183, 28, 28, var(--tw-bg-opacity))}\n.bg-black{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity))}\n.bg-gray-700{--tw-bg-opacity:1;background-color:rgba(97, 97, 97, var(--tw-bg-opacity))}\n.bg-blue-gray-200{--tw-bg-opacity:1;background-color:rgba(176, 190, 197, var(--tw-bg-opacity))}\n.bg-brown-200{--tw-bg-opacity:1;background-color:rgba(188, 170, 164, var(--tw-bg-opacity))}\n.bg-deep-orange-200{--tw-bg-opacity:1;background-color:rgba(255, 171, 145, var(--tw-bg-opacity))}\n.bg-orange-200{--tw-bg-opacity:1;background-color:rgba(255, 204, 128, var(--tw-bg-opacity))}\n.bg-amber-200{--tw-bg-opacity:1;background-color:rgba(255, 224, 130, var(--tw-bg-opacity))}\n.bg-yellow-200{--tw-bg-opacity:1;background-color:rgba(255, 245, 157, var(--tw-bg-opacity))}\n.bg-lime-200{--tw-bg-opacity:1;background-color:rgba(230, 238, 156, var(--tw-bg-opacity))}\n.bg-light-green-200{--tw-bg-opacity:1;background-color:rgba(197, 225, 165, var(--tw-bg-opacity))}\n.bg-green-200{--tw-bg-opacity:1;background-color:rgba(165, 214, 167, var(--tw-bg-opacity))}\n.bg-teal-200{--tw-bg-opacity:1;background-color:rgba(128, 203, 196, var(--tw-bg-opacity))}\n.bg-cyan-200{--tw-bg-opacity:1;background-color:rgba(128, 222, 234, var(--tw-bg-opacity))}\n.bg-light-blue-200{--tw-bg-opacity:1;background-color:rgba(129, 212, 250, var(--tw-bg-opacity))}\n.bg-blue-200{--tw-bg-opacity:1;background-color:rgba(144, 202, 249, var(--tw-bg-opacity))}\n.bg-indigo-200{--tw-bg-opacity:1;background-color:rgba(159, 168, 218, var(--tw-bg-opacity))}\n.bg-deep-purple-200{--tw-bg-opacity:1;background-color:rgba(179, 157, 219, var(--tw-bg-opacity))}\n.bg-purple-200{--tw-bg-opacity:1;background-color:rgba(206, 147, 216, var(--tw-bg-opacity))}\n.bg-pink-200{--tw-bg-opacity:1;background-color:rgba(244, 143, 177, var(--tw-bg-opacity))}\n.bg-red-200{--tw-bg-opacity:1;background-color:rgba(239, 154, 154, var(--tw-bg-opacity))}\n.bg-opacity-20{--tw-bg-opacity:0.2}\n.bg-opacity-80{--tw-bg-opacity:0.8}\n.bg-gradient-to-tr{background-image:linear-gradient(to top right, var(--tw-gradient-stops))}\n.from-blue-gray-500{--tw-gradient-from:#607d8b;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(96, 125, 139, 0))}\n.from-gray-500{--tw-gradient-from:#9e9e9e;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(158, 158, 158, 0))}\n.from-brown-500{--tw-gradient-from:#795548;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(121, 85, 72, 0))}\n.from-deep-orange-500{--tw-gradient-from:#ff5722;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 87, 34, 0))}\n.from-orange-500{--tw-gradient-from:#ff9800;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 152, 0, 0))}\n.from-amber-500{--tw-gradient-from:#ffc107;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 193, 7, 0))}\n.from-yellow-600{--tw-gradient-from:#fdd835;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(253, 216, 53, 0))}\n.from-lime-500{--tw-gradient-from:#cddc39;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(205, 220, 57, 0))}\n.from-light-green-500{--tw-gradient-from:#8bc34a;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(139, 195, 74, 0))}\n.from-green-500{--tw-gradient-from:#4caf50;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(76, 175, 80, 0))}\n.from-teal-500{--tw-gradient-from:#009688;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 150, 136, 0))}\n.from-cyan-500{--tw-gradient-from:#00bcd4;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 188, 212, 0))}\n.from-light-blue-500{--tw-gradient-from:#03a9f4;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(3, 169, 244, 0))}\n.from-blue-500{--tw-gradient-from:#2196f3;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(33, 150, 243, 0))}\n.from-indigo-500{--tw-gradient-from:#3f51b5;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(63, 81, 181, 0))}\n.from-deep-purple-500{--tw-gradient-from:#673ab7;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(103, 58, 183, 0))}\n.from-purple-500{--tw-gradient-from:#9c27b0;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(156, 39, 176, 0))}\n.from-pink-500{--tw-gradient-from:#e91e63;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(233, 30, 99, 0))}\n.from-red-500{--tw-gradient-from:#f44336;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(244, 67, 54, 0))}\n.from-light-blue-700{--tw-gradient-from:#0288d1;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(2, 136, 209, 0))}\n.to-blue-gray-700{--tw-gradient-to:#455a64}\n.to-gray-700{--tw-gradient-to:#616161}\n.to-brown-700{--tw-gradient-to:#5d4037}\n.to-deep-orange-700{--tw-gradient-to:#e64a19}\n.to-orange-700{--tw-gradient-to:#f57c00}\n.to-amber-700{--tw-gradient-to:#ffa000}\n.to-yellow-800{--tw-gradient-to:#f9a825}\n.to-lime-700{--tw-gradient-to:#afb42b}\n.to-light-green-700{--tw-gradient-to:#689f38}\n.to-green-700{--tw-gradient-to:#388e3c}\n.to-teal-700{--tw-gradient-to:#00796b}\n.to-cyan-700{--tw-gradient-to:#0097a7}\n.to-light-blue-700{--tw-gradient-to:#0288d1}\n.to-blue-700{--tw-gradient-to:#1976d2}\n.to-indigo-700{--tw-gradient-to:#303f9f}\n.to-deep-purple-700{--tw-gradient-to:#512da8}\n.to-purple-700{--tw-gradient-to:#7b1fa2}\n.to-pink-700{--tw-gradient-to:#c2185b}\n.to-red-700{--tw-gradient-to:#d32f2f}\n.to-light-blue-500{--tw-gradient-to:#03a9f4}\n.p-4{padding:1rem}\n.p-3{padding:0.75rem}\n.p-8{padding:2rem}\n.p-2{padding:0.5rem}\n.p-0{padding:0px}\n.p-2\\.5{padding:0.625rem}\n.p-6{padding:1.5rem}\n.p-1{padding:0.25rem}\n.p-5{padding:1.25rem}\n.p-10{padding:2.5rem}\n.px-4{padding-left:1rem;padding-right:1rem}\n.py-16{padding-top:4rem;padding-bottom:4rem}\n.py-1{padding-top:0.25rem;padding-bottom:0.25rem}\n.py-8{padding-top:2rem;padding-bottom:2rem}\n.py-28{padding-top:7rem;padding-bottom:7rem}\n.px-12{padding-left:3rem;padding-right:3rem}\n.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}\n.px-2{padding-left:0.5rem;padding-right:0.5rem}\n.py-2{padding-top:0.5rem;padding-bottom:0.5rem}\n.py-20{padding-top:5rem;padding-bottom:5rem}\n.py-24{padding-top:6rem;padding-bottom:6rem}\n.py-5{padding-top:1.25rem;padding-bottom:1.25rem}\n.py-1\\.5{padding-top:0.375rem;padding-bottom:0.375rem}\n.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}\n.px-6{padding-left:1.5rem;padding-right:1.5rem}\n.py-3{padding-top:0.75rem;padding-bottom:0.75rem}\n.px-7{padding-left:1.75rem;padding-right:1.75rem}\n.py-4{padding-top:1rem;padding-bottom:1rem}\n.px-8{padding-left:2rem;padding-right:2rem}\n.px-9{padding-left:2.25rem;padding-right:2.25rem}\n.px-3{padding-left:0.75rem;padding-right:0.75rem}\n.px-0{padding-left:0px;padding-right:0px}\n.px-5{padding-left:1.25rem;padding-right:1.25rem}\n.px-1\\.5{padding-left:0.375rem;padding-right:0.375rem}\n.px-1{padding-left:0.25rem;padding-right:0.25rem}\n.pt-28{padding-top:7rem}\n.pb-36{padding-bottom:9rem}\n.pt-8{padding-top:2rem}\n.pb-6{padding-bottom:1.5rem}\n.pb-2{padding-bottom:0.5rem}\n.pt-6{padding-top:1.5rem}\n.pb-4{padding-bottom:1rem}\n.pb-20{padding-bottom:5rem}\n.pt-32{padding-top:8rem}\n.pt-48{padding-top:12rem}\n.pt-24{padding-top:6rem}\n.pb-64{padding-bottom:16rem}\n.pb-16{padding-bottom:4rem}\n.pr-12{padding-right:3rem}\n.pl-4{padding-left:1rem}\n.pt-4{padding-top:1rem}\n.pt-9{padding-top:2.25rem}\n.pl-0{padding-left:0px}\n.pt-10{padding-top:2.5rem}\n.pl-5{padding-left:1.25rem}\n.pr-3{padding-right:0.75rem}\n.pl-7{padding-left:1.75rem}\n.pr-5{padding-right:1.25rem}\n.pl-8{padding-left:2rem}\n.pr-6{padding-right:1.5rem}\n.pt-1\\.5{padding-top:0.375rem}\n.pb-0\\.5{padding-bottom:0.125rem}\n.pt-1{padding-top:0.25rem}\n.pb-0{padding-bottom:0px}\n.pt-2\\.5{padding-top:0.625rem}\n.pb-1\\.5{padding-bottom:0.375rem}\n.pt-2{padding-top:0.5rem}\n.pb-1{padding-bottom:0.25rem}\n.pt-3\\.5{padding-top:0.875rem}\n.pb-2\\.5{padding-bottom:0.625rem}\n.pt-3{padding-top:0.75rem}\n.pl-2{padding-left:0.5rem}\n.pr-7{padding-right:1.75rem}\n.pl-3{padding-left:0.75rem}\n.pr-9{padding-right:2.25rem}\n.pr-1{padding-right:0.25rem}\n.pb-10{padding-bottom:2.5rem}\n.pt-16{padding-top:4rem}\n.text-center{text-align:center}\n.text-right{text-align:right}\n.text-left{text-align:left}\n.align-middle{vertical-align:middle}\n.font-serif{font-family:\"Roboto Slab\", serif}\n.text-xl{font-size:1.25rem;line-height:1.75rem}\n.text-sm{font-size:0.875rem;line-height:1.25rem}\n.text-xs{font-size:0.75rem;line-height:1rem}\n.text-6xl{font-size:3.75rem;line-height:1}\n.text-lg{font-size:1.125rem;line-height:1.75rem}\n.text-base{font-size:1rem;line-height:1.5rem}\n.text-2xl{font-size:1.5rem;line-height:2rem}\n.text-4xl{font-size:2.25rem;line-height:2.5rem}\n.text-3xl{font-size:1.875rem;line-height:2.25rem}\n.text-5xl{font-size:3rem;line-height:1}\n.text-7xl{font-size:4.5rem;line-height:1}\n.text-8xl{font-size:6rem;line-height:1}\n.text-9xl{font-size:8rem;line-height:1}\n.font-medium{font-weight:500}\n.font-semibold{font-weight:600}\n.font-bold{font-weight:700}\n.font-light{font-weight:300}\n.font-normal{font-weight:400}\n.uppercase{text-transform:uppercase}\n.capitalize{text-transform:capitalize}\n.leading-relaxed{line-height:1.625}\n.leading-none{line-height:1}\n.leading-normal{line-height:1.5}\n.leading-10{line-height:2.5rem}\n.leading-snug{line-height:1.375}\n.tracking-wider{letter-spacing:0.05em}\n.tracking-wide{letter-spacing:0.025em}\n.text-gray-700{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.text-blue-gray-700{--tw-text-opacity:1;color:rgba(69, 90, 100, var(--tw-text-opacity))}\n.text-light-blue-500{--tw-text-opacity:1;color:rgba(3, 169, 244, var(--tw-text-opacity))}\n.text-blue-gray-800{--tw-text-opacity:1;color:rgba(55, 71, 79, var(--tw-text-opacity))}\n.text-blue-gray-900{--tw-text-opacity:1;color:rgba(38, 50, 56, var(--tw-text-opacity))}\n.text-blue-gray-200{--tw-text-opacity:1;color:rgba(176, 190, 197, var(--tw-text-opacity))}\n.text-blue-gray-50{--tw-text-opacity:1;color:rgba(236, 239, 241, var(--tw-text-opacity))}\n.text-cyan-600{--tw-text-opacity:1;color:rgba(0, 172, 193, var(--tw-text-opacity))}\n.text-gray-500{--tw-text-opacity:1;color:rgba(158, 158, 158, var(--tw-text-opacity))}\n.text-gray-900{--tw-text-opacity:1;color:rgba(33, 33, 33, var(--tw-text-opacity))}\n.text-blue-600{--tw-text-opacity:1;color:rgba(30, 136, 229, var(--tw-text-opacity))}\n.text-blue-400{--tw-text-opacity:1;color:rgba(66, 165, 245, var(--tw-text-opacity))}\n.text-indigo-500{--tw-text-opacity:1;color:rgba(63, 81, 181, var(--tw-text-opacity))}\n.text-pink-400{--tw-text-opacity:1;color:rgba(236, 64, 122, var(--tw-text-opacity))}\n.text-red-600{--tw-text-opacity:1;color:rgba(229, 57, 53, var(--tw-text-opacity))}\n.text-gray-600{--tw-text-opacity:1;color:rgba(117, 117, 117, var(--tw-text-opacity))}\n.text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}\n.text-blue-gray-500{--tw-text-opacity:1;color:rgba(96, 125, 139, var(--tw-text-opacity))}\n.text-brown-500{--tw-text-opacity:1;color:rgba(121, 85, 72, var(--tw-text-opacity))}\n.text-deep-orange-500{--tw-text-opacity:1;color:rgba(255, 87, 34, var(--tw-text-opacity))}\n.text-orange-500{--tw-text-opacity:1;color:rgba(255, 152, 0, var(--tw-text-opacity))}\n.text-amber-500{--tw-text-opacity:1;color:rgba(255, 193, 7, var(--tw-text-opacity))}\n.text-yellow-600{--tw-text-opacity:1;color:rgba(253, 216, 53, var(--tw-text-opacity))}\n.text-lime-500{--tw-text-opacity:1;color:rgba(205, 220, 57, var(--tw-text-opacity))}\n.text-light-green-500{--tw-text-opacity:1;color:rgba(139, 195, 74, var(--tw-text-opacity))}\n.text-green-500{--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n.text-teal-500{--tw-text-opacity:1;color:rgba(0, 150, 136, var(--tw-text-opacity))}\n.text-cyan-500{--tw-text-opacity:1;color:rgba(0, 188, 212, var(--tw-text-opacity))}\n.text-blue-500{--tw-text-opacity:1;color:rgba(33, 150, 243, var(--tw-text-opacity))}\n.text-deep-purple-500{--tw-text-opacity:1;color:rgba(103, 58, 183, var(--tw-text-opacity))}\n.text-purple-500{--tw-text-opacity:1;color:rgba(156, 39, 176, var(--tw-text-opacity))}\n.text-pink-500{--tw-text-opacity:1;color:rgba(233, 30, 99, var(--tw-text-opacity))}\n.text-red-500{--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.text-gray-400{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity))}\n.text-gray-800{--tw-text-opacity:1;color:rgba(66, 66, 66, var(--tw-text-opacity))}\n.text-brown-700{--tw-text-opacity:1;color:rgba(93, 64, 55, var(--tw-text-opacity))}\n.text-deep-orange-700{--tw-text-opacity:1;color:rgba(230, 74, 25, var(--tw-text-opacity))}\n.text-orange-700{--tw-text-opacity:1;color:rgba(245, 124, 0, var(--tw-text-opacity))}\n.text-amber-700{--tw-text-opacity:1;color:rgba(255, 160, 0, var(--tw-text-opacity))}\n.text-yellow-700{--tw-text-opacity:1;color:rgba(251, 192, 45, var(--tw-text-opacity))}\n.text-lime-700{--tw-text-opacity:1;color:rgba(175, 180, 43, var(--tw-text-opacity))}\n.text-light-green-700{--tw-text-opacity:1;color:rgba(104, 159, 56, var(--tw-text-opacity))}\n.text-green-700{--tw-text-opacity:1;color:rgba(56, 142, 60, var(--tw-text-opacity))}\n.text-teal-700{--tw-text-opacity:1;color:rgba(0, 121, 107, var(--tw-text-opacity))}\n.text-cyan-700{--tw-text-opacity:1;color:rgba(0, 151, 167, var(--tw-text-opacity))}\n.text-light-blue-700{--tw-text-opacity:1;color:rgba(2, 136, 209, var(--tw-text-opacity))}\n.text-blue-700{--tw-text-opacity:1;color:rgba(25, 118, 210, var(--tw-text-opacity))}\n.text-indigo-700{--tw-text-opacity:1;color:rgba(48, 63, 159, var(--tw-text-opacity))}\n.text-deep-purple-700{--tw-text-opacity:1;color:rgba(81, 45, 168, var(--tw-text-opacity))}\n.text-purple-700{--tw-text-opacity:1;color:rgba(123, 31, 162, var(--tw-text-opacity))}\n.text-pink-700{--tw-text-opacity:1;color:rgba(194, 24, 91, var(--tw-text-opacity))}\n.text-red-700{--tw-text-opacity:1;color:rgba(211, 47, 47, var(--tw-text-opacity))}\n.text-gray-200{--tw-text-opacity:1;color:rgba(238, 238, 238, var(--tw-text-opacity))}\n.text-brown-800{--tw-text-opacity:1;color:rgba(78, 52, 46, var(--tw-text-opacity))}\n.text-deep-orange-800{--tw-text-opacity:1;color:rgba(216, 67, 21, var(--tw-text-opacity))}\n.text-orange-800{--tw-text-opacity:1;color:rgba(239, 108, 0, var(--tw-text-opacity))}\n.text-amber-800{--tw-text-opacity:1;color:rgba(255, 143, 0, var(--tw-text-opacity))}\n.text-yellow-800{--tw-text-opacity:1;color:rgba(249, 168, 37, var(--tw-text-opacity))}\n.text-lime-800{--tw-text-opacity:1;color:rgba(158, 157, 36, var(--tw-text-opacity))}\n.text-light-green-800{--tw-text-opacity:1;color:rgba(85, 139, 47, var(--tw-text-opacity))}\n.text-green-800{--tw-text-opacity:1;color:rgba(46, 125, 50, var(--tw-text-opacity))}\n.text-teal-800{--tw-text-opacity:1;color:rgba(0, 105, 92, var(--tw-text-opacity))}\n.text-cyan-800{--tw-text-opacity:1;color:rgba(0, 131, 143, var(--tw-text-opacity))}\n.text-light-blue-800{--tw-text-opacity:1;color:rgba(2, 119, 189, var(--tw-text-opacity))}\n.text-blue-800{--tw-text-opacity:1;color:rgba(21, 101, 192, var(--tw-text-opacity))}\n.text-indigo-800{--tw-text-opacity:1;color:rgba(40, 53, 147, var(--tw-text-opacity))}\n.text-deep-purple-800{--tw-text-opacity:1;color:rgba(69, 39, 160, var(--tw-text-opacity))}\n.text-purple-800{--tw-text-opacity:1;color:rgba(106, 27, 154, var(--tw-text-opacity))}\n.text-pink-800{--tw-text-opacity:1;color:rgba(173, 20, 87, var(--tw-text-opacity))}\n.text-red-800{--tw-text-opacity:1;color:rgba(198, 40, 40, var(--tw-text-opacity))}\n.text-black{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}\n.text-opacity-60{--tw-text-opacity:0.6}\n.no-underline{text-decoration:none}\n.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}\n.placeholder-white::-moz-placeholder{--tw-placeholder-opacity:1;color:rgba(255, 255, 255, var(--tw-placeholder-opacity))}\n.placeholder-white:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgba(255, 255, 255, var(--tw-placeholder-opacity))}\n.placeholder-white::placeholder{--tw-placeholder-opacity:1;color:rgba(255, 255, 255, var(--tw-placeholder-opacity))}\n.placeholder-opacity-50::-moz-placeholder{--tw-placeholder-opacity:0.5}\n.placeholder-opacity-50:-ms-input-placeholder{--tw-placeholder-opacity:0.5}\n.placeholder-opacity-50::placeholder{--tw-placeholder-opacity:0.5}\n.opacity-50{opacity:0.5}\n.opacity-0{opacity:0}\n.opacity-100{opacity:1}\n.opacity-25{opacity:0.25}\n.opacity-5{opacity:0.05}\n.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-blue-gray{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(96, 125, 139, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-gray{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(158, 158, 158, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-brown{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(121, 85, 72, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-deep-orange{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 87, 36, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-orange{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 152, 0, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-amber{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 193, 7, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-yellow{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 235, 59, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-lime{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(205, 220, 57, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-light-green{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(139, 195, 74, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-green{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(76, 175, 80, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-teal{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 150, 136, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-cyan{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 188, 212, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-light-blue{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(3, 169, 244, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-blue{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(33, 150, 243, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-indigo{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(63, 81, 181, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-deep-purple{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(103, 58, 183, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-purple{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(156, 39, 176, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-pink{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(233, 30, 99, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-md-red{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(244, 67, 54, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-blue-gray{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(69, 90, 100, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-gray{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(97, 97, 97, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-brown{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(93, 64, 55, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-deep-orange{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(230, 74, 25, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-orange{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(245, 122, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-amber{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(255, 160, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-yellow{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(251, 192, 45, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-lime{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(175, 180, 43, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-light-green{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(104, 159, 56, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-green{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(56, 142, 60, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-teal{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 121, 107, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-cyan{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 151, 167, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-light-blue{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(2, 136, 209, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-blue{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(25, 118, 210, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-indigo{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(48, 63, 159, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-deep-purple{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(81, 45, 168, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-purple{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(123, 31, 162, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-pink{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(194, 24, 91, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-lg-red{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(211, 47, 47, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.outline-none{outline:2px solid transparent;outline-offset:2px}\n.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}\n.duration-300{transition-duration:300ms}\n.duration{transition-duration:150ms}\n.duration-500{transition-duration:500ms}\n/* Material Tailwind Input */\n.mt-input + label:after {\n        content: '';\n        pointer-events:none;\n        position:absolute;\n        top:0.125rem;\n        left:0px;\n        height:100%;\n        width:100%;\n        --tw-translate-x:0;\n        --tw-translate-y:0;\n        --tw-rotate:0;\n        --tw-skew-x:0;\n        --tw-skew-y:0;\n        --tw-scale-x:1;\n        --tw-scale-y:1;\n        transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n        --tw-scale-x:0;\n        border-width:1px;\n        border-top-width:0px;\n        border-left-width:0px;\n        border-right-width:0px;\n        border-bottom-width:2px;\n        transition-property:all;\n        transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration:150ms;\n        transition-duration:300ms;\n    }\n.mt-input:focus + label:after{--tw-scale-x:1}\n.mt-input:not(:-moz-placeholder-shown) + label span {\n        top: -14%;\n    }\n.mt-input:not(:-ms-input-placeholder) + label span {\n        top: -14%;\n    }\n.mt-input:focus + label span,\n    .mt-input:not(:placeholder-shown) + label span {\n        top: -14%;\n    }\n.mt-input:not(:-moz-placeholder-shown) + label span{font-size:0.75rem;line-height:1rem;line-height:1.25}\n.mt-input:not(:-ms-input-placeholder) + label span{font-size:0.75rem;line-height:1rem;line-height:1.25}\n.mt-input:focus + label span, .mt-input:not(:placeholder-shown) + label span{font-size:0.75rem;line-height:1rem;line-height:1.25}\n.texterea:not(:-moz-placeholder-shown) + label span {\n        top: -22px !important;\n    }\n.texterea:not(:-ms-input-placeholder) + label span {\n        top: -22px !important;\n    }\n.texterea:focus + label span,\n    .texterea:not(:placeholder-shown) + label span {\n        top: -22px !important;\n    }\n/* Material Tailwind Input Outline */\n.mt-input-outline:not(:-moz-placeholder-shown) {\n        border-top: transparent !important;\n    }\n.mt-input-outline:not(:-ms-input-placeholder) {\n        border-top: transparent !important;\n    }\n.mt-input-outline:focus,\n    .mt-input-outline:not(:placeholder-shown) {\n        border-top: transparent !important;\n    }\n.mt-input-outline + label {\n        line-height: 3.625 !important;\n    }\n.mt-input-outline:not(:-moz-placeholder-shown) + label{font-size:0.75rem !important;line-height:1rem !important;line-height:1.25 !important}\n.mt-input-outline:not(:-ms-input-placeholder) + label{font-size:0.75rem !important;line-height:1rem !important;line-height:1.25 !important}\n.mt-input-outline:focus + label, .mt-input-outline:not(:placeholder-shown) + label{font-size:0.75rem !important;line-height:1rem !important;line-height:1.25 !important}\n.mt-input-outline + label:before,\n    .mt-input-outline + label:after {\n        content: '';\n    }\n.mt-input-outline + label:before, .mt-input-outline + label:after{pointer-events:none;margin-top:0.375rem;box-sizing:border-box;display:block;height:0.5rem;width:0.625rem;border-width:1px;border-top-width:2px;border-bottom-width:0px;border-left-width:0px;border-right-width:0px;border-color:transparent}\n.mt-input-outline:not(:-moz-placeholder-shown) + label:before, .mt-input-outline:not(:-moz-placeholder-shown) + label:after{border-top-width:1px;--tw-border-opacity:1;border-color:rgba(224, 224, 224, var(--tw-border-opacity))}\n.mt-input-outline:not(:-ms-input-placeholder) + label:before, .mt-input-outline:not(:-ms-input-placeholder) + label:after{border-top-width:1px;--tw-border-opacity:1;border-color:rgba(224, 224, 224, var(--tw-border-opacity))}\n.mt-input-outline:not(:placeholder-shown) + label:before, .mt-input-outline:not(:placeholder-shown) + label:after{border-top-width:1px;--tw-border-opacity:1;border-color:rgba(224, 224, 224, var(--tw-border-opacity))}\n.mt-input-outline:focus + label::before, .mt-input-outline:focus + label::after{border-top-width:2px}\n.mt-input-outline + label:before{margin-right:0.25rem;border-top-left-radius:0.5rem}\n.mt-input-outline + label:after{margin-left:0.25rem;flex-grow:1;border-top-right-radius:0.5rem}\n/* Material Tailwind Radio Button */\n.mt-radio:checked + label span {\n        box-shadow: 0px 0px 0px 2px white inset;\n        --tw-bg-opacity:1 !important;\n    }\n.mt-radio:checked + label{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.mt-radio + label span::before {\n        content: '';\n        top: -1.5px;\n        left: -1.5px;\n        transform: scale3d(1, 1, 1);\n        position:absolute;\n        z-index:10;\n        margin:0px;\n        display:block;\n        height:1rem;\n        width:1rem;\n        border-radius:9999px;\n        opacity:0;\n    }\n.mt-radio:checked + label span::before {\n        -webkit-animation: radio-ripple 0.3s linear;\n                animation: radio-ripple 0.3s linear;\n    }\n/* Material Tailwind Checkbox */\n.mt-checkbox:checked + label span{--tw-bg-opacity:1 !important}\n.mt-checkbox:checked + label{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.mt-checkbox + label span::before {\n        content: '';\n        top: -1px;\n        left: -1.5px;\n        transform: scale3d(2, 2, 1);\n        position:absolute;\n        z-index:10;\n        margin:0px;\n        display:block;\n        height:1.25rem;\n        width:1.25rem;\n        border-radius:9999px;\n        opacity:0;\n    }\n.mt-checkbox + label span::after {\n        content: '';\n        top: 1px;\n        left: 6px;\n        position:absolute;\n        height:0.875rem;\n        width:0.375rem;\n        --tw-translate-x:0;\n        --tw-translate-y:0;\n        --tw-rotate:0;\n        --tw-skew-x:0;\n        --tw-skew-y:0;\n        --tw-scale-x:1;\n        --tw-scale-y:1;\n        transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n        --tw-rotate:45deg;\n        border-bottom-width:2px;\n        border-right-width:2px;\n        border-color:transparent;\n        transition-property:all;\n        transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration:150ms;\n        transition-duration:200ms;\n    }\n.mt-checkbox:checked + label span::before {\n        -webkit-animation: radio-ripple 0.3s linear;\n                animation: radio-ripple 0.3s linear;\n    }\n.mt-checkbox:checked + label span::after{--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity))}\n/* Material Tailwind Input Colors */\n.mt-input-blue-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity))}\n.mt-input-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity))}\n.mt-input-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity))}\n.mt-input-deep-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity))}\n.mt-input-amber-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity))}\n.mt-input-yellow-600:focus + label:after{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity))}\n.mt-input-lime-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity))}\n.mt-input-light-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity))}\n.mt-input-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity))}\n.mt-input-teal-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity))}\n.mt-input-cyan-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity))}\n.mt-input-light-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity))}\n.mt-input-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity))}\n.mt-input-indigo-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity))}\n.mt-input-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity))}\n.mt-input-deep-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity))}\n.mt-input-pink-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity))}\n.mt-input-red-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity))}\n/* Material Tailwind Input Outline Colors */\n.mt-input-outline-blue-gray-500:focus, .mt-input-outline-blue-gray-500:focus + label, .mt-input-outline-blue-gray-500:focus + label:before, .mt-input-outline-blue-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(96, 125, 139, var(--tw-text-opacity))}\n.mt-input-outline-gray-500:focus, .mt-input-outline-gray-500:focus + label, .mt-input-outline-gray-500:focus + label:before, .mt-input-outline-gray-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(158, 158, 158, var(--tw-text-opacity))}\n.mt-input-outline-orange-500:focus, .mt-input-outline-orange-500:focus + label, .mt-input-outline-orange-500:focus + label:before, .mt-input-outline-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(255, 152, 0, var(--tw-text-opacity))}\n.mt-input-outline-deep-orange-500:focus, .mt-input-outline-deep-orange-500:focus + label, .mt-input-outline-deep-orange-500:focus + label:before, .mt-input-outline-deep-orange-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(255, 87, 34, var(--tw-text-opacity))}\n.mt-input-outline-brown-500:focus, .mt-input-outline-brown-500:focus + label, .mt-input-outline-brown-500:focus + label:before, .mt-input-outline-brown-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(121, 85, 72, var(--tw-text-opacity))}\n.mt-input-outline-amber-500:focus, .mt-input-outline-amber-500:focus + label, .mt-input-outline-amber-500:focus + label:before, .mt-input-outline-amber-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(255, 193, 7, var(--tw-text-opacity))}\n.mt-input-outline-yellow-600:focus, .mt-input-outline-yellow-600:focus + label, .mt-input-outline-yellow-600:focus + label:before, .mt-input-outline-yellow-600:focus + label:after{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(253, 216, 53, var(--tw-text-opacity))}\n.mt-input-outline-lime-500:focus, .mt-input-outline-lime-500:focus + label, .mt-input-outline-lime-500:focus + label:before, .mt-input-outline-lime-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(205, 220, 57, var(--tw-text-opacity))}\n.mt-input-outline-light-green-500:focus, .mt-input-outline-light-green-500:focus + label, .mt-input-outline-light-green-500:focus + label:before, .mt-input-outline-light-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(139, 195, 74, var(--tw-text-opacity))}\n.mt-input-outline-green-500:focus, .mt-input-outline-green-500:focus + label, .mt-input-outline-green-500:focus + label:before, .mt-input-outline-green-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n.mt-input-outline-teal-500:focus, .mt-input-outline-teal-500:focus + label, .mt-input-outline-teal-500:focus + label:before, .mt-input-outline-teal-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(0, 150, 136, var(--tw-text-opacity))}\n.mt-input-outline-cyan-500:focus, .mt-input-outline-cyan-500:focus + label, .mt-input-outline-cyan-500:focus + label:before, .mt-input-outline-cyan-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(0, 188, 212, var(--tw-text-opacity))}\n.mt-input-outline-light-blue-500:focus, .mt-input-outline-light-blue-500:focus + label, .mt-input-outline-light-blue-500:focus + label:before, .mt-input-outline-light-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(3, 169, 244, var(--tw-text-opacity))}\n.mt-input-outline-blue-500:focus, .mt-input-outline-blue-500:focus + label, .mt-input-outline-blue-500:focus + label:before, .mt-input-outline-blue-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(33, 150, 243, var(--tw-text-opacity))}\n.mt-input-outline-indigo-500:focus, .mt-input-outline-indigo-500:focus + label, .mt-input-outline-indigo-500:focus + label:before, .mt-input-outline-indigo-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(63, 81, 181, var(--tw-text-opacity))}\n.mt-input-outline-purple-500:focus, .mt-input-outline-purple-500:focus + label, .mt-input-outline-purple-500:focus + label:before, .mt-input-outline-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(156, 39, 176, var(--tw-text-opacity))}\n.mt-input-outline-deep-purple-500:focus, .mt-input-outline-deep-purple-500:focus + label, .mt-input-outline-deep-purple-500:focus + label:before, .mt-input-outline-deep-purple-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(103, 58, 183, var(--tw-text-opacity))}\n.mt-input-outline-pink-500:focus, .mt-input-outline-pink-500:focus + label, .mt-input-outline-pink-500:focus + label:before, .mt-input-outline-pink-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(233, 30, 99, var(--tw-text-opacity))}\n.mt-input-outline-red-500:focus, .mt-input-outline-red-500:focus + label, .mt-input-outline-red-500:focus + label:before, .mt-input-outline-red-500:focus + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.mt-input-outline-error:not(:-moz-placeholder-shown) + label, .mt-input-outline-error:not(:-moz-placeholder-shown) + label:before, .mt-input-outline-error:not(:-moz-placeholder-shown) + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.mt-input-outline-error:not(:-ms-input-placeholder) + label, .mt-input-outline-error:not(:-ms-input-placeholder) + label:before, .mt-input-outline-error:not(:-ms-input-placeholder) + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.mt-input-outline-error:not(:placeholder-shown) + label, .mt-input-outline-error:not(:placeholder-shown) + label:before, .mt-input-outline-error:not(:placeholder-shown) + label:after{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(244, 67, 54, var(--tw-text-opacity))}\n.mt-input-outline-success:not(:-moz-placeholder-shown) + label, .mt-input-outline-success:not(:-moz-placeholder-shown) + label:before, .mt-input-outline-success:not(:-moz-placeholder-shown) + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n.mt-input-outline-success:not(:-ms-input-placeholder) + label, .mt-input-outline-success:not(:-ms-input-placeholder) + label:before, .mt-input-outline-success:not(:-ms-input-placeholder) + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n.mt-input-outline-success:not(:placeholder-shown) + label, .mt-input-outline-success:not(:placeholder-shown) + label:before, .mt-input-outline-success:not(:placeholder-shown) + label:after{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(76, 175, 80, var(--tw-text-opacity))}\n/* Material Tailwind Radio Button and Checkbox Colors */\n.mt-radio-blue-gray-500:checked + label span, .mt-radio-blue-gray-500 + label span::before, .mt-checkbox-blue-gray-500:checked + label span, .mt-checkbox-blue-gray-500 + label span::before{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(96, 125, 139, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-gray-500:checked + label span, .mt-radio-gray-500 + label span::before, .mt-checkbox-gray-500:checked + label span, .mt-checkbox-gray-500 + label span::before{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-orange-500:checked + label span, .mt-radio-orange-500 + label span::before, .mt-checkbox-orange-500:checked + label span, .mt-checkbox-orange-500 + label span::before{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(255, 152, 0, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-deep-orange-500:checked + label span, .mt-radio-deep-orange-500 + label span::before, .mt-checkbox-deep-orange-500:checked + label span, .mt-checkbox-deep-orange-500 + label span::before{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(255, 87, 34, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-brown-500:checked + label span, .mt-radio-brown-500 + label span::before, .mt-checkbox-brown-500:checked + label span, .mt-checkbox-brown-500 + label span::before{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(121, 85, 72, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-amber-500:checked + label span, .mt-radio-amber-500 + label span::before, .mt-checkbox-amber-500:checked + label span, .mt-checkbox-amber-500 + label span::before{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(255, 193, 7, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-yellow-600:checked + label span, .mt-radio-yellow-600 + label span::before, .mt-checkbox-yellow-600:checked + label span, .mt-checkbox-yellow-600 + label span::before{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(253, 216, 53, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-lime-500:checked + label span, .mt-radio-lime-500 + label span::before, .mt-checkbox-lime-500:checked + label span, .mt-checkbox-lime-500 + label span::before{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(205, 220, 57, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-light-green-500:checked + label span, .mt-radio-light-green-500 + label span::before, .mt-checkbox-light-green-500:checked + label span, .mt-checkbox-light-green-500 + label span::before{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(139, 195, 74, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-green-500:checked + label span, .mt-radio-green-500 + label span::before, .mt-checkbox-green-500:checked + label span, .mt-checkbox-green-500 + label span::before{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(76, 175, 80, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-teal-500:checked + label span, .mt-radio-teal-500 + label span::before, .mt-checkbox-teal-500:checked + label span, .mt-checkbox-teal-500 + label span::before{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(0, 150, 136, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-cyan-500:checked + label span, .mt-radio-cyan-500 + label span::before, .mt-checkbox-cyan-500:checked + label span, .mt-checkbox-cyan-500 + label span::before{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(0, 188, 212, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-light-blue-500:checked + label span, .mt-radio-light-blue-500 + label span::before, .mt-checkbox-light-blue-500:checked + label span, .mt-checkbox-light-blue-500 + label span::before{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(3, 169, 244, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-blue-500:checked + label span, .mt-radio-blue-500 + label span::before, .mt-checkbox-blue-500:checked + label span, .mt-checkbox-blue-500 + label span::before{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(33, 150, 243, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-indigo-500:checked + label span, .mt-radio-indigo-500 + label span::before, .mt-checkbox-indigo-500:checked + label span, .mt-checkbox-indigo-500 + label span::before{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(63, 81, 181, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-purple-500:checked + label span, .mt-radio-purple-500 + label span::before, .mt-checkbox-purple-500:checked + label span, .mt-checkbox-purple-500 + label span::before{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(156, 39, 176, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-deep-purple-500:checked + label span, .mt-radio-deep-purple-500 + label span::before, .mt-checkbox-deep-purple-500:checked + label span, .mt-checkbox-deep-purple-500 + label span::before{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(103, 58, 183, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-pink-500:checked + label span, .mt-radio-pink-500 + label span::before, .mt-checkbox-pink-500:checked + label span, .mt-checkbox-pink-500 + label span::before{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(233, 30, 99, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n.mt-radio-red-500:checked + label span, .mt-radio-red-500 + label span::before, .mt-checkbox-red-500:checked + label span, .mt-checkbox-red-500 + label span::before{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(244, 67, 54, var(--tw-bg-opacity));--tw-bg-opacity:0.2}\n/* Tippy Boxx */\n.tippy-box:focus {\n    outline: none;\n}\n/* Tippy Animation */\n.tippy-box[data-animation='scale'] {\n    transform-origin: top left !important;\n}\n/* Tippy Arrow */\n.arrow-light .tippy-svg-arrow {\n    fill: #fff;\n}\n.arrow-dark .tippy-svg-arrow {\n    fill: rgba(0, 0, 0, 0.8);\n}\n/* Material Tailwind Radio Button Ripple Effect Animation */\n@-webkit-keyframes radio-ripple {\n    from {\n        opacity: 0;\n        transform: scale3d(1, 1, 1);\n    }\n    50% {\n        opacity: 1;\n        transform: scale3d(2, 2, 1);\n    }\n    to {\n        opacity: 0;\n        transform: scale3d(3, 3, 1);\n    }\n}\n@keyframes radio-ripple {\n    from {\n        opacity: 0;\n        transform: scale3d(1, 1, 1);\n    }\n    50% {\n        opacity: 1;\n        transform: scale3d(2, 2, 1);\n    }\n    to {\n        opacity: 0;\n        transform: scale3d(3, 3, 1);\n    }\n}\n.last\\:mr-0:last-child{margin-right:0px}\n.hover\\:border-blue-gray-700:hover{--tw-border-opacity:1;border-color:rgba(69, 90, 100, var(--tw-border-opacity))}\n.hover\\:border-gray-700:hover{--tw-border-opacity:1;border-color:rgba(97, 97, 97, var(--tw-border-opacity))}\n.hover\\:border-brown-700:hover{--tw-border-opacity:1;border-color:rgba(93, 64, 55, var(--tw-border-opacity))}\n.hover\\:border-deep-orange-700:hover{--tw-border-opacity:1;border-color:rgba(230, 74, 25, var(--tw-border-opacity))}\n.hover\\:border-orange-700:hover{--tw-border-opacity:1;border-color:rgba(245, 124, 0, var(--tw-border-opacity))}\n.hover\\:border-amber-700:hover{--tw-border-opacity:1;border-color:rgba(255, 160, 0, var(--tw-border-opacity))}\n.hover\\:border-yellow-700:hover{--tw-border-opacity:1;border-color:rgba(251, 192, 45, var(--tw-border-opacity))}\n.hover\\:border-lime-700:hover{--tw-border-opacity:1;border-color:rgba(175, 180, 43, var(--tw-border-opacity))}\n.hover\\:border-light-green-700:hover{--tw-border-opacity:1;border-color:rgba(104, 159, 56, var(--tw-border-opacity))}\n.hover\\:border-green-700:hover{--tw-border-opacity:1;border-color:rgba(56, 142, 60, var(--tw-border-opacity))}\n.hover\\:border-teal-700:hover{--tw-border-opacity:1;border-color:rgba(0, 121, 107, var(--tw-border-opacity))}\n.hover\\:border-cyan-700:hover{--tw-border-opacity:1;border-color:rgba(0, 151, 167, var(--tw-border-opacity))}\n.hover\\:border-light-blue-700:hover{--tw-border-opacity:1;border-color:rgba(2, 136, 209, var(--tw-border-opacity))}\n.hover\\:border-blue-700:hover{--tw-border-opacity:1;border-color:rgba(25, 118, 210, var(--tw-border-opacity))}\n.hover\\:border-indigo-700:hover{--tw-border-opacity:1;border-color:rgba(48, 63, 159, var(--tw-border-opacity))}\n.hover\\:border-deep-purple-700:hover{--tw-border-opacity:1;border-color:rgba(81, 45, 168, var(--tw-border-opacity))}\n.hover\\:border-purple-700:hover{--tw-border-opacity:1;border-color:rgba(123, 31, 162, var(--tw-border-opacity))}\n.hover\\:border-pink-700:hover{--tw-border-opacity:1;border-color:rgba(194, 24, 91, var(--tw-border-opacity))}\n.hover\\:border-red-700:hover{--tw-border-opacity:1;border-color:rgba(211, 47, 47, var(--tw-border-opacity))}\n.hover\\:bg-blue-gray-700:hover{--tw-bg-opacity:1;background-color:rgba(69, 90, 100, var(--tw-bg-opacity))}\n.hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgba(97, 97, 97, var(--tw-bg-opacity))}\n.hover\\:bg-brown-700:hover{--tw-bg-opacity:1;background-color:rgba(93, 64, 55, var(--tw-bg-opacity))}\n.hover\\:bg-deep-orange-700:hover{--tw-bg-opacity:1;background-color:rgba(230, 74, 25, var(--tw-bg-opacity))}\n.hover\\:bg-orange-700:hover{--tw-bg-opacity:1;background-color:rgba(245, 124, 0, var(--tw-bg-opacity))}\n.hover\\:bg-amber-700:hover{--tw-bg-opacity:1;background-color:rgba(255, 160, 0, var(--tw-bg-opacity))}\n.hover\\:bg-yellow-700:hover{--tw-bg-opacity:1;background-color:rgba(251, 192, 45, var(--tw-bg-opacity))}\n.hover\\:bg-lime-700:hover{--tw-bg-opacity:1;background-color:rgba(175, 180, 43, var(--tw-bg-opacity))}\n.hover\\:bg-light-green-700:hover{--tw-bg-opacity:1;background-color:rgba(104, 159, 56, var(--tw-bg-opacity))}\n.hover\\:bg-green-700:hover{--tw-bg-opacity:1;background-color:rgba(56, 142, 60, var(--tw-bg-opacity))}\n.hover\\:bg-teal-700:hover{--tw-bg-opacity:1;background-color:rgba(0, 121, 107, var(--tw-bg-opacity))}\n.hover\\:bg-cyan-700:hover{--tw-bg-opacity:1;background-color:rgba(0, 151, 167, var(--tw-bg-opacity))}\n.hover\\:bg-light-blue-700:hover{--tw-bg-opacity:1;background-color:rgba(2, 136, 209, var(--tw-bg-opacity))}\n.hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgba(25, 118, 210, var(--tw-bg-opacity))}\n.hover\\:bg-indigo-700:hover{--tw-bg-opacity:1;background-color:rgba(48, 63, 159, var(--tw-bg-opacity))}\n.hover\\:bg-deep-purple-700:hover{--tw-bg-opacity:1;background-color:rgba(81, 45, 168, var(--tw-bg-opacity))}\n.hover\\:bg-purple-700:hover{--tw-bg-opacity:1;background-color:rgba(123, 31, 162, var(--tw-bg-opacity))}\n.hover\\:bg-pink-700:hover{--tw-bg-opacity:1;background-color:rgba(194, 24, 91, var(--tw-bg-opacity))}\n.hover\\:bg-red-700:hover{--tw-bg-opacity:1;background-color:rgba(211, 47, 47, var(--tw-bg-opacity))}\n.hover\\:bg-blue-gray-50:hover{--tw-bg-opacity:1;background-color:rgba(236, 239, 241, var(--tw-bg-opacity))}\n.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgba(250, 250, 250, var(--tw-bg-opacity))}\n.hover\\:bg-brown-50:hover{--tw-bg-opacity:1;background-color:rgba(239, 235, 233, var(--tw-bg-opacity))}\n.hover\\:bg-deep-orange-50:hover{--tw-bg-opacity:1;background-color:rgba(251, 233, 231, var(--tw-bg-opacity))}\n.hover\\:bg-orange-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 243, 224, var(--tw-bg-opacity))}\n.hover\\:bg-amber-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 248, 225, var(--tw-bg-opacity))}\n.hover\\:bg-yellow-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 253, 231, var(--tw-bg-opacity))}\n.hover\\:bg-lime-50:hover{--tw-bg-opacity:1;background-color:rgba(249, 251, 231, var(--tw-bg-opacity))}\n.hover\\:bg-light-green-50:hover{--tw-bg-opacity:1;background-color:rgba(241, 248, 233, var(--tw-bg-opacity))}\n.hover\\:bg-green-50:hover{--tw-bg-opacity:1;background-color:rgba(232, 245, 233, var(--tw-bg-opacity))}\n.hover\\:bg-teal-50:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 241, var(--tw-bg-opacity))}\n.hover\\:bg-cyan-50:hover{--tw-bg-opacity:1;background-color:rgba(224, 247, 250, var(--tw-bg-opacity))}\n.hover\\:bg-light-blue-50:hover{--tw-bg-opacity:1;background-color:rgba(225, 245, 254, var(--tw-bg-opacity))}\n.hover\\:bg-blue-50:hover{--tw-bg-opacity:1;background-color:rgba(227, 242, 253, var(--tw-bg-opacity))}\n.hover\\:bg-indigo-50:hover{--tw-bg-opacity:1;background-color:rgba(232, 234, 246, var(--tw-bg-opacity))}\n.hover\\:bg-deep-purple-50:hover{--tw-bg-opacity:1;background-color:rgba(237, 231, 246, var(--tw-bg-opacity))}\n.hover\\:bg-purple-50:hover{--tw-bg-opacity:1;background-color:rgba(243, 229, 245, var(--tw-bg-opacity))}\n.hover\\:bg-pink-50:hover{--tw-bg-opacity:1;background-color:rgba(252, 228, 236, var(--tw-bg-opacity))}\n.hover\\:bg-red-50:hover{--tw-bg-opacity:1;background-color:rgba(255, 235, 238, var(--tw-bg-opacity))}\n.hover\\:bg-blue-gray-500:hover{--tw-bg-opacity:1;background-color:rgba(96, 125, 139, var(--tw-bg-opacity))}\n.hover\\:bg-gray-500:hover{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.hover\\:bg-brown-500:hover{--tw-bg-opacity:1;background-color:rgba(121, 85, 72, var(--tw-bg-opacity))}\n.hover\\:bg-deep-orange-500:hover{--tw-bg-opacity:1;background-color:rgba(255, 87, 34, var(--tw-bg-opacity))}\n.hover\\:bg-orange-500:hover{--tw-bg-opacity:1;background-color:rgba(255, 152, 0, var(--tw-bg-opacity))}\n.hover\\:bg-amber-500:hover{--tw-bg-opacity:1;background-color:rgba(255, 193, 7, var(--tw-bg-opacity))}\n.hover\\:bg-yellow-600:hover{--tw-bg-opacity:1;background-color:rgba(253, 216, 53, var(--tw-bg-opacity))}\n.hover\\:bg-lime-500:hover{--tw-bg-opacity:1;background-color:rgba(205, 220, 57, var(--tw-bg-opacity))}\n.hover\\:bg-light-green-500:hover{--tw-bg-opacity:1;background-color:rgba(139, 195, 74, var(--tw-bg-opacity))}\n.hover\\:bg-green-500:hover{--tw-bg-opacity:1;background-color:rgba(76, 175, 80, var(--tw-bg-opacity))}\n.hover\\:bg-teal-500:hover{--tw-bg-opacity:1;background-color:rgba(0, 150, 136, var(--tw-bg-opacity))}\n.hover\\:bg-cyan-500:hover{--tw-bg-opacity:1;background-color:rgba(0, 188, 212, var(--tw-bg-opacity))}\n.hover\\:bg-light-blue-500:hover{--tw-bg-opacity:1;background-color:rgba(3, 169, 244, var(--tw-bg-opacity))}\n.hover\\:bg-blue-500:hover{--tw-bg-opacity:1;background-color:rgba(33, 150, 243, var(--tw-bg-opacity))}\n.hover\\:bg-indigo-500:hover{--tw-bg-opacity:1;background-color:rgba(63, 81, 181, var(--tw-bg-opacity))}\n.hover\\:bg-deep-purple-500:hover{--tw-bg-opacity:1;background-color:rgba(103, 58, 183, var(--tw-bg-opacity))}\n.hover\\:bg-purple-500:hover{--tw-bg-opacity:1;background-color:rgba(156, 39, 176, var(--tw-bg-opacity))}\n.hover\\:bg-pink-500:hover{--tw-bg-opacity:1;background-color:rgba(233, 30, 99, var(--tw-bg-opacity))}\n.hover\\:bg-red-500:hover{--tw-bg-opacity:1;background-color:rgba(244, 67, 54, var(--tw-bg-opacity))}\n.hover\\:bg-white:hover{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}\n.hover\\:bg-opacity-20:hover{--tw-bg-opacity:0.2}\n.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgba(33, 33, 33, var(--tw-text-opacity))}\n.hover\\:text-blue-gray-800:hover{--tw-text-opacity:1;color:rgba(55, 71, 79, var(--tw-text-opacity))}\n.hover\\:text-blue-gray-700:hover{--tw-text-opacity:1;color:rgba(69, 90, 100, var(--tw-text-opacity))}\n.hover\\:text-gray-700:hover{--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity))}\n.hover\\:text-brown-700:hover{--tw-text-opacity:1;color:rgba(93, 64, 55, var(--tw-text-opacity))}\n.hover\\:text-deep-orange-700:hover{--tw-text-opacity:1;color:rgba(230, 74, 25, var(--tw-text-opacity))}\n.hover\\:text-orange-700:hover{--tw-text-opacity:1;color:rgba(245, 124, 0, var(--tw-text-opacity))}\n.hover\\:text-amber-700:hover{--tw-text-opacity:1;color:rgba(255, 160, 0, var(--tw-text-opacity))}\n.hover\\:text-yellow-700:hover{--tw-text-opacity:1;color:rgba(251, 192, 45, var(--tw-text-opacity))}\n.hover\\:text-lime-700:hover{--tw-text-opacity:1;color:rgba(175, 180, 43, var(--tw-text-opacity))}\n.hover\\:text-light-green-700:hover{--tw-text-opacity:1;color:rgba(104, 159, 56, var(--tw-text-opacity))}\n.hover\\:text-green-700:hover{--tw-text-opacity:1;color:rgba(56, 142, 60, var(--tw-text-opacity))}\n.hover\\:text-teal-700:hover{--tw-text-opacity:1;color:rgba(0, 121, 107, var(--tw-text-opacity))}\n.hover\\:text-cyan-700:hover{--tw-text-opacity:1;color:rgba(0, 151, 167, var(--tw-text-opacity))}\n.hover\\:text-light-blue-700:hover{--tw-text-opacity:1;color:rgba(2, 136, 209, var(--tw-text-opacity))}\n.hover\\:text-blue-700:hover{--tw-text-opacity:1;color:rgba(25, 118, 210, var(--tw-text-opacity))}\n.hover\\:text-indigo-700:hover{--tw-text-opacity:1;color:rgba(48, 63, 159, var(--tw-text-opacity))}\n.hover\\:text-deep-purple-700:hover{--tw-text-opacity:1;color:rgba(81, 45, 168, var(--tw-text-opacity))}\n.hover\\:text-purple-700:hover{--tw-text-opacity:1;color:rgba(123, 31, 162, var(--tw-text-opacity))}\n.hover\\:text-pink-700:hover{--tw-text-opacity:1;color:rgba(194, 24, 91, var(--tw-text-opacity))}\n.hover\\:text-red-700:hover{--tw-text-opacity:1;color:rgba(211, 47, 47, var(--tw-text-opacity))}\n.hover\\:text-white:hover{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}\n.hover\\:shadow-lg-blue-gray:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(69, 90, 100, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-gray:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(97, 97, 97, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-brown:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(93, 64, 55, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-deep-orange:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(230, 74, 25, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-orange:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(245, 122, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-amber:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(255, 160, 0, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-yellow:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(251, 192, 45, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-lime:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(175, 180, 43, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-light-green:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(104, 159, 56, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-green:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(56, 142, 60, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-teal:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 121, 107, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-cyan:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 151, 167, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-light-blue:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(2, 136, 209, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-blue:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(25, 118, 210, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-indigo:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(48, 63, 159, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-deep-purple:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(81, 45, 168, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-purple:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(123, 31, 162, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-pink:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(194, 24, 91, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-lg-red:hover{--tw-shadow:0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(211, 47, 47, 0.6);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-blue-gray:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(96, 125, 139, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-gray:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(158, 158, 158, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-brown:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(121, 85, 72, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-deep-orange:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 87, 36, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-orange:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 152, 0, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-amber:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 193, 7, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-yellow:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 235, 59, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-lime:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(205, 220, 57, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-light-green:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(139, 195, 74, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-green:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(76, 175, 80, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-teal:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 150, 136, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-cyan:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 188, 212, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-light-blue:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(3, 169, 244, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-blue:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(33, 150, 243, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-indigo:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(63, 81, 181, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-deep-purple:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(103, 58, 183, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-purple:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(156, 39, 176, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-pink:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(233, 30, 99, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.hover\\:shadow-md-red:hover{--tw-shadow:0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(244, 67, 54, 0.2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.focus\\:border-2:focus{border-width:2px}\n.focus\\:border-blue-gray-500:focus{--tw-border-opacity:1;border-color:rgba(96, 125, 139, var(--tw-border-opacity))}\n.focus\\:border-gray-500:focus{--tw-border-opacity:1;border-color:rgba(158, 158, 158, var(--tw-border-opacity))}\n.focus\\:border-brown-500:focus{--tw-border-opacity:1;border-color:rgba(121, 85, 72, var(--tw-border-opacity))}\n.focus\\:border-deep-orange-500:focus{--tw-border-opacity:1;border-color:rgba(255, 87, 34, var(--tw-border-opacity))}\n.focus\\:border-orange-500:focus{--tw-border-opacity:1;border-color:rgba(255, 152, 0, var(--tw-border-opacity))}\n.focus\\:border-amber-500:focus{--tw-border-opacity:1;border-color:rgba(255, 193, 7, var(--tw-border-opacity))}\n.focus\\:border-yellow-600:focus{--tw-border-opacity:1;border-color:rgba(253, 216, 53, var(--tw-border-opacity))}\n.focus\\:border-lime-500:focus{--tw-border-opacity:1;border-color:rgba(205, 220, 57, var(--tw-border-opacity))}\n.focus\\:border-light-green-500:focus{--tw-border-opacity:1;border-color:rgba(139, 195, 74, var(--tw-border-opacity))}\n.focus\\:border-green-500:focus{--tw-border-opacity:1;border-color:rgba(76, 175, 80, var(--tw-border-opacity))}\n.focus\\:border-teal-500:focus{--tw-border-opacity:1;border-color:rgba(0, 150, 136, var(--tw-border-opacity))}\n.focus\\:border-cyan-500:focus{--tw-border-opacity:1;border-color:rgba(0, 188, 212, var(--tw-border-opacity))}\n.focus\\:border-light-blue-500:focus{--tw-border-opacity:1;border-color:rgba(3, 169, 244, var(--tw-border-opacity))}\n.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgba(33, 150, 243, var(--tw-border-opacity))}\n.focus\\:border-indigo-500:focus{--tw-border-opacity:1;border-color:rgba(63, 81, 181, var(--tw-border-opacity))}\n.focus\\:border-deep-purple-500:focus{--tw-border-opacity:1;border-color:rgba(103, 58, 183, var(--tw-border-opacity))}\n.focus\\:border-purple-500:focus{--tw-border-opacity:1;border-color:rgba(156, 39, 176, var(--tw-border-opacity))}\n.focus\\:border-pink-500:focus{--tw-border-opacity:1;border-color:rgba(233, 30, 99, var(--tw-border-opacity))}\n.focus\\:border-red-500:focus{--tw-border-opacity:1;border-color:rgba(244, 67, 54, var(--tw-border-opacity))}\n.focus\\:bg-blue-gray-400:focus{--tw-bg-opacity:1;background-color:rgba(120, 144, 156, var(--tw-bg-opacity))}\n.focus\\:bg-gray-400:focus{--tw-bg-opacity:1;background-color:rgba(189, 189, 189, var(--tw-bg-opacity))}\n.focus\\:bg-brown-400:focus{--tw-bg-opacity:1;background-color:rgba(141, 110, 99, var(--tw-bg-opacity))}\n.focus\\:bg-deep-orange-400:focus{--tw-bg-opacity:1;background-color:rgba(255, 112, 67, var(--tw-bg-opacity))}\n.focus\\:bg-orange-400:focus{--tw-bg-opacity:1;background-color:rgba(255, 167, 38, var(--tw-bg-opacity))}\n.focus\\:bg-amber-400:focus{--tw-bg-opacity:1;background-color:rgba(255, 202, 40, var(--tw-bg-opacity))}\n.focus\\:bg-yellow-500:focus{--tw-bg-opacity:1;background-color:rgba(255, 235, 59, var(--tw-bg-opacity))}\n.focus\\:bg-lime-400:focus{--tw-bg-opacity:1;background-color:rgba(212, 225, 87, var(--tw-bg-opacity))}\n.focus\\:bg-light-green-400:focus{--tw-bg-opacity:1;background-color:rgba(156, 204, 101, var(--tw-bg-opacity))}\n.focus\\:bg-green-400:focus{--tw-bg-opacity:1;background-color:rgba(102, 187, 106, var(--tw-bg-opacity))}\n.focus\\:bg-teal-400:focus{--tw-bg-opacity:1;background-color:rgba(38, 166, 154, var(--tw-bg-opacity))}\n.focus\\:bg-cyan-400:focus{--tw-bg-opacity:1;background-color:rgba(38, 198, 218, var(--tw-bg-opacity))}\n.focus\\:bg-light-blue-400:focus{--tw-bg-opacity:1;background-color:rgba(41, 182, 246, var(--tw-bg-opacity))}\n.focus\\:bg-blue-400:focus{--tw-bg-opacity:1;background-color:rgba(66, 165, 245, var(--tw-bg-opacity))}\n.focus\\:bg-indigo-400:focus{--tw-bg-opacity:1;background-color:rgba(92, 107, 192, var(--tw-bg-opacity))}\n.focus\\:bg-deep-purple-400:focus{--tw-bg-opacity:1;background-color:rgba(126, 87, 194, var(--tw-bg-opacity))}\n.focus\\:bg-purple-400:focus{--tw-bg-opacity:1;background-color:rgba(171, 71, 188, var(--tw-bg-opacity))}\n.focus\\:bg-pink-400:focus{--tw-bg-opacity:1;background-color:rgba(236, 64, 122, var(--tw-bg-opacity))}\n.focus\\:bg-red-400:focus{--tw-bg-opacity:1;background-color:rgba(239, 83, 80, var(--tw-bg-opacity))}\n.focus\\:bg-gray-500:focus{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.focus\\:bg-opacity-20:focus{--tw-bg-opacity:0.2}\n.focus\\:text-gray-800:focus{--tw-text-opacity:1;color:rgba(66, 66, 66, var(--tw-text-opacity))}\n.focus\\:shadow-none:focus{--tw-shadow:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}\n.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}\n.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}\n.active\\:bg-blue-gray-800:active{--tw-bg-opacity:1;background-color:rgba(55, 71, 79, var(--tw-bg-opacity))}\n.active\\:bg-gray-800:active{--tw-bg-opacity:1;background-color:rgba(66, 66, 66, var(--tw-bg-opacity))}\n.active\\:bg-brown-800:active{--tw-bg-opacity:1;background-color:rgba(78, 52, 46, var(--tw-bg-opacity))}\n.active\\:bg-deep-orange-800:active{--tw-bg-opacity:1;background-color:rgba(216, 67, 21, var(--tw-bg-opacity))}\n.active\\:bg-orange-800:active{--tw-bg-opacity:1;background-color:rgba(239, 108, 0, var(--tw-bg-opacity))}\n.active\\:bg-amber-800:active{--tw-bg-opacity:1;background-color:rgba(255, 143, 0, var(--tw-bg-opacity))}\n.active\\:bg-yellow-800:active{--tw-bg-opacity:1;background-color:rgba(249, 168, 37, var(--tw-bg-opacity))}\n.active\\:bg-lime-800:active{--tw-bg-opacity:1;background-color:rgba(158, 157, 36, var(--tw-bg-opacity))}\n.active\\:bg-light-green-800:active{--tw-bg-opacity:1;background-color:rgba(85, 139, 47, var(--tw-bg-opacity))}\n.active\\:bg-green-800:active{--tw-bg-opacity:1;background-color:rgba(46, 125, 50, var(--tw-bg-opacity))}\n.active\\:bg-teal-800:active{--tw-bg-opacity:1;background-color:rgba(0, 105, 92, var(--tw-bg-opacity))}\n.active\\:bg-cyan-800:active{--tw-bg-opacity:1;background-color:rgba(0, 131, 143, var(--tw-bg-opacity))}\n.active\\:bg-light-blue-800:active{--tw-bg-opacity:1;background-color:rgba(2, 119, 189, var(--tw-bg-opacity))}\n.active\\:bg-blue-800:active{--tw-bg-opacity:1;background-color:rgba(21, 101, 192, var(--tw-bg-opacity))}\n.active\\:bg-indigo-800:active{--tw-bg-opacity:1;background-color:rgba(40, 53, 147, var(--tw-bg-opacity))}\n.active\\:bg-deep-purple-800:active{--tw-bg-opacity:1;background-color:rgba(69, 39, 160, var(--tw-bg-opacity))}\n.active\\:bg-purple-800:active{--tw-bg-opacity:1;background-color:rgba(106, 27, 154, var(--tw-bg-opacity))}\n.active\\:bg-pink-800:active{--tw-bg-opacity:1;background-color:rgba(173, 20, 87, var(--tw-bg-opacity))}\n.active\\:bg-red-800:active{--tw-bg-opacity:1;background-color:rgba(198, 40, 40, var(--tw-bg-opacity))}\n.active\\:bg-blue-gray-100:active{--tw-bg-opacity:1;background-color:rgba(207, 216, 220, var(--tw-bg-opacity))}\n.active\\:bg-gray-100:active{--tw-bg-opacity:1;background-color:rgba(245, 245, 245, var(--tw-bg-opacity))}\n.active\\:bg-brown-100:active{--tw-bg-opacity:1;background-color:rgba(215, 204, 200, var(--tw-bg-opacity))}\n.active\\:bg-deep-orange-100:active{--tw-bg-opacity:1;background-color:rgba(255, 204, 188, var(--tw-bg-opacity))}\n.active\\:bg-orange-100:active{--tw-bg-opacity:1;background-color:rgba(255, 224, 178, var(--tw-bg-opacity))}\n.active\\:bg-amber-100:active{--tw-bg-opacity:1;background-color:rgba(255, 236, 179, var(--tw-bg-opacity))}\n.active\\:bg-yellow-100:active{--tw-bg-opacity:1;background-color:rgba(255, 249, 196, var(--tw-bg-opacity))}\n.active\\:bg-lime-100:active{--tw-bg-opacity:1;background-color:rgba(240, 244, 195, var(--tw-bg-opacity))}\n.active\\:bg-light-green-100:active{--tw-bg-opacity:1;background-color:rgba(220, 237, 200, var(--tw-bg-opacity))}\n.active\\:bg-green-100:active{--tw-bg-opacity:1;background-color:rgba(200, 230, 201, var(--tw-bg-opacity))}\n.active\\:bg-teal-100:active{--tw-bg-opacity:1;background-color:rgba(178, 223, 219, var(--tw-bg-opacity))}\n.active\\:bg-cyan-100:active{--tw-bg-opacity:1;background-color:rgba(178, 235, 242, var(--tw-bg-opacity))}\n.active\\:bg-light-blue-100:active{--tw-bg-opacity:1;background-color:rgba(179, 229, 252, var(--tw-bg-opacity))}\n.active\\:bg-blue-100:active{--tw-bg-opacity:1;background-color:rgba(187, 222, 251, var(--tw-bg-opacity))}\n.active\\:bg-indigo-100:active{--tw-bg-opacity:1;background-color:rgba(197, 202, 233, var(--tw-bg-opacity))}\n.active\\:bg-deep-purple-100:active{--tw-bg-opacity:1;background-color:rgba(209, 196, 233, var(--tw-bg-opacity))}\n.active\\:bg-purple-100:active{--tw-bg-opacity:1;background-color:rgba(225, 190, 231, var(--tw-bg-opacity))}\n.active\\:bg-pink-100:active{--tw-bg-opacity:1;background-color:rgba(248, 187, 208, var(--tw-bg-opacity))}\n.active\\:bg-red-100:active{--tw-bg-opacity:1;background-color:rgba(255, 205, 210, var(--tw-bg-opacity))}\n.active\\:bg-gray-500:active{--tw-bg-opacity:1;background-color:rgba(158, 158, 158, var(--tw-bg-opacity))}\n.active\\:bg-opacity-40:active{--tw-bg-opacity:0.4}\n@media (min-width: 640px){\n.sm\\:left-auto{left:auto}\n.sm\\:w-full{width:100%}}\n@media (min-width: 768px){\n.md\\:mt-40{margin-top:10rem}\n.md\\:mt-0{margin-top:0px}\n.md\\:mt-64{margin-top:16rem}\n.md\\:mb-0{margin-bottom:0px}\n.md\\:w-9\\/12{width:75%}\n.md\\:w-48{width:12rem}\n.md\\:w-6\\/12{width:50%}\n.md\\:w-4\\/12{width:33.333333%}\n.md\\:w-5\\/12{width:41.666667%}\n.md\\:w-8\\/12{width:66.666667%}\n.md\\:flex-row{flex-direction:row}\n.md\\:justify-start{justify-content:flex-start}\n.md\\:justify-between{justify-content:space-between}\n.md\\:gap-6{gap:1.5rem}\n.md\\:px-8{padding-left:2rem;padding-right:2rem}\n.md\\:px-4{padding-left:1rem;padding-right:1rem}\n.md\\:pr-12{padding-right:3rem}\n.md\\:pt-0{padding-top:0px}}\n@media (min-width: 1024px){\n.lg\\:static{position:static}\n.lg\\:mr-5{margin-right:1.25rem}\n.lg\\:ml-5{margin-left:1.25rem}\n.lg\\:mt-16{margin-top:4rem}\n.lg\\:block{display:block}\n.lg\\:flex{display:flex}\n.lg\\:hidden{display:none}\n.lg\\:w-4\\/12{width:33.333333%}\n.lg\\:w-6\\/12{width:50%}\n.lg\\:w-8\\/12{width:66.666667%}\n.lg\\:w-60{width:15rem}\n.lg\\:w-auto{width:auto}\n.lg\\:flex-row{flex-direction:row}\n.lg\\:items-center{align-items:center}\n.lg\\:justify-between{justify-content:space-between}\n.lg\\:justify-start{justify-content:flex-start}\n.lg\\:px-36{padding-left:9rem;padding-right:9rem}\n.lg\\:text-left{text-align:left}}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! tailwindcss v2.2.4 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after {\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n\t--tw-shadow: 0 0 #0000;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: rgba(59, 130, 246, 0.5);\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-blur: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-invert: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n\t--tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.relative {\n\tposition: relative;\n}\n\n.sticky {\n\tposition: sticky;\n}\n\n.\\!sticky {\n\tposition: sticky !important;\n}\n\n.top-0 {\n\ttop: 0px;\n}\n\n.top-10 {\n\ttop: 2.5rem;\n}\n\n.z-50 {\n\tz-index: 50;\n}\n\n.mx-auto {\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\n.mx-5 {\n\tmargin-left: 1.25rem;\n\tmargin-right: 1.25rem;\n}\n\n.ml-2 {\n\tmargin-left: 0.5rem;\n}\n\n.mt-2 {\n\tmargin-top: 0.5rem;\n}\n\n.-ml-1 {\n\tmargin-left: -0.25rem;\n}\n\n.ml-5 {\n\tmargin-left: 1.25rem;\n}\n\n.mt-10 {\n\tmargin-top: 2.5rem;\n}\n\n.mt-6 {\n\tmargin-top: 1.5rem;\n}\n\n.mb-12 {\n\tmargin-bottom: 3rem;\n}\n\n.block {\n\tdisplay: block;\n}\n\n.flex {\n\tdisplay: flex;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.h-52 {\n\theight: 13rem;\n}\n\n.h-8 {\n\theight: 2rem;\n}\n\n.h-10 {\n\theight: 2.5rem;\n}\n\n.h-20 {\n\theight: 5rem;\n}\n\n.h-12 {\n\theight: 3rem;\n}\n\n.h-96 {\n\theight: 24rem;\n}\n\n.min-h-full {\n\tmin-height: 100%;\n}\n\n.min-h-screen {\n\tmin-height: 100vh;\n}\n\n.w-full {\n\twidth: 100%;\n}\n\n.w-40 {\n\twidth: 10rem;\n}\n\n.w-10 {\n\twidth: 2.5rem;\n}\n\n.w-20 {\n\twidth: 5rem;\n}\n\n.w-12 {\n\twidth: 3rem;\n}\n\n.w-44 {\n\twidth: 11rem;\n}\n\n.max-w-3xl {\n\tmax-width: 48rem;\n}\n\n.max-w-5xl {\n\tmax-width: 64rem;\n}\n\n.flex-grow {\n\tflex-grow: 1;\n}\n\n.cursor-pointer {\n\tcursor: pointer;\n}\n\n.flex-col {\n\tflex-direction: column;\n}\n\n.items-center {\n\talign-items: center;\n}\n\n.justify-center {\n\tjustify-content: center;\n}\n\n.\\!justify-center {\n\tjustify-content: center !important;\n}\n\n.justify-between {\n\tjustify-content: space-between;\n}\n\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(0.25rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.truncate {\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n\n.rounded {\n\tborder-radius: 0.25rem;\n}\n\n.rounded-full {\n\tborder-radius: 9999px;\n}\n\n.rounded-lg {\n\tborder-radius: 0.5rem;\n}\n\n.border-0 {\n\tborder-width: 0px;\n}\n\n.border-2 {\n\tborder-width: 2px;\n}\n\n.border {\n\tborder-width: 1px;\n}\n\n.bg-\\[\\#F8F9FA\\] {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(248, 249, 250, var(--tw-bg-opacity));\n}\n\n.bg-white {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.bg-transparent {\n\tbackground-color: transparent;\n}\n\n.p-3 {\n\tpadding: 0.75rem;\n}\n\n.p-4 {\n\tpadding: 1rem;\n}\n\n.px-10 {\n\tpadding-left: 2.5rem;\n\tpadding-right: 2.5rem;\n}\n\n.py-6 {\n\tpadding-top: 1.5rem;\n\tpadding-bottom: 1.5rem;\n}\n\n.py-8 {\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n}\n\n.px-2 {\n\tpadding-left: 0.5rem;\n\tpadding-right: 0.5rem;\n}\n\n.px-4 {\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\n\n.py-2 {\n\tpadding-top: 0.5rem;\n\tpadding-bottom: 0.5rem;\n}\n\n.px-5 {\n\tpadding-left: 1.25rem;\n\tpadding-right: 1.25rem;\n}\n\n.pb-10 {\n\tpadding-bottom: 2.5rem;\n}\n\n.pb-5 {\n\tpadding-bottom: 1.25rem;\n}\n\n.pr-12 {\n\tpadding-right: 3rem;\n}\n\n.pb-1 {\n\tpadding-bottom: 0.25rem;\n}\n\n.pl-5 {\n\tpadding-left: 1.25rem;\n}\n\n.pr-10 {\n\tpadding-right: 2.5rem;\n}\n\n.pr-5 {\n\tpadding-right: 1.25rem;\n}\n\n.pb-16 {\n\tpadding-bottom: 4rem;\n}\n\n.text-lg {\n\tfont-size: 1.125rem;\n\tline-height: 1.75rem;\n}\n\n.text-sm {\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\n\n.text-base {\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n}\n\n.font-semibold {\n\tfont-weight: 600;\n}\n\n.font-medium {\n\tfont-weight: 500;\n}\n\n.text-gray-700 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n\n.text-gray-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.shadow-md {\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-lg {\n\t--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.outline-none {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n\n.focus-within\\:text-gray-600:focus-within {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.focus-within\\:shadow-md:focus-within {\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:border-blue-700:hover {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(29, 78, 216, var(--tw-border-opacity));\n}\n\n.hover\\:bg-gray-100:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n@media (min-width: 768px) {\n\n\t.md\\:mx-20 {\n\t\tmargin-left: 5rem;\n\t\tmargin-right: 5rem;\n\t}\n\n\t.md\\:ml-20 {\n\t\tmargin-left: 5rem;\n\t}\n\n\t.md\\:\\!inline-flex {\n\t\tdisplay: inline-flex !important;\n\t}\n\n\t.md\\:inline-flex {\n\t\tdisplay: inline-flex;\n\t}\n\n\t.md\\:px-0 {\n\t\tpadding-left: 0px;\n\t\tpadding-right: 0px;\n\t}\n}\n", "",{"version":3,"sources":["webpack://node_modules/tailwindcss/tailwind.css","webpack://node_modules/tailwindcss/%3Cinput%20css%20oBxyPO%3E","webpack://node_modules/tailwindcss/%3Cinput%20css%20tqtDvD%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n","/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: theme('colors.gray.400', #a1a1aa);\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles.css":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles.css ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    .option {\r\n\r\n    cursor: pointer;\r\n\r\n    border-radius: 0.5rem;\r\n\r\n    padding: 0.5rem;\r\n\r\n    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\r\n\r\n    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\r\n\r\n    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\r\n\r\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n\r\n    transition-duration: 150ms;\r\n\r\n    transition-duration: 200ms;\r\n\r\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\r\n}\r\n\r\n.option:hover {\r\n\r\n    --tw-bg-opacity: 1;\r\n\r\n    background-color: rgba(243, 244, 246, var(--tw-bg-opacity))\r\n}\r\n\r\n@layer components {\r\n    .option {\r\n\r\n        cursor: pointer\r\n    }\r\n    .option {\r\n\r\n        border-radius: 0.5rem\r\n    }\r\n    .option {\r\n\r\n        padding: 0.5rem\r\n    }\r\n    .option {\r\n\r\n        transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\r\n\r\n        transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\r\n\r\n        transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\r\n\r\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n\r\n        transition-duration: 150ms\r\n    }\r\n    .option {\r\n\r\n        transition-duration: 200ms\r\n    }\r\n    .option {\r\n\r\n        transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\r\n    }\r\n    .option:hover {\r\n\r\n        --tw-bg-opacity: 1;\r\n\r\n        background-color: rgba(243, 244, 246, var(--tw-bg-opacity))\r\n    }\r\n}\r\n\r\n.focus-within\\:text-gray-600:focus-within {\r\n\r\n    --tw-text-opacity: 1;\r\n\r\n    color: rgba(75, 85, 99, var(--tw-text-opacity))\r\n}\r\n\r\n.focus-within\\:shadow-md:focus-within {\r\n\r\n    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\r\n\r\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\r\n}\r\n\r\n.hover\\:border-blue-700:hover {\r\n\r\n    --tw-border-opacity: 1;\r\n\r\n    border-color: rgba(29, 78, 216, var(--tw-border-opacity))\r\n}\r\n\r\n.hover\\:bg-gray-100:hover {\r\n\r\n    --tw-bg-opacity: 1;\r\n\r\n    background-color: rgba(243, 244, 246, var(--tw-bg-opacity))\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    .md\\:mx-20 {\r\n\r\n        margin-left: 5rem;\r\n\r\n        margin-right: 5rem\r\n    }\r\n\r\n    .md\\:ml-20 {\r\n\r\n        margin-left: 5rem\r\n    }\r\n\r\n    .md\\:\\!inline-flex {\r\n\r\n        display: inline-flex !important\r\n    }\r\n\r\n    .md\\:inline-flex {\r\n\r\n        display: inline-flex\r\n    }\r\n\r\n    .md\\:px-0 {\r\n\r\n        padding-left: 0px;\r\n\r\n        padding-right: 0px\r\n    }\r\n}", "",{"version":3,"sources":["<no source>","webpack://styles.css"],"names":[],"mappings":";IAAA;;IAAA,eAAA;;IAAA,qBAAA;;IAAA,eAAA;;IAAA,yIAAA;;IAAA,iIAAA;;IAAA,0JAAA;;IAAA,wDAAA;;IAAA,0BAAA;;IAAA,0BAAA;;IAAA;ACsBA;;ADtBA;;IAAA,kBAAA;;IAAA;AC6BA;;AA3BA;IDFA;;QAAA;ICmCI;IDnCJ;;QAAA;ICuCI;IDvCJ;;QAAA;IC2CI;ID3CJ;;QAAA,yIAAA;;QAAA,iIAAA;;QAAA,0JAAA;;QAAA,wDAAA;;QAAA;ICuDI;IDvDJ;;QAAA;IC2DI;ID3DJ;;QAAA;IC+DI;ID/DJ;;QAAA,kBAAA;;QAAA;ICqEI;AA/DJ;;AANA;;IDAA,oBAAA;;IAAA;AC6EA;;AA7EA;;IDAA,kFAAA;;IAAA;ACoFA;;AApFA;;IDAA,sBAAA;;IAAA;AC2FA;;AA3FA;;IDAA,kBAAA;;IAAA;ACkGA;;AAlGA;;IDAA;;QAAA,iBAAA;;QAAA;IC2GI;;ID3GJ;;QAAA;ICgHI;;IDhHJ;;QAAA;ICqHI;;IDrHJ;;QAAA;IC0HI;;ID1HJ;;QAAA,iBAAA;;QAAA;ICiII;AACJ","sourcesContent":[null,"@tailwind components;\r\n\r\n@layer components {\r\n    .option {\r\n        @apply cursor-pointer hover:bg-gray-100 transition duration-200 ease-out p-2 rounded-lg\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);