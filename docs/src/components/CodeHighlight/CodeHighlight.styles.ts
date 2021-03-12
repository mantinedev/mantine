import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      position: 'relative',
      marginBottom: theme.spacing.xl,
    },

    code: {
      overflowX: 'auto',
      position: 'relative',
      fontFamily: 'IBM Plex Mono, monospace',
      fontSize: theme.fontSizes.sm,
      lineHeight: 1.4,
      padding: [theme.spacing.md, theme.spacing.lg],
      borderRadius: theme.radius.sm,
    },

    copy: {
      position: 'absolute',
      top: theme.spacing.xs,
      right: theme.spacing.xs,
      zIndex: 2,
    },
  }),
  { theming }
);
