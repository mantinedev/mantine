import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 755px)';

export default createUseStyles(
  (theme) => ({
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: [theme.spacing.xs, theme.spacing.md],
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },

    controls: {
      [BREAKPOINT]: {
        marginTop: 0,
        flexDirection: 'row-reverse',
      },
    },

    controlLabel: {
      marginLeft: theme.spacing.xs,
    },

    action: {
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3],

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      },
    },

    actions: {
      [BREAKPOINT]: {
        display: 'none',
      },
    },
  }),
  { theming }
);
