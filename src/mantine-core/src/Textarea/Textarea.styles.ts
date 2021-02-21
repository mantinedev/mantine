import { createUseStyles } from 'react-jss';
import {
  theming,
  MantineTheme,
  MantineNumberSize,
  getFontStyles,
  getSizeValue,
} from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    textarea: {
      ...getFontStyles(theme),
      boxSizing: 'border-box',
      width: '100%',
      padding: theme.spacing.sm,
      borderRadius: ({ radius }: { radius: MantineNumberSize }) =>
        getSizeValue({ size: radius, sizes: theme.radius }),
      border: `1px solid ${theme.colors.gray[4]}`,
      resize: 'none',
      transition: 'border-color 100ms ease, box-shadow 100ms ease',

      '&:focus': {
        outline: 'none',
        borderColor: theme.colors[theme.primaryColor][6],
        boxShadow: `0 0 4px ${theme.colors.gray[3]}`,
      },

      '&:disabled': {
        backgroundColor: theme.colors.gray[1],
        cursor: 'not-allowed',
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
