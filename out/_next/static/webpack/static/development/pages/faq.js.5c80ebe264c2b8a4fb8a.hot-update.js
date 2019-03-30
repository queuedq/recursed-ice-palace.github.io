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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["371927980", [_config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark]]]) + " " + "qna",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "371927980",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark],
    __self: this
  }, ".qna.__jsx-style-dynamic-selector dt{position:relative;margin:32px 0 16px 0;padding-left:32px;font-size:24px;color:".concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, ";}.qna.__jsx-style-dynamic-selector dt::before{content:'Q. ';position:absolute;left:0px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark, ";}.qna.__jsx-style-dynamic-selector dd .short-answer{position:relative;padding-left:32px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].black, ";}.qna.__jsx-style-dynamic-selector dd .short-answer::before{content:'A. ';position:absolute;left:0px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.dark, ";}.qna.__jsx-style-dynamic-selector dd{margin-left:32px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3JlY3Vyc2VkLWljZS1wYWxhY2UuZ2l0aHViLmlvL2NvbXBvbmVudHMvUW5hLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHMkIsQUFPSixBQU1JLEFBS0osQUFNRyxjQWhCQyxBQVdBLEdBTXBCLENBeEJ1QixBQWFILGNBTFQsQUFXQSxJQUwwQixHQWJqQixFQVFpQixBQVdBLGdCQWxCcEIsY0FhakIsQ0FacUMsSUFPckMsQUFXQSwrQkFqQkEiLCJmaWxlIjoiL1VzZXJzL3F1ZXVlZC93b3Jrc3BhY2UvcmVjdXJzZWQtaWNlLXBhbGFjZS5naXRodWIuaW8vY29tcG9uZW50cy9RbmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYWxldHRlIH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgcGFyc2VTaW5nbGVRdWVzdGlvbiA9IChbcXVlc3Rpb24sIHNob3J0QW5zd2VyLCBsb25nQW5zd2VyXSwgaW5kZXgpID0+IChcbiAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgIDxkdD57cXVlc3Rpb259PC9kdD5cbiAgICA8ZGQ+XG4gICAgICA8cCBjbGFzc05hbWU9XCJzaG9ydC1hbnN3ZXJcIj57c2hvcnRBbnN3ZXJ9PC9wPlxuICAgICAgPHA+e2xvbmdBbnN3ZXJ9PC9wPlxuICAgIDwvZGQ+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG5cbmNvbnN0IHBhcnNlUXVlc3Rpb25zID0gKHF1ZXN0aW9ucykgPT4gcXVlc3Rpb25zLm1hcChwYXJzZVNpbmdsZVF1ZXN0aW9uKVxuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT1cInFuYVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucW5hIDpnbG9iYWwoZHQpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46IDMycHggMCAxNnB4IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmJsYWNrfTtcbiAgICAgIH1cbiAgICAgIC5xbmEgOmdsb2JhbChkdCk6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICdRLiAnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5pY2UuZGFya307XG4gICAgICB9XG4gICAgICAucW5hIDpnbG9iYWwoZGQpIDpnbG9iYWwoLnNob3J0LWFuc3dlcikge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ibGFja307XG4gICAgICB9XG4gICAgICAucW5hIDpnbG9iYWwoZGQpIDpnbG9iYWwoLnNob3J0LWFuc3dlcik6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICdBLiAnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5pY2UuZGFya307XG4gICAgICB9XG4gICAgICAucW5hIDpnbG9iYWwoZGQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/queued/workspace/recursed-ice-palace.github.io/components/Qna.js */")));
});

/***/ })

})
//# sourceMappingURL=faq.js.5c80ebe264c2b8a4fb8a.hot-update.js.map