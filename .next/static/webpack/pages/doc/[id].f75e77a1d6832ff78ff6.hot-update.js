self["webpackHotUpdate_N_E"]("pages/doc/[id]",{

/***/ "./pages/doc/[id].js":
/*!***************************!*\
  !*** ./pages/doc/[id].js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
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








var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jL1tpZF0uanMiXSwibmFtZXMiOlsiRG9jIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlRG9jdW1lbnRPbmNlIiwiZGIiLCJkb2MiLCJ1c2VyIiwiZW1haWwiLCJjb2xsZWN0aW9uIiwic25hcHNob3QiLCJsb2FkaW5nU25hcHNob3QiLCJkYXRhIiwiZmlsZU5hbWUiLCJyZXBsYWNlIiwicHVzaCIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFBQTs7QUFBQSxvQkFDUkMsNERBQVUsRUFERjtBQUFBO0FBQUEsTUFDbkJDLE9BRG1COztBQUUxQixNQUFJLENBQUNBLE9BQUwsRUFBYyxvQkFBTyw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFZCxNQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCLENBSjBCLENBSzFCOztBQUwwQixNQU1sQkMsRUFOa0IsR0FNWEYsTUFBTSxDQUFDRyxLQU5JLENBTWxCRCxFQU5rQjs7QUFBQSx5QkFRVUUsK0VBQWUsQ0FDL0NDLG9EQUFBLENBQWMsVUFBZCxFQUEwQkMsR0FBMUIsQ0FBOEJQLE9BQU8sQ0FBQ1EsSUFBUixDQUFhQyxLQUEzQyxFQUFrREMsVUFBbEQsQ0FBNkQsTUFBN0QsRUFBcUVILEdBQXJFLENBQXlFSixFQUF6RSxDQUQrQyxDQVJ6QjtBQUFBO0FBQUEsTUFRbkJRLFFBUm1CO0FBQUEsTUFRVEMsZUFSUyx5QkFZMUI7OztBQUNBLE1BQUksQ0FBQ0EsZUFBRCxJQUFvQixFQUFDRCxRQUFELGFBQUNBLFFBQUQsaUNBQUNBLFFBQVEsQ0FBRUUsSUFBVixFQUFELDJDQUFDLGVBQWtCQyxRQUFuQixDQUF4QixFQUFxRDtBQUNqRGIsVUFBTSxDQUFDYyxPQUFQLENBQWUsR0FBZjtBQUNIOztBQUVELHNCQUNJO0FBQUEsNEJBQ0k7QUFBUSxlQUFTLEVBQUMsNENBQWxCO0FBQUEsOEJBQ0k7QUFBTSxlQUFPLEVBQUU7QUFBQSxpQkFBTWQsTUFBTSxDQUFDZSxJQUFQLENBQVksR0FBWixDQUFOO0FBQUEsU0FBZjtBQUF1QyxpQkFBUyxFQUFDLGdCQUFqRDtBQUFBLCtCQUNBLDhEQUFDLGtFQUFEO0FBQU0sY0FBSSxFQUFDLGFBQVg7QUFBeUIsY0FBSSxFQUFDLEtBQTlCO0FBQW9DLGVBQUssRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBS0wsUUFBTCxhQUFLQSxRQUFMLDBDQUFLQSxRQUFRLENBQUVFLElBQVYsRUFBTCxvREFBSyxnQkFBa0JDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFLLG1CQUFTLEVBQUMsNkRBQWY7QUFBQSxrQ0FDSTtBQUFHLHFCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcscUJBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0k7QUFBRyxxQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFJSTtBQUFHLHFCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJO0FBQUcscUJBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKLGVBTUk7QUFBRyxxQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBaUJJLDhEQUFDLG9FQUFEO0FBQ0MsYUFBSyxFQUFDLFdBRFA7QUFFQyxrQkFBVSxFQUFDLFFBRlo7QUFHQyxZQUFJLEVBQUMsU0FITjtBQUlDLGlCQUFTLEVBQUMsNkJBSlg7QUFLQyxlQUFPLEVBQUUsS0FMVjtBQU1DLGFBQUssRUFBRSxLQU5SO0FBT0MsZ0JBQVEsRUFBRSxLQVBYO0FBUUMsY0FBTSxFQUFDLE9BUlI7QUFBQSxnQ0FVSSw4REFBQyxrRUFBRDtBQUFNLGNBQUksRUFBQyxRQUFYO0FBQW9CLGNBQUksRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCSixlQThCSTtBQUFLLGlCQUFTLEVBQUMsNENBQWY7QUFBNEQsV0FBRyxFQUFFZCxPQUFPLENBQUNRLElBQVIsQ0FBYVMsS0FBOUU7QUFBcUYsV0FBRyxFQUFDO0FBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFrQ0ksOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNDSDs7R0F2RHVCbkIsRztVQUNGQyx3RCxFQUdIRyw4RCxFQUlxQkcsMkU7OztLQVJoQlAsRztBQXVEdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jL1tpZF0uZjc1ZTc3YTFkNjgzMmZmNzhmZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9CdXR0b25cIjtcclxuLy9pbXBvcnQgVGV4dEVkaXRvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UZXh0RWRpdG9yXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3QvSWNvblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgdXNlRG9jdW1lbnRPbmNlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvZ2luXCI7XHJcbmltcG9ydCBUZXh0RWRpdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RleHRFZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvYygpIHtcclxuICAgIGNvbnN0IFtzZXNzaW9uXSA9IHVzZVNlc3Npb24oKTtcclxuICAgIGlmICghc2Vzc2lvbikgcmV0dXJuIDxMb2dpbiAvPjtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIC8vIEdldCBJZCBmcm9tIHRoZSB1cmwgXHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3QgW3NuYXBzaG90LCBsb2FkaW5nU25hcHNob3RdID0gdXNlRG9jdW1lbnRPbmNlKFxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2VyRG9jc1wiKS5kb2Moc2Vzc2lvbi51c2VyLmVtYWlsKS5jb2xsZWN0aW9uKFwiZG9jc1wiKS5kb2MoaWQpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFJlZGlyY3RzIGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGEgVVJMIHRoZXkgZG8gbm90IGhhdmUgYWNjZXNzIHRvby4uLlxyXG4gICAgaWYgKCFsb2FkaW5nU25hcHNob3QgJiYgIXNuYXBzaG90Py5kYXRhKCk/LmZpbGVOYW1lKSB7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC0zIHBiLTFcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJkZXNjcmlwdGlvblwiIHNpemU9XCI1eGxcIiBjb2xvcj1cImJsdWVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcHgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57c25hcHNob3Q/LmRhdGEoKT8uZmlsZU5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gc3BhY2UteC0xIC1tbC0xIGgtOCB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wdGlvblwiPkZpbGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wdGlvblwiPkVkaXQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wdGlvblwiPlZpZXc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wdGlvblwiPkluc2VydDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib3B0aW9uXCI+Rm9ybWF0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvcHRpb25cIiA+VG9vbHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxyXG4gICAgICAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgIHNpemU9XCJyZWd1bGFyXCJcclxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6IWlubGluZS1mbGV4IGgtMTBcIlxyXG4gICAgICAgICAgICAgICAgIHJvdW5kZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgIGJsb2NrPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICBpY29uT25seT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgcmlwcGxlPVwibGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwZW9wbGVcIiBzaXplPVwibWRcIiAvPiBTSEFSRVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIG1sLTJcIiBzcmM9e3Nlc3Npb24udXNlci5pbWFnZX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxUZXh0RWRpdG9yIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBzZXNzaW9uLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==