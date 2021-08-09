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
    _firebase__WEBPACK_IMPORTED_MODULE_7__.db.collection("userDocs").doc(session.user.email).collection("docs").doc(id).set({
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
      lineNumber: 39,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0RWRpdG9yLmpzIl0sIm5hbWVzIjpbIkVkaXRvciIsImR5bmFtaWMiLCJ0aGVuIiwibW9kdWxlIiwic3NyIiwiVGV4dEVkaXRvciIsInNlc3Npb24iLCJ1c2VTZXNzaW9uIiwidXNlU3RhdGUiLCJFZGl0b3JTdGF0ZSIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsImRiIiwiZG9jIiwidXNlciIsImVtYWlsIiwiY29sbGVjdGlvbiIsInNldCIsImNvbnZlcnRUb1JhdyIsImdldEN1cnJlbnRDb250ZW50IiwibWVyZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFDbEI7QUFBQSxTQUFNLDZQQUE4QkMsSUFBOUIsQ0FBbUMsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0gsTUFBbkI7QUFBQSxHQUFuQyxDQUFOO0FBQUEsQ0FEa0IsRUFFbEI7QUFDSUksS0FBRyxFQUFFLEtBRFQ7QUFBQTtBQUFBO0FBQUEsa0NBRGEsMkZBQ2I7QUFBQTtBQUFBLG9EQURhLHFCQUNiO0FBQUE7QUFBQSxDQUZrQixDQUF0QjtNQUFNSixNO0FBT1MsU0FBU0ssVUFBVCxHQUFzQjtBQUFBOztBQUNqQyxNQUFNQyxPQUFPLEdBQUdDLDREQUFVLEVBQTFCOztBQURpQyxrQkFFS0MsK0NBQVEsQ0FBQ0MsNkRBQUEsRUFBRCxDQUZiO0FBQUEsTUFFMUJDLFdBRjBCO0FBQUEsTUFFYkMsY0FGYTs7QUFHakMsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QjtBQUhpQyxNQUl6QkMsRUFKeUIsR0FJbEJGLE1BQU0sQ0FBQ0csS0FKVyxDQUl6QkQsRUFKeUI7O0FBTWpDLE1BQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ04sV0FBRCxFQUFpQjtBQUN6Q0Msa0JBQWMsQ0FBQ0QsV0FBRCxDQUFkO0FBRUFPLHdEQUFBLENBQ2EsVUFEYixFQUVFQyxHQUZGLENBRU1aLE9BQU8sQ0FBQ2EsSUFBUixDQUFhQyxLQUZuQixFQUdFQyxVQUhGLENBR2EsTUFIYixFQUlFSCxHQUpGLENBSU1KLEVBSk4sRUFLRVEsR0FMRixDQU1JO0FBQUVaLGlCQUFXLEVBQUVhLHNEQUFZLENBQUNiLFdBQVcsQ0FBQ2MsaUJBQVosRUFBRDtBQUEzQixLQU5KLEVBTW9FO0FBQ2hFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBUEo7QUFTSCxHQVpEOztBQWNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUEsMkJBQ0ksOERBQUMsTUFBRDtBQUNDLGlCQUFXLEVBQUVmLFdBRGQ7QUFFQyx5QkFBbUIsRUFBRU0sbUJBRnRCO0FBR0Msc0JBQWdCLEVBQUMsZ0RBSGxCO0FBSUMscUJBQWUsRUFBQztBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0dBL0J1QlgsVTtVQUNKRSx3RCxFQUVETSw4RDs7O01BSEtSLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jL1tpZF0uMTU3NjBiOTQyOTU0ZmI2Njc1ZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1kcmFmdC13eXNpd3lnL2Rpc3QvcmVhY3QtZHJhZnQtd3lzaXd5Zy5jc3NcIjtcclxuaW1wb3J0IHsgY29udmVydEZyb21SYXcsIGNvbnZlcnRUb1JhdywgRWRpdG9yU3RhdGUgfSBmcm9tICdkcmFmdC1qcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbi8vIENsaW5ldCBzaWRlIHJlbmRpbmcgZm9yIFRleHRFZGl0b3IgcGFja2FnZSwgaWYgcmVuZGVyZWQgb24gc2VydmVyIHNpZGUgd2lsbCB0aHJvdyBlcnJvci5cclxuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcclxuICAgICgpID0+IGltcG9ydChcInJlYWN0LWRyYWZ0LXd5c2l3eWdcIikudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuRWRpdG9yKSxcclxuICAgIHtcclxuICAgICAgICBzc3I6IGZhbHNlLFxyXG4gICAgfVxyXG4gICAgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRFZGl0b3IoKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xyXG4gICAgY29uc3QgW2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZV0gPSB1c2VTdGF0ZShFZGl0b3JTdGF0ZS5jcmVhdGVFbXB0eSgpKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSAoZWRpdG9yU3RhdGUpID0+IHtcclxuICAgICAgICBzZXRFZGl0b3JTdGF0ZShlZGl0b3JTdGF0ZSk7XHJcblxyXG4gICAgICAgIGRiXHJcbiAgICAgICAgIC5jb2xsZWN0aW9uKFwidXNlckRvY3NcIilcclxuICAgICAgICAgLmRvYyhzZXNzaW9uLnVzZXIuZW1haWwpXHJcbiAgICAgICAgIC5jb2xsZWN0aW9uKFwiZG9jc1wiKVxyXG4gICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAuc2V0KFxyXG4gICAgICAgICAgICB7IGVkaXRvclN0YXRlOiBjb252ZXJ0VG9SYXcoZWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKSkgfSwgLy8gR2V0dGluZyBlZGl0b3JzdGF0ZSBhbmQgY29udmVydGluZyBpdCB0byBqc29uIHRvIGJlIHN0b3JlZCBpbiBmaXJlYmFzZSBcclxuICAgICAgICAgICAgeyBtZXJnZTogdHJ1ZSB9XHJcbiAgICAgICAgKSBcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjhGOUZBXSBtaW4taC1zY3JlZW4gcGItMTZcIj5cclxuICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfVxyXG4gICAgICAgICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17b25FZGl0b3JTdGF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgIHRvb2xiYXJDbGFzc05hbWU9XCJmbGV4IHN0aWNreSB0b3AtMCB6LTUwICFqdXN0aWZ5LWNlbnRlciBteC1hdXRvXCIgXHJcbiAgICAgICAgICAgICBlZGl0b3JDbGFzc05hbWU9XCJtdC02IGJnLXdoaXRlIHNoYWRvdy1sZyBtYXgtdy01eGwgbXgtYXV0byBtYi0xMiBib3JkZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==