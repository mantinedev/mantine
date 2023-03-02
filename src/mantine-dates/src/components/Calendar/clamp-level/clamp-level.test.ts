import { clampLevel } from './clamp-level';

describe('@mantine/dates/clamp-level', () => {
  it('returns correct initial level', () => {
    expect(clampLevel('month', 'month', 'decade')).toBe('month');
    expect(clampLevel('month', undefined, undefined)).toBe('month');
    expect(clampLevel(undefined, undefined, undefined)).toBe('month');
    expect(clampLevel(undefined, 'month', 'decade')).toBe('month');
    expect(clampLevel('decade', 'month', 'month')).toBe('month');
    expect(clampLevel('decade', undefined, 'month')).toBe('month');

    expect(clampLevel(undefined, 'year', 'decade')).toBe('year');
    expect(clampLevel('month', 'year', 'decade')).toBe('year');
    expect(clampLevel('decade', 'month', 'year')).toBe('year');

    expect(clampLevel(undefined, 'decade', 'decade')).toBe('decade');
    expect(clampLevel(undefined, 'decade', undefined)).toBe('decade');
    expect(clampLevel('month', 'decade', undefined)).toBe('decade');
    expect(clampLevel('year', 'decade', undefined)).toBe('decade');
    expect(clampLevel('decade', 'decade', undefined)).toBe('decade');
  });
});
