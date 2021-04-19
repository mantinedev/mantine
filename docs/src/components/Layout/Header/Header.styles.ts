import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFocusStyles } from '@mantine/theme';
// eslint-disable-next-line import/no-cycle
import { NAVBAR_BREAKPOINT } from '../Navbar/Navbar.styles';

export const HEADER_HEIGHT = 60;
export const HEADER_BREAKPOINT = 960;

export default createUseStyles(
  (theme: MantineTheme) => ({
    header: {
      top: 0,
      left: 0,
      right: 0,
      height: HEADER_HEIGHT,
      zIndex: 6,
      position: 'fixed',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]
      }`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    logo: {
      ...getFocusStyles(theme),
      paddingRight: theme.spacing.md,
      paddingLeft: theme.spacing.md,
      height: HEADER_HEIGHT,
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      userSelect: 'none',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    image: {
      height: 30,
    },

    links: {
      flex: 1,
      marginLeft: theme.spacing.xl,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: theme.spacing.md,

      [`@media (max-width: ${HEADER_BREAKPOINT}px)`]: {
        display: 'none',
      },
    },

    mainSection: {
      [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      },
    },

    burger: {
      display: 'none',

      [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
        display: 'block',
        position: 'absolute',
        top: 17,
        left: theme.spacing.md - 4,
      },
    },

    link: {
      ...getFocusStyles(theme),
      outline: 0,
      display: 'flex',
      alignItems: 'center',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      textDecoration: 'none',
      borderRadius: theme.radius.sm,
      padding: [6, theme.spacing.md],
      height: 36,
      boxSizing: 'border-box',

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      },
    },

    linkLabel: {
      marginLeft: theme.spacing.xs,
    },

    logoWrapper: {
      display: 'flex',
      alignItems: 'center',
    },

    version: {
      ...getFocusStyles(theme),
      fontWeight: 700,
      textDecoration: 'none',
    },

    themeToggle: {
      marginLeft: theme.spacing.xs,
    },
  }),
  { theming }
);
