export const SCALING_FACTOR_DEFAULT = 2
export const TILE_SIZE = 16
export const BACKGROUND_SIZE = 40
export const CHEST_SIZE = 40

export function getTileSize(numTiles = 1, scaling = 'default', px = true) {
  return TILE_SIZE * SCALING_FACTOR_DEFAULT * numTiles + (px ? 'px' : '')
}

export function getBackgroundSize(scaling = 'default', px = true) {
  return BACKGROUND_SIZE * SCALING_FACTOR_DEFAULT + (px ? 'px' : '')
}

export function getChestSize(scaling = 'default', px = true) {
  return CHEST_SIZE * SCALING_FACTOR_DEFAULT + (px ? 'px' : '')
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
  Downloads: {
    path: '/downloads/',
    icon: '/static/open_02.png',
  },
  News: {
    path: '/news/',
    icon: '/static/open_01.png',
  },
  FAQ: {
    path: '/faq/',
    icon: '/static/open_04.png',
  },
}

export const googleAnalytics = null
