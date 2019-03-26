const withPlugins = require('next-compose-plugins')

const css = require('@zeit/next-css')
const mdx = require('@zeit/next-mdx')()

module.exports = withPlugins([
  [css],
  [mdx]
], {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about'},
      '/faq': { page: '/faq'},
      '/downloads': { page: '/downloads'},
      '/forum': { page: '/forum'},
    }
  }
});
