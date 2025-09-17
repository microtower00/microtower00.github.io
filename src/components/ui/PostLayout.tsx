import React from "react";
import SiteHeader from "../layout/Header";
import Footer from "../layout/Footer";

interface PostLayoutProps {
  title: string;
  meta: React.ReactNode;
  children: React.ReactNode;
}

const PostLayout: React.FC<PostLayoutProps> = ({ title, meta, children }) => (
  <div className="project-post-container">
    <SiteHeader variant="button" />
    <article
      className="project-post-style"
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <h1
          className="blogHeadingL"
          style={{
            margin: 0,
            color: "var(--secondary-color)",
          }}
        >
          {title}
        </h1>
        {meta}
      </header>

      <div className="project-post-content">{children}</div>
    </article>
  </div>
);

export default PostLayout;
