import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    tagPicker: {
      position: 'relative',
    },

    dropdown: {
      width: 280,
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
    },

    control: {
      border: 0,
      padding: [0, 0],
      borderRadius: 24,
      cursor: 'pointer',
      outline: 0,

      '&:focus': {
        boxShadow: `0 0 0 2px ${theme.white}, 0 0 0 4px ${theme.colors[theme.primaryColor][5]}`,
      },

      '&:focus:not(:focus-visible)': {
        boxShadow: 'none',
      },
    },
  }),
  { theming }
);
