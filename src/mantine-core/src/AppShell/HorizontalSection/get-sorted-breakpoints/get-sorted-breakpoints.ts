import { MantineSize, MantineTheme, getSize, getBreakpointValue } from '@mantine/styles';

type Breakpoints<T> = Partial<Record<MantineSize | (string & {}), T>>;

export function getSortedBreakpoints<T>(
  breakpoints: Breakpoints<T>,
  theme: MantineTheme
): [string, T][] {
  if (!breakpoints) {
    return [];
  }

  const values = Object.keys(breakpoints)
    .filter((breakpoint) => breakpoint !== 'base')
    .map(
      (breakpoint) =>
        [
          getSize({ size: breakpoint, sizes: theme.breakpoints, units: 'em' }),
          breakpoints[breakpoint],
        ] as const
    );

  values.sort((a, b) => getBreakpointValue(a[0]) - getBreakpointValue(b[0]));

  return values as [string, T][];
}
