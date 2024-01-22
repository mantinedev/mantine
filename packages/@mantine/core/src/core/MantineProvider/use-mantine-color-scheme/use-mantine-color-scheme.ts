import { useCallback, useContext, useEffect, useRef } from 'react';
import { useColorScheme } from '@mantine/hooks';
import { MantineContext } from '../Mantine.context';
import { MantineColorScheme } from '../theme.types';

function disableTransition() {
  const style = document.createElement('style');
  style.innerHTML = '*, *::before, *::after {transition: none !important;}';
  style.setAttribute('data-mantine-disable-transition', 'true');
  document.head.appendChild(style);
  const clear = () =>
    document
      .querySelectorAll('[data-mantine-disable-transition]')
      .forEach((element) => element.remove());
  return clear;
}

export function useMantineColorScheme({ keepTransitions }: { keepTransitions?: boolean } = {}) {
  const clearStylesRef = useRef<() => void>();
  const timeoutRef = useRef<number>();
  const ctx = useContext(MantineContext);

  if (!ctx) {
    throw new Error('[@mantine/core] MantineProvider was not found in tree');
  }

  const setColorScheme = (value: MantineColorScheme) => {
    ctx.setColorScheme(value);
    clearStylesRef.current = keepTransitions ? () => {} : disableTransition();
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      clearStylesRef.current?.();
    }, 10);
  };

  const clearColorScheme = () => {
    ctx.clearColorScheme();
    clearStylesRef.current = keepTransitions ? () => {} : disableTransition();
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      clearStylesRef.current?.();
    }, 10);
  };

  const osColorScheme = useColorScheme('light', { getInitialValueInEffect: false });
  const computedColorScheme = ctx.colorScheme === 'auto' ? osColorScheme : ctx.colorScheme;

  const toggleColorScheme = useCallback(
    () => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light'),
    [setColorScheme, computedColorScheme]
  );

  useEffect(
    () => () => {
      clearStylesRef.current?.();
      window.clearTimeout(timeoutRef.current);
    },
    []
  );

  return {
    colorScheme: ctx.colorScheme,
    setColorScheme,
    clearColorScheme,
    toggleColorScheme,
  };
}
