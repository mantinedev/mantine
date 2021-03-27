import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      flex: 1,
      maxWidth: 480,
      marginRight: theme.spacing.md,
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
  }),
  { theming }
);
