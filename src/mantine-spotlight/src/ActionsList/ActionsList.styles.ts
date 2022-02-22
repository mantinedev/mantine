import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  nothingFound: {},

  actions: {
    padding: theme.spacing.xs / 2,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  actionsGroup: {
    textTransform: 'uppercase',
    fontSize: theme.spacing.xs,
    fontWeight: 700,
    padding: '10px 12px',
    paddingBottom: 0,
    paddingTop: 15,
  },
}));
