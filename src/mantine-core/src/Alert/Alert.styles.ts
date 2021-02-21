import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    title: ({ color }: { color: string }) => ({
      backgroundColor: theme.colors[color || theme.primaryColor][5],
      color: theme.white,
      textShadow: `1px 1px 0 ${theme.colors[color || theme.primaryColor][7]}`,
      textAlign: 'center',
      height: 34,
      lineHeight: '34px',
      borderTopRightRadius: theme.radius.sm,
      borderTopLeftRadius: theme.radius.sm,
      margin: 0,
    }),

    body: ({ color }: { color: string }) => ({
      backgroundColor: theme.colors[color || theme.primaryColor][0],
      padding: theme.spacing.md,
      borderBottomLeftRadius: theme.radius.sm,
      borderBottomRightRadius: theme.radius.sm,

      '&:only-child': {
        borderTopRightRadius: theme.radius.sm,
        borderTopLeftRadius: theme.radius.sm,
      },
    }),
  }),
  { theming }
);
