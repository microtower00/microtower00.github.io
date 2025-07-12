import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Project } from "../../pages";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Extract the processed image data
  const imageData =
    project.frontmatter.imageSrc?.childImageSharp?.gatsbyImageData;
  return (
    <div className="project-card">
      <div className="project-card-image-container">
        <div className="project-card-image">
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
      <div className="project-card-content">
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
    </div>
  );
};

export default ProjectCard;
