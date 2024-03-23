import { MantineTheme } from '../../../../MantineProvider';
import { rem } from '../../../../utils';

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export function fontSizeResolver(value: unknown, theme: MantineTheme) {
  if (typeof value === 'string' && value in theme.fontSizes) {
    return `var(--mantine-font-size-${value})`;
  }

  if (typeof value === 'string' && headings.includes(value)) {
    return `var(--mantine-${value}-font-size)`;
  }

  if (typeof value === 'number') {
    return rem(value);
  }

  if (typeof value === 'string') {
    return rem(value);
  }

  return value;
}
