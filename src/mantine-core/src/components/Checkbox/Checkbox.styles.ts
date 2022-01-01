import { createStyles, MantineSize, MantineColor, MantineNumberSize } from '@mantine/styles';

export const sizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 30,
  xl: 36,
};

const iconSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 16,
  xl: 20,
};

interface CheckboxStyles {
  size: MantineSize;
  radius: MantineNumberSize;
  color: MantineColor;
  transitionDuration: number;
}

export default createStyles(
  (theme, { size, radius, color, transitionDuration }: CheckboxStyles, getRef) => {
    const _size = theme.fn.size({ size, sizes });

    const icon = getRef('icon');

    return {
      icon: {
        ref: icon,
        color: theme.white,
        transform: 'translateY(5px) scale(0.5)',
        opacity: 0,
        transitionProperty: 'opacity, transform',
        transitionTimingFunction: 'ease',
        transitionDuration: `${transitionDuration}ms`,
        pointerEvents: 'none',
        width: theme.fn.size({ size, sizes: iconSizes }),
        position: 'absolute',
        zIndex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',

        '@media (prefers-reduced-motion)': {
          transitionDuration: '0ms',
        },
      },

      root: {
        display: 'flex',
        alignItems: 'center',
      },

      inner: {
        position: 'relative',
        width: _size,
        height: _size,
      },

      label: {
        ...theme.fn.fontStyles(),
        WebkitTapHighlightColor: 'transparent',
        paddingLeft: theme.spacing.sm,
        fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
        lineHeight: `${_size}px`,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      },

      input: {
        ...theme.fn.focusStyles(),
        appearance: 'none',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
        }`,
        width: _size,
        height: _size,
        borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
        padding: 0,
        outline: 0,
        display: 'block',
        margin: 0,
        transition: `border-color ${transitionDuration}ms ease, background-color ${transitionDuration}ms ease`,

        '&:checked': {
          backgroundColor: theme.fn.themeColor(color, 6),
          borderColor: theme.fn.themeColor(color, 6),

          [`& + .${icon}`]: {
            opacity: 1,
            transform: 'translateY(0) scale(1)',
          },
        },

        '&:disabled': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3],
          cursor: 'not-allowed',

          [`& + .${icon}`]: {
            color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
          },
        },
      },
    };
  }
);
