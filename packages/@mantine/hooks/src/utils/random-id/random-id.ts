export function randomId(prefix = 'mantine-'): string {
  return `${prefix}${Math.random().toString(36).slice(2, 11)}`;
}
