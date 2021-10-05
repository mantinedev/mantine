import { Frontmatter } from './Frontmatter';

export interface MdxPageProps {
  headings: {
    depth: number;
    value: string;
  }[];

  body: string;

  frontmatter: Frontmatter;

  siblings: {
    next: Frontmatter;
    prev: Frontmatter;
  };
}
