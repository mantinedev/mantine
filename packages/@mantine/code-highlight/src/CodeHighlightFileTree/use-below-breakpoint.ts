import { useCallback, useMemo, useSyncExternalStore } from 'react';
import {
  em,
  getBreakpointValue,
  MantineBreakpoint,
  MantineTheme,
  useMantineTheme,
} from '@mantine/core';

export type CodeHighlightFileTreeBreakpoint = MantineBreakpoint | (string & {}) | number;

function getMediaQueryList(query: string | null) {
  if (query === null || typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return null;
  }

  try {
    return window.matchMedia(query);
  } catch {
    return null;
  }
}

function getBreakpointQuery(
  breakpoint: CodeHighlightFileTreeBreakpoint,
  breakpoints: MantineTheme['breakpoints']
) {
  const value = getBreakpointValue(breakpoint, breakpoints);
  return `(min-width: ${Number.isNaN(value) ? breakpoint : em(value)})`;
}

const noop = () => {};
const getServerSnapshot = () => true;

export function useBelowBreakpoint(breakpoint: CodeHighlightFileTreeBreakpoint | undefined) {
  const theme = useMantineTheme();
  const query = breakpoint === undefined ? null : getBreakpointQuery(breakpoint, theme.breakpoints);
  const mediaQueryList = useMemo(() => getMediaQueryList(query), [query]);

  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!mediaQueryList) {
        return noop;
      }

      mediaQueryList.addEventListener('change', onChange);
      return () => mediaQueryList.removeEventListener('change', onChange);
    },
    [mediaQueryList]
  );

  const getSnapshot = useCallback(
    () => (mediaQueryList ? mediaQueryList.matches : true),
    [mediaQueryList]
  );

  const aboveBreakpoint = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return query !== null && !aboveBreakpoint;
}
