import { createStyles, MantineNumberSize } from '@mantine/core';

export interface CarouselSlideStylesParams {
  size: string | number;
  gap: MantineNumberSize;
}

export default createStyles((theme, { size, gap }: CarouselSlideStylesParams) => ({
  slide: {
    position: 'relative',
    flex: `0 0 ${typeof size === 'number' ? `${size}px` : size}`,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 200,
    marginRight: theme.fn.size({ size: gap, sizes: theme.spacing }),
  },
}));
