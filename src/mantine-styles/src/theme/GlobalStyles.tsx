import React from 'react';
import { getFontStyles } from './utils';
import { useMantineTheme } from './MantineProvider/use-mantine-theme';
import { Global } from '../tss/Global';

export function GlobalStyles() {
  const theme = useMantineTheme();
  const styles = {
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },

    body: {
      ...getFontStyles(theme),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      lineHeight: theme.lineHeight,
    },
  } as const;

  return <Global styles={styles} />;
}
