import Link from 'next/link'
import { menus, getChestSize, palette, breakpoints } from '../config'

// function randomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// const randomChest = () => `/static/open_0${randomInt(5) + 1}.png`

const menuItem = currentPage => ([menuName, { path, icon }]) => (
  <li key={menuName}>
    <Link href={path}>
      <a>{menuName}</a>
    </Link>
    {currentPage === menuName
      ? <div className="menuIcon active" />
      : <div className="menuIcon"/>
    }
    <style jsx>{`
      li {
        display: block;
        width: 140px;
      }
      a {
        display: block;
        text-decoration: none;
        font-size: 24px;
        text-align: center;
        color: ${palette.ice.lightest};
      }
      a:hover {
        color: ${palette.ice.light};
      }
      .menuIcon {
        display: block;
        width: ${getChestSize()};
        height: ${getChestSize()};
        margin: -10px auto 0 auto;
        background-image: url("${icon}");
        background-size: contain;
        background-position: center bottom;
        background-repeat: no-repeat;
      }
      .menuIcon.active {
        background-image: url('/static/exit.png');
      }
    `}</style>
  </li>
)

export default ({ currentPage }) => (
  <nav>
    <ul>
      {Object.entries(menus).map(menuItem(currentPage))}
    </ul>
    <style jsx>{`
      nav {
        width: 100%;
        margin: 0 auto;
      }
      ul {
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
      }
      @media screen and (max-width: ${breakpoints.tablet}px) {
        ul {
          width: 500px;
        }
      }
    `}</style>
  </nav>
)
