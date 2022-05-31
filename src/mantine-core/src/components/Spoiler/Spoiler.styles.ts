import { createStyles } from '@mantine/styles';

export interface SpoilerStylesParams {
  transitionDuration: number;
}

export default createStyles((theme, { transitionDuration }: SpoilerStylesParams) => ({
  control: {},

  root: {
    position: 'relative',
  },

  content: {
    overflow: 'hidden',
    transitionProperty: 'max-height',
    transitionTimingFunction: theme.transitionTimingFunction,
    transitionDuration: `${transitionDuration}ms`,

    '@media (prefers-reduced-motion)': {
      transitionDuration: '0ms',
    },
  },
}));
