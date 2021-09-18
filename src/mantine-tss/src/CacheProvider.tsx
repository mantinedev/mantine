import React, { createContext, useContext } from 'react';
import createCache, { EmotionCache } from '@emotion/cache';

export const { getCache } = (() => {
  let cache: EmotionCache;

  function _getCache(): EmotionCache {
    if (cache === undefined) {
      cache = createCache({ key: 'tss-react' });
    }

    return cache;
  }

  return { getCache: _getCache };
})();

const context = createContext<EmotionCache>(undefined);

export function useCache() {
  const hasCache = useContext(context);
  return hasCache || getCache();
}

interface CacheProviderProps {
  value: EmotionCache;
  children: React.ReactNode;
}

export function CacheProvider({ children, value }: CacheProviderProps) {
  return <context.Provider value={value}>{children}</context.Provider>;
}
