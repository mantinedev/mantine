import { useMediaQuery, UseMediaQueryOptions } from '../use-media-query/use-media-query';

export function useColorScheme(initialValue?: 'dark' | 'light', options?: UseMediaQueryOptions) {
  return useMediaQuery('(prefers-color-scheme: dark)', initialValue === undefined ? undefined : initialValue === 'dark', options)
    ? 'dark'
    : 'light';
}
