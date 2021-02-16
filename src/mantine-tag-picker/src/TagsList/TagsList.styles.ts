import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFontStyles } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    tagsList: {
      paddingTop: 10,
      paddingBottom: 10,
    },

    description: {
      marginTop: 10,
      marginBottom: 7,
      padding: [0, 10],
    },

    searchInput: {
      marginLeft: 10,
      marginRight: 10,
    },

    createControl: {
      ...getFontStyles(theme),
      backgroundColor: 'transparent',
      border: 0,
      outline: 0,
      paddingLeft: 10,
      paddingRight: 10,
      width: '100%',
      textAlign: 'left',
      height: 32,
      color: theme.colors.gray[7],
      cursor: 'pointer',
    },

    createControlLabel: {
      marginRight: 10,
    },

    createControlHovered: {
      backgroundColor: theme.colors.gray[0],
    },
  }),
  { theming }
);
