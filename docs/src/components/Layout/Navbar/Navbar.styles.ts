/* eslint-disable import/no-cycle */
import { createStyles, MantineTheme, rem, em } from '@mantine/core';
import { HEADER_HEIGHT } from '../Header/HeaderDesktop.styles';

export const NAVBAR_WIDTH = 260;
export const NAVBAR_BREAKPOINT = 760;

export default createStyles((theme: MantineTheme) => ({
  navbar: {
    boxSizing: 'border-box',
    height: '100vh',
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    position: 'fixed',
    zIndex: 5,
    top: 0,
    bottom: 0,
    left: 0,
    width: rem(NAVBAR_WIDTH),

    [`@media (max-width: ${em(NAVBAR_BREAKPOINT)})`]: {
      display: 'none',
    },
  },

  opened: {
    [`@media (max-width: ${em(NAVBAR_BREAKPOINT)})`]: {
      display: 'block',
      width: '100%',
      right: 0,
    },
  },

  body: {
    paddingRight: theme.spacing.md,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    paddingLeft: theme.spacing.md,
    paddingTop: `calc(${rem(HEADER_HEIGHT)} + ${theme.spacing.md})`,

    [`@media (max-width: ${em(NAVBAR_BREAKPOINT)})`]: {
      paddingBottom: rem(120),
    },
  },

  docs: {
    marginTop: theme.spacing.xl,
  },
}));
