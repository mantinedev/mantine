const values = {
  text: 'var(--mantine-font-family)',
  mono: 'var(--mantine-font-family-monospace)',
  monospace: 'var(--mantine-font-family-monospace)',
  heading: 'var(--mantine-font-family-headings)',
  headings: 'var(--mantine-font-family-headings)',
};

export function fontFamilyResolver(fontFamily: unknown) {
  if (typeof fontFamily === 'string' && fontFamily in values) {
    return values[fontFamily as keyof typeof values];
  }

  return fontFamily;
}
