import { createMemoStyles, MantineTheme } from '../../../theme';

interface SaturationStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  saturation: ({ theme }: SaturationStyles) => ({
    position: 'relative',
    height: 120,
    borderRadius: theme.radius.sm,
    margin: 7,
  }),

  saturationOverlay: ({ theme }: SaturationStyles) => ({
    position: 'absolute',
    borderRadius: theme.radius.sm,
    top: -7,
    left: -7,
    right: -7,
    bottom: -7,
  }),
});
