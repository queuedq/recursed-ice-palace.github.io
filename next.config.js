const withPlugins = require('next-compose-plugins')

const css = require('@zeit/next-css')
const mdx = require('@zeit/next-mdx')()

module.exports = withPlugins([
  [css],
  [mdx]
]);
