import React, { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { menus, getChestSize, palette, getTileSize } from '../config'

// 1. Single menu item

const menuItem = currentPage => ([menuName, { path, icon, secondaryIcon }]) => (
  <Link key={menuName} href={path}>
    <li className={classNames({ active: currentPage === menuName })}>
      <div className="menu-icon"/>
      <a>{menuName}</a>
      <style jsx>{`
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 8px auto;
        }
        .menu-icon {
          width: 40px;
          height: 40px;
          margin-right: 8px;
          background-image: url("${icon}");
          background-size: 40px;
          background-position: center -8px;
          background-repeat: no-repeat;
        }
        a {
          padding: 0 16px;
          text-decoration: none;
          font-size: 24px;
          min-width: 140px;
          color: ${palette.black};
          text-align: center;
        }
        li:not(.active):hover a {
          background: ${palette.ice.base};
        }
        .active .menu-icon {
          background-image: url("${secondaryIcon}");
        }
        .active a {
          color: ${palette.ice.dark};
          background-color: ${palette.ice.lighter};
        }
      `}</style>
    </li>
  </Link>
)

// 2. Hamburger button

const expandButton = ({ onClick, isCollapsed }) => (
  <button onClick={onClick} className={classNames({ 'is-collapsed': isCollapsed })}>
    <div className="button-text">Menu</div>
    <div className="menu-icon"></div>
    <style jsx>{`
      button {
        display: flex;
        align-items: flex-end;
        padding: 0;
        margin: 0 4px 0 auto;
        height: 40px;
        background: none;
        font-size: 24px;
        color: ${palette.ice.lightest};
      }
      .button-text {
        padding: 8px;
      }
      .menu-icon {
        width: ${getChestSize()};
        height: ${getChestSize()};
        margin-top: -40px;
        background-image: url('/static/closed_01.png');
        background-size: ${getChestSize()} ${getChestSize()};
        background-position: center bottom;
        background-repeat: no-repeat;
      }
      .is-collapsed .menu-icon {
        background-image: url('/static/open_01.png');
      }
      button:hover {
        color: ${palette.ice.light};
      }
    `}</style>
  </button>
)

// 3. Composed nav

export default ({ currentPage }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleMenu = () => setIsCollapsed(!isCollapsed)

  return (
    <nav>
      {expandButton({ onClick: toggleMenu, isCollapsed })}
      <ul className={classNames({ "is-collapsed": isCollapsed })}>
        {Object.entries(menus).map(menuItem(currentPage))}
      </ul>
      <style jsx>{`
        nav {
          width: 100%;
          margin: 0 auto;
        }
        ul {
          margin: 0 auto;
          overflow: hidden;
          background-color: ${palette.ice.light};
        }
        ul::before {
          content: '';
          display: block;
          width: 100%;
          height: ${getTileSize()};
          background-image: url("/static/horizontal.png");
          background-size: ${getTileSize()};
          background-repeat: repeat-x;
        }
        .is-collapsed {
          display: none;
        }
      `}</style>
    </nav>
  )
}
