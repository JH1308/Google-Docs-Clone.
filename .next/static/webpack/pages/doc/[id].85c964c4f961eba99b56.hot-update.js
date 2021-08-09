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
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "./node_modules/react-firebase-hooks/firestore/dist/index.esm.js");
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

  var _useDocumentOnce = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__.useDocumentOnce)(_firebase__WEBPACK_IMPORTED_MODULE_8__.db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)),
      _useDocumentOnce2 = (0,C_Users_Owner_Documents_visual_stuido_code_google_docs_my_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useDocumentOnce, 1),
      snapshot = _useDocumentOnce2[0];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var _snapshot$data;

    if (snapshot !== null && snapshot !== void 0 && (_snapshot$data = snapshot.data()) !== null && _snapshot$data !== void 0 && _snapshot$data.editorState) {
      var _snapshot$data2;

      setEditorState(EdirtorState.createWithContent((0,draft_js__WEBPACK_IMPORTED_MODULE_5__.convertFromRaw)(snapshot === null || snapshot === void 0 ? void 0 : (_snapshot$data2 = snapshot.data()) === null || _snapshot$data2 === void 0 ? void 0 : _snapshot$data2.text)));
    }
  }, []);

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
      lineNumber: 56,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }, this);
}

_s(TextEditor, "QXgTvCWyrkL0gk8wZIEmoYg2n7s=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_7__.useSession, next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__.useDocumentOnce];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0RWRpdG9yLmpzIl0sIm5hbWVzIjpbIkVkaXRvciIsImR5bmFtaWMiLCJ0aGVuIiwibW9kdWxlIiwic3NyIiwiVGV4dEVkaXRvciIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwidXNlU3RhdGUiLCJFZGl0b3JTdGF0ZSIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlRG9jdW1lbnRPbmNlIiwiZGIiLCJkb2MiLCJ1c2VyIiwiZW1haWwiLCJjb2xsZWN0aW9uIiwic25hcHNob3QiLCJ1c2VFZmZlY3QiLCJkYXRhIiwiRWRpcnRvclN0YXRlIiwiY3JlYXRlV2l0aENvbnRlbnQiLCJjb252ZXJ0RnJvbVJhdyIsInRleHQiLCJvbkVkaXRvclN0YXRlQ2hhbmdlIiwic2V0IiwiY29udmVydFRvUmF3IiwiZ2V0Q3VycmVudENvbnRlbnQiLCJtZXJnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPLE1BQ2xCO0FBQUEsU0FBTSw2UEFBOEJDLElBQTlCLENBQW1DLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNILE1BQW5CO0FBQUEsR0FBbkMsQ0FBTjtBQUFBLENBRGtCLEVBRWxCO0FBQ0lJLEtBQUcsRUFBRSxLQURUO0FBQUE7QUFBQTtBQUFBLGtDQURhLDJGQUNiO0FBQUE7QUFBQSxvREFEYSxxQkFDYjtBQUFBO0FBQUEsQ0FGa0IsQ0FBdEI7TUFBTUosTTtBQU9TLFNBQVNLLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSxvQkFDZkMsNERBQVUsRUFESztBQUFBO0FBQUEsTUFDMUJDLE9BRDBCOztBQUFBLGtCQUVLQywrQ0FBUSxDQUFDQyw2REFBQSxFQUFELENBRmI7QUFBQSxNQUUxQkMsV0FGMEI7QUFBQSxNQUViQyxjQUZhOztBQUdqQyxNQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCO0FBSGlDLE1BSXpCQyxFQUp5QixHQUlsQkYsTUFBTSxDQUFDRyxLQUpXLENBSXpCRCxFQUp5Qjs7QUFBQSx5QkFNZEUsK0VBQWUsQ0FDOUJDLG9EQUFBLENBQ2EsVUFEYixFQUVFQyxHQUZGLENBRU1YLE9BQU8sQ0FBQ1ksSUFBUixDQUFhQyxLQUZuQixFQUdFQyxVQUhGLENBR2EsTUFIYixFQUlFSCxHQUpGLENBSU1KLEVBSk4sQ0FEOEIsQ0FORDtBQUFBO0FBQUEsTUFNMUJRLFFBTjBCOztBQWNqQ0Msa0RBQVMsQ0FBQyxZQUFNO0FBQUE7O0FBQ1osUUFBSUQsUUFBSixhQUFJQSxRQUFKLGlDQUFJQSxRQUFRLENBQUVFLElBQVYsRUFBSiwyQ0FBSSxlQUFrQmQsV0FBdEIsRUFBbUM7QUFBQTs7QUFDL0JDLG9CQUFjLENBQUNjLFlBQVksQ0FBQ0MsaUJBQWIsQ0FDWEMsd0RBQWMsQ0FBQ0wsUUFBRCxhQUFDQSxRQUFELDBDQUFDQSxRQUFRLENBQUVFLElBQVYsRUFBRCxvREFBQyxnQkFBa0JJLElBQW5CLENBREgsQ0FBRCxDQUFkO0FBR0g7QUFDSixHQU5RLEVBTU4sRUFOTSxDQUFUOztBQVFBLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ25CLFdBQUQsRUFBaUI7QUFDekNDLGtCQUFjLENBQUNELFdBQUQsQ0FBZDtBQUVBTyx3REFBQSxDQUNhLFVBRGIsRUFFRUMsR0FGRixDQUVNWCxPQUFPLENBQUNZLElBQVIsQ0FBYUMsS0FGbkIsRUFHRUMsVUFIRixDQUdhLE1BSGIsRUFJRUgsR0FKRixDQUlNSixFQUpOLEVBS0VnQixHQUxGLENBTUk7QUFBRXBCLGlCQUFXLEVBQUVxQixzREFBWSxDQUFDckIsV0FBVyxDQUFDc0IsaUJBQVosRUFBRDtBQUEzQixLQU5KLEVBTW9FO0FBQ2hFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBUEo7QUFTSCxHQVpEOztBQWNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUEsMkJBQ0ksOERBQUMsTUFBRDtBQUNDLGlCQUFXLEVBQUV2QixXQURkO0FBRUMseUJBQW1CLEVBQUVtQixtQkFGdEI7QUFHQyxzQkFBZ0IsRUFBQyxnREFIbEI7QUFJQyxxQkFBZSxFQUFDO0FBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDs7R0EvQ3VCeEIsVTtVQUNGQyx3RCxFQUVITyw4RCxFQUdJRywyRTs7O01BTkNYLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jL1tpZF0uODVjOTY0YzRmOTYxZWJhOTliNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBcInJlYWN0LWRyYWZ0LXd5c2l3eWcvZGlzdC9yZWFjdC1kcmFmdC13eXNpd3lnLmNzc1wiO1xyXG5pbXBvcnQgeyBjb252ZXJ0RnJvbVJhdywgY29udmVydFRvUmF3LCBFZGl0b3JTdGF0ZSB9IGZyb20gJ2RyYWZ0LWpzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VEb2N1bWVudE9uY2UgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnO1xyXG5cclxuLy8gQ2xpbmV0IHNpZGUgcmVuZGluZyBmb3IgVGV4dEVkaXRvciBwYWNrYWdlLCBpZiByZW5kZXJlZCBvbiBzZXJ2ZXIgc2lkZSB3aWxsIHRocm93IGVycm9yLlxyXG5jb25zdCBFZGl0b3IgPSBkeW5hbWljKFxyXG4gICAgKCkgPT4gaW1wb3J0KFwicmVhY3QtZHJhZnQtd3lzaXd5Z1wiKS50aGVuKChtb2R1bGUpID0+IG1vZHVsZS5FZGl0b3IpLFxyXG4gICAge1xyXG4gICAgICAgIHNzcjogZmFsc2UsXHJcbiAgICB9XHJcbiAgICApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dEVkaXRvcigpIHtcclxuICAgIGNvbnN0IFtzZXNzaW9uXSA9IHVzZVNlc3Npb24oKTtcclxuICAgIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBjb25zdCBbc25hcHNob3RdID0gdXNlRG9jdW1lbnRPbmNlKFxyXG4gICAgICAgIGRiXHJcbiAgICAgICAgIC5jb2xsZWN0aW9uKFwidXNlckRvY3NcIilcclxuICAgICAgICAgLmRvYyhzZXNzaW9uLnVzZXIuZW1haWwpXHJcbiAgICAgICAgIC5jb2xsZWN0aW9uKFwiZG9jc1wiKVxyXG4gICAgICAgICAuZG9jKGlkKVxyXG4gICAgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzbmFwc2hvdD8uZGF0YSgpPy5lZGl0b3JTdGF0ZSkge1xyXG4gICAgICAgICAgICBzZXRFZGl0b3JTdGF0ZShFZGlydG9yU3RhdGUuY3JlYXRlV2l0aENvbnRlbnQoXHJcbiAgICAgICAgICAgICAgICBjb252ZXJ0RnJvbVJhdyhzbmFwc2hvdD8uZGF0YSgpPy50ZXh0KVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvbkVkaXRvclN0YXRlQ2hhbmdlID0gKGVkaXRvclN0YXRlKSA9PiB7XHJcbiAgICAgICAgc2V0RWRpdG9yU3RhdGUoZWRpdG9yU3RhdGUpO1xyXG5cclxuICAgICAgICBkYlxyXG4gICAgICAgICAuY29sbGVjdGlvbihcInVzZXJEb2NzXCIpXHJcbiAgICAgICAgIC5kb2Moc2Vzc2lvbi51c2VyLmVtYWlsKVxyXG4gICAgICAgICAuY29sbGVjdGlvbihcImRvY3NcIilcclxuICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgLnNldChcclxuICAgICAgICAgICAgeyBlZGl0b3JTdGF0ZTogY29udmVydFRvUmF3KGVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpIH0sIC8vIEdldHRpbmcgZWRpdG9yc3RhdGUgYW5kIGNvbnZlcnRpbmcgaXQgdG8ganNvbiB0byBiZSBzdG9yZWQgaW4gZmlyZWJhc2UgXHJcbiAgICAgICAgICAgIHsgbWVyZ2U6IHRydWUgfVxyXG4gICAgICAgICkgXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0Y4RjlGQV0gbWluLWgtc2NyZWVuIHBiLTE2XCI+XHJcbiAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgIG9uRWRpdG9yU3RhdGVDaGFuZ2U9e29uRWRpdG9yU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICB0b29sYmFyQ2xhc3NOYW1lPVwiZmxleCBzdGlja3kgdG9wLTAgei01MCAhanVzdGlmeS1jZW50ZXIgbXgtYXV0b1wiIFxyXG4gICAgICAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwibXQtNiBiZy13aGl0ZSBzaGFkb3ctbGcgbWF4LXctNXhsIG14LWF1dG8gbWItMTIgYm9yZGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=