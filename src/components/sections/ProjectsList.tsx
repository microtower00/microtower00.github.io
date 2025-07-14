import * as React from "react";
import { Link } from "gatsby";
import ProjectCard from "../ui/ProjectCard";
import { Project } from "../../types/frontmatter";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div
      className="projects-list-container"
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <label
        htmlFor="projects-list"
        className="label"
        style={{
          color: "var(--gray-text-color)",
          fontSize: "16px",
          padding: "0 0 0 16px",
        }}
      >
        Projects
      </label>
      <div className="projects-list">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}
