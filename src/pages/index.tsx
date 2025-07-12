import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import ProjectList from "../components/sections/ProjectsList";
import { graphql } from "gatsby";
import HeroSection from "../components/sections/HeroSection";

export type Project = {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
  };
};

type HomeProjectsQueryData = {
  allMdx: {
    nodes: Project[];
  };
};

const IndexPage: React.FC<PageProps<HomeProjectsQueryData>> = ({ data }) => {
  return (
    <>
      <main className="main" style={{}}>
        <HeroSection />
        <ProjectList projects={data.allMdx.nodes} />{" "}
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Michele Cazzaro</title>;

export const query = graphql`
  query HomeProjectsQuery {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: {
        internal: { contentFilePath: { regex: "/content/projects/" } }
        frontmatter: { public: { ne: false } }
      }
      limit: 3
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          slug
          public
        }
      }
    }
  }
`;
