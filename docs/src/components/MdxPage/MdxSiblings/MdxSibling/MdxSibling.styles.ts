import { createStyles } from '@mantine/core';

export default createStyles((theme, _params, getRef) => ({
  control: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    justifyContent: 'space-between',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  body: {
    ref: getRef('body'),
  },

  next: {
    [`& .${getRef('body')}`]: {
      marginRight: theme.spacing.md,
    },
  },
}));
