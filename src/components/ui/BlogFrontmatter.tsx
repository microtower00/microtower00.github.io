import React from "react";
import MetaInfoDisplay from "./MetaInfoDisplay";

interface BlogFrontmatterProps {
  frontmatter: {
    date?: string;
    author?: string;
    tags?: string[];
  };
}

const BlogFrontmatter: React.FC<BlogFrontmatterProps> = ({ frontmatter }) => (
  <MetaInfoDisplay
    date={frontmatter.date}
    author={frontmatter.author}
    tags={frontmatter.tags}
  />
);

export default BlogFrontmatter;
