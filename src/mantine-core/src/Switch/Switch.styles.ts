import { createStyles, MantineNumberSize, MantineSize, MantineColor } from '@mantine/styles';

export interface SwitchStylesParams {
  color: MantineColor;
  size: MantineSize;
  radius: MantineNumberSize;
  offLabel: string;
  onLabel: string;
}

const switchHeight = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 30,
  xl: 36,
};

const switchWidth = {
  xs: 30,
  sm: 38,
  md: 46,
  lg: 56,
  xl: 68,
};

const handleSizes = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 22,
  xl: 28,
};

const labelFontSizes = {
  xs: 5,
  sm: 6,
  md: 7,
  lg: 9,
  xl: 11,
};

export default createStyles(
  (theme, { size, radius, color, offLabel, onLabel }: SwitchStylesParams) => {
    const handleSize = theme.fn.size({ size, sizes: handleSizes });
    const borderRadius = theme.fn.size({ size: radius, sizes: theme.radius });
    const colors = theme.fn.variant({ variant: 'filled', color });

    return {
      root: {
        display: 'flex',
        alignItems: 'center',
      },

      input: {
        ...theme.fn.focusStyles(),
        overflow: 'hidden',
        WebkitTapHighlightColor: 'transparent',
        position: 'relative',
        borderRadius,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
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
        fontSize: theme.fn.size({ size, sizes: labelFontSizes }),
        fontWeight: 600,
        cursor: theme.cursorType,

        '&::before': {
          zIndex: 1,
          borderRadius,
          boxSizing: 'border-box',
          content: '""',
          display: 'block',
          backgroundColor: theme.white,
          height: handleSize,
          width: handleSize,
          border: `1px solid ${theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[3]}`,
          transition: `transform 150ms ${theme.transitionTimingFunction}`,
          transform: `translateX(${size === 'xs' ? 1 : 2}px)`,

          '@media (prefers-reduced-motion)': {
            transitionDuration: theme.respectReducedMotion ? '0ms' : false,
          },
        },

        '&::after': {
          position: 'absolute',
          zIndex: 0,
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          lineHeight: 0,
          right: '10%',
          transform: 'translateX(0)',
          content: offLabel ? `'${offLabel}'` : "''",
          color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
          transition: `color 150ms ${theme.transitionTimingFunction}`,
        },

        '&:checked': {
          backgroundColor: colors.background,
          borderColor: colors.background,

          '&::before': {
            transform: `translateX(${
              theme.fn.size({ size, sizes: switchWidth }) -
              theme.fn.size({ size, sizes: handleSizes }) -
              (size === 'xs' ? 3 : 4) // borderWidth: 2 + padding: 2 * 2
            }px)`,
            borderColor: theme.white,
          },

          '&::after': {
            position: 'absolute',
            zIndex: 0,
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            lineHeight: 0,
            left: '10%',
            transform: 'translateX(0)',
            content: onLabel ? `'${onLabel}'` : "''",
            color: theme.white,
            transition: `color 150ms ${theme.transitionTimingFunction}`,
          },
        },

        '&:disabled': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
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
        cursor: theme.cursorType,
      },
    };
  }
);
