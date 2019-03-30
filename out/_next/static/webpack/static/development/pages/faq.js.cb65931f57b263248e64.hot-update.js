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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["308223572", [_config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark]]]) + " " + "qna",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "308223572",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark],
    __self: this
  }, ".qna.__jsx-style-dynamic-selector dt{position:relative;margin:32px 0 16px 0;padding-left:32px;font-size:24px;color:".concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, ";}.qna.__jsx-style-dynamic-selector dt::before{content:'Q. ';position:absolute;left:0px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark, ";}.qna.__jsx-style-dynamic-selector dd .short-answer{position:relative;color:").concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, ";}.qna.__jsx-style-dynamic-selector dd .short-answer::before{content:'A. ';position:absolute;left:0px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark, ";}.qna.__jsx-style-dynamic-selector dd{padding-left:32px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3JlY3Vyc2VkLWljZS1wYWxhY2UuZ2l0aHViLmlvL2NvbXBvbmVudHMvUW5hLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHMkIsQUFPSixBQU1JLEFBS0osQUFNSSxjQWhCQSxBQVdBLElBbEJHLEFBY2MsQUFVckMsY0FoQlcsQUFXQSxPQWxCUyxFQVFpQixBQVdBLFlBTHJDLElBYmlCLGVBQ29CLElBT3JDLEFBV0EsK0JBakJBIiwiZmlsZSI6Ii9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3JlY3Vyc2VkLWljZS1wYWxhY2UuZ2l0aHViLmlvL2NvbXBvbmVudHMvUW5hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFsZXR0ZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IHBhcnNlU2luZ2xlUXVlc3Rpb24gPSAoW3F1ZXN0aW9uLCBzaG9ydEFuc3dlciwgbG9uZ0Fuc3dlcl0sIGluZGV4KSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICA8ZHQ+e3F1ZXN0aW9ufTwvZHQ+XG4gICAgPGRkPlxuICAgICAgPHAgY2xhc3NOYW1lPVwic2hvcnQtYW5zd2VyXCI+e3Nob3J0QW5zd2VyfTwvcD5cbiAgICAgIDxwPntsb25nQW5zd2VyfTwvcD5cbiAgICA8L2RkPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5jb25zdCBwYXJzZVF1ZXN0aW9ucyA9IChxdWVzdGlvbnMpID0+IHF1ZXN0aW9ucy5tYXAocGFyc2VTaW5nbGVRdWVzdGlvbilcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJxbmFcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnFuYSA6Z2xvYmFsKGR0KSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAzMnB4IDAgMTZweCAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ibGFja307XG4gICAgICB9XG4gICAgICAucW5hIDpnbG9iYWwoZHQpOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnUS4gJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuaWNlLmRhcmt9O1xuICAgICAgfVxuICAgICAgLnFuYSA6Z2xvYmFsKGRkKSA6Z2xvYmFsKC5zaG9ydC1hbnN3ZXIpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuYmxhY2t9O1xuICAgICAgfVxuICAgICAgLnFuYSA6Z2xvYmFsKGRkKSA6Z2xvYmFsKC5zaG9ydC1hbnN3ZXIpOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnQS4gJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuaWNlLmRhcmt9O1xuICAgICAgfVxuICAgICAgLnFuYSA6Z2xvYmFsKGRkKSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/queued/workspace/recursed-ice-palace.github.io/components/Qna.js */")));
});

/***/ })

})
//# sourceMappingURL=faq.js.cb65931f57b263248e64.hot-update.js.map