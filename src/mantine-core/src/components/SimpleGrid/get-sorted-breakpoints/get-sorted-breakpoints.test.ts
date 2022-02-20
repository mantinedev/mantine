import { DEFAULT_THEME } from '@mantine/styles';
import { getSortedBreakpoints } from './get-sorted-breakpoints';

describe('@mantine/core/SimpleGrid/get-sorted-breakpoints', () => {
  it('returns an empty array if breakpoints are not set', () => {
    expect(getSortedBreakpoints(DEFAULT_THEME, [])).toStrictEqual([]);
  });

  it('sorts max-width breakpoints', () => {
    expect(
      getSortedBreakpoints(DEFAULT_THEME, [
        { maxWidth: 900, cols: 3 },
        { maxWidth: 1200, cols: 4 },
        { maxWidth: 700, cols: 2 },
      ])
    ).toStrictEqual([
      { maxWidth: 1200, cols: 4 },
      { maxWidth: 900, cols: 3 },
      { maxWidth: 700, cols: 2 },
    ]);
  });

  it('sorts min-width breakpoints', () => {
    expect(
      getSortedBreakpoints(DEFAULT_THEME, [
        { minWidth: 900, cols: 3 },
        { minWidth: 1200, cols: 4 },
        { minWidth: 700, cols: 2 },
      ])
    ).toStrictEqual([
      { minWidth: 700, cols: 2 },
      { minWidth: 900, cols: 3 },
      { minWidth: 1200, cols: 4 },
    ]);
  });
});
