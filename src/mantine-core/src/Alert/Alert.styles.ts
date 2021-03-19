import { createUseStyles } from 'react-jss';
import { MantineTheme, getThemeColor, getFontStyles } from '@mantine/theme';

interface AlertStylesProps {
  color: string;
  theme: MantineTheme;
}

export default createUseStyles({
  title: ({ color, theme }: AlertStylesProps) => ({
    boxSizing: 'border-box',
    textAlign: 'center',
    backgroundColor: getThemeColor({ theme, color, shade: 7 }),
    color: theme.white,
    textShadow: `1px 1px 0 ${getThemeColor({ theme, color, shade: 9 })}`,
    padding: [theme.spacing.xs, theme.spacing.md],
    borderTopRightRadius: theme.radius.sm,
    borderTopLeftRadius: theme.radius.sm,
    margin: 0,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }),

  body: ({ color, theme }: AlertStylesProps) => ({
    ...getFontStyles(theme),
    lineHeight: theme.lineHeight,
    backgroundColor: getThemeColor({ theme, color, shade: 0 }),
    padding: [theme.spacing.sm, theme.spacing.md],
    borderBottomLeftRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    textOverflow: 'ellipsis',
    overflow: 'hidden',

    '&:only-child': {
      borderTopRightRadius: theme.radius.sm,
      borderTopLeftRadius: theme.radius.sm,
    },
  }),
});
