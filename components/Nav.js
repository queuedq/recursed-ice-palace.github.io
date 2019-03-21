import Link from 'next/link'
import { menus, getChestSize, palette, breakpoints } from '../config'
import MobileNav from './MobileNav';

// 1. Single menu item

const menuItem = currentPage => ([menuName, { path, icon }]) => (
  <li key={menuName}>
    <Link href={path}>
      <a>{menuName}</a>
    </Link>
    {currentPage === menuName
      ? <div className="menu-icon active" />
      : <div className="menu-icon"/>
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
      .menu-icon {
        display: block;
        width: ${getChestSize()};
        height: ${getChestSize()};
        margin: 0 auto;
        background-image: url("${icon}");
        background-size: contain;
        background-position: center bottom;
        background-repeat: no-repeat;
      }
      .menu-icon.active {
        background-image: url('/static/exit.png');
      }
    `}</style>
  </li>
)

// 2. Composed nav

export default ({ currentPage }) => (
  <nav>
    <div className="mobile-wrapper">
      <MobileNav />
    </div>
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
        width: 100%;
        margin: 0 auto;
      }
      .mobile-wrapper {
        display: none;
      }
      @media screen and (max-width: ${breakpoints.mobile - 1}px) {
        ul {
          display: none;
        }
        .mobile-wrapper {
          display: block;
        }
      }
      @media screen and (min-width: ${breakpoints.mobileBig}px) {
        ul {
          width: 540px;
        }
      }
      @media screen and (min-width: ${breakpoints.tablet}px) {
        ul {
          width: 100%;
        }
      }
    `}</style>
  </nav>
)
