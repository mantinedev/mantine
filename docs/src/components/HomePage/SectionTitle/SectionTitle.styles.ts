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
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textAlign: 'center',
      marginBottom: theme.spacing.xl * 2,

      '@media (max-width: 600px)': {
        fontSize: 30,
        marginBottom: theme.spacing.xl,
      },
    },
  }),
  { theming }
);
