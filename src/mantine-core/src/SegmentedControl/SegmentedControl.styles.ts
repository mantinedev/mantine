import { createStyles, MantineNumberSize, MantineSize, MantineColor } from '@mantine/styles';

export const WRAPPER_PADDING = 4;

export interface SegmentedControlStylesParams {
  fullWidth: boolean;
  color: MantineColor;
  radius: MantineNumberSize;
  shouldAnimate: boolean;
  transitionDuration: number;
  transitionTimingFunction: string;
  size: MantineSize;
  orientation: 'vertical' | 'horizontal';
}

const sizes = {
  xs: '3px 6px',
  sm: '5px 10px',
  md: '7px 14px',
  lg: '9px 16px',
  xl: '12px 20px',
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
      size,
      orientation,
    }: SegmentedControlStylesParams,
    getRef
  ) => {
    const vertical = orientation === 'vertical';
    const colors = theme.fn.variant({ variant: 'filled', color });

    return {
      label: {
        ref: getRef('label'),
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
      },

      control: {
        ref: getRef('control'),
        position: 'relative',
        boxSizing: 'border-box',
        flex: 1,
        zIndex: 2,
        transition: `border-left-color ${shouldAnimate ? 0 : transitionDuration}ms ${
          transitionTimingFunction || theme.transitionTimingFunction
        }`,

        '&:not(:first-of-type)': {
          borderStyle: 'solid',
          borderWidth: vertical ? '1px 0 0 0' : '0 0 0 1px',
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

          [`& + .${getRef('label')}`]: {
            outline: 'none',
            boxShadow:
              theme.focusRing === 'always' || theme.focusRing === 'auto'
                ? `0 0 0 2px ${
                    theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
                  }, 0 0 0 4px ${
                    theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]
                  }`
                : undefined,
          },

          '&:focus:not(:focus-visible)': {
            [`& + .${getRef('label')}`]: {
              boxShadow:
                theme.focusRing === 'auto' || theme.focusRing === 'never' ? 'none' : undefined,
            },
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

        [`& + .${getRef('control')}`]: {
          borderLeftColor: 'transparent !important',
          borderTopColor: 'transparent !important',
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

      labelActive: {
        '&, &:hover': {
          color: color || theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },

      disabled: {
        '&, &:hover': {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
          cursor: 'not-allowed',
        },
      },

      active: {
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
