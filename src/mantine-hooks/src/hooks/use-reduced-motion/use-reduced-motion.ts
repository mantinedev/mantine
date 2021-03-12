import { useMediaQuery } from '../use-media-query/use-media-query';

export function useReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
