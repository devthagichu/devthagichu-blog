import * as React from "react"
import PageLayout from "../components/page/PageLayout"
import Head from "../components/head/Head"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (

    <PageLayout>
      <Head title="Home" />
      <div>
        <div className={indexStyles.hero__container}>
          <div className={indexStyles.hero__top}>
            <h1>"There are three responses to a piece of design -- Yes, No and Wow. Wow is the one to I aim for."</h1>
            <span className={indexStyles.hero__underline}></span>
          </div>
          <div className={indexStyles.hero__bottom}>

          </div>
        </div>
      </div>
    </PageLayout>

  )
}

export default IndexPage
