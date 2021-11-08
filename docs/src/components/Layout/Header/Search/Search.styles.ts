import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    flex: 1,
    maxWidth: 480,
    paddingRight: theme.spacing.xl,
    position: 'relative',

    '@media (max-width: 760px)': {
      display: 'none',
    },
  },

  shortcut: {
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    userSelect: 'none',
  },

  kbd: {
    '& + &': {
      marginLeft: 2,
    },
  },

  kbdEnter: {
    boxSizing: 'border-box',
    width: 40,
  },

  input: {
    position: 'relative',
    zIndex: 2,
  },

  dropdown: {
    position: 'absolute',
    top: theme.spacing.md * -1,
    right: theme.spacing.md * -1,
    left: theme.spacing.md * -1,
    zIndex: 1,
    paddingTop: 36 + theme.spacing.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },

  dropdownBody: {
    padding: `${theme.spacing.xs}px 0`,
  },

  item: {
    ...theme.fn.focusStyles(),
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    padding: `0 ${theme.spacing.md}px`,
    border: 0,
  },

  itemHovered: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.blue[0],
  },

  package: {
    fontFamily: theme.fontFamilyMonospace,
  },
}));
