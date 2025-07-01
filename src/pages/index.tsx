import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
// import Header from "../components/layout/Header";
import OpenToWork from "../components/ui/OpenToWork";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <HeroSectionVar />
        {/* <HeroSection /> */}
      </main>
    </>
  );
};

// const HeroSection: React.FC = () => {
//   return (
//     <section className="hero-section">
//       <h2 style={{}}>
//         I'M <span className="accentColor bolded">MICHELE CAZZARO</span>, A
//         <span className="bolded"> FRONTEND</span> SW ENGINEER TURNED{" "}
//         <span className="bolded">UX</span> DESIGNER AND{" "}
//         <span className="bolded">RESEARCHER</span>
//       </h2>
//       <p
//       // Trying out new font
//       // style={{
//       //   fontFamily: "Outfit, Courier, monospace",
//       //   fontSize: "28px",
//       //   textAlign: "left", // Fixed textAlign type
//       // }}
//       >
//         figatoma UniTN lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem
//         ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//         incididunt ut labore et dolore magna aliqua.{" "}
//         <span className="accentColor">figatoma</span> UniTN lorem ipsum dolor
//         sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//         ut labore et dolore magna aliqua. lorem ipsum dolor sit amet,
//         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//         et dolore magna aliqua.{" "}
//       </p>
//     </section>
//   ); // Fixed textAlign type
// };

const HeroSectionVar: React.FC = () => {
  return (
    <>
      <div
        id="heroContainer"
        style={{
          margin: "0 auto",
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

interface HeroImageProps {
  imageUrl?: string;
}

const HeroImage: React.FC<HeroImageProps> = (
  {
    // imageUrl = "https://picsum.photos/500/300",
  }
) => {
  return (
    <div
      id="heroImage"
      style={{
        zIndex: -1,
        position: "absolute",
        width: "40%",
        height: "100%",
        top: "0",
        right: "0",
        display: "flex",
        justifyContent: "end",
      }}
    >
      {/* <img
        src={ItsMe}
        alt="Hero"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      ></img> */}
      <StaticImage
        src="../images/IMG_1564.JPG"
        alt="Hero"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          objectFit: "cover",
        }}
        placeholder="blurred"
      />
    </div>
  );
};
export default IndexPage;

export const Head: HeadFC = () => <title>Michele Cazzaro</title>;
