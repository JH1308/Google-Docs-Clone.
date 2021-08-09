self["webpackHotUpdate_N_E"]("pages/doc/[id]",{

/***/ "./pages/doc/[id].js":
/*!***************************!*\
  !*** ./pages/doc/[id].js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Doc; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Owner_Documents_visual_stuido_code_google_docs_my_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Button */ "./node_modules/@material-tailwind/react/Button.js");
/* harmony import */ var _material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-tailwind/react/Icon */ "./node_modules/@material-tailwind/react/Icon.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase */ "./firebase.js");
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "./node_modules/react-firebase-hooks/firestore/dist/index.esm.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Login */ "./components/Login.js");
/* harmony import */ var _components_TextEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/TextEditor */ "./components/TextEditor.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Owner\\Documents\\visual stuido code\\google-docs\\my-project\\pages\\doc\\[id].js",
    _s = $RefreshSig$();

 //import TextEditor from "../../components/TextEditor";








function Doc() {
  _s();

  var _snapshot$data, _snapshot$data2;

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_7__.useSession)(),
      _useSession2 = (0,C_Users_Owner_Documents_visual_stuido_code_google_docs_my_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),
      session = _useSession2[0];

  if (!session) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 26
  }, this);
  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // Get Id from the url 

  var id = router.query.id;

  var _useDocumentOnce = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__.useDocumentOnce)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)),
      _useDocumentOnce2 = (0,C_Users_Owner_Documents_visual_stuido_code_google_docs_my_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useDocumentOnce, 2),
      snapshot = _useDocumentOnce2[0],
      loadingSnapshot = _useDocumentOnce2[1]; // Redircts if user tries to access a URL they do not have access too...


  if (!loadingSnapshot && !(snapshot !== null && snapshot !== void 0 && (_snapshot$data = snapshot.data()) !== null && _snapshot$data !== void 0 && _snapshot$data.fileName)) {
    router.replace("/");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: "flex justify-between items-center p-3 pb-1",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: function onClick() {
          return router.push("/");
        },
        className: "cursor-pointer",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "description",
          size: "5xl",
          color: "blue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-grow px-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: snapshot === null || snapshot === void 0 ? void 0 : (_snapshot$data2 = snapshot.data()) === null || _snapshot$data2 === void 0 ? void 0 : _snapshot$data2.fileName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "option",
            children: "File"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "option",
            children: "Edit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "option",
            children: "View"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "option",
            children: "Insert"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "option",
            children: "Format"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "option",
            children: "Tools"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        color: "lightBlue",
        buttonType: "filled",
        size: "regular",
        className: "hidden md:!inline-flex h-10",
        rounded: false,
        block: false,
        iconOnly: false,
        ripple: "light",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "people",
          size: "md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), " SHARE"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "cursor-pointer rounded-full h-10 w-10 ml-2",
        src: session.user.image,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextEditor__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

_s(Doc, "iCLWNMcehdZyc+u1zFt/zOwva9c=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_7__.useSession, next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__.useRouter, react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__.useDocumentOnce];
});

_c = Doc;
;

var _c;

$RefreshReg$(_c, "Doc");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jL1tpZF0uanMiXSwibmFtZXMiOlsiRG9jIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlRG9jdW1lbnRPbmNlIiwiZGIiLCJkb2MiLCJ1c2VyIiwiZW1haWwiLCJjb2xsZWN0aW9uIiwic25hcHNob3QiLCJsb2FkaW5nU25hcHNob3QiLCJkYXRhIiwiZmlsZU5hbWUiLCJyZXBsYWNlIiwicHVzaCIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ1JDLDREQUFVLEVBREY7QUFBQTtBQUFBLE1BQ25CQyxPQURtQjs7QUFFMUIsTUFBSSxDQUFDQSxPQUFMLEVBQWMsb0JBQU8sOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRWQsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QixDQUowQixDQUsxQjs7QUFMMEIsTUFNbEJDLEVBTmtCLEdBTVhGLE1BQU0sQ0FBQ0csS0FOSSxDQU1sQkQsRUFOa0I7O0FBQUEseUJBUVVFLCtFQUFlLENBQy9DQyxvREFBQSxDQUFjLFVBQWQsRUFBMEJDLEdBQTFCLENBQThCUCxPQUFPLENBQUNRLElBQVIsQ0FBYUMsS0FBM0MsRUFBa0RDLFVBQWxELENBQTZELE1BQTdELEVBQXFFSCxHQUFyRSxDQUF5RUosRUFBekUsQ0FEK0MsQ0FSekI7QUFBQTtBQUFBLE1BUW5CUSxRQVJtQjtBQUFBLE1BUVRDLGVBUlMseUJBWTFCOzs7QUFDQSxNQUFJLENBQUNBLGVBQUQsSUFBb0IsRUFBQ0QsUUFBRCxhQUFDQSxRQUFELGlDQUFDQSxRQUFRLENBQUVFLElBQVYsRUFBRCwyQ0FBQyxlQUFrQkMsUUFBbkIsQ0FBeEIsRUFBcUQ7QUFDakRiLFVBQU0sQ0FBQ2MsT0FBUCxDQUFlLEdBQWY7QUFDSDs7QUFFRCxzQkFDSTtBQUFBLDRCQUNJO0FBQVEsZUFBUyxFQUFDLDRDQUFsQjtBQUFBLDhCQUNJO0FBQU0sZUFBTyxFQUFFO0FBQUEsaUJBQU1kLE1BQU0sQ0FBQ2UsSUFBUCxDQUFZLEdBQVosQ0FBTjtBQUFBLFNBQWY7QUFBdUMsaUJBQVMsRUFBQyxnQkFBakQ7QUFBQSwrQkFDQSw4REFBQyxrRUFBRDtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQXlCLGNBQUksRUFBQyxLQUE5QjtBQUFvQyxlQUFLLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUtJO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNJO0FBQUEsb0JBQUtMLFFBQUwsYUFBS0EsUUFBTCwwQ0FBS0EsUUFBUSxDQUFFRSxJQUFWLEVBQUwsb0RBQUssZ0JBQWtCQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxtQkFBUyxFQUFDLDZEQUFmO0FBQUEsa0NBQ0k7QUFBRyxxQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFHLHFCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUcscUJBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBRyxxQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSTtBQUFHLHFCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSixlQU1JO0FBQUcscUJBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQWlCSSw4REFBQyxvRUFBRDtBQUNDLGFBQUssRUFBQyxXQURQO0FBRUMsa0JBQVUsRUFBQyxRQUZaO0FBR0MsWUFBSSxFQUFDLFNBSE47QUFJQyxpQkFBUyxFQUFDLDZCQUpYO0FBS0MsZUFBTyxFQUFFLEtBTFY7QUFNQyxhQUFLLEVBQUUsS0FOUjtBQU9DLGdCQUFRLEVBQUUsS0FQWDtBQVFDLGNBQU0sRUFBQyxPQVJSO0FBQUEsZ0NBVUksOERBQUMsa0VBQUQ7QUFBTSxjQUFJLEVBQUMsUUFBWDtBQUFvQixjQUFJLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkosZUE4Qkk7QUFBSyxpQkFBUyxFQUFDLDRDQUFmO0FBQTRELFdBQUcsRUFBRWQsT0FBTyxDQUFDUSxJQUFSLENBQWFTLEtBQTlFO0FBQXFGLFdBQUcsRUFBQztBQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBa0NJLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQ0g7O0dBdkR1Qm5CLEc7VUFDRkMsd0QsRUFHSEcsOEQsRUFJcUJHLDJFOzs7S0FSaEJQLEc7QUF1RHZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvYy9baWRdLjUxMzQ1M2E0MzJlZDc2NzJlNzc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvQnV0dG9uXCI7XHJcbi8vaW1wb3J0IFRleHRFZGl0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGV4dEVkaXRvclwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0ljb25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVzZURvY3VtZW50T25jZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2dpblwiO1xyXG5pbXBvcnQgVGV4dEVkaXRvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UZXh0RWRpdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2MoKSB7XHJcbiAgICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICBpZiAoIXNlc3Npb24pIHJldHVybiA8TG9naW4gLz47XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICAvLyBHZXQgSWQgZnJvbSB0aGUgdXJsIFxyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IFtzbmFwc2hvdCwgbG9hZGluZ1NuYXBzaG90XSA9IHVzZURvY3VtZW50T25jZShcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlckRvY3NcIikuZG9jKHNlc3Npb24udXNlci5lbWFpbCkuY29sbGVjdGlvbihcImRvY3NcIikuZG9jKGlkKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBSZWRpcmN0cyBpZiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBhIFVSTCB0aGV5IGRvIG5vdCBoYXZlIGFjY2VzcyB0b28uLi5cclxuICAgIGlmICghbG9hZGluZ1NuYXBzaG90ICYmICFzbmFwc2hvdD8uZGF0YSgpPy5maWxlTmFtZSkge1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMyBwYi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiZGVzY3JpcHRpb25cIiBzaXplPVwiNXhsXCIgY29sb3I9XCJibHVlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IHB4LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3NuYXBzaG90Py5kYXRhKCk/LmZpbGVOYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHNwYWNlLXgtMSAtbWwtMSBoLTggdGV4dC1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvcHRpb25cIj5GaWxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvcHRpb25cIj5FZGl0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvcHRpb25cIj5WaWV3PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvcHRpb25cIj5JbnNlcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wdGlvblwiPkZvcm1hdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib3B0aW9uXCIgPlRvb2xzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcclxuICAgICAgICAgICAgICAgICBidXR0b25UeXBlPVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICBzaXplPVwicmVndWxhclwiXHJcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOiFpbmxpbmUtZmxleCBoLTEwXCJcclxuICAgICAgICAgICAgICAgICByb3VuZGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICBibG9jaz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgaWNvbk9ubHk9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgIHJpcHBsZT1cImxpZ2h0XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicGVvcGxlXCIgc2l6ZT1cIm1kXCIgLz4gU0hBUkVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGgtMTAgdy0xMCBtbC0yXCIgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8VGV4dEVkaXRvciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9