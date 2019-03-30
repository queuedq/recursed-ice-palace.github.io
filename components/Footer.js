import chroma from 'chroma-js'
import { getTileSize, palette } from '../config'

export default () => (
  <footer className="footer">
    <div className="wrapper">
      <p><span>&copy; Copyright 2019 Team Ice Palace</span></p>
      <p><span>
        Contact:
        {' '}
        <a href="mailto:RecursedIcePalace@gmail.com">RecursedIcePalace@gmail.com</a>
      </span></p>
    </div>
    <style jsx>{`
      .footer {
        min-height: ${getTileSize(4)};
        padding: 16px 0;
        background: url("/static/brick.png");
        background-size: ${getTileSize()};
        text-align: center;
        font-size: 20px;
      }
      .wrapper {
        padding: 8px 0;
        max-width: 600px;
        margin: 0 auto;
        color: ${palette.black};
      }
      .footer span {
        padding: 0 4px;
        background: ${chroma(palette.ice.lighter).hex()};
      }
      a {
        color: ${palette.link};
      }
      a:hover {
        color: ${palette.ice.dark};
      }
    `}</style>
  </footer>
)
