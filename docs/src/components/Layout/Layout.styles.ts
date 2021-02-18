import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    layout: {
      background: theme.colors.blue[7],
      display: 'flex',
    },

    navbar: {
      flex: '0 0 300px',
    },

    main: {},
  }),
  { theming }
);
