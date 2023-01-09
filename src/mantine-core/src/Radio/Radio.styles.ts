import { createStyles, MantineColor, getStylesRef, rem, getSize } from '@mantine/styles';

export interface RadioStylesParams {
  color: MantineColor;
  transitionDuration: number;
  labelPosition: 'left' | 'right';
  error: boolean;
}

const sizes = {
  xs: rem(16),
  sm: rem(20),
  md: rem(24),
  lg: rem(30),
  xl: rem(36),
};

const iconSizes = {
  xs: rem(6),
  sm: rem(8),
  md: rem(10),
  lg: rem(14),
  xl: rem(16),
};

export default createStyles(
  (theme, { color, transitionDuration, labelPosition, error }: RadioStylesParams, { size }) => {
    const colors = theme.fn.variant({ variant: 'filled', color });
    const errorColor = theme.fn.variant({ variant: 'filled', color: 'red' }).background;

    return {
      inner: {
        order: labelPosition === 'left' ? 2 : 1,
        position: 'relative',
        alignSelf: 'flex-start',
      },

      icon: {
        ref: getStylesRef('icon'),
        color: theme.white,
        opacity: 0,
        transform: `scale(0.75) translateY(${rem(2)})`,
        transition: `opacity ${transitionDuration}ms ${theme.transitionTimingFunction}`,
        pointerEvents: 'none',
        width: getSize({ sizes: iconSizes, size }),
        height: getSize({ sizes: iconSizes, size }),
        position: 'absolute',
        top: `calc(50% - ${getSize({ sizes: iconSizes, size })} / 2)`,
        left: `calc(50% - ${getSize({ sizes: iconSizes, size })} / 2)`,
      },

      radio: {
        ...theme.fn.focusStyles(),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        border: `${rem(1)} solid ${
          error
            ? errorColor
            : theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[4]
        }`,
        position: 'relative',
        appearance: 'none',
        width: getSize({ sizes, size }),
        height: getSize({ sizes, size }),
        borderRadius: getSize({ sizes, size }),
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transitionProperty: 'background-color, border-color',
        transitionTimingFunction: theme.transitionTimingFunction,
        transitionDuration: `${transitionDuration}ms`,
        cursor: theme.cursorType,

        '&:checked': {
          background: colors.background,
          borderColor: colors.background,

          [`& + .${getStylesRef('icon')}`]: {
            opacity: 1,
            transform: 'scale(1)',
          },
        },

        '&:disabled': {
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

          [`& + .${getStylesRef('icon')}`]: {
            color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4],
          },
        },
      },
    };
  }
);
