import chroma from 'chroma-js';
import { getTileSize, TILE_SIZE, palette } from '../config';

export default ({ children, centered }) => (
  <button>
    {children}
    <style jsx>{`
      button {
        position: relative;
        ${centered ? 'display: block; margin-left: auto; margin-right: auto;' : ''}
        height: ${getTileSize(2)};
        padding-left: 32px;
        padding-right: 32px;
        background: transparent;
        color: ${chroma(palette.ice.base).darken(1.5).hex()};
        font-size: 32px;
        text-transform: uppercase;
        z-index: 0;
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        border: ${getTileSize()} solid;
        border-image: url("/static/buoy.png") ${TILE_SIZE};
        border-image-repeat: repeat;
      }
      button:hover {
        color: ${chroma(palette.ice.base).darken(1).hex()};
      }
      button:hover::before {
        border-image: url("/static/buoy_hover.png") ${TILE_SIZE};
      }
      button:active {
        color: ${chroma(palette.ice.base).darken(2).hex()};
        text-shadow: none;
      }
      button:active::before {
        border-image: url("/static/buoy_active.png") ${TILE_SIZE};
      }
      button:focus {
        outline: 4px solid ${palette.ice.dark};
      }
      button::after{ /* Prefetch Hack */
        display: none;
        content: url("/static/buoy_hover.png") url("/static/buoy_active.png");
      }
    `}</style>
  </button>
)
