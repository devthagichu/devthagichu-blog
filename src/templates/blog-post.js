import * as React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import blogpostStyles from "./blogpost.module.scss";
import PageLayout from "../components/page/PageLayout";
import Head from "../components/head/Head";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

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
    <PageLayout>
      <Head title={data.contentfulArticle.title} />
      <div className={blogpostStyles.container}>
        <br />

        <Img
          fluid={data.contentfulArticle.image.fluid}
          alt={data.contentfulArticle.title}
          className={blogpostStyles.image}
        />
        <h1 className={blogpostStyles.title}>{data.contentfulArticle.title}</h1>
        <p className={blogpostStyles.createdAt}>
          {data.contentfulArticle.createdAt}
        </p>

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

        <div
          style={{
            display: "flex",
            marginTop: "1.2rem",
            marginBottom: "1.2rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Img
            fluid={data.contentfulArticle.author.avator.fluid}
            alt={data.contentfulArticle.author.name}
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              overflow: "hidden",
            }}
          />

          <div style={{ textAlign: "center", marginTop: "1.2rem" }}>
            <h2>{data.contentfulArticle.author.name}</h2>
            <p>{data.contentfulArticle.author.title}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPost;
