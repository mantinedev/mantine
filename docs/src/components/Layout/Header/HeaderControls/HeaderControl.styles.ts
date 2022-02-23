import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
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
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[0],
    },
  },

  discord: {
    color: theme.white,
    backgroundColor: theme.colorScheme === 'dark' ? '#5865f2' : '#7289da',
    borderColor: theme.colorScheme === 'dark' ? '#5865f2' : '#7289da',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.lighten('#5865f2', 0.1)
          : theme.fn.darken('#7289da', 0.1),
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
