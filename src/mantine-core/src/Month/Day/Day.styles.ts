import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFontStyles } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    disableOutsideEvents: {},

    day: {
      ...getFontStyles(theme),
      backgroundColor: 'transparent',
      width: 34,
      height: 34,
      lineHeight: '34px',
      padding: 0,
      borderRadius: theme.radius.sm,
      border: '1px dotted transparent',
      cursor: 'pointer',
      fontSize: theme.fontSizes.sm,
      userSelect: 'none',
      outline: 0,

      '&:hover': {
        backgroundColor: theme.colors.gray[0],
      },

      '&:focus': {
        borderColor: theme.colors[theme.primaryColor][6],
      },

      '&:focus:not(:focus-visible)': {
        borderColor: 'transparent',
      },
    },

    weekend: {
      color: theme.colors.red[7],
    },

    outside: {
      color: theme.colors.gray[4],

      '&$disableOutsideEvents': {
        pointerEvents: 'none',
      },
    },

    selected: {
      backgroundColor: theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][6],

      '&:hover': {
        backgroundColor: theme.colors[theme.primaryColor][0],
      },
    },
  }),
  { theming }
);
