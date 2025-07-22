import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ExternalLink } from "lucide-react";

export interface CardProps {
  href?: string;
  compact?: boolean;
  imageData?: any;
  imageAlt?: string;
  title: string;
  description?: string;
  details?: string;
  isMock?: boolean;
}

function isExternalHref(href?: string): boolean {
  if (!href) return false;
  try {
    const url = new URL(href, window.location.origin);
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}

const Card: React.FC<CardProps> = ({
  href,
  compact = false,
  imageData,
  imageAlt = "",
  title,
  description,
  details,
  isMock = false,
}) => {
  const isExternal = isExternalHref(href);
  const cardClass =
    (compact ? "project-card-compact" : "project-card") +
    (isMock ? " mock-card" : "");

  const content = (
    <>
      <div
        className={
          compact
            ? "project-card-compact-image-container"
            : "project-card-image-container"
        }
      >
        <div
          className={
            compact ? "project-card-compact-image" : "project-card-image"
          }
        >
          {imageData && imageData.src ? (
            <img
              src={imageData.src}
              alt={imageAlt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          ) : imageData ? (
            <GatsbyImage
              image={imageData}
              alt={imageAlt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#4b4b4b",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
              }}
            >
              No Image
            </div>
          )}
        </div>
      </div>
      <div
        className={
          compact ? "project-card-compact-content" : "project-card-content"
        }
      >
        <div className="project-card-title-desc">
          <div className="titleWrapper">
            <h3 className="project-card-title">{title} </h3>
            {isExternal && <ExternalLink size={16} />}
          </div>
          <div className="project-card-description">
            <p>{description}</p>
          </div>
        </div>
        <p className="project-card-details label">{details}&nbsp;</p>
      </div>
    </>
  );

  if (!href) {
    return (
      <div className={`${cardClass} card-no-link`} tabIndex={0}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      className={cardClass + (isExternal ? " card-external-link" : "")}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
};

export default Card;
