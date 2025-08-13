import React from "react";

interface FancyLinkProps {
  children: React.ReactNode;
  href?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const FancyLink: React.FC<FancyLinkProps> = ({
  children,
  href = "#",
  color,
  onClick,
}) => {
  const style = color ? { ["--fancy-link-color" as any]: color } : undefined;
  return (
    <a href={href} className="fancy-link" style={style} onClick={onClick}>
      {children}
    </a>
  );
};

export default FancyLink;
