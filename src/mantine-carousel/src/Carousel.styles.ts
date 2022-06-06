import { createStyles, MantineNumberSize } from '@mantine/core';

export interface CarouselStylesParams {
  controlSize: number;
  controlsOffset: MantineNumberSize;
  orientation: 'vertical' | 'horizontal';
  height: React.CSSProperties['height'];
}

export default createStyles(
  (theme, { controlSize, controlsOffset, orientation, height }: CarouselStylesParams) => {
    const horizontal = orientation === 'horizontal';
    return {
      root: {
        overflow: 'hidden',
        position: 'relative',
      },

      container: {
        display: 'flex',
        flexDirection: horizontal ? 'row' : 'column',
        height,
      },

      viewport: {},

      controls: {
        position: 'absolute',
        zIndex: 10,
        left: horizontal ? 0 : `calc(50% - ${controlSize / 2}px)`,
        right: horizontal ? 0 : undefined,
        top: horizontal ? `calc(50% - ${controlSize / 2}px)` : 0,
        bottom: horizontal ? undefined : 0,
        display: 'flex',
        flexDirection: horizontal ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: horizontal
          ? theme.fn.size({ size: controlsOffset, sizes: theme.spacing })
          : undefined,
        paddingRight: horizontal
          ? theme.fn.size({ size: controlsOffset, sizes: theme.spacing })
          : undefined,
        paddingTop: !horizontal
          ? theme.fn.size({ size: controlsOffset, sizes: theme.spacing })
          : undefined,
        paddingBottom: !horizontal
          ? theme.fn.size({ size: controlsOffset, sizes: theme.spacing })
          : undefined,
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
    };
  }
);
