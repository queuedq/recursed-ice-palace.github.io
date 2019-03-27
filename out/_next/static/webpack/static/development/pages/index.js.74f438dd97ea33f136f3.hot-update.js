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
    className: "jsx-2108101291",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Email Address (Required)", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: email,
    onChaneg: setEmail,
    type: "email",
    className: "jsx-2108101291",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "jsx-2108101291",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Steam ID (Optional)", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: steamId,
    onChange: setSteamId,
    type: "text",
    className: "jsx-2108101291",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2108101291" + " " + "status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, status === "sending" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "blue"
    },
    className: "jsx-2108101291",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Sending..."), status === "error" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    className: "jsx-2108101291",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), status === "success" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "green"
    },
    className: "jsx-2108101291",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Subscribed!")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2108101291",
    __self: this
  }, "label.jsx-2108101291{font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL1N1YnNjcmlwdGlvbkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NrQixBQUcwQixlQUNqQiIsImZpbGUiOiIvVXNlcnMvcXVldWVkL3dvcmtzcGFjZS90aGUtaWNlLXBhbGFjZS5naXRodWIuaW8vY29tcG9uZW50cy9TdWJzY3JpcHRpb25Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNYWlsY2hpbXBTdWJzY3JpYmUgZnJvbSAncmVhY3QtbWFpbGNoaW1wLXN1YnNjcmliZSdcblxuY29uc3QgYWN0aW9uID0gJ2h0dHBzOi8vcXVldWVkbGFiLnVzMjAubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9MWFkNDZlOGQ4NTAzZTM0MTE4YTNiM2IyZCZhbXA7aWQ9YWY2NmI1YmMxZCdcblxuY29uc3QgRm9ybSA9IChvblN1Ym1pdHRlZCwgc3RhdHVzLCBtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzdGVhbUlkLCBzZXRTdGVhbUlkXSA9IHVzZVN0YXRlKCcnKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgRW1haWwgQWRkcmVzcyAoUmVxdWlyZWQpXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICBvbkNoYW5lZz17c2V0RW1haWx9XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIFN0ZWFtIElEIChPcHRpb25hbClcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e3N0ZWFtSWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3NldFN0ZWFtSWR9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzXCI+XG4gICAgICAgIHtzdGF0dXMgPT09IFwic2VuZGluZ1wiICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19PlNlbmRpbmcuLi48L2Rpdj59XG4gICAgICAgIHtzdGF0dXMgPT09IFwiZXJyb3JcIiAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBtZXNzYWdlfX0vPn1cbiAgICAgICAge3N0YXR1cyA9PT0gXCJzdWNjZXNzXCIgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19PlN1YnNjcmliZWQhPC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxNYWlsY2hpbXBTdWJzY3JpYmVcbiAgICB1cmw9e2FjdGlvbn1cbiAgICByZW5kZXI9eyh7IHN1YnNjcmliZSwgc3RhdHVzLCBtZXNzYWdlIH0pID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0dGVkPXtmb3JtRGF0YSA9PiBzdWJzY3JpYmUoZm9ybURhdGEpfVxuICAgICAgICBzdGF0dXM9e3N0YXR1c31cbiAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgIC8+XG4gICAgKX1cbiAgLz5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/components/SubscriptionForm.js */"));
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
          lineNumber: 46
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=index.js.74f438dd97ea33f136f3.hot-update.js.map