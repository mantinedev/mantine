import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.md,
    marginLeft: -theme.spacing.md / 2,
    marginRight: -theme.spacing.md / 2,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'block',
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
    textDecoration: 'none',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
    },
  },

  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 4,
  },
}));
