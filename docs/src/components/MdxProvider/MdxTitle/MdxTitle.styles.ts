import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFocusStyles } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    title: {
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
