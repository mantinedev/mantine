import { createUseStyles } from 'react-jss';
import {
  MantineTheme,
  MantineNumberSize,
  getSizeValue,
  getFontStyles,
  getFocusStyles,
  getThemeColor,
} from '@mantine/theme';

interface ActionIconStylesProps {
  color: string;
  size: MantineNumberSize;
  radius: MantineNumberSize;
  theme: MantineTheme;
}

const sizes = {
  xs: 18,
  sm: 22,
  md: 28,
  lg: 34,
  xl: 44,
};

export default createUseStyles({
  actionIcon: ({ color, radius, theme, size }: ActionIconStylesProps) => ({
    ...getFocusStyles(theme),
    ...getFontStyles(theme),
    border: '1px solid transparent',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
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
      color: getThemeColor({ theme, color, shade: 6 }),

      '&:hover': {
        backgroundColor: getThemeColor({ theme, color, shade: 0 }),
      },

      '&:active': {
        backgroundColor: getThemeColor({ theme, color, shade: 1 }),
      },
    },

    '&:disabled': {
      color: theme.colors.gray[5],
      cursor: 'not-allowed',
    },
  }),
});
