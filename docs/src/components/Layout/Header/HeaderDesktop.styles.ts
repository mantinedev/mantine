import { createStyles } from '@mantine/core';
// eslint-disable-next-line import/no-cycle
import { NAVBAR_BREAKPOINT } from '../Navbar/Navbar.styles';

export const HEADER_HEIGHT = 60;

export default createStyles((theme) => ({
  header: {
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    zIndex: 6,
    position: 'fixed',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 'var(--removed-scroll-width, 0px)',

    [theme.fn.smallerThan(NAVBAR_BREAKPOINT)]: {
      display: 'none',
    },
  },

  logo: {
    paddingRight: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    height: HEADER_HEIGHT,
    paddingTop: 6,
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
    marginTop: 2,

    [theme.fn.smallerThan(860)]: {
      display: 'none',
    },
  },
}));
