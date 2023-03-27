import { createStyles, rem, em } from '@mantine/core';
import { HEADER_HEIGHT } from './Header/HeaderDesktop.styles';
import { NAVBAR_WIDTH, NAVBAR_BREAKPOINT } from './Navbar/Navbar.styles';

interface LayoutStyles {
  shouldRenderHeader: boolean;
}

export default createStyles((theme, { shouldRenderHeader }: LayoutStyles) => ({
  '@global': {
    '#nprogress': {
      zIndex: 100000,
    },
  },

  withNavbar: {
    paddingLeft: rem(NAVBAR_WIDTH),

    [`@media (max-width: ${em(NAVBAR_BREAKPOINT)})`]: {
      paddingLeft: 0,
    },
  },

  withoutHeader: {
    '& $main': {
      paddingTop: 0,
    },
  },

  main: {
    scrollMarginTop: rem(HEADER_HEIGHT),
    flex: 1,
    // aligns page top most heading with navigation and table of contents
    paddingTop: shouldRenderHeader
      ? `calc(${rem(HEADER_HEIGHT)} - ${theme.spacing.xl} - ${rem(2)})`
      : 0,

    [`@media (max-width: ${em(NAVBAR_BREAKPOINT)})`]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  content: {
    minHeight: `calc(100vh - ${rem(280)})`,
  },
}));
