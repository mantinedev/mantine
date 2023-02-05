import { createStyles, rem, em } from '@mantine/core';
import { BREAKPOINT } from '../settings';

export default createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    zIndex: 4,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,
    paddingRight: `calc(${theme.spacing.xl} * 2)`,

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
    },
  },

  header: {
    paddingTop: rem(50),
    maxWidth: rem(1082),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: `calc(${theme.spacing.xl} * 1.5)`,

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      maxWidth: '100%',
      paddingRight: 0,
      paddingBottom: theme.spacing.xl,
    },
  },

  withTabs: {
    paddingBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  title: {
    fontSize: rem(44),
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    fontWeight: 900,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xl,

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      fontSize: rem(32),
      lineHeight: 1.2,
    },
  },

  description: {
    maxWidth: rem(450),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    marginBottom: theme.spacing.xl,

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      fontSize: theme.fontSizes.md,
    },
  },
}));
