import React from "react";
import HeroImage from "../ui/HeroImage";
import OpenToWork from "../ui/OpenToWork";

const HeroSection: React.FC = () => {
  return (
    <>
      <div
        id="heroContainer"
        style={{
          width: "100%",
          // margin: "0 auto",
          maxWidth: "750px",
          position: "relative",
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
          }}
        >
          <h1
            style={{
              color: "var(--accent-color)",
              textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            MICHELE CAZZARO
          </h1>
          <h1 style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
            HCI STUDENT AND FRONTEND DEVELOPER
          </h1>
          <p style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
            After graduating in Computer Science and working as a fronted
            software engineer @UNOX, I am now pursuing a MSc degree in
            Human-Computer Interaction at the University of Trento. I am
            passionate about creating user-centered designs and improving user
            experiences through research and design.
          </p>
          <OpenToWork isOpen />
        </div>
        <HeroImage />
      </div>
      {/* WIP DIV */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "128px 0",
        }}
      >
        <h1>MORE COMING SOON</h1>
      </div>
    </>
  );
};

export default HeroSection;
