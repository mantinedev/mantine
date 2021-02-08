import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineColor } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    title: ({ color }: { color: MantineColor }) => ({
      backgroundColor: theme.colors[color || theme.primaryColor][5],
      color: theme.colors.white,
      textShadow: `1px 1px 0 ${theme.colors[color || theme.primaryColor][7]}`,
      textAlign: 'center',
      height: 34,
      lineHeight: '34px',
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
    }),

    body: ({ color }: { color: MantineColor }) => ({
      backgroundColor: theme.colors[color || theme.primaryColor][0],
      padding: theme.spacing.md,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,

      '&:only-child': {
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
      },
    }),
  }),
  { theming }
);
