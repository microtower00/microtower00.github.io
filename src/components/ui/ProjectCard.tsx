import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Project } from "../../types/frontmatter";

export interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, compact }) => {
  const imageData =
    typeof project.frontmatter.imageSrc === "object" &&
    project.frontmatter.imageSrc?.childImageSharp
      ? project.frontmatter.imageSrc.childImageSharp.gatsbyImageData
      : undefined;
  return (
    <a
      href={project.frontmatter.slug}
      className={compact ? "project-card-compact" : "project-card"}
    >
      <div
        className={
          compact
            ? "project-card-compact-image-container"
            : "project-card-image-container"
        }
      >
        <div
          className={
            compact ? "project-card-compact-image" : "project-card-image"
          }
        >
          {imageData ? (
            <GatsbyImage
              image={imageData}
              alt={project.frontmatter.imageAlt || ""}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#4b4b4b",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
              }}
            >
              No Image
            </div>
          )}
        </div>
      </div>
      <div
        className={
          compact ? "project-card-compact-content" : "project-card-content"
        }
      >
        <div className="project-card-title-desc">
          <h3 className="project-card-title">{project.frontmatter.title}</h3>
          <div className="project-card-description">
            <p>{project.frontmatter.description}</p>
          </div>
        </div>
        <p className="project-card-details label">
          {project.frontmatter.details}&nbsp;
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
