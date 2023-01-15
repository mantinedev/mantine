import {
  createStyles,
  MantineColor,
  MantineNumberSize,
  getStylesRef,
  rem,
  getSize,
} from '@mantine/styles';

export interface StepStylesParams {
  color: MantineColor;
  iconSize: number;
  radius: MantineNumberSize;
  allowStepClick: boolean;
  iconPosition: 'right' | 'left';
  orientation: 'vertical' | 'horizontal';
}

export const iconSizes = {
  xs: rem(34),
  sm: rem(36),
  md: rem(42),
  lg: rem(48),
  xl: rem(52),
};

export default createStyles(
  (
    theme,
    { color, iconSize, radius, allowStepClick, iconPosition, orientation }: StepStylesParams,
    { size }
  ) => {
    const _iconSize = iconSize ? rem(iconSize) : getSize({ size, sizes: iconSizes });
    const iconMargin = size === 'xl' || size === 'lg' ? theme.spacing.md : theme.spacing.sm;
    const _radius = theme.fn.radius(radius);
    const colors = theme.fn.variant({
      variant: 'filled',
      color: color || theme.primaryColor,
      primaryFallback: false,
    });
    const separatorDistanceFromIcon = `calc(${theme.spacing.xs} / 2)`;

    const verticalOrientationStyles = {
      step: {
        justifyContent: 'flex-start',
        minHeight: `calc(${_iconSize} + ${theme.spacing.xl} + ${separatorDistanceFromIcon})`,
        marginTop: separatorDistanceFromIcon,
        overflow: 'hidden',
        '&:first-of-type': {
          marginTop: 0,
        },
        [`&:last-of-type .${getStylesRef('verticalSeparator')}`]: {
          display: 'none',
        },
      },
    } as const;

    return {
      stepLoader: {},

      step: {
        display: 'flex',
        flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
        cursor: allowStepClick ? 'pointer' : 'default',
        ...(orientation === 'vertical'
          ? verticalOrientationStyles.step
          : {
              alignItems: 'center',
            }),
      },

      stepWrapper: {
        position: 'relative',
      },

      verticalSeparator: {
        top: `calc(${_iconSize} + ${separatorDistanceFromIcon})`,
        left: `calc(${_iconSize} / 2)`,
        height: '100vh',
        position: 'absolute',
        borderLeft: `${rem(2)} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
        ref: getStylesRef('verticalSeparator'),
      },

      verticalSeparatorActive: {
        borderColor: theme.fn.variant({ variant: 'filled', color }).background,
      },

      stepIcon: {
        boxSizing: 'border-box',
        height: _iconSize,
        width: _iconSize,
        minWidth: _iconSize,
        borderRadius: _radius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        border: `${rem(2)} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
        transition: 'background-color 150ms ease, border-color 150ms ease',
        position: 'relative',
        fontWeight: 700,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
        fontSize: getSize({ size, sizes: theme.fontSizes }),

        '&[data-progress]': {
          borderColor: colors.background,
        },

        '&[data-completed]': {
          backgroundColor: colors.background,
          borderColor: colors.background,
          color: theme.white,
        },
      },

      stepCompletedIcon: {
        ...theme.fn.cover(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.white,
      },

      stepBody: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: iconPosition === 'left' ? iconMargin : undefined,
        marginRight: iconPosition === 'right' ? iconMargin : undefined,
        ...(orientation === 'vertical' ? { marginTop: `calc(${iconSize} / 4)` } : null),
      },

      stepLabel: {
        textAlign: iconPosition,
        fontWeight: 500,
        fontSize: getSize({ size, sizes: theme.fontSizes }),
        lineHeight: 1,
      },

      stepDescription: {
        textAlign: iconPosition,
        marginTop: `calc(${getSize({ size, sizes: theme.spacing })} / 3)`,
        marginBottom: `calc(${getSize({ size, sizes: theme.spacing })} / 3)`,
        fontSize: `calc(${getSize({ size, sizes: theme.fontSizes })} - ${rem(2)})`,
        lineHeight: 1,
      },
    };
  }
);
