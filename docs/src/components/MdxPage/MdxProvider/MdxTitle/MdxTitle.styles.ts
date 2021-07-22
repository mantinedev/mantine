import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFocusStyles } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    title: {
      marginTop: theme.spacing.xl * 1.2,
      marginBottom: theme.spacing.md,
      wordBreak: 'break-word',
    },

    link: {
      ...getFocusStyles(theme),
      textDecoration: 'none',
      color: 'inherit',
    },
  }),
  { theming }
);
