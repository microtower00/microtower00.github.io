import React from "react";
import TimelineEntry from "./ui/TimelineEntry";
import { LucideArrowRight, LucideSmile } from "lucide-react";
import timelineData from "../content/timelineData.json";

interface TimelineEntryData {
  icon: string; // This will be the image path
  company: string;
  startEnd: string;
}

const TimelineWrapper: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        maxWidth: "800px",
        position: "relative",
      }}
    >
      {timelineData.entries.map((entry: TimelineEntryData, index: number) => {
        const iconNode = (
          <img
            src={entry.icon}
            alt={`${entry.company} logo`}
            style={{
              width: "32px",
              height: "32px",
              objectFit: "cover",
            }}
          />
        );
        return (
          <TimelineEntry
            key={index}
            latest={index === 0}
            icon={iconNode}
            company={entry.company}
            startEnd={entry.startEnd}
          />
        );
      })}

      {/* <div
        style={{
          position: "absolute",
          right: "0px",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "100%",
            background:
              "linear-gradient(to left, var(--primary-color), transparent)",
          }}
        ></div>
        <div
          id="seeAll"
          className="label"
          style={{
            backgroundColor: "var(--primary-color)",
            height: "100%",
            fontSize: "18px",
            display: "flex",
            flexDirection: "row",
            padding: "4px 0",
            alignItems: "flex-start",
          }}
        >
          all <LucideArrowRight />
        </div>
      </div> */}
    </div>
  );
};

export default TimelineWrapper;
