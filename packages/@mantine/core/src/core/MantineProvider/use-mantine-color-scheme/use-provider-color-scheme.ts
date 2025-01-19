import { useCallback, useEffect, useRef, useState } from 'react';
import { useIsomorphicEffect } from '@mantine/hooks';
import type { MantineColorSchemeManager } from '../color-scheme-managers';
import type { MantineColorScheme } from '../theme.types';

function setColorSchemeAttribute(
  colorScheme: MantineColorScheme,
  getRootElement: () => HTMLElement | undefined
) {
  const hasDarkColorScheme =
    typeof window !== 'undefined' &&
    'matchMedia' in window &&
    window.matchMedia('(prefers-color-scheme: dark)')?.matches;

  const computedColorScheme =
    colorScheme !== 'auto' ? colorScheme : hasDarkColorScheme ? 'dark' : 'light';
  getRootElement()?.setAttribute('data-mantine-color-scheme', computedColorScheme);
}

type MediaQueryCallback = (event: { matches: boolean; media: string }) => void;

interface UseProviderColorSchemeOptions {
  manager: MantineColorSchemeManager;
  defaultColorScheme: MantineColorScheme;
  forceColorScheme: 'light' | 'dark' | undefined;
  getRootElement: () => HTMLElement | undefined;
}

export function useProviderColorScheme({
  manager,
  defaultColorScheme,
  getRootElement,
  forceColorScheme,
}: UseProviderColorSchemeOptions) {
  const media = useRef<MediaQueryList>(null);
  const [value, setValue] = useState(() => manager.get(defaultColorScheme));
  const colorSchemeValue = forceColorScheme || value;

  const setColorScheme = useCallback(
    (colorScheme: MantineColorScheme) => {
      if (!forceColorScheme) {
        setColorSchemeAttribute(colorScheme, getRootElement);
        setValue(colorScheme);
        manager.set(colorScheme);
      }
    },
    [manager.set, colorSchemeValue, forceColorScheme]
  );

  const clearColorScheme = useCallback(() => {
    setValue(defaultColorScheme);
    setColorSchemeAttribute(defaultColorScheme, getRootElement);
    manager.clear();
  }, [manager.clear, defaultColorScheme]);

  useEffect(() => {
    manager.subscribe(setColorScheme);
    return manager.unsubscribe;
  }, [manager.subscribe, manager.unsubscribe]);

  useIsomorphicEffect(() => {
    setColorSchemeAttribute(manager.get(defaultColorScheme), getRootElement);
  }, []);

  useEffect(() => {
    if (forceColorScheme) {
      setColorSchemeAttribute(forceColorScheme, getRootElement);
      return () => {};
    }

    if (forceColorScheme === undefined) {
      setColorSchemeAttribute(value, getRootElement);
    }

    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      media.current = window.matchMedia('(prefers-color-scheme: dark)');
    }

    const listener: MediaQueryCallback = (event) => {
      if (value === 'auto') {
        setColorSchemeAttribute(event.matches ? 'dark' : 'light', getRootElement);
      }
    };

    media.current?.addEventListener('change', listener);
    return () => media.current?.removeEventListener('change', listener);
  }, [value, forceColorScheme]);

  return { colorScheme: colorSchemeValue, setColorScheme, clearColorScheme };
}
