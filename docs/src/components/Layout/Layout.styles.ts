import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';
import { HEADER_HEIGHT } from './Header/Header.styles';
import { NAVBAR_WIDTH, NAVBAR_BREAKPOINT } from './Navbar/Navbar.styles';

export default createUseStyles(
  (theme: MantineTheme) => ({
    '@global': {
      '#nprogress': {
        zIndex: 100000,
      },

      ':target': {
        display: 'block',
        position: 'relative',
        top: HEADER_HEIGHT * -1 - 10,
        visibility: 'hidden',
      },
    },

    withNavbar: {
      paddingLeft: NAVBAR_WIDTH,

      [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
        paddingLeft: 0,
      },
    },

    main: {
      scrollMarginTop: HEADER_HEIGHT,
      flex: 1,
      // aligns page top most heading with navigation and table of contents
      paddingTop: HEADER_HEIGHT - theme.spacing.xl - 2,

      [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },

    content: {
      minHeight: 'calc(100vh - 280px)',
    },
  }),
  { theming }
);
