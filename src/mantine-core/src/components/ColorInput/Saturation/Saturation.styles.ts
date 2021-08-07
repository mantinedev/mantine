import { createMemoStyles, MantineTheme } from '../../../theme';

interface SaturationStyles {
  theme: MantineTheme;
}

export const THUMB_SIZE = 12;

export default createMemoStyles({
  saturationWrapper: {
    position: 'relative',
    height: 200,
  },

  saturationOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  saturationThumb: ({ theme }: SaturationStyles) => ({
    border: `2px solid ${theme.white}`,
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE,
    boxShadow: theme.shadows.sm,
  }),
});
