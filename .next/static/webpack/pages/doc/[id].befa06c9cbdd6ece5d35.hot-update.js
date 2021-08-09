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
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
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

  var session = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_6__.useSession)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(draft_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.createEmpty()),
      editorState = _useState[0],
      setEditorState = _useState[1];

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var id = router.query.id;

  var onEditorStateChange = function onEditorStateChange(editorState) {
    setEditorState(editorState);
    _firebase__WEBPACK_IMPORTED_MODULE_7__.db.collection("userDocs").doc(session.user.email).collection("doc").doc(id).set({
      editorState: (0,draft_js__WEBPACK_IMPORTED_MODULE_4__.convertToRaw)(editorState.getCurrentContent())
    }, // Getting editorstate and converting it to json to be stored in firebase 
    {
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
      lineNumber: 34,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}

_s(TextEditor, "6wiyZLN6Y6gH3RYn0ZvALpaFtwk=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_6__.useSession, next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0RWRpdG9yLmpzIl0sIm5hbWVzIjpbIkVkaXRvciIsImR5bmFtaWMiLCJ0aGVuIiwibW9kdWxlIiwic3NyIiwiVGV4dEVkaXRvciIsInNlc3Npb24iLCJ1c2VTZXNzaW9uIiwidXNlU3RhdGUiLCJFZGl0b3JTdGF0ZSIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsImRiIiwiZG9jIiwidXNlciIsImVtYWlsIiwiY29sbGVjdGlvbiIsInNldCIsImNvbnZlcnRUb1JhdyIsImdldEN1cnJlbnRDb250ZW50IiwibWVyZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFDbEI7QUFBQSxTQUFNLDZQQUE4QkMsSUFBOUIsQ0FBbUMsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0gsTUFBbkI7QUFBQSxHQUFuQyxDQUFOO0FBQUEsQ0FEa0IsRUFFbEI7QUFDSUksS0FBRyxFQUFFLEtBRFQ7QUFBQTtBQUFBO0FBQUEsa0NBRGEsMkZBQ2I7QUFBQTtBQUFBLG9EQURhLHFCQUNiO0FBQUE7QUFBQSxDQUZrQixDQUF0QjtNQUFNSixNO0FBT1MsU0FBU0ssVUFBVCxHQUFzQjtBQUFBOztBQUNqQyxNQUFNQyxPQUFPLEdBQUdDLDREQUFVLEVBQTFCOztBQURpQyxrQkFFS0MsK0NBQVEsQ0FBQ0MsNkRBQUEsRUFBRCxDQUZiO0FBQUEsTUFFMUJDLFdBRjBCO0FBQUEsTUFFYkMsY0FGYTs7QUFHakMsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QjtBQUhpQyxNQUl6QkMsRUFKeUIsR0FJbEJGLE1BQU0sQ0FBQ0csS0FKVyxDQUl6QkQsRUFKeUI7O0FBTWpDLE1BQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ04sV0FBRCxFQUFpQjtBQUN6Q0Msa0JBQWMsQ0FBQ0QsV0FBRCxDQUFkO0FBRUFPLHdEQUFBLENBQWMsVUFBZCxFQUEwQkMsR0FBMUIsQ0FBOEJaLE9BQU8sQ0FBQ2EsSUFBUixDQUFhQyxLQUEzQyxFQUFrREMsVUFBbEQsQ0FBNkQsS0FBN0QsRUFBb0VILEdBQXBFLENBQXdFSixFQUF4RSxFQUE0RVEsR0FBNUUsQ0FDSTtBQUFFWixpQkFBVyxFQUFFYSxzREFBWSxDQUFDYixXQUFXLENBQUNjLGlCQUFaLEVBQUQ7QUFBM0IsS0FESixFQUNvRTtBQUNoRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUZKO0FBSUgsR0FQRDs7QUFTQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBLDJCQUNJLDhEQUFDLE1BQUQ7QUFDQyxpQkFBVyxFQUFFZixXQURkO0FBRUMseUJBQW1CLEVBQUVNLG1CQUZ0QjtBQUdDLHNCQUFnQixFQUFDLGdEQUhsQjtBQUlDLHFCQUFlLEVBQUM7QUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdIOztHQTFCdUJYLFU7VUFDSkUsd0QsRUFFRE0sOEQ7OztNQUhLUixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvYy9baWRdLmJlZmEwNmM5Y2JkZDZlY2U1ZDM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IFwicmVhY3QtZHJhZnQtd3lzaXd5Zy9kaXN0L3JlYWN0LWRyYWZ0LXd5c2l3eWcuY3NzXCI7XHJcbmltcG9ydCB7IGNvbnZlcnRGcm9tUmF3LCBjb252ZXJ0VG9SYXcsIEVkaXRvclN0YXRlIH0gZnJvbSAnZHJhZnQtanMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG4vLyBDbGluZXQgc2lkZSByZW5kaW5nIGZvciBUZXh0RWRpdG9yIHBhY2thZ2UsIGlmIHJlbmRlcmVkIG9uIHNlcnZlciBzaWRlIHdpbGwgdGhyb3cgZXJyb3IuXHJcbmNvbnN0IEVkaXRvciA9IGR5bmFtaWMoXHJcbiAgICAoKSA9PiBpbXBvcnQoXCJyZWFjdC1kcmFmdC13eXNpd3lnXCIpLnRoZW4oKG1vZHVsZSkgPT4gbW9kdWxlLkVkaXRvciksXHJcbiAgICB7XHJcbiAgICAgICAgc3NyOiBmYWxzZSxcclxuICAgIH1cclxuICAgICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0RWRpdG9yKCkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcclxuICAgIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBjb25zdCBvbkVkaXRvclN0YXRlQ2hhbmdlID0gKGVkaXRvclN0YXRlKSA9PiB7XHJcbiAgICAgICAgc2V0RWRpdG9yU3RhdGUoZWRpdG9yU3RhdGUpO1xyXG5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlckRvY3NcIikuZG9jKHNlc3Npb24udXNlci5lbWFpbCkuY29sbGVjdGlvbihcImRvY1wiKS5kb2MoaWQpLnNldChcclxuICAgICAgICAgICAgeyBlZGl0b3JTdGF0ZTogY29udmVydFRvUmF3KGVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpIH0sIC8vIEdldHRpbmcgZWRpdG9yc3RhdGUgYW5kIGNvbnZlcnRpbmcgaXQgdG8ganNvbiB0byBiZSBzdG9yZWQgaW4gZmlyZWJhc2UgXHJcbiAgICAgICAgICAgIHsgbWVyZ2U6IHRydWUgfVxyXG4gICAgICAgICkgXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0Y4RjlGQV0gbWluLWgtc2NyZWVuIHBiLTE2XCI+XHJcbiAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgIG9uRWRpdG9yU3RhdGVDaGFuZ2U9e29uRWRpdG9yU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICB0b29sYmFyQ2xhc3NOYW1lPVwiZmxleCBzdGlja3kgdG9wLTAgei01MCAhanVzdGlmeS1jZW50ZXIgbXgtYXV0b1wiIFxyXG4gICAgICAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwibXQtNiBiZy13aGl0ZSBzaGFkb3ctbGcgbWF4LXctNXhsIG14LWF1dG8gbWItMTIgYm9yZGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=