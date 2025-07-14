export interface Frontmatter {
  title: string;
  date: string;
  slug: string;
  description?: string;
  tags?: string[];
  public?: boolean;
  imageSrc?:
    | string
    | {
        relativePath?: string;
        childImageSharp?: {
          gatsbyImageData: any;
        };
      };
  imageAlt?: string;
  author?: string;
  details?: string;
}

export interface Project {
  id: string;
  frontmatter: Frontmatter;
}

export type HomeProjectsQueryData = {
  allMdx: {
    nodes: Project[];
  };
};
