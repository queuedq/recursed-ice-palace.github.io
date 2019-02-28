import chroma from 'chroma-js'
import Head from 'next/head'
import { getTileSize, title, TILE_SIZE, palette } from '../config'
import Deco from '../components/Deco'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import '../css/reset.css'
import '../css/normalize.css'
import '../js/googleAnalytics'

const getTitle = currentPage =>
  currentPage === 'Home'
    ? title
    : title + ' - ' + currentPage

export default ({ currentPage, children }) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <title>{getTitle(currentPage)}</title>
      {/* <title>{'' + currentPage + title ? ` - ${title}`: ''}</title> */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      {/* TODO: OpenGraph */}
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
    <Deco />
    <div className="container">
      <Logo />
      <Nav currentPage={currentPage} />
      <main className="content">
        {children}
      </main>
    </div>
    {/* <Footer /> */}
    <style global jsx>{`
      @font-face {
        font-family: Fixedsys;
        src: url("/static/FSEX300.ttf");
      }
      html {
        height: 100%;
      }
      body {
        position: relative;  // For deco column positioning
        min-height: 100%;
        font-size: 24px;
        font-family: Fixedsys;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -webkit-text-size-adjust: auto;
      }
      * {
        box-sizing: border-box;
        image-rendering: pixelated;
      }
    `}</style>
    <style jsx>{`
      .container {
        width: 600px;
        max-width: 800px;
        margin: 0 auto;
      }
      .content {
        width: 100%;
        padding: ${getTileSize()};
        color: rgba(0, 0, 0, 0.7);
        background-color: ${palette.ice.lighter};
        border: ${getTileSize()} solid;
        border-image: url("/static/content_box.png") ${TILE_SIZE};
        border-image-repeat: repeat;
      }
    `}</style>
  </div>
);
