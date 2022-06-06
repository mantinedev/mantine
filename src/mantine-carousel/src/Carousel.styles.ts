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
        zIndex: 1,
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
        opacity: theme.colorScheme === 'dark' ? 0.65 : 0.85,
        border: `1px solid ${theme.colors.gray[3]}`,
        transition: `opacity 150ms ${theme.transitionTimingFunction}`,
        ...theme.fn.hover({ opacity: 1 }),

        '&[data-inactive]': {
          opacity: 0,
          cursor: 'default',
        },

        '&:active': theme.activeStyles,
      },

      indicators: {
        position: 'absolute',
        bottom: horizontal ? theme.spacing.md : 0,
        top: horizontal ? undefined : 0,
        left: horizontal ? 0 : undefined,
        right: horizontal ? 0 : theme.spacing.md,
        display: 'flex',
        flexDirection: horizontal ? 'row' : 'column',
        justifyContent: 'center',
        gap: 8,
        pointerEvents: 'none',
      },

      indicator: {
        pointerEvents: 'all',
        width: horizontal ? 25 : 5,
        height: horizontal ? 5 : 25,
        borderRadius: 10000,
        backgroundColor: theme.white,
        boxShadow: theme.shadows.sm,
        opacity: 0.6,
        transition: `opacity 150ms ${theme.transitionTimingFunction}`,

        '&[data-active]': {
          opacity: 1,
        },
      },
    };
  }
);
