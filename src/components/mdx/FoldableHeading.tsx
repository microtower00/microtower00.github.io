import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export interface FoldableHeadingProps {
  title: string; // Fixed: explicitly typed as string
  children: React.ReactNode;
  initiallyOpen?: boolean;
  className?: string;
}
const FoldableHeading: React.FC<FoldableHeadingProps> = ({
  title,
  children,
  initiallyOpen = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [contentHeight, setContentHeight] = useState(
    initiallyOpen ? "auto" : 0
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null); // Fixed: properly typed ref
  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  const toggleOpen = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (contentRef.current) {
      if (isOpen) {
        // Closing animation
        setContentHeight(contentRef.current.scrollHeight);
        setTimeout(() => setContentHeight(0), 10);
      } else {
        // Opening animation
        setContentHeight(contentRef.current.scrollHeight);
      }
    }

    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsAnimating(false);
      if (!isOpen && contentRef.current) {
        setContentHeight("auto");
      }
    }, 300);
  };

  return (
    <div className={`foldable-heading ${className}`}>
      <h2 onClick={toggleOpen} style={headingStyle} className="blogHeadingL">
        {title}
        <span
          style={{
            ...iconStyle,
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
          }}
        >
          {!isOpen ? (
            <ChevronsUpDown color="var(--green-accent)" />
          ) : (
            <ChevronsDownUp color="var(--green-accent)" />
          )}
        </span>
      </h2>

      {/* Animated Content */}
      <div
        style={{
          ...contentStyle,
          height: contentHeight,
        }}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};

// Styles
const headingStyle: React.CSSProperties = {
  cursor: "pointer",
  userSelect: "none",
  transition: "all 0.2s ease",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const iconStyle: React.CSSProperties = {
  transition: "transform 0.3s ease",
};

const contentStyle: React.CSSProperties = {
  overflow: "hidden",
  transition: "height 0.3s ease",
};

export default FoldableHeading;
