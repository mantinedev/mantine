import { useMediaQuery, UseMediaQueryOptions } from '../use-media-query/use-media-query';

export type UseColorSchemeValue = 'dark' | 'light';

export function useColorScheme(
  initialValue?: UseColorSchemeValue,
  options?: UseMediaQueryOptions
): UseColorSchemeValue {
  return useMediaQuery('(prefers-color-scheme: dark)', initialValue === 'dark', options)
    ? 'dark'
    : 'light';
}
