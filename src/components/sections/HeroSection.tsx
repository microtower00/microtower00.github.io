import React, { useState } from "react";
import HeroImage from "../ui/HeroImage";
import OpenToWork from "../ui/OpenToWork";
import FancyLink from "../ui/FancyLink";
import { Eye as LucideEye } from "lucide-react";

const HeroSection: React.FC = () => {
  const [isBlurred, setIsBlurred] = useState(true);
  const [imageReady, setImageReady] = useState(false);

  return (
    <div
      id="heroContainer"
      style={{
        width: "100%",
        maxWidth: "750px",
        position: "relative",
        minHeight: "400px",
      }}
    >
      <div
        id="whoAmI"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginTop: "64px",
          maxWidth: "500px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            color: "var(--green-accent)",
            textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          MICHELE CAZZARO
        </h1>
        <h1 style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
          HCI STUDENT AND FRONTEND DEVELOPER
        </h1>
        <p style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
          After graduating in Computer Science and working as a frontend
          software engineer @
          <a href="https://unox.it" target="_blank" rel="noopener noreferrer">
            UNOX
          </a>
          , I am now pursuing a MSc degree in Human-Computer Interaction at the
          University of Trento. I am passionate about creating user-centered
          designs and improving user experiences through research and design.
        </p>
        <OpenToWork isOpen />
      </div>
      <HeroImage
        blurred={isBlurred}
        onEntranceComplete={() => setImageReady(true)}
      />
      {isBlurred && imageReady && (
        <div
          id="heroImageOverlay"
          style={{
            position: "absolute",
            right: 0,
            width: "40%",
            height: "100%",
            top: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <FancyLink
            href="#"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              setIsBlurred(false);
            }}
          >
            <LucideEye
              style={{ marginRight: 8, verticalAlign: "middle" }}
              size={20}
            />{" "}
            Meet me
          </FancyLink>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
