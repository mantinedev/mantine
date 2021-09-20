import { createStyles } from '@mantine/styles';

interface SpoilerStyles {
  transitionDuration: number;
}

export default createStyles((_theme, { transitionDuration }: SpoilerStyles) => ({
  control: {},

  root: {
    position: 'relative',
  },

  content: {
    overflow: 'hidden',
    transitionProperty: 'max-height',
    transitionTimingFunction: 'ease',
    transitionDuration: `${transitionDuration || 0}ms`,
  },
}));
