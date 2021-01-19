import * as React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <div className={headerStyles.header__container}>
      <Link to="/">
        <h3 className={headerStyles.logo}>DevThagichu</h3>
      </Link>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <nav>
          <ul className={headerStyles.nav__container}>
            <li className={headerStyles.nav__item}>
              <Link to="/" className={headerStyles.nav__link}>
                Home
      </Link>
            </li>
            <li className={headerStyles.nav__item}>
              <Link to="/about" className={headerStyles.nav__link}>
                About
      </Link>
            </li>
            <li className={headerStyles.nav__item}>
              <Link to="/portfolio" className={headerStyles.nav__link}>
                Portfolio
      </Link>
            </li>
            <li className={headerStyles.nav__item}>
              <Link to="/blog" className={headerStyles.nav__link}>
                Blog
      </Link>
            </li>
            <li className={headerStyles.nav__item}>
              <Link to="/contacts" className={headerStyles.nav__link}>
                Let's Connect
      </Link>
            </li>
          </ul>
        </nav> */}
        <div className={headerStyles.menu__container}>
          <svg viewBox="0 0 80 80" width="30" height="40">
            <rect width="100" height="8"></rect>
            <rect y="30" width="100" height="8"></rect>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Header