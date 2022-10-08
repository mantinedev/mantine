export interface Frontmatter {
  title: string;
  description?: string;
  props: string[];
  import: string;
  docs: string;
  source: string;
  package: string;
  installation: string;
  pageTitle: string;
  license: string;
  styles: string[];
  group?: string;
  order: number;
  slug: string;
  category: string;
  release: string;
  date: string;
  search?: string;
  error?: string;
  componentPrefix?: string;
  hideToc?: boolean;
  polymorphic?: boolean;
}
