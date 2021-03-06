import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    code: {
      fontFamily: 'IBM Plex Mono, monospace',
      fontSize: theme.fontSizes.sm,
      lineHeight: 1.4,
      padding: [theme.spacing.md, theme.spacing.lg],
      borderRadius: theme.radius.sm,
      marginBottom: theme.spacing.xl,
    },
  }),
  { theming }
);
