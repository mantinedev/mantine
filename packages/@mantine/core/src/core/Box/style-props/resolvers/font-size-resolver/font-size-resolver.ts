import { MantineTheme } from '../../../../MantineProvider';
import { rem } from '../../../../utils';

export function fontSizeResolver(value: unknown, theme: MantineTheme) {
  if (typeof value === 'string' && value in theme.fontSizes) {
    return `var(--mantine-font-size-${value})`;
  }

  if (typeof value === 'number') {
    return rem(value);
  }

  if (typeof value === 'string') {
    return rem(value);
  }

  return value;
}
