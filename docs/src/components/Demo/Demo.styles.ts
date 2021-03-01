import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    demo: {
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.lg,
    },
  }),
  { theming }
);
