const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const blogListTemplate = path.resolve(`src/templates/blog-list.js`);
  return graphql(
    `
      query MyQuery {
        allContentfulArticle(filter: { node_locale: { eq: "en-US" } }) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    result.data.allContentfulArticle.edges.forEach((edge) => {
      console.log(edge.node.slug);
      createPage({
        // Path for this page — required
        path: `/blog/${edge.node.slug}`,
        component: blogPostTemplate,
        context: {
          slug: edge.node.slug,
        },
      });
    });

    // create pages
    const postsPerPage = 6;
    const totalPosts = Math.ceil(result.data.allContentfulArticle.edges.length);
    const numberOfPages = Math.ceil(totalPosts / postsPerPage);

    Array.from({ length: numberOfPages }).forEach((_, idx) => {
      const isFirstPage = idx === 0;
      const currentPage = idx + 1;
      const isLastPage = currentPage === numberOfPages;

      // if (isFirstPage) return;
      console.log(`/blog/page/${currentPage}`);
      createPage({
        // Path for this page — required
        path: `/blog/page/${currentPage}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: idx * postsPerPage,
          currentPage,
          isLastPage,
          isFirstPage,
        },
      });
    });
  });
};
