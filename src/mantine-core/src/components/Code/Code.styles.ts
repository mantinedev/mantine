import { createStyles, MantineColor } from '@mantine/styles';

export interface CodeStylesParams {
  color: MantineColor;
}

export default createStyles((theme, { color }: CodeStylesParams) => {
  const colors = theme.fn.variant({ color, variant: 'light' });

  return {
    root: {
      ...theme.fn.fontStyles(),
      lineHeight: theme.lineHeight,
      padding: `2px ${theme.spacing.xs / 2}px`,
      borderRadius: theme.radius.sm,
      color:
        theme.colorScheme === 'dark'
          ? color === 'dark'
            ? theme.colors.dark[0]
            : theme.white
          : theme.colors.dark[7],
      backgroundColor:
        theme.colorScheme === 'dark' && color === 'dark' ? theme.colors.dark[4] : colors.background,
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
