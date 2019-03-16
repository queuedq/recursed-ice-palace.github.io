import Head from 'next/head'
import { title, breakpoints } from '../config'
import Deco from '../components/Deco'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import ContentBox from '../components/ContentBox'
import '../css/reset.css'
import '../css/normalize.css'
import '../css/global.css'
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
    <Logo />
    <div className="container">
      <Nav currentPage={currentPage} />
      <ContentBox>
        {children}
      </ContentBox>
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
        background-color: #365474;
        font-family: Fixedsys;
        font-size: 24px;
        line-height: 32px;
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
        width: calc(100% - 400px);
        max-width: 800px;
        margin: 0 auto;
      }
      @media screen and (max-width: ${breakpoints.desktop}px) {
        .container {
          width: calc(100% - 192px);
        }
      }
      @media screen and (max-width: ${breakpoints.tablet}px) {
        .container {
          width: 100%;
        }
      }
    `}</style>
  </div>
);
