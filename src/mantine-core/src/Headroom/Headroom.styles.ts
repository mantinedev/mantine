import { createStyles } from '@mantine/styles';

export interface HeadroomStylesParams {
  isPinned: boolean;
  height: number;
}

export default createStyles((_, { isPinned, height }: HeadroomStylesParams) => ({
  root: {
    position: 'sticky',
    top: 0,
  },
  header: {
    width: '100%',
    transition: 'all 0.4s',
    transform: `translate3d(0,${isPinned ? 0 : -height}px,0)`,
    height,
  },
}));
