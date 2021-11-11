import { MantineSize, MantineTheme } from '@mantine/styles';

type Breakpoints<T> = Partial<Record<MantineSize | (string & {}), T>>;

export function getSortedBreakpoints<T>(breakpoints: Breakpoints<T>, theme: MantineTheme) {
  if (!breakpoints) {
    return [];
  }

  const values = Object.keys(breakpoints)
    .filter((breakpoint) => breakpoint !== 'base')
    .map((breakpoint) => [
      theme.fn.size({ size: breakpoint, sizes: theme.breakpoints }),
      breakpoints[breakpoint],
    ]);

  values.sort((a, b) => b[0] - a[0]);
  return values.reverse() as [number, T][];
}
