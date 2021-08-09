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
      snapshot = _useDocumentOnce2[0]; // hi


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var _snapshot$data;

    if (snapshot !== null && snapshot !== void 0 && (_snapshot$data = snapshot.data()) !== null && _snapshot$data !== void 0 && _snapshot$data.editorState) {
      var _snapshot$data2;

      setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_5__.EditorState.createWithContent((0,draft_js__WEBPACK_IMPORTED_MODULE_5__.convertFromRaw)(snapshot === null || snapshot === void 0 ? void 0 : (_snapshot$data2 = snapshot.data()) === null || _snapshot$data2 === void 0 ? void 0 : _snapshot$data2.editorState)));
    }
  }, [snapshot]);

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
      lineNumber: 58,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0RWRpdG9yLmpzIl0sIm5hbWVzIjpbIkVkaXRvciIsImR5bmFtaWMiLCJ0aGVuIiwibW9kdWxlIiwic3NyIiwiVGV4dEVkaXRvciIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwidXNlU3RhdGUiLCJFZGl0b3JTdGF0ZSIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlRG9jdW1lbnRPbmNlIiwiZGIiLCJkb2MiLCJ1c2VyIiwiZW1haWwiLCJjb2xsZWN0aW9uIiwic25hcHNob3QiLCJ1c2VFZmZlY3QiLCJkYXRhIiwiY29udmVydEZyb21SYXciLCJvbkVkaXRvclN0YXRlQ2hhbmdlIiwic2V0IiwiY29udmVydFRvUmF3IiwiZ2V0Q3VycmVudENvbnRlbnQiLCJtZXJnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPLE1BQ2xCO0FBQUEsU0FBTSw2UEFBOEJDLElBQTlCLENBQW1DLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNILE1BQW5CO0FBQUEsR0FBbkMsQ0FBTjtBQUFBLENBRGtCLEVBRWxCO0FBQ0lJLEtBQUcsRUFBRSxLQURUO0FBQUE7QUFBQTtBQUFBLGtDQURhLDJGQUNiO0FBQUE7QUFBQSxvREFEYSxxQkFDYjtBQUFBO0FBQUEsQ0FGa0IsQ0FBdEI7TUFBTUosTTtBQU9TLFNBQVNLLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSxvQkFDZkMsNERBQVUsRUFESztBQUFBO0FBQUEsTUFDMUJDLE9BRDBCOztBQUFBLGtCQUVLQywrQ0FBUSxDQUFDQyw2REFBQSxFQUFELENBRmI7QUFBQSxNQUUxQkMsV0FGMEI7QUFBQSxNQUViQyxjQUZhOztBQUdqQyxNQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCO0FBSGlDLE1BSXpCQyxFQUp5QixHQUlsQkYsTUFBTSxDQUFDRyxLQUpXLENBSXpCRCxFQUp5Qjs7QUFBQSx5QkFNZEUsK0VBQWUsQ0FDOUJDLG9EQUFBLENBQ2EsVUFEYixFQUVFQyxHQUZGLENBRU1YLE9BQU8sQ0FBQ1ksSUFBUixDQUFhQyxLQUZuQixFQUdFQyxVQUhGLENBR2EsTUFIYixFQUlFSCxHQUpGLENBSU1KLEVBSk4sQ0FEOEIsQ0FORDtBQUFBO0FBQUEsTUFNMUJRLFFBTjBCLHlCQWFyQzs7O0FBQ0lDLGtEQUFTLENBQUMsWUFBTTtBQUFBOztBQUNaLFFBQUlELFFBQUosYUFBSUEsUUFBSixpQ0FBSUEsUUFBUSxDQUFFRSxJQUFWLEVBQUosMkNBQUksZUFBa0JkLFdBQXRCLEVBQW1DO0FBQUE7O0FBQ2pDQyxvQkFBYyxDQUNaRixtRUFBQSxDQUNFZ0Isd0RBQWMsQ0FBQ0gsUUFBRCxhQUFDQSxRQUFELDBDQUFDQSxRQUFRLENBQUVFLElBQVYsRUFBRCxvREFBQyxnQkFBa0JkLFdBQW5CLENBRGhCLENBRFksQ0FBZDtBQUtEO0FBQ0YsR0FSTSxFQVFKLENBQUNZLFFBQUQsQ0FSSSxDQUFUOztBQVVBLE1BQU1JLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ2hCLFdBQUQsRUFBaUI7QUFDekNDLGtCQUFjLENBQUNELFdBQUQsQ0FBZDtBQUVBTyx3REFBQSxDQUNhLFVBRGIsRUFFRUMsR0FGRixDQUVNWCxPQUFPLENBQUNZLElBQVIsQ0FBYUMsS0FGbkIsRUFHRUMsVUFIRixDQUdhLE1BSGIsRUFJRUgsR0FKRixDQUlNSixFQUpOLEVBS0VhLEdBTEYsQ0FNSTtBQUFFakIsaUJBQVcsRUFBRWtCLHNEQUFZLENBQUNsQixXQUFXLENBQUNtQixpQkFBWixFQUFEO0FBQTNCLEtBTkosRUFNb0U7QUFDaEU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FQSjtBQVNILEdBWkQ7O0FBY0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQSwyQkFDSSw4REFBQyxNQUFEO0FBQ0MsaUJBQVcsRUFBRXBCLFdBRGQ7QUFFQyx5QkFBbUIsRUFBRWdCLG1CQUZ0QjtBQUdDLHNCQUFnQixFQUFDLGdEQUhsQjtBQUlDLHFCQUFlLEVBQUM7QUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdIOztHQWpEdUJyQixVO1VBQ0ZDLHdELEVBRUhPLDhELEVBR0lHLDJFOzs7TUFOQ1gsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2MvW2lkXS42Y2YzNDNhMjk2MjY0ZTdhYWI2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IFwicmVhY3QtZHJhZnQtd3lzaXd5Zy9kaXN0L3JlYWN0LWRyYWZ0LXd5c2l3eWcuY3NzXCI7XHJcbmltcG9ydCB7IGNvbnZlcnRGcm9tUmF3LCBjb252ZXJ0VG9SYXcsIEVkaXRvclN0YXRlIH0gZnJvbSAnZHJhZnQtanMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IHVzZURvY3VtZW50T25jZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSc7XHJcblxyXG4vLyBDbGluZXQgc2lkZSByZW5kaW5nIGZvciBUZXh0RWRpdG9yIHBhY2thZ2UsIGlmIHJlbmRlcmVkIG9uIHNlcnZlciBzaWRlIHdpbGwgdGhyb3cgZXJyb3IuXHJcbmNvbnN0IEVkaXRvciA9IGR5bmFtaWMoXHJcbiAgICAoKSA9PiBpbXBvcnQoXCJyZWFjdC1kcmFmdC13eXNpd3lnXCIpLnRoZW4oKG1vZHVsZSkgPT4gbW9kdWxlLkVkaXRvciksXHJcbiAgICB7XHJcbiAgICAgICAgc3NyOiBmYWxzZSxcclxuICAgIH1cclxuICAgICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0RWRpdG9yKCkge1xyXG4gICAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xyXG4gICAgY29uc3QgW2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZV0gPSB1c2VTdGF0ZShFZGl0b3JTdGF0ZS5jcmVhdGVFbXB0eSgpKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IFtzbmFwc2hvdF0gPSB1c2VEb2N1bWVudE9uY2UoXHJcbiAgICAgICAgZGJcclxuICAgICAgICAgLmNvbGxlY3Rpb24oXCJ1c2VyRG9jc1wiKVxyXG4gICAgICAgICAuZG9jKHNlc3Npb24udXNlci5lbWFpbClcclxuICAgICAgICAgLmNvbGxlY3Rpb24oXCJkb2NzXCIpXHJcbiAgICAgICAgIC5kb2MoaWQpXHJcbiAgICApO1xyXG4vLyBoaVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc25hcHNob3Q/LmRhdGEoKT8uZWRpdG9yU3RhdGUpIHtcclxuICAgICAgICAgIHNldEVkaXRvclN0YXRlKFxyXG4gICAgICAgICAgICBFZGl0b3JTdGF0ZS5jcmVhdGVXaXRoQ29udGVudChcclxuICAgICAgICAgICAgICBjb252ZXJ0RnJvbVJhdyhzbmFwc2hvdD8uZGF0YSgpPy5lZGl0b3JTdGF0ZSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIFtzbmFwc2hvdF0pO1xyXG5cclxuICAgIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSAoZWRpdG9yU3RhdGUpID0+IHtcclxuICAgICAgICBzZXRFZGl0b3JTdGF0ZShlZGl0b3JTdGF0ZSk7XHJcblxyXG4gICAgICAgIGRiXHJcbiAgICAgICAgIC5jb2xsZWN0aW9uKFwidXNlckRvY3NcIilcclxuICAgICAgICAgLmRvYyhzZXNzaW9uLnVzZXIuZW1haWwpXHJcbiAgICAgICAgIC5jb2xsZWN0aW9uKFwiZG9jc1wiKVxyXG4gICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAuc2V0KFxyXG4gICAgICAgICAgICB7IGVkaXRvclN0YXRlOiBjb252ZXJ0VG9SYXcoZWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKSkgfSwgLy8gR2V0dGluZyBlZGl0b3JzdGF0ZSBhbmQgY29udmVydGluZyBpdCB0byBqc29uIHRvIGJlIHN0b3JlZCBpbiBmaXJlYmFzZSBcclxuICAgICAgICAgICAgeyBtZXJnZTogdHJ1ZSB9XHJcbiAgICAgICAgKSBcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjhGOUZBXSBtaW4taC1zY3JlZW4gcGItMTZcIj5cclxuICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfVxyXG4gICAgICAgICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17b25FZGl0b3JTdGF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgIHRvb2xiYXJDbGFzc05hbWU9XCJmbGV4IHN0aWNreSB0b3AtMCB6LTUwICFqdXN0aWZ5LWNlbnRlciBteC1hdXRvXCIgXHJcbiAgICAgICAgICAgICBlZGl0b3JDbGFzc05hbWU9XCJtdC02IGJnLXdoaXRlIHNoYWRvdy1sZyBtYXgtdy01eGwgbXgtYXV0byBtYi0xMiBib3JkZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==