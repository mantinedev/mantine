import { createMemoStyles } from '@mantine/theme';
import { MantineTheme, getSizeValue, MantineNumberSize, getFocusStyles } from '@mantine/theme';

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
  }),
});
