import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      flex: 1,
      maxWidth: 480,
      marginRight: theme.spacing.md,
      position: 'relative',
    },

    shortcut: {
      display: 'flex',
      alignItems: 'center',
      pointerEvents: 'none',
      userSelect: 'none',
    },

    kbd: {
      '& + &': {
        marginLeft: 2,
      },
    },

    input: {
      position: 'relative',
      zIndex: 2,
    },

    dropdown: {
      position: 'absolute',
      top: theme.spacing.md * -1,
      right: theme.spacing.md * -1,
      left: theme.spacing.md * -1,
      zIndex: 1,
      paddingTop: 36 + theme.spacing.md,
    },

    dropdownBody: {
      padding: [theme.spacing.xs, theme.spacing.md],
    },
  }),
  { theming }
);
