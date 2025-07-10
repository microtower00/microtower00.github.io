import * as React from "react";
import { Link } from "gatsby";

type Project = {
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
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div
    data-property-1="Default"
    style={{
      width: "100%",
      height: "100%",
      maxWidth: "376px",
      // maxHeight: "350px",
      overflow: "hidden",
      borderRadius: "16px",
      outline: "1px #262626 solid",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }}
  >
    <div
      style={{
        alignSelf: "stretch",
        padding: "8px",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "10px",
        display: "flex",
      }}
    >
      <div
        className="projectCardImage"
        style={{
          alignSelf: "stretch",
          height: "200px",
          padding: "10px",
          background: "#4B4B4B",
          borderRadius: "8px",
          border: "1px #262626 solid",
        }}
      ></div>
    </div>
    <div
      className="projectCardContent"
      style={{
        alignSelf: "stretch",
        padding: "16px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        display: "flex",
      }}
    >
      <div
        className="projectCardTitle"
        style={{
          alignSelf: "stretch",
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "32px",
          display: "flex",
        }}
      >
        <h3
          style={{
            color: "#C738FF",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "130%",
            wordWrap: "break-word",
            maxHeight: "32px",
            maxWidth: "100%",
            //add ellipsiss
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {project.frontmatter.title}
        </h3>

        <div
          style={{
            alignSelf: "stretch",
            width: "100%",
            color: "white",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "130%",
            wordWrap: "break-word",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2, // Change this number for more or fewer lines
          }}
        >
          Sviluppato in collaborazione con Spritz select SRL, ha vinto il premio
          di fornitura a vita di Select Bitter alla imbriagoni challenge
        </div>
        <div
          style={{
            color: "#9C9C9C", //TODO: codificare variabile
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "12px",
            wordWrap: "break-word",
          }}
        >
          200k ADDITIONAL DETAILS OR NUMBERS
        </div>
      </div>
    </div>
  </div>
);

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        maxWidth: "1160px",
        gap: "16px",
        justifyContent: "center",
      }}
    >
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
