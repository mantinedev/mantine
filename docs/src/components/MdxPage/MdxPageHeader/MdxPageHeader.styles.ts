import { createStyles } from '@mantine/core';
import { BREAKPOINT } from '../settings';

export default createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    zIndex: 4,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    paddingLeft: theme.spacing.xl * 2,
    paddingRight: theme.spacing.xl * 2,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
    },
  },

  header: {
    paddingTop: 50,
    maxWidth: 1082,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: theme.spacing.xl * 1.5,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      maxWidth: '100%',
      paddingRight: 0,
      paddingBottom: theme.spacing.xl,
    },
  },

  withTabs: {
    paddingBottom: theme.spacing.xl * 1.5,
  },

  title: {
    fontSize: 44,
    marginBottom: theme.spacing.xs / 2,
    fontWeight: 900,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      fontSize: 32,
      lineHeight: 1.2,
    },
  },

  description: {
    maxWidth: 450,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    marginBottom: theme.spacing.xl,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      fontSize: theme.fontSizes.md,
    },
  },
}));
