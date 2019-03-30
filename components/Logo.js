import { breakpoints } from '../config';

export default () => (
  <header>
    <img className="logo" src="/static/logo.png" alt="Recursed: The Ice Palace"/>
    <style jsx>{`
      .logo {
        display: block;
        width: 305px;
        margin: 24px auto 32px auto;
      }
      @media screen and (min-width: ${breakpoints.tabletBig}px) {
        .logo {
          width: 610px;
          margin: 32px auto 48px auto;
        }
      }
    `}</style>
  </header>
)
