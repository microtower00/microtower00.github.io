import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import ProjectList from "../components/sections/ProjectsList";
import { graphql } from "gatsby";
import HeroSection from "../components/sections/HeroSection";
import { HomeProjectsQueryData } from "../types/frontmatter";
import Footer from "../components/layout/Footer";
import TimelineWrapper from "../components/TimelineWrapper";

const IndexPage: React.FC<PageProps<HomeProjectsQueryData>> = ({ data }) => {
  return (
    <>
      <main className="main" style={{}}>
        <HeroSection />
        <TimelineWrapper />
        <ProjectList projects={data.allMdx.nodes} />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Michele Cazzaro's homepage</title>;

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
                height: 250
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                transformOptions: { fit: COVER, cropFocus: CENTER }
              )
            }
          }
          imageAlt
          details
          cardInfo
        }
      }
    }
  }
`;
