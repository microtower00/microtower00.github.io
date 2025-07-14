import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProjectCard from "../ui/ProjectCard";
import type { Project } from "../../types/frontmatter";

interface LatestProjectsProps {
  excludeId?: string;
}

const LatestProjects: React.FC<LatestProjectsProps> = ({ excludeId }) => {
  const data = useStaticQuery(graphql`
    query LatestProjectsQuery {
      allMdx(
        sort: { frontmatter: { date: DESC } }
        filter: {
          internal: { contentFilePath: { regex: "/content/projects/" } }
          frontmatter: { public: { eq: true } }
        }
        limit: 6
      ) {
        nodes {
          id
          frontmatter {
            title
            date
            slug
            description
            details
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
          }
        }
      }
    }
  `);

  // Filter out the current project and take the top 3
  const projects: Project[] = data.allMdx.nodes
    .filter((p: Project) => p.id !== excludeId)
    .slice(0, 3);

  if (!projects.length) return null;

  return (
    <section className="latest-projects">
      <h2>Latest Projects</h2>
      <div className="latest-projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default LatestProjects;
