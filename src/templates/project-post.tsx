import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { useEffect } from "react";
import LatestProjects from "../components/sections/LatestProjects";
import ProjectFrontmatter from "../components/ui/ProjectFrontmatter";
import { Project } from "../types/frontmatter";
import Footer from "../components/layout/Footer";
import PostLayout from "../components/ui/PostLayout";
import FoldableHeading, {
  FoldableHeadingProps,
} from "../components/mdx/FoldableHeading";

const projectComponents = {
  h1: (props: any) => <h1 className="blogHeadingL" {...props} />,
  h2: (props: any) => <h2 className="blogHeadingL" {...props} />,
  h3: (props: any) => <h3 className="blogHeadingM" {...props} />,
  h4: (props: any) => <h4 className="blogHeadingS" {...props} />,
  p: (props: any) => <p className="bodyBlog" {...props} />,
  ul: (props: any) => <ul className="bodyBlog blogList" {...props} />,
  ol: (props: any) => (
    <ol
      className="bodyBlog blogList"
      style={{ lineHeight: 1.7, margin: "1.2rem 0" }}
      {...props}
    />
  ),
  li: (props: any) => <li className="blogListItem" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="blogBlockquote" {...props} />
  ),
  code: (props: any) => (
    <code
      className="blogInlineCode"
      style={{
        fontFamily: "Courier New, Courier, monospace",
      }}
      {...props}
    />
  ),
  pre: (props: any) => <pre className="blogCodeBlock" {...props} />,
  a: (props: any) => (
    <a
      className="blogLink"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  FoldableHeading: (props: FoldableHeadingProps) => (
    <FoldableHeading {...props} />
  ),
};

type ProjectPostProps = {
  data: {
    mdx: Project;
  };
  children?: React.ReactNode;
};

export default function ProjectPost({ data, children }: ProjectPostProps) {
  const project = data.mdx;
  const id = project.id;
  const { title, description } = project.frontmatter;

  useEffect(() => {
    document.title = `${title} - Michele Cazzaro's homepage`;
  }, [title]);

  return (
    <>
      <PostLayout title={title} meta={<ProjectFrontmatter project={project} />}>
        <MDXProvider components={projectComponents}>{children}</MDXProvider>
      </PostLayout>
      <LatestProjects excludeId={id} />
      <Footer />
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
