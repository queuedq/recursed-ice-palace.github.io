export const TILE_SIZE = 16
export const BACKGROUND_SIZE = 40
export const CHEST_SIZE = 40

export function getTileSize(numTiles = 1, scaling = 2, px = true) {
  return TILE_SIZE * scaling * numTiles + (px ? 'px' : '')
}

export function getBackgroundSize(scaling = 2, px = true) {
  return BACKGROUND_SIZE * scaling + (px ? 'px' : '')
}

export function getChestSize(scaling = 2, px = true) {
  return CHEST_SIZE * scaling + (px ? 'px' : '')
}

export const title = 'Recursed: The Ice Palace'
export const description =
  'Recursed: The Ice Palace is a free community DLC for the puzzle game Recursed, ' +
  'filled with carefully crafted and extremely challenging puzzles.'
export const keywords = 'Recursed, puzzle game, DLC, custom level'
export const author = 'choongmyoung and QueuED'

export const menus = {
  Home: {
    path: '/',
    icon: '/static/open_03.png',
  },
  About: {
    path: '/about/',
    icon: '/static/open_05.png',
  },
  News: {
    path: '/news/',
    icon: '/static/open_01.png',
  },
  FAQ: {
    path: '/faq/',
    icon: '/static/open_02.png',
  },
  Downloads: {
    path: '/downloads/',
    icon: '/static/open_04.png',
  },
}

export const googleAnalytics = null

export const palette = {
  white: '#eefaff',
  black: '#003d6d',
  ice: {
    lightest: '#dbf5ff',
    lighter: '#aee7ff',
    light: '#50cfff',
    base: '#43a3fa',
    dark: '#0586fa',
    darker: '#266af2',
  },
  red: '#fc057a',
}

export const breakpoints = {
  tablet: 820,
  tabletMinor: 900,
  desktop: 1100,
}
