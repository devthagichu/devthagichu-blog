import * as React from "react"
import { Link } from "gatsby"
import PageLayout from "../components/page/PageLayout"


const NotFoundPage = () => {
  return (
    <PageLayout>
      <div style={{ height: "60vh", display: "flex", flex: 1, flexGrow: 1, justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
        <h1 style={{ textAlign: "center" }}>Oops! That page can’t be found.</h1>
        <Link to="/" style={{ background: "black", padding: "10px 40px", margin: "1.2rem", color: "white" }}>Go home</Link>
      </div>

    </PageLayout>
  )
}

export default NotFoundPage
