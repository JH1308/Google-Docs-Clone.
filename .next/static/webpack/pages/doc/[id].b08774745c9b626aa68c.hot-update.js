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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0RWRpdG9yLmpzIl0sIm5hbWVzIjpbIkVkaXRvciIsImR5bmFtaWMiLCJ0aGVuIiwibW9kdWxlIiwic3NyIiwiVGV4dEVkaXRvciIsInVzZVN0YXRlIiwiRWRpdG9yU3RhdGUiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsIm9uRWRpdG9yU3RhdGVDaGFuZ2UiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwic2V0IiwiY29udmVydFRvUmF3IiwiZ2V0Q3VycmVudENvbnRlbnQiLCJtZXJnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxtREFBTyxNQUNsQjtBQUFBLFNBQU0sNlBBQThCQyxJQUE5QixDQUFtQyxVQUFDQyxNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDSCxNQUFuQjtBQUFBLEdBQW5DLENBQU47QUFBQSxDQURrQixFQUVsQjtBQUNJSSxLQUFHLEVBQUUsS0FEVDtBQUFBO0FBQUE7QUFBQSxrQ0FEYSwyRkFDYjtBQUFBO0FBQUEsb0RBRGEscUJBQ2I7QUFBQTtBQUFBLENBRmtCLENBQXRCO01BQU1KLE07QUFPUyxTQUFTSyxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBQ0tDLCtDQUFRLENBQUNDLDZEQUFBLEVBQUQsQ0FEYjtBQUFBLE1BQzFCQyxXQUQwQjtBQUFBLE1BQ2JDLGNBRGE7O0FBRWpDLE1BQU1DLE1BQU0sR0FBR0Msa0VBQVMsRUFBeEI7QUFGaUMsTUFHekJDLEVBSHlCLEdBR2xCRixNQUFNLENBQUNHLEtBSFcsQ0FHekJELEVBSHlCOztBQUtqQyxNQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNOLFdBQUQsRUFBaUI7QUFDekNDLGtCQUFjLENBQUNELFdBQUQsQ0FBZDtBQUVBTyxNQUFFLENBQUNDLFVBQUgsQ0FBYyxTQUFkLEVBQXlCQyxHQUF6QixDQUE2QkMsT0FBTyxDQUFDQyxJQUFSLENBQWFDLEtBQTFDLEVBQWlESixVQUFqRCxDQUE0RCxLQUE1RCxFQUFtRUMsR0FBbkUsQ0FBdUVMLEVBQXZFLEVBQTJFUyxHQUEzRSxDQUNJO0FBQUViLGlCQUFXLEVBQUVjLHNEQUFZLENBQUNkLFdBQVcsQ0FBQ2UsaUJBQVosRUFBRDtBQUEzQixLQURKLEVBQ29FO0FBQ2hFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBRko7QUFJSCxHQVBEOztBQVNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUEsMkJBQ0ksOERBQUMsTUFBRDtBQUNDLGlCQUFXLEVBQUVoQixXQURkO0FBRUMseUJBQW1CLEVBQUVNLG1CQUZ0QjtBQUdDLHNCQUFnQixFQUFDLGdEQUhsQjtBQUlDLHFCQUFlLEVBQUM7QUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdIOztHQXpCdUJULFU7VUFFTE0sOEQ7OztNQUZLTixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvYy9baWRdLmIwODc3NDc0NWM5YjYyNmFhNjhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IFwicmVhY3QtZHJhZnQtd3lzaXd5Zy9kaXN0L3JlYWN0LWRyYWZ0LXd5c2l3eWcuY3NzXCI7XHJcbmltcG9ydCB7IGNvbnZlcnRGcm9tUmF3LCBjb252ZXJ0VG9SYXcsIEVkaXRvclN0YXRlIH0gZnJvbSAnZHJhZnQtanMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcblxyXG4vLyBDbGluZXQgc2lkZSByZW5kaW5nIGZvciBUZXh0RWRpdG9yIHBhY2thZ2UsIGlmIHJlbmRlcmVkIG9uIHNlcnZlciBzaWRlIHdpbGwgdGhyb3cgZXJyb3IuXHJcbmNvbnN0IEVkaXRvciA9IGR5bmFtaWMoXHJcbiAgICAoKSA9PiBpbXBvcnQoXCJyZWFjdC1kcmFmdC13eXNpd3lnXCIpLnRoZW4oKG1vZHVsZSkgPT4gbW9kdWxlLkVkaXRvciksXHJcbiAgICB7XHJcbiAgICAgICAgc3NyOiBmYWxzZSxcclxuICAgIH1cclxuICAgICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0RWRpdG9yKCkge1xyXG4gICAgY29uc3QgW2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZV0gPSB1c2VTdGF0ZShFZGl0b3JTdGF0ZS5jcmVhdGVFbXB0eSgpKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSAoZWRpdG9yU3RhdGUpID0+IHtcclxuICAgICAgICBzZXRFZGl0b3JTdGF0ZShlZGl0b3JTdGF0ZSk7XHJcblxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2VyRG9jXCIpLmRvYyhzZXNzaW9uLnVzZXIuZW1haWwpLmNvbGxlY3Rpb24oXCJkb2NcIikuZG9jKGlkKS5zZXQoXHJcbiAgICAgICAgICAgIHsgZWRpdG9yU3RhdGU6IGNvbnZlcnRUb1JhdyhlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKSB9LCAvLyBHZXR0aW5nIGVkaXRvcnN0YXRlIGFuZCBjb252ZXJ0aW5nIGl0IHRvIGpzb24gdG8gYmUgc3RvcmVkIGluIGZpcmViYXNlIFxyXG4gICAgICAgICAgICB7IG1lcmdlOiB0cnVlIH1cclxuICAgICAgICApIFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGOEY5RkFdIG1pbi1oLXNjcmVlbiBwYi0xNlwiPlxyXG4gICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9XHJcbiAgICAgICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXtvbkVkaXRvclN0YXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgdG9vbGJhckNsYXNzTmFtZT1cImZsZXggc3RpY2t5IHRvcC0wIHotNTAgIWp1c3RpZnktY2VudGVyIG14LWF1dG9cIiBcclxuICAgICAgICAgICAgIGVkaXRvckNsYXNzTmFtZT1cIm10LTYgYmctd2hpdGUgc2hhZG93LWxnIG1heC13LTV4bCBteC1hdXRvIG1iLTEyIGJvcmRlclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9