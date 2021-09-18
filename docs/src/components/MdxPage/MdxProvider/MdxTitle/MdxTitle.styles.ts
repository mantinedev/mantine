import { createStyles, getFocusStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    marginTop: theme.spacing.xl * 1.2,
    marginBottom: theme.spacing.md,
    wordBreak: 'break-word',
  },

  link: {
    ...getFocusStyles(theme),
    textDecoration: 'none',
    color: 'inherit',
  },
}));
