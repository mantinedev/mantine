import { createStyles } from '@mantine/core';

interface HeaderControlStyles {
  hideOnMobile: boolean;
}

export default createStyles((theme, { hideOnMobile }: HeaderControlStyles) => ({
  control: {
    ...theme.fn.focusStyles(),
    width: 34,
    height: 34,
    borderRadius: theme.radius.md,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[7],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      display: hideOnMobile ? 'none' : undefined,
      position: 'fixed',
      right: theme.spacing.md,
      top: 14,
    },
  },

  discord: {
    color: theme.white,
    backgroundColor: '#5865f2',
    borderColor: '#5865f2',

    '&:hover': {
      backgroundColor: theme.fn.lighten('#5865f2', 0.1),
    },
  },

  twitter: {
    color: theme.white,
    backgroundColor: theme.colorScheme === 'dark' ? '#1C8CD8' : '#00acee',
    borderColor: theme.colorScheme === 'dark' ? '#1C8CD8' : '#00acee',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.lighten('#1C8CD8', 0.1)
          : theme.fn.darken('#00acee', 0.1),
    },
  },
}));
