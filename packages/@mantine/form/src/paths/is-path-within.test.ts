import { isChildPath, isSameOrChildPath } from './is-path-within';

describe('@mantine/form/is-path-within', () => {
  it('detects child paths', () => {
    expect(isChildPath('a.b', 'a')).toBe(true);
    expect(isChildPath('a.0.name', 'a.0')).toBe(true);
    expect(isChildPath('a', 'a')).toBe(false);
    expect(isChildPath('ab', 'a')).toBe(false);
    expect(isChildPath('a', 'a.b')).toBe(false);
    expect(isChildPath('a.01', 'a.0')).toBe(false);
    expect(isChildPath('a.0', 'a.01')).toBe(false);
  });

  it('detects same or child paths', () => {
    expect(isSameOrChildPath('a', 'a')).toBe(true);
    expect(isSameOrChildPath('a.b', 'a')).toBe(true);
    expect(isSameOrChildPath('ab', 'a')).toBe(false);
    expect(isSameOrChildPath('a', 'ab')).toBe(false);
    expect(isSameOrChildPath('a', 'a.b')).toBe(false);
    expect(isSameOrChildPath('a.01', 'a.0')).toBe(false);
    expect(isSameOrChildPath('a.0', 'a.01')).toBe(false);
  });
});
