import * as React from "react"
import {graphql,Link} from "gatsby"
import Img from "gatsby-image"
import PageLayout from "../components/page/PageLayout"


export const query = graphql`
query($slug:String!) {
  contentfulArticle(slug: {eq: $slug}) {
    title
    createdAt
    image {
      fluid {
        src
        base64
        sizes
      }
    }
  }
}
`

const BlogPost = ({data}) => {
  return (
      <PageLayout>
         <div>
             <Link to="/blog">Back to Blog</Link>
             <br />
             <br />
             
                <Img fluid={data.contentfulArticle.image.fluid} alt={data.contentfulArticle.title} style={{height:400,width:"100%"}}/>
                <h1>{data.contentfulArticle.title}</h1>
               
                <p>{data.contentfulArticle.createdAt}</p>
         </div>
      </PageLayout>
  )
}

export default BlogPost