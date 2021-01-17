import * as React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import blogpostStyles from "./blogpost.module.scss"
import PageLayout from "../components/page/PageLayout"
import Head from "../components/head/Head"


export const query = graphql`
query($slug:String!) {
  contentfulArticle(slug: {eq: $slug}) {
    title
    createdAt(formatString: "Do MMMM YYYY")
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
          
             <br />
             
                <Img fluid={data.contentfulArticle.image.fluid} alt={data.contentfulArticle.title}
                className={blogpostStyles.image}
                />
                <h1 className={blogpostStyles.title}>{data.contentfulArticle.title}</h1>
                               <p className={blogpostStyles.createdAt}>{data.contentfulArticle.createdAt}</p>
                               <div>

                               {data.contentfulArticle.category.map(
                                 item =>(
                                   <div key={item.id} className={blogpostStyles.category}>
                                    <span className={blogpostStyles.category__title}>
                                      {item.title}
                                    </span>
                                    </div>
                                   )
                                   )}
                                   </div>

                              
         </div>
      </PageLayout>
  )
}

export default BlogPost