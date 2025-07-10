import { StaticImage } from "gatsby-plugin-image";
import React from "react";

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
      <StaticImage
        src="../../images/IMG_1564.JPG"
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

export default HeroImage;
