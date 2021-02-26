import { createUseStyles } from 'react-jss';
import { MantineTheme, theming, getFontStyles } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    inputWrapper: getFontStyles(theme),

    label: {
      display: 'block',
      marginBottom: 5,
      fontSize: 14,
      fontWeight: 500,
      color: theme.colors.gray[7],
    },

    error: {
      marginTop: theme.spacing.xs / 2,
    },

    description: {
      marginTop: theme.spacing.xs / 2,
      marginBottom: theme.spacing.xs / 2,
    },

    required: {
      color: theme.colors.red[7],
    },
  }),
  { theming }
);
