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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "/Users/queued/workspace/recursed-ice-palace.github.io/components/Qna.js";



var parseSingleQuestion = function parseSingleQuestion(_ref, index) {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 3),
      question = _ref2[0],
      shortAnswer = _ref2[1],
      longAnswer = _ref2[2];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, question), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "short-answer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, shortAnswer), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, longAnswer)));
};

var parseQuestions = function parseQuestions(questions) {
  return questions.map(parseSingleQuestion);
}; // export default ({ contents }) => (
//   <section className="qna">
//     {parseQuestions(contents)}
//     <style jsx>{`
//       .qna :global(dt) {
//         position: relative;
//         margin: 32px 0 16px 0;
//         padding-left: 32px;
//         font-size: 24px;
//         color: ${palette.black};
//       }
//       .qna :global(dt)::before {
//         content: 'Q. ';
//         position: absolute;
//         left: 0px;
//         color: ${palette.ice.dark};
//       }
//       .qna :global(dd) :global(.short-answer) {
//         position: relative;
//         padding-left: 32px;
//         color: ${palette.black};
//       }
//       .qna :global(dd) :global(.short-answer)::before {
//         content: 'A. ';
//         position: absolute;
//         left: 0px;
//         color: ${palette.ice.dark};
//       }
//       .qna :global(dd) :global(p) {
//         padding-left: 32px;
//       }
//     `}</style>
//   </section>
// )


/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var children = _ref3.children;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map;
  return children;
});

/***/ })

})
//# sourceMappingURL=faq.js.205b168f814b9ce37d92.hot-update.js.map