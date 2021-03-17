import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFontStyles } from '@mantine/theme';
import { HEADER_HEIGHT } from './Header/Header.styles';
import { NAVBAR_WIDTH } from './Navbar/Navbar.styles';

export default createUseStyles(
  (theme: MantineTheme) => ({
    '@global': {
      body: {
        ...getFontStyles(theme),
      },
    },

    layout: {
      paddingLeft: NAVBAR_WIDTH,
    },

    main: {
      flex: 1,
      paddingTop: HEADER_HEIGHT + theme.spacing.lg,
      paddingBottom: theme.spacing.xl * 2,
      paddingLeft: theme.spacing.md,
    },
  }),
  { theming }
);
