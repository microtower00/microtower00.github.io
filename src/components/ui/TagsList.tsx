import React from "react";

interface TagsListProps {
  tags: string[];
  className?: string;
}

const TagsList: React.FC<TagsListProps> = ({ tags, className }) => {
  if (!tags || tags.length === 0) return null;
  return (
    <ul style={{ border: "3px solid red" }}>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
};

export default TagsList;
