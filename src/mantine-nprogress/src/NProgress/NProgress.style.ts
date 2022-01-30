import { createStyles, MantineColor } from '@mantine/styles';

interface NProgressStyles {
  progress: number;
  transitionDuration: number;
  color: MantineColor;
  size: number;
  transition: string;
}

export default createStyles(
  (theme, { progress, transitionDuration, color, size, transition }: NProgressStyles) => ({
    container: {
      transitionDuration: `${transitionDuration}ms`,
      transitionTimingFunction: transition,
      top: 0,
      left: 0,
      zIndex: 999999,
      width: `${progress}%`,
      height: size,
      backgroundColor: theme.fn.themeColor(color, 5),

      '@media (prefers-reduced-motion)': {
        transitionDuration: '0ms',
      },
    },
  })
);
