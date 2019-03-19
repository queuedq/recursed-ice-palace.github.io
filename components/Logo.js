import { breakpoints } from '../config';

export default () => (
  <header>
    <img className="logo" src="/static/logo.png" />
    <style jsx>{`
      .logo {
        display: block;
        width: 305px;
        margin: 24px auto 32px auto;
      }
      @media screen and (min-width: ${breakpoints.bigTablet}px) {
        .logo {
          width: 610px;
          margin: 32px auto 48px auto;
        }
      }
    `}</style>
  </header>
)
