import * as React from "react";

interface OpenToWorkProps {
  isOpen: boolean;
}
// #TODO: find better colors
const COLORS = {
  open: "#00FF00",
  closed: "#FFA500",
};

// const COLORS = {
//     open: "var(--color-open)", // Assigning CSS variable
//     closed: "var(--color-closed)", // Assigning CSS variable
// };

const OpenToWork: React.FC<OpenToWorkProps> = ({ isOpen }) => {
  return (
    <p
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: isOpen ? COLORS.open : COLORS.closed, // Use color constants,
        textTransform: "uppercase", // Force capitalization
        fontFamily: "Departure Mono",
      }}
    >
      <span
        style={{
          marginBottom: "2px",
          height: "6px",
          width: "6px",
          borderRadius: "50%",
          backgroundColor: isOpen ? COLORS.open : COLORS.closed, // Use color constants
          boxShadow: isOpen ? `0 0 10px ${COLORS.open}` : "none",
          animation: isOpen ? "simpleGlow 2s ease-in-out infinite" : "none",
        }}
      ></span>
      <span>
        {isOpen
          ? "Currently open to new work."
          : "Currently not taking on any new work."}
      </span>
      <style>
        {`
                    @keyframes simpleGlow {
                        0%, 100% {
                            box-shadow: 0 0 5px ${COLORS.open};
                        }
                        50% {
                            box-shadow: 0 0 20px ${COLORS.open};
                        }
                    }
                `}
      </style>
    </p>
  );
};

export default OpenToWork;
