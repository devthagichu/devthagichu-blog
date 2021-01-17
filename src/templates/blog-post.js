import * as React from "react"
import {graphql,Link} from "gatsby"
import Img from "gatsby-image"

import PageLayout from "../components/page/PageLayout"
import Head from "../components/head/Head"


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
    category {
      title
      id
    }
  }
}
`

const BlogPost = ({data}) => {

 
  return (
      <PageLayout>
        <Head title={data.contentfulArticle.title} />
         <div>
             <Link to="/blog">Back to Blog</Link>
             <br />
             <br />
             
                <Img fluid={data.contentfulArticle.image.fluid} alt={data.contentfulArticle.title} style={{height:400,width:"100%"}}/>
                <h1>{data.contentfulArticle.title}</h1>
                               <p>{data.contentfulArticle.createdAt}</p>
                               {data.contentfulArticle.category.map(
                                   item =>(
                                       <h4 key={item.id}>{item.title}</h4>
                                   )
                               )}

                              
         </div>
      </PageLayout>
  )
}

export default BlogPost