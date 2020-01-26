import React from "react"

import Layout from "../components/layout"

const Blog = ({ data }) => {
  const blog = data.allMarkdownRemark.edges.map(edges => edges.node)

  return (
    <Layout>
      <h1>Blog</h1>

      <ul>
        {blog.map(post => (
          <li key={post.frontmatter.title}>
            <h2>{post.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <br />
            <a href="/blog/asanicyapadung">Read more</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`
