import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/layout/Header";

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const heroSectionStyles = {};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* <h1 style={headingStyles}>Michele Cazzaro</h1> */}
      </main>
    </>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <h2 style={{}}>
        I'M <span className="accentColor bolded">MICHELE CAZZARO</span>, A
        <span className="bolded"> FRONTEND</span> SW ENGINEER TURNED{" "}
        <span className="bolded">UX</span> DESIGNER AND{" "}
        <span className="bolded">RESEARCHER</span>
      </h2>
      <p
      // Trying out new font
      // style={{
      //   fontFamily: "Outfit, Courier, monospace",
      //   fontSize: "28px",
      //   textAlign: "left", // Fixed textAlign type
      // }}
      >
        figatoma UniTN lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.{" "}
        <span className="accentColor">figatoma</span> UniTN lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.{" "}
      </p>
    </section>
  ); // Fixed textAlign type
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
