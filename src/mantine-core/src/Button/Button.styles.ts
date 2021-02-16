import { createUseStyles } from 'react-jss';
import {
  theming,
  MantineTheme,
  MantineSize,
  MantineNumberSize,
  getFontStyles,
  getSizeValue,
  getFocusStyles,
} from '@mantine/theme';

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
    icon: {
      display: 'flex',
      alignItems: 'center',
    },

    leftIcon: {
      marginRight: 10,
    },

    rightIcon: {
      marginLeft: 10,
    },

    button: ({
      color,
      size,
      radius,
    }: {
      color?: string;
      size: MantineSize;
      radius: MantineNumberSize;
    }) => {
      const colorStyles = Array.isArray(theme.colors[color])
        ? {
            backgroundColor: theme.colors[color][5],
            textShadow: `1px 1px 0 ${theme.colors[color][7]}`,
            color: theme.white,

            '&:hover': {
              backgroundColor: theme.colors[color][6],
            },
          }
        : {
            backgroundColor: theme.white,
            color: theme.colors.gray[7],
            borderColor: theme.colors.gray[4],

            '&:hover': {
              backgroundColor: theme.colors.gray[0],
            },
          };

      return {
        ...colorStyles,
        ...sizes[size],
        ...getFontStyles(theme),
        ...getFocusStyles(theme),
        boxSizing: 'border-box',
        border: '1px solid transparent',
        outline: 0,
        borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 0.5,
        cursor: 'pointer',
        userSelect: 'none',
        appearance: 'none',
        lineHeight: 1,

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

    inner: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
  { theming }
);
