import createCache, { EmotionCache, Options } from '@emotion/cache';
import { useMantineEmotionOptions } from '../theme/MantineProvider';

const defaultCacheOptions: Options = {
  key: 'mantine',
  prepend: true,
};

export const { getCache } = (() => {
  let cache: EmotionCache;
  let _key = defaultCacheOptions.key;

  function _getCache(options?: Options) {
    if (cache === undefined || _key !== options?.key) {
      _key = options?.key || 'mantine';
      cache = createCache(options || defaultCacheOptions);
    }

    return cache;
  }

  return { getCache: _getCache };
})();

export function useEmotionCache() {
  const options = useMantineEmotionOptions();
  return getCache(options);
}
