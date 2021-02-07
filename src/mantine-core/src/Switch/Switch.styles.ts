import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineColor } from '@mantine/theme';

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
        backgroundColor: theme.colors.white,
        height: 14,
        width: 14,
        borderRadius: 14,
        border: `1px solid ${theme.colors.gray[3]}`,
        transition: 'transform 150ms ease',
      },

      '&:focus': {
        boxShadow: ({ color }: { color: MantineColor }) =>
          `0 0 0 2px ${theme.colors[color || theme.primaryColor][2]}`,
      },

      '&:focus:not(:focus-visible)': {
        boxShadow: 'none',
      },

      '&:disabled::before': {
        backgroundColor: theme.colors.gray[2],
      },
    },

    checked: ({ color }: { color: MantineColor }) => ({
      backgroundColor: theme.colors[color || theme.primaryColor][6],
      borderColor: theme.colors[color || theme.primaryColor][5],

      '&::before': {
        transform: 'translateX(21px)',
        borderColor: theme.colors[color || theme.primaryColor][6],
      },
    }),

    label: {
      fontFamily: theme.fontFamily,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      marginLeft: theme.spacing.sm,
      fontSize: theme.fontSizes.sm,
    },
  }),
  { theming }
);
