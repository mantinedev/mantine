import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    title: {
      fontFamily: `Dosis, ${theme.fontFamily}`,
      marginBottom: theme.spacing.md,
      marginTop: theme.spacing.md,
      fontSize: 38,
    },
  }),
  { theming }
);
