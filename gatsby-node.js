const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`) 
  return graphql(`
  query MyQuery {
    allContentfulArticle(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node { 
          slug
        }
      }
    }
  }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allContentfulArticle.edges.forEach(edge => {
      console.log(edge.node.slug)
      createPage({
        // Path for this page — required
        path: `/blog/${edge.node.slug}`,
        component: blogPostTemplate,
        context: {
          slug: edge.node.slug
        },
      })
    })
  })
}