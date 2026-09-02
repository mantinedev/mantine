/** Kind of document, derived from its docs-site nav group */
export type DocKind = 'component' | 'hook' | 'guide' | 'faq';

/** Top-level nav group from the docs site */
export type NavGroup =
  | 'gettingStarted'
  | 'theming'
  | 'hooks'
  | 'components'
  | 'extensions'
  | 'form';

/** A page record in the always-loaded index */
export interface IndexItem {
  id: string;
  name: string;
  kind: DocKind;
  group: NavGroup;
  category: string;
  package?: string;
  route: string;
  description: string;
  searchTags?: string;
  headings: string[];
  propsCount: number;
  hasSignature: boolean;
  llmUrl: string;
  docsUrl: string;
  searchText: string;
}

/** A `##` section record in the lazily-loaded section index */
export interface SectionRecord {
  id: string;
  slug: string;
  heading: string;
  snippet: string;
}

/** Normalized prop metadata for a component */
export interface PropData {
  name: string;
  description?: string;
  required?: boolean;
  defaultValue?: unknown;
  type?: unknown;
  sourceComponent: string;
}

/** Full per-page payload fetched on demand */
export interface DocData {
  item: IndexItem;
  intro: string;
  sections: Array<{ heading: string; slug: string; body: string }>;
  props: PropData[];
  signature: string | null;
  exportedTypeNames: string[] | null;
  /** Repo-relative path to the component/hook implementation source */
  source?: string;
  /** Repo-relative path to the page's MDX documentation source */
  docs?: string;
}

export interface ListItemsArgs {
  kind?: DocKind;
  group?: NavGroup;
  category?: string;
  package?: string;
  query?: string;
  limit?: number;
}

export interface GetItemArgs {
  name: string;
  kind?: DocKind;
  section?: string;
  full?: boolean;
}

export interface SearchDocsArgs {
  query: string;
  kind?: DocKind;
  package?: string;
  limit?: number;
}
