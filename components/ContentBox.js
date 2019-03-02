import { palette, getTileSize, TILE_SIZE } from '../config';

export default ({ children }) => (
  <main className="content">
    {children}
    <style jsx global>{`
      .content {
        width: 100%;
        padding: ${getTileSize()};
        color: ${palette.black};
        background-color: ${palette.ice.lighter};
        border: ${getTileSize()} solid;
        border-image: url("/static/content_box.png") ${TILE_SIZE};
        border-image-repeat: repeat;
      }
      .content h1 {
        text-align: center;
        text-transform: uppercase;
      }
      .content h2 {
        text-align: center;
        font-size: 32px;
        margin: 16px 0;
      }
      .content a {
        background: url('/static/link_icon.png') no-repeat left bottom;
        padding-left: 36px;
        color: ${palette.ice.darker};
      }
      .content a:hover {
        color: ${palette.ice.dark};
      }
      .content em {
        font-style: none;
        color: ${palette.red};
      }
      .content ul {
        text-align: left;
      }
      .content li {
        position: relative;
        padding: 4px 0 4px 40px;
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
