import { useEffect, useRef, useState } from 'react';

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
  const queryRef = useRef<MediaQueryList>(null);

  useEffect(() => {
    if ('matchMedia' in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      const callback = (event: MediaQueryListEvent) => setMatches(event.matches);
      queryRef.current.addEventListener('change', callback);
      return () => {
        queryRef.current?.removeEventListener('change', callback);
      };
    }

    return undefined;
  }, [query]);

  return matches || false;
}
