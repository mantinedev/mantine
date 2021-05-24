import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    code: {
      marginBottom: 0,
    },

    copy: {
      marginLeft: theme.spacing.xl,
    },
  }),
  { theming }
);
