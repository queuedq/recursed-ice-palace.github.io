import { palette, getTileSize, breakpoints } from '../config';

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
          word-wrap: break-word;
        }
        .content::before, .content::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          display: block;
          height: ${getTileSize()};
          background-image: url("/static/horizontal.png");
          background-size: ${getTileSize()};
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
          border-image: url("/static/content_box.png") 64;
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
        background-image: url('/static/link_icon.png');
        background-repeat: no-repeat;
        background-size: 32px;
        background-position: left bottom;
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
        margin: 16px 0;
        padding-left: 16px;
      }
      .content ul>li {
        position: relative;
        margin: 8px 0;
        padding-left: 40px;
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
      .content ol {
        margin: 16px 0;
        padding-left: 16px;
        counter-reset: order;
      }
      .content ol>li {
        position: relative;
        margin: 8px 0;
        padding-left: 40px;
      }
      .content ol>li::before {
        counter-increment: order;
        content: counter(order) '.';
        position: absolute;
        left: 0;
        top: 0;
        color: ${palette.ice.dark};
      }
    `}</style>
  </main>
)
