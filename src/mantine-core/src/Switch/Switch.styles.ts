import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFontStyles, getThemeColor } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
    },

    switch: {
      backgroundColor: theme.colors.gray[2],
      border: `1px solid ${theme.colors.gray[3]}`,
      height: 22,
      width: 42,
      borderRadius: 36,
      padding: '0 2px',
      cursor: 'pointer',
      transition: 'background-color 150ms ease, border-color 100ms ease',
      outline: 0,
      boxSizing: 'border-box',
      appearance: 'none',

      '&::before': {
        content: "''",
        display: 'block',
        backgroundColor: theme.white,
        height: 14,
        width: 14,
        borderRadius: 14,
        border: `1px solid ${theme.colors.gray[3]}`,
        transition: 'transform 150ms ease',
      },

      '&:focus': {
        boxShadow: `0 0 0 2px ${theme.white}, 0 0 0 4px ${theme.colors[theme.primaryColor][5]}`,
      },

      '&:focus:not(:focus-visible)': {
        boxShadow: 'none',
      },

      '&:disabled::before': {
        backgroundColor: theme.colors.gray[2],
      },
    },

    checked: ({ color }: { color: string }) => ({
      backgroundColor: getThemeColor({ theme, color, shade: 6 }),
      borderColor: getThemeColor({ theme, color, shade: 5 }),

      '&::before': {
        transform: 'translateX(21px)',
        borderColor: getThemeColor({ theme, color, shade: 6 }),
      },
    }),

    label: {
      ...getFontStyles(theme),
      fontFamily: theme.fontFamily,
      marginLeft: theme.spacing.sm,
      fontSize: theme.fontSizes.sm,
    },
  }),
  { theming }
);
