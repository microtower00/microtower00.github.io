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
    <main
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
      <h1>{title}</h1>
      {meta}
      <div className="project-post-content">{children}</div>
    </main>
    <Footer />
  </div>
);

export default PostLayout;
