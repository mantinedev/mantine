import { createStyles, MantineNumberSize, MantineColor, keyframes, rem } from '@mantine/styles';

const sizes = {
  xs: rem(3),
  sm: rem(5),
  md: rem(8),
  lg: rem(12),
  xl: rem(16),
};

export interface ProgressStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
  striped: boolean;
  animate: boolean;
}

const stripesAnimation = keyframes({
  from: { backgroundPosition: '0 0' },
  to: { backgroundPosition: `${rem(40)} 0` },
});

export default createStyles(
  (theme, { color, radius, striped, animate }: ProgressStylesParams, { size }) => ({
    root: {
      position: 'relative',
      height: theme.fn.size({ size, sizes }),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      borderRadius: theme.fn.radius(radius),
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
      backgroundColor: theme.fn.variant({
        variant: 'filled',
        primaryFallback: false,
        color: color || theme.primaryColor,
      }).background,
      transition: 'width 100ms linear',
      animation: animate ? `${stripesAnimation} 1000ms linear infinite` : 'none',
      backgroundSize: `${rem(20)} ${rem(20)}`,
      backgroundImage: striped
        ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)'
        : 'none',

      '&:last-of-type': {
        borderTopRightRadius: theme.fn.radius(radius),
        borderBottomRightRadius: theme.fn.radius(radius),
      },

      '&:first-of-type': {
        borderTopLeftRadius: theme.fn.radius(radius),
        borderBottomLeftRadius: theme.fn.radius(radius),
      },

      '@media (prefers-reduced-motion)': {
        transitionDuration: theme.respectReducedMotion ? '0ms' : undefined,
      },
    },

    label: {
      color: theme.white,
      fontSize: `calc(${theme.fn.size({ size, sizes })} * 0.65)`,
      fontWeight: 700,
      userSelect: 'none',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
  })
);
