import * as React from "react";
import HeroStyles from "./hero.module.scss";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";

const HeroBlog = () => {
  const data = useStaticQuery(graphql`
    query FeaturedArticles {
      allContentfulArticle(limit: 3) {
        edges {
          node {
            title
            id
            slug
            createdAt(formatString: "Do MMMM YYYY")
            image {
              fluid {
                src
                base64
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className={HeroStyles.container}>
      {data.allContentfulArticle.edges.map((edge) => (
        <div key={edge.node.id} className={HeroStyles.card_container}>
          <Link to={`/blog/${edge.node.slug}`}>
            <Img
              fluid={edge.node.image.fluid}
              alt={edge.node.title}
              style={{ height: "70vh" }}
            />
            <div className={HeroStyles.overlay} />
            <div className={HeroStyles.card_content}>
              <h3 className={HeroStyles.card_title}>{edge.node.title}</h3>
              <p className={HeroStyles.card__date}>{edge.node.createdAt}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeroBlog;
