import { createUseStyles } from 'react-jss';
import { MantineTheme, getSizeValue, MantineNumberSize } from '@mantine/theme';

interface ColorSwatchStylesProps {
  theme: MantineTheme;
  radius: MantineNumberSize;
}

export default createUseStyles({
  colorSwatch: ({ theme, radius }: ColorSwatchStylesProps) => ({
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  }),
});
