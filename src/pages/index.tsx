import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import ProjectList from "../components/sections/ProjectsList";
import { graphql } from "gatsby";
import HeroSection from "../components/sections/HeroSection";
import { HomeProjectsQueryData } from "../types/frontmatter";

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
        frontmatter: { public: { eq: true } }
      }
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          slug
          public
          description
          date
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
