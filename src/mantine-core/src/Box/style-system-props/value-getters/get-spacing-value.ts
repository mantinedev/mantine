import type { MantineTheme } from '@mantine/styles';

const NEGATIVE_VALUES = ['-xs', '-sm', '-md', '-lg', '-xl'];

export function getSpacingValue(size: any, theme: MantineTheme) {
  if (NEGATIVE_VALUES.includes(size)) {
    return theme.fn.size({ size: size.replace('-', ''), sizes: theme.spacing }) * -1;
  }

  return theme.fn.size({ size, sizes: theme.spacing });
}
