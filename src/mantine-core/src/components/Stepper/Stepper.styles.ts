import { createStyles, MantineNumberSize, MantineColor } from '@mantine/styles';

interface StepperStyles {
  contentPadding: MantineNumberSize;
  color: MantineColor;
  orientation: 'vertical' | 'horizontal';
  iconPosition: 'right' | 'left';
}

export default createStyles(
  (theme, { contentPadding, color, orientation, iconPosition }: StepperStyles) => {
    const separatorPadding = 19;
    return {
      root: {},

      steps: {
        display: 'flex',
        flexDirection: orientation === 'horizontal' ? 'row' : 'column',
        alignItems:
          orientation === 'horizontal'
            ? 'center'
            : iconPosition === 'left'
            ? 'flex-start'
            : 'flex-end',
      },

      separator: {
        flex: 1,
        height: 2,
        minHeight: orientation === 'vertical' ? theme.spacing.xl : undefined,
        width: orientation === 'vertical' ? 2 : undefined,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        marginLeft:
          orientation === 'horizontal'
            ? theme.spacing.md
            : iconPosition === 'left'
            ? separatorPadding
            : 0,
        marginRight:
          orientation === 'horizontal'
            ? theme.spacing.md
            : iconPosition === 'right'
            ? separatorPadding
            : 0,
        marginTop: orientation === 'vertical' ? theme.spacing.xs / 2 : 0,
        marginBottom: orientation === 'vertical' ? theme.spacing.xs / 2 : 0,
      },

      separatorActive: {
        backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 7 : 6),
      },

      content: {
        ...theme.fn.fontStyles(),
        paddingTop: theme.fn.size({ size: contentPadding, sizes: theme.spacing }),
      },
    };
  }
);
