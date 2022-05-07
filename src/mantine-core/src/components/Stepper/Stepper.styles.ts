import { createStyles, MantineNumberSize, MantineColor, MantineSize } from '@mantine/styles';
import { iconSizes } from './Step/Step.styles';

export interface StepperStylesParams {
  contentPadding: MantineNumberSize;
  iconSize?: number;
  size: MantineSize;
  color: MantineColor;
  orientation: 'vertical' | 'horizontal';
  iconPosition: 'right' | 'left';
  breakpoint: MantineNumberSize;
}

export default createStyles(
  (
    theme,
    {
      contentPadding,
      color,
      orientation,
      iconPosition,
      iconSize,
      size,
      breakpoint,
    }: StepperStylesParams
  ) => {
    const shouldBeResponsive = typeof breakpoint !== 'undefined';
    const breakpointValue = theme.fn.size({ size: breakpoint, sizes: theme.breakpoints });
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

    const responsiveStyles = {
      steps: {
        [`@media (max-width: ${breakpointValue}px)`]: verticalOrientationStyles.steps,
      },

      separator: {
        [`@media (max-width: ${breakpointValue}px)`]: verticalOrientationStyles.separator,
      },
    } as const;

    return {
      root: {},

      steps: {
        display: 'flex',
        boxSizing: 'border-box',
        alignItems: 'center',
        ...(orientation === 'vertical' ? verticalOrientationStyles.steps : null),
        ...(shouldBeResponsive ? responsiveStyles.steps : null),
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
        ...(shouldBeResponsive ? responsiveStyles.separator : null),
      },

      separatorActive: {
        backgroundColor: theme.fn.variant({ variant: 'filled', color }).background,
      },

      content: {
        ...theme.fn.fontStyles(),
        paddingTop: theme.fn.size({ size: contentPadding, sizes: theme.spacing }),
      },
    };
  }
);
