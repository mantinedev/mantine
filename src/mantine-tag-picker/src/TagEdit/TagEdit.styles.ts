import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles, getFocusStyles, hexToRgba } from '@mantine/core';

export default createUseStyles({
  tagEdit: ({ theme }: { theme: MantineTheme }) => ({
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingTop: 10,
    paddingBottom: 10,
    position: 'absolute',
    top: 0,
    width: 240,
    left: 240,
    zIndex: 5,
  }),

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  input: {
    flex: 1,
    marginRight: 10,
  },

  deleteControl: ({ theme }: { theme: MantineTheme }) => ({
    ...getFontStyles(theme),
    ...getFocusStyles(theme),
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    border: 0,
    width: '100%',
    backgroundColor: 'transparent',
    textAlign: 'left',
    height: 32,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    cursor: 'pointer',
    marginTop: 10,

    '&:hover, &:focus': {
      backgroundColor:
        theme.colorScheme === 'dark' ? hexToRgba(theme.colors.red[9], 0.4) : theme.colors.red[0],
      color: theme.colorScheme === 'dark' ? theme.colors.red[0] : theme.colors.red[7],
    },
  }),

  deleteIcon: {
    marginRight: 10,
  },

  colorsList: ({ theme }: { theme: MantineTheme }) => ({
    marginTop: 5,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    paddingTop: 10,
  }),

  colorControl: ({ theme }: { theme: MantineTheme }) => ({
    ...getFontStyles(theme),
    ...getFocusStyles(theme),
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    textTransform: 'capitalize',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: '1px dotted transparent',
    paddingLeft: 10,
    paddingRight: 10,
    height: 28,
    cursor: 'pointer',
    outline: 0,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  }),

  colorLabel: {
    marginLeft: 10,
  },

  colorControlBody: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
});
