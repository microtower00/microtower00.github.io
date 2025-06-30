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
        tags?: string[];
      };
      body: string;
      children?: React.ReactNode;
    };
  };
  children?: React.ReactNode;
};

const blogComponents = {
  // h1: (props: any) => (
  //   <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }} {...props} />
  // ),
  p: (props: any) => (
    <p style={{ lineHeight: 1.7, margin: "1.2rem 0" }} {...props} />
  ),
};

export default function BlogPostTemplate({ data, children }: BlogPostProps) {
  const { title, date, tags } = data.mdx.frontmatter;

  return (
    <>
      <Header />
      <main
        className="blog-post-style"
        style={{ maxWidth: "680px", margin: "0 auto", padding: "2rem" }}
      >
        <h1>{title}</h1>
        <p style={{ color: "#666", fontSize: "0.9rem" }}>{date}</p>
        {tags && tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-2 mb-6 text-sm text-blue-700">
            {tags.map((tag) => (
              <li key={tag} className="bg-blue-100 px-2 py-1 rounded">
                {tag}
              </li>
            ))}
          </ul>
        )}
        <MDXProvider components={blogComponents}>{children}</MDXProvider>
      </main>
    </>
  );
}

export const query = graphql`
  query BlogPostById($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;
