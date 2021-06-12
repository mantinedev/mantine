import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      paddingTop: 120,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    inner: {
      display: 'flex',
    },

    tabs: {
      flex: '0 0 40%',
    },

    main: {
      boxSizing: 'border-box',
      paddingLeft: theme.spacing.xl * 1.5,
      flex: '0 0 60%',
      paddingTop: 11,
    },
  }),
  { theming }
);
