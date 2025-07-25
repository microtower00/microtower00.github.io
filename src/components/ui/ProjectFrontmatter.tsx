import React from "react";
import { Project } from "../../types/frontmatter";
import MetaInfoDisplay from "./MetaInfoDisplay";

const ProjectFrontmatter: React.FC<{ project: Project }> = ({ project }) => (
  <MetaInfoDisplay
    date={project.frontmatter.date}
    author={project.frontmatter.author || "Michele Cazzaro"}
    tags={project.frontmatter.tags}
  />
);

export default ProjectFrontmatter;
