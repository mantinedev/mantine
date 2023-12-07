import { MantineTheme } from '../../../../MantineProvider';

export function lineHeightResolver(value: unknown, theme: MantineTheme) {
  if (typeof value === 'string' && value in theme.lineHeights) {
    return `var(--mantine-line-height-${value})`;
  }

  return value;
}
