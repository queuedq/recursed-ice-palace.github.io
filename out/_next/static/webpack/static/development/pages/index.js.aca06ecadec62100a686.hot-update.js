webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SubscriptionForm.js":
/*!****************************************!*\
  !*** ./components/SubscriptionForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-mailchimp-subscribe */ "./node_modules/react-mailchimp-subscribe/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "/Users/queued/workspace/the-ice-palace.github.io/components/SubscriptionForm.js";





var action = 'https://queuedlab.us20.list-manage.com/subscribe/post?u=1ad46e8d8503e34118a3b3b2d&amp;id=af66b5bc1d';

var Form = function Form(onSubmitted, status, message) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      steamId = _useState4[0],
      setSteamId = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1909986823", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1909986823", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Email Address (Required)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    type: "email",
    placeholder: "your_email@example.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1909986823", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1909986823", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1909986823", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Steam Profile Link or ID (Optional)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: steamId,
    onChange: function onChange(e) {
      return setSteamId(e.target.value);
    },
    type: "text",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1909986823", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1909986823", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest]]]) + " " + "status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, status === "sending" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "blue"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1909986823", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Sending..."), status === "error" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1909986823", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), status === "success" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "green"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1909986823", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Subscribed!")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1909986823",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest],
    __self: this
  }, "label.__jsx-style-dynamic-selector{font-size:20px;}label.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{font-size:24px;background-color:".concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL1N1YnNjcmlwdGlvbkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQixBQUcwQixBQUdBLGVBRmpCLEFBR2dELDhDQUNoRCIsImZpbGUiOiIvVXNlcnMvcXVldWVkL3dvcmtzcGFjZS90aGUtaWNlLXBhbGFjZS5naXRodWIuaW8vY29tcG9uZW50cy9TdWJzY3JpcHRpb25Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNYWlsY2hpbXBTdWJzY3JpYmUgZnJvbSAncmVhY3QtbWFpbGNoaW1wLXN1YnNjcmliZSdcbmltcG9ydCB7IHBhbGV0dGUgfSBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IGFjdGlvbiA9ICdodHRwczovL3F1ZXVlZGxhYi51czIwLmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PTFhZDQ2ZThkODUwM2UzNDExOGEzYjNiMmQmYW1wO2lkPWFmNjZiNWJjMWQnXG5cbmNvbnN0IEZvcm0gPSAob25TdWJtaXR0ZWQsIHN0YXR1cywgbWVzc2FnZSkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbc3RlYW1JZCwgc2V0U3RlYW1JZF0gPSB1c2VTdGF0ZSgnJylcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgRW1haWwgQWRkcmVzcyAoUmVxdWlyZWQpXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyX2VtYWlsQGV4YW1wbGUuY29tXCJcbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgU3RlYW0gUHJvZmlsZSBMaW5rIG9yIElEIChPcHRpb25hbClcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtzdGVhbUlkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFN0ZWFtSWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1c1wiPlxuICAgICAgICB7c3RhdHVzID09PSBcInNlbmRpbmdcIiAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fT5TZW5kaW5nLi4uPC9kaXY+fVxuICAgICAgICB7c3RhdHVzID09PSBcImVycm9yXCIgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogbWVzc2FnZX19Lz59XG4gICAgICAgIHtzdGF0dXMgPT09IFwic3VjY2Vzc1wiICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fT5TdWJzY3JpYmVkITwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIGlucHV0IHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmljZS5saWdodGVzdH07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxNYWlsY2hpbXBTdWJzY3JpYmVcbiAgICB1cmw9e2FjdGlvbn1cbiAgICByZW5kZXI9eyh7IHN1YnNjcmliZSwgc3RhdHVzLCBtZXNzYWdlIH0pID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0dGVkPXtmb3JtRGF0YSA9PiBzdWJzY3JpYmUoZm9ybURhdGEpfVxuICAgICAgICBzdGF0dXM9e3N0YXR1c31cbiAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgIC8+XG4gICAgKX1cbiAgLz5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/components/SubscriptionForm.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: action,
    render: function render(_ref) {
      var subscribe = _ref.subscribe,
          status = _ref.status,
          message = _ref.message;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Form, {
        onSubmitted: function onSubmitted(formData) {
          return subscribe(formData);
        },
        status: status,
        message: message,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=index.js.aca06ecadec62100a686.hot-update.js.map