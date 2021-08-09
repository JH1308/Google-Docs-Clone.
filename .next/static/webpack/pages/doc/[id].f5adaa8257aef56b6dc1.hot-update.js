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
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);
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

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var id = router.query.id;

  var onEditorStateChange = function onEditorStateChange(editorState) {
    setEditorState(editorState);
    db.collection("userDoc").doc(session.user.email).collection("doc").doc(id).set({
      editorState: (0,draft_js__WEBPACK_IMPORTED_MODULE_4__.convertToRaw)(editorState.getCurrentContent())
    }, {
      merge: true
    });
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
      lineNumber: 31,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

_s(TextEditor, "W/QUdkSsKDbpq0iDhW+UaHon06s=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0RWRpdG9yLmpzIl0sIm5hbWVzIjpbIkVkaXRvciIsImR5bmFtaWMiLCJ0aGVuIiwibW9kdWxlIiwic3NyIiwiVGV4dEVkaXRvciIsInVzZVN0YXRlIiwiRWRpdG9yU3RhdGUiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsIm9uRWRpdG9yU3RhdGVDaGFuZ2UiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwic2V0IiwiY29udmVydFRvUmF3IiwiZ2V0Q3VycmVudENvbnRlbnQiLCJtZXJnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxtREFBTyxNQUNsQjtBQUFBLFNBQU0sNlBBQThCQyxJQUE5QixDQUFtQyxVQUFDQyxNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDSCxNQUFuQjtBQUFBLEdBQW5DLENBQU47QUFBQSxDQURrQixFQUVsQjtBQUNJSSxLQUFHLEVBQUUsS0FEVDtBQUFBO0FBQUE7QUFBQSxrQ0FEYSwyRkFDYjtBQUFBO0FBQUEsb0RBRGEscUJBQ2I7QUFBQTtBQUFBLENBRmtCLENBQXRCO01BQU1KLE07QUFPUyxTQUFTSyxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBQ0tDLCtDQUFRLENBQUNDLDZEQUFBLEVBQUQsQ0FEYjtBQUFBLE1BQzFCQyxXQUQwQjtBQUFBLE1BQ2JDLGNBRGE7O0FBRWpDLE1BQU1DLE1BQU0sR0FBR0Msa0VBQVMsRUFBeEI7QUFGaUMsTUFHekJDLEVBSHlCLEdBR2xCRixNQUFNLENBQUNHLEtBSFcsQ0FHekJELEVBSHlCOztBQUtqQyxNQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNOLFdBQUQsRUFBaUI7QUFDekNDLGtCQUFjLENBQUNELFdBQUQsQ0FBZDtBQUVBTyxNQUFFLENBQUNDLFVBQUgsQ0FBYyxTQUFkLEVBQXlCQyxHQUF6QixDQUE2QkMsT0FBTyxDQUFDQyxJQUFSLENBQWFDLEtBQTFDLEVBQWlESixVQUFqRCxDQUE0RCxLQUE1RCxFQUFtRUMsR0FBbkUsQ0FBdUVMLEVBQXZFLEVBQTJFUyxHQUEzRSxDQUNJO0FBQUViLGlCQUFXLEVBQUVjLHNEQUFZLENBQUNkLFdBQVcsQ0FBQ2UsaUJBQVosRUFBRDtBQUEzQixLQURKLEVBRUk7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FGSjtBQUlILEdBUEQ7O0FBU0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQSwyQkFDSSw4REFBQyxNQUFEO0FBQ0MsaUJBQVcsRUFBRWhCLFdBRGQ7QUFFQyx5QkFBbUIsRUFBRU0sbUJBRnRCO0FBR0Msc0JBQWdCLEVBQUMsZ0RBSGxCO0FBSUMscUJBQWUsRUFBQztBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0dBekJ1QlQsVTtVQUVMTSw4RDs7O01BRktOLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jL1tpZF0uZjVhZGFhODI1N2FlZjU2YjZkYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1kcmFmdC13eXNpd3lnL2Rpc3QvcmVhY3QtZHJhZnQtd3lzaXd5Zy5jc3NcIjtcclxuaW1wb3J0IHsgY29udmVydEZyb21SYXcsIGNvbnZlcnRUb1JhdywgRWRpdG9yU3RhdGUgfSBmcm9tICdkcmFmdC1qcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuXHJcbi8vIENsaW5ldCBzaWRlIHJlbmRpbmcgZm9yIFRleHRFZGl0b3IgcGFja2FnZSwgaWYgcmVuZGVyZWQgb24gc2VydmVyIHNpZGUgd2lsbCB0aHJvdyBlcnJvci5cclxuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcclxuICAgICgpID0+IGltcG9ydChcInJlYWN0LWRyYWZ0LXd5c2l3eWdcIikudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuRWRpdG9yKSxcclxuICAgIHtcclxuICAgICAgICBzc3I6IGZhbHNlLFxyXG4gICAgfVxyXG4gICAgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRFZGl0b3IoKSB7XHJcbiAgICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCkpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3Qgb25FZGl0b3JTdGF0ZUNoYW5nZSA9IChlZGl0b3JTdGF0ZSkgPT4ge1xyXG4gICAgICAgIHNldEVkaXRvclN0YXRlKGVkaXRvclN0YXRlKTtcclxuXHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJEb2NcIikuZG9jKHNlc3Npb24udXNlci5lbWFpbCkuY29sbGVjdGlvbihcImRvY1wiKS5kb2MoaWQpLnNldChcclxuICAgICAgICAgICAgeyBlZGl0b3JTdGF0ZTogY29udmVydFRvUmF3KGVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpIH0sXHJcbiAgICAgICAgICAgIHsgbWVyZ2U6IHRydWUgfVxyXG4gICAgICAgICkgXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0Y4RjlGQV0gbWluLWgtc2NyZWVuIHBiLTE2XCI+XHJcbiAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgIG9uRWRpdG9yU3RhdGVDaGFuZ2U9e29uRWRpdG9yU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICB0b29sYmFyQ2xhc3NOYW1lPVwiZmxleCBzdGlja3kgdG9wLTAgei01MCAhanVzdGlmeS1jZW50ZXIgbXgtYXV0b1wiIFxyXG4gICAgICAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwibXQtNiBiZy13aGl0ZSBzaGFkb3ctbGcgbWF4LXctNXhsIG14LWF1dG8gbWItMTIgYm9yZGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=