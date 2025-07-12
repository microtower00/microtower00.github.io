import path from "path";
import { GatsbyNode } from "gatsby";

interface BaseFrontmatter {
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  public?: boolean;
}

interface BlogFrontmatter extends BaseFrontmatter {
  // Add blog-specific fields if needed
}

interface ProjectFrontmatter extends BaseFrontmatter {
  // Add project-specific fields if needed
}

type Frontmatter = BlogFrontmatter | ProjectFrontmatter;

// Strong typing for MDX nodes
interface MdxNode {
  id: string;
  internal: {
    contentFilePath: string;
  };
  frontmatter: Frontmatter;
}

interface QueryResult {
  allMdx: {
    nodes: MdxNode[];
  };
}

// GraphQL query with explicit field selection
const CREATE_PAGES_QUERY = `
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
          title
          slug
          public
          description
          imageSrc
        }
      }
    }
  }
` as const;

// Validation function with strong typing
function validateFrontmatter(frontmatter: Frontmatter, filePath: string): void {
  const requiredFields: Array<keyof BaseFrontmatter> = [
    "title",
    "slug",
    "description",
    "imageSrc",
  ];

  for (const field of requiredFields) {
    const value = frontmatter[field];
    if (!value || typeof value !== "string" || !value.trim()) {
      throw new Error(
        `Missing or invalid '${field}' in frontmatter of file: ${filePath}`
      );
    }
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result = await graphql(CREATE_PAGES_QUERY);

  if (result.errors) throw result.errors;

  const data = result.data as QueryResult;

  data.allMdx.nodes.forEach((node) => {
    const isPublic = node.frontmatter?.public !== false;
    if (!isPublic) return;
    // Validate all required frontmatter fields
    validateFrontmatter(node.frontmatter, node.internal.contentFilePath);

    if (!node.frontmatter?.public) return;

    const filePath = node.internal.contentFilePath;
    const isBlog = /\/blog\//.test(filePath);
    const pathPrefix = isBlog ? "blog" : "projects";
    const relativePath = path.relative(
      path.join(__dirname, "src/content", pathPrefix),
      filePath
    );
    const filename = relativePath.replace(/\.mdx?$/, "");

    const fmSlug = node.frontmatter.slug;

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
      component: `${template}?__contentFilePath=${path.resolve(filePath)}`,
      context: { id: node.id },
    });
  });
};
