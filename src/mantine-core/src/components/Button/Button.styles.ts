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
  compact: boolean;
}

const sizes = {
  xs: {
    height: INPUT_SIZES.xs,
    padding: [0, 14],
  },

  sm: {
    height: INPUT_SIZES.sm,
    padding: [0, 18],
  },

  md: {
    height: INPUT_SIZES.md,
    padding: [0, 22],
  },

  lg: {
    height: INPUT_SIZES.lg,
    padding: [0, 26],
  },

  xl: {
    height: INPUT_SIZES.xl,
    padding: [0, 32],
  },

  'compact-xs': {
    height: 22,
    padding: [0, 7],
  },

  'compact-sm': {
    height: 26,
    padding: [0, 8],
  },

  'compact-md': {
    height: 30,
    padding: [0, 10],
  },

  'compact-lg': {
    height: 34,
    padding: [0, 12],
  },

  'compact-xl': {
    height: 40,
    padding: [0, 14],
  },
};

export const heights = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = sizes[size].height;
  return acc;
}, {} as MantineSizes);

const getSizeStyles = ({ compact, size }: { compact: boolean; size: MantineSize }) => {
  if (!compact) {
    return sizes[size];
  }

  return sizes[`compact-${size}`];
};

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
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    height: '100%',
    overflow: 'hidden',
  },

  root: (props: ButtonStylesProps) => ({
    ...getSizeStyles({ compact: props.compact, size: props.size }),
    ...getFontStyles(props.theme),
    ...getFocusStyles(props.theme),
    ...getWidthStyles(props.fullWidth),
    fontSize: getSizeValue({ size: props.size, sizes: props.theme.fontSizes }),
    WebkitTapHighlightColor: 'transparent',
    userSelect: 'none',
    boxSizing: 'border-box',
    textDecoration: 'none',
    cursor: 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
  }),

  outline: ({ color, radius, theme }: ButtonStylesProps) => ({
    backgroundColor: 'transparent',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    fontWeight: 600,
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

  light: ({ color, radius, theme }: ButtonStylesProps) => ({
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    fontWeight: 600,
    border: '1px solid transparent',
    backgroundColor: hexToRgba(
      getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 0 }),
      theme.colorScheme === 'dark' ? 0.3 : 1
    ),
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),

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

  filled: ({ color, radius, theme }: ButtonStylesProps) => ({
    border: '1px solid transparent',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    fontWeight: 600,
    backgroundColor: getThemeColor({ theme, color, shade: 7 }),
    color: theme.white,
    textShadow: `1px 1px 0 ${getThemeColor({ theme, color, shade: 9 })}`,

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
    height: 'auto',
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
