import { useState, CSSProperties } from 'react';
import { useMediaQuery } from '../use-media-query/use-media-query';

export function useBreakpoint(maxWidth: CSSProperties['maxWidth']) {
  const [matches, setMatches] = useState(false);
  useMediaQuery(`(max-width: ${maxWidth})`, (event) => setMatches(event.matches));
  return matches;
}
