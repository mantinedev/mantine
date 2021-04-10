import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      display: 'flex',
      alignItems: 'flex-start',
    },

    badge: {
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1,
      color: theme.colors.gray[9],
      border: `1px solid ${theme.colors.gray[3]}`,
      padding: [theme.spacing.xs, theme.spacing.md],
      borderRadius: theme.radius.sm,
      marginRight: theme.spacing.xl,
    },
  }),
  { theming }
);
