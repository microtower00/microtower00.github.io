import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import ProjectList from "../components/sections/ProjectsList";
import { graphql } from "gatsby";
import HeroSection from "../components/sections/HeroSection";

interface ProjectFrontmatter {
  title: string;
  date: string;
  slug: string;
  public: boolean;
  description: string;
  imageSrc?: {
    childImageSharp?: {
      gatsbyImageData: any;
    };
  };
  imageAlt?: string;
  details: string;
}

export interface Project {
  id: string;
  frontmatter: ProjectFrontmatter;
}

type HomeProjectsQueryData = {
  allMdx: {
    nodes: Project[];
  };
};

const IndexPage: React.FC<PageProps<HomeProjectsQueryData>> = ({ data }) => {
  console.log(data.allMdx.nodes[1].frontmatter);
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
          description
          imageSrc {
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 300
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          imageAlt
          details
        }
      }
    }
  }
`;
