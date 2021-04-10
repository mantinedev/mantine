import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFocusStyles } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    title: {
      marginTop: theme.spacing.xl * 1.5,
      marginBottom: theme.spacing.md,
    },

    link: {
      ...getFocusStyles(theme),
      textDecoration: 'none',
      color: 'inherit',
    },
  }),
  { theming }
);
