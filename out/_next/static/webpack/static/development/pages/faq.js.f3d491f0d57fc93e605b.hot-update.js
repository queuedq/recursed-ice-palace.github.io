webpackHotUpdate("static/development/pages/faq.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
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
/* harmony import */ var _MobileNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MobileNav */ "./components/MobileNav.js");


var _jsxFileName = "/Users/queued/workspace/the-ice-palace.github.io/components/Nav.js";





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
      key: menuName,
      href: path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: menuName,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1670159456", [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), icon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter, secondaryIcon]]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        "active": currentPage === menuName
      }) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1670159456", [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), icon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter, secondaryIcon]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1670159456", [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), icon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter, secondaryIcon]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, menuName))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1670159456", [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), icon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter, secondaryIcon]]]) + " " + "menu-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "1670159456",
      dynamic: [_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), icon, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.darkest, _config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter, secondaryIcon],
      __self: this
    }, "li.__jsx-style-dynamic-selector{display:block;width:120px;cursor:pointer;}li.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{text-align:center;}a.__jsx-style-dynamic-selector{padding:0 2px;-webkit-text-decoration:none;text-decoration:none;font-size:24px;color:".concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lightest, ";}li.__jsx-style-dynamic-selector:not(.active):hover a.__jsx-style-dynamic-selector{color:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.light, ";}a.__jsx-style-dynamic-selector:focus{outline:4px solid ").concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.dark, ";}.menu-icon.__jsx-style-dynamic-selector{display:block;width:").concat(Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), ";height:").concat(Object(_config__WEBPACK_IMPORTED_MODULE_6__["getChestSize"])(), ";margin:0 auto;background-image:url(\"").concat(icon, "\");background-size:contain;background-position:center bottom;background-repeat:no-repeat;}.active.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.darkest, ";background:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["palette"].ice.lighter, ";}.active.__jsx-style-dynamic-selector .menu-icon.__jsx-style-dynamic-selector{background-image:url(\"").concat(secondaryIcon, "\");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmtCLEFBR3lCLEFBS0ksQUFHSixBQU1xQixBQUdZLEFBR2pDLEFBVXFCLEFBSWtCLGNBakN6QyxBQVFTLEFBWWMsSUFmckMsUUFKaUIsU0FhakIsQUFnQjBDLE1BNUIxQyxNQWVBLEVBSXNDLElBYXRDLFdBekJpQixXQXNCakIsSUFyQnFDLE1BWXJCLGNBQ3VDLGVBWnZELHNDQWEwQix3QkFDVSxrQ0FDTiw0QkFDOUIiLCJmaWxlIjoiL1VzZXJzL3F1ZXVlZC93b3Jrc3BhY2UvdGhlLWljZS1wYWxhY2UuZ2l0aHViLmlvL2NvbXBvbmVudHMvTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IG1lbnVzLCBnZXRDaGVzdFNpemUsIHBhbGV0dGUsIGJyZWFrcG9pbnRzIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IE1vYmlsZU5hdiBmcm9tICcuL01vYmlsZU5hdic7XG5cbi8vIDEuIFNpbmdsZSBtZW51IGl0ZW1cblxuY29uc3QgbWVudUl0ZW0gPSBjdXJyZW50UGFnZSA9PiAoW21lbnVOYW1lLCB7IHBhdGgsIGljb24sIHNlY29uZGFyeUljb24gfV0pID0+IChcbiAgPExpbmsga2V5PXttZW51TmFtZX0gaHJlZj17cGF0aH0+XG4gICAgPGxpXG4gICAgICBrZXk9e21lbnVOYW1lfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgXCJhY3RpdmVcIjogY3VycmVudFBhZ2UgPT09IG1lbnVOYW1lIH0pfVxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9e3BhdGh9PlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAge21lbnVOYW1lfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaWNvblwiIC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgbGkgPiBkaXYge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDJweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuaWNlLmxpZ2h0ZXN0fTtcbiAgICAgICAgfVxuICAgICAgICBsaTpub3QoLmFjdGl2ZSk6aG92ZXIgYSB7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5pY2UubGlnaHR9O1xuICAgICAgICB9XG4gICAgICAgIGE6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IDRweCBzb2xpZCAke3BhbGV0dGUuaWNlLmRhcmt9O1xuICAgICAgICB9XG4gICAgICAgIC5tZW51LWljb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAke2dldENoZXN0U2l6ZSgpfTtcbiAgICAgICAgICBoZWlnaHQ6ICR7Z2V0Q2hlc3RTaXplKCl9O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7aWNvbn1cIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZlIGEge1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuaWNlLmRhcmtlc3R9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cGFsZXR0ZS5pY2UubGlnaHRlcn07XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZSAubWVudS1pY29uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke3NlY29uZGFyeUljb259XCIpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9saT5cbiAgPC9MaW5rPlxuKVxuXG4vLyAyLiBDb21wb3NlZCBuYXZcblxuZXhwb3J0IGRlZmF1bHQgKHsgY3VycmVudFBhZ2UgfSkgPT4gKFxuICA8bmF2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXdyYXBwZXJcIj5cbiAgICAgIDxNb2JpbGVOYXYgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSAvPlxuICAgIDwvZGl2PlxuICAgIDx1bD5cbiAgICAgIHtPYmplY3QuZW50cmllcyhtZW51cykubWFwKG1lbnVJdGVtKGN1cnJlbnRQYWdlKSl9XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBuYXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICAubW9iaWxlLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHticmVha3BvaW50cy5tb2JpbGUgLSAxfXB4KSB7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5tb2JpbGUtd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7YnJlYWtwb2ludHMubW9iaWxlQmlnfXB4KSB7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTQ0cHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLnRhYmxldH1weCkge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbmF2PlxuKVxuIl19 */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/components/Nav.js */"))));
  };
}; // 2. Composed nav


/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var currentPage = _ref3.currentPage;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1968265710", [_config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].mobile - 1, _config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].mobileBig, _config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].tablet]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1968265710", [_config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].mobile - 1, _config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].mobileBig, _config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].tablet]]]) + " " + "mobile-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_MobileNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
    currentPage: currentPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1968265710", [_config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].mobile - 1, _config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].mobileBig, _config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].tablet]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_6__["menus"]).map(menuItem(currentPage))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1968265710",
    dynamic: [_config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].mobile - 1, _config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].mobileBig, _config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].tablet],
    __self: this
  }, "nav.__jsx-style-dynamic-selector{width:100%;margin:0 auto;}ul.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;margin:0 auto;}.mobile-wrapper.__jsx-style-dynamic-selector{display:none;}@media screen and (max-width:".concat(_config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].mobile - 1, "px){ul.__jsx-style-dynamic-selector{display:none;}.mobile-wrapper.__jsx-style-dynamic-selector{display:block;}}@media screen and (min-width:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].mobileBig, "px){ul.__jsx-style-dynamic-selector{width:calc(100% - 144px);}}@media screen and (min-width:").concat(_config__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].tablet, "px){ul.__jsx-style-dynamic-selector{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRWdCLEFBR29CLEFBSUUsQUFNQSxBQUlFLEFBR0MsQUFLVyxBQUtkLFdBMUJDLEFBMkJkLEVBakJGLEFBSUUsQ0FHQSxXQWhCRixBQXFCRSxpREFsQjZCLDJIQUNsQixXQUNHLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9xdWV1ZWQvd29ya3NwYWNlL3RoZS1pY2UtcGFsYWNlLmdpdGh1Yi5pby9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBtZW51cywgZ2V0Q2hlc3RTaXplLCBwYWxldHRlLCBicmVha3BvaW50cyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBNb2JpbGVOYXYgZnJvbSAnLi9Nb2JpbGVOYXYnO1xuXG4vLyAxLiBTaW5nbGUgbWVudSBpdGVtXG5cbmNvbnN0IG1lbnVJdGVtID0gY3VycmVudFBhZ2UgPT4gKFttZW51TmFtZSwgeyBwYXRoLCBpY29uLCBzZWNvbmRhcnlJY29uIH1dKSA9PiAoXG4gIDxMaW5rIGtleT17bWVudU5hbWV9IGhyZWY9e3BhdGh9PlxuICAgIDxsaVxuICAgICAga2V5PXttZW51TmFtZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IFwiYWN0aXZlXCI6IGN1cnJlbnRQYWdlID09PSBtZW51TmFtZSB9KX1cbiAgICA+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPXtwYXRofT5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIHttZW51TmFtZX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWljb25cIiAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIGxpID4gZGl2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgcGFkZGluZzogMCAycHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5saWdodGVzdH07XG4gICAgICAgIH1cbiAgICAgICAgbGk6bm90KC5hY3RpdmUpOmhvdmVyIGEge1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuaWNlLmxpZ2h0fTtcbiAgICAgICAgfVxuICAgICAgICBhOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiA0cHggc29saWQgJHtwYWxldHRlLmljZS5kYXJrfTtcbiAgICAgICAgfVxuICAgICAgICAubWVudS1pY29uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogJHtnZXRDaGVzdFNpemUoKX07XG4gICAgICAgICAgaGVpZ2h0OiAke2dldENoZXN0U2l6ZSgpfTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke2ljb259XCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZSBhIHtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmljZS5kYXJrZXN0fTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3BhbGV0dGUuaWNlLmxpZ2h0ZXJ9O1xuICAgICAgICB9XG4gICAgICAgIC5hY3RpdmUgLm1lbnUtaWNvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtzZWNvbmRhcnlJY29ufVwiKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4gIDwvTGluaz5cbilcblxuLy8gMi4gQ29tcG9zZWQgbmF2XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGN1cnJlbnRQYWdlIH0pID0+IChcbiAgPG5hdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS13cmFwcGVyXCI+XG4gICAgICA8TW9iaWxlTmF2IGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX0gLz5cbiAgICA8L2Rpdj5cbiAgICA8dWw+XG4gICAgICB7T2JqZWN0LmVudHJpZXMobWVudXMpLm1hcChtZW51SXRlbShjdXJyZW50UGFnZSkpfVxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbmF2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgLm1vYmlsZS13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7YnJlYWtwb2ludHMubW9iaWxlIC0gMX1weCkge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubW9iaWxlLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLm1vYmlsZUJpZ31weCkge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0NHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHticmVha3BvaW50cy50YWJsZXR9cHgpIHtcbiAgICAgICAgdWwge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L25hdj5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/queued/workspace/the-ice-palace.github.io/components/Nav.js */")));
});

/***/ })

})
//# sourceMappingURL=faq.js.f3d491f0d57fc93e605b.hot-update.js.map