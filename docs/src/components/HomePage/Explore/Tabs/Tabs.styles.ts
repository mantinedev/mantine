import { createStyles, getFocusStyles } from '@mantine/core';
import { BREAKPOINT } from '../Explore.styles';

export default createStyles((theme) => ({
  tabs: {
    position: 'sticky',
    top: 60,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    zIndex: 10,
    [BREAKPOINT]: {
      display: 'flex',
      overflowX: 'scroll',
    },
  },

  tab: {
    ...getFocusStyles(theme),
    display: 'block',
    width: '100%',
    backgroundColor: 'transparent',
    border: 0,
    appearance: 'none',
    textAlign: 'left',
    WebkitTapHighlightColor: 'transparent',
    opacity: 0.6,
    cursor: 'pointer',
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,

    '&:hover': {
      opacity: 1,
    },

    '&:not(:last-of-type)': {
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },

    [BREAKPOINT]: {
      whiteSpace: 'nowrap',

      '&:not(:last-of-type)': {
        borderBottom: 0,
        marginRight: theme.spacing.lg,
      },
    },
  },

  active: {
    opacity: 1,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
  },

  index: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 500,
    border: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7]
    }`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,

    [BREAKPOINT]: {
      borderRadius: theme.radius.sm,
      width: 20,
      height: 20,
      fontSize: 12,
    },
  },

  title: {
    fontSize: 22,
    fontWeight: 700,
    marginLeft: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    [BREAKPOINT]: {
      fontSize: 16,
      fontWeight: 500,
    },
  },

  description: {
    boxSizing: 'border-box',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    [BREAKPOINT]: {
      display: 'none',
    },
  },
}));
