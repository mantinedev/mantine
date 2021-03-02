import { useEffect, useRef } from 'react';

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

export function useMediaQuery(query: string, onChange: MediaQueryCallback) {
  const queryRef = useRef<MediaQueryList>();

  useEffect(() => {
    queryRef.current = window.matchMedia(query);
    onChange({ matches: queryRef.current.matches, media: queryRef.current.media });
    return attachMediaListener(queryRef.current, onChange);
  }, [query]);
}
