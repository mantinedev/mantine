const VALID_IDENTIFIER = /^[A-Za-z_$][\w$]*$/;

export interface ResolveImportNameOptions {
  /** Page title from frontmatter, e.g. `Button` or `use-form` */
  title?: string;

  /** Key of the page in `MDX_DATA`, e.g. `Button` or `useForm` */
  mdxKey: string;

  /** Landing/installation pages export no symbol of their own */
  isLandingPage: boolean;
}

/**
 * Resolves the symbol used in a generated `Import:` line.
 * Returns `null` when the page has no importable symbol and the line must be omitted.
 */
export function resolveImportName(options: ResolveImportNameOptions): string | null {
  if (options.isLandingPage) {
    return null;
  }

  if (options.title && VALID_IDENTIFIER.test(options.title)) {
    return options.title;
  }

  return options.mdxKey;
}
