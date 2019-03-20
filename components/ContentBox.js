import { palette, getTileSize, TILE_SIZE, breakpoints } from '../config';

export default ({ children }) => (
  <main className="content">
    {children}
    <style jsx global>{`
      .content {
        position: relative;
        width: 100%;
        padding: ${getTileSize()};
        color: ${palette.ice.darkest};
        background-color: ${palette.ice.lighter};
      }
      @media screen and (max-width: ${breakpoints.mobileBig - 1}px) {
        .content {
          padding: ${getTileSize(2)} 16px;
        }
        .content::before, .content::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          display: block;
          height: ${getTileSize()};
          background-image: url("/static/horizontal.png");
          background-repeat: repeat-x;
        }
        .content::before {
          top: 0;
        }
        .content::after {
          bottom: 0;
        }
      }
      @media screen and (min-width: ${breakpoints.mobileBig}px) {
        .content {
          border: ${getTileSize()} solid;
          border-image: url("/static/content_box.png") ${TILE_SIZE};
          border-image-repeat: repeat;
        }
      }
      .content h1 {
        color: ${palette.black};
        text-align: center;
        text-transform: uppercase;
      }
      .content h2 {
        color: ${palette.black};
        text-align: center;
        font-size: 32px;
        margin: 24px 0 16px 0;
      }
      .content h3 {
        color: ${palette.black};
        font-size: 24px;
        margin: 16px 0;
      }
      .content p {
        margin-bottom: 16px;
      }
      .content a {
        background: url('/static/link_icon.png') no-repeat left bottom;
        padding-left: 36px;
        color: ${palette.link};
      }
      .content a:hover {
        color: ${palette.ice.dark};
      }
      .content em {
        font-style: none;
        color: ${palette.emphasize};
      }
      .content ul {
        text-align: left;
        margin: 16px 0;
        padding-left: 16px;
      }
      .content ul>li {
        position: relative;
        margin: 8px 0;
        padding-left: 40px;
        color: ${palette.ice.darkest}
      }
      .content ul>li::before {
        content: '';
        width: 32px;
        height: 32px;
        position: absolute;
        background-image: url('/static/oobleck.png');
        background-size: cover;
        background-position: center;
        left: 0;
        top: 0;
      }
    `}</style>
  </main>
)
