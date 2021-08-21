import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    card: {
      position: 'relative',
      maxWidth: 300,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
      }`,
    },

    title: {
      marginTop: theme.spacing.sm,
    },

    description: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginTop: 2,
    },
  }),
  { theming }
);
