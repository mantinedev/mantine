import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  nothingFound: {},

  actions: {
    padding: `calc(${theme.spacing.xs} / 2)`,
  },

  actionsGroup: {
    textTransform: 'uppercase',
    fontSize: theme.spacing.xs,
    fontWeight: 700,
    padding: `${rem(10)} ${rem(12)}`,
    paddingBottom: 0,
    paddingTop: theme.spacing.md,
  },
}));
