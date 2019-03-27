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
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");

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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1974068425", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]) + " " + "form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1974068425", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1974068425", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Email Address (Required)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    type: "email",
    placeholder: "your_email@example.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1974068425", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1974068425", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1974068425", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Steam Profile Link or ID (Optional)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: steamId,
    onChange: function onChange(e) {
      return setSteamId(e.target.value);
    },
    type: "text",
    placeholder: "https://steamcommunity.com/id/your_steam_profile/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1974068425", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1974068425", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]) + " " + "status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, status === "sending" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "blue"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1974068425", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Sending..."), status === "error" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1974068425", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), status === "success" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      color: "green"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1974068425", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Subscribed!")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: onSubmit,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1974068425", [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Subscribe!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1974068425",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, _config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2)],
    __self: this
  }, ".form.__jsx-style-dynamic-selector{padding:16px 16px;background-color:".concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.light, ";}label.__jsx-style-dynamic-selector{display:block;margin:0 0 16px 0;font-size:20px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, ";}input.__jsx-style-dynamic-selector{width:100%;padding:2px 4px;font-size:24px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].black, ";background-color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].white, ";border:2px solid ").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, ";border-radius:0;-webkit-appearance:none;}input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, ";}input.__jsx-style-dynamic-selector::-moz-placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, ";}input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, ";}input.__jsx-style-dynamic-selector::placeholder{color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].gray.light, ";}button.__jsx-style-dynamic-selector{display:block;margin:24px auto 8px auto;padding:16px 32px;font-size:24px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.lighter, ";background-color:").concat(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest, ";}button.__jsx-style-dynamic-selector:hover{background-color:").concat(chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).brighten(0.2), ";}button.__jsx-style-dynamic-selector:active{background-color:").concat(chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_5__["palette"].ice.darkest).darken(0.2), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL1N1YnNjcmlwdGlvbkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNrQixBQUc2QixBQUlKLEFBTUgsQUFVd0IsQUFHckIsQUFRZ0MsQUFHQSxXQXZCOUIsR0FORSxBQW1CUSxJQXRCN0IsU0FVa0IsS0FOQSxHQWVqQixLQUlvQixFQVppQixJQW1CckMsQUFHQSxDQTVCcUMsV0FtQnBCLE1BeEJqQixTQXlCcUMsSUFiVyxLQU5oRCwwQkFvQmdELGVBYkEsK0JBY2hELGVBYmtCLGdCQUNRLHdCQUMxQiIsImZpbGUiOiIvVXNlcnMvcXVldWVkL3dvcmtzcGFjZS90aGUtaWNlLXBhbGFjZS5naXRodWIuaW8vY29tcG9uZW50cy9TdWJzY3JpcHRpb25Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNYWlsY2hpbXBTdWJzY3JpYmUgZnJvbSAncmVhY3QtbWFpbGNoaW1wLXN1YnNjcmliZSdcbmltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJ1xuaW1wb3J0IHsgcGFsZXR0ZSB9IGZyb20gJy4uL2NvbmZpZydcblxuY29uc3QgYWN0aW9uID0gJ2h0dHBzOi8vcXVldWVkbGFiLnVzMjAubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9MWFkNDZlOGQ4NTAzZTM0MTE4YTNiM2IyZCZhbXA7aWQ9YWY2NmI1YmMxZCdcblxuY29uc3QgRm9ybSA9IChvblN1Ym1pdCwgc3RhdHVzLCBtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzdGVhbUlkLCBzZXRTdGVhbUlkXSA9IHVzZVN0YXRlKCcnKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgRW1haWwgQWRkcmVzcyAoUmVxdWlyZWQpXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyX2VtYWlsQGV4YW1wbGUuY29tXCJcbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgU3RlYW0gUHJvZmlsZSBMaW5rIG9yIElEIChPcHRpb25hbClcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtzdGVhbUlkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFN0ZWFtSWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL2lkL3lvdXJfc3RlYW1fcHJvZmlsZS9cIlxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzXCI+XG4gICAgICAgIHtzdGF0dXMgPT09IFwic2VuZGluZ1wiICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19PlNlbmRpbmcuLi48L2Rpdj59XG4gICAgICAgIHtzdGF0dXMgPT09IFwiZXJyb3JcIiAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBtZXNzYWdlfX0vPn1cbiAgICAgICAge3N0YXR1cyA9PT0gXCJzdWNjZXNzXCIgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19PlN1YnNjcmliZWQhPC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fT5cbiAgICAgICAgU3Vic2NyaWJlIVxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5mb3JtIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmljZS5saWdodH1cbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5kYXJrZXN0fTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDRweDtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ibGFja307XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLndoaXRlfTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke3BhbGV0dGUuZ3JheS5saWdodH07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXkubGlnaHR9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAyNHB4IGF1dG8gOHB4IGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMTZweCAzMnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5saWdodGVyfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuaWNlLmRhcmtlc3R9O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjaHJvbWEocGFsZXR0ZS5pY2UuZGFya2VzdCkuYnJpZ2h0ZW4oMC4yKX07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjaHJvbWEocGFsZXR0ZS5pY2UuZGFya2VzdCkuZGFya2VuKDAuMil9O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TWFpbGNoaW1wU3Vic2NyaWJlXG4gICAgdXJsPXthY3Rpb259XG4gICAgcmVuZGVyPXsoeyBzdWJzY3JpYmUsIHN0YXR1cywgbWVzc2FnZSB9KSA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBvblN1Ym1pdD17Zm9ybURhdGEgPT4gc3Vic2NyaWJlKGZvcm1EYXRhKX1cbiAgICAgICAgc3RhdHVzPXtzdGF0dXN9XG4gICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICAvPlxuICAgICl9XG4gIC8+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/components/SubscriptionForm.js */")));
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
          lineNumber: 91
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=index.js.ac0029a5a0f7a7f7c351.hot-update.js.map