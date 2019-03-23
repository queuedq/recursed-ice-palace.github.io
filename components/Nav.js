import Link from 'next/link'
import classNames from 'classnames'
import { menus, getChestSize, palette, breakpoints } from '../config'
import MobileNav from './MobileNav';

// 1. Single menu item

const menuItem = currentPage => ([menuName, { path, icon, secondaryIcon }]) => (
  <Link href={path}>
    <li
      key={menuName}
      className={classNames({ "active": currentPage === menuName })}
    >
      <div>
        <Link href={path}>
          <a>
            {menuName}
          </a>
        </Link>
      </div>
      <div className="menu-icon" />

      <style jsx>{`
        li {
          display: block;
          width: 120px;
          cursor: pointer;
        }
        li > div {
          text-align: center;
        }
        a {
          padding: 0 2px;
          text-decoration: none;
          font-size: 24px;
          color: ${palette.ice.lightest};
        }
        li:not(.active):hover a {
          color: ${palette.ice.light};
        }
        a:focus {
          outline: 4px solid ${palette.ice.dark};
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
        .active a {
          color: ${palette.ice.darkest};
          background: ${palette.ice.lighter};
        }
        .active .menu-icon {
          background-image: url("${secondaryIcon}");
        }
      `}</style>
    </li>
  </Link>
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
          width: calc(100% - 144px);
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
