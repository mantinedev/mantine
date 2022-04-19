import { createStyles, MantineNumberSize, MantineColor, keyframes } from '@mantine/styles';

export const sizes = {
  xs: 3,
  sm: 5,
  md: 8,
  lg: 12,
  xl: 16,
};

export interface ProgressStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
  size: MantineNumberSize;
  striped: boolean;
  animate: boolean;
}

const stripesAnimation = keyframes({
  from: { backgroundPosition: '0 0' },
  to: { backgroundPosition: '40px 0' },
});

export default createStyles(
  (theme, { color, radius, size, striped, animate }: ProgressStylesParams) => ({
    root: {
      position: 'relative',
      height: theme.fn.size({ size, sizes }),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
      overflow: 'hidden',
    },

    bar: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.fn.themeColor(
        color || theme.primaryColor,
        theme.fn.primaryShade(),
        false
      ),
      transition: 'width 100ms linear',
      animation: animate ? `${stripesAnimation} 1000ms linear infinite` : 'none',
      backgroundSize: '20px 20px',
      backgroundImage: striped
        ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)'
        : 'none',

      '&:last-of-type': {
        borderTopRightRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
        borderBottomRightRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
      },

      '&:first-of-type': {
        borderTopLeftRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
        borderBottomLeftRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
      },

      '@media (prefers-reduced-motion)': {
        transitionDuration: '0ms',
      },
    },

    label: {
      color: theme.white,
      fontSize: theme.fn.size({ size, sizes }) * 0.65,
      fontWeight: 700,
      userSelect: 'none',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
  })
);
