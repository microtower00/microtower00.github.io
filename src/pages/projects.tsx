// src/pages/projects.tsx
import * as React from "react";
import { graphql, Link } from "gatsby";

type ProjectListProps = {
  data: {
    allMdx: {
      nodes: {
        id: string;
        frontmatter: {
          title: string;
          date: string;
          slug: string;
        };
      }[];
    };
  };
};

export default function ProjectsPage({ data }: ProjectListProps) {
  const projects = data.allMdx.nodes;

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              to={project.frontmatter.slug}
              className="text-xl text-blue-600 hover:underline"
            >
              {project.frontmatter.title}
            </Link>
            <p className="text-gray-500 text-sm">{project.frontmatter.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const query = graphql`
  query ProjectsIndexQuery {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { internal: { contentFilePath: { regex: "/content/projects/" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
        }
      }
    }
  }
`;
