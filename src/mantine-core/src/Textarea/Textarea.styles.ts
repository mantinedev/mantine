import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    textarea: {
      boxSizing: 'border-box',
      width: '100%',
      fontFamily: theme.fontFamily,
      padding: theme.spacing.sm,
      borderRadius: 4,
      border: `1px solid ${theme.colors.gray[4]}`,
      resize: 'none',
      transition: 'border-color 100ms ease, box-shadow 100ms ease',

      '&:focus': {
        outline: 'none',
        borderColor: theme.colors[theme.primaryColor][6],
        boxShadow: `0 0 4px ${theme.colors.gray[3]}`,
      },

      '&::placeholder': {
        color: theme.colors.gray[5],
      },
    },

    invalid: {
      borderColor: theme.colors.red[6],
    },
  }),
  { theming }
);
