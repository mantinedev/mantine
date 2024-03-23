import { MantineTheme } from '../../../../MantineProvider';

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export function lineHeightResolver(value: unknown, theme: MantineTheme) {
  if (typeof value === 'string' && value in theme.lineHeights) {
    return `var(--mantine-line-height-${value})`;
  }

  if (typeof value === 'string' && headings.includes(value)) {
    return `var(--mantine-${value}-line-height)`;
  }

  return value;
}
