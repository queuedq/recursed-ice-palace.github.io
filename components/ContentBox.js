import { palette, getTileSize, breakpoints } from '../config';

export default ({ children }) => (
  <main className="content">
    {children}
    <style jsx global>{`
      .content {
        position: relative;
        width: 100%;
        padding: ${getTileSize()};
        margin-bottom: ${getTileSize(3)};
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
    `}</style>
  </main>
)
