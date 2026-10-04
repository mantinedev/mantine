/** @jest-environment node */
import { createSearchText } from '../search-text';

describe('createSearchText', () => {
  const base = {
    name: 'Spotlight',
    description: 'Command center for your application',
    package: '@mantine/spotlight',
    route: '/x/spotlight',
    category: 'Other extensions',
    headings: ['Usage', 'Actions'],
    propNames: ['shortcut', 'limit'],
  };

  it('includes searchTags so synonyms are findable', () => {
    const text = createSearchText({ ...base, searchTags: 'command palette, cmdk, fuzzy search' });
    expect(text).toContain('command palette');
    expect(text).toContain('cmdk');
  });

  it('includes headings, category, props and package', () => {
    const text = createSearchText(base);
    expect(text).toContain('actions');
    expect(text).toContain('other extensions');
    expect(text).toContain('shortcut');
    expect(text).toContain('@mantine/spotlight');
  });

  it('is lowercased for case-insensitive matching', () => {
    expect(createSearchText(base)).toBe(createSearchText(base).toLowerCase());
  });

  it('tolerates a missing package and tags', () => {
    const text = createSearchText({ ...base, package: undefined, searchTags: undefined });
    expect(text).toContain('spotlight');
  });
});
