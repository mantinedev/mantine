import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFocusStyles } from '@mantine/core';

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
      ...getFocusStyles(theme),
      border: 0,
      padding: [0, 0],
      borderRadius: 24,
      cursor: 'pointer',
      outline: 0,
    },
  }),
  { theming }
);
