import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import BlogFrontmatter from "../components/ui/BlogFrontmatter";
import PostLayout from "../components/ui/PostLayout";

const blogComponents = {
  h1: (props: any) => <h1 className="hedingL" {...props} />,
  h2: (props: any) => <h2 className="hedingL" {...props} />,
  h3: (props: any) => <h3 className="headingM" {...props} />,
  h4: (props: any) => <h4 className="headingM" {...props} />,
  p: (props: any) => <p className="bodyBlog" {...props} />,
  ul: (props: any) => (
    <ul
      className="bodyBlog"
      style={{ lineHeight: 1.7, margin: "1.2rem 0" }}
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="bodyBlog"
      style={{ lineHeight: 1.7, margin: "1.2rem 0" }}
      {...props}
    />
  ),
  li: (props: any) => <li style={{ margin: "0.5rem 0" }} {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="bodyM"
      style={{
        borderLeft: "4px solid var(--accent-color)",
        paddingLeft: "1rem",
        margin: "1.5rem 0",
        fontStyle: "italic",
      }}
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      style={{
        backgroundColor: "var(--border-dark-gray)",
        padding: "0.2rem 0.4rem",
        borderRadius: "4px",
        fontFamily: "Courier New, Courier, monospace",
      }}
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      style={{
        backgroundColor: "var(--border-dark-gray)",
        padding: "1rem",
        borderRadius: "8px",
        overflowX: "auto",
        margin: "1.5rem 0",
      }}
      {...props}
    />
  ),
};

export default function BlogPostTemplate({ data, children }: any) {
  const blog = data.mdx;
  const { title } = blog.frontmatter;

  return (
    <PostLayout
      title={title}
      meta={<BlogFrontmatter frontmatter={blog.frontmatter} />}
    >
      <MDXProvider components={blogComponents}>{children}</MDXProvider>
    </PostLayout>
  );
}

export const query = graphql`
  query BlogPostById($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        author
        tags
      }
    }
  }
`;
