import * as React from "react"
import {useStaticQuery,graphql,Link} from "gatsby"
import Img from "gatsby-image"
import blogStyles from './blog.module.scss'
import PageLayout from "../components/page/PageLayout"
import Head from "../components/head/Head"

const IndexPage = () => {

const data = useStaticQuery(graphql`
  query MyQuery {
  allContentfulArticle(filter: {node_locale: {eq: "en-US"}}) {
    edges {
      node {
        title
        category {
          title
          id
        }
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
      <Head title="Blog" />
        <div className={blogStyles.card__container}>
            {
            data.allContentfulArticle.edges.map(edge=>(<div   key={edge.node.id} className={blogStyles.card__content}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <div className={blogStyles.card__image__container}>
                    {
                      edge.node.category.map(item =>(
                        <div key={item.id} className={blogStyles.card__category}>
                          <span className={blogStyles.card__category__title}>
                            {item.title}
                          </span>
                          </div>
                      ))
                    }
                <Img fluid={edge.node.image.fluid} alt={edge.node.title} className={blogStyles.card__image}/>
                </div>
                <h3 className={blogStyles.card__title}>{edge.node.title}</h3>
                </Link>
                <p className={blogStyles.card__date}>{edge.node.createdAt}</p>
                <p className={blogStyles.card__body}>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
            </div>))
            }
        </div>
    </PageLayout>
 
  )
}

export default IndexPage