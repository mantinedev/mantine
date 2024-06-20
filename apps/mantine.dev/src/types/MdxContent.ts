export interface Frontmatter {
  /** Title of the page */
  title: string;

  /** Page slug */
  slug: string;

  /** Page description */
  description?: string;

  /** Component/hook group, for example `mantine-core` or `others` */
  group?: string;

  /** Component/hook category, used to divide components within groups, for example, `feedback` in `mantine-core` group */
  category?: string;

  /** Order of page in navbar */
  order?: number;

  /** Page keywords, used for search in spotlight */
  search?: string;

  /** Release date, displayed in changelogs */
  date?: string;

  /** Release number, used on changelog pages */
  release?: string;

  /** Package name to which component/hook belongs */
  package?: string;

  /** Component props, used to display data in props tab */
  props?: string[];

  /** Import statement, displayed in the header */
  import?: string;

  /** Documentation source path */
  docs?: string;

  /** Source code path */
  source?: string;

  /** License displayed in the header, used for packages pages */
  license?: string;

  /** Component styles api data, used to display data in styles api tab */
  styles?: string[];

  /** Prefix of compound components, used to format compound components props and styles api data */
  componentPrefix?: string;

  /** Determines whether polymorphic component data should be displayed */
  polymorphic?: boolean;

  /** Determines whether page should be hidden in search */
  hideInSearch?: boolean;

  /** Determines whether siblings should be hidden */
  hideSiblings?: boolean;

  /** Determines whether page header should be hidden */
  hideHeader?: boolean;
}

export interface MdxContent {
  slug: string;
  content: string;
  data: Frontmatter;
}

export interface MdxPagesCategory {
  category: string;
  pages: Frontmatter[];
}

export interface MdxPagesGroup {
  group: string;
  pages: Frontmatter[] | MdxPagesCategory[];
}
