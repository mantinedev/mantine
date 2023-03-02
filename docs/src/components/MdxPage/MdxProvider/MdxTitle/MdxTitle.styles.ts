import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    marginTop: `calc(${theme.spacing.xl} * 1.2)`,
    marginBottom: theme.spacing.md,
    wordBreak: 'break-word',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  link: {
    ...theme.fn.focusStyles(),
    textDecoration: 'none',
    color: 'inherit',
  },

  offset: {
    position: 'relative',
    top: rem(-62),
  },
}));
