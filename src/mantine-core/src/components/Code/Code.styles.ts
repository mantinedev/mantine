import { createMemoStyles, MantineTheme, getFontStyles, getSharedColorScheme } from '../../theme';

interface CodeStyles {
  theme: MantineTheme;
  color: string;
}

export default createMemoStyles({
  root: ({ theme, color }: CodeStyles) => {
    const colors = getSharedColorScheme({ theme, color, variant: 'light' });

    return {
      ...getFontStyles(theme),
      lineHeight: theme.lineHeight,
      padding: [1, theme.spacing.xs / 2],
      borderRadius: theme.radius.sm,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      backgroundColor: colors.background,
      fontFamily: theme.fontFamilyMonospace,
      fontSize: theme.fontSizes.xs,
      border: `1px solid ${colors.border}`,
    };
  },

  block: ({ theme }: CodeStyles) => ({
    padding: theme.spacing.xs,
    margin: 0,
    overflowX: 'auto',
  }),
});
