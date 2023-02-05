import {
  createStyles,
  MantineNumberSize,
  MantineColor,
  rem,
  getBreakpointValue,
  getSize,
  em,
} from '@mantine/styles';
import { iconSizes } from './Step/Step.styles';

export interface StepperStylesParams {
  contentPadding: MantineNumberSize;
  iconSize?: number;
  color: MantineColor;
  orientation: 'vertical' | 'horizontal';
  iconPosition: 'right' | 'left';
  breakpoint: MantineNumberSize;
}

export default createStyles(
  (
    theme,
    { contentPadding, color, orientation, iconPosition, iconSize, breakpoint }: StepperStylesParams,
    { size }
  ) => {
    const shouldBeResponsive = typeof breakpoint !== 'undefined';
    const breakpointValue = getBreakpointValue(
      getSize({ size: breakpoint, sizes: theme.breakpoints })
    );
    const separatorOffset =
      typeof iconSize !== 'undefined'
        ? `calc(${rem(iconSize)} / 2 - ${rem(1)})`
        : `calc(${getSize({ size, sizes: iconSizes })} / 2 - ${rem(1)})`;

    const verticalOrientationStyles = {
      steps: {
        flexDirection: 'column',
        alignItems: iconPosition === 'left' ? 'flex-start' : 'flex-end',
      },

      separator: {
        width: rem(2),
        minHeight: theme.spacing.xl,
        marginLeft: iconPosition === 'left' ? separatorOffset : 0,
        marginRight: iconPosition === 'right' ? separatorOffset : 0,
        marginTop: `calc(${theme.spacing.xs} / 2)`,
        marginBottom: `calc(${theme.spacing.xs} - ${rem(2)})`,
      },
    } as const;

    const responsiveStyles = {
      steps: {
        [`@media (max-width: ${em(breakpointValue - 1)})`]: verticalOrientationStyles.steps,
      },

      separator: {
        [`@media (max-width: ${em(breakpointValue - 1)})`]: verticalOrientationStyles.separator,
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
        height: rem(2),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        marginLeft: theme.spacing.md,
        marginRight: theme.spacing.md,
        ...(orientation === 'vertical' ? verticalOrientationStyles.separator : null),
        ...(shouldBeResponsive ? responsiveStyles.separator : null),
      },

      separatorActive: {
        backgroundColor: theme.fn.variant({
          variant: 'filled',
          color: color || theme.primaryColor,
          primaryFallback: false,
        }).background,
      },

      content: {
        ...theme.fn.fontStyles(),
        paddingTop: getSize({ size: contentPadding, sizes: theme.spacing }),
      },
    };
  }
);
