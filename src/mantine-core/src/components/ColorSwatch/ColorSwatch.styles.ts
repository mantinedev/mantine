import {
  createMemoStyles,
  MantineTheme,
  getSizeValue,
  MantineNumberSize,
  getFocusStyles,
} from '../../theme';

interface ColorSwatchStylesProps {
  theme: MantineTheme;
  radius: MantineNumberSize;
}

export default createMemoStyles({
  colorSwatch: ({ theme, radius }: ColorSwatchStylesProps) => ({
    ...getFocusStyles(theme),
    border: 0,
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    appearance: 'none',
    WebkitAppearance: 'none',
    padding: 0,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
