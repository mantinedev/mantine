import React, { createContext, useContext } from 'react';
import createCache, { EmotionCache, Options } from '@emotion/cache';
import { useMantineEmotionOptions } from '../theme/MantineProvider';

const context = createContext<EmotionCache>(undefined);

export function useCache() {
  const options = useMantineEmotionOptions();
  return useContext(context) || createCache(options);
}

interface CacheProviderProps {
  value: EmotionCache;
  children: React.ReactNode;
}

export function CacheProvider({ children, value }: CacheProviderProps) {
  return <context.Provider value={value}>{children}</context.Provider>;
}
