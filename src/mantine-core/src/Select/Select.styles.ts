import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineNumberSize } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      position: 'relative',
    },

    select: {
      appearance: 'none',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
      fontFamily: theme.fontFamily,
      fontSize: 14,
      width: '100%',
      height: 36,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: ({ radius }: { radius: MantineNumberSize }) =>
        typeof radius === 'number' ? radius : theme.radius[radius],
      border: `1px solid ${theme.colors.gray[5]}`,
      transition: 'border-color 100ms ease, box-shadow 100ms ease',
      cursor: 'pointer',

      '&::placeholder': {
        color: theme.colors.gray[5],
      },

      '&:focus': {
        outline: 'none',
        borderColor: theme.colors[theme.primaryColor][5],
        boxShadow: `0 0 4px ${theme.colors.gray[3]}`,
      },

      '&:disabled': {
        backgroundColor: theme.colors.gray[1],
        cursor: 'not-allowed',
      },
    },

    invalid: {
      borderColor: theme.colors.red[7],
    },

    placeholder: {
      color: theme.colors.gray[5],
    },

    icon: {
      position: 'absolute',
      top: '10px',
      right: '10px',
    },
  }),
  { theming }
);
