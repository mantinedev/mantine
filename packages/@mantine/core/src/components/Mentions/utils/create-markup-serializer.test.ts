import { createMarkupSerializer, DEFAULT_MENTION_MARKUP } from './create-markup-serializer';

describe('@mantine/core/Mentions/create-markup-serializer', () => {
  it('inserts a mention using the default template', () => {
    const serializer = createMarkupSerializer(DEFAULT_MENTION_MARKUP);
    expect(serializer.insert({ id: 'walter', display: 'Walter White' })).toBe(
      '@[Walter White](walter)'
    );
  });

  it('finds all mentions in a value', () => {
    const serializer = createMarkupSerializer(DEFAULT_MENTION_MARKUP);
    const found = serializer.findAll('Hey @[Walter White](walter) and @[Jesse](jesse)!');

    expect(found).toHaveLength(2);
    expect(found[0]).toMatchObject({
      markup: '@[Walter White](walter)',
      index: 4,
      id: 'walter',
      display: 'Walter White',
    });
    expect(found[1]).toMatchObject({ id: 'jesse', display: 'Jesse' });
  });

  it('supports custom templates and preserves placeholder order', () => {
    const serializer = createMarkupSerializer('#[__display__](__id__)');
    expect(serializer.insert({ id: 1, display: 'tag' })).toBe('#[tag](1)');

    const found = serializer.findAll('a #[tag](1) b');
    expect(found[0]).toMatchObject({ id: '1', display: 'tag', index: 2 });
  });

  it('supports reversed placeholder order', () => {
    const serializer = createMarkupSerializer('@[__id__|__display__]');
    const inserted = serializer.insert({ id: 'jane', display: 'Jane Doe' });
    expect(inserted).toBe('@[jane|Jane Doe]');

    const found = serializer.findAll(inserted);
    expect(found[0]).toMatchObject({ id: 'jane', display: 'Jane Doe' });
  });

  it('does not leak regex lastIndex between calls', () => {
    const serializer = createMarkupSerializer(DEFAULT_MENTION_MARKUP);
    const value = 'a @[A](a) b';
    expect(serializer.findAll(value)).toHaveLength(1);
    expect(serializer.findAll(value)).toHaveLength(1);
  });

  it.each(['$$', '$&', '$`', "$'", '$1'])('inserts %s in id and display literally', (pattern) => {
    const serializer = createMarkupSerializer(DEFAULT_MENTION_MARKUP);
    expect(serializer.insert({ id: `id${pattern}`, display: `Name${pattern}` })).toBe(
      `@[Name${pattern}](id${pattern})`
    );
  });

  it('parses an id containing the closing delimiter up to the first delimiter (known limitation)', () => {
    const serializer = createMarkupSerializer(DEFAULT_MENTION_MARKUP);
    const inserted = serializer.insert({ id: 'a)b', display: 'Name' });
    expect(inserted).toBe('@[Name](a)b)');
    expect(serializer.findAll(inserted)[0]).toMatchObject({ id: 'a', markup: '@[Name](a)' });
  });

  it('does not replace placeholder names inside an inserted id', () => {
    const serializer = createMarkupSerializer(DEFAULT_MENTION_MARKUP);
    expect(serializer.insert({ id: '__display__', display: 'Name' })).toBe('@[Name](__display__)');
  });

  it('does not let a stray opening delimiter capture a mention on a later line', () => {
    const serializer = createMarkupSerializer(DEFAULT_MENTION_MARKUP);
    const found = serializer.findAll('x @[note\nline two @[Walter](w) end');
    expect(found).toHaveLength(1);
    expect(found[0]).toMatchObject({ id: 'w', display: 'Walter', markup: '@[Walter](w)' });
  });
});
