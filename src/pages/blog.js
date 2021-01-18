import * as React from "react"
import {useStaticQuery,graphql,Link} from "gatsby"
import Img from "gatsby-image"
import blogStyles from './blog.module.scss'
import PageLayout from "../components/page/PageLayout"
import Head from "../components/head/Head"

const IndexPage = () => {

const data = useStaticQuery(graphql`
query MyQuery {
  allContentfulArticle(filter: {node_locale: {eq: "en-US"}}, sort: {fields: createdAt}) {
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
        author {
          id
          name
          twitter
          title
          avator {
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
                <p className={blogStyles.card__date}>{edge.node.createdAt}</p>
                <h3 className={blogStyles.card__title}>{edge.node.title}</h3>
                </Link>
                <div style={{display:"flex", marginTop:"1.2rem", marginBottom:"1.2rem"}}>
                  <div style={{marginRight:12}}>
                  <Img fluid={edge.node.author.avator.fluid} alt={edge.node.author.name} style={{width:38, height:38}}/>
                  </div>
                  <div>
                    <h4>{edge.node.author.name}</h4>
                    <h5>{edge.node.author.title}</h5>
                  </div>
                </div>
                <p className={blogStyles.card__body}>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
            </div>))
            }
        </div>
    </PageLayout>
 
  )
}

export default IndexPage