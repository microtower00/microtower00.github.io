import React from "react";
import { Project } from "../../types/frontmatter";
import TagsList from "./TagsList";

const ProjectFrontmatter: React.FC<{ project: Project }> = ({ project }) => (
  <div className="project-frontmatter" style={{ border: "3px solid red" }}>
    {project.frontmatter.date && <div>{project.frontmatter.date}</div>}
    <div>
      {project.frontmatter.author
        ? project.frontmatter.author
        : "Michele Cazzaro"}
    </div>
    <TagsList tags={project.frontmatter.tags!} />
  </div>
);

export default ProjectFrontmatter;
