import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export const BREAKPOINT = '@media (max-width: 960px)';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      paddingTop: 120,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    inner: {
      display: 'flex',

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    tabs: {
      flex: '0 0 40%',
      maxWidth: '40%',

      [BREAKPOINT]: {
        flex: 1,
        maxWidth: '100%',
      },
    },

    main: {
      boxSizing: 'border-box',
      paddingLeft: theme.spacing.xl * 1.5,
      flex: '0 0 60%',
      maxWidth: '60%',
      paddingTop: theme.spacing.md,

      [BREAKPOINT]: {
        flex: 1,
        paddingLeft: 0,
        maxWidth: '100%',
      },
    },
  }),
  { theming }
);
