import * as React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import blogpostStyles from "./blogpost.module.scss";
import PageLayout from "../components/page/PageLayout";
import Head from "../components/head/Head";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import BlogPostCard from "../components/cards/BlogPostCard";

export const query = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      createdAt(formatString: "Do MMMM YYYY")
      image {
        fluid {
          src
          base64
          sizes
        }
        createdAt
      }
      body {
        raw
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
      category {
        title
        id
      }
      relatedPosts {
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
`;
let options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      console.log(node);
      return `<img class='custom-asset' src=""/>`;
    },
  },
};

const BlogPost = ({ data }) => {
  return (
    <>
      <div className={blogpostStyles.header}>
        <Img
          fluid={data.contentfulArticle.image.fluid}
          alt={data.contentfulArticle.title}
          className={blogpostStyles.header__image}
        />
        <div className={blogpostStyles.header__overlay}></div>
        <div className={blogpostStyles.header__content}>
          <h1 className={blogpostStyles.header__title}>
            {data.contentfulArticle.title}
          </h1>
          <p className={blogpostStyles.createdAt}>
            {data.contentfulArticle.createdAt}
          </p>
          {data.contentfulArticle.category.map((item) => (
            <div key={item.id}>
              <span className={blogpostStyles.card__category}>
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <PageLayout>
        <Head title={data.contentfulArticle.title} />
        <div className={blogpostStyles.container}>
          <br />

          {/* {data.contentfulArticle.category.map(
            item => (
              <div key={item.id} className={blogpostStyles.category}>
                <span className={blogpostStyles.category__title}>
                  {item.title}
                </span>
              </div>
            )
          )} */}

          <div className={blogpostStyles.body}>
            {renderRichText(data.contentfulArticle.body, options)}
          </div>
        </div>
        {data.contentfulArticle.relatedPosts && <h1>Related Posts</h1>}
        <br />
        <br />
        <br />

        <div className={blogpostStyles.card__container}>
          {data.contentfulArticle.relatedPosts &&
            data.contentfulArticle.relatedPosts.map((edge) => (
              <BlogPostCard key={edge.id} post={edge} />
            ))}
        </div>
      </PageLayout>
    </>
  );
};

export default BlogPost;
