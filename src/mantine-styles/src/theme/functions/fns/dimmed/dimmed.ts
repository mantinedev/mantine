import type { MantineThemeBase } from '../../../types';

export function dimmed(theme: MantineThemeBase) {
  return () => (theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6]);
}
