// src/pages/blog.tsx
import * as React from "react";
import { graphql, Link } from "gatsby";

type BlogListProps = {
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

export default function BlogPage({ data }: BlogListProps) {
  const posts = data.allMdx.nodes;

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              to={post.frontmatter.slug}
              className="text-xl text-blue-600 hover:underline"
            >
              {post.frontmatter.title}
            </Link>
            <p className="text-gray-500 text-sm">{post.frontmatter.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const query = graphql`
  query BlogIndexQuery {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { internal: { contentFilePath: { regex: "/content/blog/" } } }
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
