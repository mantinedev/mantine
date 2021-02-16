import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    item: {
      position: 'relative',
    },

    body: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 10,
    },

    control: {
      height: 32,
      flex: 1,
      textAlign: 'left',
      padding: 0,
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      cursor: 'pointer',
      paddingLeft: 10,
      outline: 0,

      '&:focus': {
        borderColor: theme.colors[theme.primaryColor][6],
      },

      '&:focus:not(:focus-visible)': {
        borderColor: 'transparent',
      },
    },

    hovered: {
      backgroundColor: theme.colors.gray[0],
    },
  }),
  { theming }
);
