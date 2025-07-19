// src/components/layout/SiteHeader.tsx
import React, { useRef, useState } from "react";
import FancyLink from "../ui/FancyLink";
import SquareButton from "../ui/SquareButton";
import { ArrowLeft, Home, Menu } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  // { href: "/projects", label: "Projects" },
  // { href: "/blog", label: "Blog" },
  // { href: "/about", label: "About" },
  // Add more as needed
];

interface SiteHeaderProps {
  variant?: "default" | "button";
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ variant = "default" }) => {
  const hrRef = useRef<HTMLHRElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleHrMouseMove = (
    e: React.MouseEvent<HTMLHRElement, MouseEvent>
  ) => {
    const hr = hrRef.current;
    if (!hr) return;
    const rect = hr.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    hr.style.setProperty("--mouse-x", `${x}px`);
    hr.style.setProperty("--mouse-y", `${y}px`);
    hr.style.setProperty("--glow-opacity", "1");
    setIsHovering(true);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <nav>
          {/* {variant === "default" ? ( */}
          {links.map((link) => (
            <FancyLink
              key={link.href}
              href={link.href}
              color="var(--green-accent)"
            >
              {link.label}
            </FancyLink>
          ))}
          {/* ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                width: "100%",
              }}
            >
              <SquareButton
                lucideIcon={Home}
                color="var(--green-accent)"
                href="/"
              />
              <div
                style={{
                  flex: 1,
                  width: "100%",
                  height: 48,
                  position: "relative",
                  overflow: "visible",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  zIndex: 1,
                }}
              >
                <hr
                  className="glowing-dashed-line"
                  style={{
                    flex: 1,
                    border: 0,
                    borderTop: "2px dashed var(--border-dark-gray)",
                    height: 0,
                    alignSelf: "center",
                    margin: 0,
                    position: "relative",
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          )} */}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
