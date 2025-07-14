import React from "react";

interface FancyLinkProps {
  children: React.ReactNode;
  href?: string;
}

const FancyLink: React.FC<FancyLinkProps> = ({ children, href = "#" }) => {
  return (
    <a href={href} className="fancy-link">
      {children}
    </a>
  );
};

export default FancyLink;
