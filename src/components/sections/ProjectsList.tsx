import * as React from "react";
import { Link } from "gatsby";
import ProjectCard from "../ui/ProjectCard";

export type Project = {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
  };
};

type ProjectListProps = {
  projects: Project[];
};

//TODO: sistemare sta merda di stile

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
