import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Header from "../components/layout/Header";

type BlogPostProps = {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
      };
      body: string;
      // For Gatsby v5 with newer MDX
      children?: React.ReactNode;
    };
  };
  children?: React.ReactNode; // For Gatsby v5
};

const blogComponents = {
  h1: (props: any) => (
    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }} {...props} />
  ),
  p: (props: any) => (
    <p style={{ lineHeight: 1.7, margin: "1.2rem 0" }} {...props} />
  ),
};

export default function BlogPostTemplate({ data, children }: BlogPostProps) {
  const { title, date } = data.mdx.frontmatter;

  return (
    <>
      <Header />
      <main
        className="blog-post-style"
        style={{ maxWidth: "680px", margin: "0 auto", padding: "2rem" }}
      >
        <h1>{title}</h1>
        <p style={{ color: "#666", fontSize: "0.9rem" }}>{date}</p>
        <MDXProvider components={blogComponents}>
          {/* For Gatsby v5+ - MDX content comes as children */}
          {children}
        </MDXProvider>
      </main>
    </>
  );
}

export const query = graphql`
  query BlogPostById($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
