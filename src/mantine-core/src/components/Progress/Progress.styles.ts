import { createStyles, MantineNumberSize, MantineColor, keyframes } from '@mantine/styles';

export const sizes = {
  xs: 3,
  sm: 5,
  md: 8,
  lg: 12,
  xl: 16,
};

interface ProgressStyles {
  color: MantineColor;
  radius: MantineNumberSize;
  size: MantineNumberSize;
  striped: boolean;
  animate: boolean;
  indeterminate: boolean;
}

export const move = keyframes({
  '100%': { backgroundPosition: '40px 100%' },
});

export default createStyles(
  (theme, { color, radius, size, striped, animate, indeterminate }: ProgressStyles) => ({
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
      textAlign: 'center',
      backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 4 : 6),
      transition: `width 200ms ${theme.transitionTimingFunction}`,
      backgroundSize: `${theme.spacing.md}px ${theme.spacing.md}px`,
      animation: animate || indeterminate ? `${move} 1500ms linear infinite` : 'none',
      backgroundImage:
        striped || indeterminate
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
      height: '100%',
      lineHeight: 1.2,
      color: '#ffffff',
      fontSize: theme.fn.size({ size, sizes }) * 0.8,
    },
  })
);
