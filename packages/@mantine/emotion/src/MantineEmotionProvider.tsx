import { createContext, useContext } from 'react';
import { EmotionCache, withEmotionCache } from '@emotion/react';

export const EmotionCacheContext = createContext<EmotionCache | null>(null);

export function useEmotionCache() {
  const cache = useContext(EmotionCacheContext);

  if (cache === null) {
    throw new Error(
      'Emotion cache is not available in context, make sure that you have MantineEmotionProvider in the component tree'
    );
  }

  return cache;
}

interface EmotionCacheProviderProps {
  children: React.ReactNode;
  cache?: EmotionCache;
}

export const MantineEmotionProvider = withEmotionCache<EmotionCacheProviderProps>(
  ({ children, cache }, ctx) => (
    <EmotionCacheContext.Provider value={cache || ctx}>{children}</EmotionCacheContext.Provider>
  )
);
