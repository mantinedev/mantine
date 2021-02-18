import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    layout: {
      background: theme.colors.blue[7],
    },

    inner: {
      display: 'flex',
    },

    navbar: {
      flex: '0 0 260px',
    },

    main: {
      flex: 1,
      backgroundColor: theme.colors.red[7],
      paddingLeft: 15,
    },
  }),
  { theming }
);
