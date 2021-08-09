(function() {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": function() { return /* binding */ db; }
/* harmony export */ });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

const firebaseConfig = {
  apiKey: "AIzaSyDWYhse3nYng2RI4Z6DaP8T3oOniRzmM1s",
  authDomain: "docs-clone-5dfcd.firebaseapp.com",
  projectId: "docs-clone-5dfcd",
  storageBucket: "docs-clone-5dfcd.appspot.com",
  messagingSenderId: "102496625981",
  appId: "1:102496625981:web:a64171edab5772b106d154"
};
const app = !(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length) ? firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0___default().app();
const db = app.firestore();


/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/firebase-adapter */ "@next-auth/firebase-adapter");
/* harmony import */ var _next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../firebase */ "./firebase.js");




/* harmony default export */ __webpack_exports__["default"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
  // Configure one or more authentication providers
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }) // ...add more providers here
  ],
  // firebase adapter for next.js to listen to google database
  adapter: (0,_next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__.FirebaseAdapter)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db)
}));

/***/ }),

/***/ "@next-auth/firebase-adapter":
/*!**********************************************!*\
  !*** external "@next-auth/firebase-adapter" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@next-auth/firebase-adapter");;

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase");;

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzLy4vZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vd2l0aC10YWlsd2luZGNzcy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJ3ZWJwYWNrOi8vd2l0aC10YWlsd2luZGNzcy9leHRlcm5hbCBcIkBuZXh0LWF1dGgvZmlyZWJhc2UtYWRhcHRlclwiIiwid2VicGFjazovL3dpdGgtdGFpbHdpbmRjc3MvZXh0ZXJuYWwgXCJmaXJlYmFzZVwiIiwid2VicGFjazovL3dpdGgtdGFpbHdpbmRjc3MvZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIiIsIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzL2V4dGVybmFsIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiZmlyZWJhc2UiLCJkYiIsImZpcmVzdG9yZSIsIk5leHRBdXRoIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiYWRhcHRlciIsIkZpcmViYXNlQWRhcHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsY0FBYyxHQUFHO0FBQ25CQyxRQUFNLEVBQUUseUNBRFc7QUFFbkJDLFlBQVUsRUFBRSxrQ0FGTztBQUduQkMsV0FBUyxFQUFFLGtCQUhRO0FBSW5CQyxlQUFhLEVBQUUsOEJBSkk7QUFLbkJDLG1CQUFpQixFQUFFLGNBTEE7QUFNbkJDLE9BQUssRUFBRTtBQU5ZLENBQXZCO0FBU0EsTUFBTUMsR0FBRyxHQUFHLENBQUNDLDZEQUFELEdBQXdCQSw2REFBQSxDQUF1QlIsY0FBdkIsQ0FBeEIsR0FBaUVRLG1EQUFBLEVBQTdFO0FBQ0EsTUFBTUMsRUFBRSxHQUFHRixHQUFHLENBQUNHLFNBQUosRUFBWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLCtEQUFlQyxnREFBUSxDQUFDO0FBQ3RCO0FBQ0FDLFdBQVMsRUFBRSxDQUNUQyxpRUFBQSxDQUFpQjtBQUNmQyxZQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFEUDtBQUVmQyxnQkFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGWCxHQUFqQixDQURTLENBS1Q7QUFMUyxHQUZXO0FBU3RCO0FBQ0FDLFNBQU8sRUFBRUMsNEVBQWUsQ0FBQ1oseUNBQUQ7QUFWRixDQUFELENBQXZCLEU7Ozs7Ozs7Ozs7O0FDTEEseUQ7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuIFxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lEV1loc2UzblluZzJSSTRaNkRhUDhUM29PbmlSem1NMXNcIixcclxuICAgIGF1dGhEb21haW46IFwiZG9jcy1jbG9uZS01ZGZjZC5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJkb2NzLWNsb25lLTVkZmNkXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImRvY3MtY2xvbmUtNWRmY2QuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwMjQ5NjYyNTk4MVwiLFxyXG4gICAgYXBwSWQ6IFwiMToxMDI0OTY2MjU5ODE6d2ViOmE2NDE3MWVkYWI1NzcyYjEwNmQxNTRcIlxyXG4gIH07XHJcblxyXG5jb25zdCBhcHAgPSAhZmlyZWJhc2UuYXBwcy5sZW5ndGggPyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSA6IGZpcmViYXNlLmFwcCgpO1xyXG5jb25zdCBkYiA9IGFwcC5maXJlc3RvcmUoKTtcclxuXHJcbmV4cG9ydCB7IGRiIH07IiwiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XHJcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycyc7XHJcbmltcG9ydCB7IEZpcmViYXNlQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL2ZpcmViYXNlLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vLi4vZmlyZWJhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBQcm92aWRlcnMuR29vZ2xlKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVRcclxuICAgIH0pLFxyXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcclxuICBdLFxyXG4gIC8vIGZpcmViYXNlIGFkYXB0ZXIgZm9yIG5leHQuanMgdG8gbGlzdGVuIHRvIGdvb2dsZSBkYXRhYmFzZVxyXG4gIGFkYXB0ZXI6IEZpcmViYXNlQWRhcHRlcihkYiksXHJcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXh0LWF1dGgvZmlyZWJhc2UtYWRhcHRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==