import path from "path";
import { GatsbyNode } from "gatsby";
type QueryResult = {
  allMdx: {
    nodes: {
      id: string;
      internal: {
        contentFilePath: string;
      };
      frontmatter: {
        slug: string;
      };
    }[];
  };
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result = await graphql(`
    query CreatePagesQuery {
      allMdx(
        filter: {
          internal: { contentFilePath: { regex: "/content/(blog|projects)/" } }
        }
      ) {
        nodes {
          id
          internal {
            contentFilePath
          }
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const data = result.data as QueryResult;

  data.allMdx.nodes.forEach((node) => {
    const filePath = node.internal.contentFilePath;
    const isBlog = /\/blog\//.test(filePath);
    const pathPrefix = isBlog ? "blog" : "projects";
    const relativePath = path.relative(
      path.join(__dirname, "src/content", pathPrefix),
      filePath
    );
    const filename = relativePath.replace(/\.mdx?$/, "");

    const fmSlug = node.frontmatter?.slug;
    console.log(
      `Processing file: ${filePath}, slug: ${fmSlug}, isBlog: ${isBlog}`
    );

    // Fail build if slug is missing or empty
    if (!fmSlug || typeof fmSlug !== "string" || !fmSlug.trim()) {
      throw new Error(
        `Missing or invalid 'slug' in frontmatter of file: ${filePath}`
      );
    }

    const cleanSlug = fmSlug.startsWith(`/${pathPrefix}/`)
      ? fmSlug
      : `/${pathPrefix}/${filename}`;

    const template = isBlog
      ? path.resolve(`./src/templates/blog-post.tsx`)
      : path.resolve(`./src/templates/project-post.tsx`);

    createPage({
      path: cleanSlug,
      component: `${template}?__contentFilePath=${filePath}`,
      context: { id: node.id },
    });
  });
};
