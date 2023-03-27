import { createStyles, rem, em } from '@mantine/core';
import { NAVBAR_WIDTH, NAVBAR_BREAKPOINT } from '../Layout/Navbar/Navbar.styles';
import { BREAKPOINT as MDX_PAGE_BREAKPOINT } from '../MdxPage/settings';

const FOOTER_HEIGHT = rem(400);
const FOOTER_HEIGHT_TABLET = rem(460);
const FOOTER_HEIGHT_MOBILE = rem(320);

export default createStyles((theme) => ({
  spacer: {
    height: FOOTER_HEIGHT,

    [`@media (max-width: ${em(800)})`]: {
      height: FOOTER_HEIGHT_TABLET,
    },

    [`@media (max-width: ${em(640)})`]: {
      height: FOOTER_HEIGHT_MOBILE,
    },
  },

  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: FOOTER_HEIGHT,

    [`@media (max-width: ${em(800)})`]: {
      height: FOOTER_HEIGHT_TABLET,
    },

    [`@media (max-width: ${em(640)})`]: {
      height: FOOTER_HEIGHT_MOBILE,
    },
  },

  withNavbar: {
    paddingLeft: `calc(${rem(NAVBAR_WIDTH)} + ${theme.spacing.md} * 2)`,
    paddingRight: `calc(${theme.spacing.md} * 2)`,

    [`@media (max-width: ${em(MDX_PAGE_BREAKPOINT)})`]: {
      paddingLeft: `calc(${rem(NAVBAR_WIDTH)} + ${theme.spacing.md})`,
      paddingRight: theme.spacing.md,
    },

    [`@media (max-width: ${em(NAVBAR_BREAKPOINT)})`]: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },
  },

  inner: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    display: 'flex',
    justifyContent: 'space-between',

    [`@media (max-width: ${em(1000)})`]: {
      flexDirection: 'column',
    },

    [`@media (max-width: ${em(640)})`]: {
      paddingBottom: theme.spacing.md,
    },
  },

  logoSection: {
    maxWidth: rem(300),

    [`@media (max-width: ${em(1000)})`]: {
      marginBottom: theme.spacing.xl,
    },

    [`@media (max-width: ${em(640)})`]: {
      marginBottom: 0,
    },
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
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    paddingTop: theme.spacing.md,
  },

  afterFooterNote: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],

    '& a': {
      ...theme.fn.focusStyles(),
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    },
  },

  groups: {
    display: 'flex',

    [`@media (max-width: ${em(640)})`]: {
      display: 'none',
    },
  },

  social: {
    display: 'flex',

    [`@media (max-width: ${em(640)})`]: {
      display: 'block',
    },
  },

  socialButton: {
    [`@media (max-width: ${em(640)})`]: {
      flex: 1,
      width: '100%',
      marginLeft: 0,
      marginTop: theme.spacing.md,
    },
  },
}));
