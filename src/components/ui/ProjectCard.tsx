import React from "react";
import { Project } from "../sections/ProjectsList";

interface ProjectCardProps {
  project: Project;
  title?: string;
  description?: string;
  details?: string;
  image?: string;
  imageAlt?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  title = project.frontmatter.title,
  description = "Sviluppato in collaborazione con Spritz select SRL, ha vinto il premio di fornitura a vita di Select Bitter alla imbriagoni challenge",
  details = "200k ADDITIONAL DETAILS OR NUMBERS",
  image,
  imageAlt = title || "Project image",
}) => (
  <div className="project-card">
    <div className="project-card-image-container">
      <div className="project-card-image">
        {image && (
          <img
            src={image}
            alt={imageAlt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        )}
      </div>
    </div>

    <div className="project-card-content">
      <div className="project-card-title-section">
        <h3 className="project-card-title">{title}</h3>

        <div className="project-card-description">
          <p>{description}</p>
        </div>

        <div className="project-card-details">{details}</div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
