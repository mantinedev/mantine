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
      if (process.env.NODE_ENV === 'development' && options && !options.key) {
        console.error('`key` is required for `emotionOptions`');
      }
      _key = options?.key;
      cache = createCache(options?.key ? options : defaultCacheOptions);
    }

    return cache;
  }

  return { getCache: _getCache };
})();

export function useEmotionCache() {
  const options = useMantineEmotionOptions();
  return getCache(options);
}
