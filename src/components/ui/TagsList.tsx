import { Tag } from "lucide-react";
import React from "react";

interface TagsListProps {
  tags: string[];
  className?: string;
}

const TagsList: React.FC<TagsListProps> = ({ tags, className }) => {
  if (!tags || tags.length === 0) return null;
  return (
    <ul className="project-tags">
      <label
        htmlFor="tags-list"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Tag size={18} style={{ marginRight: 4 }} />
        <p
          className="label"
          style={{
            margin: 0,
            fontSize: "16px",
          }}
        >
          Tags:
        </p>
      </label>
      <div className="tags-list" id="tags-list">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </div>
    </ul>
  );
};

export default TagsList;
