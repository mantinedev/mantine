import { createStyles, MantineNumberSize } from '@mantine/styles';

export interface OverlayStylesParams {
  color: string;
  opacity: number;
  blur: number;
  radius: MantineNumberSize;
  gradient: string;
  fixed: boolean;
}

export default createStyles(
  (theme, { color, opacity, blur, radius, gradient, fixed }: OverlayStylesParams) => ({
    root: {
      position: fixed ? 'fixed' : 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: gradient ? undefined : theme.fn.rgba(color, opacity),
      backgroundImage: gradient,
      backdropFilter: blur ? `blur(${blur}px)` : undefined,
      borderRadius: theme.fn.radius(radius),

      '&[data-center]': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  })
);
