webpackHotUpdate("static/development/pages/index.js",{

/***/ "./layouts/MainLayout.js":
/*!*******************************!*\
  !*** ./layouts/MainLayout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_Deco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Deco */ "./components/Deco.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _components_ContentBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ContentBox */ "./components/ContentBox.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/reset.css */ "./css/reset.css");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_reset_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_global_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/global.css */ "./css/global.css");
/* harmony import */ var _css_global_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_global_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _js_googleAnalytics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../js/googleAnalytics */ "./js/googleAnalytics.js");
var _jsxFileName = "/Users/queued/workspace/the-ice-palace.github.io/layouts/MainLayout.js";














var getTitle = function getTitle(currentPage) {
  return currentPage === 'Home' ? _config__WEBPACK_IMPORTED_MODULE_3__["title"] : _config__WEBPACK_IMPORTED_MODULE_3__["title"] + ' - ' + currentPage;
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var currentPage = _ref.currentPage,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["629022063", [_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light]], ["3246194287", [_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, _config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["629022063", [_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light]], ["3246194287", [_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, _config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["629022063", [_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light]], ["3246194287", [_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, _config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, getTitle(currentPage)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["629022063", [_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light]], ["3246194287", [_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, _config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: "Recursed: The Ice Palace",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["629022063", [_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light]], ["3246194287", [_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, _config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: "Recursed: The Ice Palace is a free community DLC for the puzzle game Recursed, filled with carefully crafted and extremely challenging puzzles.",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["629022063", [_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light]], ["3246194287", [_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, _config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: "https://recursed-ice-palace.github.io/static/screenshots/01.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["629022063", [_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light]], ["3246194287", [_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, _config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: "https://recursed-ice-palace.github.io/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["629022063", [_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light]], ["3246194287", [_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, _config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["629022063", [_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light]], ["3246194287", [_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, _config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Deco__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["629022063", [_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light]], ["3246194287", [_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, _config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet]]]) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentPage: currentPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ContentBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "629022063",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light],
    __self: this
  }, "@font-face{font-family:Fixedsys;src:url(\"/static/FSEX300.ttf\");}html{height:100%;}body{position:relative;min-height:100%;font-family:Fixedsys;font-size:24px;line-height:32px;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-webkit-text-size-adjust:auto;background-color:#365474;background-image:url(\"/static/background.png\");background-size:".concat(_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], "px ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], "px;background-position:center;background-repeat:repeat;}*{box-sizing:border-box;}:focus{outline:4px solid ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, ";}::selection{background:").concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9sYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0N1QixBQUc4QixBQUlULEFBR00sQUFlSSxBQUd5QixBQUdQLFlBdkIxQyxNQUdrQixHQVBlLENBc0JqQyxZQWR1QixNQW9CdkIsT0FIQSxLQXhCQSxHQVFpQixlQUNFLGlCQUNrQixtQ0FDRCxrQ0FDSiw4QkFDTCx5QkFDc0IsK0NBQytCLDhFQUNuRCwyQkFDRix5QkFDM0IiLCJmaWxlIjoiL1VzZXJzL3F1ZXVlZC93b3Jrc3BhY2UvdGhlLWljZS1wYWxhY2UuZ2l0aHViLmlvL2xheW91dHMvTWFpbkxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHRpdGxlLCBicmVha3BvaW50cywgYmFja2dyb3VuZFNpemUsIHBhbGV0dGUgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgRGVjbyBmcm9tICcuLi9jb21wb25lbnRzL0RlY28nXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL0xvZ28nXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2J1xuaW1wb3J0IENvbnRlbnRCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZW50Qm94J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgJy4uL2Nzcy9yZXNldC5jc3MnXG5pbXBvcnQgJy4uL2Nzcy9ub3JtYWxpemUuY3NzJ1xuaW1wb3J0ICcuLi9jc3MvZ2xvYmFsLmNzcydcbmltcG9ydCAnLi4vanMvZ29vZ2xlQW5hbHl0aWNzJ1xuXG5jb25zdCBnZXRUaXRsZSA9IGN1cnJlbnRQYWdlID0+XG4gIGN1cnJlbnRQYWdlID09PSAnSG9tZSdcbiAgICA/IHRpdGxlXG4gICAgOiB0aXRsZSArICcgLSAnICsgY3VycmVudFBhZ2VcblxuZXhwb3J0IGRlZmF1bHQgKHsgY3VycmVudFBhZ2UsIGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8dGl0bGU+e2dldFRpdGxlKGN1cnJlbnRQYWdlKX08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTFcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJSZWN1cnNlZDogVGhlIEljZSBQYWxhY2VcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJSZWN1cnNlZDogVGhlIEljZSBQYWxhY2UgaXMgYSBmcmVlIGNvbW11bml0eSBETEMgZm9yIHRoZSBwdXp6bGUgZ2FtZSBSZWN1cnNlZCwgZmlsbGVkIHdpdGggY2FyZWZ1bGx5IGNyYWZ0ZWQgYW5kIGV4dHJlbWVseSBjaGFsbGVuZ2luZyBwdXp6bGVzLlwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vcmVjdXJzZWQtaWNlLXBhbGFjZS5naXRodWIuaW8vc3RhdGljL3NjcmVlbnNob3RzLzAxLnBuZ1wiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3JlY3Vyc2VkLWljZS1wYWxhY2UuZ2l0aHViLmlvL1wiIC8+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8RGVjbyAvPlxuICAgIDxMb2dvIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxOYXYgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSAvPlxuICAgICAgPENvbnRlbnRCb3g+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ29udGVudEJveD5cbiAgICA8L2Rpdj5cbiAgICA8Rm9vdGVyIC8+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogRml4ZWRzeXM7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9GU0VYMzAwLnR0ZlwiKTtcbiAgICAgIH1cbiAgICAgIGh0bWwge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAgLy8gRm9yIGRlY28gY29sdW1uIHBvc2l0aW9uaW5nXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBGaXhlZHN5cztcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NTQ3NDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2JhY2tncm91bmRTaXplfXB4ICR7YmFja2dyb3VuZFNpemV9cHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogNHB4IHNvbGlkICR7cGFsZXR0ZS5pY2UuYmFzZX07XG4gICAgICB9XG4gICAgICA6OnNlbGVjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7cGFsZXR0ZS5pY2UubGlnaHR9O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLmRlc2t0b3B9cHgpIHtcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwMHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHticmVha3BvaW50cy50YWJsZXR9cHgpIHtcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE5MnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/layouts/MainLayout.js */")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3246194287",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, _config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet],
    __self: this
  }, ".container.__jsx-style-dynamic-selector{max-width:800px;margin:0 auto;}@media screen and (min-width:".concat(_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, "px){.container.__jsx-style-dynamic-selector{width:calc(100% - 400px);}}@media screen and (min-width:").concat(_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet, "px){.container.__jsx-style-dynamic-selector{width:calc(100% - 192px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9sYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVnQixBQUd5QixBQUtXLEFBS0EsZ0JBVGIsU0FLZCxBQUtBLEtBVEYiLCJmaWxlIjoiL1VzZXJzL3F1ZXVlZC93b3Jrc3BhY2UvdGhlLWljZS1wYWxhY2UuZ2l0aHViLmlvL2xheW91dHMvTWFpbkxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHRpdGxlLCBicmVha3BvaW50cywgYmFja2dyb3VuZFNpemUsIHBhbGV0dGUgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgRGVjbyBmcm9tICcuLi9jb21wb25lbnRzL0RlY28nXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL0xvZ28nXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2J1xuaW1wb3J0IENvbnRlbnRCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZW50Qm94J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgJy4uL2Nzcy9yZXNldC5jc3MnXG5pbXBvcnQgJy4uL2Nzcy9ub3JtYWxpemUuY3NzJ1xuaW1wb3J0ICcuLi9jc3MvZ2xvYmFsLmNzcydcbmltcG9ydCAnLi4vanMvZ29vZ2xlQW5hbHl0aWNzJ1xuXG5jb25zdCBnZXRUaXRsZSA9IGN1cnJlbnRQYWdlID0+XG4gIGN1cnJlbnRQYWdlID09PSAnSG9tZSdcbiAgICA/IHRpdGxlXG4gICAgOiB0aXRsZSArICcgLSAnICsgY3VycmVudFBhZ2VcblxuZXhwb3J0IGRlZmF1bHQgKHsgY3VycmVudFBhZ2UsIGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8dGl0bGU+e2dldFRpdGxlKGN1cnJlbnRQYWdlKX08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTFcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJSZWN1cnNlZDogVGhlIEljZSBQYWxhY2VcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJSZWN1cnNlZDogVGhlIEljZSBQYWxhY2UgaXMgYSBmcmVlIGNvbW11bml0eSBETEMgZm9yIHRoZSBwdXp6bGUgZ2FtZSBSZWN1cnNlZCwgZmlsbGVkIHdpdGggY2FyZWZ1bGx5IGNyYWZ0ZWQgYW5kIGV4dHJlbWVseSBjaGFsbGVuZ2luZyBwdXp6bGVzLlwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vcmVjdXJzZWQtaWNlLXBhbGFjZS5naXRodWIuaW8vc3RhdGljL3NjcmVlbnNob3RzLzAxLnBuZ1wiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3JlY3Vyc2VkLWljZS1wYWxhY2UuZ2l0aHViLmlvL1wiIC8+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8RGVjbyAvPlxuICAgIDxMb2dvIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxOYXYgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSAvPlxuICAgICAgPENvbnRlbnRCb3g+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ29udGVudEJveD5cbiAgICA8L2Rpdj5cbiAgICA8Rm9vdGVyIC8+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogRml4ZWRzeXM7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9GU0VYMzAwLnR0ZlwiKTtcbiAgICAgIH1cbiAgICAgIGh0bWwge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAgLy8gRm9yIGRlY28gY29sdW1uIHBvc2l0aW9uaW5nXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBGaXhlZHN5cztcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NTQ3NDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2JhY2tncm91bmRTaXplfXB4ICR7YmFja2dyb3VuZFNpemV9cHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogNHB4IHNvbGlkICR7cGFsZXR0ZS5pY2UuYmFzZX07XG4gICAgICB9XG4gICAgICA6OnNlbGVjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7cGFsZXR0ZS5pY2UubGlnaHR9O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLmRlc2t0b3B9cHgpIHtcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwMHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHticmVha3BvaW50cy50YWJsZXR9cHgpIHtcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE5MnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/layouts/MainLayout.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.c39fd9fee9fc17cda857.hot-update.js.map