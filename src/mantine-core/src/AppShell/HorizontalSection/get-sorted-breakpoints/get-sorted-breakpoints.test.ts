import { DEFAULT_THEME } from '@mantine/styles';
import { getSortedBreakpoints } from './get-sorted-breakpoints';

describe('@mantine/core/AppShell/get-sorted-breakpoints', () => {
  it('returns sorted breakpoints with theme values', () => {
    expect(getSortedBreakpoints({ lg: 500, sm: 400, xs: 300 }, DEFAULT_THEME)).toStrictEqual([
      [DEFAULT_THEME.breakpoints.xs, 300],
      [DEFAULT_THEME.breakpoints.sm, 400],
      [DEFAULT_THEME.breakpoints.lg, 500],
    ]);
  });

  it('returns sorted breakpoints with number values', () => {
    expect(getSortedBreakpoints({ 1250: 500, 834: 400, 455: 300 }, DEFAULT_THEME)).toStrictEqual([
      ['455', 300],
      ['834', 400],
      ['1250', 500],
    ]);
  });

  it('produces results that do not depend on object keys order', () => {
    const results = [
      ['455', 300],
      ['834', 400],
      ['1250', 500],
    ];

    expect(getSortedBreakpoints({ 1250: 500, 834: 400, 455: 300 }, DEFAULT_THEME)).toStrictEqual(
      results
    );
    expect(getSortedBreakpoints({ 834: 400, 1250: 500, 455: 300 }, DEFAULT_THEME)).toStrictEqual(
      results
    );
    expect(getSortedBreakpoints({ 834: 400, 455: 300, 1250: 500 }, DEFAULT_THEME)).toStrictEqual(
      results
    );
  });
});
