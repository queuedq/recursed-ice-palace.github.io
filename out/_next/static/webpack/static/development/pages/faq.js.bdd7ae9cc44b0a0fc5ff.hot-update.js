webpackHotUpdate("static/development/pages/faq.js",{

/***/ "./components/Qna.js":
/*!***************************!*\
  !*** ./components/Qna.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "/Users/queued/workspace/recursed-ice-palace.github.io/components/Qna.js";




var parseSingleQuestion = function parseSingleQuestion(_ref, index) {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 3),
      question = _ref2[0],
      shortAnswer = _ref2[1],
      longAnswer = _ref2[2];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("dt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, question), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("dd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "short-answer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, shortAnswer), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, longAnswer)));
};

var parseQuestions = function parseQuestions(questions) {
  return questions.map(parseSingleQuestion);
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1414499354", [_config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark]]]) + " " + "qna",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1414499354",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark],
    __self: this
  }, ".qna.__jsx-style-dynamic-selector dt{position:relative;margin:32px 0 16px 0;padding-left:32px;font-size:24px;color:".concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, ";}.qna.__jsx-style-dynamic-selector dt::before{content:'Q. ';position:absolute;left:0px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark, ";}.qna.__jsx-style-dynamic-selector dd>.short-answer{position:relative;margin-left:-32px;padding-left:32px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, ";}.qna.__jsx-style-dynamic-selector dd .short-answer::before{content:'A. ';position:absolute;left:0px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark, ";}.qna.__jsx-style-dynamic-selector dd{padding-left:32px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3JlY3Vyc2VkLWljZS1wYWxhY2UuZ2l0aHViLmlvL2NvbXBvbmVudHMvUW5hLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHMkIsQUFPSixBQU1JLEFBTUosQUFNSSxjQWpCQSxBQVlBLElBbkJHLEFBYUgsQUFZcEIsY0FqQlcsQUFZQSxJQU5TLEdBYkEsRUFRaUIsQUFZQSxhQU5BLEdBYnBCLGVBQ29CLElBT3JDLEFBWUEsYUFOQSxrQkFaQSIsImZpbGUiOiIvVXNlcnMvcXVldWVkL3dvcmtzcGFjZS9yZWN1cnNlZC1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL1FuYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhbGV0dGUgfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBwYXJzZVNpbmdsZVF1ZXN0aW9uID0gKFtxdWVzdGlvbiwgc2hvcnRBbnN3ZXIsIGxvbmdBbnN3ZXJdLCBpbmRleCkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgPGR0PntxdWVzdGlvbn08L2R0PlxuICAgIDxkZD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInNob3J0LWFuc3dlclwiPntzaG9ydEFuc3dlcn08L3A+XG4gICAgICA8cD57bG9uZ0Fuc3dlcn08L3A+XG4gICAgPC9kZD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuY29uc3QgcGFyc2VRdWVzdGlvbnMgPSAocXVlc3Rpb25zKSA9PiBxdWVzdGlvbnMubWFwKHBhcnNlU2luZ2xlUXVlc3Rpb24pXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicW5hXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5xbmEgOmdsb2JhbChkdCkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMzJweCAwIDE2cHggMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuYmxhY2t9O1xuICAgICAgfVxuICAgICAgLnFuYSA6Z2xvYmFsKGR0KTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ1EuICc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5kYXJrfTtcbiAgICAgIH1cbiAgICAgIC5xbmEgOmdsb2JhbChkZCkgPiA6Z2xvYmFsKC5zaG9ydC1hbnN3ZXIpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTMycHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ibGFja307XG4gICAgICB9XG4gICAgICAucW5hIDpnbG9iYWwoZGQpIDpnbG9iYWwoLnNob3J0LWFuc3dlcik6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICdBLiAnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5pY2UuZGFya307XG4gICAgICB9XG4gICAgICAucW5hIDpnbG9iYWwoZGQpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKVxuIl19 */\n/*@ sourceURL=/Users/queued/workspace/recursed-ice-palace.github.io/components/Qna.js */")));
});

/***/ })

})
//# sourceMappingURL=faq.js.bdd7ae9cc44b0a0fc5ff.hot-update.js.map