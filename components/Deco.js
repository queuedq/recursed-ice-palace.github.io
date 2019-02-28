import { getTileSize, getBackgroundSize } from '../config';

export default () => (
  <>
    <div className="columnGroup">
      <div className="column left"></div>
      <div className="column right"></div>
      <div className="head left"></div>
      <div className="head right"></div>
    </div>
    <div className="ceiling"></div>
    <style jsx>{`
      :global(body) {
        background-image: url("/static/background.png");
        background-size: ${getBackgroundSize()} ${getBackgroundSize()};
        background-position: center;
        background-repeat: repeat;
      }
      .ceiling {
        width: 100%;
        height: ${getTileSize()};
        background-image: url("/static/ceiling.png");
        background-size: contain;
        background-position: center;
        background-repeat: repeat-x;
      }
      .columnGroup {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
      }
      .column {
        position: absolute;
        width: ${getTileSize(3)};
        height: 100%;
        background-size: contain;
        background-repeat: repeat-y;
        z-index: -1;
      }
      .column.left {
        background-image: url("/static/column_left.png");
      }
      .column.right {
        right: 0;
        background-image: url("/static/column_right.png");
      }
      .head {
        position: absolute;
        width: ${getTileSize(4)};
        height: ${getTileSize()};
        top: ${getTileSize()};
        background-size: cover;
        z-index: -1;
      }
      .head.left {
        background-image: url("/static/column_head_left.png");
      }
      .head.right {
        right: 0;
        background-image: url("/static/column_head_right.png");
      }
    `}</style>
  </>
);
