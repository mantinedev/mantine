import { useCallback, useMemo, useSyncExternalStore } from 'react';
import { getBreakpointValue } from '../../utils/get-breakpoint-value/get-breakpoint-value';
import { em } from '../../utils/units-converters';
import { useMantineTheme } from '../MantineThemeProvider';
import { MantineBreakpoint, MantineTheme } from '../theme.types';

export type UseMatchesInput<T> = Partial<Record<'base' | MantineBreakpoint, T>> & {
  [breakpoint: number]: T;
};

interface MatchesEntry {
  key: string;
  value: number;
  mediaQueryList: MediaQueryList | null;
}

const BASE_KEY = 'base';
const noop = () => {};
const getServerSnapshot = () => BASE_KEY;

function getMediaQueryList(query: string) {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return null;
  }

  try {
    return window.matchMedia(query);
  } catch {
    return null;
  }
}

function getEntries(keys: string[], breakpoints: MantineTheme['breakpoints']): MatchesEntry[] {
  return keys
    .filter((key) => key !== BASE_KEY)
    .map((key) => {
      const value = getBreakpointValue(key, breakpoints);
      const numericValue = typeof value === 'number' && !Number.isNaN(value) ? value : NaN;
      const rawValue = key in breakpoints ? breakpoints[key as MantineBreakpoint] : key;
      const query = `(min-width: ${Number.isNaN(numericValue) ? rawValue : em(numericValue)})`;
      return { key, value: numericValue, mediaQueryList: getMediaQueryList(query) };
    })
    .sort((a, b) => {
      if (Number.isNaN(a.value)) {
        return 1;
      }
      if (Number.isNaN(b.value)) {
        return -1;
      }
      return a.value - b.value;
    });
}

export function useMatches<T>(payload: UseMatchesInput<T>): T {
  const theme = useMantineTheme();
  const keys = Object.keys(payload).join('|');
  const entries = useMemo(() => getEntries(keys.split('|'), theme.breakpoints), [keys, theme]);

  const subscribe = useCallback(
    (onChange: () => void) => {
      const lists = entries.flatMap((entry) =>
        entry.mediaQueryList ? [entry.mediaQueryList] : []
      );
      if (lists.length === 0) {
        return noop;
      }
      lists.forEach((list) => list.addEventListener('change', onChange));
      return () => lists.forEach((list) => list.removeEventListener('change', onChange));
    },
    [entries]
  );

  const getSnapshot = useCallback(() => {
    let matched = BASE_KEY;
    entries.forEach((entry) => {
      if (entry.mediaQueryList?.matches) {
        matched = entry.key;
      }
    });
    return matched;
  }, [entries]);

  const matchedKey = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (payload as Record<string, T>)[matchedKey] as T;
}
