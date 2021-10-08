/* eslint-disable import/no-cycle */
import { createStyles, MantineTheme } from '@mantine/core';
import { HEADER_HEIGHT } from '../Header/Header.styles';

export const NAVBAR_WIDTH = 260;
export const NAVBAR_BREAKPOINT = 760;

export default createStyles((theme: MantineTheme) => ({
  navbar: {
    boxSizing: 'border-box',
    height: '100vh',
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    position: 'fixed',
    zIndex: 5,
    top: 0,
    bottom: 0,
    left: 0,
    width: NAVBAR_WIDTH,

    [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
      display: 'none',
    },
  },

  opened: {
    [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
      display: 'block',
      width: '100%',
      right: 0,
    },
  },

  body: {
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.xl * 2,
    paddingLeft: theme.spacing.md,
    paddingTop: HEADER_HEIGHT + theme.spacing.md,

    [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
      paddingBottom: 120,
    },
  },

  docs: {
    marginTop: theme.spacing.xl,
  },
}));
