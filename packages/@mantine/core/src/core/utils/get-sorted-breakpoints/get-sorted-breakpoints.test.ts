import { DEFAULT_THEME } from '../../MantineProvider';
import { px } from '../units-converters';
import { getSortedBreakpoints } from './get-sorted-breakpoints';

describe('@mantine/core/AppShell/get-sorted-breakpoints', () => {
  it('sorts given breakpoints without theme values', () => {
    expect(getSortedBreakpoints(['20em', '10em', '15em'], DEFAULT_THEME.breakpoints)).toStrictEqual(
      [
        { value: '10em', px: 160 },
        { value: '15em', px: 240 },
        { value: '20em', px: 320 },
      ]
    );
  });

  it('sorts given breakpoints with theme values', () => {
    expect(
      getSortedBreakpoints(['sm', '20em', 'lg', '15em'], DEFAULT_THEME.breakpoints)
    ).toStrictEqual([
      { value: '15em', px: 240 },
      { value: '20em', px: 320 },
      { value: 'sm', px: px(DEFAULT_THEME.breakpoints.sm) },
      { value: 'lg', px: px(DEFAULT_THEME.breakpoints.lg) },
    ]);
  });
});
