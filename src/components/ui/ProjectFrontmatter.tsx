import React from "react";
import { Project } from "../../types/frontmatter";
import TagsList from "./TagsList";
import { Calendar, User, Tag } from "lucide-react";

const ProjectFrontmatter: React.FC<{ project: Project }> = ({ project }) => (
  <div className="project-frontmatter">
    {project.frontmatter.date && (
      <div
        className="project-frontmatter-date"
        style={{ display: "flex", alignItems: "center", gap: 4 }}
      >
        <Calendar size={18} style={{ marginRight: 4 }} />
        {project.frontmatter.date}
      </div>
    )}
    <div
      className="project-frontmatter-author"
      style={{ display: "flex", alignItems: "center", gap: 4 }}
    >
      <User size={18} style={{ marginRight: 4 }} />
      {project.frontmatter.author
        ? project.frontmatter.author
        : "Michele Cazzaro"}
    </div>
    {/* <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <TagsList tags={project.frontmatter.tags!} />
    </div> */}
  </div>
);

export default ProjectFrontmatter;
