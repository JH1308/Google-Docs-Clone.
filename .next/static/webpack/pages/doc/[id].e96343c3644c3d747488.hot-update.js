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
/* harmony import */ var C_Users_Owner_Documents_visual_stuido_code_google_docs_my_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Owner\\Documents\\visual stuido code\\google-docs\\my-project\\components\\TextEditor.js",
    _s = $RefreshSig$();







 // Clinet side rending for TextEditor package, if rendered on server side will throw error.

var Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {
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

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_7__.useSession)(),
      _useSession2 = (0,C_Users_Owner_Documents_visual_stuido_code_google_docs_my_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),
      session = _useSession2[0];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(draft_js__WEBPACK_IMPORTED_MODULE_5__.EditorState.createEmpty()),
      editorState = _useState[0],
      setEditorState = _useState[1];

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var id = router.query.id;

  var onEditorStateChange = function onEditorStateChange(editorState) {
    setEditorState(editorState);
    _firebase__WEBPACK_IMPORTED_MODULE_8__.db.collection("userDocs").doc(session.user.email).collection("docs").doc(id).set({
      editorState: (0,draft_js__WEBPACK_IMPORTED_MODULE_5__.convertToRaw)(editorState.getCurrentContent())
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
      lineNumber: 39,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, this);
}

_s(TextEditor, "9BuIy/RTVisZ6cTbeCTwTwLndLc=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_7__.useSession, next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0RWRpdG9yLmpzIl0sIm5hbWVzIjpbIkVkaXRvciIsImR5bmFtaWMiLCJ0aGVuIiwibW9kdWxlIiwic3NyIiwiVGV4dEVkaXRvciIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwidXNlU3RhdGUiLCJFZGl0b3JTdGF0ZSIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsImRiIiwiZG9jIiwidXNlciIsImVtYWlsIiwiY29sbGVjdGlvbiIsInNldCIsImNvbnZlcnRUb1JhdyIsImdldEN1cnJlbnRDb250ZW50IiwibWVyZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxtREFBTyxNQUNsQjtBQUFBLFNBQU0sNlBBQThCQyxJQUE5QixDQUFtQyxVQUFDQyxNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDSCxNQUFuQjtBQUFBLEdBQW5DLENBQU47QUFBQSxDQURrQixFQUVsQjtBQUNJSSxLQUFHLEVBQUUsS0FEVDtBQUFBO0FBQUE7QUFBQSxrQ0FEYSwyRkFDYjtBQUFBO0FBQUEsb0RBRGEscUJBQ2I7QUFBQTtBQUFBLENBRmtCLENBQXRCO01BQU1KLE07QUFPUyxTQUFTSyxVQUFULEdBQXNCO0FBQUE7O0FBQUEsb0JBQ2ZDLDREQUFVLEVBREs7QUFBQTtBQUFBLE1BQzFCQyxPQUQwQjs7QUFBQSxrQkFFS0MsK0NBQVEsQ0FBQ0MsNkRBQUEsRUFBRCxDQUZiO0FBQUEsTUFFMUJDLFdBRjBCO0FBQUEsTUFFYkMsY0FGYTs7QUFHakMsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QjtBQUhpQyxNQUl6QkMsRUFKeUIsR0FJbEJGLE1BQU0sQ0FBQ0csS0FKVyxDQUl6QkQsRUFKeUI7O0FBTWpDLE1BQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ04sV0FBRCxFQUFpQjtBQUN6Q0Msa0JBQWMsQ0FBQ0QsV0FBRCxDQUFkO0FBRUFPLHdEQUFBLENBQ2EsVUFEYixFQUVFQyxHQUZGLENBRU1YLE9BQU8sQ0FBQ1ksSUFBUixDQUFhQyxLQUZuQixFQUdFQyxVQUhGLENBR2EsTUFIYixFQUlFSCxHQUpGLENBSU1KLEVBSk4sRUFLRVEsR0FMRixDQU1JO0FBQUVaLGlCQUFXLEVBQUVhLHNEQUFZLENBQUNiLFdBQVcsQ0FBQ2MsaUJBQVosRUFBRDtBQUEzQixLQU5KLEVBTW9FO0FBQ2hFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBUEo7QUFTSCxHQVpEOztBQWNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUEsMkJBQ0ksOERBQUMsTUFBRDtBQUNDLGlCQUFXLEVBQUVmLFdBRGQ7QUFFQyx5QkFBbUIsRUFBRU0sbUJBRnRCO0FBR0Msc0JBQWdCLEVBQUMsZ0RBSGxCO0FBSUMscUJBQWUsRUFBQztBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0dBL0J1QlgsVTtVQUNGQyx3RCxFQUVITyw4RDs7O01BSEtSLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jL1tpZF0uZTk2MzQzYzM2NDRjM2Q3NDc0ODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1kcmFmdC13eXNpd3lnL2Rpc3QvcmVhY3QtZHJhZnQtd3lzaXd5Zy5jc3NcIjtcclxuaW1wb3J0IHsgY29udmVydEZyb21SYXcsIGNvbnZlcnRUb1JhdywgRWRpdG9yU3RhdGUgfSBmcm9tICdkcmFmdC1qcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbi8vIENsaW5ldCBzaWRlIHJlbmRpbmcgZm9yIFRleHRFZGl0b3IgcGFja2FnZSwgaWYgcmVuZGVyZWQgb24gc2VydmVyIHNpZGUgd2lsbCB0aHJvdyBlcnJvci5cclxuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcclxuICAgICgpID0+IGltcG9ydChcInJlYWN0LWRyYWZ0LXd5c2l3eWdcIikudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuRWRpdG9yKSxcclxuICAgIHtcclxuICAgICAgICBzc3I6IGZhbHNlLFxyXG4gICAgfVxyXG4gICAgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRFZGl0b3IoKSB7XHJcbiAgICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCkpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3Qgb25FZGl0b3JTdGF0ZUNoYW5nZSA9IChlZGl0b3JTdGF0ZSkgPT4ge1xyXG4gICAgICAgIHNldEVkaXRvclN0YXRlKGVkaXRvclN0YXRlKTtcclxuXHJcbiAgICAgICAgZGJcclxuICAgICAgICAgLmNvbGxlY3Rpb24oXCJ1c2VyRG9jc1wiKVxyXG4gICAgICAgICAuZG9jKHNlc3Npb24udXNlci5lbWFpbClcclxuICAgICAgICAgLmNvbGxlY3Rpb24oXCJkb2NzXCIpXHJcbiAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgIC5zZXQoXHJcbiAgICAgICAgICAgIHsgZWRpdG9yU3RhdGU6IGNvbnZlcnRUb1JhdyhlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKSB9LCAvLyBHZXR0aW5nIGVkaXRvcnN0YXRlIGFuZCBjb252ZXJ0aW5nIGl0IHRvIGpzb24gdG8gYmUgc3RvcmVkIGluIGZpcmViYXNlIFxyXG4gICAgICAgICAgICB7IG1lcmdlOiB0cnVlIH1cclxuICAgICAgICApIFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGOEY5RkFdIG1pbi1oLXNjcmVlbiBwYi0xNlwiPlxyXG4gICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9XHJcbiAgICAgICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXtvbkVkaXRvclN0YXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgdG9vbGJhckNsYXNzTmFtZT1cImZsZXggc3RpY2t5IHRvcC0wIHotNTAgIWp1c3RpZnktY2VudGVyIG14LWF1dG9cIiBcclxuICAgICAgICAgICAgIGVkaXRvckNsYXNzTmFtZT1cIm10LTYgYmctd2hpdGUgc2hhZG93LWxnIG1heC13LTV4bCBteC1hdXRvIG1iLTEyIGJvcmRlclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9