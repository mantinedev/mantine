import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 755px)';

export default createUseStyles(
  (theme) => ({
    canvas: {
      borderRadius: theme.radius.md,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
      }`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,

      '& + &': {
        marginTop: theme.spacing.xl * 2,
      },
    },

    body: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      padding: [theme.spacing.xs, theme.spacing.md],
      borderBottomRightRadius: theme.radius.md - 1,
      borderBottomLeftRadius: theme.radius.md - 1,

      [BREAKPOINT]: {
        padding: 0,
      },
    },

    bodyRaw: {
      padding: 0,

      '& $preview': {
        padding: 4,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      },
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
      position: 'relative',

      [BREAKPOINT]: {
        padding: theme.spacing.xs,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      },
    },
  }),
  { theming }
);
