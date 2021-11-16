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

    const verticalOrientationStyles = {
      steps: {
        flexDirection: 'column',
        alignItems: iconPosition === 'left' ? 'flex-start' : 'flex-end',
      },

      separator: {
        width: 2,
        minHeight: theme.spacing.xl,
        marginLeft: iconPosition === 'left' ? separatorOffset : 0,
        marginRight: iconPosition === 'right' ? separatorOffset : 0,
        marginTop: theme.spacing.xs / 2,
        marginBottom: theme.spacing.xs / 2,
      },
    } as const;

    return {
      root: {},

      steps: {
        display: 'flex',
        boxSizing: 'border-box',
        alignItems: 'center',
        ...(orientation === 'vertical' ? verticalOrientationStyles.steps : null),
      },

      separator: {
        boxSizing: 'border-box',
        transition: 'background-color 150ms ease',
        flex: 1,
        height: 2,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        marginLeft: theme.spacing.md,
        marginRight: theme.spacing.md,
        ...(orientation === 'vertical' ? verticalOrientationStyles.separator : null),
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
