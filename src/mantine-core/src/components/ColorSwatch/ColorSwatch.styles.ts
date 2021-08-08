import {
  createMemoStyles,
  MantineTheme,
  getSizeValue,
  MantineNumberSize,
  getFocusStyles,
} from '../../theme';

interface ColorSwatchStyles {
  theme: MantineTheme;
  radius: MantineNumberSize;
}

export default createMemoStyles({
  colorSwatch: ({ theme, radius }: ColorSwatchStyles) => ({
    ...getFocusStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    border: 0,
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    appearance: 'none',
    WebkitAppearance: 'none',
    padding: 0,
    position: 'relative',
    overflow: 'hidden',
  }),

  colorOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  children: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  alphaOverlay: ({ theme }: ColorSwatchStyles) => {
    const color = theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3];
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `linear-gradient(45deg, ${color} 25%, transparent 25%), linear-gradient(-45deg, ${color} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${color} 75%), linear-gradient(-45deg, ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      } 75%, ${color} 75%)`,
      backgroundSize: '8px 8px',
      backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
    };
  },
});
