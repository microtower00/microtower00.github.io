import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import SiteHeader from "../components/layout/Header";
import LatestProjects from "../components/sections/LatestProjects";
import ProjectFrontmatter from "../components/ui/ProjectFrontmatter";
import { Project } from "../types/frontmatter";
import TagsList from "../components/ui/TagsList";

type ProjectPostProps = {
  data: {
    mdx: Project;
  };
  children?: React.ReactNode;
};

// Define custom components for MDX content
const projectComponents = {
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

export default function ProjectPost({ data, children }: ProjectPostProps) {
  const project = data.mdx;
  const id = project.id;

  return (
    <>
      <SiteHeader variant="button" />
      <main
        className="project-post-style"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <h1>{project.frontmatter.title}</h1>
        <ProjectFrontmatter project={project} />
        <div className="project-post-content">
          <MDXProvider components={projectComponents}>{children}</MDXProvider>
        </div>

        <LatestProjects excludeId={id} />
      </main>
    </>
  );
}

export const query = graphql`
  query ProjectPostById($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date
        description
        details
        slug
        public
        tags
      }
    }
  }
`;
