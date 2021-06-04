import { createMemoStyles, MantineTheme } from '../../theme';

interface SpoilerStylesProps {
  theme: MantineTheme;
  transitionDuration: number;
}

export default createMemoStyles({
  root: {
    position: 'relative',
  },

  content: ({ transitionDuration }: SpoilerStylesProps) => ({
    overflow: 'hidden',
    transitionProperty: 'max-height',
    transitionTimingFunction: 'ease',
    transitionDuration: transitionDuration || 0,
  }),
});
