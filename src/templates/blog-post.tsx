// src/templates/blog-post.tsx
import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
// import { MDXRenderer } from "gatsby-plugin-mdx"

type BlogPostProps = {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
      };
      body: string;
    };
  };
};

const blogComponents = {
  h1: (props: any) => (
    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }} {...props} />
  ),
  p: (props: any) => (
    <p style={{ lineHeight: 1.7, margin: "1.2rem 0" }} {...props} />
  ),
};

export default function BlogPostTemplate({ data }: BlogPostProps) {
  const { title, date } = data.mdx.frontmatter;

  return (
    <main
      className="blog-post-style"
      style={{ maxWidth: "680px", margin: "0 auto", padding: "2rem" }}
    >
      <h1>{title}</h1>
      <p style={{ color: "#666", fontSize: "0.9rem" }}>{date}</p>
      <MDXProvider components={blogComponents}>
        {data.mdx.body}
        {/* <MDXRenderer>{data.mdx.body}</MDXRenderer> */}
      </MDXProvider>
    </main>
  );
}

export const query = graphql`
  query BlogPostById($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;
