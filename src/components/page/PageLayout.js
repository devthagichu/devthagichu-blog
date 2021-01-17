import * as React from "react"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import "../../styles/globalStyles.scss"
import PageStyles from "./pages.module.scss"

const PageLayout = ({children}) => {
  return (
 
          <div className={PageStyles.container}>
      <div className={PageStyles.content__container}>
        <Header/>
        {children}
      </div>
        <Footer />
    </div>
  )
}

export default PageLayout