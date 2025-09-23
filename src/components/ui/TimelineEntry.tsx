import React from "react";

interface TimelineEntryProps {
  latest?: boolean;
  icon: React.ReactNode;
  company: string;
  startEnd: string;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({
  latest,
  icon,
  company,
  startEnd,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        minWidth: "120px",
        maxWidth: "200px",
        width: "100%",
      }}
    >
      <div
        className={`${latest ? "latest" : ""}`}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative", // Added for positioning the before element
          gap: "2px",
        }}
      >
        {latest && (
          <div
            id="beforeElement"
            style={{
              content: '""', // Required for pseudo-element
              position: "absolute",
              width: "32px",
              height: "32px",
              backgroundColor: "rgba(0, 128, 0, 0.2)", // Example color with 20% transparency
              borderRadius: "999px",
            }}
          />
        )}

        <div
          id="cvCircle"
          style={{
            borderRadius: "999px",
            boxShadow: latest
              ? "none"
              : "inset 0 0 0 1px var(--gray-text-color)", // Added box shadow effect
            width: "8px",
            height: "8px",
            aspectRatio: "1 / 1",
            backgroundColor: latest ? "var(--green-accent)" : "",
            margin: "12px 0 12px 12px ",
          }}
        />
        <div
          style={{
            top: "50%",
            left: "0",
            width: "100%",
            height: "2px",
            background: latest
              ? "linear-gradient(to right, var(--green-accent), #000000)"
              : "linear-gradient(to right, #000000, #616161, #000000", // Horizontal gradient line
          }}
        />
      </div>
      <div
        style={{
          padding: " 4px 0 4px 0",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            border: "1px solid white",
            borderRadius: "8px",
            aspectRatio: "1 / 1", // Maintain a square aspect ratio
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
          }}
        >
          {icon}
        </div>
        <span className="bodyS">{company}</span>
      </div>
      <div className="label" style={{ color: "var(--gray-text-color)" }}>
        {startEnd}
      </div>
    </div>
  );
};

export default TimelineEntry;
