const path = require("path");
exports.createPages = async function ({ actions, graphql }) {

  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.edges.forEach(edge => {
    const data = edge.node.frontmatter
    actions.createPage({
      path: 'diary/' + slug,
      component: path.resolve(`src/components/DiaryPage/DiaryPage.tsx`),
      context: { slug: data.slug, titleImageRelativePath : 'diary/' + data.folder + '/' +data.titleImageUrl },
    })
  })
}
