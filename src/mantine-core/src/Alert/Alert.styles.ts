import { createUseStyles } from 'react-jss';
import { MantineTheme, getThemeColor } from '@mantine/theme';

export default createUseStyles({
  title: ({ color, theme }: { color: string; theme: MantineTheme }) => ({
    backgroundColor: getThemeColor({ theme, color, shade: 6 }),
    color: theme.white,
    textShadow: `1px 1px 0 ${getThemeColor({ theme, color, shade: 8 })}`,
    textAlign: 'center',
    height: 34,
    lineHeight: '34px',
    borderTopRightRadius: theme.radius.sm,
    borderTopLeftRadius: theme.radius.sm,
    margin: 0,
  }),

  body: ({ color, theme }: { color: string; theme: MantineTheme }) => ({
    backgroundColor: getThemeColor({ theme, color, shade: 0 }),
    padding: theme.spacing.md,
    borderBottomLeftRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,

    '&:only-child': {
      borderTopRightRadius: theme.radius.sm,
      borderTopLeftRadius: theme.radius.sm,
    },
  }),
});
