import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      paddingTop: 54,
      paddingLeft: theme.spacing.xl * 2,
      paddingRight: theme.spacing.xl * 2,
    },

    title: {
      fontFamily: `Dosis, ${theme.fontFamily}`,
      marginBottom: theme.spacing.md,
      fontSize: 38,
    },

    subtitle: {
      marginTop: theme.spacing.xl,
    },
  }),
  { theming }
);
