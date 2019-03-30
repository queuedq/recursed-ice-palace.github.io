import chroma from 'chroma-js'
import classNames from 'classnames'
import { getTileSize, palette, breakpoints } from '../config'

export default ({ children, centered, onClick }) => (
  <button
    className={classNames({ centered })}
    onClick={onClick}
  >
    {children}
    <style jsx>{`
      button {
        position: relative;
        height: ${getTileSize(2)};
        padding 16px 32px;
        margin: 8px;
        background: transparent;
        color: ${chroma(palette.ice.base).darken(1.5).hex()};
        font-size: 32px;
        text-transform: uppercase;
        z-index: 0;
      }
      @media screen and (max-width: ${breakpoints.mobileSmall}px) {
        button {
          font-size: 28px;
        }
      }
      button.centered {
        display: block;
        margin-left: auto;
        margin-right: auto;
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
        border-image: url("/static/buoy.png") 64;
        border-image-repeat: repeat;
      }
      button:hover {
        color: ${chroma(palette.ice.base).darken(1).hex()};
      }
      button:hover::before {
        border-image: url("/static/buoy_hover.png") 64;
      }
      button:active {
        color: ${chroma(palette.ice.base).darken(2).hex()};
        text-shadow: none;
      }
      button:active::before {
        border-image: url("/static/buoy_active.png") 64;
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
