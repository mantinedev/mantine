import { MantineTheme, getBreakpointValue } from '@mantine/styles';

export function getSortedBreakpoints<T extends Record<string, any>>(
  theme: MantineTheme,
  breakpoints: T[]
) {
  if (breakpoints.length === 0) {
    return breakpoints;
  }

  const property = 'maxWidth' in breakpoints[0] ? 'maxWidth' : 'minWidth';
  const sorted = [...breakpoints].sort(
    (a, b) =>
      getBreakpointValue(theme.fn.size({ size: b[property], sizes: theme.breakpoints })) -
      getBreakpointValue(theme.fn.size({ size: a[property], sizes: theme.breakpoints }))
  );

  return property === 'minWidth' ? sorted.reverse() : sorted;
}
