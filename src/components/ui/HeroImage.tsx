import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState, useRef } from "react";

interface HeroImageProps {
  imageUrl?: string;
  blurred?: boolean;
  onEntranceComplete?: () => void;
}

const ENTRANCE_DURATION = 600; // ms, match your entrance animation duration

const HeroImage: React.FC<HeroImageProps> = ({
  blurred = false,
  onEntranceComplete,
}) => {
  const [animate, setAnimate] = useState(false);
  const [unblurAnim, setUnblurAnim] = useState(false);
  const prevBlurred = useRef(blurred);
  const entranceDone = useRef(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => {
      entranceDone.current = true;
      if (onEntranceComplete) onEntranceComplete();
    }, ENTRANCE_DURATION);
    return () => clearTimeout(timeout);
  }, [onEntranceComplete]);

  useEffect(() => {
    if (prevBlurred.current && !blurred) {
      setUnblurAnim(true);
      const timeout = setTimeout(() => setUnblurAnim(false), 400);
      return () => clearTimeout(timeout);
    }
    prevBlurred.current = blurred;
  }, [blurred]);

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
        perspective: "1200px",
      }}
    >
      <div
        className={animate ? "hero-image-entrance" : "hero-image-initial"}
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <StaticImage
          src="../../images/IMG_1564.JPG"
          alt="Hero"
          className={
            blurred
              ? "hero-image-blur"
              : unblurAnim
              ? "hero-image-unblur"
              : undefined
          }
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            objectFit: "cover",
          }}
          placeholder="blurred"
        />
      </div>
    </div>
  );
};

export default HeroImage;
