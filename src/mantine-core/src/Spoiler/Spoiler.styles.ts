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
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    transitionProperty: 'max-height',
    transitionTimingFunction: theme.transitionTimingFunction,
    transitionDuration: `${transitionDuration}ms`,

    '@media (prefers-reduced-motion)': {
      transitionDuration: theme.respectReducedMotion ? '0ms' : undefined,
    },
  },
}));
