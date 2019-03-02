const withCSS = require('@zeit/next-css')
const withMDX = require('@zeit/next-mdx')()

module.exports = withMDX(withCSS())
