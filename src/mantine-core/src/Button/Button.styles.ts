import { createUseStyles } from 'react-jss';
import { OpenColorTheme, Size } from '@mantine/types';
import { theming, MantineTheme } from '@mantine/theme';

interface ButtonThemeProps {
  color?: OpenColorTheme;
  size: Size;
}

const sizes = {
  xs: {
    fontSize: 10,
    height: 22,
    padding: [0, 11],
  },

  sm: {
    fontSize: 11,
    height: 26,
    padding: [0, 13],
  },

  md: {
    fontSize: 13,
    height: 30,
    padding: [0, 15],
  },

  lg: {
    fontSize: 14,
    height: 36,
    padding: [0, 18],
  },

  xl: {
    fontSize: 16,
    height: 44,
    padding: [0, 22],
  },
};

export default createUseStyles(
  (theme: MantineTheme) => ({
    leftIcon: {
      marginRight: 10,
    },

    rightIcon: {
      marginLeft: 10,
    },

    loading: {
      position: 'relative',
      pointerEvents: 'none',

      '&::before': {
        content: '""',
        borderRadius: 4,
        position: 'absolute',
        top: -1,
        right: -1,
        left: -1,
        bottom: -1,
        backgroundColor: 'rgba(255, 255, 255, .6)',
      },
    },

    loader: {
      marginRight: 10,
      opacity: 0.6,
    },

    button: (props: ButtonThemeProps) => {
      const colorStyles = Array.isArray(theme.colors[props.color])
        ? {
            backgroundColor: theme.colors[props.color][5],
            textShadow: `1px 1px 0 ${theme.colors[props.color][7]}`,
            color: theme.colors.white,

            '&:focus': {
              boxShadow: `0 0 0 2px ${theme.colors.white}, 0 0 0 4px ${
                theme.colors[props.color][5]
              }`,
            },

            '&:focus:not(:focus-visible)': {
              boxShadow: 'none',
            },

            '&:hover': {
              backgroundColor: theme.colors[props.color][6],
            },
          }
        : {
            backgroundColor: theme.colors.white,
            color: theme.colors.gray[7],
            borderColor: theme.colors.gray[4],

            '&:focus': {
              boxShadow: `0 0 0 2px ${theme.colors.white}, 0 0 0 4px ${
                theme.colors[theme.primaryColor][5]
              }`,
            },

            '&:focus:not(:focus-visible)': {
              boxShadow: 'none',
            },

            '&:hover': {
              backgroundColor: theme.colors.gray[0],
            },
          };

      return {
        ...colorStyles,
        ...sizes[props.size],

        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        fontFamily: 'Roboto, sans-serif',
        boxSizing: 'border-box',
        border: '1px solid transparent',
        outline: 0,
        borderRadius: 4,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 0.5,
        cursor: 'pointer',
        userSelect: 'none',
        appearance: 'none',
        lineHeight: 1,
        display: 'inline-flex',
        alignItems: 'center',

        '&:active': {
          transform: 'translateY(1px)',
        },

        '&:disabled': {
          borderColor: 'transparent',
          backgroundColor: theme.colors.gray[3],
          color: theme.colors.gray[6],
          textShadow: 'none',
          pointerEvents: 'none',
        },
      };
    },
  }),
  { theming }
);
