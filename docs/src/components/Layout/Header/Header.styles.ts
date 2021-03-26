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
      zIndex: 1000,
      position: 'fixed',
      backgroundColor: theme.white,
      borderBottom: `1px solid ${theme.colors.gray[2]}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    logo: {
      paddingRight: theme.spacing.md,
      paddingLeft: theme.spacing.md,
      height: HEADER_HEIGHT,
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      userSelect: 'none',
    },

    image: {
      height: 30,
    },

    links: {
      display: 'flex',
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
      color: theme.colors.gray[7],
      textDecoration: 'none',
      borderRadius: theme.radius.sm,
      padding: [theme.spacing.xs, theme.spacing.md],

      '&:hover': {
        backgroundColor: theme.colors.blue[0],
        color: theme.colors.blue[6],
      },
    },

    linkLabel: {
      marginLeft: theme.spacing.xs,
    },
  }),
  { theming }
);
