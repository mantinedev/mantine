import { useState, useEffect, useRef } from 'react';

type MediaQueryCallback = (event: { matches: boolean; media: string }) => void;

/**
 * Older versions of Safari (shipped withCatalina and before) do not support addEventListener on matchMedia
 * https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent
 * */
function attachMediaListener(query: MediaQueryList, callback: MediaQueryCallback) {
  try {
    query.addEventListener('change', callback);
    return () => query.removeEventListener('change', callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}

function getInitialValue(query: string, ssrInitialValue?: boolean) {
  // server side render must have a default value to prevent a React hydration mismatch
  if (ssrInitialValue !== undefined) {
    return ssrInitialValue;
  }

  // client side render
  if (typeof window !== 'undefined' && 'matchMedia' in window) {
    return window.matchMedia(query).matches;
  }

  // eslint-disable-next-line no-console
  console.error(
    '[@mantine/hooks] use-media-query: Please provide a default value when using server side rendering to prevent a hydration mismatch.'
  );

  return false;
}

export function useMediaQuery(query: string, ssrInitialValue?: boolean) {
  const [matches, setMatches] = useState(getInitialValue(query, ssrInitialValue));
  const queryRef = useRef<MediaQueryList>();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if ('matchMedia' in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
    }
  }, [query]);

  return matches;
}
