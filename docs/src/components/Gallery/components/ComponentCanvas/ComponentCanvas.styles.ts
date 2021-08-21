import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    canvas: {
      borderRadius: theme.radius.md,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
      }`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    },

    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: [theme.spacing.xs, theme.spacing.md],
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    controlLabel: {
      marginLeft: theme.spacing.xs,
    },

    body: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      padding: [theme.spacing.xs, theme.spacing.md],
      borderBottomRightRadius: theme.radius.md - 1,
      borderBottomLeftRadius: theme.radius.md - 1,
    },

    bodyWithCode: {
      padding: 0,
      backgroundColor: theme.white,
    },

    code: {
      borderBottomRightRadius: theme.radius.md - 1,
      borderBottomLeftRadius: theme.radius.md - 1,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
    },

    preview: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      padding: theme.spacing.md,
      borderRadius: theme.radius.md,
    },

    action: {
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3],

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      },
    },
  }),
  { theming }
);
