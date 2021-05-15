import { createUseStyles } from 'react-jss';
import { MantineTheme, getFocusStyles } from '@mantine/core';

export default createUseStyles(
  {
    tagPicker: {
      position: 'relative',
    },

    dropdown: ({ theme }: { theme: MantineTheme }) => ({
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
      }`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      width: 280,
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
    }),

    control: ({ theme }: { theme: MantineTheme }) => ({
      ...getFocusStyles(theme),
      backgroundColor: 'transparent',
      border: 0,
      padding: [0, 0],
      borderRadius: 24,
      cursor: 'pointer',
      appearance: 'none',
      WebkitAppearance: 'none',
    }),
  },
  { link: true }
);
