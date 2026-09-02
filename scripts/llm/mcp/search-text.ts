/** Fields folded into a page's searchable text blob */
export interface SearchTextInput {
  name: string;
  description: string;
  package?: string;
  route: string;
  category: string;
  searchTags?: string;
  headings: string[];
  propNames: string[];
}

/** Builds the lowercased text blob used for page-level matching */
export function createSearchText(input: SearchTextInput): string {
  return [
    input.name,
    input.description,
    input.package || '',
    input.route,
    input.category,
    input.searchTags || '',
    input.headings.join(' '),
    input.propNames.join(' '),
  ]
    .join(' ')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}
