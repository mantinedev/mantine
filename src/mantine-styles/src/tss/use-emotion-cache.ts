import { defaultMantineEmotionCache } from './default-emotion-cache';
import { useMantineEmotionCache } from '../theme/MantineProvider';

export function useEmotionCache() {
  const cache = useMantineEmotionCache();
  return cache || defaultMantineEmotionCache;
}
