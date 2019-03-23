import { palette } from '../config';

export default ({ children }) => (
  <div className="markdown">
    {children}
    <style jsx global>{`
      .markdown h1 {
        color: ${palette.black};
        text-align: center;
        text-transform: uppercase;
      }
      .markdown h2 {
        color: ${palette.black};
        text-align: center;
        font-size: 32px;
        margin: 24px 0 16px 0;
      }
      .markdown h3 {
        color: ${palette.black};
        font-size: 24px;
        margin: 16px 0;
      }
      .markdown p {
        color: ${palette.ice.darkest};
        margin-bottom: 16px;
      }
      .markdown a {
        background-image: url('/static/link_icon.png');
        background-repeat: no-repeat;
        background-size: 32px;
        background-position: left bottom;
        padding-left: 36px;
        color: ${palette.link};
      }
      .markdown a:hover {
        color: ${palette.ice.dark};
      }
      .markdown em {
        font-style: none;
        color: ${palette.emphasize};
      }
      .markdown ul {
        margin: 16px 0;
        padding-left: 16px;
      }
      .markdown ul>li {
        position: relative;
        margin: 8px 0;
        padding-left: 40px;
      }
      .markdown ul>li::before {
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
      .markdown ol {
        margin: 16px 0;
        padding-left: 16px;
        counter-reset: order;
      }
      .markdown ol>li {
        position: relative;
        margin: 8px 0;
        padding-left: 40px;
      }
      .markdown ol>li::before {
        counter-increment: order;
        content: counter(order) '.';
        position: absolute;
        left: 0;
        top: 0;
        color: ${palette.ice.dark};
      }
    `}</style>
  </div>
)
