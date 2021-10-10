import { createStyles, getFocusStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    marginTop: theme.spacing.xl * 1.2,
    marginBottom: theme.spacing.md,
    wordBreak: 'break-word',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  link: {
    ...getFocusStyles(theme),
    textDecoration: 'none',
    color: 'inherit',
  },
}));
