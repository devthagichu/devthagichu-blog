import * as React from "react"
import Footer from "../footer/Footer"
import Header from "../header/Header"

const PageLayout = ({children}) => {
  return (
    <main>
        <Header/>
        {children}
        <Footer />
    </main>
  )
}

export default PageLayout