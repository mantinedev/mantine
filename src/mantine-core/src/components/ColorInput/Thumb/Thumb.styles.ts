import { createMemoStyles, MantineTheme } from '../../../theme';

interface ThumbStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  thumb: ({ theme }: ThumbStyles) => ({
    overflow: 'hidden',
    boxSizing: 'border-box',
    position: 'absolute',
    border: `2px solid ${theme.white}`,
    boxShadow: theme.shadows.sm,
  }),

  thumbOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  thumbCheckers: {
    backgroundImage:
      'linear-gradient(45deg, #eee 25%, transparent 25%), linear-gradient(-45deg, #eee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eee 75%), linear-gradient(-45deg, #fff 75%, #eee 75%)',
    backgroundSize: '8px 8px',
    backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
  },
});
