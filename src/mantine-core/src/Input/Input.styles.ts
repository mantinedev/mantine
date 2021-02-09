import { createUseStyles } from 'react-jss';
import { MantineTheme, theming, MantineNumberSize } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    withIcon: {},
    invalid: {},

    inputWrapper: {
      position: 'relative',
    },

    defaultVariant: {
      '& $input': {
        fontFamily: theme.fontFamily,
        height: 36,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: ({ radius }: { radius: MantineNumberSize }) =>
          typeof radius === 'number' ? radius : theme.radius[radius],
        border: `1px solid ${theme.colors.gray[4]}`,
        transition: 'border-color 100ms ease, box-shadow 100ms ease',

        '&:focus': {
          outline: 'none',
          borderColor: theme.colors[theme.primaryColor][6],
          boxShadow: `0 0 4px ${theme.colors.gray[3]}`,
        },
      },

      '& $invalid': {
        borderColor: theme.colors.red[6],
      },

      '& $withIcon': {
        paddingLeft: 35,
      },

      '& $icon': {
        height: 36,
        width: 36,
      },
    },

    unstyledVariant: {
      '& $input': {
        height: 28,
        border: 0,
        outline: 0,
      },

      '& $icon': {
        height: 28,
        width: 28,
      },

      '& $withIcon': {
        paddingLeft: 34,
      },
    },

    input: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
      fontFamily: theme.fontFamily,
      fontSize: 14,
      width: '100%',

      '&::placeholder': {
        color: theme.colors.gray[5],
      },
    },

    icon: {
      pointerEvents: 'none',
      position: 'absolute',
      color: theme.colors.gray[5],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
  { theming }
);
