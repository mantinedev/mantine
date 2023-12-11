import { fontFamilyResolver } from './font-family-resolver';

describe('@mantine/core/Box/font-family-resolver', () => {
  it('resolves theme font family', () => {
    expect(fontFamilyResolver('text')).toBe('var(--mantine-font-family)');
    expect(fontFamilyResolver('mono')).toBe('var(--mantine-font-family-monospace)');
    expect(fontFamilyResolver('heading')).toBe('var(--mantine-font-family-headings)');
  });

  it('resolves non theme font family', () => {
    expect(fontFamilyResolver('Arial')).toBe('Arial');
  });
});
