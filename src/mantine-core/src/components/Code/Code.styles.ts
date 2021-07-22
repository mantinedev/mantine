import {
  createMemoStyles,
  MantineTheme,
  getThemeColor,
  getFontStyles,
  hexToRgba,
} from '../../theme';

interface CodeStyles {
  theme: MantineTheme;
  color: string;
}

export default createMemoStyles({
  root: ({ theme, color }: CodeStyles) => ({
    ...getFontStyles(theme),
    lineHeight: theme.lineHeight,
    padding: [1, theme.spacing.xs / 2],
    borderRadius: theme.radius.sm,
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 1 : 9 }),
    backgroundColor: hexToRgba(
      getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 0 }),
      theme.colorScheme === 'dark' ? 0.45 : 1
    ),
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fontSizes.xs,
    border: `1px solid ${
      theme.colorScheme === 'dark'
        ? 'transparent'
        : getThemeColor({
            theme,
            color,
            shade: 2,
          })
    }`,
  }),

  block: ({ theme }: CodeStyles) => ({
    padding: theme.spacing.xs,
    margin: 0,
    overflowX: 'auto',
  }),
});
