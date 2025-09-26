import React from "react";
import { Project } from "../../types/frontmatter";
import MetaInfoDisplay from "./MetaInfoDisplay";

const ProjectFrontmatter: React.FC<{ project: Project }> = ({ project }) => {
  const wordCount = project.body?.split(/\s+/).filter(Boolean).length ?? 0;
  const readTime = Math.ceil(wordCount / 200).toString();

  return (
    <MetaInfoDisplay
      date={project.frontmatter.date}
      author={project.frontmatter.author || "Michele Cazzaro"}
      readTime={readTime}
      // tags={project.frontmatter.tags}
    />
  );
};

export default ProjectFrontmatter;
