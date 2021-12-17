import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  tabs: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  tab: {
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
    height: 34,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    borderBottom: 0,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,

    '&:first-of-type': {
      borderTopLeftRadius: theme.radius.sm,
    },

    '&:not(:first-of-type)': {
      borderLeft: 0,
    },

    '&:last-of-type': {
      borderTopRightRadius: theme.radius.sm,
    },

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    },
  },

  tabActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.fn.rgba(theme.colors.gray[0], 0.65),
  },

  code: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    borderTop: 0,
  },
}));
