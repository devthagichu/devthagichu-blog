import * as React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import blogCardStyles from "./blogpostcard.module.scss";

const BlogPostCard = ({ post }) => {
  return (
    <div className={blogCardStyles.card}>
      <Link to={`/blog/${post.slug}`}>
        <Img
          fluid={post.image.fluid}
          alt={post.title}
          className={blogCardStyles.card__image}
        />
        <div className={blogCardStyles.card__date__container}>
          <p className={blogCardStyles.card__date}>{post.createdAt}</p>
          {post.category.map((item) => (
            <div key={item.id}>
              <span className={blogCardStyles.card__link}>{item.title}</span>
            </div>
          ))}
        </div>

        <h1 className={[blogCardStyles.card__title, "display"]}>
          {post.title}
        </h1>
        <p className={blogCardStyles.card__body}>
          Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <span className={blogCardStyles.card__category}>Read More</span>
      </Link>
    </div>
  );
};

export default BlogPostCard;
