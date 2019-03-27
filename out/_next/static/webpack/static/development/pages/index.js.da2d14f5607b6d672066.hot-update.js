webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "/Users/queued/workspace/the-ice-palace.github.io/components/Footer.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3596676672", [Object(_config__WEBPACK_IMPORTED_MODULE_2__["getTileSize"])(6)]]]) + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3596676672",
    dynamic: [Object(_config__WEBPACK_IMPORTED_MODULE_2__["getTileSize"])(6)],
    __self: this
  }, ".footer.__jsx-style-dynamic-selector{height:".concat(Object(_config__WEBPACK_IMPORTED_MODULE_2__["getTileSize"])(6), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZ0IsQUFHNkMsb0NBQ3RDIiwiZmlsZSI6Ii9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFRpbGVTaXplIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIGhlaWdodDogJHtnZXRUaWxlU2l6ZSg2KX07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/components/Footer.js */")));
});

/***/ }),

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
    charset: "utf-8",
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
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["629022063", [_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light]], ["3246194287", [_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, _config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Deco__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["629022063", [_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light]], ["3246194287", [_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, _config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet]]]) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentPage: currentPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ContentBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "629022063",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, _config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light],
    __self: this
  }, "@font-face{font-family:Fixedsys;src:url(\"/static/FSEX300.ttf\");}html{height:100%;}body{position:relative;min-height:100%;font-family:Fixedsys;font-size:24px;line-height:32px;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-webkit-text-size-adjust:auto;background-color:#365474;background-image:url(\"/static/background.png\");background-size:".concat(_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], "px ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], "px;background-position:center;background-repeat:repeat;}*{box-sizing:border-box;}:focus{outline:4px solid ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.base, ";}::selection{background:").concat(_config__WEBPACK_IMPORTED_MODULE_3__["palette"].ice.light, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9sYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUN1QixBQUc4QixBQUlULEFBR00sQUFlSSxBQUd5QixBQUdQLFlBdkIxQyxNQUdrQixHQVBlLENBc0JqQyxZQWR1QixNQW9CdkIsT0FIQSxLQXhCQSxHQVFpQixlQUNFLGlCQUNrQixtQ0FDRCxrQ0FDSiw4QkFDTCx5QkFDc0IsK0NBQytCLDhFQUNuRCwyQkFDRix5QkFDM0IiLCJmaWxlIjoiL1VzZXJzL3F1ZXVlZC93b3Jrc3BhY2UvdGhlLWljZS1wYWxhY2UuZ2l0aHViLmlvL2xheW91dHMvTWFpbkxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHRpdGxlLCBicmVha3BvaW50cywgYmFja2dyb3VuZFNpemUsIHBhbGV0dGUgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgRGVjbyBmcm9tICcuLi9jb21wb25lbnRzL0RlY28nXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL0xvZ28nXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2J1xuaW1wb3J0IENvbnRlbnRCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZW50Qm94J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgJy4uL2Nzcy9yZXNldC5jc3MnXG5pbXBvcnQgJy4uL2Nzcy9ub3JtYWxpemUuY3NzJ1xuaW1wb3J0ICcuLi9jc3MvZ2xvYmFsLmNzcydcbmltcG9ydCAnLi4vanMvZ29vZ2xlQW5hbHl0aWNzJ1xuXG5jb25zdCBnZXRUaXRsZSA9IGN1cnJlbnRQYWdlID0+XG4gIGN1cnJlbnRQYWdlID09PSAnSG9tZSdcbiAgICA/IHRpdGxlXG4gICAgOiB0aXRsZSArICcgLSAnICsgY3VycmVudFBhZ2VcblxuZXhwb3J0IGRlZmF1bHQgKHsgY3VycmVudFBhZ2UsIGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8dGl0bGU+e2dldFRpdGxlKGN1cnJlbnRQYWdlKX08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTFcIiAvPlxuICAgICAgey8qIFRPRE86IE9wZW5HcmFwaCAqL31cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLmljb1wiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxEZWNvIC8+XG4gICAgPExvZ28gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPE5hdiBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9IC8+XG4gICAgICA8Q29udGVudEJveD5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db250ZW50Qm94PlxuICAgIDwvZGl2PlxuICAgIDxGb290ZXIgLz5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBGaXhlZHN5cztcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL0ZTRVgzMDAudHRmXCIpO1xuICAgICAgfVxuICAgICAgaHRtbCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAvLyBGb3IgZGVjbyBjb2x1bW4gcG9zaXRpb25pbmdcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgZm9udC1mYW1pbHk6IEZpeGVkc3lzO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY1NDc0O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2JhY2tncm91bmQucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICR7YmFja2dyb3VuZFNpemV9cHggJHtiYWNrZ3JvdW5kU2l6ZX1weDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgfVxuICAgICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICA6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiA0cHggc29saWQgJHtwYWxldHRlLmljZS5iYXNlfTtcbiAgICAgIH1cbiAgICAgIDo6c2VsZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtwYWxldHRlLmljZS5saWdodH07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7YnJlYWtwb2ludHMuZGVza3RvcH1weCkge1xuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDAwcHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLnRhYmxldH1weCkge1xuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTkycHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/layouts/MainLayout.js */")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3246194287",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, _config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet],
    __self: this
  }, ".container.__jsx-style-dynamic-selector{max-width:800px;margin:0 auto;}@media screen and (min-width:".concat(_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].desktop, "px){.container.__jsx-style-dynamic-selector{width:calc(100% - 400px);}}@media screen and (min-width:").concat(_config__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].tablet, "px){.container.__jsx-style-dynamic-selector{width:calc(100% - 192px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9sYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VnQixBQUd5QixBQUtXLEFBS0EsZ0JBVGIsU0FLZCxBQUtBLEtBVEYiLCJmaWxlIjoiL1VzZXJzL3F1ZXVlZC93b3Jrc3BhY2UvdGhlLWljZS1wYWxhY2UuZ2l0aHViLmlvL2xheW91dHMvTWFpbkxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHRpdGxlLCBicmVha3BvaW50cywgYmFja2dyb3VuZFNpemUsIHBhbGV0dGUgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgRGVjbyBmcm9tICcuLi9jb21wb25lbnRzL0RlY28nXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL0xvZ28nXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2J1xuaW1wb3J0IENvbnRlbnRCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZW50Qm94J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgJy4uL2Nzcy9yZXNldC5jc3MnXG5pbXBvcnQgJy4uL2Nzcy9ub3JtYWxpemUuY3NzJ1xuaW1wb3J0ICcuLi9jc3MvZ2xvYmFsLmNzcydcbmltcG9ydCAnLi4vanMvZ29vZ2xlQW5hbHl0aWNzJ1xuXG5jb25zdCBnZXRUaXRsZSA9IGN1cnJlbnRQYWdlID0+XG4gIGN1cnJlbnRQYWdlID09PSAnSG9tZSdcbiAgICA/IHRpdGxlXG4gICAgOiB0aXRsZSArICcgLSAnICsgY3VycmVudFBhZ2VcblxuZXhwb3J0IGRlZmF1bHQgKHsgY3VycmVudFBhZ2UsIGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8dGl0bGU+e2dldFRpdGxlKGN1cnJlbnRQYWdlKX08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTFcIiAvPlxuICAgICAgey8qIFRPRE86IE9wZW5HcmFwaCAqL31cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLmljb1wiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxEZWNvIC8+XG4gICAgPExvZ28gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPE5hdiBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9IC8+XG4gICAgICA8Q29udGVudEJveD5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db250ZW50Qm94PlxuICAgIDwvZGl2PlxuICAgIDxGb290ZXIgLz5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBGaXhlZHN5cztcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL0ZTRVgzMDAudHRmXCIpO1xuICAgICAgfVxuICAgICAgaHRtbCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAvLyBGb3IgZGVjbyBjb2x1bW4gcG9zaXRpb25pbmdcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgZm9udC1mYW1pbHk6IEZpeGVkc3lzO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY1NDc0O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2JhY2tncm91bmQucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICR7YmFja2dyb3VuZFNpemV9cHggJHtiYWNrZ3JvdW5kU2l6ZX1weDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgfVxuICAgICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICA6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiA0cHggc29saWQgJHtwYWxldHRlLmljZS5iYXNlfTtcbiAgICAgIH1cbiAgICAgIDo6c2VsZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtwYWxldHRlLmljZS5saWdodH07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7YnJlYWtwb2ludHMuZGVza3RvcH1weCkge1xuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDAwcHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLnRhYmxldH1weCkge1xuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTkycHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/layouts/MainLayout.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.da2d14f5607b6d672066.hot-update.js.map