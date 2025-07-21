import * as React from "react";
import { Link } from "gatsby";
import ProjectCard from "../ui/ProjectCard";
import Card, { CardProps } from "../ui/Card";
import { Project } from "../../types/frontmatter";
import mockProjects from "../../content/projects/mock-projects.json";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  const hasReal = projects.length > 0;
  const hasMock = (mockProjects as CardProps[]).length > 0;

  return (
    <div
      id="projects"
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
      {!(hasReal || hasMock) ? (
        <div className="projects-list-empty">
          Come back to see what I'm cooking!
        </div>
      ) : (
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {(mockProjects as CardProps[]).map((mock, i) => (
            <Card key={i} {...mock} />
          ))}
        </div>
      )}
    </div>
  );
}
