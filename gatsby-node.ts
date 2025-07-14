import path from "path";
import { GatsbyNode } from "gatsby";

interface BaseFrontmatter {
  title: string;
  slug: string;
  description: string;
  imageSrc?: {
    relativePath: string;
    childImageSharp: {
      gatsbyImageData: any;
    };
  };
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
          date
          imageSrc {
            relativePath
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
` as const;

// Helper function to validate required string fields
function validateRequiredStringField(
  fieldValue: any,
  fieldName: string,
  filePath: string
) {
  if (!fieldValue || typeof fieldValue !== "string" || !fieldValue.trim()) {
    throw new Error(
      `Missing or invalid '${fieldName}' in frontmatter of file: ${filePath}`
    );
  }
}

// Validation function with strong typing
function validateFrontmatter(
  frontmatter: Frontmatter,
  filePath: string,
  isBlog: boolean
): void {
  // Common required fields
  ["title", "slug", "description", "date"].forEach((field) => {
    validateRequiredStringField((frontmatter as any)[field], field, filePath);
  });

  // Project-specific validation
  if (!isBlog) {
    // Optionally validate imageSrc for projects (uncomment if needed)
    // if (!frontmatter.imageSrc || !frontmatter.imageSrc.childImageSharp) {
    //   throw new Error(`Missing or invalid 'imageSrc' in frontmatter of file: ${filePath}`);
    // }
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

    const filePath = node.internal.contentFilePath;
    const isBlog = /\/blog\//.test(filePath);

    // Unified validation
    validateFrontmatter(node.frontmatter, filePath, isBlog);

    if (!node.frontmatter?.public) return;

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

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;

    createTypes(`
      type MdxFrontmatter {
        imageSrc: File @fileByRelativePath
        imageAlt: String
        title: String
        description: String
        details: String
        date: Date @dateformat
        slug: String
        public: Boolean
      }
    `);
  };
