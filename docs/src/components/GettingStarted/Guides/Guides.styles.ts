import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  guide: {
    paddingTop: theme.spacing.xl,
  },

  controls: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: -theme.spacing.md / 2,
    marginRight: -theme.spacing.md / 2,
    marginTop: theme.spacing.xs,
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
  },

  active: {
    borderColor: theme.colors.blue[6],
  },
}));
