import { createStyles, MantineNumberSize, MantineColor, getStylesRef, rem } from '@mantine/styles';

export const WRAPPER_PADDING = 4;

export interface SegmentedControlStylesParams {
  fullWidth: boolean;
  color: MantineColor;
  radius: MantineNumberSize;
  shouldAnimate: boolean;
  transitionDuration: number;
  transitionTimingFunction: string;
  orientation: 'vertical' | 'horizontal';
}

const sizes = {
  xs: `${rem(3)} ${rem(6)}`,
  sm: `${rem(5)} ${rem(10)}`,
  md: `${rem(7)} ${rem(14)}`,
  lg: `${rem(9)} ${rem(16)}`,
  xl: `${rem(12)} ${rem(20)}`,
};

export default createStyles(
  (
    theme,
    {
      fullWidth,
      color,
      radius,
      shouldAnimate,
      transitionDuration,
      transitionTimingFunction,
      orientation,
    }: SegmentedControlStylesParams,
    { size }
  ) => {
    const vertical = orientation === 'vertical';
    const colors = theme.fn.variant({ variant: 'filled', color });

    return {
      label: {
        ref: getStylesRef('label'),
        ...theme.fn.focusStyles(),
        ...theme.fn.fontStyles(),
        WebkitTapHighlightColor: 'transparent',
        borderRadius: theme.fn.radius(radius),
        fontWeight: 500,
        fontSize: size in theme.fontSizes ? theme.fontSizes[size] : theme.fontSizes.sm,
        cursor: 'pointer',
        display: 'block',
        textAlign: 'center',
        padding: sizes[size in sizes ? size : 'sm'],
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        userSelect: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
        transition: `color ${shouldAnimate ? 0 : transitionDuration}ms ${
          transitionTimingFunction || theme.transitionTimingFunction
        }`,

        '&:hover': {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        },

        '&[data-disabled]': {
          '&, &:hover': {
            color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
            cursor: 'not-allowed',
            pointerEvents: 'none',
          },
        },

        '&[data-active]': {
          '&, &:hover': {
            color: color || theme.colorScheme === 'dark' ? theme.white : theme.black,
          },
        },
      },

      control: {
        ref: getStylesRef('control'),
        position: 'relative',
        boxSizing: 'border-box',
        flex: 1,
        zIndex: 2,
        transition: `border-left-color ${shouldAnimate ? 0 : transitionDuration}ms ${
          transitionTimingFunction || theme.transitionTimingFunction
        }`,

        '&:not(:first-of-type)': {
          borderStyle: 'solid',
          borderWidth: vertical ? `${rem(1)} 0 0 0` : `0 0 0 ${rem(1)}`,
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
        },
      },

      input: {
        height: 0,
        width: 0,
        position: 'absolute',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        opacity: 0,

        // input is hidden by default, these styles add focus to label when user navigates with keyboard
        '&:focus': {
          outline: 'none',

          [`& + .${getStylesRef('label')}`]: {
            ...(theme.focusRing === 'always' || theme.focusRing === 'auto'
              ? theme.focusRingStyles.styles(theme)
              : theme.focusRingStyles.resetStyles(theme)),
          },

          '&:focus:not(:focus-visible)': {
            [`& + .${getStylesRef('label')}`]: {
              ...(theme.focusRing === 'auto' || theme.focusRing === 'never'
                ? theme.focusRingStyles.resetStyles(theme)
                : null),
            },
          },
        },

        '&:disabled + label': {
          '&, &:hover': {
            color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
            cursor: 'not-allowed',
            pointerEvents: 'none',
          },
        },
      },

      root: {
        position: 'relative',
        display: fullWidth || vertical ? 'flex' : 'inline-flex',
        width: vertical && !fullWidth ? 'max-content' : 'auto',
        flexDirection: vertical ? 'column' : 'row',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
        borderRadius: theme.fn.radius(radius),
        overflow: 'hidden',
        padding: WRAPPER_PADDING,
      },

      controlActive: {
        borderLeftColor: 'transparent !important',
        borderTopColor: 'transparent !important',

        [`& + .${getStylesRef('control')}`]: {
          [vertical ? 'borderTopColor' : 'borderLeftColor']: 'transparent !important',
        },
        borderRadius: theme.fn.radius(radius),
        boxShadow: shouldAnimate
          ? color || theme.colorScheme === 'dark'
            ? 'none'
            : theme.shadows.xs
          : undefined,
        backgroundColor: shouldAnimate
          ? color
            ? colors.background
            : theme.colorScheme === 'dark'
            ? theme.colors.dark[5]
            : theme.white
          : undefined,
      },

      indicator: {
        boxSizing: 'border-box',
        borderRadius: theme.fn.radius(radius),
        position: 'absolute',
        zIndex: 1,
        boxShadow: color || theme.colorScheme === 'dark' ? 'none' : theme.shadows.xs,
        transition: `transform ${shouldAnimate ? 0 : transitionDuration}ms ${
          theme.transitionTimingFunction
        }, width ${shouldAnimate ? 0 : transitionDuration / 2}ms ${
          transitionTimingFunction || theme.transitionTimingFunction
        }`,
        backgroundColor: color
          ? colors.background
          : theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.white,
      },
    };
  }
);
