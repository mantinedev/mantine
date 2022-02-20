import { createStyles, MantineNumberSize } from '@mantine/styles';

export interface CarouselItemStylesParams {
  padding: MantineNumberSize;
}

export default createStyles((theme, { padding }: CarouselItemStylesParams) => ({
  carouselItem: {
    display: 'block',
    position: 'relative',
    overflow: 'hidden',
    minWidth: '100%',
    paddingLeft: theme.fn.size({ size: padding, sizes: theme.spacing }),
  },
}));
