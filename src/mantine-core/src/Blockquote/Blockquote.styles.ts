import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles, getThemeColor } from '@mantine/theme';

interface BlockquoteStylesProps {
  theme: MantineTheme;
  color: string;
}

export default createUseStyles({
  blockquote: ({ theme, color }: BlockquoteStylesProps) => ({
    ...getFontStyles(theme),
    fontSize: theme.fontSizes.lg,
    lineHeight: theme.lineHeight,
    backgroundColor: theme.colors.gray[0],
    margin: 0,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `3px solid ${getThemeColor({ theme, color, shade: 6 })}`,
    padding: [theme.spacing.md, theme.spacing.lg],
  }),

  inner: {
    display: 'flex',
  },

  body: {
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  icon: ({ theme, color }: BlockquoteStylesProps) => ({
    color: getThemeColor({ theme, color, shade: 6 }),
    marginRight: theme.spacing.md,
    marginTop: 2,
    width: 22,
  }),

  cite: ({ theme }: BlockquoteStylesProps) => ({
    display: 'block',
    fontSize: theme.fontSizes.sm,
    marginTop: theme.spacing.xs,
    color: theme.colors.gray[6],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
});
