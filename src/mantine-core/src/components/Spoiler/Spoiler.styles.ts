import { createMemoStyles, MantineTheme } from '../../theme';

interface SpoilerStyles {
  theme: MantineTheme;
  transitionDuration: number;
}

export default createMemoStyles({
  control: {},

  root: {
    position: 'relative',
  },

  content: ({ transitionDuration }: SpoilerStyles) => ({
    overflow: 'hidden',
    transitionProperty: 'max-height',
    transitionTimingFunction: 'ease',
    transitionDuration: transitionDuration || 0,
  }),
});
