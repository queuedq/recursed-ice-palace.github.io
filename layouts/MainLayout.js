import Head from 'next/head'
import { title, breakpoints, backgroundSize, palette } from '../config'
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
        font-family: Fixedsys;
        font-size: 24px;
        line-height: 32px;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -webkit-text-size-adjust: auto;
        background-color: #365474;
        background-image: url("/static/background.png");
        background-size: ${backgroundSize}px ${backgroundSize}px;
        background-position: center;
        background-repeat: repeat;
      }
      * {
        box-sizing: border-box;
      }
      :focus {
        outline: 4px solid ${palette.ice.base};
      }
      ::selection {
        background: ${palette.ice.light};
      }
    `}</style>
    <style jsx>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
      }
      @media screen and (min-width: ${breakpoints.desktop}px) {
        .container {
          width: calc(100% - 400px);
        }
      }
      @media screen and (min-width: ${breakpoints.tablet}px) {
        .container {
          width: calc(100% - 192px);
        }
      }
    `}</style>
  </div>
);
