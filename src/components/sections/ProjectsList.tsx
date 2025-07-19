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
      {projects.length === 0 ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: "64px 16px",
            color: "var(--gray-text-color)",
            fontFamily: "VCR OSD Mono, Courier, monospace",
            fontSize: "16px",
            textTransform: "uppercase",
          }}
        >
          Come back to see what I'm cooking!
        </div>
      ) : (
        <div className="projects-list">
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      )}
    </div>
  );
}
