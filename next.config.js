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
      '/news': { page: '/news'},
      '/faq': { page: '/faq'},
      '/downloads': { page: '/downloads'}
    }
  }
});
