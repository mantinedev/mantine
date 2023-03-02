import { createStyles, rem, em } from '@mantine/core';
import { BREAKPOINT, TABLE_OF_CONTENTS_WIDTH } from '../settings';

export default createStyles((theme) => ({
  wrapper: {
    boxSizing: 'border-box',
    paddingLeft: theme.spacing.md,
    position: 'sticky',
    top: theme.spacing.xl,
    right: 0,
    paddingTop: rem(55),
    flex: `0 0 ${rem(TABLE_OF_CONTENTS_WIDTH - 20)}`,

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      display: 'none',
    },
  },

  withTabs: {
    paddingTop: 0,
    top: `calc(${rem(60)} + ${theme.spacing.xl})`,
  },

  inner: {
    paddingTop: 0,
    paddingBottom: theme.spacing.xl,
    paddingLeft: theme.spacing.md,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  items: {
    borderLeft: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    borderLeft: `${rem(1)} solid transparent`,
    padding: `${rem(8)} ${theme.spacing.md}`,
    marginLeft: -1,
  },

  linkActive: {
    borderLeftColor: theme.colors.blue[5],
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors.blue[9], 0.45)
        : theme.colors.blue[0],
    color: theme.colorScheme === 'dark' ? theme.colors.blue[1] : theme.colors.blue[8],
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },

  title: {
    marginLeft: theme.spacing.md,
  },
}));
