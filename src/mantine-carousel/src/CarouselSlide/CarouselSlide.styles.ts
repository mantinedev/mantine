import { createStyles, MantineNumberSize } from '@mantine/core';
import { CarouselOrientation } from '../types';

export interface CarouselSlideStylesParams {
  size: string | number;
  gap: MantineNumberSize;
  orientation: CarouselOrientation;
}

export default createStyles((theme, { size, gap, orientation }: CarouselSlideStylesParams) => ({
  slide: {
    position: 'relative',
    flex: `0 0 ${typeof size === 'number' ? `${size}px` : size}`,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    [orientation === 'horizontal' ? 'marginRight' : 'marginBottom']: theme.fn.size({
      size: gap,
      sizes: theme.spacing,
    }),
  },
}));
