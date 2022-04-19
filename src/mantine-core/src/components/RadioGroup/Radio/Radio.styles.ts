import { createStyles, MantineSize, MantineColor } from '@mantine/styles';

export interface RadioStylesParams {
  size: MantineSize;
  color: MantineColor;
  transitionDuration: number;
}

export const sizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 36,
};

export default createStyles(
  (theme, { size, color, transitionDuration }: RadioStylesParams, getRef) => {
    const labelDisabled = { ref: getRef('labelDisabled') } as const;
    const colors = theme.fn.variant({ variant: 'filled', color });

    return {
      labelDisabled,

      radioWrapper: {
        display: 'flex',
        alignItems: 'center',
        WebkitTapHighlightColor: 'transparent',
      },

      inner: {
        position: 'relative',
      },

      icon: {
        ref: getRef('icon'),
        color: theme.white,
        opacity: 0,
        transform: 'scale(0.75) translateY(2px)',
        transition: `opacity ${transitionDuration}ms ${theme.transitionTimingFunction}`,
        pointerEvents: 'none',
        width: theme.fn.size({ sizes, size }) / 2,
        height: theme.fn.size({ sizes, size }) / 2,
        position: 'absolute',
        top: `calc(50% - ${theme.fn.size({ sizes, size }) / 4}px)`,
        left: `calc(50% - ${theme.fn.size({ sizes, size }) / 4}px)`,
      },

      radio: {
        ...theme.fn.focusStyles(),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
        }`,
        position: 'relative',
        appearance: 'none',
        width: theme.fn.size({ sizes, size }),
        height: theme.fn.size({ sizes, size }),
        borderRadius: theme.fn.size({ sizes, size }),
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transitionProperty: 'background-color, border-color',
        transitionTimingFunction: theme.transitionTimingFunction,
        transitionDuration: `${transitionDuration}ms`,

        '&:checked': {
          background: colors.background,
          borderColor: colors.background,

          [`& + .${getRef('icon')}`]: {
            opacity: 1,
            transform: 'scale(1)',
          },
        },

        '&:disabled': {
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

          [`& + .${getRef('icon')}`]: {
            color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4],
          },
        },
      },

      label: {
        ...theme.fn.fontStyles(),
        display: 'flex',
        alignItems: 'flex-start',
        fontSize: theme.fontSizes[size] || theme.fontSizes.md,
        lineHeight: `${theme.fn.size({ sizes, size })}px`,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        marginLeft: theme.spacing.sm,

        [`&.${labelDisabled.ref}`]: {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
        },
      },
    };
  }
);
