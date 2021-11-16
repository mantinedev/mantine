import { createStyles, MantineNumberSize, MantineColor, MantineSize } from '@mantine/styles';
import { iconSizes } from './Step/Step.styles';

interface StepperStyles {
  contentPadding: MantineNumberSize;
  iconSize?: number;
  size: MantineSize;
  color: MantineColor;
  orientation: 'vertical' | 'horizontal';
  iconPosition: 'right' | 'left';
}

export default createStyles(
  (theme, { contentPadding, color, orientation, iconPosition, iconSize, size }: StepperStyles) => {
    const separatorOffset =
      typeof iconSize !== 'undefined'
        ? iconSize / 2 - 1
        : theme.fn.size({ size, sizes: iconSizes }) / 2 - 1;

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
            ? separatorOffset
            : 0,
        marginRight:
          orientation === 'horizontal'
            ? theme.spacing.md
            : iconPosition === 'right'
            ? separatorOffset
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
