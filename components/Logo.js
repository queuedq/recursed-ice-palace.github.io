export default () => (
  <header>
    <img className="logo" src="/static/logo.png" />
    <style jsx>{`
      .logo {
        display: block;
        width: 610;
        margin: 32px auto 48px auto;
      }
      @media screen and (max-width: 1000px) {
        .logo {
          width: 305px;
          margin: 24px auto 32px auto;
        }
      }
    `}</style>
  </header>
)
