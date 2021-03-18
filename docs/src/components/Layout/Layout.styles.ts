import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFontStyles } from '@mantine/theme';
import { HEADER_HEIGHT } from './Header/Header.styles';
import { NAVBAR_WIDTH } from './Navbar/Navbar.styles';
import { TABLE_OF_CONTENTS_WIDTH } from '../TableOfContents/TableOfContents.styles';

export default createUseStyles(
  (theme: MantineTheme) => ({
    '@global': {
      body: {
        ...getFontStyles(theme),
      },
    },

    layout: {
      paddingLeft: NAVBAR_WIDTH,
      paddingRight: TABLE_OF_CONTENTS_WIDTH,
    },

    main: {
      scrollMarginTop: HEADER_HEIGHT,
      flex: 1,
      paddingTop: HEADER_HEIGHT + theme.spacing.sm,
      paddingBottom: theme.spacing.xl * 2,
      paddingLeft: theme.spacing.md,
    },
  }),
  { theming }
);
