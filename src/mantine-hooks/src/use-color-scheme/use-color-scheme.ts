import { useMediaQuery } from '../use-media-query/use-media-query';

export function useColorScheme(initialValue?: 'dark' | 'light') {
  return useMediaQuery('(prefers-color-scheme: dark)', initialValue === 'dark') ? 'dark' : 'light';
}
