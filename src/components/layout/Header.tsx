import React from "react";
import { Link } from "gatsby";

const HeaderLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => {
  return (
    <li className="headerLink">
      <a href={to} style={{ color: "inherit" }}>
        {children}
      </a>
    </li>
  );
};

const Header: React.FC = () => {
  return (
    <header style={{ width: "100%", backgroundColor: "#333" }}>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "1rem",
            listStyle: "none",
            height: "64px",
            margin: 0,
            padding: "0px 16px",
            justifyContent: "end",
            color: "white",
          }}
        >
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/blog">Blog</HeaderLink>
          <HeaderLink to="/projects">Projects</HeaderLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
