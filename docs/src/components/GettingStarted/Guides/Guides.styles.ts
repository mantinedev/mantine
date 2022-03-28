import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  guide: {
    paddingTop: theme.spacing.xl,
  },

  control: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[4]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
    },
    minWidth: 180,
    flex: 1,
  },

  active: {
    borderColor: theme.colors.blue[6],
  },
}));
