import React from "react";
import { Calendar, User, Tag } from "lucide-react";
import TagsList from "./TagsList";

interface MetaInfoDisplayProps {
  date?: string;
  author?: string;
  tags?: string[];
}

const MetaInfoDisplay: React.FC<MetaInfoDisplayProps> = ({
  date,
  author,
  tags,
}) => (
  <div className="project-frontmatter">
    {date && (
      <div
        className="project-frontmatter-date"
        style={{ display: "flex", alignItems: "center", gap: 4 }}
      >
        <Calendar size={18} style={{ marginRight: 4 }} />
        {date}
      </div>
    )}
    {author && (
      <div
        className="project-frontmatter-author"
        style={{ display: "flex", alignItems: "center", gap: 4 }}
      >
        <User size={18} style={{ marginRight: 4 }} />
        {author}
      </div>
    )}
    {tags && tags.length > 0 && (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        <TagsList tags={tags} />
      </div>
    )}
  </div>
);

export default MetaInfoDisplay;
