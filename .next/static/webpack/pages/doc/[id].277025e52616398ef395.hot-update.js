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
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Owner\\Documents\\visual stuido code\\google-docs\\my-project\\components\\TextEditor.js",
    _s = $RefreshSig$();




 // Clinet side rending for TextEditor package, if rendered on server side will throw error.

var Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "node_modules_react-draft-wysiwyg_dist_react-draft-wysiwyg_js").then(__webpack_require__.t.bind(__webpack_require__, /*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js", 23)).then(function (module) {
    return module.Editor;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js")];
    },
    modules: ["..\\components\\TextEditor.js -> " + "react-draft-wysiwyg"]
  }
});
_c2 = Editor;
function TextEditor() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(draft_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.createEmpty()),
      editorState = _useState[0],
      setEditorState = _useState[1];

  var onEditorStateChange = function onEditorStateChange(editorState) {
    setEditorState(editorState);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-[#F8F9FA] min-h-screen pb-16",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Editor, {
      editorState: editorState,
      onEditorStateChange: onEditorStateChange,
      toolbarClassName: "flex sticky top-0 z-50 !justify-center mx-auto",
      editorClassName: "mt-6 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

_s(TextEditor, "wG9VLOnpYRUB9A7+mcW2q9Lv0c0=");

_c3 = TextEditor;

var _c, _c2, _c3;

$RefreshReg$(_c, "Editor$dynamic");
$RefreshReg$(_c2, "Editor");
$RefreshReg$(_c3, "TextEditor");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0RWRpdG9yLmpzIl0sIm5hbWVzIjpbIkVkaXRvciIsImR5bmFtaWMiLCJ0aGVuIiwibW9kdWxlIiwic3NyIiwiVGV4dEVkaXRvciIsInVzZVN0YXRlIiwiRWRpdG9yU3RhdGUiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwib25FZGl0b3JTdGF0ZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPLE1BQ2xCO0FBQUEsU0FBTSw2UEFBOEJDLElBQTlCLENBQW1DLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNILE1BQW5CO0FBQUEsR0FBbkMsQ0FBTjtBQUFBLENBRGtCLEVBRWxCO0FBQ0lJLEtBQUcsRUFBRSxLQURUO0FBQUE7QUFBQTtBQUFBLGtDQURhLDJGQUNiO0FBQUE7QUFBQSxvREFEYSxxQkFDYjtBQUFBO0FBQUEsQ0FGa0IsQ0FBdEI7TUFBTUosTTtBQU9TLFNBQVNLLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSxrQkFDS0MsK0NBQVEsQ0FBQ0MsNkRBQUEsRUFBRCxDQURiO0FBQUEsTUFDMUJDLFdBRDBCO0FBQUEsTUFDYkMsY0FEYTs7QUFHakMsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDRixXQUFELEVBQWlCO0FBQ3pDQyxrQkFBYyxDQUFDRCxXQUFELENBQWQ7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUEsMkJBQ0ksOERBQUMsTUFBRDtBQUNDLGlCQUFXLEVBQUVBLFdBRGQ7QUFFQyx5QkFBbUIsRUFBRUUsbUJBRnRCO0FBR0Msc0JBQWdCLEVBQUMsZ0RBSGxCO0FBSUMscUJBQWUsRUFBQztBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0dBbEJ1QkwsVTs7TUFBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2MvW2lkXS4yNzcwMjVlNTI2MTYzOThlZjM5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBcInJlYWN0LWRyYWZ0LXd5c2l3eWcvZGlzdC9yZWFjdC1kcmFmdC13eXNpd3lnLmNzc1wiO1xyXG5pbXBvcnQgeyBFZGl0b3JTdGF0ZSB9IGZyb20gJ2RyYWZ0LWpzJztcclxuXHJcbi8vIENsaW5ldCBzaWRlIHJlbmRpbmcgZm9yIFRleHRFZGl0b3IgcGFja2FnZSwgaWYgcmVuZGVyZWQgb24gc2VydmVyIHNpZGUgd2lsbCB0aHJvdyBlcnJvci5cclxuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcclxuICAgICgpID0+IGltcG9ydChcInJlYWN0LWRyYWZ0LXd5c2l3eWdcIikudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuRWRpdG9yKSxcclxuICAgIHtcclxuICAgICAgICBzc3I6IGZhbHNlLFxyXG4gICAgfVxyXG4gICAgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRFZGl0b3IoKSB7XHJcbiAgICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCkpO1xyXG5cclxuICAgIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSAoZWRpdG9yU3RhdGUpID0+IHtcclxuICAgICAgICBzZXRFZGl0b3JTdGF0ZShlZGl0b3JTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0Y4RjlGQV0gbWluLWgtc2NyZWVuIHBiLTE2XCI+XHJcbiAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgIG9uRWRpdG9yU3RhdGVDaGFuZ2U9e29uRWRpdG9yU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICB0b29sYmFyQ2xhc3NOYW1lPVwiZmxleCBzdGlja3kgdG9wLTAgei01MCAhanVzdGlmeS1jZW50ZXIgbXgtYXV0b1wiIFxyXG4gICAgICAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwibXQtNiBiZy13aGl0ZSBzaGFkb3ctbGcgbWF4LXctNXhsIG14LWF1dG8gbWItMTIgYm9yZGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=