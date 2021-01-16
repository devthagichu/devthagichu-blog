import * as React from "react"
import {useStaticQuery,graphql,Link} from "gatsby"
import Img from "gatsby-image"
import blogStyles from './blog.module.scss'
import PageLayout from "../components/page/PageLayout"

const IndexPage = () => {

const data = useStaticQuery(graphql`
  query MyQuery {
  allContentfulArticle(filter: {node_locale: {eq: "en-US"}}) {
    edges {
      node {
        title
        createdAt(formatString: "Do MMMM YYYY")
        slug
        id
         image {
          fluid {
            src
            base64
            sizes
          }
        }
      }
    }
  }
}
`)


  return (
 
    <PageLayout>
        <div className={blogStyles.container}>
            {
            data.allContentfulArticle.edges.map(edge=>(<div   key={edge.node.id}>
                <Link to={`/blog/${edge.node.slug}`}>
                <Img fluid={edge.node.image.fluid} alt={edge.node.title} style={{height:200,width:"100%"}}/>
                <h1>{edge.node.title}</h1>
                </Link>
                <p>{edge.node.createdAt}</p>
            </div>))
            }
        </div>
    </PageLayout>
 
  )
}

export default IndexPage