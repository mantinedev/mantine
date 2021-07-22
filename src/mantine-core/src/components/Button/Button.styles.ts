import {
  createMemoStyles,
  MantineTheme,
  MantineSize,
  MantineNumberSize,
  getFontStyles,
  getSizeValue,
  getFocusStyles,
  getThemeColor,
  MantineSizes,
  hexToRgba,
} from '../../theme';
import { INPUT_SIZES } from '../Input/Input';

interface ButtonStylesProps {
  color: string;
  size: MantineSize;
  radius: MantineNumberSize;
  theme: MantineTheme;
  fullWidth: boolean;
}

const sizes = {
  xs: {
    fontSize: 12,
    height: INPUT_SIZES.xs,
    padding: [0, 14],
  },

  sm: {
    fontSize: 14,
    height: INPUT_SIZES.sm,
    padding: [0, 18],
  },

  md: {
    fontSize: 16,
    height: INPUT_SIZES.md,
    padding: [0, 22],
  },

  lg: {
    fontSize: 18,
    height: INPUT_SIZES.lg,
    padding: [0, 26],
  },

  xl: {
    fontSize: 22,
    height: INPUT_SIZES.xl,
    padding: [0, 32],
  },
};

export const heights = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = sizes[size].height;
  return acc;
}, {} as MantineSizes);

const getWidthStyles = (fullWidth: boolean) => ({
  display: fullWidth ? 'block' : 'inline-block',
  width: fullWidth ? '100%' : 'auto',
});

export default createMemoStyles({
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

  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    overflow: 'visible',
  },

  label: {
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  root: (props: ButtonStylesProps) => ({
    ...sizes[props.size],
    ...getFontStyles(props.theme),
    ...getFocusStyles(props.theme),
    ...getWidthStyles(props.fullWidth),
    WebkitTapHighlightColor: 'transparent',
    userSelect: 'none',
    boxSizing: 'border-box',
    textDecoration: 'none',
    cursor: 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
  }),

  outline: ({ color, size, radius, theme }: ButtonStylesProps) => ({
    backgroundColor: 'transparent',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    fontWeight: 600,
    height: sizes[size].height,
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 7 }),
    border: `1px solid ${getThemeColor({
      theme,
      color,
      shade: theme.colorScheme === 'dark' ? 4 : 7,
    })}`,

    '&:not(:disabled):active': {
      transform: 'translateY(1px)',
    },

    '&:disabled': {
      borderColor: 'transparent',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
      cursor: 'not-allowed',
    },
  }),

  light: ({ color, size, radius, theme }: ButtonStylesProps) => ({
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    fontWeight: 600,
    border: '1px solid transparent',
    height: sizes[size].height,
    backgroundColor: hexToRgba(
      getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 0 }),
      theme.colorScheme === 'dark' ? 0.3 : 1
    ),
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),

    '& $inner': {
      height: '100%',
    },

    '&:not(:disabled):active': {
      transform: 'translateY(1px)',
    },

    '&:disabled': {
      borderColor: 'transparent',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
      textShadow: 'none',
      cursor: 'not-allowed',
    },
  }),

  filled: ({ color, size, radius, theme }: ButtonStylesProps) => ({
    border: '1px solid transparent',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    fontWeight: 600,
    backgroundColor: getThemeColor({ theme, color, shade: 7 }),
    color: theme.white,
    height: sizes[size].height,
    textShadow: `1px 1px 0 ${getThemeColor({ theme, color, shade: 9 })}`,

    '& $inner': {
      height: '100%',
    },

    '&:not(:disabled):active': {
      transform: 'translateY(1px)',
    },

    '&:disabled': {
      borderColor: 'transparent',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
      textShadow: 'none',
      cursor: 'not-allowed',
    },
  }),

  link: ({ color, radius, theme }: ButtonStylesProps) => ({
    padding: 0,
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    backgroundColor: 'transparent',
    border: 0,
    display: 'inline-block',
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
    cursor: 'pointer',
    lineHeight: theme.lineHeight,

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
});
