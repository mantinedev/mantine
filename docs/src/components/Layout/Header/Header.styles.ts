import { createStyles } from '@mantine/core';
// eslint-disable-next-line import/no-cycle
import { NAVBAR_BREAKPOINT } from '../Navbar/Navbar.styles';

export const HEADER_HEIGHT = 60;
export const HEADER_BREAKPOINT = 860;

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
  },

  logo: {
    paddingRight: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
  },

  links: {
    flex: 1,
    marginLeft: theme.spacing.xl,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing.md,
  },

  mainSection: {
    [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
    },
  },

  burger: {
    display: 'none',
    pointerEvents: 'all',

    [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
      display: 'block',
      position: 'absolute',
      top: 17,
      left: theme.spacing.md - 4,
    },
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
    marginBottom: 6,

    [`@media (max-width: ${HEADER_BREAKPOINT}px)`]: {
      display: 'none',
    },
  },
}));
