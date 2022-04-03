import React from 'react';
import { Global } from '@emotion/react';
import type { MantineTheme } from './types';

export function GlobalStyles({ theme }: { theme: MantineTheme }) {
  return (
    <Global
      styles={{
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        body: {
          ...(theme.fn.fontStyles() as any),
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
          fontSize: theme.fontSizes.md,
        },
      }}
    />
  );
}
