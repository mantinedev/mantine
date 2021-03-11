import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      marginBottom: theme.spacing.xl,
    },

    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }),
  { theming }
);
