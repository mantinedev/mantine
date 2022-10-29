import type { MantineTheme } from '@mantine/styles';

export function getFontSizeValue(size: any, theme: MantineTheme) {
  return theme.fn.size({ size, sizes: theme.fontSizes });
}
