import { MantineTheme } from '../../../../MantineProvider';
import { rem } from '../../../../utils';

export function radiusResolver(value: unknown, theme: MantineTheme) {
  if (typeof value === 'string' && value in theme.radius) {
    return `var(--mantine-radius-${value})`;
  }

  if (typeof value === 'number') {
    return rem(value);
  }

  if (typeof value === 'string') {
    return rem(value);
  }

  return value;
}
