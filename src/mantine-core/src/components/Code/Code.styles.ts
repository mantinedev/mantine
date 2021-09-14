import { createMemoStyles, MantineTheme, getFontStyles, getSharedColorScheme, MantineColor } from '../../theme';

interface CodeStyles {
  theme: MantineTheme;
  color: MantineColor;
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
      backgroundColor:
        theme.colorScheme === 'dark' && color === 'dark' ? theme.colors.dark[5] : colors.background,
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
