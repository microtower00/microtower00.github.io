import { useState } from "react";
import * as React from "react";
import SquareButton from "./SquareButton";
import { Copy, Mail, MailPlus } from "lucide-react";

interface OpenToWorkProps {
  isOpen: boolean;
}

const COLORS = {
  closed: "#FFA500",
};

const OpenToWork: React.FC<OpenToWorkProps> = ({ isOpen }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAnimating, setModalAnimating] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("microtower00@gmail.com");
    setModalVisible(true);
    setModalAnimating(false);

    setTimeout(() => {
      setModalAnimating(true);
      setTimeout(() => setModalVisible(false), 300); // Wait for animation to complete
    }, 2000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <p
        style={{
          marginBottom: 0,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: isOpen ? "var(--green-accent)" : COLORS.closed,
          textTransform: "uppercase",
        }}
      >
        <span
          style={{
            marginBottom: "2px",
            height: "6px",
            width: "6px",
            borderRadius: "50%",
            backgroundColor: isOpen ? "var(--green-accent)" : COLORS.closed,
            boxShadow: isOpen
              ? `0 0 6px 1px var(--green-accent), 0 0 12px 3px var(--green-accent)`
              : "none",
            animation: isOpen ? "simpleGlow 2.5s ease-in-out infinite" : "none",
            // transition:
            // "box-shadow 0.3s, background 0.3s, width 0.3s, height 0.3s",
            // position: "relative",
            // zIndex: 1,
          }}
        ></span>
        <span className="label" style={{ fontSize: "20px" }}>
          {isOpen
            ? "Currently open to new work."
            : "Currently not taking on any new work."}
        </span>
      </p>
      <div
        className="openToWorkEmail"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          className="buttons"
          style={{ display: "flex", flexDirection: "row", gap: "8px" }}
        >
          <SquareButton
            lucideIcon={MailPlus}
            href="mailto:microtower00@gmail.com"
          ></SquareButton>
          <SquareButton
            lucideIcon={Copy}
            onAction={handleCopyEmail}
          ></SquareButton>
        </div>
        <div
          id="email"
          style={{
            paddingInlineStart: "16px",
            display: "flex",
            gap: "8px",
            alignItems: "center",
            cursor: "pointer",
            position: "relative",
          }}
          onClick={handleCopyEmail}
        >
          <p style={{ textDecoration: "underline dashed", margin: "0" }}>
            Email me!{" "}
          </p>

          {modalVisible && (
            <div
              style={{
                position: "absolute",
                left: "30%",
                top: "-30px",
                transform: "translateX(-50%)",
                background: "var(--accent-color)",
                color: "white",
                padding: "8px 12px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                animation: modalAnimating
                  ? "modalSlideOut 0.3s ease-in forwards"
                  : "modalSlideIn 0.3s ease-out",
                zIndex: 1000,
              }}
            >
              Email copied!
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 0,
                  height: 0,
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: "6px solid var(--accent-color)",
                }}
              />
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          @keyframes simpleGlow {
            0%, 100% {
              box-shadow: 0 0 6px 1px var(--green-accent), 0 0 12px 3px var(--green-accent);
            }
            50% {
              box-shadow: 0 0 12px 2px var(--green-accent), 0 0 24px 6px rgba(204,255,108,0.35);
            }
          }

          @keyframes modalSlideIn {
            0% {
              opacity: 0;
              transform: translateX(-50%) translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }

          @keyframes modalSlideOut {
            0% {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateX(-50%) translateY(-10px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default OpenToWork;
