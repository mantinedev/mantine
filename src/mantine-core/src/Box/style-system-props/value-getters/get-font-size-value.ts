import { MantineTheme, getSize } from '@mantine/styles';

export function getFontSizeValue(size: any, theme: MantineTheme) {
  return getSize({ size, sizes: theme.fontSizes });
}
