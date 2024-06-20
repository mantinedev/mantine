import { useMediaQuery, UseMediaQueryOptions } from '@mantine/hooks';
import { useMantineTheme } from '../MantineThemeProvider';
import { MantineBreakpoint } from '../theme.types';

type UseMatchesInput<T> = Partial<Record<MantineBreakpoint, T>>;

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];

function getFirstMatchingValue<T>(
  value: UseMatchesInput<T>,
  biggestMatch: MantineBreakpoint | undefined
): T {
  if (!biggestMatch) {
    return value.base!;
  }

  let index = BREAKPOINTS.indexOf(biggestMatch);

  while (index >= 0) {
    if (BREAKPOINTS[index] in value) {
      return value[BREAKPOINTS[index]]!;
    }
    index -= 1;
  }

  return value.base!;
}

function getFirstMatchingBreakpoint(matches: (boolean | undefined)[]) {
  return matches.findLastIndex((v) => v);
}

export function useMatches<T>(payload: UseMatchesInput<T>, options?: UseMediaQueryOptions) {
  const theme = useMantineTheme();
  const xsMatches = useMediaQuery(`(min-width: ${theme.breakpoints.xs})`, false, options);
  const smMatches = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`, false, options);
  const mdMatches = useMediaQuery(`(min-width: ${theme.breakpoints.md})`, false, options);
  const lgMatches = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`, false, options);
  const xlMatches = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`, false, options);

  const breakpoints = [xsMatches, smMatches, mdMatches, lgMatches, xlMatches];
  const firstMatchingBreakpointIndex = getFirstMatchingBreakpoint(breakpoints);
  return getFirstMatchingValue(payload, BREAKPOINTS[firstMatchingBreakpointIndex]);
}
