import React, { Component } from 'react';
import Link from 'gatsby-link';

export default class PostIndex extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  render() {

    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <ul>
      {posts.map(post =>
          <li key={post.node.fields.slug}>
            <span>
              {post.node.frontmatter.date}
            </span>
            <Link to={post.node.fields.slug} className="link-underline">
              {post.node.frontmatter.title}
            </Link>
          </li>
          )}
      </ul>
    );
  }
}


export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
