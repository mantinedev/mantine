import { createStyles, MantineNumberSize, MantineColor, MantineTheme } from '@mantine/styles';

export type ActionIconVariant =
  | 'hover'
  | 'filled'
  | 'outline'
  | 'light'
  | 'default'
  | 'transparent';

export interface ActionIconStylesParams {
  color: MantineColor;
  size: MantineNumberSize;
  radius: MantineNumberSize;
}

export const sizes = {
  xs: 18,
  sm: 22,
  md: 28,
  lg: 34,
  xl: 44,
};

interface GetVariantStyles {
  variant: ActionIconVariant;
  theme: MantineTheme;
  color: MantineColor;
}

function getVariantStyles({ variant, theme, color }: GetVariantStyles) {
  if (variant === 'hover' || variant === 'transparent') {
    return {
      border: '1px solid transparent',
      color: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 4 : 7),
      backgroundColor: 'transparent',

      '&:hover':
        variant === 'transparent'
          ? {}
          : {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.fn.themeColor(color, 0),
            },
    };
  }

  const colors = theme.fn.variant({ color, variant });

  return {
    backgroundColor: colors.background,
    color: colors.color,
    border: `1px solid ${colors.border}`,

    '&:hover': {
      backgroundColor: colors.hover,
    },
  };
}

export default createStyles((theme, { color, size, radius }: ActionIconStylesParams) => ({
  root: {
    ...theme.fn.focusStyles(),
    ...theme.fn.fontStyles(),
    position: 'relative',
    appearance: 'none',
    WebkitAppearance: 'none',
    WebkitTapHighlightColor: 'transparent',
    boxSizing: 'border-box',
    height: theme.fn.size({ size, sizes }),
    minHeight: theme.fn.size({ size, sizes }),
    width: theme.fn.size({ size, sizes }),
    minWidth: theme.fn.size({ size, sizes }),
    borderRadius: theme.fn.radius(radius),
    padding: 0,
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    '&:disabled': {
      color: theme.colors.gray[theme.colorScheme === 'dark' ? 6 : 4],
      cursor: 'not-allowed',
      backgroundColor: theme.fn.themeColor('gray', theme.colorScheme === 'dark' ? 8 : 1),
      borderColor: theme.fn.themeColor('gray', theme.colorScheme === 'dark' ? 8 : 1),
    },

    '&:not(:disabled):active': {
      transform: 'translateY(1px)',
    },
  },

  outline: getVariantStyles({ theme, color, variant: 'outline' }),
  filled: getVariantStyles({ theme, color, variant: 'filled' }),
  default: getVariantStyles({ theme, color, variant: 'default' }),
  light: getVariantStyles({ theme, color, variant: 'light' }),
  hover: getVariantStyles({ theme, color, variant: 'hover' }),
  transparent: getVariantStyles({ theme, color, variant: 'transparent' }),

  loading: {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -1,
      left: -1,
      right: -1,
      bottom: -1,
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors.dark[7], 0.5)
          : 'rgba(255, 255, 255, .5)',
      borderRadius: theme.fn.radius(radius),
      cursor: 'not-allowed',
    },
  },
}));
