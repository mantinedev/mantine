import { createStyles, MantineNumberSize, keyframes } from '@mantine/styles';

interface SkeletonStylesProps {
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
  (theme, { height, width, radius, circle, animate }: SkeletonStylesProps) => ({
    root: {
      height,
      width: circle ? height : width,
      borderRadius: circle ? height : theme.fn.size({ size: radius, sizes: theme.radius }),
      position: 'relative',
      overflow: 'hidden',
    },

    visible: {
      '&::before': {
        content: '""',
        position: 'absolute',
        background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      },

      '&::after': {
        content: '""',
        position: 'absolute',
        background: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        animation: animate ? `${fade} 1500ms linear infinite` : 'none',
        zIndex: 11,
      },
    },
  })
);
