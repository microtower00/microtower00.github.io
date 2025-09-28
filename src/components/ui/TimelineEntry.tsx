import React from "react";

interface TimelineEntryProps {
  latest?: boolean;
  icon: React.ReactNode;
  company: string;
  startEnd: string;
  href?: string;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({
  latest,
  icon,
  company,
  startEnd,
  href,
}) => {
  return (
    <div className="timeline-entry">
      <div className={`timeline-line-container ${latest ? "latest" : ""}`}>
        {latest && <div className="timeline-before-element" />}
        <div
          className={`timeline-circle ${
            latest ? "timeline-circle-latest" : ""
          }`}
        />
        <div
          className={`timeline-line ${latest ? "timeline-line-latest" : ""}`}
        />
      </div>
      <div className="timeline-content">
        <div className="timeline-icon-container">{icon}</div>
        <a href={href} className="bodyM timeline-company">
          {company}
        </a>
      </div>
      <div className="timeline-date label">{startEnd}</div>
    </div>
  );
};

export default TimelineEntry;
