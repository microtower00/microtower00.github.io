import React from "react";
import TimelineEntry from "./ui/TimelineEntry";
import { LucideArrowRight, LucideDownload, LucideSmile } from "lucide-react";
import timelineData from "../content/timelineData.json";

interface TimelineEntryData {
  icon: string;
  company: string;
  startEnd: string;
  href?: string;
}

const TimelineWrapper: React.FC = () => {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-wrapper">
        {timelineData.entries.map((entry: TimelineEntryData, index: number) => {
          const iconNode = (
            <img
              src={entry.icon}
              alt={`${entry.company} logo`}
              className="timeline-icon-image"
            />
          );
          return (
            <TimelineEntry
              key={index}
              latest={index === 0}
              icon={iconNode}
              company={entry.company}
              startEnd={entry.startEnd}
              href={entry.href ? entry.href : undefined}
            />
          );
        })}
      </div>

      <div className="timeline-see-all-container">
        <div className="timeline-gradient-overlay"></div>
        <div
          style={{
            height: "100%",
            backgroundColor: "var(--primary-color)",
          }}
        >
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="label timeline-see-all-button"
          >
            <LucideDownload size="16px" />
            CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default TimelineWrapper;
