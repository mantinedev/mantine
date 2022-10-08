import React from 'react';
import { EmotionCache, useEmotionCache } from '@mantine/core';
import { useIsomorphicEffect } from '@mantine/hooks';

interface ClientProviderProps {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}

export function ClientProvider({ children, emotionCache }: ClientProviderProps) {
  const defaultCache = useEmotionCache();
  const cache = emotionCache || defaultCache;

  useIsomorphicEffect(() => {
    cache.sheet.container = document.head;
    const { tags } = cache.sheet;
    cache.sheet.flush();
    tags.forEach((tag) => {
      (cache.sheet as any)._insertTag(tag);
    });
  }, []);

  return <>{children}</>;
}
