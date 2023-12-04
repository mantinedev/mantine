import type { MantineColorScheme } from '../theme.types';

export function isMantineColorScheme(value: unknown): value is MantineColorScheme {
  return value === 'auto' || value === 'dark' || value === 'light';
}
