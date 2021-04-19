import { useMediaQuery } from '../use-media-query/use-media-query';

export function useColorScheme() {
  return useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
}
