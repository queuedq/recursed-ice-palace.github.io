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

var Form = function Form(onSubmit, status, message) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      steamId = _useState4[0],
      setSteamId = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2482616872", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest]]]) + " " + "form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2482616872", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2482616872", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2482616872", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2482616872", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2482616872", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest]]]),
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
    placeholder: "https://steamcommunity.com/id/your_steam_profile/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2482616872", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2482616872", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest]]]) + " " + "status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, status === "sending" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "blue"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2482616872", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Sending..."), status === "error" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2482616872", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), status === "success" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "green"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2482616872", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Subscribed!")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: onSubmit,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2482616872", [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Subscribe"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2482616872",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest],
    __self: this
  }, ".form.__jsx-style-dynamic-selector{padding:8px 16px;background-color:".concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.light, ";}label.__jsx-style-dynamic-selector{display:block;margin:8px 0 16px 0;font-size:20px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, ";}input.__jsx-style-dynamic-selector{width:100%;padding:2px 4px;font-size:24px;border:2px solid ").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, ";color:").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].black, ";background-color:").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].white, ";}input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, ";}input.__jsx-style-dynamic-selector::-moz-placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, ";}input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, ";}input.__jsx-style-dynamic-selector::placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].gray.light, ";}button.__jsx-style-dynamic-selector{display:block;margin:8px 0 8px auto;font-size:24px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.lightest, ";background-color:").concat(_config__WEBPACK_IMPORTED_MODULE_4__["palette"].ice.darkest, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL1N1YnNjcmlwdGlvbkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUc0QixBQUlILEFBTUgsQUFRd0IsQUFHckIsV0FWRSxHQU5JLEFBaUJFLEdBcEJ6QixVQVVrQixPQU5BLENBYWpCLENBSWlCLE1BVitCLE9BTlgsRUFpQkEsWUF0QnJDLHFCQU1BLEVBaUJnRCxFQVhYLG1DQUNXLFNBV2hELHFDQVZBIiwiZmlsZSI6Ii9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL1N1YnNjcmlwdGlvbkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haWxjaGltcFN1YnNjcmliZSBmcm9tICdyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlJ1xuaW1wb3J0IHsgcGFsZXR0ZSB9IGZyb20gJy4uL2NvbmZpZydcblxuY29uc3QgYWN0aW9uID0gJ2h0dHBzOi8vcXVldWVkbGFiLnVzMjAubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9MWFkNDZlOGQ4NTAzZTM0MTE4YTNiM2IyZCZhbXA7aWQ9YWY2NmI1YmMxZCdcblxuY29uc3QgRm9ybSA9IChvblN1Ym1pdCwgc3RhdHVzLCBtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzdGVhbUlkLCBzZXRTdGVhbUlkXSA9IHVzZVN0YXRlKCcnKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgRW1haWwgQWRkcmVzcyAoUmVxdWlyZWQpXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyX2VtYWlsQGV4YW1wbGUuY29tXCJcbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgU3RlYW0gUHJvZmlsZSBMaW5rIG9yIElEIChPcHRpb25hbClcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtzdGVhbUlkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFN0ZWFtSWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL2lkL3lvdXJfc3RlYW1fcHJvZmlsZS9cIlxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzXCI+XG4gICAgICAgIHtzdGF0dXMgPT09IFwic2VuZGluZ1wiICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19PlNlbmRpbmcuLi48L2Rpdj59XG4gICAgICAgIHtzdGF0dXMgPT09IFwiZXJyb3JcIiAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBtZXNzYWdlfX0vPn1cbiAgICAgICAge3N0YXR1cyA9PT0gXCJzdWNjZXNzXCIgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19PlN1YnNjcmliZWQhPC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fT5cbiAgICAgICAgU3Vic2NyaWJlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5pY2UubGlnaHR9XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogOHB4IDAgMTZweCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5kYXJrZXN0fTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDRweDtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtwYWxldHRlLmdyYXkubGlnaHR9O1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuYmxhY2t9O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS53aGl0ZX07XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXkubGlnaHR9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMCA4cHggYXV0bztcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5pY2UubGlnaHRlc3R9O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5pY2UuZGFya2VzdH07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxNYWlsY2hpbXBTdWJzY3JpYmVcbiAgICB1cmw9e2FjdGlvbn1cbiAgICByZW5kZXI9eyh7IHN1YnNjcmliZSwgc3RhdHVzLCBtZXNzYWdlIH0pID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtmb3JtRGF0YSA9PiBzdWJzY3JpYmUoZm9ybURhdGEpfVxuICAgICAgICBzdGF0dXM9e3N0YXR1c31cbiAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgIC8+XG4gICAgKX1cbiAgLz5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/components/SubscriptionForm.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: action,
    render: function render(_ref) {
      var subscribe = _ref.subscribe,
          status = _ref.status,
          message = _ref.message;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Form, {
        onSubmit: function onSubmit(formData) {
          return subscribe(formData);
        },
        status: status,
        message: message,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=index.js.9d9b9c044ad69bec335b.hot-update.js.map