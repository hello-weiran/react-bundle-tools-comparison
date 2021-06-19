(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 860:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(722);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./pages/logo.svg
/* harmony default export */ var logo = ({"src":"/_next/static/image/pages/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg","height":595,"width":842});
;// CONCATENATED MODULE: ./pages/_app.js











function App() {
  let date = null;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "App-header",
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: logo,
        className: "App-logo",
        alt: "logo"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Edit ", /*#__PURE__*/jsx_runtime_.jsx("code", {
          children: "src/App.js"
        }), " and save to reload."]
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "App-link",
        href: "https://reactjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Learn React"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.DatePicker, {
        onChange: v => date = v
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        onClick: () => window.alert(`you have submmited ${date}.`),
        children: "\u786E\u5B9A"
      })]
    })]
  });
}

/* harmony default export */ var _app = (App);

/***/ }),

/***/ 722:
/***/ (function() {



/***/ }),

/***/ 953:
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(860));
module.exports = __webpack_exports__;

})();