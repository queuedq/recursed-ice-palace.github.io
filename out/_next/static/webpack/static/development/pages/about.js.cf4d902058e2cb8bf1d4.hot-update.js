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


var _jsxFileName = "/Users/queued/workspace/recursed-ice-palace.github.io/components/MobileNav.js";




 // 1. Single menu item

var menuItem = function menuItem(currentPage) {
  return function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        menuName = _ref2[0],
        _ref2$ = _ref2[1],
        path = _ref2$.path,
        icon = _ref2$.icon,
        secondaryIcon = _ref2$.secondaryIcon;

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: menuName,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["397014700", [icon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, secondaryIcon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter]]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        active: currentPage === menuName
      }) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["397014700", [icon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, secondaryIcon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter]]]) + " " + "menu-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["397014700", [icon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, secondaryIcon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, menuName), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "397014700",
      dynamic: [icon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].black, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, secondaryIcon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter],
      __self: this
    }, "li.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:8px auto;}.menu-icon.__jsx-style-dynamic-selector{width:40px;height:40px;margin-right:8px;background-image:url(\"".concat(icon, "\");background-size:40px;background-position:center -8px;background-repeat:no-repeat;}a.__jsx-style-dynamic-selector{padding:0 16px;-webkit-text-decoration:none;text-decoration:none;font-size:24px;min-width:140px;color:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].black, ";text-align:center;}li.__jsx-style-dynamic-selector:hover a.__jsx-style-dynamic-selector{color:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, ";}.active.__jsx-style-dynamic-selector .menu-icon.__jsx-style-dynamic-selector{background-image:url(\"").concat(secondaryIcon, "\");}.active.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, ";background-color:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3JlY3Vyc2VkLWljZS1wYWxhY2UuZ2l0aHViLmlvL2NvbXBvbmVudHMvTW9iaWxlTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlrQixBQUd3QixBQU1GLEFBU0ksQUFRb0IsQUFHa0IsQUFHbEIsV0F0QnZCLElBU1MsUUFSSixZQWdCbkIsQUFNZ0QsS0FyQk8sYUFrQnZELFlBVmlCLFNBaEJRLE1BaUJQLENBYWxCLFlBckJ1QixHQVNjLGtCQVJILGlCQVNkLGVBUlUsR0FTOUIsd0JBbkJxQixDQVdyQiw0RkFWa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3JlY3Vyc2VkLWljZS1wYWxhY2UuZ2l0aHViLmlvL2NvbXBvbmVudHMvTW9iaWxlTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgbWVudXMsIGdldENoZXN0U2l6ZSwgcGFsZXR0ZSwgZ2V0VGlsZVNpemUgfSBmcm9tICcuLi9jb25maWcnXG5cbi8vIDEuIFNpbmdsZSBtZW51IGl0ZW1cblxuY29uc3QgbWVudUl0ZW0gPSBjdXJyZW50UGFnZSA9PiAoW21lbnVOYW1lLCB7IHBhdGgsIGljb24sIHNlY29uZGFyeUljb24gfV0pID0+IChcbiAgPExpbmsgaHJlZj17cGF0aH0+XG4gICAgPGxpIGtleT17bWVudU5hbWV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGFjdGl2ZTogY3VycmVudFBhZ2UgPT09IG1lbnVOYW1lIH0pfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pY29uXCIvPlxuICAgICAgPGE+e21lbnVOYW1lfTwvYT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDhweCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5tZW51LWljb24ge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke2ljb259XCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgLThweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogMTQwcHg7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ibGFja307XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGxpOmhvdmVyIGEge1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuaWNlLmRhcmt9O1xuICAgICAgICB9XG4gICAgICAgIC5hY3RpdmUgLm1lbnUtaWNvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtzZWNvbmRhcnlJY29ufVwiKTtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZlIGEge1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuaWNlLmRhcmt9O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5pY2UubGlnaHRlcn07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2xpPlxuICA8L0xpbms+XG4pXG5cbi8vIDIuIEhhbWJ1cmdlciBidXR0b25cblxuY29uc3QgZXhwYW5kQnV0dG9uID0gKHsgb25DbGljaywgaXNDb2xsYXBzZWQgfSkgPT4gKFxuICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdpcy1jb2xsYXBzZWQnOiBpc0NvbGxhcHNlZCB9KX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tdGV4dFwiPk1lbnU8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaWNvblwiPjwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwIDRweCAwIGF1dG87XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5saWdodGVzdH07XG4gICAgICB9XG4gICAgICAuYnV0dG9uLXRleHQge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG4gICAgICAubWVudS1pY29uIHtcbiAgICAgICAgd2lkdGg6ICR7Z2V0Q2hlc3RTaXplKCl9O1xuICAgICAgICBoZWlnaHQ6ICR7Z2V0Q2hlc3RTaXplKCl9O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2Nsb3NlZF8wMS5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2dldENoZXN0U2l6ZSgpfSAke2dldENoZXN0U2l6ZSgpfTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIH1cbiAgICAgIC5pcy1jb2xsYXBzZWQgLm1lbnUtaWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9vcGVuXzAxLnBuZycpO1xuICAgICAgfVxuICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5pY2UubGlnaHR9O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9idXR0b24+XG4pXG5cbi8vIDMuIENvbXBvc2VkIG5hdlxuXG5leHBvcnQgZGVmYXVsdCAoeyBjdXJyZW50UGFnZSB9KSA9PiB7XG4gIGNvbnN0IFtpc0NvbGxhcHNlZCwgc2V0SXNDb2xsYXBzZWRdID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0SXNDb2xsYXBzZWQoIWlzQ29sbGFwc2VkKVxuXG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIHtleHBhbmRCdXR0b24oeyBvbkNsaWNrOiB0b2dnbGVNZW51LCBpc0NvbGxhcHNlZCB9KX1cbiAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBcImlzLWNvbGxhcHNlZFwiOiBpc0NvbGxhcHNlZCB9KX0+XG4gICAgICAgIHtPYmplY3QuZW50cmllcyhtZW51cykubWFwKG1lbnVJdGVtKGN1cnJlbnRQYWdlKSl9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXYge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5pY2UubGlnaHR9O1xuICAgICAgICB9XG4gICAgICAgIHVsOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogJHtnZXRUaWxlU2l6ZSgpfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2hvcml6b250YWwucG5nXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogJHtnZXRUaWxlU2l6ZSgpfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIH1cbiAgICAgICAgLmlzLWNvbGxhcHNlZCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbmF2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/queued/workspace/recursed-ice-palace.github.io/components/MobileNav.js */"))));
  };
}; // 2. Hamburger button


var expandButton = function expandButton(_ref3) {
  var onClick = _ref3.onClick,
      isCollapsed = _ref3.isCollapsed;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: onClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["50922126", [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light]]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      'is-collapsed': isCollapsed
    }) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["50922126", [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light]]]) + " " + "button-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Menu"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["50922126", [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light]]]) + " " + "menu-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "50922126",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light],
    __self: this
  }, "button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding:0;margin:0 4px 0 auto;height:40px;background:none;font-size:24px;color:".concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, ";}.button-text.__jsx-style-dynamic-selector{padding:8px;}.menu-icon.__jsx-style-dynamic-selector{width:").concat(Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), ";height:").concat(Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), ";margin-top:-40px;background-image:url('/static/closed_01.png');background-size:").concat(Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), " ").concat(Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), ";background-position:center bottom;background-repeat:no-repeat;}.is-collapsed.__jsx-style-dynamic-selector .menu-icon.__jsx-style-dynamic-selector{background-image:url('/static/open_01.png');}button.__jsx-style-dynamic-selector:hover{color:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3JlY3Vyc2VkLWljZS1wYWxhY2UuZ2l0aHViLmlvL2NvbXBvbmVudHMvTW9iaWxlTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEZ0IsQUFHc0IsQUFVRCxBQUd1QixBQVNTLEFBR1QsWUFkckMsdUJBR3NDLEFBWXRDLFNBSEEsMkJBUm1CLEdBZEksY0FleUIsOENBQzRCLHlDQWZoRSxVQUNVLG9CQUNSLEdBY3NCLFNBYmxCLGdCQUNELFNBYWEsTUFaTyxzQkFhckMsYUFaQSIsImZpbGUiOiIvVXNlcnMvcXVldWVkL3dvcmtzcGFjZS9yZWN1cnNlZC1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL01vYmlsZU5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IG1lbnVzLCBnZXRDaGVzdFNpemUsIHBhbGV0dGUsIGdldFRpbGVTaXplIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG4vLyAxLiBTaW5nbGUgbWVudSBpdGVtXG5cbmNvbnN0IG1lbnVJdGVtID0gY3VycmVudFBhZ2UgPT4gKFttZW51TmFtZSwgeyBwYXRoLCBpY29uLCBzZWNvbmRhcnlJY29uIH1dKSA9PiAoXG4gIDxMaW5rIGhyZWY9e3BhdGh9PlxuICAgIDxsaSBrZXk9e21lbnVOYW1lfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGN1cnJlbnRQYWdlID09PSBtZW51TmFtZSB9KX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaWNvblwiLz5cbiAgICAgIDxhPnttZW51TmFtZX08L2E+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiA4cHggYXV0bztcbiAgICAgICAgfVxuICAgICAgICAubWVudS1pY29uIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtpY29ufVwiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIC04cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDE0MHB4O1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuYmxhY2t9O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBsaTpob3ZlciBhIHtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5kYXJrfTtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZlIC5tZW51LWljb24ge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7c2Vjb25kYXJ5SWNvbn1cIik7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZSBhIHtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5kYXJrfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuaWNlLmxpZ2h0ZXJ9O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9saT5cbiAgPC9MaW5rPlxuKVxuXG4vLyAyLiBIYW1idXJnZXIgYnV0dG9uXG5cbmNvbnN0IGV4cGFuZEJ1dHRvbiA9ICh7IG9uQ2xpY2ssIGlzQ29sbGFwc2VkIH0pID0+IChcbiAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAnaXMtY29sbGFwc2VkJzogaXNDb2xsYXBzZWQgfSl9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXRleHRcIj5NZW51PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWljb25cIj48L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBidXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMCA0cHggMCBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5pY2UubGlnaHRlc3R9O1xuICAgICAgfVxuICAgICAgLmJ1dHRvbi10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgfVxuICAgICAgLm1lbnUtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAke2dldENoZXN0U2l6ZSgpfTtcbiAgICAgICAgaGVpZ2h0OiAke2dldENoZXN0U2l6ZSgpfTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9jbG9zZWRfMDEucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogJHtnZXRDaGVzdFNpemUoKX0gJHtnZXRDaGVzdFNpemUoKX07XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB9XG4gICAgICAuaXMtY29sbGFwc2VkIC5tZW51LWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvb3Blbl8wMS5wbmcnKTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuaWNlLmxpZ2h0fTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYnV0dG9uPlxuKVxuXG4vLyAzLiBDb21wb3NlZCBuYXZcblxuZXhwb3J0IGRlZmF1bHQgKHsgY3VycmVudFBhZ2UgfSkgPT4ge1xuICBjb25zdCBbaXNDb2xsYXBzZWQsIHNldElzQ29sbGFwc2VkXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHNldElzQ29sbGFwc2VkKCFpc0NvbGxhcHNlZClcblxuICByZXR1cm4gKFxuICAgIDxuYXY+XG4gICAgICB7ZXhwYW5kQnV0dG9uKHsgb25DbGljazogdG9nZ2xlTWVudSwgaXNDb2xsYXBzZWQgfSl9XG4gICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgXCJpcy1jb2xsYXBzZWRcIjogaXNDb2xsYXBzZWQgfSl9PlxuICAgICAgICB7T2JqZWN0LmVudHJpZXMobWVudXMpLm1hcChtZW51SXRlbShjdXJyZW50UGFnZSkpfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbmF2IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuaWNlLmxpZ2h0fTtcbiAgICAgICAgfVxuICAgICAgICB1bDo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6ICR7Z2V0VGlsZVNpemUoKX07XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9ob3Jpem9udGFsLnBuZ1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICR7Z2V0VGlsZVNpemUoKX07XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICB9XG4gICAgICAgIC5pcy1jb2xsYXBzZWQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/queued/workspace/recursed-ice-palace.github.io/components/MobileNav.js */")));
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3978549078", [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])()]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, expandButton({
    onClick: toggleMenu,
    isCollapsed: isCollapsed
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3978549078", [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])()]]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      "is-collapsed": isCollapsed
    }) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_6__["menus"]).map(menuItem(currentPage))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3978549078",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])()],
    __self: this
  }, "nav.__jsx-style-dynamic-selector{width:100%;margin:0 auto;}ul.__jsx-style-dynamic-selector{margin:0 auto;overflow:hidden;background-color:".concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, ";}ul.__jsx-style-dynamic-selector::before{content:'';display:block;width:100%;height:").concat(Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])(), ";background-image:url(\"/static/horizontal.png\");background-size:").concat(Object(_config__WEBPACK_IMPORTED_MODULE_6__["getTileSize"])(), ";background-repeat:repeat-x;}.is-collapsed.__jsx-style-dynamic-selector{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3JlY3Vyc2VkLWljZS1wYWxhY2UuZ2l0aHViLmlvL2NvbXBvbmVudHMvTW9iaWxlTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHa0IsQUFHc0IsQUFJRyxBQUtILEFBU0UsV0FqQkMsQUFTQSxFQVNoQixDQWRrQixXQUhsQixBQVNhLEtBTG1DLE1BTVYsb0NBQ1csSUFOakQsMkNBTytDLDZDQUNsQiwyQkFDN0IiLCJmaWxlIjoiL1VzZXJzL3F1ZXVlZC93b3Jrc3BhY2UvcmVjdXJzZWQtaWNlLXBhbGFjZS5naXRodWIuaW8vY29tcG9uZW50cy9Nb2JpbGVOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBtZW51cywgZ2V0Q2hlc3RTaXplLCBwYWxldHRlLCBnZXRUaWxlU2l6ZSB9IGZyb20gJy4uL2NvbmZpZydcblxuLy8gMS4gU2luZ2xlIG1lbnUgaXRlbVxuXG5jb25zdCBtZW51SXRlbSA9IGN1cnJlbnRQYWdlID0+IChbbWVudU5hbWUsIHsgcGF0aCwgaWNvbiwgc2Vjb25kYXJ5SWNvbiB9XSkgPT4gKFxuICA8TGluayBocmVmPXtwYXRofT5cbiAgICA8bGkga2V5PXttZW51TmFtZX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgYWN0aXZlOiBjdXJyZW50UGFnZSA9PT0gbWVudU5hbWUgfSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWljb25cIi8+XG4gICAgICA8YT57bWVudU5hbWV9PC9hPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBsaSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogOHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnUtaWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7aWNvbn1cIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAtOHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmJsYWNrfTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgbGk6aG92ZXIgYSB7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5pY2UuZGFya307XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZSAubWVudS1pY29uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke3NlY29uZGFyeUljb259XCIpO1xuICAgICAgICB9XG4gICAgICAgIC5hY3RpdmUgYSB7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5pY2UuZGFya307XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmljZS5saWdodGVyfTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4gIDwvTGluaz5cbilcblxuLy8gMi4gSGFtYnVyZ2VyIGJ1dHRvblxuXG5jb25zdCBleHBhbmRCdXR0b24gPSAoeyBvbkNsaWNrLCBpc0NvbGxhcHNlZCB9KSA9PiAoXG4gIDxidXR0b24gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgJ2lzLWNvbGxhcHNlZCc6IGlzQ29sbGFwc2VkIH0pfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi10ZXh0XCI+TWVudTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pY29uXCI+PC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDAgNHB4IDAgYXV0bztcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuaWNlLmxpZ2h0ZXN0fTtcbiAgICAgIH1cbiAgICAgIC5idXR0b24tdGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIH1cbiAgICAgIC5tZW51LWljb24ge1xuICAgICAgICB3aWR0aDogJHtnZXRDaGVzdFNpemUoKX07XG4gICAgICAgIGhlaWdodDogJHtnZXRDaGVzdFNpemUoKX07XG4gICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvY2xvc2VkXzAxLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICR7Z2V0Q2hlc3RTaXplKCl9ICR7Z2V0Q2hlc3RTaXplKCl9O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgfVxuICAgICAgLmlzLWNvbGxhcHNlZCAubWVudS1pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL29wZW5fMDEucG5nJyk7XG4gICAgICB9XG4gICAgICBidXR0b246aG92ZXIge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5saWdodH07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2J1dHRvbj5cbilcblxuLy8gMy4gQ29tcG9zZWQgbmF2XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGN1cnJlbnRQYWdlIH0pID0+IHtcbiAgY29uc3QgW2lzQ29sbGFwc2VkLCBzZXRJc0NvbGxhcHNlZF0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRJc0NvbGxhcHNlZCghaXNDb2xsYXBzZWQpXG5cbiAgcmV0dXJuIChcbiAgICA8bmF2PlxuICAgICAge2V4cGFuZEJ1dHRvbih7IG9uQ2xpY2s6IHRvZ2dsZU1lbnUsIGlzQ29sbGFwc2VkIH0pfVxuICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IFwiaXMtY29sbGFwc2VkXCI6IGlzQ29sbGFwc2VkIH0pfT5cbiAgICAgICAge09iamVjdC5lbnRyaWVzKG1lbnVzKS5tYXAobWVudUl0ZW0oY3VycmVudFBhZ2UpKX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmljZS5saWdodH07XG4gICAgICAgIH1cbiAgICAgICAgdWw6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAke2dldFRpbGVTaXplKCl9O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaG9yaXpvbnRhbC5wbmdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2dldFRpbGVTaXplKCl9O1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgfVxuICAgICAgICAuaXMtY29sbGFwc2VkIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9uYXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/queued/workspace/recursed-ice-palace.github.io/components/MobileNav.js */")));
});

/***/ })

})
//# sourceMappingURL=about.js.cf4d902058e2cb8bf1d4.hot-update.js.map