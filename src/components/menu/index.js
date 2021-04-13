import React from "react";
import menuStyles from "./menu.module.scss";
import { Link } from "gatsby";

export default function index() {
  return (
    <div style={{ width: "100%" }}>
      <div className={menuStyles.container}>
        <header className={menuStyles.header}>
          <Link to="/" className={menuStyles.menu__logo}>
            DevThagichu
          </Link>
          <input
            className={menuStyles.menu__btn}
            type="checkbox"
            id="menu-btn"
          />
          <label className={menuStyles.menu__icon} htmlFor="menu-btn">
            <span className={menuStyles.menu__navicon}></span>
          </label>
          <ul className={menuStyles.menu}>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/blog/page/1">Courses</Link>
            </li>
            <li>
              <Link to="/blog/page/1">Projects</Link>
            </li>
            <li>
              <Link to="/blog/page/1">Blog</Link>
            </li>
            <li>
              <Link to="/contacts">Contact</Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}
