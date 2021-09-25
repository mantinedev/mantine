import { createStyles, getFontStyles, getSharedColorScheme, MantineColor } from '@mantine/styles';

interface CodeStyles {
  color: MantineColor;
}

export default createStyles((theme, { color }: CodeStyles) => {
  const colors = getSharedColorScheme({ theme, color, variant: 'light' });
  return {
    root: {
      ...getFontStyles(theme),
      lineHeight: theme.lineHeight,
      padding: `2px ${theme.spacing.xs / 2}px`,
      borderRadius: theme.radius.sm,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      backgroundColor:
        theme.colorScheme === 'dark' && color === 'dark' ? theme.colors.dark[5] : colors.background,
      fontFamily: theme.fontFamilyMonospace,
      fontSize: theme.fontSizes.xs,
    },

    block: {
      padding: theme.spacing.xs,
      margin: 0,
      overflowX: 'auto',
    },
  };
});
