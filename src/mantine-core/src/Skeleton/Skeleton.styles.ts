import { createStyles, MantineNumberSize, keyframes, rem } from '@mantine/styles';

export interface SkeletonStylesParams {
  height: number | string;
  width: number | string;
  circle: boolean;
  radius: MantineNumberSize;
  animate: boolean;
}

export const fade = keyframes({
  'from, to': { opacity: 0.4 },
  '50%': { opacity: 1 },
});

export default createStyles(
  (theme, { height, width, radius, circle, animate }: SkeletonStylesParams) => ({
    root: {
      height: rem(height),
      width: circle ? rem(height) : rem(width),
      borderRadius: circle ? rem(height) : theme.fn.radius(radius),
      position: 'relative',
      WebkitTransform: 'translateZ(0)',
    },

    visible: {
      overflow: 'hidden',

      '&::before': {
        ...theme.fn.cover(0),
        content: '""',
        background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        zIndex: 10,
      },

      '&::after': {
        ...theme.fn.cover(0),
        content: '""',
        background: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
        animation: animate ? `${fade} 1500ms linear infinite` : 'none',
        zIndex: 11,
      },
    },
  })
);
