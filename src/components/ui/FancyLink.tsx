import React from "react";

interface FancyLinkProps {
  children: React.ReactNode;
  href?: string;
  color?: string;
}

const FancyLink: React.FC<FancyLinkProps> = ({
  children,
  href = "#",
  color,
}) => {
  const style = color ? { ["--fancy-link-color" as any]: color } : undefined;
  return (
    <a href={href} className="fancy-link" style={style}>
      {children}
    </a>
  );
};

export default FancyLink;
