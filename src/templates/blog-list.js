import * as React from "react";
import { graphql, Link } from "gatsby";
import blogStyles from "./blog.module.scss";
import PageLayout from "../components/page/PageLayout";
// import Head from "../components/head/Head";
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

const IndexPage = ({ data, pageContext }) => {
  const { currentPage, isLastPage, isFirstPage } = pageContext;
  return (
    <PageLayout>
      {/* <Head title="Blog" /> */}
      <Pagetitle title="Latest Posts" />
      <div className={blogStyles.card__container}>
        {data.allContentfulArticle.edges.map((edge) => (
          <BlogPostCard key={edge.node.id} post={edge.node} />
        ))}
      </div>
      <div className={blogStyles.pagination}>
        {isFirstPage ? (
          <div />
        ) : (
          <Link
            to={`/blog/page/${currentPage - 1}`}
            className={blogStyles.pagination__link__new}
          >
            Previous Page
          </Link>
        )}
        {isLastPage ? (
          <div />
        ) : (
          <Link
            to={`/blog/page/${currentPage + 1}`}
            className={blogStyles.pagination__link__old}
          >
            Next Page
          </Link>
        )}
      </div>
    </PageLayout>
  );
};

export default IndexPage;
