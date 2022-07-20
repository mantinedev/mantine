import { createStyles, MantineColor, MantineNumberSize, MantineSize } from '@mantine/styles';

export interface StepStylesParams {
  color: MantineColor;
  iconSize: number;
  size: MantineSize;
  radius: MantineNumberSize;
  allowStepClick: boolean;
  iconPosition: 'right' | 'left';
}

export const iconSizes = {
  xs: 34,
  sm: 36,
  md: 42,
  lg: 48,
  xl: 52,
};

export default createStyles(
  (theme, { color, iconSize, size, radius, allowStepClick, iconPosition }: StepStylesParams) => {
    const _iconSize = iconSize || theme.fn.size({ size, sizes: iconSizes });
    const iconMargin = size === 'xl' || size === 'lg' ? theme.spacing.md : theme.spacing.sm;
    const _radius = theme.fn.size({ size: radius, sizes: theme.radius });
    const colors = theme.fn.variant({ variant: 'filled', color });
    const separatorDistanceFromIcon = theme.spacing.xs / 2;

    return {
      stepLoader: {},

      step: {
        display: 'flex',
        flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
        cursor: allowStepClick ? 'pointer' : 'default',
        alignItems: 'center',
      },

      stepWrapper: {
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
        marginBottom: separatorDistanceFromIcon,
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
        border: `2px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
        transition: 'background-color 150ms ease, border-color 150ms ease',
        position: 'relative',
        fontWeight: 700,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
        fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),

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
      },

      stepLabel: {
        textAlign: iconPosition,
        fontWeight: 500,
        fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
        lineHeight: 1,
      },

      stepDescription: {
        textAlign: iconPosition,
        marginTop: theme.fn.size({ size, sizes: theme.spacing }) / 3,
        marginBottom: theme.fn.size({ size, sizes: theme.spacing }) / 3,
        fontSize: theme.fn.size({ size, sizes: theme.fontSizes }) - 2,
        lineHeight: 1,
      },
    };
  }
);
