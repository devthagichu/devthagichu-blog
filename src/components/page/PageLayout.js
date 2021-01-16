import * as React from "react"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import PageStyles from "./pages.module.scss"

const PageLayout = ({children}) => {
  return (
    <main className={PageStyles.container}>
        <Header/>
        {children}
        <Footer />
    </main>
  )
}

export default PageLayout