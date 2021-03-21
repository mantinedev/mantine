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

export default createUseStyles({
  actionIcon: ({ color, radius, theme, size, variant }: ActionIconStylesProps) => ({
    ...getFocusStyles(theme),
    ...getFontStyles(theme),
    border: '1px solid transparent',
    boxSizing: 'border-box',
    backgroundColor:
      variant === 'filled' ? getThemeColor({ theme, color, shade: 6 }) : 'transparent',
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
      color: variant === 'filled' ? theme.white : getThemeColor({ theme, color, shade: 6 }),

      '&:hover': {
        backgroundColor:
          variant === 'transparent'
            ? 'transparent'
            : getThemeColor({ theme, color, shade: variant === 'hover' ? 0 : 7 }),
      },

      '&:active': {
        backgroundColor:
          variant === 'transparent'
            ? 'transparent'
            : getThemeColor({ theme, color, shade: variant === 'hover' ? 1 : 8 }),
      },
    },

    '&:disabled': {
      color: theme.colors.gray[5],
      cursor: 'not-allowed',
    },
  }),
});
