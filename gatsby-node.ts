import path from "path";
import fs from "fs";
import { GatsbyNode } from "gatsby";
import type { CreatePagesQueryQuery } from "../portfolio/src/__generated__/gatsby-types";
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const queryPath = path.resolve(
    __dirname,
    "../src/queries/createPages.graphql"
  );
  const query = fs.readFileSync(queryPath, "utf-8");
  const result = await graphql(query);

  if (result.errors) throw result.errors;

  const data = result.data as CreatePagesQueryQuery;

  data.allMdx.nodes.forEach((node) => {
    if (node.frontmatter?.public === false) return;

    const fm = node.frontmatter;

    if (!fm?.slug || typeof fm.slug !== "string" || !fm.slug.trim()) {
      throw new Error(
        `Missing or invalid 'slug' in frontmatter of file: ${node.internal.contentFilePath}`
      );
    }

    if (
      !fm.description ||
      typeof fm.description !== "string" ||
      !fm.description.trim()
    ) {
      throw new Error(
        `Missing or invalid 'description' in frontmatter of file: ${node.internal.contentFilePath}`
      );
    }

    if (
      !fm.imageSrc ||
      typeof fm.imageSrc !== "string" ||
      !fm.imageSrc.trim()
    ) {
      throw new Error(
        `Missing or invalid 'imageSrc' in frontmatter of file: ${node.internal.contentFilePath}`
      );
    }
    if (!node.frontmatter?.public) return;
    const filePath = node.internal.contentFilePath;
    if (!filePath) throw new Error("Missing contentFilePath");
    const isBlog = /\/blog\//.test(filePath);
    const pathPrefix = isBlog ? "blog" : "projects";
    const relativePath = path.relative(
      path.join(__dirname, "src/content", pathPrefix),
      filePath
    );
    const filename = relativePath.replace(/\.mdx?$/, "");

    const fmSlug = node.frontmatter?.slug;

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
      component: `${template}?__contentFilePath=${path.resolve(filePath)}`,
      context: { id: node.id },
    });
  });
};
