import { createUseStyles } from 'react-jss';
import { MantineTheme, getFocusStyles } from '@mantine/core';

export default createUseStyles({
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

  control: ({ theme }: { theme: MantineTheme }) => ({
    ...getFocusStyles(theme),
    border: 0,
    padding: [0, 0],
    borderRadius: 24,
    cursor: 'pointer',
  }),
});
