import createCache from '@emotion/cache';
import { useMantineEmotionCache } from '../theme/MantineProvider';

export const defaultMantineEmotionCache = createCache({ key: 'mantine', prepend: true });

export function useEmotionCache() {
  const cache = useMantineEmotionCache();
  return cache || defaultMantineEmotionCache;
}
