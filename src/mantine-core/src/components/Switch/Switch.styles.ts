import { createStyles, MantineNumberSize, MantineSize, MantineColor } from '@mantine/styles';

interface SwitchStyles {
  color: MantineColor;
  size: MantineSize;
  radius: MantineNumberSize;
}

const switchHeight = {
  xs: 14,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 34,
};

const switchWidth = {
  xs: 28,
  sm: 36,
  md: 42,
  lg: 54,
  xl: 66,
};

const handleSizes = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 26,
};

export const sizes = Object.keys(switchHeight).reduce((acc, size) => {
  acc[size] = { width: switchWidth[size], height: switchHeight[size] };
  return acc;
}, {} as Record<MantineSize, { width: number; height: number }>);

export default createStyles((theme, { size, radius, color }: SwitchStyles) => {
  const handleSize = theme.fn.size({ size, sizes: handleSizes });
  const borderRadius = theme.fn.size({ size: radius, sizes: theme.radius });

  return {
    root: {
      display: 'flex',
      alignItems: 'center',
    },

    input: {
      ...theme.fn.focusStyles(),
      WebkitTapHighlightColor: 'transparent',
      position: 'relative',
      borderRadius,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
      height: theme.fn.size({ size, sizes: switchHeight }),
      width: theme.fn.size({ size, sizes: switchWidth }),
      minWidth: theme.fn.size({ size, sizes: switchWidth }),
      margin: 0,
      transitionProperty: 'background-color, border-color',
      transitionTimingFunction: theme.transitionTimingFunction,
      transitionDuration: '150ms',
      boxSizing: 'border-box',
      appearance: 'none',
      display: 'flex',
      alignItems: 'center',

      '&::before': {
        borderRadius,
        boxSizing: 'border-box',
        content: "''",
        display: 'block',
        backgroundColor: theme.white,
        height: handleSize,
        width: handleSize,
        border: `1px solid ${theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[3]}`,
        transition: `transform 150ms ${theme.transitionTimingFunction}`,
        transform: `translateX(${size === 'xs' ? 1 : 2}px)`,

        '@media (prefers-reduced-motion)': {
          transitionDuration: '0ms',
        },
      },

      '&:checked': {
        backgroundColor: theme.fn.themeColor(color, 6),
        borderColor: theme.fn.themeColor(color, 6),

        '&::before': {
          transform: `translateX(${
            theme.fn.size({ size, sizes: switchWidth }) -
            theme.fn.size({ size, sizes: handleSizes }) -
            (size === 'xs' ? 3 : 4) // borderWidth: 2 + padding: 2 * 2
          }px)`,
          borderColor: theme.white,
        },
      },

      '&:disabled': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        cursor: 'not-allowed',

        '&::before': {
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[0],
        },
      },
    },

    label: {
      ...theme.fn.fontStyles(),
      WebkitTapHighlightColor: 'transparent',
      fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
      fontFamily: theme.fontFamily,
      paddingLeft: theme.spacing.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    },
  };
});
