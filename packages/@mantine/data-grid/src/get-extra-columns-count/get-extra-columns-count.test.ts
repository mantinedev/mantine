import { getExtraColumnsCount } from './get-extra-columns-count';

const defaultFlags = {
  withRowReorder: false,
  withRowSelection: false,
  withRowExpansion: false,
  withTreeData: false,
  withRowNumbers: false,
};

describe('getExtraColumnsCount', () => {
  it('returns 0 when no features are enabled', () => {
    expect(getExtraColumnsCount(defaultFlags)).toBe(0);
  });

  it('adds 1 for row reorder', () => {
    expect(getExtraColumnsCount({ ...defaultFlags, withRowReorder: true })).toBe(1);
  });

  it('adds 1 for row selection', () => {
    expect(getExtraColumnsCount({ ...defaultFlags, withRowSelection: true })).toBe(1);
  });

  it('adds 1 for row expansion', () => {
    expect(getExtraColumnsCount({ ...defaultFlags, withRowExpansion: true })).toBe(1);
  });

  it('does not add expansion column when tree data is enabled', () => {
    expect(
      getExtraColumnsCount({ ...defaultFlags, withRowExpansion: true, withTreeData: true })
    ).toBe(0);
  });

  it('adds 1 for row numbers', () => {
    expect(getExtraColumnsCount({ ...defaultFlags, withRowNumbers: true })).toBe(1);
  });

  it('adds all features together', () => {
    expect(
      getExtraColumnsCount({
        withRowReorder: true,
        withRowSelection: true,
        withRowExpansion: true,
        withTreeData: false,
        withRowNumbers: true,
      })
    ).toBe(4);
  });

  it('adds all features except expansion with tree data', () => {
    expect(
      getExtraColumnsCount({
        withRowReorder: true,
        withRowSelection: true,
        withRowExpansion: true,
        withTreeData: true,
        withRowNumbers: true,
      })
    ).toBe(3);
  });
});
