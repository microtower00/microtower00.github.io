import * as React from "react";
import { graphql } from "gatsby";

type ProjectPostProps = {
  data: {
    mdx: {
      frontmatter: { title: string; slug: string };
      body: string;
    };
  };
};

const components = {
  // add any custom MDX components here
};

export default function ProjectPost({ data }: ProjectPostProps) {
  const { frontmatter, body } = data.mdx;

  return (
    <main style={{ maxWidth: 680, margin: "auto", padding: "2rem" }}>
      <h1>{frontmatter.title}</h1>
      <pre>{body}</pre>
      {/* <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider> */}
    </main>
  );
}

export const query = graphql`
  query ProjectPostById($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
      }
      body
    }
  }
`;
