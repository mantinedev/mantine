import { createMemoStyles, MantineTheme, getThemeColor, getFontStyles } from '../../theme';

interface TooltipStyles {
  theme: MantineTheme;
  color: string;
}

export default createMemoStyles({
  root: {
    position: 'relative',
    display: 'inline-block',
  },

  body: ({ theme, color }: TooltipStyles) => ({
    ...getFontStyles(theme),
    backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.radius.sm,
    padding: [theme.spacing.xs / 2, theme.spacing.xs],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
    position: 'relative',
  }),

  tooltip: {
    display: 'inline-block',
    position: 'absolute',
  },

  arrow: ({ theme, color }: TooltipStyles) => ({
    border: 0,
    background: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),
    zIndex: 1,
  }),
});
