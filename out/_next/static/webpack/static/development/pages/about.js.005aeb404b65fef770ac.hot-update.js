webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/MobileNav.js":
/*!*********************************!*\
  !*** ./components/MobileNav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");


var _jsxFileName = "/Users/queued/workspace/the-ice-palace.github.io/components/MobileNav.js";




 // 1. Single menu item

var menuItem = function menuItem(currentPage) {
  return function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        menuName = _ref2[0],
        _ref2$ = _ref2[1],
        path = _ref2$.path,
        icon = _ref2$.icon,
        secondaryIcon = _ref2$.secondaryIcon;

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: menuName,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1111337130", [icon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.darkest, secondaryIcon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter]]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        active: currentPage === menuName
      }) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1111337130", [icon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.darkest, secondaryIcon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter]]]) + " " + "menu-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1111337130", [icon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.darkest, secondaryIcon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, menuName)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "1111337130",
      dynamic: [icon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.darkest, secondaryIcon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter],
      __self: this
    }, "li.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:8px auto;}.menu-icon.__jsx-style-dynamic-selector{width:40px;height:40px;background-image:url(\"".concat(icon, "\");background-size:40px;background-position:center -8px;background-repeat:no-repeat;}a.__jsx-style-dynamic-selector{padding:0 16px;-webkit-text-decoration:none;text-decoration:none;font-size:24px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].black, ";}a.__jsx-style-dynamic-selector:hover{color:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.darkest, ";}.active.__jsx-style-dynamic-selector .menu-icon.__jsx-style-dynamic-selector{background-image:url(\"").concat(secondaryIcon, "\");}.active.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, ";background-color:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL01vYmlsZU5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFHc0IsQUFNRixBQVFJLEFBTW9CLEFBR2tCLEFBR2xCLFdBbkJ2QixJQVFTLFFBUGdDLFlBYXZELEFBTWdELGtCQUhoRCxZQVJpQixTQWZRLEVBUUYsSUFRYyxDQVdyQyxnQkFsQmtDLGtCQVFsQyxjQVA4Qiw0QkFDOUIsZ0JBVnFCLDZGQUNILGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvcXVldWVkL3dvcmtzcGFjZS90aGUtaWNlLXBhbGFjZS5naXRodWIuaW8vY29tcG9uZW50cy9Nb2JpbGVOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBtZW51cywgZ2V0Q2hlc3RTaXplLCBwYWxldHRlLCBnZXRUaWxlU2l6ZSB9IGZyb20gJy4uL2NvbmZpZydcblxuLy8gMS4gU2luZ2xlIG1lbnUgaXRlbVxuXG5jb25zdCBtZW51SXRlbSA9IGN1cnJlbnRQYWdlID0+IChbbWVudU5hbWUsIHsgcGF0aCwgaWNvbiwgc2Vjb25kYXJ5SWNvbiB9XSkgPT4gKFxuICA8bGkga2V5PXttZW51TmFtZX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgYWN0aXZlOiBjdXJyZW50UGFnZSA9PT0gbWVudU5hbWUgfSl9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pY29uXCIvPlxuICAgIDxMaW5rIGhyZWY9e3BhdGh9PlxuICAgICAgPGE+e21lbnVOYW1lfTwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiA4cHggYXV0bztcbiAgICAgIH1cbiAgICAgIC5tZW51LWljb24ge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke2ljb259XCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAtOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuYmxhY2t9O1xuICAgICAgfVxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuaWNlLmRhcmtlc3R9O1xuICAgICAgfVxuICAgICAgLmFjdGl2ZSAubWVudS1pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtzZWNvbmRhcnlJY29ufVwiKTtcbiAgICAgIH1cbiAgICAgIC5hY3RpdmUgYSB7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuaWNlLmRhcmt9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuaWNlLmxpZ2h0ZXJ9O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbilcblxuLy8gMi4gSGFtYnVyZ2VyIGJ1dHRvblxuXG5jb25zdCBleHBhbmRCdXR0b24gPSAoeyBvbkNsaWNrLCBpc0NvbGxhcHNlZCB9KSA9PiAoXG4gIDxidXR0b24gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgJ2lzLWNvbGxhcHNlZCc6IGlzQ29sbGFwc2VkIH0pfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi10ZXh0XCI+TWVudTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pY29uXCI+PC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDAgNHB4IDAgYXV0bztcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuaWNlLmxpZ2h0ZXN0fTtcbiAgICAgIH1cbiAgICAgIC5idXR0b24tdGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIH1cbiAgICAgIC5tZW51LWljb24ge1xuICAgICAgICB3aWR0aDogJHtnZXRDaGVzdFNpemUoKX07XG4gICAgICAgIGhlaWdodDogJHtnZXRDaGVzdFNpemUoKX07XG4gICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvb3Blbl8wMS5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2dldENoZXN0U2l6ZSgpfSAke2dldENoZXN0U2l6ZSgpfTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIH1cbiAgICAgIC5pcy1jb2xsYXBzZWQgLm1lbnUtaWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9jbG9zZWRfMDEucG5nJyk7XG4gICAgICB9XG4gICAgICBidXR0b246aG92ZXIge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5saWdodH07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2J1dHRvbj5cbilcblxuLy8gMy4gQ29tcG9zZWQgbmF2XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGN1cnJlbnRQYWdlIH0pID0+IHtcbiAgY29uc3QgW2lzQ29sbGFwc2VkLCBzZXRJc0NvbGxhcHNlZF0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRJc0NvbGxhcHNlZCghaXNDb2xsYXBzZWQpXG5cbiAgcmV0dXJuIChcbiAgICA8bmF2PlxuICAgICAge2V4cGFuZEJ1dHRvbih7IG9uQ2xpY2s6IHRvZ2dsZU1lbnUsIGlzQ29sbGFwc2VkIH0pfVxuICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IFwiaXMtY29sbGFwc2VkXCI6IGlzQ29sbGFwc2VkIH0pfT5cbiAgICAgICAge09iamVjdC5lbnRyaWVzKG1lbnVzKS5tYXAobWVudUl0ZW0oY3VycmVudFBhZ2UpKX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmljZS5saWdodH07XG4gICAgICAgIH1cbiAgICAgICAgdWw6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAke2dldFRpbGVTaXplKCl9O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaG9yaXpvbnRhbC5wbmdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2dldFRpbGVTaXplKCl9O1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgfVxuICAgICAgICAuaXMtY29sbGFwc2VkIHtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/components/MobileNav.js */")));
  };
}; // 2. Hamburger button


var expandButton = function expandButton(_ref3) {
  var onClick = _ref3.onClick,
      isCollapsed = _ref3.isCollapsed;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: onClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1745436617", [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light]]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      'is-collapsed': isCollapsed
    }) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1745436617", [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light]]]) + " " + "button-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Menu"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1745436617", [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light]]]) + " " + "menu-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1745436617",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light],
    __self: this
  }, "button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding:0;margin:0 4px 0 auto;height:40px;background:none;font-size:24px;color:".concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, ";}.button-text.__jsx-style-dynamic-selector{padding:8px;}.menu-icon.__jsx-style-dynamic-selector{width:").concat(Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), ";height:").concat(Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), ";margin-top:-40px;background-image:url('/static/open_01.png');background-size:").concat(Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), " ").concat(Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), ";background-position:center bottom;background-repeat:no-repeat;}.is-collapsed.__jsx-style-dynamic-selector .menu-icon.__jsx-style-dynamic-selector{background-image:url('/static/closed_01.png');}button.__jsx-style-dynamic-selector:hover{color:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL01vYmlsZU5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRGdCLEFBR3NCLEFBVUQsQUFHdUIsQUFTVyxBQUdYLFlBZHJDLHVCQUdzQyxBQVl0QyxXQUhBLHlCQVJtQixHQWRJLGNBZXVCLDRDQUM4QiwyQ0FmaEUsVUFDVSxvQkFDUixDQWNzQixXQWJsQixnQkFDRCxPQWFhLFFBWk8sb0JBYXJDLGVBWkEiLCJmaWxlIjoiL1VzZXJzL3F1ZXVlZC93b3Jrc3BhY2UvdGhlLWljZS1wYWxhY2UuZ2l0aHViLmlvL2NvbXBvbmVudHMvTW9iaWxlTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgbWVudXMsIGdldENoZXN0U2l6ZSwgcGFsZXR0ZSwgZ2V0VGlsZVNpemUgfSBmcm9tICcuLi9jb25maWcnXG5cbi8vIDEuIFNpbmdsZSBtZW51IGl0ZW1cblxuY29uc3QgbWVudUl0ZW0gPSBjdXJyZW50UGFnZSA9PiAoW21lbnVOYW1lLCB7IHBhdGgsIGljb24sIHNlY29uZGFyeUljb24gfV0pID0+IChcbiAgPGxpIGtleT17bWVudU5hbWV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGFjdGl2ZTogY3VycmVudFBhZ2UgPT09IG1lbnVOYW1lIH0pfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaWNvblwiLz5cbiAgICA8TGluayBocmVmPXtwYXRofT5cbiAgICAgIDxhPnttZW51TmFtZX08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogOHB4IGF1dG87XG4gICAgICB9XG4gICAgICAubWVudS1pY29uIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtpY29ufVwiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgLThweDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmJsYWNrfTtcbiAgICAgIH1cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5kYXJrZXN0fTtcbiAgICAgIH1cbiAgICAgIC5hY3RpdmUgLm1lbnUtaWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7c2Vjb25kYXJ5SWNvbn1cIik7XG4gICAgICB9XG4gICAgICAuYWN0aXZlIGEge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5kYXJrfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmljZS5saWdodGVyfTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pXG5cbi8vIDIuIEhhbWJ1cmdlciBidXR0b25cblxuY29uc3QgZXhwYW5kQnV0dG9uID0gKHsgb25DbGljaywgaXNDb2xsYXBzZWQgfSkgPT4gKFxuICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdpcy1jb2xsYXBzZWQnOiBpc0NvbGxhcHNlZCB9KX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tdGV4dFwiPk1lbnU8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaWNvblwiPjwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwIDRweCAwIGF1dG87XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5saWdodGVzdH07XG4gICAgICB9XG4gICAgICAuYnV0dG9uLXRleHQge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG4gICAgICAubWVudS1pY29uIHtcbiAgICAgICAgd2lkdGg6ICR7Z2V0Q2hlc3RTaXplKCl9O1xuICAgICAgICBoZWlnaHQ6ICR7Z2V0Q2hlc3RTaXplKCl9O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL29wZW5fMDEucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogJHtnZXRDaGVzdFNpemUoKX0gJHtnZXRDaGVzdFNpemUoKX07XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB9XG4gICAgICAuaXMtY29sbGFwc2VkIC5tZW51LWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvY2xvc2VkXzAxLnBuZycpO1xuICAgICAgfVxuICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5pY2UubGlnaHR9O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9idXR0b24+XG4pXG5cbi8vIDMuIENvbXBvc2VkIG5hdlxuXG5leHBvcnQgZGVmYXVsdCAoeyBjdXJyZW50UGFnZSB9KSA9PiB7XG4gIGNvbnN0IFtpc0NvbGxhcHNlZCwgc2V0SXNDb2xsYXBzZWRdID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0SXNDb2xsYXBzZWQoIWlzQ29sbGFwc2VkKVxuXG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIHtleHBhbmRCdXR0b24oeyBvbkNsaWNrOiB0b2dnbGVNZW51LCBpc0NvbGxhcHNlZCB9KX1cbiAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBcImlzLWNvbGxhcHNlZFwiOiBpc0NvbGxhcHNlZCB9KX0+XG4gICAgICAgIHtPYmplY3QuZW50cmllcyhtZW51cykubWFwKG1lbnVJdGVtKGN1cnJlbnRQYWdlKSl9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXYge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5pY2UubGlnaHR9O1xuICAgICAgICB9XG4gICAgICAgIHVsOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogJHtnZXRUaWxlU2l6ZSgpfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2hvcml6b250YWwucG5nXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogJHtnZXRUaWxlU2l6ZSgpfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIH1cbiAgICAgICAgLmlzLWNvbGxhcHNlZCB7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9uYXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/components/MobileNav.js */")));
}; // 3. Composed nav


/* harmony default export */ __webpack_exports__["default"] = (function (_ref4) {
  var currentPage = _ref4.currentPage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isCollapsed = _useState2[0],
      setIsCollapsed = _useState2[1];

  var toggleMenu = function toggleMenu() {
    return setIsCollapsed(!isCollapsed);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["64003016", [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])()]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, expandButton({
    onClick: toggleMenu,
    isCollapsed: isCollapsed
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["64003016", [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])()]]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      "is-collapsed": isCollapsed
    }) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_6__["menus"]).map(menuItem(currentPage))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "64003016",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])()],
    __self: this
  }, "nav.__jsx-style-dynamic-selector{width:100%;margin:0 auto;}ul.__jsx-style-dynamic-selector{margin:0 auto;overflow:hidden;background-color:".concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, ";}ul.__jsx-style-dynamic-selector::before{content:'';display:block;width:100%;height:").concat(Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])(), ";background-image:url(\"/static/horizontal.png\");background-size:").concat(Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])(), ";background-repeat:repeat-x;}.is-collapsed.__jsx-style-dynamic-selector{height:0;-webkit-transition:height 0.5s;transition:height 0.5s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL01vYmlsZU5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvR2tCLEFBR3NCLEFBSUcsQUFLSCxBQVNGLFNBQ2MsRUFsQlQsQUFTQSxHQUxFLFdBSGxCLEFBU2EsS0FMbUMsTUFNViwyQkFRdEMsU0FQaUQsSUFOakQsMkNBTytDLDZDQUNsQiwyQkFDN0IiLCJmaWxlIjoiL1VzZXJzL3F1ZXVlZC93b3Jrc3BhY2UvdGhlLWljZS1wYWxhY2UuZ2l0aHViLmlvL2NvbXBvbmVudHMvTW9iaWxlTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgbWVudXMsIGdldENoZXN0U2l6ZSwgcGFsZXR0ZSwgZ2V0VGlsZVNpemUgfSBmcm9tICcuLi9jb25maWcnXG5cbi8vIDEuIFNpbmdsZSBtZW51IGl0ZW1cblxuY29uc3QgbWVudUl0ZW0gPSBjdXJyZW50UGFnZSA9PiAoW21lbnVOYW1lLCB7IHBhdGgsIGljb24sIHNlY29uZGFyeUljb24gfV0pID0+IChcbiAgPGxpIGtleT17bWVudU5hbWV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGFjdGl2ZTogY3VycmVudFBhZ2UgPT09IG1lbnVOYW1lIH0pfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaWNvblwiLz5cbiAgICA8TGluayBocmVmPXtwYXRofT5cbiAgICAgIDxhPnttZW51TmFtZX08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogOHB4IGF1dG87XG4gICAgICB9XG4gICAgICAubWVudS1pY29uIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtpY29ufVwiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgLThweDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmJsYWNrfTtcbiAgICAgIH1cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5kYXJrZXN0fTtcbiAgICAgIH1cbiAgICAgIC5hY3RpdmUgLm1lbnUtaWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7c2Vjb25kYXJ5SWNvbn1cIik7XG4gICAgICB9XG4gICAgICAuYWN0aXZlIGEge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5kYXJrfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmljZS5saWdodGVyfTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pXG5cbi8vIDIuIEhhbWJ1cmdlciBidXR0b25cblxuY29uc3QgZXhwYW5kQnV0dG9uID0gKHsgb25DbGljaywgaXNDb2xsYXBzZWQgfSkgPT4gKFxuICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdpcy1jb2xsYXBzZWQnOiBpc0NvbGxhcHNlZCB9KX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tdGV4dFwiPk1lbnU8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaWNvblwiPjwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwIDRweCAwIGF1dG87XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5saWdodGVzdH07XG4gICAgICB9XG4gICAgICAuYnV0dG9uLXRleHQge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG4gICAgICAubWVudS1pY29uIHtcbiAgICAgICAgd2lkdGg6ICR7Z2V0Q2hlc3RTaXplKCl9O1xuICAgICAgICBoZWlnaHQ6ICR7Z2V0Q2hlc3RTaXplKCl9O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL29wZW5fMDEucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogJHtnZXRDaGVzdFNpemUoKX0gJHtnZXRDaGVzdFNpemUoKX07XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB9XG4gICAgICAuaXMtY29sbGFwc2VkIC5tZW51LWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvY2xvc2VkXzAxLnBuZycpO1xuICAgICAgfVxuICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5pY2UubGlnaHR9O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9idXR0b24+XG4pXG5cbi8vIDMuIENvbXBvc2VkIG5hdlxuXG5leHBvcnQgZGVmYXVsdCAoeyBjdXJyZW50UGFnZSB9KSA9PiB7XG4gIGNvbnN0IFtpc0NvbGxhcHNlZCwgc2V0SXNDb2xsYXBzZWRdID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0SXNDb2xsYXBzZWQoIWlzQ29sbGFwc2VkKVxuXG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIHtleHBhbmRCdXR0b24oeyBvbkNsaWNrOiB0b2dnbGVNZW51LCBpc0NvbGxhcHNlZCB9KX1cbiAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBcImlzLWNvbGxhcHNlZFwiOiBpc0NvbGxhcHNlZCB9KX0+XG4gICAgICAgIHtPYmplY3QuZW50cmllcyhtZW51cykubWFwKG1lbnVJdGVtKGN1cnJlbnRQYWdlKSl9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXYge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5pY2UubGlnaHR9O1xuICAgICAgICB9XG4gICAgICAgIHVsOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogJHtnZXRUaWxlU2l6ZSgpfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2hvcml6b250YWwucG5nXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogJHtnZXRUaWxlU2l6ZSgpfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIH1cbiAgICAgICAgLmlzLWNvbGxhcHNlZCB7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9uYXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/components/MobileNav.js */")));
});

/***/ })

})
//# sourceMappingURL=about.js.005aeb404b65fef770ac.hot-update.js.map