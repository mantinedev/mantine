import { createUseStyles } from 'react-jss';
import {
  MantineTheme,
  MantineSize,
  MantineNumberSize,
  getFontStyles,
  getSizeValue,
  getFocusStyles,
  getThemeColor,
} from '@mantine/theme';

export type ButtonVariant = 'link' | 'filled' | 'outline';

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

export default createUseStyles({
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

  outline: ({
    color,
    size,
    radius,
    theme,
  }: {
    color?: string;
    size: MantineSize;
    radius: MantineNumberSize;
    theme: MantineTheme;
  }) => ({
    ...sizes[size],
    ...getFontStyles(theme),
    ...getFocusStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    userSelect: 'none',
    backgroundColor: 'transparent',
    display: 'inline-block',
    textDecoration: 'none',
    boxSizing: 'border-box',
    outline: 0,
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: getThemeColor({ theme, color, shade: 8 }),
    border: `1px solid ${getThemeColor({ theme, color, shade: 8 })}`,
    cursor: 'pointer',

    '&:active': {
      transform: 'translateY(1px)',
    },

    '&:disabled': {
      borderColor: 'transparent',
      backgroundColor: theme.colors.gray[3],
      color: theme.colors.gray[6],
      pointerEvents: 'none',
    },
  }),

  filled: ({
    color,
    size,
    radius,
    theme,
  }: {
    color?: string;
    size: MantineSize;
    radius: MantineNumberSize;
    theme: MantineTheme;
  }) => ({
    ...sizes[size],
    ...getFontStyles(theme),
    ...getFocusStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    display: 'inline-block',
    textDecoration: 'none',
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

    backgroundColor: getThemeColor({ theme, color, shade: 6 }),
    textShadow: `1px 1px 0 ${getThemeColor({ theme, color, shade: 8 })}`,
    color: theme.white,

    '& $inner': {
      height: sizes[size].height - 2,
    },

    '&:active': {
      transform: 'translateY(1px)',
      backgroundColor: getThemeColor({ theme, color, shade: 7 }),
    },

    '&:disabled': {
      borderColor: 'transparent',
      backgroundColor: theme.colors.gray[3],
      color: theme.colors.gray[6],
      textShadow: 'none',
      pointerEvents: 'none',
    },
  }),

  link: ({
    color,
    size,
    radius,
    theme,
  }: {
    color?: string;
    size: MantineSize;
    radius: MantineNumberSize;
    theme: MantineTheme;
  }) => ({
    ...sizes[size],
    ...getFontStyles(theme),
    ...getFocusStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    padding: 0,
    outline: 0,
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    backgroundColor: 'transparent',
    border: 0,
    display: 'inline-block',
    color: getThemeColor({ theme, color, shade: 6 }),
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },

    '&:disabled': {
      color: theme.colors.gray[5],
      cursor: 'not-allowed',

      '&:hover': {
        textDecoration: 'none',
      },
    },
  }),

  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
