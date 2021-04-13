import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import blogStyles from "./blog.module.scss";
import Pagetitle from "../components/pagetitle/Pagetitle";
import BlogPostCard from "../components/cards/BlogPostCard";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulArticle(
        filter: { node_locale: { eq: "en-US" } }
        sort: { fields: createdAt }
      ) {
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
  `);

  return (
    <>
      {/* <Head title="Blog" /> */}
      <Pagetitle title="Latest Posts" />
      <div className={blogStyles.card__container}>
        {data.allContentfulArticle.edges.map((edge) => (
          <BlogPostCard key={edge.node.id} post={edge.node} />
        ))}
      </div>
    </>
  );
};

export default IndexPage;
