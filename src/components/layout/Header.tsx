// src/components/layout/SiteHeader.tsx
import React from "react";
import FancyLink from "../ui/FancyLink";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  // Add more as needed
];

const SiteHeader: React.FC = () => (
  <header className="site-header">
    <div className="site-header-inner">
      <nav style={{}}>
        {links.map((link) => (
          <FancyLink key={link.href} href={link.href}>
            {link.label}
          </FancyLink>
        ))}
      </nav>
    </div>
  </header>
);

export default SiteHeader;
