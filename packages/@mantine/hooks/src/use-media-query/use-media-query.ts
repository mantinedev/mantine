import { useEffect, useState } from 'react';

export interface UseMediaQueryOptions {
  getInitialValueInEffect: boolean;
}

function getInitialValue(query: string, initialValue?: boolean) {
  if (typeof initialValue === 'boolean') {
    return initialValue;
  }

  if (typeof window !== 'undefined' && 'matchMedia' in window) {
    return window.matchMedia(query).matches;
  }

  return false;
}

export function useMediaQuery(
  query: string,
  initialValue?: boolean,
  { getInitialValueInEffect }: UseMediaQueryOptions = {
    getInitialValueInEffect: true,
  }
): boolean {
  const [matches, setMatches] = useState(
    getInitialValueInEffect ? initialValue : getInitialValue(query)
  );
  useEffect(() => {
    try {
      if ('matchMedia' in window) {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);
        const callback = (event: MediaQueryListEvent) => setMatches(event.matches);
        mediaQuery.addEventListener('change', callback);
        return () => {
          mediaQuery.removeEventListener('change', callback);
        };
      }
    } catch (e) {
      // Safari iframe compatibility issue
      return undefined;
    }
  }, [query]);

  return matches || false;
}

export namespace useMediaQuery {
  export type Options = UseMediaQueryOptions;
}
