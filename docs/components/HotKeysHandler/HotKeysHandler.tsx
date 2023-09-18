import React from 'react';
import { useHotkeys } from '@mantine/hooks';
import { useMantineColorScheme, useComputedColorScheme, useDirection } from '@mantine/core';

export function HotKeysHandler() {
  const { setColorScheme } = useMantineColorScheme();
  const { toggleDirection } = useDirection();
  const computedColorScheme = useComputedColorScheme('light');
  useHotkeys(
    [
      ['mod + J', () => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')],
      ['mod + shift + L', () => toggleDirection()],
    ],
    []
  );
  return <>{null}</>;
}
