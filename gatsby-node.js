const path = require("path");
exports.createPages = async function ({ actions, graphql }) {

  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              folder
              titleImageUrl
            }
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.edges.forEach(edge => {
    const data = edge.node.frontmatter
    const diaryFolderGlob = 'diary/' + data.folder + '/**'
    const slug = data.slug
    actions.createPage({
      path: 'diary/' + data.slug, component: path.resolve(`src/components/DiaryPage/DiaryPage.tsx`),
      context: { slug, diaryFolderGlob },
    })
  })
}
