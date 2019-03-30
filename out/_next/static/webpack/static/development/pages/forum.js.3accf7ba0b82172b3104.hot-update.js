webpackHotUpdate("static/development/pages/forum.js",{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: TILE_SIZE, CHEST_SIZE, getTileSize, getChestSize, backgroundSize, title, description, keywords, author, menus, screenshots, googleAnalytics, palette, breakpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_SIZE", function() { return TILE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHEST_SIZE", function() { return CHEST_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTileSize", function() { return getTileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChestSize", function() { return getChestSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundSize", function() { return backgroundSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "description", function() { return description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keywords", function() { return keywords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "author", function() { return author; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menus", function() { return menus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenshots", function() { return screenshots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleAnalytics", function() { return googleAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "palette", function() { return palette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
var TILE_SIZE = 16;
var CHEST_SIZE = 32;
function getTileSize() {
  var numTiles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var scaling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var px = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return TILE_SIZE * scaling * numTiles + (px ? 'px' : '');
}
function getChestSize() {
  var scaling = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var px = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return CHEST_SIZE * scaling + (px ? 'px' : '');
}
var backgroundSize = 80;
var title = 'Recursed: The Ice Palace';
var description = 'Recursed: The Ice Palace is a free community DLC for the puzzle game Recursed, ' + 'filled with carefully crafted and extremely challenging puzzles.';
var keywords = 'Recursed, puzzle game, DLC, custom level';
var author = 'choongmyoung and QueuED';
var menus = {
  Home: {
    path: '/',
    icon: '/static/open_03.png',
    secondaryIcon: '/static/closed_03.png'
  },
  About: {
    path: '/about/',
    icon: '/static/open_05.png',
    secondaryIcon: '/static/closed_05.png'
  },
  FAQ: {
    path: '/faq/',
    icon: '/static/open_01.png',
    secondaryIcon: '/static/closed_01.png'
  },
  Downloads: {
    path: '/downloads/',
    icon: '/static/open_02.png',
    secondaryIcon: '/static/closed_02.png'
  },
  Forum: {
    path: '/forum/',
    icon: '/static/open_04.png',
    secondaryIcon: '/static/closed_04.png'
  }
};
var screenshots = ['/static/screenshots/01.png', '/static/screenshots/02.png', '/static/screenshots/03.png', '/static/screenshots/04.png', '/static/screenshots/05.png', '/static/screenshots/06.png'];
var googleAnalytics = null;
var palette = {
  white: '#eefaff',
  black: '#002c4f',
  gray: {
    light: '#95adbd',
    base: '#7793a7',
    dark: '#3c607b'
  },
  ice: {
    lightest: '#dbf5ff',
    lighter: '#aee7ff',
    light: '#6ed8ff',
    base: '#43aafa',
    dark: '#0586fa',
    darker: '#0062ca',
    darkest: '#005091'
  },
  link: '#266af2',
  emphasize: '#DE05FF',
  green: '#307808',
  red: '#D53A4C'
};
var breakpoints = {
  mobileSmall: 360,
  mobile: 600,
  mobileBig: 720,
  tablet: 820,
  tabletBig: 900,
  desktop: 1100
};

/***/ })

})
//# sourceMappingURL=forum.js.3accf7ba0b82172b3104.hot-update.js.map