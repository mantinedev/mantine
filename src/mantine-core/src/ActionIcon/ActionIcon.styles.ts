import { createUseStyles } from 'react-jss';
import {
  MantineTheme,
  MantineNumberSize,
  getSizeValue,
  getFontStyles,
  getFocusStyles,
  getThemeColor,
} from '@mantine/theme';

export type ActionIconVariant = 'transparent' | 'hover' | 'filled';

interface ActionIconStylesProps {
  color: string;
  size: MantineNumberSize;
  radius: MantineNumberSize;
  theme: MantineTheme;
  variant: ActionIconVariant;
}

export const sizes = {
  xs: 18,
  sm: 22,
  md: 28,
  lg: 34,
  xl: 44,
};

function getColors({
  theme,
  color,
  variant,
}: Pick<ActionIconStylesProps, 'theme' | 'color' | 'variant'>) {
  if (variant === 'transparent') {
    return { hover: 'transparent', active: 'transparent' };
  }

  if (theme.colorScheme === 'dark') {
    return { hover: theme.colors.dark[8], active: theme.colors.dark[9] };
  }

  return {
    hover: getThemeColor({ theme, color, shade: variant === 'hover' ? 0 : 7 }),
    active: getThemeColor({ theme, color, shade: variant === 'hover' ? 0 : 8 }),
  };
}

export default createUseStyles({
  actionIcon: ({ color, radius, theme, size, variant }: ActionIconStylesProps) => {
    const colors = getColors({ theme, color, variant });

    return {
      ...getFocusStyles(theme),
      ...getFontStyles(theme),
      WebkitTapHighlightColor: 'transparent',
      border: '1px solid transparent',
      boxSizing: 'border-box',
      backgroundColor:
        variant === 'filled' ? getThemeColor({ theme, color, shade: 7 }) : 'transparent',
      height: getSizeValue({ size, sizes }),
      width: getSizeValue({ size, sizes }),
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
      padding: 0,
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'color 100ms ease, background-color 100ms ease',

      '&:not(:disabled)': {
        color:
          variant === 'filled'
            ? theme.white
            : getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 6 }),

        '&:hover': {
          backgroundColor: colors.hover,
        },

        '&:active': {
          backgroundColor: colors.active,
        },
      },

      '&:disabled': {
        color: theme.colors.gray[5],
        cursor: 'not-allowed',
      },
    };
  },
});
