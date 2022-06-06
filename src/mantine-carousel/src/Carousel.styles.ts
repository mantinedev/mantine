import { createStyles, MantineNumberSize } from '@mantine/core';

export interface CarouselStylesParams {
  controlSize: number;
  controlsOffset: MantineNumberSize;
  orientation: 'vertical' | 'horizontal';
}

export default createStyles(
  (theme, { controlSize, controlsOffset, orientation }: CarouselStylesParams) => ({
    root: {
      overflow: 'hidden',
      position: 'relative',
    },

    container: {
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
    },

    viewport: {},

    controls: {
      position: 'absolute',
      zIndex: 10,
      left: orientation === 'horizontal' ? 0 : `calc(50% - ${controlSize / 2}px)`,
      right: orientation === 'horizontal' ? 0 : undefined,
      top: orientation === 'horizontal' ? undefined : `calc(50% - ${controlSize / 2}px)`,
      bottom: orientation === 'horizontal' ? undefined : 0,
      display: 'flex',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: theme.fn.size({ size: controlsOffset, sizes: theme.spacing }),
      paddingRight: theme.fn.size({ size: controlsOffset, sizes: theme.spacing }),
      pointerEvents: 'none',
    },

    control: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: controlSize,
      minHeight: controlSize,
      borderRadius: controlSize,
      pointerEvents: 'all',
      backgroundColor: theme.white,
      color: theme.black,
      boxShadow: theme.shadows.md,
      ...theme.fn.hover({ backgroundColor: theme.colors.gray[0] }),

      '&:active': theme.activeStyles,
    },
  })
);
