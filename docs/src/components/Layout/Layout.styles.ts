import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFontStyles } from '@mantine/theme';
import { HEADER_HEIGHT } from './Header/Header.styles';
import { NAVBAR_WIDTH, NAVBAR_BREAKPOINT } from './Navbar/Navbar.styles';
import {
  TABLE_OF_CONTENTS_WIDTH,
  TABLE_OF_CONTENTS_BREAKPOINT,
} from '../TableOfContents/TableOfContents.styles';

export default createUseStyles(
  (theme: MantineTheme) => ({
    '@global': {
      body: {
        ...getFontStyles(theme),
      },

      ':target': {
        display: 'block',
        position: 'relative',
        top: HEADER_HEIGHT * -1 - 10,
        visibility: 'hidden',
      },
    },

    layout: {
      paddingLeft: NAVBAR_WIDTH,
      paddingRight: TABLE_OF_CONTENTS_WIDTH,

      [`@media (max-width: ${TABLE_OF_CONTENTS_BREAKPOINT}px)`]: {
        paddingRight: 0,
      },

      [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
        paddingLeft: 0,
      },
    },

    main: {
      scrollMarginTop: HEADER_HEIGHT,
      flex: 1,
      paddingTop: HEADER_HEIGHT + theme.spacing.sm,
      paddingBottom: theme.spacing.xl * 2,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,

      [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  }),
  { theming }
);
