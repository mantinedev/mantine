import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      '& + &': {
        marginLeft: 80,
      },
    },

    link: {
      display: 'block',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
      fontSize: theme.fontSizes.sm,
      paddingTop: 3,
      paddingBottom: 3,

      '&:hover': {
        textDecoration: 'underline',
      },
    },

    title: {
      fontSize: theme.fontSizes.lg,
      fontWeight: 500,
      marginBottom: theme.spacing.xs,
    },
  }),
  { theming }
);
