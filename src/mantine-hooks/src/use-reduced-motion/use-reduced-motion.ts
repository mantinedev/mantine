import { useMediaQuery } from '../use-media-query/use-media-query';

export function useReducedMotion(initialValue?: boolean) {
  return useMediaQuery('(prefers-reduced-motion: reduce)', initialValue);
}
