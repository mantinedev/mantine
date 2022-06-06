import { createStyles, MantineNumberSize } from '@mantine/core';

export interface CarouselStylesParams {
  controlSize: number;
  controlsOffset: MantineNumberSize;
}

export default createStyles((theme, { controlSize, controlsOffset }: CarouselStylesParams) => ({
  root: {
    overflow: 'hidden',
    position: 'relative',
  },

  container: {
    display: 'flex',
  },

  viewport: {},

  controls: {
    position: 'absolute',
    zIndex: 10,
    left: 0,
    right: 0,
    top: `calc(50% - ${controlSize / 2}px)`,
    display: 'flex',
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
}));
