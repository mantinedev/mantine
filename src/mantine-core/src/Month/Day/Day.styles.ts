import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    disableOutsideEvents: {},

    day: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: theme.fontFamily,
      backgroundColor: 'transparent',
      width: 30,
      height: 30,
      lineHeight: '30px',
      padding: 0,
      borderRadius: 4,
      border: '1px solid transparent',
      cursor: 'pointer',
      fontSize: theme.fontSizes.sm,
      userSelect: 'none',

      '&:hover': {
        backgroundColor: theme.colors.gray[0],
      },
      '&:focus': {
        outline: '0',
        borderColor: theme.colors.blue[6],
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
      backgroundColor: theme.colors.blue[0],
      color: theme.colors.blue[6],
    },
  }),
  { theming }
);
