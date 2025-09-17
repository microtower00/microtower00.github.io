import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProjectCard, { ProjectCardProps } from "../ui/ProjectCard";
import type { Project } from "../../types/frontmatter";
import FancyLink from "../ui/FancyLink";

interface LatestProjectsProps {
  excludeId?: string;
}

const LatestProjects: React.FC<LatestProjectsProps> = ({ excludeId }) => {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const checkCompact = () => setCompact(window.innerWidth < 1001);
    checkCompact();
    window.addEventListener("resize", checkCompact);
    return () => window.removeEventListener("resize", checkCompact);
  }, []);

  const data = useStaticQuery(graphql`
    query LatestProjectsQuery {
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

  if (!projects.length) return <></>;

  return (
    <section
      className="latest-projects"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "8px 16px",
      }}
    >
      <label
        htmlFor="latest-projects-list"
        className="label"
        style={{
          color: "var(--gray-text-color)",
          fontSize: "16px",
        }}
      >
        Other projects{" "}
      </label>
      <div className="latest-projects-list-container">
        <div className="latest-projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} compact={compact} />
          ))}
        </div>
        <FancyLink href="/#projects" color="var(--green-accent)">
          SEE ALL
        </FancyLink>
      </div>
    </section>
  );
};

export default LatestProjects;
