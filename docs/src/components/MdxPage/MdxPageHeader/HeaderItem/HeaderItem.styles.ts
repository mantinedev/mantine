import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    item: {
      display: 'flex',
      alignItems: 'center',
      height: 20,

      '& + &': {
        marginTop: theme.spacing.xs,
      },
    },

    label: {
      color: theme.colors.gray[6],
      width: 100,
      lineHeight: 1,
      marginBottom: 2,

      '@media (max-width: 500px)': {
        display: 'none',
      },
    },
  }),
  { theming }
);
