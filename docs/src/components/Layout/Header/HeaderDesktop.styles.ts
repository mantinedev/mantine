import { createStyles, rem } from '@mantine/core';
// eslint-disable-next-line import/no-cycle
import { NAVBAR_BREAKPOINT } from '../Navbar/Navbar.styles';

export const HEADER_HEIGHT = 60;

export default createStyles((theme) => ({
  header: {
    top: 0,
    left: 0,
    right: 0,
    height: rem(HEADER_HEIGHT),
    zIndex: 6,
    position: 'fixed',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    [theme.fn.smallerThan(NAVBAR_BREAKPOINT)]: {
      display: 'none',
    },
  },

  logo: {
    paddingRight: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    height: rem(HEADER_HEIGHT),
    paddingTop: rem(6),
    display: 'flex',
    alignItems: 'center',
  },

  mainSection: {
    display: 'flex',
    alignItems: 'center',
  },

  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'all',
  },

  version: {
    fontWeight: 700,
    position: 'relative',
    paddingRight: rem(20),
    display: 'block',
    marginTop: rem(2),

    [theme.fn.smallerThan(860)]: {
      display: 'none',
    },
  },

  chevron: {
    position: 'absolute',
    right: rem(4),
    top: rem(5),
  },
}));
