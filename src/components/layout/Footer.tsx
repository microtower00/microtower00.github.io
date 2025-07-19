import { Copyright, CreativeCommons } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          <CreativeCommons size={16} />
          {new Date().getFullYear()} Michele Cazzaro. Content licensed under{" "}
          <a href="https://creativecommons.org/licenses/by-nc/4.0/">
            CC-BY-NC-4.0
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
