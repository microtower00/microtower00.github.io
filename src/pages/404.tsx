import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import FancyLink from "../components/ui/FancyLink";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main
      style={{
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? <></> : null}
        <br />
        <FancyLink href="/">Go home</FancyLink>
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
