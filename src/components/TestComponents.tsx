import React from "react";
import TimelineEntry from "./ui/TimelineEntry";
import { LucideArrowRight, LucideSmile } from "lucide-react";

const TestComponents: React.FC = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        maxWidth: "800px",
        position: "relative",
      }}
    >
      <TimelineEntry
        icon={
          <>
            <LucideSmile />
          </>
        }
        company={"Unox"}
        startEnd={"2025-NOW"}
        latest
      ></TimelineEntry>
      <TimelineEntry
        icon={
          <>
            <LucideSmile />
          </>
        }
        company={"Unox"}
        startEnd={"2025-NOW"}
      ></TimelineEntry>
      <TimelineEntry
        icon={
          <>
            <LucideSmile />
          </>
        }
        company={"Unox"}
        startEnd={"2025-NOW"}
      ></TimelineEntry>
      <TimelineEntry
        icon={
          <>
            <LucideSmile />
          </>
        }
        company={"Unox"}
        startEnd={"2025-NOW"}
      ></TimelineEntry>
      <div
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
            background: "linear-gradient(to left, black, transparent)",
          }}
        ></div>
        <div
          id="seeAll"
          className="label"
          style={{
            fontSize: "18px",
            display: "flex",
            flexDirection: "row",
            padding: "4px 0",
            alignItems: "center",
          }}
        >
          all <LucideArrowRight />
        </div>
      </div>
    </div>
  );
};

export default TestComponents;
