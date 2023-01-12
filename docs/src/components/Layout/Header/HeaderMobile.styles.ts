import { createStyles, rem } from '@mantine/core';
import { NAVBAR_BREAKPOINT } from '../Navbar/Navbar.styles';
import { HEADER_HEIGHT } from './HeaderDesktop.styles';

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

    [theme.fn.largerThan(NAVBAR_BREAKPOINT)]: {
      display: 'none',
    },
  },

  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  logo: {
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
    ...theme.fn.focusStyles(),
    fontWeight: 700,
    textDecoration: 'none',
    marginTop: rem(2),

    [theme.fn.smallerThan(860)]: {
      display: 'none',
    },
  },
}));
