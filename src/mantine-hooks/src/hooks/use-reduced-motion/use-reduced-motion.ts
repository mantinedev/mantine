import { useState } from 'react';
import { useMediaQuery } from '../use-media-query/use-media-query';

export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  useMediaQuery('(prefers-reduced-motion: reduce)', (event) =>
    setShouldReduceMotion(event.matches)
  );
  return shouldReduceMotion;
}
