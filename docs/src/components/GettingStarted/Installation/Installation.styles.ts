import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    marginBottom: theme.spacing.xl * 2,
  },

  controls: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: -theme.spacing.md / 2,
    marginRight: -theme.spacing.md / 2,
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.xl,
  },

  installation: {
    marginTop: theme.spacing.md,
  },
}));
