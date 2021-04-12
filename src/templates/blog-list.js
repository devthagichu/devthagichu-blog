import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import blogStyles from "./blog.module.scss";
import PageLayout from "../components/page/PageLayout";
import Head from "../components/head/Head";
import Pagetitle from "../components/pagetitle/Pagetitle";
import BlogPostCard from "../components/cards/BlogPostCard";

export const query = graphql`
  query blogPosts($limit: Int!, $skip: Int!) {
    allContentfulArticle(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: createdAt, order: DESC }
      limit: $limit
      skip: $skip
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
`;

const IndexPage = ({ data }) => {
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