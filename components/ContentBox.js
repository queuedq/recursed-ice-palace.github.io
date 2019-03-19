import { palette, getTileSize, TILE_SIZE } from '../config';

export default ({ children }) => (
  <main className="content">
    {children}
    <style jsx global>{`
      .content {
        width: 100%;
        padding: ${getTileSize()};
        color: ${palette.ice.darkest};
        background-color: ${palette.ice.lighter};
        border: ${getTileSize()} solid;
        border-image: url("/static/content_box.png") ${TILE_SIZE};
        border-image-repeat: repeat;
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
      .content li {
        position: relative;
        margin: 8px 0;
        padding-left: 40px;
        color: ${palette.ice.darkest}
      }
      .content li::before {
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
