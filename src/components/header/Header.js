import * as React from "react"
import {Link} from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <div className={headerStyles.header__container}>
      <Link to="/"> 
        <h3 className={headerStyles.logo}>DevThagichu</h3>
      </Link>
<nav>
  <ul className={headerStyles.nav__container}>
    <li className={headerStyles.nav__item}>
      <Link to="/" className={headerStyles.nav__link}>
      Home
      </Link>
    </li>
      <li className={headerStyles.nav__item}>
      <Link to="/blog" className={headerStyles.nav__link}>
      Blog
      </Link>
    </li>
  </ul>
</nav>


    </div>
  )
}

export default Header