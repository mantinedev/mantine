import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    title: {
      fontFamily: `Dosis, ${theme.fontFamily}`,
      fontSize: 42,
      lineHeight: 1.1,
      margin: 0,
      padding: 0,
      color: theme.white,
      textAlign: 'center',
      marginBottom: theme.spacing.xl * 2,
      textShadow: '1px 2px 2px rgba(0, 0, 0, .3)',

      '@media (max-width: 600px)': {
        fontSize: 30,
        marginBottom: theme.spacing.xl,
      },
    },
  }),
  { theming }
);
