import { createStyles, MantineNumberSize } from '@mantine/core';
import { CarouselOrientation } from '../types';

export interface CarouselSlideStylesParams {
  size: string | number;
  gap: MantineNumberSize;
  orientation: CarouselOrientation;
  includeGapInSize: boolean;
}

export default createStyles(
  (theme, { size, gap, orientation, includeGapInSize }: CarouselSlideStylesParams) => ({
    slide: {
      position: 'relative',
      flex: `0 0 calc(${typeof size === 'number' ? `${size}px` : size} - ${
        includeGapInSize
          ? theme.fn.size({
              size: gap,
              sizes: theme.spacing,
            }) / 2
          : 0
      }px)`,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      [orientation === 'horizontal' ? 'marginRight' : 'marginBottom']: theme.fn.size({
        size: gap,
        sizes: theme.spacing,
      }),
    },
  })
);
