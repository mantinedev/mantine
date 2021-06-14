import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';
import { NAVBAR_WIDTH, NAVBAR_BREAKPOINT } from '../Layout/Navbar/Navbar.styles';
import { BREAKPOINT as MDX_PAGE_BREAKPOINT } from '../MdxPage/settings';

const FOOTER_HEIGHT = 320;

export default createUseStyles(
  (theme) => ({
    spacer: {
      height: FOOTER_HEIGHT,
    },

    wrapper: {
      backgroundColor: theme.colors.gray[0],
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: FOOTER_HEIGHT,
    },

    withNavbar: {
      paddingLeft: NAVBAR_WIDTH + theme.spacing.md * 2,
      paddingRight: theme.spacing.md * 2,

      [`@media (max-width: ${MDX_PAGE_BREAKPOINT}px)`]: {
        paddingLeft: NAVBAR_WIDTH + theme.spacing.md,
        paddingRight: theme.spacing.md,
      },

      [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
      },
    },

    inner: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 4,
      display: 'flex',
      justifyContent: 'space-between',
    },

    logoSection: {
      maxWidth: 300,
    },

    description: {
      marginTop: theme.spacing.xs,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    },

    title: {
      marginBottom: theme.spacing.sm,
      lineHeight: 1,
    },

    afterFooter: {
      borderTop: `1px solid ${theme.colors.gray[2]}`,
      paddingTop: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },

    afterFooterNote: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],

      '& a': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      },
    },
  }),
  { theming }
);
