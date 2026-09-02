export interface MdxMetadata {
  /** Package name declared on the `MDX_DATA` entry, e.g. `@mantine/core` */
  package?: string;

  /** Title declared on the `MDX_DATA` entry, falling back to the entry's own key */
  title: string;

  /** Description declared on the `MDX_DATA` entry */
  description: string;

  /** Whether the `MDX_DATA` entry is marked `hideInSearch: true` */
  hideInSearch: boolean;
}

const COMPONENT_ENTRY_REGEX = /(\w+):\s*{([^{}]*(?:{[^{}]*}[^{}]*)*)}/g;
const PACKAGE_REGEX = /package:\s*['"](@mantine\/[^'"]+)['"]/;
const TITLE_REGEX = /title:\s*['"]([^'"]+)['"]/;
const DESCRIPTION_REGEX = /description:\s*['"]([^'"]+)['"]/;
const HIDE_IN_SEARCH_REGEX = /hideInSearch:\s*true/;

function parseMdxMetadata(componentName: string, componentData: string): MdxMetadata {
  const packageMatch = componentData.match(PACKAGE_REGEX);
  const titleMatch = componentData.match(TITLE_REGEX);
  const descriptionMatch = componentData.match(DESCRIPTION_REGEX);
  const hideInSearchMatch = componentData.match(HIDE_IN_SEARCH_REGEX);

  return {
    package: packageMatch ? packageMatch[1] : undefined,
    title: titleMatch ? titleMatch[1] : componentName,
    description: descriptionMatch ? descriptionMatch[1] : '',
    hideInSearch: Boolean(hideInSearchMatch),
  };
}

function mdxMetadataKeys(componentName: string): string[] {
  const kebabName = componentName
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');

  return [componentName, componentName.toLowerCase(), kebabName];
}

/**
 * Parses every `MDX_DATA` entry inside a data file's export body (the content between the export's
 * outer `{` and `}`) into a lookup map. Each entry is stored under its own key, its lowercased key,
 * and its kebab-case key, so it can be looked up by `MDX_DATA` key regardless of casing.
 */
export function parseMdxMetadataEntries(dataContent: string): Map<string, MdxMetadata> {
  const entries = new Map<string, MdxMetadata>();

  for (const match of dataContent.matchAll(COMPONENT_ENTRY_REGEX)) {
    const componentName = match[1];
    const componentData = match[2];
    const metadata = parseMdxMetadata(componentName, componentData);

    for (const key of mdxMetadataKeys(componentName)) {
      entries.set(key, metadata);
    }
  }

  return entries;
}
