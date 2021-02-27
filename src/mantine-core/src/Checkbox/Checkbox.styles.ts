import { createUseStyles } from 'react-jss';
import {
  MantineTheme,
  MantineNumberSize,
  getFontStyles,
  getSizeValue,
  getThemeColor,
  getFocusStyles,
} from '@mantine/theme';

const sizes = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 28,
  xl: 32,
};

export default createUseStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  label: ({ theme }: { theme: MantineTheme }) => ({
    ...getFontStyles(theme),
    marginLeft: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  }),

  checkbox: ({ size, theme }: { size: MantineNumberSize; theme: MantineTheme }) => ({
    ...getFocusStyles(theme),
    appearance: 'none',
    backgroundColor: theme.colors.gray[0],
    border: `1px solid ${theme.colors.gray[4]}`,
    width: getSizeValue({ size, sizes }),
    height: getSizeValue({ size, sizes }),
    borderRadius: theme.radius.sm,
    padding: 0,
    outline: 0,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:disabled': {
      backgroundColor: theme.colors.gray[2],
      cursor: 'not-allowed',
    },
  }),

  checked: ({ color, theme }: { color: string; theme: MantineTheme }) => ({
    backgroundColor: getThemeColor({ theme, color, shade: 5 }),
    borderColor: getThemeColor({ theme, color, shade: 5 }),
    color: theme.white,
  }),

  icon: {
    width: '80%',
    height: '80%',
  },
});
