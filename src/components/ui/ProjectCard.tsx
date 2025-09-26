import React from "react";
import { Project } from "../../types/frontmatter";
import Card from "./Card";

export interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, compact }) => {
  const imageData =
    typeof project.frontmatter.imageSrc === "object" &&
    project.frontmatter.imageSrc?.childImageSharp
      ? project.frontmatter.imageSrc.childImageSharp.gatsbyImageData
      : { src: project.frontmatter.imageSrc };
  console.log("cardInfo:", project.frontmatter.cardInfo);
  return (
    <Card
      href={project.frontmatter.slug}
      compact={compact}
      imageData={imageData}
      imageAlt={project.frontmatter.imageAlt || ""}
      title={project.frontmatter.title}
      description={project.frontmatter.description}
      details={project.frontmatter.details}
      cardInfo={project.frontmatter.cardInfo}
    />
  );
};

export default ProjectCard;
